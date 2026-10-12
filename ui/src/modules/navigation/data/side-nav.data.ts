import { SideNavItems, SideNavSection } from '../models';

export const sideNavSections: SideNavSection[] = [
    {
        text: '核心',
        items: ['dashboard'],
    },
    {
        text: '详情',
        items: [
            'system',
            'players',
            'audit',
            'logs',
            'maintenance',
            'settings',
            'map',
            'maploot',
        ],
    },
    {
        text: '文件',
        items: [
            'types',
        ],
    },
];

export const sideNavItems: SideNavItems = {
    dashboard: {
        icon: 'tachometer-alt',
        text: '仪表盘',
        link: '/dashboard',
    },
    system: {
        icon: 'chart-area',
        text: '系统',
        link: '/dashboard/system',
    },
    players: {
        icon: 'user',
        text: '玩家',
        link: '/dashboard/players',
    },
    audit: {
        icon: 'exclamation-triangle',
        text: '审计',
        link: '/dashboard/audit',
    },
    logs: {
        icon: 'clipboard-list',
        text: '日志',
        link: '/dashboard/logs',
    },
    maintenance: {
        icon: 'tools',
        text: '维护',
        link: '/dashboard/maintenance',
    },
    settings: {
        icon: 'cogs',
        text: '设置',
        link: '/dashboard/settings',
    },
    map: {
        icon: 'map',
        text: '地图',
        link: '/dashboard/map',
    },
    maploot: {
        icon: 'map',
        text: '地图战利品',
        link: '/dashboard/map/maploot',
    },
    types: {
        icon: 'wrench',
        text: '类型',
        link: '/dashboard/files/types',
    },
};
