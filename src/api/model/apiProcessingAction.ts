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


import { ApiCompanyBase } from './apiCompanyBase';
import { ApiFacility } from './apiFacility';
import { ApiFinalProduct } from './apiFinalProduct';
import { ApiProcessingActionOutputSemiProduct } from './apiProcessingActionOutputSemiProduct';
import { ApiProcessingActionTranslation } from './apiProcessingActionTranslation';
import { ApiProcessingEvidenceField } from './apiProcessingEvidenceField';
import { ApiProcessingEvidenceType } from './apiProcessingEvidenceType';
import { ApiSemiProduct } from './apiSemiProduct';
import { ApiValueChain } from './apiValueChain';



export interface ApiProcessingAction { 
    company?: ApiCompanyBase;
    /**
     * Processing action description
     */
    description?: string;
    /**
     * The estimated output quantity per unit for this processing action
     */
    estimatedOutputQuantityPerUnit?: number;
    /**
     * Denoting if this processing action is Transfer or Quote of a Final product
     */
    finalProductAction?: boolean;
    /**
     * Entity id
     */
    id?: number;
    inputFinalProduct?: ApiFinalProduct;
    inputSemiProduct?: ApiSemiProduct;
    /**
     * Processing action language
     */
    language?: ApiProcessingAction.LanguageEnum;
    /**
     * Processing action maximum output weight when repacked outputs for final product is set to 'true'
     */
    maxOutputWeight?: number;
    /**
     * Processing action name
     */
    name?: string;
    outputFinalProduct?: ApiFinalProduct;
    /**
     * List of supported output semi-products
     */
    outputSemiProducts?: Array<ApiProcessingActionOutputSemiProduct>;
    /**
     * Processing action prefix
     */
    prefix?: string;
    /**
     * Processing action public timeline icon type
     */
    publicTimelineIconType?: ApiProcessingAction.PublicTimelineIconTypeEnum;
    /**
     * Processing action public timeline label
     */
    publicTimelineLabel?: string;
    /**
     * Processing action public timeline location
     */
    publicTimelineLocation?: string;
    qrCodeForFinalProduct?: ApiFinalProduct;
    /**
     * Processing action repacked outputs when using output final product
     */
    repackedOutputFinalProducts?: boolean;
    /**
     * Processing action required document types
     */
    requiredDocumentTypes?: Array<ApiProcessingEvidenceType>;
    /**
     * Processing action required evidence fields
     */
    requiredEvidenceFields?: Array<ApiProcessingEvidenceField>;
    /**
     * Sort order number. Lower number means first
     */
    sortOrder?: number;
    /**
     * List of facilities where this processing starts
     */
    supportedFacilities?: Array<ApiFacility>;
    /**
     * Processing action translations
     */
    translations?: Array<ApiProcessingActionTranslation>;
    /**
     * Processing action type
     */
    type?: ApiProcessingAction.TypeEnum;
    /**
     * List of value chains for this processing action
     */
    valueChains?: Array<ApiValueChain>;
}

/**
 * Namespace for property- and property-value-enumerations of ApiProcessingAction.
 */
export namespace ApiProcessingAction {
    /**
     * All properties of ApiProcessingAction.
     */
    export enum Properties {
        company = 'company',
        /**
         * Processing action description
         */
        description = 'description',
        /**
         * The estimated output quantity per unit for this processing action
         */
        estimatedOutputQuantityPerUnit = 'estimatedOutputQuantityPerUnit',
        /**
         * Denoting if this processing action is Transfer or Quote of a Final product
         */
        finalProductAction = 'finalProductAction',
        /**
         * Entity id
         */
        id = 'id',
        inputFinalProduct = 'inputFinalProduct',
        inputSemiProduct = 'inputSemiProduct',
        /**
         * Processing action language
         */
        language = 'language',
        /**
         * Processing action maximum output weight when repacked outputs for final product is set to 'true'
         */
        maxOutputWeight = 'maxOutputWeight',
        /**
         * Processing action name
         */
        name = 'name',
        outputFinalProduct = 'outputFinalProduct',
        /**
         * List of supported output semi-products
         */
        outputSemiProducts = 'outputSemiProducts',
        /**
         * Processing action prefix
         */
        prefix = 'prefix',
        /**
         * Processing action public timeline icon type
         */
        publicTimelineIconType = 'publicTimelineIconType',
        /**
         * Processing action public timeline label
         */
        publicTimelineLabel = 'publicTimelineLabel',
        /**
         * Processing action public timeline location
         */
        publicTimelineLocation = 'publicTimelineLocation',
        qrCodeForFinalProduct = 'qrCodeForFinalProduct',
        /**
         * Processing action repacked outputs when using output final product
         */
        repackedOutputFinalProducts = 'repackedOutputFinalProducts',
        /**
         * Processing action required document types
         */
        requiredDocumentTypes = 'requiredDocumentTypes',
        /**
         * Processing action required evidence fields
         */
        requiredEvidenceFields = 'requiredEvidenceFields',
        /**
         * Sort order number. Lower number means first
         */
        sortOrder = 'sortOrder',
        /**
         * List of facilities where this processing starts
         */
        supportedFacilities = 'supportedFacilities',
        /**
         * Processing action translations
         */
        translations = 'translations',
        /**
         * Processing action type
         */
        type = 'type',
        /**
         * List of value chains for this processing action
         */
        valueChains = 'valueChains'
    }

    /**
     * All possible values of language.
     */
    export enum LanguageEnum {
        EN = 'EN',
        DE = 'DE',
        RW = 'RW',
        ES = 'ES'
    }

    /**
     * All possible values of publicTimelineIconType.
     */
    export enum PublicTimelineIconTypeEnum {
        SHIP = 'SHIP',
        LEAF = 'LEAF',
        WAREHOUSE = 'WAREHOUSE',
        QRCODE = 'QRCODE',
        OTHER = 'OTHER'
    }

    /**
     * All possible values of type.
     */
    export enum TypeEnum {
        PROCESSING = 'PROCESSING',
        PACKAGING = 'PACKAGING',
        FINALPROCESSING = 'FINAL_PROCESSING',
        SHIPMENT = 'SHIPMENT',
        TRANSFER = 'TRANSFER',
        GENERATEQRCODE = 'GENERATE_QR_CODE'
    }


    export function formMetadata() {
        return  {
            metadata: formMetadata,
            classname: 'ApiProcessingAction',
            vars: [
                {
                    metadata: ApiCompanyBase.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'company',
                    classname: 'ApiProcessingAction',
                    dataType: 'ApiCompanyBase',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiCompanyBase'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'description',
                    classname: 'ApiProcessingAction',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'estimatedOutputQuantityPerUnit',
                    classname: 'ApiProcessingAction',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'finalProductAction',
                    classname: 'ApiProcessingAction',
                    dataType: 'boolean',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'id',
                    classname: 'ApiProcessingAction',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: ApiFinalProduct.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'inputFinalProduct',
                    classname: 'ApiProcessingAction',
                    dataType: 'ApiFinalProduct',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiFinalProduct'
                },
                {
                    metadata: ApiSemiProduct.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'inputSemiProduct',
                    classname: 'ApiProcessingAction',
                    dataType: 'ApiSemiProduct',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiSemiProduct'
                },
                {
                    isReadOnly: false,
                    isEnum: true,
                    datatypeWithEnum: 'ApiProcessingAction.LanguageEnum',
                    required: false,
                    name: 'language',
                    classname: 'ApiProcessingAction',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'maxOutputWeight',
                    classname: 'ApiProcessingAction',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'name',
                    classname: 'ApiProcessingAction',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: ApiFinalProduct.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'outputFinalProduct',
                    classname: 'ApiProcessingAction',
                    dataType: 'ApiFinalProduct',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiFinalProduct'
                },
                {
                    metadata: ApiProcessingActionOutputSemiProduct.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'outputSemiProducts',
                    classname: 'ApiProcessingAction',
                    dataType: 'Array&lt;ApiProcessingActionOutputSemiProduct&gt;',
                    isPrimitiveType: false,
                    isListContainer: true,
                    complexType: 'ApiProcessingActionOutputSemiProduct'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'prefix',
                    classname: 'ApiProcessingAction',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: true,
                    datatypeWithEnum: 'ApiProcessingAction.PublicTimelineIconTypeEnum',
                    required: false,
                    name: 'publicTimelineIconType',
                    classname: 'ApiProcessingAction',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'publicTimelineLabel',
                    classname: 'ApiProcessingAction',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'publicTimelineLocation',
                    classname: 'ApiProcessingAction',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: ApiFinalProduct.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'qrCodeForFinalProduct',
                    classname: 'ApiProcessingAction',
                    dataType: 'ApiFinalProduct',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiFinalProduct'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'repackedOutputFinalProducts',
                    classname: 'ApiProcessingAction',
                    dataType: 'boolean',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: ApiProcessingEvidenceType.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'requiredDocumentTypes',
                    classname: 'ApiProcessingAction',
                    dataType: 'Array&lt;ApiProcessingEvidenceType&gt;',
                    isPrimitiveType: false,
                    isListContainer: true,
                    complexType: 'ApiProcessingEvidenceType'
                },
                {
                    metadata: ApiProcessingEvidenceField.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'requiredEvidenceFields',
                    classname: 'ApiProcessingAction',
                    dataType: 'Array&lt;ApiProcessingEvidenceField&gt;',
                    isPrimitiveType: false,
                    isListContainer: true,
                    complexType: 'ApiProcessingEvidenceField'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'sortOrder',
                    classname: 'ApiProcessingAction',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: ApiFacility.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'supportedFacilities',
                    classname: 'ApiProcessingAction',
                    dataType: 'Array&lt;ApiFacility&gt;',
                    isPrimitiveType: false,
                    isListContainer: true,
                    complexType: 'ApiFacility'
                },
                {
                    metadata: ApiProcessingActionTranslation.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'translations',
                    classname: 'ApiProcessingAction',
                    dataType: 'Array&lt;ApiProcessingActionTranslation&gt;',
                    isPrimitiveType: false,
                    isListContainer: true,
                    complexType: 'ApiProcessingActionTranslation'
                },
                {
                    isReadOnly: false,
                    isEnum: true,
                    datatypeWithEnum: 'ApiProcessingAction.TypeEnum',
                    required: false,
                    name: 'type',
                    classname: 'ApiProcessingAction',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: ApiValueChain.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'valueChains',
                    classname: 'ApiProcessingAction',
                    dataType: 'Array&lt;ApiValueChain&gt;',
                    isPrimitiveType: false,
                    isListContainer: true,
                    complexType: 'ApiValueChain'
                },
            ],
            validators: {
                company: [
                ],
                description: [
                ],
                estimatedOutputQuantityPerUnit: [
                ],
                finalProductAction: [
                ],
                id: [
                ],
                inputFinalProduct: [
                ],
                inputSemiProduct: [
                ],
                language: [
                ],
                maxOutputWeight: [
                ],
                name: [
                ],
                outputFinalProduct: [
                ],
                outputSemiProducts: [
                ],
                prefix: [
                ],
                publicTimelineIconType: [
                ],
                publicTimelineLabel: [
                ],
                publicTimelineLocation: [
                ],
                qrCodeForFinalProduct: [
                ],
                repackedOutputFinalProducts: [
                ],
                requiredDocumentTypes: [
                ],
                requiredEvidenceFields: [
                ],
                sortOrder: [
                ],
                supportedFacilities: [
                ],
                translations: [
                ],
                type: [
                ],
                valueChains: [
                ],
            }
        }
    }

  // export const ApiProcessingActionValidationScheme = {
  //     validators: [],
  //     fields: {
  //               company: {
  //                   validators: []
  //               },
  //               description: {
  //                   validators: []
  //               },
  //               estimatedOutputQuantityPerUnit: {
  //                   validators: []
  //               },
  //               finalProductAction: {
  //                   validators: []
  //               },
  //               id: {
  //                   validators: []
  //               },
  //               inputFinalProduct: {
  //                   validators: []
  //               },
  //               inputSemiProduct: {
  //                   validators: []
  //               },
  //               language: {
  //                   validators: []
  //               },
  //               maxOutputWeight: {
  //                   validators: []
  //               },
  //               name: {
  //                   validators: []
  //               },
  //               outputFinalProduct: {
  //                   validators: []
  //               },
  //               outputSemiProducts: {
  //                   validators: []
  //               },
  //               prefix: {
  //                   validators: []
  //               },
  //               publicTimelineIconType: {
  //                   validators: []
  //               },
  //               publicTimelineLabel: {
  //                   validators: []
  //               },
  //               publicTimelineLocation: {
  //                   validators: []
  //               },
  //               qrCodeForFinalProduct: {
  //                   validators: []
  //               },
  //               repackedOutputFinalProducts: {
  //                   validators: []
  //               },
  //               requiredDocumentTypes: {
  //                   validators: []
  //               },
  //               requiredEvidenceFields: {
  //                   validators: []
  //               },
  //               sortOrder: {
  //                   validators: []
  //               },
  //               supportedFacilities: {
  //                   validators: []
  //               },
  //               translations: {
  //                   validators: []
  //               },
  //               type: {
  //                   validators: []
  //               },
  //               valueChains: {
  //                   validators: []
  //               },
  //     }
  // } as SimpleValidationScheme<ApiProcessingAction>;


}


