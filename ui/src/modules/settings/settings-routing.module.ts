/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { SettingsModule } from './settings.module';

import { SBRouteData } from '../navigation/models';
import { SettingsComponent } from './containers/settings/settings.component';

/* Routes */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [],
        component: SettingsComponent,
        data: {
            title: '设置',
            breadcrumbs: [
                {
                    text: '仪表盘',
                    link: '/dashboard',
                },
                {
                    text: '设置',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
];

@NgModule({
    imports: [SettingsModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class SettingsRoutingModule {}
