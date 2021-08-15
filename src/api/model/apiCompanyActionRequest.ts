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





export interface ApiCompanyActionRequest { 
    /**
     * Company id
     */
    companyId?: number;
    /**
     * Company user role
     */
    companyUserRole?: ApiCompanyActionRequest.CompanyUserRoleEnum;
    /**
     * Other company id
     */
    otherCompanyId?: number;
    /**
     * User id
     */
    userId?: number;
}

/**
 * Namespace for property- and property-value-enumerations of ApiCompanyActionRequest.
 */
export namespace ApiCompanyActionRequest {
    /**
     * All properties of ApiCompanyActionRequest.
     */
    export enum Properties {
        /**
         * Company id
         */
        companyId = 'companyId',
        /**
         * Company user role
         */
        companyUserRole = 'companyUserRole',
        /**
         * Other company id
         */
        otherCompanyId = 'otherCompanyId',
        /**
         * User id
         */
        userId = 'userId'
    }

    /**
     * All possible values of companyUserRole.
     */
    export enum CompanyUserRoleEnum {
        USER = 'USER',
        ADMIN = 'ADMIN',
        MANAGER = 'MANAGER',
        ACCOUNTANT = 'ACCOUNTANT'
    }


    export function formMetadata() {
        return  {
            metadata: formMetadata,
            classname: 'ApiCompanyActionRequest',
            vars: [
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'companyId',
                    classname: 'ApiCompanyActionRequest',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: true,
                    datatypeWithEnum: 'ApiCompanyActionRequest.CompanyUserRoleEnum',
                    required: false,
                    name: 'companyUserRole',
                    classname: 'ApiCompanyActionRequest',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'otherCompanyId',
                    classname: 'ApiCompanyActionRequest',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'userId',
                    classname: 'ApiCompanyActionRequest',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
            ],
            validators: {
                companyId: [
                ],
                companyUserRole: [
                ],
                otherCompanyId: [
                ],
                userId: [
                ],
            }
        }
    }

  // export const ApiCompanyActionRequestValidationScheme = {
  //     validators: [],
  //     fields: {
  //               companyId: {
  //                   validators: []
  //               },
  //               companyUserRole: {
  //                   validators: []
  //               },
  //               otherCompanyId: {
  //                   validators: []
  //               },
  //               userId: {
  //                   validators: []
  //               },
  //     }
  // } as SimpleValidationScheme<ApiCompanyActionRequest>;


}


