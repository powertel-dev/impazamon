import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallCenterComponent } from './dashboard/call-center/call-center.component';
import { AssignedFaultComponent } from './dashboard/chief-technician/assigned-fault/assigned-fault.component';
import { ChiefTechnicianComponent } from './dashboard/chief-technician/chief-technician.component';
import { RequestedParksComponent } from './dashboard/chief-technician/requested-parks/requested-parks.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AssessFaultsComponent } from './dashboard/noc/assess-faults/assess-faults.component';
import { DepartmentFaultsComponent } from './dashboard/noc/department-faults/department-faults.component';
import { NocFaultsComponent } from './dashboard/noc/noc-faults/noc-faults.component';
import { NocComponent } from './dashboard/noc/noc.component';
import { RequestedPermitsComponent } from './dashboard/noc/requested-permits/requested-permits.component';
import { RequestedToParkComponent } from './dashboard/noc/requested-to-park/requested-to-park.component';
import { TechnicianComponent } from './dashboard/technician/technician.component';
import { AssessmentFaultComponent } from './faults/assessment-fault/assessment-fault.component';
import { AssignTechnicianComponent } from './faults/assign-technician/assign-technician.component';
import { ClearFaultComponent } from './faults/clear-fault/clear-fault.component';
import { EditFaultComponent } from './faults/edit-fault/edit-fault.component';
import { FaultIntakeComponent } from './faults/fault-intake/fault-intake.component';
import { FaultsComponent } from './faults/faults.component';
import { ParkFaultComponent } from './faults/park-fault/park-fault.component';
import { ReferFaultComponent } from './faults/refer-fault/refer-fault.component';
import { RemarksComponent } from './faults/remarks/remarks.component';
import { ViewFaultComponent } from './faults/view-fault/view-fault.component';
import { LayoutComponent } from './layout/layout.component';
import { PermitsComponent } from './permits/permits.component';

const routes: Routes = [
    {path:'', component: LayoutComponent,
      children:[
        /***Dashboard Routes */
        {path:'noc', component: NocComponent,
        children:[
          {path:'view/:faultId', component: ViewFaultComponent,
          children:[
            {path:'remarks/:faultId', component: RemarksComponent}
          ]},
        ]},
        {path:'noc-myfaults',component: NocFaultsComponent,
        children:[
          {path:'view/:faultId', component: ViewFaultComponent,
          children:[
            {path:'remarks/:faultId', component: RemarksComponent}
          ]},
          {path:'refer/:faultId',component:ReferFaultComponent},
          {path:'clear/:faultId',component:ClearFaultComponent},
        ]},
        {path:'noc-department', component:DepartmentFaultsComponent,
        children:[
          {path:'view/:faultId', component: ViewFaultComponent,
          children:[
            {path:'remarks/:faultId', component: RemarksComponent}
          ]},
        ]},
        {path:'assigned-faults', component:AssignedFaultComponent},
        {path:'request-to-park', component: RequestedToParkComponent},
        {path:'request-permit', component: RequestedPermitsComponent},
        {path:'assess-faults', component: AssessFaultsComponent,
        children:[
          {path:'view/:faultId', component: ViewFaultComponent,
          children:[
            {path:'remarks/:faultId', component: RemarksComponent}
          ]},
          {path:'assess/:faultId', component: AssessmentFaultComponent},
        ]},
        {path:'chief-tech', component: ChiefTechnicianComponent},
        {path:'technician', component: TechnicianComponent},
        {path:'call-center', component: CallCenterComponent},

        /***Faults Routes Component */
        {path:'faults', component: FaultsComponent,
        children:[
          {path:'remarks', component: RemarksComponent},
          {path:'create', component: FaultIntakeComponent},
          {path:'edit/:faultId', component:EditFaultComponent},
          {path:'view/:faultId', component: ViewFaultComponent,
          children:[
            {path:'remarks/:faultId', component: RemarksComponent}
          ]},
          {path:'assess/:faultId', component: AssessmentFaultComponent},
        ]},
        {path:'permits', component: PermitsComponent,
        children:[
          {path:'view/:faultId', component: ViewFaultComponent,
          children:[
            {path:'remarks/:faultId', component: RemarksComponent}
          ]},
          {path:'assess/:faultId', component: AssessmentFaultComponent},
        ]},
        {path:'', redirectTo: 'noc', pathMatch: 'full'},
      ],
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
