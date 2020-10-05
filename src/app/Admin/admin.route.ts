import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admindashboard.component/admin-dashboard.component';

const adminRouterConfig: Routes = [
    {path: '', component: AdminDashboardComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(adminRouterConfig)
    ],
    exports: [RouterModule]
})

export class AdminRoutingModule {}