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





export interface ApiMeasureUnitType { 
    /**
     * code
     */
    code?: string;
    /**
     * Entity id
     */
    id?: number;
    /**
     * label
     */
    label?: string;
    underlyingMeasurementUnitType?: ApiMeasureUnitType;
}

/**
 * Namespace for property- and property-value-enumerations of ApiMeasureUnitType.
 */
export namespace ApiMeasureUnitType {
    /**
     * All properties of ApiMeasureUnitType.
     */
    export enum Properties {
        /**
         * code
         */
        code = 'code',
        /**
         * Entity id
         */
        id = 'id',
        /**
         * label
         */
        label = 'label',
        underlyingMeasurementUnitType = 'underlyingMeasurementUnitType'
    }


    export function formMetadata() {
        return  {
            metadata: formMetadata,
            classname: 'ApiMeasureUnitType',
            vars: [
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'code',
                    classname: 'ApiMeasureUnitType',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'id',
                    classname: 'ApiMeasureUnitType',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'label',
                    classname: 'ApiMeasureUnitType',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: ApiMeasureUnitType.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'underlyingMeasurementUnitType',
                    classname: 'ApiMeasureUnitType',
                    dataType: 'ApiMeasureUnitType',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiMeasureUnitType'
                },
            ],
            validators: {
                code: [
                ],
                id: [
                ],
                label: [
                ],
                underlyingMeasurementUnitType: [
                ],
            }
        }
    }

  // export const ApiMeasureUnitTypeValidationScheme = {
  //     validators: [],
  //     fields: {
  //               code: {
  //                   validators: []
  //               },
  //               id: {
  //                   validators: []
  //               },
  //               label: {
  //                   validators: []
  //               },
  //               underlyingMeasurementUnitType: {
  //                   validators: []
  //               },
  //     }
  // } as SimpleValidationScheme<ApiMeasureUnitType>;


}


