/*
 * Copyright(c) 2009 - 2019 Abelium d.o.o.
 * Kajuhova 90, 1000 Ljubljana, Slovenia
 * All rights reserved
 * Copyright(c) 1995 - 2018 T-Systems Multimedia Solutions GmbH
 * Riesaer Str. 5, 01129 Dresden
 * All rights reserved.
 *
 * INATrace Services API
 * Abelium INATrace Services API swagger documentation
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the openapi-typescript-angular-generator.
 * https://github.com/alenabelium/openapi-typescript-angular-generator
 * Do not edit the class manually.
 */

/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { ValidatorFn, Validators } from '@angular/forms';

import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';
import { catchError }                                        from 'rxjs/operators';

import { ApiCurrencyType } from '../model/apiCurrencyType';
import { ApiDefaultResponse } from '../model/apiDefaultResponse';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';

/**
 * Namespace for disableCurrencyUsingPUT.
 */
export namespace DisableCurrencyUsingPUT {
    /**
     * Parameter map for disableCurrencyUsingPUT.
     */
    export interface PartialParamMap {
      /**
       * id
       */
      id: number;
    }

    /**
     * Enumeration of all parameters for disableCurrencyUsingPUT.
     */
    export enum Parameters {
      /**
       * id
       */
      id = 'id'
    }

    /**
     * A map of tuples with error name and `ValidatorFn` for each parameter of disableCurrencyUsingPUT
     * that does not have an own model.
     */
    export const ParamValidators: {[K in keyof DisableCurrencyUsingPUT.PartialParamMap]?: [string, ValidatorFn][]} = {
      id: [
              ['required', Validators.required],
      ],
    };
}

/**
 * Namespace for enableCurrencyUsingPUT.
 */
export namespace EnableCurrencyUsingPUT {
    /**
     * Parameter map for enableCurrencyUsingPUT.
     */
    export interface PartialParamMap {
      /**
       * id
       */
      id: number;
    }

    /**
     * Enumeration of all parameters for enableCurrencyUsingPUT.
     */
    export enum Parameters {
      /**
       * id
       */
      id = 'id'
    }

    /**
     * A map of tuples with error name and `ValidatorFn` for each parameter of enableCurrencyUsingPUT
     * that does not have an own model.
     */
    export const ParamValidators: {[K in keyof EnableCurrencyUsingPUT.PartialParamMap]?: [string, ValidatorFn][]} = {
      id: [
              ['required', Validators.required],
      ],
    };
}

/**
 * Namespace for getCurrencyTypesUsingGET.
 */
export namespace GetCurrencyTypesUsingGET {
    /**
     * Parameter map for getCurrencyTypesUsingGET.
     */
    export interface PartialParamMap {
    }

    /**
     * Enumeration of all parameters for getCurrencyTypesUsingGET.
     */
    export enum Parameters {
    }

    /**
     * A map of tuples with error name and `ValidatorFn` for each parameter of getCurrencyTypesUsingGET
     * that does not have an own model.
     */
    export const ParamValidators: {[K in keyof GetCurrencyTypesUsingGET.PartialParamMap]?: [string, ValidatorFn][]} = {
    };
}

/**
 * Namespace for getDisabledCurrencyTypesUsingGET.
 */
export namespace GetDisabledCurrencyTypesUsingGET {
    /**
     * Parameter map for getDisabledCurrencyTypesUsingGET.
     */
    export interface PartialParamMap {
    }

    /**
     * Enumeration of all parameters for getDisabledCurrencyTypesUsingGET.
     */
    export enum Parameters {
    }

    /**
     * A map of tuples with error name and `ValidatorFn` for each parameter of getDisabledCurrencyTypesUsingGET
     * that does not have an own model.
     */
    export const ParamValidators: {[K in keyof GetDisabledCurrencyTypesUsingGET.PartialParamMap]?: [string, ValidatorFn][]} = {
    };
}

/**
 * Namespace for getEnabledCurrencyTypesUsingGET.
 */
export namespace GetEnabledCurrencyTypesUsingGET {
    /**
     * Parameter map for getEnabledCurrencyTypesUsingGET.
     */
    export interface PartialParamMap {
    }

    /**
     * Enumeration of all parameters for getEnabledCurrencyTypesUsingGET.
     */
    export enum Parameters {
    }

    /**
     * A map of tuples with error name and `ValidatorFn` for each parameter of getEnabledCurrencyTypesUsingGET
     * that does not have an own model.
     */
    export const ParamValidators: {[K in keyof GetEnabledCurrencyTypesUsingGET.PartialParamMap]?: [string, ValidatorFn][]} = {
    };
}



@Injectable({
  providedIn: 'root'
})
export class CurrencyTypeControllerService {

    protected basePath = 'http://localhost:8080';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {

        if (configuration) {
            this.configuration = configuration;
            this.configuration.basePath = configuration.basePath != null ? configuration.basePath : (basePath != null ? basePath : this.basePath);
        } else {
            this.configuration.basePath = basePath != null ? basePath : this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }



  /**
   * Disable currency with the specified ID by map.
   * 
   * @param map parameters map to set partial amount of parameters easily
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public disableCurrencyUsingPUTByMap(
    map: DisableCurrencyUsingPUT.PartialParamMap,
    observe?: 'body',
    reportProgress?: boolean): Observable<ApiDefaultResponse>;
  public disableCurrencyUsingPUTByMap(
    map: DisableCurrencyUsingPUT.PartialParamMap,
    observe?: 'response',
    reportProgress?: boolean): Observable<HttpResponse<ApiDefaultResponse>>;
  public disableCurrencyUsingPUTByMap(
    map: DisableCurrencyUsingPUT.PartialParamMap,
    observe?: 'events',
    reportProgress?: boolean): Observable<HttpEvent<ApiDefaultResponse>>;
  public disableCurrencyUsingPUTByMap(
    map: DisableCurrencyUsingPUT.PartialParamMap,
    observe: any = 'body',
    reportProgress: boolean = false): Observable<any> {
    return this.disableCurrencyUsingPUT(
      map.id,
      observe,
      reportProgress
    );
  }


    /**
     * Disable currency with the specified ID
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public disableCurrencyUsingPUT(id: number, observe?: 'body', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<ApiDefaultResponse>;
    public disableCurrencyUsingPUT(id: number, observe?: 'response', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpResponse<ApiDefaultResponse>>;
    public disableCurrencyUsingPUT(id: number, observe?: 'events', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpEvent<ApiDefaultResponse>>;
    public disableCurrencyUsingPUT(id: number, observe: any = 'body', reportProgress: boolean = false, additionalHeaders?: Array<Array<string>>): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling disableCurrencyUsingPUT.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

            if (additionalHeaders) {
                for(let pair of additionalHeaders) {
                    headers = headers.set(pair[0], pair[1]);
                }
            }

        const handle = this.httpClient.put<ApiDefaultResponse>(`${this.configuration.basePath}/api/chain/currency-type/${encodeURIComponent(String(id))}/disable`,
            null,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
        if(typeof this.configuration.errorHandler === 'function') {
          return handle.pipe(catchError(err => this.configuration.errorHandler(err, 'disableCurrencyUsingPUT')));
        }
        return handle;
    }


  /**
   * Enable currency with the specified ID by map.
   * 
   * @param map parameters map to set partial amount of parameters easily
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public enableCurrencyUsingPUTByMap(
    map: EnableCurrencyUsingPUT.PartialParamMap,
    observe?: 'body',
    reportProgress?: boolean): Observable<ApiDefaultResponse>;
  public enableCurrencyUsingPUTByMap(
    map: EnableCurrencyUsingPUT.PartialParamMap,
    observe?: 'response',
    reportProgress?: boolean): Observable<HttpResponse<ApiDefaultResponse>>;
  public enableCurrencyUsingPUTByMap(
    map: EnableCurrencyUsingPUT.PartialParamMap,
    observe?: 'events',
    reportProgress?: boolean): Observable<HttpEvent<ApiDefaultResponse>>;
  public enableCurrencyUsingPUTByMap(
    map: EnableCurrencyUsingPUT.PartialParamMap,
    observe: any = 'body',
    reportProgress: boolean = false): Observable<any> {
    return this.enableCurrencyUsingPUT(
      map.id,
      observe,
      reportProgress
    );
  }


    /**
     * Enable currency with the specified ID
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public enableCurrencyUsingPUT(id: number, observe?: 'body', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<ApiDefaultResponse>;
    public enableCurrencyUsingPUT(id: number, observe?: 'response', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpResponse<ApiDefaultResponse>>;
    public enableCurrencyUsingPUT(id: number, observe?: 'events', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpEvent<ApiDefaultResponse>>;
    public enableCurrencyUsingPUT(id: number, observe: any = 'body', reportProgress: boolean = false, additionalHeaders?: Array<Array<string>>): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling enableCurrencyUsingPUT.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

            if (additionalHeaders) {
                for(let pair of additionalHeaders) {
                    headers = headers.set(pair[0], pair[1]);
                }
            }

        const handle = this.httpClient.put<ApiDefaultResponse>(`${this.configuration.basePath}/api/chain/currency-type/${encodeURIComponent(String(id))}/enable`,
            null,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
        if(typeof this.configuration.errorHandler === 'function') {
          return handle.pipe(catchError(err => this.configuration.errorHandler(err, 'enableCurrencyUsingPUT')));
        }
        return handle;
    }


  /**
   * Get list of supported currencies by map.
   * 
   * @param map parameters map to set partial amount of parameters easily
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getCurrencyTypesUsingGETByMap(
    map: GetCurrencyTypesUsingGET.PartialParamMap,
    observe?: 'body',
    reportProgress?: boolean): Observable<Array<ApiCurrencyType>>;
  public getCurrencyTypesUsingGETByMap(
    map: GetCurrencyTypesUsingGET.PartialParamMap,
    observe?: 'response',
    reportProgress?: boolean): Observable<HttpResponse<Array<ApiCurrencyType>>>;
  public getCurrencyTypesUsingGETByMap(
    map: GetCurrencyTypesUsingGET.PartialParamMap,
    observe?: 'events',
    reportProgress?: boolean): Observable<HttpEvent<Array<ApiCurrencyType>>>;
  public getCurrencyTypesUsingGETByMap(
    map: GetCurrencyTypesUsingGET.PartialParamMap,
    observe: any = 'body',
    reportProgress: boolean = false): Observable<any> {
    return this.getCurrencyTypesUsingGET(
      observe,
      reportProgress
    );
  }


    /**
     * Get list of supported currencies
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCurrencyTypesUsingGET(observe?: 'body', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<Array<ApiCurrencyType>>;
    public getCurrencyTypesUsingGET(observe?: 'response', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpResponse<Array<ApiCurrencyType>>>;
    public getCurrencyTypesUsingGET(observe?: 'events', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpEvent<Array<ApiCurrencyType>>>;
    public getCurrencyTypesUsingGET(observe: any = 'body', reportProgress: boolean = false, additionalHeaders?: Array<Array<string>>): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

            if (additionalHeaders) {
                for(let pair of additionalHeaders) {
                    headers = headers.set(pair[0], pair[1]);
                }
            }

        const handle = this.httpClient.get<Array<ApiCurrencyType>>(`${this.configuration.basePath}/api/chain/currency-type/list`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
        if(typeof this.configuration.errorHandler === 'function') {
          return handle.pipe(catchError(err => this.configuration.errorHandler(err, 'getCurrencyTypesUsingGET')));
        }
        return handle;
    }


  /**
   * Get list of disabled supported currencies by map.
   * 
   * @param map parameters map to set partial amount of parameters easily
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getDisabledCurrencyTypesUsingGETByMap(
    map: GetDisabledCurrencyTypesUsingGET.PartialParamMap,
    observe?: 'body',
    reportProgress?: boolean): Observable<Array<ApiCurrencyType>>;
  public getDisabledCurrencyTypesUsingGETByMap(
    map: GetDisabledCurrencyTypesUsingGET.PartialParamMap,
    observe?: 'response',
    reportProgress?: boolean): Observable<HttpResponse<Array<ApiCurrencyType>>>;
  public getDisabledCurrencyTypesUsingGETByMap(
    map: GetDisabledCurrencyTypesUsingGET.PartialParamMap,
    observe?: 'events',
    reportProgress?: boolean): Observable<HttpEvent<Array<ApiCurrencyType>>>;
  public getDisabledCurrencyTypesUsingGETByMap(
    map: GetDisabledCurrencyTypesUsingGET.PartialParamMap,
    observe: any = 'body',
    reportProgress: boolean = false): Observable<any> {
    return this.getDisabledCurrencyTypesUsingGET(
      observe,
      reportProgress
    );
  }


    /**
     * Get list of disabled supported currencies
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getDisabledCurrencyTypesUsingGET(observe?: 'body', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<Array<ApiCurrencyType>>;
    public getDisabledCurrencyTypesUsingGET(observe?: 'response', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpResponse<Array<ApiCurrencyType>>>;
    public getDisabledCurrencyTypesUsingGET(observe?: 'events', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpEvent<Array<ApiCurrencyType>>>;
    public getDisabledCurrencyTypesUsingGET(observe: any = 'body', reportProgress: boolean = false, additionalHeaders?: Array<Array<string>>): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

            if (additionalHeaders) {
                for(let pair of additionalHeaders) {
                    headers = headers.set(pair[0], pair[1]);
                }
            }

        const handle = this.httpClient.get<Array<ApiCurrencyType>>(`${this.configuration.basePath}/api/chain/currency-type/list/disabled`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
        if(typeof this.configuration.errorHandler === 'function') {
          return handle.pipe(catchError(err => this.configuration.errorHandler(err, 'getDisabledCurrencyTypesUsingGET')));
        }
        return handle;
    }


  /**
   * Get list of enabled supported currencies by map.
   * 
   * @param map parameters map to set partial amount of parameters easily
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getEnabledCurrencyTypesUsingGETByMap(
    map: GetEnabledCurrencyTypesUsingGET.PartialParamMap,
    observe?: 'body',
    reportProgress?: boolean): Observable<Array<ApiCurrencyType>>;
  public getEnabledCurrencyTypesUsingGETByMap(
    map: GetEnabledCurrencyTypesUsingGET.PartialParamMap,
    observe?: 'response',
    reportProgress?: boolean): Observable<HttpResponse<Array<ApiCurrencyType>>>;
  public getEnabledCurrencyTypesUsingGETByMap(
    map: GetEnabledCurrencyTypesUsingGET.PartialParamMap,
    observe?: 'events',
    reportProgress?: boolean): Observable<HttpEvent<Array<ApiCurrencyType>>>;
  public getEnabledCurrencyTypesUsingGETByMap(
    map: GetEnabledCurrencyTypesUsingGET.PartialParamMap,
    observe: any = 'body',
    reportProgress: boolean = false): Observable<any> {
    return this.getEnabledCurrencyTypesUsingGET(
      observe,
      reportProgress
    );
  }


    /**
     * Get list of enabled supported currencies
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getEnabledCurrencyTypesUsingGET(observe?: 'body', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<Array<ApiCurrencyType>>;
    public getEnabledCurrencyTypesUsingGET(observe?: 'response', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpResponse<Array<ApiCurrencyType>>>;
    public getEnabledCurrencyTypesUsingGET(observe?: 'events', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpEvent<Array<ApiCurrencyType>>>;
    public getEnabledCurrencyTypesUsingGET(observe: any = 'body', reportProgress: boolean = false, additionalHeaders?: Array<Array<string>>): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

            if (additionalHeaders) {
                for(let pair of additionalHeaders) {
                    headers = headers.set(pair[0], pair[1]);
                }
            }

        const handle = this.httpClient.get<Array<ApiCurrencyType>>(`${this.configuration.basePath}/api/chain/currency-type/list/enabled`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
        if(typeof this.configuration.errorHandler === 'function') {
          return handle.pipe(catchError(err => this.configuration.errorHandler(err, 'getEnabledCurrencyTypesUsingGET')));
        }
        return handle;
    }

}
