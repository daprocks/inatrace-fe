import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockProcessingRoutingModule } from './stock-processing-routing.module';
import { StockProcessingTabComponent } from './stock-processing-tab/stock-processing-tab.component';
import { CoreModule } from '../../../core/core.module';
import { ComponentsModule } from '../../../components/components.module';
import { LayoutModule } from '../../../layout/layout.module';
import { SharedModule } from '../../../shared/shared.module';
import { CompanyCommonModule } from '../../company-common/company-common.module';
import { StockCoreModule } from '../stock-core/stock-core.module';
import { StockProcessingOrderDetailsOldComponent } from './stock-processing-order-details-old/stock-processing-order-details-old.component';
import { StockProcessingFacilityListComponent } from './stock-processing-facility-list/stock-processing-facility-list.component';
import { FacilityCardComponent } from './stock-processing-facility-list/facility-card/facility-card.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StockProcessingOrderFieldsComponent } from './stock-processing-order-details/stock-processing-order-fields/stock-processing-order-fields.component';
import { ClipInputTransactionModalComponent } from './stock-processing-order-details/clip-input-transaction-modal/clip-input-transaction-modal.component';
import { StockProcessingOrderDetailsComponent } from './stock-processing-order-details/stock-processing-order-details.component';

@NgModule({
  declarations: [
    StockProcessingTabComponent,
    StockProcessingOrderDetailsOldComponent,
    StockProcessingOrderFieldsComponent,
    StockProcessingFacilityListComponent,
    FacilityCardComponent,
    ClipInputTransactionModalComponent,
    StockProcessingOrderDetailsComponent
  ],
  imports: [
    CommonModule,
    StockProcessingRoutingModule,
    CoreModule,
    ComponentsModule,
    LayoutModule,
    SharedModule,
    CompanyCommonModule,
    StockCoreModule,
    NgbDropdownModule,
    FontAwesomeModule
  ]
})
export class StockProcessingModule { }
