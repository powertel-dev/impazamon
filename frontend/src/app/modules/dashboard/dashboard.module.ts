import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ChiefTechnicianComponent } from './chief-technician/chief-technician.component';
import { AssignedFaultComponent } from './chief-technician/assigned-fault/assigned-fault.component';
import { FaultsStatusComponent } from './chief-technician/faults-status/faults-status.component';
import { NocComponent } from './noc/noc.component';
import { TechnicianComponent } from './technician/technician.component';
import { CallCenterComponent } from './call-center/call-center.component';
import { TechnicianFaultsComponent } from './technician/technician-faults/technician-faults.component';
import { NocFaultsComponent } from './noc/noc-faults/noc-faults.component';
import { DepartmentFaultsComponent } from './noc/department-faults/department-faults.component';
import { RequestedMaterialsComponent } from './chief-technician/requested-materials/requested-materials.component';
import { RequestedParksComponent } from './chief-technician/requested-parks/requested-parks.component';
import { RequestedPermitsComponent } from './noc/requested-permits/requested-permits.component';
import { RequestedToParkComponent } from './noc/requested-to-park/requested-to-park.component';
import { AssessFaultsComponent } from './noc/assess-faults/assess-faults.component';


@NgModule({
  declarations: [

  
    ChiefTechnicianComponent,
        AssignedFaultComponent,
        FaultsStatusComponent,
        NocComponent,
        TechnicianComponent,
        CallCenterComponent,
        TechnicianFaultsComponent,
        NocFaultsComponent,
        DepartmentFaultsComponent,
        RequestedMaterialsComponent,
        RequestedParksComponent,
        RequestedPermitsComponent,
        RequestedToParkComponent,
        AssessFaultsComponent,

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgbModule,
    DataTablesModule
  ]
})
export class DashboardModule { }
