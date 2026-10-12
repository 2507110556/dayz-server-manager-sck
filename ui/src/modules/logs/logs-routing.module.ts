/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { LogsModule } from './logs.module';

/* Containers */
import { SBRouteData } from '../navigation/models';
import { LogsComponent } from './containers/logs/logs.component';
import { LogMonitorComponent } from './components/log-monitor/log-monitor.component';
import { LogTypeEnum } from '../app-common/models';

/* Routes */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [],
        component: LogsComponent,
        data: {
            title: '日志',
            breadcrumbs: [
                {
                    text: '仪表盘',
                    link: '/dashboard',
                },
                {
                    text: '日志',
                    active: true,
                },
            ],
        } as SBRouteData,
        children: [
            {
                path: '',
                redirectTo: 'rpt',
                pathMatch: 'full',
            },
            {
                path: 'rpt',
                canActivate: [],
                component: LogMonitorComponent,
                data: {
                    title: 'RPT 日志',
                    logType: LogTypeEnum.RPT,
                    breadcrumbs: [
                        {
                            text: '仪表盘',
                            link: '/dashboard',
                        },
                        {
                            text: '日志',
                        },
                        {
                            text: 'RPT',
                            active: true,
                        },
                    ],
                } as SBRouteData,
            },
            {
                path: 'adm',
                canActivate: [],
                component: LogMonitorComponent,
                data: {
                    title: 'ADM 日志',
                    logType: LogTypeEnum.ADM,
                    breadcrumbs: [
                        {
                            text: '仪表盘',
                            link: '/dashboard',
                        },
                        {
                            text: '日志',
                        },
                        {
                            text: 'ADM',
                            active: true,
                        },
                    ],
                } as SBRouteData,
            },
            {
                path: 'script',
                canActivate: [],
                component: LogMonitorComponent,
                data: {
                    title: '脚本日志',
                    logType: LogTypeEnum.SCRIPT,
                    breadcrumbs: [
                        {
                            text: '仪表盘',
                            link: '/dashboard',
                        },
                        {
                            text: '日志',
                        },
                        {
                            text: '脚本',
                            active: true,
                        },
                    ],
                } as SBRouteData,
            },
            {
                path: '**',
                redirectTo: 'rpt',
                pathMatch: 'full',
            },
        ],
    },
];

@NgModule({
    imports: [LogsModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class LogsRoutingModule {}
