import { Routes } from '@angular/router';
import { OfficerMainComponent } from './main-pages/officer-main/officer-main.component';
import { FamilyManageComponent } from './officer/page/family-manage/family-manage.component';
import { LandingComponent } from './main-pages/landing/landing.component';
import { PersonManageComponent } from './officer/page/person-manage/person-manage.component';
import { AllowanceManageComponent } from './officer/page/allowance-manage/allowance-manage.component';
import { RequestsManageComponent } from './officer/page/requests-manage/requests-manage.component';
import { OfficerDashboardComponent } from './officer/page/officer-dashboard/officer-dashboard.component';

export const routes: Routes = [
    {
        path : 'officer-main',
        component : OfficerMainComponent,
        children : [
            {
                path : 'family-manage',
                component : FamilyManageComponent
            },
            {
                path: 'person-manage',
                component: PersonManageComponent
            },
            {
                path: 'allowance-manage',
                component: AllowanceManageComponent
            },
            {
                path: 'request-manage',
                component: RequestsManageComponent
            },
            {
                path:'officer-dashboard',
                component:OfficerDashboardComponent
            }
        ]
    },
    {
        path: '',
        component:LandingComponent
    },
];
