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


import { ApiAddress } from './apiAddress';
import { ApiBaseEntity } from './apiBaseEntity';
import { ApiCertification } from './apiCertification';
import { ApiCompanyDocument } from './apiCompanyDocument';
import { ApiCurrencyType } from './apiCurrencyType';
import { ApiDocument } from './apiDocument';



export interface ApiCompanyUpdate { 
    /**
     * company abbreviation
     */
    abbreviation?: string;
    /**
     * about the company
     */
    about?: string;
    /**
     * company certifications
     */
    certifications?: Array<ApiCertification>;
    currency?: ApiCurrencyType;
    /**
     * company documents
     */
    documents?: Array<ApiCompanyDocument>;
    /**
     * email
     */
    email?: string;
    headquarters?: ApiAddress;
    /**
     * Entity id
     */
    id?: number;
    /**
     * interview
     */
    interview?: string;
    /**
     * Language
     */
    language?: ApiCompanyUpdate.LanguageEnum;
    logo?: ApiDocument;
    /**
     * name of manager / CEO
     */
    manager?: string;
    /**
     * social media URL links (Facebook, Instagram, Twitter, YouTube, ...)
     */
    mediaLinks?: { [key: string]: string; };
    /**
     * company name
     */
    name?: string;
    /**
     * webpage
     */
    phone?: string;
    /**
     * Add users with these ids
     */
    users?: Array<ApiBaseEntity>;
    /**
     * webpage
     */
    webPage?: string;
}

/**
 * Namespace for property- and property-value-enumerations of ApiCompanyUpdate.
 */
export namespace ApiCompanyUpdate {
    /**
     * All properties of ApiCompanyUpdate.
     */
    export enum Properties {
        /**
         * company abbreviation
         */
        abbreviation = 'abbreviation',
        /**
         * about the company
         */
        about = 'about',
        /**
         * company certifications
         */
        certifications = 'certifications',
        currency = 'currency',
        /**
         * company documents
         */
        documents = 'documents',
        /**
         * email
         */
        email = 'email',
        headquarters = 'headquarters',
        /**
         * Entity id
         */
        id = 'id',
        /**
         * interview
         */
        interview = 'interview',
        /**
         * Language
         */
        language = 'language',
        logo = 'logo',
        /**
         * name of manager / CEO
         */
        manager = 'manager',
        /**
         * social media URL links (Facebook, Instagram, Twitter, YouTube, ...)
         */
        mediaLinks = 'mediaLinks',
        /**
         * company name
         */
        name = 'name',
        /**
         * webpage
         */
        phone = 'phone',
        /**
         * Add users with these ids
         */
        users = 'users',
        /**
         * webpage
         */
        webPage = 'webPage'
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


    export function formMetadata() {
        return  {
            metadata: formMetadata,
            classname: 'ApiCompanyUpdate',
            vars: [
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'abbreviation',
                    classname: 'ApiCompanyUpdate',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'about',
                    classname: 'ApiCompanyUpdate',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: ApiCertification.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'certifications',
                    classname: 'ApiCompanyUpdate',
                    dataType: 'Array&lt;ApiCertification&gt;',
                    isPrimitiveType: false,
                    isListContainer: true,
                    complexType: 'ApiCertification'
                },
                {
                    metadata: ApiCurrencyType.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'currency',
                    classname: 'ApiCompanyUpdate',
                    dataType: 'ApiCurrencyType',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiCurrencyType'
                },
                {
                    metadata: ApiCompanyDocument.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'documents',
                    classname: 'ApiCompanyUpdate',
                    dataType: 'Array&lt;ApiCompanyDocument&gt;',
                    isPrimitiveType: false,
                    isListContainer: true,
                    complexType: 'ApiCompanyDocument'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'email',
                    classname: 'ApiCompanyUpdate',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: ApiAddress.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'headquarters',
                    classname: 'ApiCompanyUpdate',
                    dataType: 'ApiAddress',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiAddress'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'id',
                    classname: 'ApiCompanyUpdate',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'interview',
                    classname: 'ApiCompanyUpdate',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: true,
                    datatypeWithEnum: 'ApiCompanyUpdate.LanguageEnum',
                    required: false,
                    name: 'language',
                    classname: 'ApiCompanyUpdate',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: ApiDocument.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'logo',
                    classname: 'ApiCompanyUpdate',
                    dataType: 'ApiDocument',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiDocument'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'manager',
                    classname: 'ApiCompanyUpdate',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'mediaLinks',
                    classname: 'ApiCompanyUpdate',
                    dataType: '{ [key: string]: string; }',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'name',
                    classname: 'ApiCompanyUpdate',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'phone',
                    classname: 'ApiCompanyUpdate',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: ApiBaseEntity.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'users',
                    classname: 'ApiCompanyUpdate',
                    dataType: 'Array&lt;ApiBaseEntity&gt;',
                    isPrimitiveType: false,
                    isListContainer: true,
                    complexType: 'ApiBaseEntity'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'webPage',
                    classname: 'ApiCompanyUpdate',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
            ],
            validators: {
                abbreviation: [
                ],
                about: [
                ],
                certifications: [
                ],
                currency: [
                ],
                documents: [
                ],
                email: [
                ],
                headquarters: [
                ],
                id: [
                ],
                interview: [
                ],
                language: [
                ],
                logo: [
                ],
                manager: [
                ],
                mediaLinks: [
                ],
                name: [
                ],
                phone: [
                ],
                users: [
                ],
                webPage: [
                ],
            }
        }
    }

  // export const ApiCompanyUpdateValidationScheme = {
  //     validators: [],
  //     fields: {
  //               abbreviation: {
  //                   validators: []
  //               },
  //               about: {
  //                   validators: []
  //               },
  //               certifications: {
  //                   validators: []
  //               },
  //               currency: {
  //                   validators: []
  //               },
  //               documents: {
  //                   validators: []
  //               },
  //               email: {
  //                   validators: []
  //               },
  //               headquarters: {
  //                   validators: []
  //               },
  //               id: {
  //                   validators: []
  //               },
  //               interview: {
  //                   validators: []
  //               },
  //               language: {
  //                   validators: []
  //               },
  //               logo: {
  //                   validators: []
  //               },
  //               manager: {
  //                   validators: []
  //               },
  //               mediaLinks: {
  //                   validators: []
  //               },
  //               name: {
  //                   validators: []
  //               },
  //               phone: {
  //                   validators: []
  //               },
  //               users: {
  //                   validators: []
  //               },
  //               webPage: {
  //                   validators: []
  //               },
  //     }
  // } as SimpleValidationScheme<ApiCompanyUpdate>;


}


