import 'reflect-metadata';

/* eslint-disable @typescript-eslint/naming-convention */

export class ServerCfg {

    // 基础

    /**
     * 服务器名称
     *
     * @required
     */
    @Reflect.metadata('config-required', true)
    public hostname: string = '[生存狂] 三图互通 | 搜打撤 | AI | 技能 | 副本';

    /**
     * 连接到服务器所需的密码
     */
    public password: string = '';

    /**
     * 成为服务器管理员所需的密码
     */
    public passwordAdmin: string = '';

    /**
     * 服务器描述，显示在客户端的服务器列表中
     */
    public description: string = '这里是塔科夫模式下的DayZ疫区突围服务器，主图车臣副图冰岛、陨落，获取高级物资撤离回车臣尼亚';

    /**
     * 启用/禁用白名单 (0-1)
     */
    public enableWhitelist: 0 | 1 = 0;

    /**
     * 最大玩家数
     *
     * @required
     */
    @Reflect.metadata('config-required', true)
    public maxPlayers: number = 40;

    /**
     * 校验 .pbo 文件与 .bisign 签名文件是否匹配（仅支持 2）
     *
     * @required
     */
    @Reflect.metadata('config-required', true)
    public verifySignatures: 0 | 1 | 2 = 2;

    /**
     * 启用后，服务器只允许与自身 .exe 版本一致的客户端连接 (0-1)
     */
    public forceSameBuild: 0 | 1 = 1;


    // 语音

    /**
     * 启用/禁用网络语音 (0-1)
     */
    public disableVoN: 0 | 1 = 0;

    /**
     * 网络语音编解码质量，数值越高效果越好 (0-30)
     */
    public vonCodecQuality: number = 20;


    // 服务器标识

    /**
     * 私有服务器的分片标识（六个字母数字字符）
     */
    public shardId: string = '123abc';

    /**
     * Steam 查询端口
     */
    public steamQueryPort: number = 27026;


    // 游戏

    /**
     * 切换玩家第三人称视角 (0-1)
     */
    public disable3rdPerson: 0 | 1 = 0;

    /**
     * 切换准星 (0-1)
     */
    public disableCrosshair: 0 | 1 = 1;

    /**
     * 禁用所有连接服务器的客户端的个人光源
     */
    public disablePersonalLight: 0 | 1 = 1;

    /**
     * 0 为更明亮的夜晚设置，1 为更黑暗的夜晚设置
     */
    public lightingConfig: 0 | 1 = 0;


    // 时间

    /**
     * 服务器的初始游戏内时间。
     * "SystemTime" 表示使用机器本地时间。
     * 也可以设置为 "YYYY/MM/DD/HH/MM" 格式的具体时间，例如 "2015/4/8/17/23"。
     */
    public serverTime: string = '2011/01/11/07/10';

    /**
     * 加速时间 (0-24)
     * 这是游戏内时间的加速倍数。例如设置为 24，游戏时间将比正常快 24 倍，一整天将在一小时内度过。
     */
    public serverTimeAcceleration: number = 5;

    /**
     * 夜间加速 - 数值为倍率 (0.1-64)，并与 serverTimeAcceleration 的值相乘。
     * 例如设置为 4 且 serverTimeAcceleration 设置为 2 时，夜间时间将比正常快 8 倍，整夜约 3 小时度过。
     */
    public serverNightTimeAcceleration: number = 20;

    /**
     * 时间持久化 (0-1)
     * 实际服务器时间会保存到存储中，启用后下一次服务器启动将使用已保存的时间值。
     */
    public serverTimePersistent: 0 | 1 = 0;


    // 网络与性能

    /**
     * Steam 协议最大数据包大小
     */
    public steamProtocolMaxDataSize: number = 4000;

    /**
     * 与游戏服务器通信使用的协议（只能使用 1）
     */
    public guaranteedUpdates: 1 = 1;

    /**
     * 登录过程中并发处理的玩家数量。
     * 可防止大量玩家同时连接时出现严重的性能下降。
     */
    public loginQueueConcurrentPlayers: number = 5;

    /**
     * 登录队列中等待的最大玩家数量
     */
    public loginQueueMaxPlayers: number = 500;


    // 持久化

    /**
     * DayZ 服务器实例 ID，用于标识每台机器上的实例数量及其持久化文件的存储文件夹
     *
     * @required
     */
    @Reflect.metadata('config-required', true)
    public instanceId = 1;

    /**
     * 检查持久化文件是否损坏，并将损坏的文件替换为空白文件 (0-1)
     */
    public storageAutoFix: 0 | 1 = 1;


    // 日志

    /**
     * 记录服务器平均 FPS（单位：秒），需要启用 '-doLogs' 启动参数
     */
    public logAverageFps: number = 30;

    /**
     * 记录服务器内存使用情况（单位：秒），需要启用 '-doLogs' 启动参数
     */
    public logMemory: number = 30;

    /**
     * 记录当前连接的玩家数量（单位：秒），需要启用 '-doLogs' 启动参数
     */
    public logPlayers: number = 30;

    /**
     * 1 - 启用 cfgGameplayFile
     */
    public enableCfgGameplayFile: 0 | 1 = 1;


    /**
     * 服务器启动时加载的任务。<任务名>.<地形名>
     * 原版任务：dayzOffline.chernarusplus
     * DLC 任务：dayzOffline.enoch
     *
     * @required
     */
    @Reflect.metadata('config-required', true)
    public Missions: {
        DayZ: {
            template: string;
        };
    } = {
        DayZ: {
            template: 'dayzOffline.chernarusplus',
        },
    };


}

// eslint-disable-next-line no-shadow
export enum UserLevelEnum {
    admin = 'admin',
    manage = 'manage',
    moderate = 'moderate',
    view = 'view',
}

export type UserLevel = keyof typeof UserLevelEnum;

// eslint-disable-next-line no-shadow
export enum EventTypeEnum {
    restart = 'restart',
    message = 'message',
    kickAll = 'kickAll',
    lock = 'lock',
    unlock = 'unlock',
    backup = 'backup'
}

export type EventType = keyof typeof EventTypeEnum;
/* eslint-enable @typescript-eslint/naming-convention */

export class Event {

    /**
     * Name of the event
     * @required
     */
    public name!: string;

    /**
     * Type of the event
     * Can be one of:
     * 'restart' - restarts the server
     * 'message' - sends a global messages to all players
     * 'kickAll' - kicks all players
     * 'lock' - locks the server (probably not working)
     * 'unlock' - unlocks the server (probably not working)
     *
     * @required
     */
    public type!: EventType;

    /**
     * The cron format of when to execute this action
     * @required
     */
    public cron!: string;

    /**
     * optional params, e.g. the message
     */
    public params?: string[] | null;

}

/* eslint-disable @typescript-eslint/naming-convention */
// eslint-disable-next-line no-shadow
export enum HookTypeEnum {
    beforeStart = 'beforeStart',
    afterStart = 'afterStart',
    missionChanged = 'missionChanged'
}

export type HookType = keyof typeof HookTypeEnum;
/* eslint-enable @typescript-eslint/naming-convention */


export class Hook {

    /**
     * Type of the Hook
     * Can be one of:
     * 'beforeStart' - triggered right before server start
     * 'missionChanged' - triggered after the mission files were changed (i.e. types editor save)
     *
     * @required
     */
    public type!: HookType;

    /**
     * The program/script to call
     * @required
     */
    public program!: string;

    /**
     * optional params for the program
     */
    public params?: string[] | null;

}

export class WorkshopMod {

    public workshopId!: string;

    public name?: string;

    public disabled?: boolean;

}

export type DiscordChannelType =
    'admin' // admin commands are allowed and public as well as private notifications are posted in this channel
    | 'rcon' // rcon relay
    | 'notification' // public server notifications are posted here (i.e. server restart, server update, mod update)
    ;

export class Config {

    /**
     * The instance name of this server
     * @required
     */
    @Reflect.metadata('config-required', true)
    public instanceId: string = 'dayz';

    /**
     * Manager log level
     * 0 - DEBUG - very verbose
     * 1 - INFO - informational logs
     * 2 - IMPORTANT - only important logs
     * 3 - WARN - warning and errors
     * 4 - ERROR - only errors
     */
    public loglevel: number = 1;

    // /////////////////////////// Admins /////////////////////////////////////
    /**
     * The web or discord users allowed to use the web interface or the bot commands and which of them
     *
     * level can be one of:
     *  admin - guess what? ... everything
     *  manage - able to perform management tasks such as restarts and updates (and everything below)
     *  moderate - able to perform moderation tasks such as server messages, kicks and bans (and everything below)
     *  view - able to query the server status and ingame situation (ie. player list, objects, etc)
     *
     * the password is only used for the web interface and API
     * to link users to their discord user, provide the discord username (not the display name), which can be found in discord - settings - my account.
     *
     * example:
     * {
     *     "userId": "admin",
     *     "password": "my-password",
     *     "userLevel": "admin"
     * }
     *
     * @required
     */
    @Reflect.metadata('config-required', true)
    public admins: {
        userId: string;
        userLevel: UserLevel;
        password: string;
    }[] = [
        {
            userId: 'admin',
            userLevel: 'admin',
            password: 'admin',
        },
    ];

    // /////////////////////////// WEB ////////////////////////////////////////
    /**
     * The port of the web interface and REST API
     *
     * If -1 or 0 it will be serverport + 11
     * So if your server runs on 2302, the webport will be 2313
     */
    @Reflect.metadata('config-range', [-1, 65535])
    public webPort: number = 0;

    /**
     * Whether or not to publish the WebUI or not
     *
     * if this is enabled, the webserver host is 0.0.0.0 rather than localhost
     * this can be a security risk, so better leave this turned off if you dont know what this means
     * and use a browser on your server to connect to the web ui via localhost
     *
     * if you want to publish the web ui, it is recommended to use a reverse proxy (such as nginx)
     * and secure the connection to the reverse proxy with a SSL Cert for HTTPS
     * (because this app wont provide HTTPS capabilities)
     */
    public publishWebServer: boolean = false;

    /**
     * The port of the ingame REST API
     *
     * If -1 or 0 it will be serverport + 10
     * So if your server runs on 2302, the webport will be 2312
     */
    @Reflect.metadata('config-range', [-1, 65535])
    public ingameApiPort: number = 0;

    /**
     * Whether or not to publish the Ingame Rest API
     *
     * Same as publish webport but for the Ingame REST API.
     */
    public publishIngameApi: boolean = false;

    /**
     * Alternative host for the Ingame Rest API.
     *
     * Provide "ip:port" to make the addon connect to another Ingame API.
     */
    public ingameApiHostOverride: string | null = null;

    /**
     * Api key for the ingame API.
     * This should be changed as it is the "password" for the ingame API.
     * If you do not set this, it will be randomised on every server manager restart.
     *
     * Only use "a-z", "A-Z", "0-9" and "-".
     * Good: ASDF-1234-asdf-98761234
     * BAD: *asd123!!87928jk,sdf3$
     */
    public ingameApiKey: string = '';

    /**
     * Enable Syberia compatibility.
     */
    public syberiaCompat: boolean = false;

    /**
     * URL to load the map images from.
     *
     * Can also be an object of the following form:
     * {
     *   "fullImage": "https://github.com/Shawminator/DayZeEditor/blob/master/dayzlootmanager/Maps/DeerIsle_Map.png?raw=true",
     *   "worldSize": 16384
     * }
     * fullImage is a link to the image of the map.
     * worldSize is the size of the map in meters. This can usually be found in the map config or by exploring the maximum coordinates ingame before going "out of bounds"
     *
     * Examples:
     *   Chernarus: 15360
     *   Livonia: 12800
     *   DeerIsland: 16384
     *   Namalsk: 12800
     */
    @Reflect.metadata('config-type-skip', true)
    public mapHost: string | any = 'https://mr-guard.de/dayz-maps';

    // /////////////////////////// Discord ////////////////////////////////////

    /**
     * Bot Token for Discord
     * Leave it empty to disable the bot
     */
    public discordBotToken: string = '';

    /**
     * Channels the discord commands will work in
     * by default (if the channel is not listed), only public discord commands are allowed
     *
     * Mode:
     * 'admin' - admin commands are allowed and public as well as private notifications are posted in this channel
     * 'rcon' - rcon relay (rcon messages will be posted there)
     * 'notification' - public server notifications are posted here (i.e. server restart, server update, mod update)
     *
     * Mode can also be a list of modes, i.e.: ['rcon', 'notification']
     */
    public discordChannels: {
        channel: string;
        mode: DiscordChannelType | DiscordChannelType[]
    }[] = [];

    // /////////////////////////// DayZ ///////////////////////////////////////

    /**
     * Path to server
     * Default is current directory (PWD / CWD) + DayZServer
     */
    public serverPath: string = 'DayZServer';

    /**
     * Name of the server exe
     * On Windows default is: "DayZServer_x64.exe"
     * On Linux default is: "DayZServer"
     */
    public serverExe: string = 'DayZServer_x64.exe';

    /**
     * Servers Game Port
     */
    @Reflect.metadata('config-range', [-1, 65535])
    public serverPort: number = 2302;

    /**
     * Path to server cfg
     */
    public serverCfgPath: string = 'serverDZ.cfg';

    /**
     * Path to profiles
     */
    public profilesPath: string = 'profiles';

    /**
     * Path to battleye
     * Only set this if you know what your are doing
     */
    public battleyePath: string = '';

    /**
     * RCon Credentials
     * @required
     */
    @Reflect.metadata('config-required', true)
    public rconPassword: string = 'rcon';

    /**
     * RCon Port as required by DayZ Update 1.13 (https://feedback.bistudio.com/T159179)
     * The default is 2306 to avoid any colissions
     */
    public rconPort: number = 2306;

    /**
     * RCon IP to bind to.
     * Only set this if you have multiple network interfaces and want to useet a specific one.
     */
    public rconIP: string = '';

    /**
     * Use RCon to perform server restarts.
     * Shutdown is potentially more graceful, yet RCon may not work for you.
     * Setting this to false might cause server restarts to fail if the manager is registered as a service.
     * This is a limititation of windows/taskkill as interactive service are not working anymore.
     */
    public useRconToRestart: boolean = true;

    /**
     * Local mods
     * Actual modnames like '@MyAwesomeMod'
     */
    public localMods: string[] = [];

    /**
     * Server mods
     * Actual modnames like '@MyAwesomeMod'
     */
    public serverMods: string [] = [];

    /**
     * Server Startup Param doLogs
     */
    public doLogs: boolean = true;

    /**
     * Server Startup Param adminLog
     */
    public adminLog: boolean = true;

    /**
     * Server Startup Param netLog
     */
    public netLog: boolean = false;

    /**
     * Server Startup Param freezeCheck
     */
    public freezeCheck: boolean = true;

    /**
     * Server Startup Param filePatching
     */
    public filePatching: boolean = false;

    /**
     * Server Startup Param scriptDebug
     */
    public scriptDebug: boolean = true;

    /**
     * Server Startup Param scrAllowFileWrite
     */
    public scrAllowFileWrite: boolean = true;

    /**
     * Server Startup Param limitFps
     */
    public limitFPS: number = -1;

    /**
     * Server Startup Param cpuCount
     */
    public cpuCount: number = -1;

    /**
     * dayzsetting.xml pc maxcores
     */
    public dayzsettingpcmaxcores: number = 2;

    /**
     * dayzsetting.xml pc reservedcores
     */
    public dayzsettingreservedcores: number = 1;

    /**
     * dayzsetting.xml globalqueue
     */
    public dayzsettingglobalqueue: number = 4096;

    /**
     * dayzsetting.xml pc threadqueue
     */
    public dayzsettingthreadqueue: number = 1024;

    /**
     * Server Startup Params (manual)
     */
    public serverLaunchParams: string[] = [];

    /**
     * Time (in ms) between each server check
     */
    public serverProcessPollIntervall: number = 30000;

    /**
     * Disable the server stuck check.
     * The server can enter a "idle state" when no players are connected and the CE idle mode is enabled.
     * To the manager, this looks the same as if a error window is open or the server got stuck.
     * This option can be used to prevent stuck messages on low population servers.
     */
    public disableStuckCheck: boolean = false;

    /**
     * Disable the server monitoring.
     * This option can be used if you start/stop/monitor the server with another program,
     * but also want to use the server manager features such as the WebUI, events, etc.
     */
    public disableServerMonitoring: boolean = false;

    /**
     * Prevents the monitor from restarting the server when its offline.
     * Same logic as locking the sevrer restart from WebUI or via lock file.
     * Can be used to do maintenance without stopping the server manager.
     * Can also be used to include the monitoring features such as stuck check
     * but still using external tools to start/stop/restart the server
     */
    public lockServerRestart: boolean = false;

    /**
     * Prevents the from logging that the sevrer is locked.
     * Enable this if the logs are annoying you or the logfile grows too much.
     */
    public disableServerLockLogs: boolean = false;

    /**
     * Use the experimental server or not
     * Default is false
     */
    public experimentalServer: boolean = false;

    /**
     * DayZ Steam App ID
     * Do not change this unless you know what you are doing.
     */
    public dayzSteamAppId: string = '221100';

    /**
     * DayZ Server Steam App ID
     * Do not change this unless you know what you are doing.
     */
    public dayzServerSteamAppId: string = '223350';

    /**
     * DayZ Experimental Server Steam App ID
     * Do not change this unless you know what you are doing.
     */
    public dayzExperimentalServerSteamAppId: string = '1042420';

    /**
     * whether the prerequisites (runtime libs, tec.) are mandatory.
     * Turn this off if you are sure the requirements for the server are met but not detected.
     */
    public prerequisitesMandatory: boolean = true;

    // /////////////////////////// Backups ////////////////////////////////////////
    /**
     * Path where backups are stored
     * Default is current directory (PWD / CWD) + backups
     *
     * To schedule backups, use the the event scheduler and the event type 'backup'
     *
     * To restore backups:
     * - delete the mpmissions folder in the server folder
     * - go to the backup folder
     * - copy the mpmissions_{date} you want to restore into the server folder
     * - rename the copied folder back to mpmissions
     */
    public backupPath: string = 'backups';

    /**
     * Max age of backups in days
     * Default is one week
     */
    public backupMaxAge: number = 7;

    // /////////////////////////// Steam ////////////////////////////////////////
    /**
     * Path to steam CMD
     * Default is current directory (PWD / CWD) + SteamCMD
     */
    public steamCmdPath: string = 'SteamCMD';

    /**
     * Username for steam CMD
     * @required
     */
    @Reflect.metadata('config-required', true)
    public steamUsername: string = '';

    /**
     * Optional if password is cached (manually logged in once)
     */
    public steamPassword: string = '';

    /**
     * Optional only needed if steam guard is enabled and not cached (manually logged in once)
     * Only EMail Guard Codes can be cached
     */
    public steamGuardCode: string = '';

    /**
     * Path to where the downloaded mods are located (relative or absolute)
     * Default is current directory (PWD / CWD) + Workshop
     *
     * Note: this is the folder that containes: steamapps/workshop/content/221100
     *
     * Note2: we want this to be a folder outside the steamcmd folder
     *  so we can delete the steamcmd folder in case of errors
     */
    public steamWorkshopPath: string = 'Workshop';

    /**
     * Path to where to keep workshop meta data (relative or absolute)
     * Default is current directory (PWD / CWD) + SteamMeta
     *
     * Note: this is the folder that containes steam meta data
     * about your server and mods (i.e. last updates, mod sizes etc.)
     */
    public steamMetaPath: string = 'SteamMeta';

    /**
     * List of Mod IDs (workshop id, not modname!) to be downloaded from steam and used as mods.
     *
     * Can be either a list of strings i.e. ["123456","654321"]
     * or a list of mod descriptors i.e.
     * [
     *   {
     *     "workshopId": "123456",
     *     "name": "MyMod",
     *     "disabled": false
     *   },
     *   {
     *     "workshopId": "654321",
     *     "disabled": true
     *   }
     * ]
     * The fields "name" and "disabled" are optional.
     */
    public steamWsMods: (string | WorkshopMod)[] = [];

    /**
     * List of Mod IDs (workshop id, not modname!) to be downloaded from steam and used as server mods.
     *
     * Can be either a list of strings i.e. ["123456","654321"]
     * or a list of mod descriptors i.e.
     * [
     *   {
     *     "workshopId": "123456",
     *     "name": "MyServerMod",
     *     "disabled": false
     *   },
     *   {
     *     "workshopId": "654321",
     *     "disabled": true
     *   }
     * ]
     * The fields "name" and "disabled" are optional.
     */
    public steamWsServerMods: (string | WorkshopMod)[] = [];

    /**
     * Whether or not to check for mod updates on each server restart
     */
    public updateModsBeforeServerStart: boolean = true;

    /**
     * Whether or not to check for mod updates when the manager is started
     */
    public updateModsOnStartup: boolean = true;

    /**
     * Whether or not to validate the mods files after updates.
     * This can lead to mod files (files inside the mod folder) being reset, after manually editing them.
     * Only disable this, when that happens or you really want to skip validation.
     */
    public validateModsAfterUpdate: boolean = false;

    /**
     * Whether or not to check for server updates on each server restart
     */
    public updateServerBeforeServerStart: boolean = true;

    /**
     * Whether or not to check for server updates when the manager is started
     */
    public updateServerOnStartup: boolean = true;

    /**
     * Whether or not to validate the server files after updates.
     * This can lead to files being reset, after manually editing them.
     * Examples are:
     *   - Mission files inside the default missions dayzOffline.chernarusplus and dayzOffline.enoch
     *   - serverDZ.cfg
     * To avoid this, rename your mission / use a different name for the server cfg.. etc.
     * Only disable this, when you need to use the default names or really want to skip validation.
     */
    public validateServerAfterUpdate: boolean = false;

    /**
     * Whether or not to use hardlink for mods instead of copying them
     */
    public linkModDirs: boolean = false;

    /**
     * Whether to deep compare mods instead of just checking for update timestamps
     */
    public copyModDeepCompare: boolean = false;

    /**
     * How many mods to update at the same time via SteamCMD.
     * Setting this to a too high value will increase the chance to get timeouts.
     * Setting this to a too low value will increase the chance to get rate limited.
     */
    public updateModsMaxBatchSize: number = 5;

    /**
     * Limits the steam cmd mod updates by filesize.
     * SteamCMD often gets timeouts if the total file size of the mods is too large.
     * Setting this to a too high value will increase the chance to get timeouts.
     * Setting this to a too low value will increase the chance to get rate limited.
     * Default is roughly 1GB. Mods larger than that will still be downloaded.
     */
    public updateModsMaxBatchFileSize: number = 1_000_000_000;

    // /////////////////////////// Events ///////////////////////////////////////

    /**
     * Events are actions which can be scheduled to run at a given point in time or frequently
     *
     * Events are defined by:
     * name - string - name of the event
     * cron - string - the cron format of when to execute this action
     * params - string[] - optional params, e.g. the message
    *
    * Types:
     * 'restart' - restarts the server
     * 'message' - sends a global messages to all players
     * 'kickAll' - kicks all players
     * 'lock' - locks the server (probably not working)
     * 'unlock' - unlocks the server (probably not working)
     * 'backup' - creates backup of mpmissions folder
     *
     *
     * CRON - Format:
     * ┌────────────── second (optional)
     * │ ┌──────────── minute
     * │ │ ┌────────── hour
     * │ │ │ ┌──────── day of month
     * │ │ │ │ ┌────── month
     * │ │ │ │ │ ┌──── day of week
     * │ │ │ │ │ │
     * │ │ │ │ │ │
     * * * * * * *
     *
     * Examples:
     *
     * List:
     * '1,4,5 * * * *' - executes every first, fourth and fifth minute (i.e.: ... 15:05, 16:01, 16:04, 16:05, 17:01, 17:04, 17:05 ...)
     * Range:
     * '1-5 * * * *' - executes every 1,2,3,4,5 minute (i.e.: ... 15:05, 16:01, 16:02, 16:03, 16:04, 16:05, 17:01...)
     * Multiples:
     * '0/2 * * * *' - executes every two minutes (i.e.: ... 16:02, 16:04, 16:06, 16:08 ...)
     * Combinations:
     * '1-6/2 * * * *' - executes every two minutes in 1-10 range (i.e.: ... 15:06, 16:02, 16:04, 16:06, 17:02 ...)
     *
     * You can generate and test cron formats with:
     * https://crontab.guru/
     * https://www.freeformatter.com/cron-expression-generator-quartz.html
     * https://cronjob.xyz/
     *
     * Complete example (4h restart with server lock + kick):
     * ```
     * "events": [
     *      {
     *          "name": "Restart every 4 hours",
     *          "type": "restart",
     *          "cron": "0 0,4,8,12,16,20 * * *"
     *      },
     *      {
     *          "name": "Restart Notification (1h)",
     *          "type": "message",
     *          "cron": "0 3,7,11,15,19,23 * * *",
     *          "params": [
     *              "Server restart in 60 minutes"
     *          ]
     *      },
     *      {
     *          "name": "Restart Notification (30m)",
     *          "type": "message",
     *          "cron": "30 3,7,11,15,19,23 * * *",
     *          "params": [
     *              "Server restart in 30 minutes"
     *          ]
     *      },
     *      {
     *          "name": "Restart Notification (15m)",
     *          "type": "message",
     *          "cron": "45 3,7,11,15,19,23 * * *",
     *          "params": [
     *              "Server restart in 15 minutes"
     *          ]
     *      },
     *      {
     *          "name": "Restart Notification (10m)",
     *          "type": "message",
     *          "cron": "50 3,7,11,15,19,23 * * *",
     *          "params": [
     *              "Server restart in 10 minutes"
     *          ]
     *      },
     *      {
     *          "name": "Restart Notification (5m)",
     *          "type": "message",
     *          "cron": "55 0,3,7,11,15,19,23 * * *",
     *          "params": [
     *              "Server restart in 5 minutes. The server is now locked. Please log out."
     *          ]
     *      },
     *      {
     *          "name": "Restart Lock (5m)",
     *          "type": "lock",
     *          "cron": "55 3,7,11,15,19,23 * * *"
     *      },
     *      {
     *          "name": "Restart Kick (2m)",
     *          "type": "kickAll",
     *          "cron": "58 3,7,11,15,19,23 * * *"
     *      }
     *  ],
     */
    public events: Event[] = [];

    /**
     * Time (in ms) between each metric tick (read players, system status, etc.)
     */
    public metricPollIntervall: number = 10000;

    /**
     * Time (in ms) after which metrics will be removed (tick by tick)
     * Default is 30 days
     */
    public metricMaxAge: number = 2_592_000_000;

    // /////////////////////////// Hooks ///////////////////////////////////////
    /**
     * Hooks to define custom behaviour when certain events happen
     *
     * Example:
     * <pre>
     * ...
     * {
     *   "type": "beforeStart",
     *   "program": "path/to/your/script.bat"
     * }
     * ...
     * </pre>
     * or
     * <pre>
     * ...
     * {
     *   "type": "beforeStart",
     *   "program": "cmd.exe",
     *   "params": ["/c", "path/to/your/script.bat"]
     * }
     * ...
     * </pre>
     */
    public hooks: Hook[] = [];

    // /////////////////////////// IngameReport ///////////////////////////////////////
    /**
     * Whether the ingame report is enabled or not
     *
     * Can be disabled if no additional mods should be installed or the mod breaks.
     */
    public ingameReportEnabled: boolean = true;

    /**
     * Enable ingame report expansion compatibility
     *
     * Can be disabled if no additional mods should be installed or the mod breaks.
     */
    public ingameReportExpansionCompat: boolean = true;

    /**
     * Send ingame reports via REST
     *
     * Only enable this, if you know what you are doing.
     */
    public ingameReportViaRest: boolean = false;

    /**
     * Ingame Report Interval.
     */
    public ingameReportIntervall: number = 30.0;

    /**
     * Dump data (weapon, ammo, clothing) as json on startup.
     */
    public dataDump: boolean = false;

    // /////////////////////////// ServerCfg ///////////////////////////////////////
    /**
     * serverCfg
     */
    public serverCfg: ServerCfg = new ServerCfg();

}
