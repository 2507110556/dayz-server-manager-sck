/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { FilesModule } from './files.module';

/* Containers */
import { SBRouteData } from '../navigation/models';
import { TypesComponent } from './containers/types/types.component';

/* Routes */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'types',
    },
    {
        path: 'types',
        canActivate: [],
        component: TypesComponent,
        data: {
            title: '文件',
            breadcrumbs: [
                {
                    text: '仪表盘',
                    link: '/dashboard',
                },
                {
                    text: '文件',
                    link: '/files',
                },
                {
                    text: '类型',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'types',
    },
];

@NgModule({
    imports: [FilesModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class FilesRoutingModule {}
