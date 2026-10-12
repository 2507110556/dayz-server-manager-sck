/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { MapModule } from './map.module';
import { MapComponent } from './containers/map/map.component';
import { SBRouteData } from '../navigation/models';
import { MapLootComponent } from './containers/map/map-loot.component';

/* Routes */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [],
        component: MapComponent,
        data: {
            title: '地图',
            breadcrumbs: [
                {
                    text: '仪表盘',
                    link: '/dashboard',
                },
                {
                    text: '地图',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
    {
        path: 'maploot',
        canActivate: [],
        component: MapLootComponent,
        data: {
            title: '地图战利品',
            breadcrumbs: [
                {
                    text: '仪表盘',
                    link: '/dashboard',
                },
                {
                    text: '地图战利品',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
];

@NgModule({
    imports: [MapModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class MapRoutingModule {}
