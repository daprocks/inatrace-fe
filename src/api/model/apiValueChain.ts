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


import { ApiFacilityType } from './apiFacilityType';
import { ApiGradeAbbreviation } from './apiGradeAbbreviation';
import { ApiMeasureUnitType } from './apiMeasureUnitType';
import { ApiProcessingEvidenceType } from './apiProcessingEvidenceType';
import { ApiSemiProduct } from './apiSemiProduct';



export interface ApiValueChain { 
    /**
     * description of the value chain
     */
    description?: string;
    /**
     * list of supported facility types
     */
    facilityTypes?: Array<ApiFacilityType>;
    /**
     * list of supported grade abbreviations
     */
    gradeAbbreviations?: Array<ApiGradeAbbreviation>;
    /**
     * Entity id
     */
    id?: number;
    /**
     * list of supported measuring unit types
     */
    measureUnitTypes?: Array<ApiMeasureUnitType>;
    /**
     * name of the value chain
     */
    name?: string;
    /**
     * list of supported processing evidence types
     */
    processingEvidenceTypes?: Array<ApiProcessingEvidenceType>;
    /**
     * list of supported semi-products
     */
    semiProducts?: Array<ApiSemiProduct>;
    /**
     * value chain status
     */
    valueChainStatus?: ApiValueChain.ValueChainStatusEnum;
}

/**
 * Namespace for property- and property-value-enumerations of ApiValueChain.
 */
export namespace ApiValueChain {
    /**
     * All properties of ApiValueChain.
     */
    export enum Properties {
        /**
         * description of the value chain
         */
        description = 'description',
        /**
         * list of supported facility types
         */
        facilityTypes = 'facilityTypes',
        /**
         * list of supported grade abbreviations
         */
        gradeAbbreviations = 'gradeAbbreviations',
        /**
         * Entity id
         */
        id = 'id',
        /**
         * list of supported measuring unit types
         */
        measureUnitTypes = 'measureUnitTypes',
        /**
         * name of the value chain
         */
        name = 'name',
        /**
         * list of supported processing evidence types
         */
        processingEvidenceTypes = 'processingEvidenceTypes',
        /**
         * list of supported semi-products
         */
        semiProducts = 'semiProducts',
        /**
         * value chain status
         */
        valueChainStatus = 'valueChainStatus'
    }

    /**
     * All possible values of valueChainStatus.
     */
    export enum ValueChainStatusEnum {
        ENABLED = 'ENABLED',
        DISABLED = 'DISABLED'
    }


    export function formMetadata() {
        return  {
            metadata: formMetadata,
            classname: 'ApiValueChain',
            vars: [
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'description',
                    classname: 'ApiValueChain',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: ApiFacilityType.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'facilityTypes',
                    classname: 'ApiValueChain',
                    dataType: 'Array&lt;ApiFacilityType&gt;',
                    isPrimitiveType: false,
                    isListContainer: true,
                    complexType: 'ApiFacilityType'
                },
                {
                    metadata: ApiGradeAbbreviation.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'gradeAbbreviations',
                    classname: 'ApiValueChain',
                    dataType: 'Array&lt;ApiGradeAbbreviation&gt;',
                    isPrimitiveType: false,
                    isListContainer: true,
                    complexType: 'ApiGradeAbbreviation'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'id',
                    classname: 'ApiValueChain',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: ApiMeasureUnitType.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'measureUnitTypes',
                    classname: 'ApiValueChain',
                    dataType: 'Array&lt;ApiMeasureUnitType&gt;',
                    isPrimitiveType: false,
                    isListContainer: true,
                    complexType: 'ApiMeasureUnitType'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'name',
                    classname: 'ApiValueChain',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: ApiProcessingEvidenceType.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'processingEvidenceTypes',
                    classname: 'ApiValueChain',
                    dataType: 'Array&lt;ApiProcessingEvidenceType&gt;',
                    isPrimitiveType: false,
                    isListContainer: true,
                    complexType: 'ApiProcessingEvidenceType'
                },
                {
                    metadata: ApiSemiProduct.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'semiProducts',
                    classname: 'ApiValueChain',
                    dataType: 'Array&lt;ApiSemiProduct&gt;',
                    isPrimitiveType: false,
                    isListContainer: true,
                    complexType: 'ApiSemiProduct'
                },
                {
                    isReadOnly: false,
                    isEnum: true,
                    datatypeWithEnum: 'ApiValueChain.ValueChainStatusEnum',
                    required: false,
                    name: 'valueChainStatus',
                    classname: 'ApiValueChain',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
            ],
            validators: {
                description: [
                ],
                facilityTypes: [
                ],
                gradeAbbreviations: [
                ],
                id: [
                ],
                measureUnitTypes: [
                ],
                name: [
                ],
                processingEvidenceTypes: [
                ],
                semiProducts: [
                ],
                valueChainStatus: [
                ],
            }
        }
    }

  // export const ApiValueChainValidationScheme = {
  //     validators: [],
  //     fields: {
  //               description: {
  //                   validators: []
  //               },
  //               facilityTypes: {
  //                   validators: []
  //               },
  //               gradeAbbreviations: {
  //                   validators: []
  //               },
  //               id: {
  //                   validators: []
  //               },
  //               measureUnitTypes: {
  //                   validators: []
  //               },
  //               name: {
  //                   validators: []
  //               },
  //               processingEvidenceTypes: {
  //                   validators: []
  //               },
  //               semiProducts: {
  //                   validators: []
  //               },
  //               valueChainStatus: {
  //                   validators: []
  //               },
  //     }
  // } as SimpleValidationScheme<ApiValueChain>;


}


