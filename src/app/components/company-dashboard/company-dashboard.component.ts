import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {CompanyFacilitiesService} from '../../shared-services/company-facilities.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {FacilityControllerService} from '../../../api/api/facilityController.service';
import {StockOrderControllerService} from '../../../api/api/stockOrderController.service';
import {ApiFacility} from '../../../api/model/apiFacility';
import {EChartsOption} from 'echarts';
import {dateISOString} from '../../../shared/utils';
import {CompanyUserCustomersByRoleService} from '../../shared-services/company-user-customers-by-role.service';
import {CompanyControllerService} from '../../../api/api/companyController.service';
import {ApiSemiProduct} from '../../../api/model/apiSemiProduct';
import {CompanyProcessingActionsService} from '../../shared-services/company-processing-actions.service';
import {ProcessingActionControllerService} from '../../../api/api/processingActionController.service';
import {CodebookTranslations} from '../../shared-services/codebook-translations';

@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.scss']
})
export class CompanyDashboardComponent implements OnInit {

  facilityCodebook: CompanyFacilitiesService;
  farmersCodebook: CompanyUserCustomersByRoleService;
  collectorsCodebook: CompanyUserCustomersByRoleService;
  procActionsCodebook: CompanyProcessingActionsService;

  constructor(
    private fb: FormBuilder,
    private facilityController: FacilityControllerService,
    private companyControllerService: CompanyControllerService,
    private procActionController: ProcessingActionControllerService,
    private stockOrderControllerService: StockOrderControllerService,
    private codebookTranslations: CodebookTranslations
  ) { }


  faTimes = faTimes;

  companyId: number = Number(localStorage.getItem('selectedUserCompany'));

  semiProductModelChoice = null;

  facilities: ApiFacility[] = [];

  semiProductOptions: ApiSemiProduct[] = [];

  deliveriesOptions: EChartsOption = {
    legend: {
      bottom: 0
    },
    tooltip: {},
    xAxis: {
      type: 'category',
      data: []
    },
    yAxis: {},
    series: [{
      name: 'Conventional (in kg)',
      type: 'bar',
      label: {
        show: true,
        position: 'top'
      },
      data: []
    }],
  };

  mergeOptions: EChartsOption;

  // search fields form control
  deliveriesForm: FormGroup = this.fb.group({
    from: this.fb.control(new Date(new Date().getFullYear() - 2, 0, 1, 1)),
    to: this.fb.control(new Date()),
    timeUnitGraphType: this.fb.control(undefined),
    facility: this.fb.control(null),
    semiProduct: this.fb.control(undefined),
    farmer: this.fb.control(undefined),
    collector: this.fb.control(undefined),
    organic: this.fb.control(undefined),
    womenOnly: this.fb.control(undefined),
    productInDeposit: this.fb.control(undefined)
  });

  processingPerformanceOption = {
    legend: {
      bottom: 0
    },
    tooltip: {},
    xAxis: {
      type: 'category',
      data: []
    },
    yAxis: {},
    series: [{
      name: 'Input',
      type: 'bar',
      label: {
        show: true,
        position: 'top'
      },
      data: []
    }, {
      name: 'Output',
      type: 'bar',
      label: {
        show: true,
        position: 'top'
      },
      color: '#ff8c00',
      data: []
    }, {
      name: 'Input-Output ratio in %',
      type: 'bar',
      label: {
        show: true,
        position: 'top'
      },
      color: '#a9a9a9',
      data: []
    }]
  };

  processingPerformanceMergeOptions: EChartsOption;


  processingPerformanceForm: FormGroup = this.fb.group({
    from: this.fb.control(new Date(new Date().getFullYear() - 2, 0, 1, 1)),
    to: this.fb.control(new Date()),
    timeUnitGraphType: this.fb.control(undefined),
    facility: this.fb.control(null),
    process: this.fb.control(null),

  });

  get facilityFormControl(): FormControl{
    return (this.deliveriesForm.get('facility') as FormControl);
  }

  get deliverySemiProduct(): FormControl{
    return (this.deliveriesForm.get('semiProduct') as FormControl);
  }

  get farmerFormControl(): FormControl{
    return (this.deliveriesForm.get('farmer') as FormControl);
  }

  get collectorFormControl(): FormControl{
    return (this.deliveriesForm.get('collector') as FormControl);
  }

  get organicFormControl(): FormControl{
    return (this.deliveriesForm.get('organic') as FormControl);
  }
  get womensOnlyFormControl(): FormControl{
    return (this.deliveriesForm.get('womenOnly') as FormControl);
  }
  get productInDepositFormControl(): FormControl{
    return (this.deliveriesForm.get('productInDeposit') as FormControl);
  }

  get processingFacilityFormControl(): FormControl{
    return (this.processingPerformanceForm.get('facility') as FormControl);
  }

  get processingActionFormControl(): FormControl{
    return (this.processingPerformanceForm.get('process') as FormControl);
  }

  ngOnInit(): void {
    this.companyId = Number(localStorage.getItem('selectedUserCompany'));
    this.facilityCodebook = new CompanyFacilitiesService(this.facilityController, this.companyId);

    this.farmersCodebook = new CompanyUserCustomersByRoleService(this.companyControllerService, this.companyId, 'FARMER');
    this.collectorsCodebook = new CompanyUserCustomersByRoleService(this.companyControllerService, this.companyId, 'COLLECTOR');

    this.procActionsCodebook =
      new CompanyProcessingActionsService(this.procActionController, this.companyId, this.codebookTranslations);

    // init interval for delivery graph
    let diff = Math.abs(this.deliveriesForm.get('from').value.getTime() - this.deliveriesForm.get('to').value.getTime());
    let diffDays = Math.ceil(diff / (1000 * 3600 * 24));
    if (diffDays < 7) {
      this.deliveriesForm.get('timeUnitGraphType').setValue('DAY');
    } else if (diffDays < 30) {
      this.deliveriesForm.get('timeUnitGraphType').setValue('WEEK');
    } else if (diffDays < 365) {
      this.deliveriesForm.get('timeUnitGraphType').setValue('MONTH');
    } else {
      this.deliveriesForm.get('timeUnitGraphType').setValue('YEAR');
    }

    this.refreshDeliveriesData();
    
    // init interval for processing performance
    diff = Math.abs(this.processingPerformanceForm.get('from').value.getTime() - this.processingPerformanceForm.get('to').value.getTime());
    diffDays = Math.ceil(diff / (1000 * 3600 * 24));
    if (diffDays < 7) {
      this.processingPerformanceForm.get('timeUnitGraphType').setValue('DAY');
    } else if (diffDays < 30) {
      this.processingPerformanceForm.get('timeUnitGraphType').setValue('WEEK');
    } else if (diffDays < 365) {
      this.processingPerformanceForm.get('timeUnitGraphType').setValue('MONTH');
    } else {
      this.processingPerformanceForm.get('timeUnitGraphType').setValue('YEAR');
    }

    this.refreshProcessingPerformanceData();
  }

  refreshDeliveriesData() {

    // true when checked, otherwise no filter (null)
    const womenOnlyFilter = this.deliveriesForm.get('womenOnly')?.value ? true : null;
    const organicFilter = this.deliveriesForm.get('organic')?.value ? true : null;
    const productInDepositFilter = this.deliveriesForm.get('productInDeposit')?.value ? true : null;
    const facilityIds = this.facilities.map(facility => facility.id);

    this.stockOrderControllerService.getDeliveriesAggregatedDataUsingGETByMap({
          companyId: this.companyId,
          farmerId: this.deliveriesForm.get('farmer')?.value?.id,
          facilityIds,
          collectorId: this.deliveriesForm.get('collector')?.value?.id,
          semiProductId: this.deliveriesForm.get('semiProduct')?.value?.id,
          isWomenShare: womenOnlyFilter,
          organicOnly: organicFilter,
          priceDeterminedLater: productInDepositFilter,
          productionDateStart: dateISOString(this.deliveriesForm.get('from')?.value),
          productionDateEnd: dateISOString(this.deliveriesForm.get('to')?.value),
          aggregationType: this.deliveriesForm.get('timeUnitGraphType').value
        }).subscribe(next => {
          if (next.data) {
            const labelData = [];
            const graphData = [];
            next.data.totals.forEach(
              total => {
                labelData.push(total.unit);
                graphData.push(total.totalQuantity);
            });

            this.mergeOptions = {
              xAxis: {
                data: labelData
              },
              series: [{
                data: graphData
              }]
            };
          }
    });
  }


  refreshProcessingPerformanceData() {

    this.stockOrderControllerService.getProcessingPerformanceDataUsingGETByMap({
      companyId: this.companyId,
      facilityId: this.processingPerformanceForm.get('facility')?.value?.id,
      processActionId: this.processingPerformanceForm.get('process')?.value?.id,
      dateStart: dateISOString(this.processingPerformanceForm.get('from')?.value),
      dateEnd: dateISOString(this.processingPerformanceForm.get('to')?.value),
      aggregationType: this.processingPerformanceForm.get('timeUnitGraphType').value
    }).subscribe(next => {
      if (next.data) {
        const labelData = [];
        const inputQuantityData = [];
        const outputQuantityData = [];
        const ratioData = [];
        next.data.totals.forEach(
          total => {
            labelData.push(total.unit);
            inputQuantityData.push(total.inputQuantity);
            outputQuantityData.push(total.outputQuantity);
            ratioData.push(total.ratio);
          });

        this.processingPerformanceMergeOptions = {
          xAxis: {
            data: labelData
          },
          series: [{
              data: inputQuantityData
            }, {
              data: outputQuantityData
            }, {
              data: ratioData
            }]
        };
      }
    });
  }


  onFilterDateRangeChange() {
    setTimeout(() => this.refreshDeliveriesData());
  }

  onFilterProcessingDateRangeChange() {
    setTimeout(() => this.refreshProcessingPerformanceData());
  }

  semiProductSelected(id: string) {
    if (id) {
      this.deliveriesForm.get('semiProduct').setValue({ id });
    } else {
      this.deliveriesForm.get('semiProduct').setValue(null);
    }

    this.deliveriesForm.get('semiProduct').markAsDirty();
    this.deliveriesForm.get('semiProduct').updateValueAndValidity();

    setTimeout(() => this.refreshDeliveriesData());
  }

  exportData() {

  }

  checkButtonDisabled(interval: string, formGroup: FormGroup) {
    const diff = Math.abs(formGroup.get('from').value.getTime() - formGroup.get('to').value.getTime());
    const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
    if (interval === 'day') {
      return diffDays > 90;
    } else if (interval === 'week') {
      return diffDays < 7 ||  diffDays > 180;
    } else if (interval === 'month') {
      return diffDays < 30 || diffDays > 480;
    } else if (interval === 'year') {
      return diffDays < 365;
    }
    return false;
  }

  setDeliveryInterval(interval: string) {

    const previousVal = this.deliveriesForm.get('timeUnitGraphType').value;
    let newVal;

    if (interval === 'day') {
      newVal = 'DAY';
    } else if (interval === 'week') {
      newVal = 'WEEK';
    } else if (interval === 'month') {
      newVal = 'MONTH';
    } else if (interval === 'year') {
      newVal = 'YEAR';
    }

    if (previousVal !== newVal) {
      this.deliveriesForm.get('timeUnitGraphType').setValue(newVal);
      this.refreshDeliveriesData();
    }
  }

  setProcessingPerformanceInterval(interval: string) {

    const previousVal = this.processingPerformanceForm.get('timeUnitGraphType').value;
    let newVal;

    if (interval === 'day') {
      newVal = 'DAY';
    } else if (interval === 'week') {
      newVal = 'WEEK';
    } else if (interval === 'month') {
      newVal = 'MONTH';
    } else if (interval === 'year') {
      newVal = 'YEAR';
    }

    if (previousVal !== newVal) {
      this.processingPerformanceForm.get('timeUnitGraphType').setValue(newVal);
      this.refreshProcessingPerformanceData();
    }
  }

  async addSelectedFacility(facility: ApiFacility) {
    if (!facility) {
      // no element is selected, only user input
      return;
    }
    if (this.facilities.some(s => s.id === facility.id)) {
      // same element selected. refresh the input element, but do not update the list
      setTimeout(() => this.deliveriesForm.get('facility').setValue(null));
      return;
    }
    this.facilities.push(facility);
    this.refreshSemiProducts();
    this.refreshDeliveriesData();
    setTimeout(() => this.deliveriesForm.get('facility').setValue(null));
  }


  deleteFacility(facility: ApiFacility, idx: number) {
    this.facilities.splice(idx, 1);
    this.refreshSemiProducts();
    this.refreshDeliveriesData();
  }

  refreshSemiProducts() {
    this.semiProductOptions = [];

    this.facilities.forEach(f => {
      if (f.facilitySemiProductList) {
        f.facilitySemiProductList.forEach((sp => {
          if (!this.semiProductOptions.some(el => el.id === sp.id)) {
            this.semiProductOptions.push(sp);
          }
        }));
      }
    });
  }

}
