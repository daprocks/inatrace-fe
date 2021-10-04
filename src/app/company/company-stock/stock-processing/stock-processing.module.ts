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

@NgModule({
  declarations: [StockProcessingTabComponent],
  imports: [
    CommonModule,
    StockProcessingRoutingModule,
    CoreModule,
    ComponentsModule,
    LayoutModule,
    SharedModule,
    CompanyCommonModule,
    StockCoreModule
  ]
})
export class StockProcessingModule { }
