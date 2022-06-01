import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { DashboardModule } from './dashboard/dashboard.module';
import { DataTablesModule } from 'angular-datatables';
import { ModulesRoutingModule } from './modules-routing.module';

import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FaultsComponent } from './faults/faults.component';
import { FaultIntakeComponent } from './faults/fault-intake/fault-intake.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PermitsComponent } from './permits/permits.component';
import { EditFaultComponent } from './faults/edit-fault/edit-fault.component';
import { ViewFaultComponent } from './faults/view-fault/view-fault.component';
import { AssessmentFaultComponent } from './faults/assessment-fault/assessment-fault.component';
import { RequestMaterialComponent } from './faults/request-material/request-material.component';
import { AssessmentChecklistComponent } from './faults/assessment-checklist/assessment-checklist.component';
import { CompletionChecklistComponent } from './faults/completion-checklist/completion-checklist.component';
import { RequestPermitComponent } from './faults/request-permit/request-permit.component';
import { AssignTechnicianComponent } from './faults/assign-technician/assign-technician.component';
import { ClearFaultComponent } from './faults/clear-fault/clear-fault.component';
import { ReferFaultComponent } from './faults/refer-fault/refer-fault.component';
import { ParkFaultComponent } from './faults/park-fault/park-fault.component';
import { FilterPipe } from '../pipes/filter.pipe';
import { FilterSearchPipe } from '../pipes/filter-search.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RemarksComponent } from './faults/remarks/remarks.component';


@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    TopbarComponent,
    DashboardComponent,
    FaultsComponent,
    FaultIntakeComponent,
    PermitsComponent,
    EditFaultComponent,
    ViewFaultComponent,
    AssessmentFaultComponent,
    RequestMaterialComponent,
    AssessmentChecklistComponent,
    CompletionChecklistComponent,
    RequestPermitComponent,
    AssignTechnicianComponent,
    ClearFaultComponent,
    ReferFaultComponent,
    ParkFaultComponent,
    RemarksComponent,
    FilterPipe,
    FilterSearchPipe

  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    NgbModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    DashboardModule,
    DataTablesModule,
    FormsModule,
    Ng2SearchPipeModule
  ]
})
export class ModulesModule { }
