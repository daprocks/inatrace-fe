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


import { ApiCompany } from './apiCompany';
import { ApiCompanyBase } from './apiCompanyBase';
import { ApiCompanyCustomer } from './apiCompanyCustomer';
import { ApiDocument } from './apiDocument';
import { ApiStockOrder } from './apiStockOrder';
import { ApiUser } from './apiUser';
import { ApiUserCustomer } from './apiUserCustomer';



export interface ApiPayment { 
    /**
     * Payment amount paid to the collector
     */
    amountPaidToTheCollector?: number;
    /**
     * Payment amount paid to the farmer
     */
    amountPaidToTheFarmer?: number;
    createdBy?: ApiUser;
    /**
     * Payment's currency
     */
    currency?: string;
    /**
     * Formal creation time (for example: date on receipt)
     */
    formalCreationTime?: Date;
    /**
     * Entity id
     */
    id?: number;
    payingCompany?: ApiCompany;
    /**
     * Payment time confirmation
     */
    paymentConfirmedAtTime?: Date;
    paymentConfirmedByUser?: ApiUser;
    /**
     * Payment purpose type
     */
    paymentPurposeType?: ApiPayment.PaymentPurposeTypeEnum;
    /**
     * Payment status
     */
    paymentStatus?: ApiPayment.PaymentStatusEnum;
    /**
     * Payment type
     */
    paymentType?: ApiPayment.PaymentTypeEnum;
    /**
     * Preferred way of payment
     */
    preferredWayOfPayment?: ApiPayment.PreferredWayOfPaymentEnum;
    /**
     * Production date
     */
    productionDate?: Date;
    /**
     * Quantity purchased to be paid
     */
    purchased?: number;
    receiptDocument?: ApiDocument;
    /**
     * Receipt document type
     */
    receiptDocumentType?: ApiPayment.ReceiptDocumentTypeEnum;
    /**
     * Receipt number
     */
    receiptNumber?: number;
    recipientCompany?: ApiCompanyBase;
    recipientCompanyCustomer?: ApiCompanyCustomer;
    /**
     * Recipient type
     */
    recipientType?: ApiPayment.RecipientTypeEnum;
    recipientUserCustomer?: ApiUserCustomer;
    representativeOfRecipientCompany?: ApiCompanyBase;
    representativeOfRecipientUserCustomer?: ApiUserCustomer;
    stockOrder?: ApiStockOrder;
    /**
     * Payment total amount
     */
    totalPaid?: number;
    updatedBy?: ApiUser;
    /**
     * Last updated timestamp
     */
    updatedTimestamp?: Date;
}

/**
 * Namespace for property- and property-value-enumerations of ApiPayment.
 */
export namespace ApiPayment {
    /**
     * All properties of ApiPayment.
     */
    export enum Properties {
        /**
         * Payment amount paid to the collector
         */
        amountPaidToTheCollector = 'amountPaidToTheCollector',
        /**
         * Payment amount paid to the farmer
         */
        amountPaidToTheFarmer = 'amountPaidToTheFarmer',
        createdBy = 'createdBy',
        /**
         * Payment's currency
         */
        currency = 'currency',
        /**
         * Formal creation time (for example: date on receipt)
         */
        formalCreationTime = 'formalCreationTime',
        /**
         * Entity id
         */
        id = 'id',
        payingCompany = 'payingCompany',
        /**
         * Payment time confirmation
         */
        paymentConfirmedAtTime = 'paymentConfirmedAtTime',
        paymentConfirmedByUser = 'paymentConfirmedByUser',
        /**
         * Payment purpose type
         */
        paymentPurposeType = 'paymentPurposeType',
        /**
         * Payment status
         */
        paymentStatus = 'paymentStatus',
        /**
         * Payment type
         */
        paymentType = 'paymentType',
        /**
         * Preferred way of payment
         */
        preferredWayOfPayment = 'preferredWayOfPayment',
        /**
         * Production date
         */
        productionDate = 'productionDate',
        /**
         * Quantity purchased to be paid
         */
        purchased = 'purchased',
        receiptDocument = 'receiptDocument',
        /**
         * Receipt document type
         */
        receiptDocumentType = 'receiptDocumentType',
        /**
         * Receipt number
         */
        receiptNumber = 'receiptNumber',
        recipientCompany = 'recipientCompany',
        recipientCompanyCustomer = 'recipientCompanyCustomer',
        /**
         * Recipient type
         */
        recipientType = 'recipientType',
        recipientUserCustomer = 'recipientUserCustomer',
        representativeOfRecipientCompany = 'representativeOfRecipientCompany',
        representativeOfRecipientUserCustomer = 'representativeOfRecipientUserCustomer',
        stockOrder = 'stockOrder',
        /**
         * Payment total amount
         */
        totalPaid = 'totalPaid',
        updatedBy = 'updatedBy',
        /**
         * Last updated timestamp
         */
        updatedTimestamp = 'updatedTimestamp'
    }

    /**
     * All possible values of paymentPurposeType.
     */
    export enum PaymentPurposeTypeEnum {
        ADVANCEPAYMENT = 'ADVANCE_PAYMENT',
        FIRSTINSTALLMENT = 'FIRST_INSTALLMENT',
        SECONDINSTALLMENT = 'SECOND_INSTALLMENT',
        WOMENPREMIUM = 'WOMEN_PREMIUM',
        INVOICEPAYMENT = 'INVOICE_PAYMENT'
    }

    /**
     * All possible values of paymentStatus.
     */
    export enum PaymentStatusEnum {
        UNCONFIRMED = 'UNCONFIRMED',
        CONFIRMED = 'CONFIRMED'
    }

    /**
     * All possible values of paymentType.
     */
    export enum PaymentTypeEnum {
        CASH = 'CASH',
        BANK = 'BANK'
    }

    /**
     * All possible values of preferredWayOfPayment.
     */
    export enum PreferredWayOfPaymentEnum {
        CASH = 'CASH',
        CASHVIACOLLECTOR = 'CASH_VIA_COLLECTOR',
        BANKTRANSFER = 'BANK_TRANSFER',
        CHEQUE = 'CHEQUE',
        OFFSETTING = 'OFFSETTING',
        UNKNOWN = 'UNKNOWN'
    }

    /**
     * All possible values of receiptDocumentType.
     */
    export enum ReceiptDocumentTypeEnum {
        PURCHASESHEET = 'PURCHASE_SHEET',
        RECEIPT = 'RECEIPT'
    }

    /**
     * All possible values of recipientType.
     */
    export enum RecipientTypeEnum {
        ORGANIZATION = 'ORGANIZATION',
        COMPANYCUSTOMER = 'COMPANY_CUSTOMER',
        USERCUSTOMER = 'USER_CUSTOMER'
    }


    export function formMetadata() {
        return  {
            metadata: formMetadata,
            classname: 'ApiPayment',
            vars: [
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'amountPaidToTheCollector',
                    classname: 'ApiPayment',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'amountPaidToTheFarmer',
                    classname: 'ApiPayment',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: ApiUser.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'createdBy',
                    classname: 'ApiPayment',
                    dataType: 'ApiUser',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiUser'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'currency',
                    classname: 'ApiPayment',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'formalCreationTime',
                    classname: 'ApiPayment',
                    dataType: 'Date',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'id',
                    classname: 'ApiPayment',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: ApiCompany.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'payingCompany',
                    classname: 'ApiPayment',
                    dataType: 'ApiCompany',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiCompany'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'paymentConfirmedAtTime',
                    classname: 'ApiPayment',
                    dataType: 'Date',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: ApiUser.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'paymentConfirmedByUser',
                    classname: 'ApiPayment',
                    dataType: 'ApiUser',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiUser'
                },
                {
                    isReadOnly: false,
                    isEnum: true,
                    datatypeWithEnum: 'ApiPayment.PaymentPurposeTypeEnum',
                    required: false,
                    name: 'paymentPurposeType',
                    classname: 'ApiPayment',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: true,
                    datatypeWithEnum: 'ApiPayment.PaymentStatusEnum',
                    required: false,
                    name: 'paymentStatus',
                    classname: 'ApiPayment',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: true,
                    datatypeWithEnum: 'ApiPayment.PaymentTypeEnum',
                    required: false,
                    name: 'paymentType',
                    classname: 'ApiPayment',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: true,
                    datatypeWithEnum: 'ApiPayment.PreferredWayOfPaymentEnum',
                    required: false,
                    name: 'preferredWayOfPayment',
                    classname: 'ApiPayment',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'productionDate',
                    classname: 'ApiPayment',
                    dataType: 'Date',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'purchased',
                    classname: 'ApiPayment',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: ApiDocument.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'receiptDocument',
                    classname: 'ApiPayment',
                    dataType: 'ApiDocument',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiDocument'
                },
                {
                    isReadOnly: false,
                    isEnum: true,
                    datatypeWithEnum: 'ApiPayment.ReceiptDocumentTypeEnum',
                    required: false,
                    name: 'receiptDocumentType',
                    classname: 'ApiPayment',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'receiptNumber',
                    classname: 'ApiPayment',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: ApiCompanyBase.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'recipientCompany',
                    classname: 'ApiPayment',
                    dataType: 'ApiCompanyBase',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiCompanyBase'
                },
                {
                    metadata: ApiCompanyCustomer.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'recipientCompanyCustomer',
                    classname: 'ApiPayment',
                    dataType: 'ApiCompanyCustomer',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiCompanyCustomer'
                },
                {
                    isReadOnly: false,
                    isEnum: true,
                    datatypeWithEnum: 'ApiPayment.RecipientTypeEnum',
                    required: false,
                    name: 'recipientType',
                    classname: 'ApiPayment',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: ApiUserCustomer.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'recipientUserCustomer',
                    classname: 'ApiPayment',
                    dataType: 'ApiUserCustomer',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiUserCustomer'
                },
                {
                    metadata: ApiCompanyBase.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'representativeOfRecipientCompany',
                    classname: 'ApiPayment',
                    dataType: 'ApiCompanyBase',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiCompanyBase'
                },
                {
                    metadata: ApiUserCustomer.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'representativeOfRecipientUserCustomer',
                    classname: 'ApiPayment',
                    dataType: 'ApiUserCustomer',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiUserCustomer'
                },
                {
                    metadata: ApiStockOrder.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'stockOrder',
                    classname: 'ApiPayment',
                    dataType: 'ApiStockOrder',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiStockOrder'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'totalPaid',
                    classname: 'ApiPayment',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: ApiUser.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'updatedBy',
                    classname: 'ApiPayment',
                    dataType: 'ApiUser',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiUser'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'updatedTimestamp',
                    classname: 'ApiPayment',
                    dataType: 'Date',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
            ],
            validators: {
                amountPaidToTheCollector: [
                ],
                amountPaidToTheFarmer: [
                ],
                createdBy: [
                ],
                currency: [
                ],
                formalCreationTime: [
                ],
                id: [
                ],
                payingCompany: [
                ],
                paymentConfirmedAtTime: [
                ],
                paymentConfirmedByUser: [
                ],
                paymentPurposeType: [
                ],
                paymentStatus: [
                ],
                paymentType: [
                ],
                preferredWayOfPayment: [
                ],
                productionDate: [
                ],
                purchased: [
                ],
                receiptDocument: [
                ],
                receiptDocumentType: [
                ],
                receiptNumber: [
                ],
                recipientCompany: [
                ],
                recipientCompanyCustomer: [
                ],
                recipientType: [
                ],
                recipientUserCustomer: [
                ],
                representativeOfRecipientCompany: [
                ],
                representativeOfRecipientUserCustomer: [
                ],
                stockOrder: [
                ],
                totalPaid: [
                ],
                updatedBy: [
                ],
                updatedTimestamp: [
                ],
            }
        }
    }

  // export const ApiPaymentValidationScheme = {
  //     validators: [],
  //     fields: {
  //               amountPaidToTheCollector: {
  //                   validators: []
  //               },
  //               amountPaidToTheFarmer: {
  //                   validators: []
  //               },
  //               createdBy: {
  //                   validators: []
  //               },
  //               currency: {
  //                   validators: []
  //               },
  //               formalCreationTime: {
  //                   validators: []
  //               },
  //               id: {
  //                   validators: []
  //               },
  //               payingCompany: {
  //                   validators: []
  //               },
  //               paymentConfirmedAtTime: {
  //                   validators: []
  //               },
  //               paymentConfirmedByUser: {
  //                   validators: []
  //               },
  //               paymentPurposeType: {
  //                   validators: []
  //               },
  //               paymentStatus: {
  //                   validators: []
  //               },
  //               paymentType: {
  //                   validators: []
  //               },
  //               preferredWayOfPayment: {
  //                   validators: []
  //               },
  //               productionDate: {
  //                   validators: []
  //               },
  //               purchased: {
  //                   validators: []
  //               },
  //               receiptDocument: {
  //                   validators: []
  //               },
  //               receiptDocumentType: {
  //                   validators: []
  //               },
  //               receiptNumber: {
  //                   validators: []
  //               },
  //               recipientCompany: {
  //                   validators: []
  //               },
  //               recipientCompanyCustomer: {
  //                   validators: []
  //               },
  //               recipientType: {
  //                   validators: []
  //               },
  //               recipientUserCustomer: {
  //                   validators: []
  //               },
  //               representativeOfRecipientCompany: {
  //                   validators: []
  //               },
  //               representativeOfRecipientUserCustomer: {
  //                   validators: []
  //               },
  //               stockOrder: {
  //                   validators: []
  //               },
  //               totalPaid: {
  //                   validators: []
  //               },
  //               updatedBy: {
  //                   validators: []
  //               },
  //               updatedTimestamp: {
  //                   validators: []
  //               },
  //     }
  // } as SimpleValidationScheme<ApiPayment>;


}


