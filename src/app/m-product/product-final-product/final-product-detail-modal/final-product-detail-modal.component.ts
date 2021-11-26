import { Component, Input, OnInit, Output } from '@angular/core';
import { take } from 'rxjs/operators';
import { ProductControllerService } from '../../../../api/api/productController.service';
import { defaultEmptyObject, generateFormFromMetadata } from '../../../../shared/utils';
import { ApiSemiProductValidationScheme } from '../../../settings/type-detail-modal/validation';
import { ApiFinalProduct } from '../../../../api/model/apiFinalProduct';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ActiveMeasureUnitTypeService } from '../../../shared-services/active-measure-unit-types.service';
import { ApiProductLabelBase } from '../../../../api/model/apiProductLabelBase';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import ProductLabelsService from '../../../shared-services/product-labels.service';

@Component({
  selector: 'app-final-product-detail-modal',
  templateUrl: './final-product-detail-modal.component.html',
  styleUrls: ['./final-product-detail-modal.component.scss']
})
export class FinalProductDetailModalComponent implements OnInit {

  faTimes = faTimes;

  @Input()
  productId: number;

  @Input()
  isUpdate: boolean;

  @Input()
  finalProduct: ApiFinalProduct;

  @Output()
  saveCallback: () => string;

  title: string;
  submitted = false;
  form: FormGroup;

  productLabelForm = new FormControl(null);

  productLabels: Array<ApiProductLabelBase> = [];
  productLabelsCodebook: ProductLabelsService;

  constructor(
      public activeModal: NgbActiveModal,
      private productControllerService: ProductControllerService,
      public activeMeasureUnitTypeService: ActiveMeasureUnitTypeService
  ) { }

  ngOnInit(): void {
    this.productLabelsCodebook = new ProductLabelsService(this.productControllerService, this.productId);
    this.init().then();
  }

  async init() {

    this.title = (this.isUpdate)
        ? $localize`:@@productLabelFinalProduct.modal.title.update:Edit final product`
        : $localize`:@@productLabelFinalProduct.modal.title.new:Add new final products`;

    this.form = generateFormFromMetadata(
        ApiFinalProduct.formMetadata(),
        this.isUpdate
            ? this.finalProduct
            : defaultEmptyObject(ApiFinalProduct.formMetadata()) as ApiFinalProduct,
        ApiSemiProductValidationScheme
    );
  }

  async addSelectedProductLabel(productLabel: ApiProductLabelBase) {
    if (!productLabel || this.productLabels.some(pl => pl.id === productLabel.id)) {
      setTimeout(() => this.productLabelForm.setValue(null));
      return;
    }

    this.productLabels.push(productLabel);
    setTimeout(() => this.productLabelForm.setValue(null));
  }

  removeSelectedProductLabel(idx: number) {
    this.productLabels.splice(idx, 1);
  }

  async save() {

    // TODO: add handling for final product labels

    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    const res = await this.productControllerService.createOrUpdateFinalProductUsingPUT(this.productId, this.form.value)
        .pipe(take(1))
        .toPromise();

    if (res && res.status === 'OK') {
      if (this.saveCallback) {
        this.saveCallback();
      }
      this.dismiss();
    }
  }

  dismiss() {
    this.activeModal.dismiss();
  }

}
