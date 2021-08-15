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





export interface ApiUserGet { 
    /**
     * Possible actions
     */
    actions?: Array<ApiUserGet.ActionsEnum>;
    /**
     * User's company ids
     */
    companyIds?: Array<number>;
    /**
     * Email/username
     */
    email?: string;
    /**
     * Entity id
     */
    id?: number;
    /**
     * language
     */
    language?: ApiUserGet.LanguageEnum;
    /**
     * Name
     */
    name?: string;
    /**
     * User role
     */
    role?: ApiUserGet.RoleEnum;
    /**
     * Status
     */
    status?: ApiUserGet.StatusEnum;
    /**
     * Surname
     */
    surname?: string;
}

/**
 * Namespace for property- and property-value-enumerations of ApiUserGet.
 */
export namespace ApiUserGet {
    /**
     * All properties of ApiUserGet.
     */
    export enum Properties {
        /**
         * Possible actions
         */
        actions = 'actions',
        /**
         * User's company ids
         */
        companyIds = 'companyIds',
        /**
         * Email/username
         */
        email = 'email',
        /**
         * Entity id
         */
        id = 'id',
        /**
         * language
         */
        language = 'language',
        /**
         * Name
         */
        name = 'name',
        /**
         * User role
         */
        role = 'role',
        /**
         * Status
         */
        status = 'status',
        /**
         * Surname
         */
        surname = 'surname'
    }

    /**
     * All possible values of actions.
     */
    export enum ActionsEnum {
        VIEWUSERPROFILE = 'VIEW_USER_PROFILE',
        CREATECOMPANY = 'CREATE_COMPANY',
        UPDATEUSERPROFILE = 'UPDATE_USER_PROFILE',
        ACTIVATEUSER = 'ACTIVATE_USER',
        CONFIRMUSEREMAIL = 'CONFIRM_USER_EMAIL',
        DEACTIVATEUSER = 'DEACTIVATE_USER',
        SETUSERADMIN = 'SET_USER_ADMIN',
        UNSETUSERADMIN = 'UNSET_USER_ADMIN',
        SETUSERROLE = 'SET_USER_ROLE'
    }

    /**
     * All possible values of language.
     */
    export enum LanguageEnum {
        EN = 'EN',
        DE = 'DE',
        RW = 'RW'
    }

    /**
     * All possible values of role.
     */
    export enum RoleEnum {
        USER = 'USER',
        ADMIN = 'ADMIN',
        MANAGER = 'MANAGER',
        ACCOUNTANT = 'ACCOUNTANT'
    }

    /**
     * All possible values of status.
     */
    export enum StatusEnum {
        UNCONFIRMED = 'UNCONFIRMED',
        CONFIRMEDEMAIL = 'CONFIRMED_EMAIL',
        ACTIVE = 'ACTIVE',
        DEACTIVATED = 'DEACTIVATED'
    }


    export function formMetadata() {
        return  {
            metadata: formMetadata,
            classname: 'ApiUserGet',
            vars: [
                {
                    isReadOnly: false,
                    isEnum: true,
                    datatypeWithEnum: 'Array&lt;ApiUserGet.ActionsEnum&gt;',
                    required: false,
                    name: 'actions',
                    classname: 'ApiUserGet',
                    dataType: 'Array&lt;string&gt;',
                    isPrimitiveType: true,
                    isListContainer: true,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'companyIds',
                    classname: 'ApiUserGet',
                    dataType: 'Array&lt;number&gt;',
                    isPrimitiveType: true,
                    isListContainer: true,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'email',
                    classname: 'ApiUserGet',
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
                    classname: 'ApiUserGet',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: true,
                    datatypeWithEnum: 'ApiUserGet.LanguageEnum',
                    required: false,
                    name: 'language',
                    classname: 'ApiUserGet',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'name',
                    classname: 'ApiUserGet',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: true,
                    datatypeWithEnum: 'ApiUserGet.RoleEnum',
                    required: false,
                    name: 'role',
                    classname: 'ApiUserGet',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: true,
                    datatypeWithEnum: 'ApiUserGet.StatusEnum',
                    required: false,
                    name: 'status',
                    classname: 'ApiUserGet',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'surname',
                    classname: 'ApiUserGet',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
            ],
            validators: {
                actions: [
                ],
                companyIds: [
                ],
                email: [
                ],
                id: [
                ],
                language: [
                ],
                name: [
                ],
                role: [
                ],
                status: [
                ],
                surname: [
                ],
            }
        }
    }

  // export const ApiUserGetValidationScheme = {
  //     validators: [],
  //     fields: {
  //               actions: {
  //                   validators: []
  //               },
  //               companyIds: {
  //                   validators: []
  //               },
  //               email: {
  //                   validators: []
  //               },
  //               id: {
  //                   validators: []
  //               },
  //               language: {
  //                   validators: []
  //               },
  //               name: {
  //                   validators: []
  //               },
  //               role: {
  //                   validators: []
  //               },
  //               status: {
  //                   validators: []
  //               },
  //               surname: {
  //                   validators: []
  //               },
  //     }
  // } as SimpleValidationScheme<ApiUserGet>;


}


