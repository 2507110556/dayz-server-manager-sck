/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '../navigation/models';

/* Module */
import { ErrorModule } from './error.module';
import { Error401Component } from './containers/error-401/error-401.component';
import { Error404Component } from './containers/error-404/error-404.component';
import { Error500Component } from './containers/error-500/error-500.component';

/* Routes */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '404',
    },
    {
        path: '401',
        canActivate: [],
        component: Error401Component,
        data: {
            title: '错误 401',
        } as SBRouteData,
    },
    {
        path: '404',
        canActivate: [],
        component: Error404Component,
        data: {
            title: '错误 404',
        } as SBRouteData,
    },
    {
        path: '500',
        canActivate: [],
        component: Error500Component,
        data: {
            title: '错误 500',
        } as SBRouteData,
    },
    {
        path: '**',
        pathMatch: 'full',
        component: Error404Component,
    },
];

@NgModule({
    imports: [ErrorModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class ErrorRoutingModule {}
