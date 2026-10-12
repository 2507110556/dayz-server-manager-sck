import { Component, OnInit } from '@angular/core';
import { MaintenanceService } from '../../services/maintenance.service';

@Component({
    selector: 'sb-maintenance',
    templateUrl: './maintenance.component.html',
    styleUrls: ['maintenance.component.scss'],
})
export class MaintenanceComponent implements OnInit {

    public outcomeBadge?: {
        message: string;
        success: boolean;
    };

    public constructor(
        private maintenance: MaintenanceService,
    ) {}

    public ngOnInit(): void {
        // ignore
    }

    private exactBooleanParse(val?: string): boolean | undefined {
        val = val + '';
        if (val === 'true') {
            return true;
        } else if (val === 'false') {
            return false;
        } else {
            return undefined;
        }
    }

    public async updateServer(validate?: string): Promise<void> {
        const success = await this.maintenance.updateServer(this.exactBooleanParse(validate));
        if (success) {
            this.outcomeBadge = {
                message: '服务器更新成功',
                success: true,
            };
        } else {
            this.outcomeBadge = {
                message: '服务器更新失败',
                success: false,
            };
        }
    }

    public async updateMods(validate?: string, force?: string): Promise<void> {
        const success = await this.maintenance.updateMods(this.exactBooleanParse(validate), this.exactBooleanParse(force));
        if (success) {
            this.outcomeBadge = {
                message: '模组更新成功',
                success: true,
            };
        } else {
            this.outcomeBadge = {
                message: '模组更新失败',
                success: false,
            };
        }
    }

    public async createBackup(): Promise<void> {
        const success = await this.maintenance.createBackup();
        if (success) {
            this.outcomeBadge = {
                message: '备份创建成功',
                success: true,
            };
        } else {
            this.outcomeBadge = {
                message: '备份创建失败',
                success: false,
            };
        }
    }

    public async lockServer(): Promise<void> {
        const success = await this.maintenance.lockServer();
        if (success) {
            this.outcomeBadge = {
                message: '服务器锁定成功',
                success: true,
            };
        } else {
            this.outcomeBadge = {
                message: '服务器锁定失败',
                success: false,
            };
        }
    }

    public async unlockServer(): Promise<void> {
        const success = await this.maintenance.unlockServer();
        if (success) {
            this.outcomeBadge = {
                message: '服务器解锁成功',
                success: true,
            };
        } else {
            this.outcomeBadge = {
                message: '服务器解锁失败',
                success: false,
            };
        }
    }

    public async lockRestarts(): Promise<void> {
        const success = await this.maintenance.lockRestarts();
        if (success) {
            this.outcomeBadge = {
                message: '服务器重启锁定成功',
                success: true,
            };
        } else {
            this.outcomeBadge = {
                message: '服务器重启锁定失败',
                success: false,
            };
        }
    }

    public async unlockRestarts(): Promise<void> {
        const success = await this.maintenance.unlockRestarts();
        if (success) {
            this.outcomeBadge = {
                message: '服务器重启解锁成功',
                success: true,
            };
        } else {
            this.outcomeBadge = {
                message: '服务器重启解锁失败',
                success: false,
            };
        }
    }

    public async restartServer(force?: boolean): Promise<void> {
        const success = await this.maintenance.restartServer(force);
        if (success) {
            this.outcomeBadge = {
                message: '服务器进程已结束',
                success: true,
            };
        } else {
            this.outcomeBadge = {
                message: '结束服务器进程失败',
                success: false,
            };
        }
    }

    public async kickAll(): Promise<void> {
        const success = await this.maintenance.kickAll();
        if (success) {
            this.outcomeBadge = {
                message: '已踢出所有玩家',
                success: true,
            };
        } else {
            this.outcomeBadge = {
                message: '踢出所有玩家失败',
                success: false,
            };
        }
    }

    public async shutdown(): Promise<void> {
        const success = await this.maintenance.shutdown();
        if (success) {
            this.outcomeBadge = {
                message: 'RCON 关机命令执行成功',
                success: true,
            };
        } else {
            this.outcomeBadge = {
                message: 'RCON 关机命令执行失败',
                success: false,
            };
        }
    }

    public async sendMessage(msg: string): Promise<void> {
        if (!msg?.trim()) {
            return;
        }
        const success = await this.maintenance.sendMessage(msg.trim());
        if (success) {
            this.outcomeBadge = {
                message: '全局消息发送成功',
                success: true,
            };
        } else {
            this.outcomeBadge = {
                message: '全局消息发送失败',
                success: false,
            };
        }
    }

}
