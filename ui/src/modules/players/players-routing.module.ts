/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { PlayersModule } from './players.module';
import { PlayersComponent } from './containers/players/players.component';
import { SBRouteData } from '../navigation/models';

/* Routes */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [],
        component: PlayersComponent,
        data: {
            title: '玩家',
            breadcrumbs: [
                {
                    text: '仪表盘',
                    link: '/dashboard',
                },
                {
                    text: '玩家',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
];

@NgModule({
    imports: [PlayersModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class PlayersRoutingModule {}
