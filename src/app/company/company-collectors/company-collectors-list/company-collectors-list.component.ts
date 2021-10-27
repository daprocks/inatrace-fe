import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { SortOption, SortOrder } from '../../../shared/result-sorter/result-sorter-types';
import { GlobalEventManagerService } from '../../../core/global-event-manager.service';
import { CompanyControllerService, GetUserCustomersForCompanyAndTypeUsingGET } from '../../../../api/api/companyController.service';
import { Router } from '@angular/router';
import { map, shareReplay, switchMap, take, tap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-company-collectors-list',
  templateUrl: './company-collectors-list.component.html',
  styleUrls: ['./company-collectors-list.component.scss']
})
export class CompanyCollectorsListComponent implements OnInit{

  organizationId;
  page = 1;
  pageSize = 10;

  showing;
  collectorCount;

  searchNameCollectors = new FormControl('');
  byCategory = 'BY_NAME';

  collector$;
  sorting$ = new BehaviorSubject<{ key: string, sortOrder: SortOrder }>({ key: 'BY_NAME', sortOrder: 'ASC'});
  query$ = new BehaviorSubject('');
  pagination$ = new BehaviorSubject(1);
  search$ = new BehaviorSubject('BY_NAME');
  ping$ = new BehaviorSubject(null);

  showHonduras = false;

  items = [
    { name: $localize`:@@productLabelStakeholders.search.name:name`,
      category: 'BY_NAME'
    },
    { name: $localize`:@@productLabelStakeholders.search.surname:surname`,
      category: 'BY_SURNAME'
    }
  ];

  sortOptions: SortOption[] = [
    {
      key: 'name',
      name: $localize`:@@productLabelStakeholdersCollectors.sortOptions.name.name:First name`,
      defaultSortOrder: 'ASC'
    },
    {
      key: 'surname',
      name: $localize`:@@productLabelStakeholdersCollectors.sortOptions.surname.name:Last name`,
      defaultSortOrder: 'ASC'
    },
    {
      key: 'gender',
      name: $localize`:@@productLabelStakeholdersCollectors.sortOptions.gender.name:Gender`,
      inactive: true
    },
    {
      key: 'id',
      name: $localize`:@@productLabelStakeholdersCollectors.sortOptions.id.name:Id`,
    },
    {
      key: 'village',
      name: $localize`:@@productLabelStakeholdersCollectors.sortOptions.village.name:Village`,
      inactive: true
    },
    {
      key: 'cell',
      name: $localize`:@@productLabelStakeholdersCollectors.sortOptions.cell.name:Cell`,
      inactive: true
    },
    {
      key: 'actions',
      name: $localize`:@@productLabelStakeholdersCollectors.sortOptions.actions.name:Actions`,
      inactive: true
    }
  ];

  sortOptionsHonduras: SortOption[] = [
    {
      key: 'name',
      name: $localize`:@@productLabelStakeholdersCollectors.sortOptions.name.name:First name`,
      defaultSortOrder: 'ASC'
    },
    {
      key: 'surname',
      name: $localize`:@@productLabelStakeholdersCollectors.sortOptions.surname.name:Last name`,
      defaultSortOrder: 'ASC'
    },
    {
      key: 'gender',
      name: $localize`:@@productLabelStakeholdersCollectors.sortOptions.gender.name:Gender`,
      inactive: true
    },
    {
      key: 'id',
      name: $localize`:@@productLabelStakeholdersCollectors.sortOptions.id.name:Id`,
    },
    {
      key: 'municipality',
      name: $localize`:@@productLabelStakeholdersCollectors.sortOptions.municipality.name:Municipality`,
      inactive: true
    },
    {
      key: 'village',
      name: $localize`:@@productLabelStakeholdersCollectors.sortOptions.village.name:Village`,
      inactive: true
    },
    {
      key: 'actions',
      name: $localize`:@@productLabelStakeholdersCollectors.sortOptions.actions.name:Actions`,
      inactive: true
    }
  ];

  constructor(
      private globalEventsManager: GlobalEventManagerService,
      private companyController: CompanyControllerService,
      private router: Router
  ) {
  }

  ngOnInit() {
    this.organizationId = localStorage.getItem('selectedUserCompany');

    this.loadCollectors();
  }

  async loadCollectors() {
    this.collector$ = combineLatest([this.sorting$, this.query$, this.search$, this.pagination$, this.ping$])
        .pipe(
            map(([sort, queryString, search, page, ping]) => {
              const params: GetUserCustomersForCompanyAndTypeUsingGET.PartialParamMap = {
                companyId: this.organizationId,
                type: 'COLLECTOR',
                sort: sort.sortOrder,
                sortBy: sort.key,
                offset: (page - 1) * this.pageSize,
                limit: this.pageSize,
                query: queryString,
                searchBy: search
              };
              return params;
            }),
            tap(() => this.globalEventsManager.showLoading(true)),
            switchMap(params => this.companyController.getUserCustomersForCompanyAndTypeUsingGETByMap(params)),
            map(response => {
              if (response) {
                this.collectorCount = response.data.count;
                this.showing = this.collectorCount >= this.pageSize ? Math.min(this.page * this.pageSize, this.collectorCount) : this.collectorCount;
                return response.data;
              }
            }),
            tap(() => this.globalEventsManager.showLoading(false)),
            shareReplay(1)
        );

    this.companyController.getCompanyUsingGET(this.organizationId).pipe(take(1)).subscribe(value => {
      this.showHonduras = value && value.data && value.data.headquarters && value.data.headquarters.country &&
                          value.data.headquarters.country.code && value.data.headquarters.country.code === 'HN';
    });
  }

  addCollector() {
    this.router.navigate(['my-collectors', 'add']);
  }

  editCollector(id) {
    this.router.navigate(['my-collectors', 'edit', id]);
  }

  async deleteCollector(id) {
    const result = await this.globalEventsManager.openMessageModal({
      type: 'warning',
      message: $localize`:@@productLabelStakeholdersCollectors.deleteCollector.error.message:Are you sure you want to delete the collector?`,
      options: {
        centered: true
      }
    });
    if (result !== 'ok') {
      return;
    }
    const res = await this.companyController.deleteUserCustomerUsingDELETE(id).pipe(take(1)).toPromise();
    if (res && res.status === 'OK') {
      this.ping$.next(null);
    }
  }

  changeSort(event) {
    let newKey = '';
    switch (event.key) {
      case 'id':
        newKey = 'BY_ID';
        break;
      case 'name':
        newKey = 'BY_NAME';
        break;
      case 'surname':
        newKey = 'BY_SURNAME';
        break;
    }
    event.key = newKey;
    this.sorting$.next(event);
  }

  showLocation(key, location) {
    if (location && location.address) {
      switch (key) {
        case 'cell':
          return location.address.cell ? location.address.cell : '-';
        case 'village':
          return location.address.village ? location.address.village : '-';
        case 'hondurasMunicipality':
          return location.address.hondurasMunicipality ? location.address.hondurasMunicipality : '-';
        case 'hondurasVillage':
          return location.address.hondurasVillage ? location.address.hondurasVillage : '-';
      }
    }
  }

  showPagination() {
    return this.collectorCount && this.collectorCount > this.pageSize;
  }

  onPageChange(event) {
    this.pagination$.next(event);
  }

  onSearchInput(event) {
    this.query$.next(event);
  }

  onCategoryChange(event) {
    this.search$.next(event);
  }

}
