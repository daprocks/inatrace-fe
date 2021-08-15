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





export interface ApiKnowledgeBlogBase { 
    /**
     * Date
     */
    date?: string;
    /**
     * Entity id
     */
    id?: number;
    /**
     * Name
     */
    title?: string;
    /**
     * Type
     */
    type?: ApiKnowledgeBlogBase.TypeEnum;
    /**
     * Youtube URL
     */
    youtubeUrl?: string;
}

/**
 * Namespace for property- and property-value-enumerations of ApiKnowledgeBlogBase.
 */
export namespace ApiKnowledgeBlogBase {
    /**
     * All properties of ApiKnowledgeBlogBase.
     */
    export enum Properties {
        /**
         * Date
         */
        date = 'date',
        /**
         * Entity id
         */
        id = 'id',
        /**
         * Name
         */
        title = 'title',
        /**
         * Type
         */
        type = 'type',
        /**
         * Youtube URL
         */
        youtubeUrl = 'youtubeUrl'
    }

    /**
     * All possible values of type.
     */
    export enum TypeEnum {
        FAIRNESS = 'FAIRNESS',
        QUALITY = 'QUALITY',
        PROVENANCE = 'PROVENANCE'
    }


    export function formMetadata() {
        return  {
            metadata: formMetadata,
            classname: 'ApiKnowledgeBlogBase',
            vars: [
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'date',
                    classname: 'ApiKnowledgeBlogBase',
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
                    classname: 'ApiKnowledgeBlogBase',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'title',
                    classname: 'ApiKnowledgeBlogBase',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: true,
                    datatypeWithEnum: 'ApiKnowledgeBlogBase.TypeEnum',
                    required: false,
                    name: 'type',
                    classname: 'ApiKnowledgeBlogBase',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'youtubeUrl',
                    classname: 'ApiKnowledgeBlogBase',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
            ],
            validators: {
                date: [
                ],
                id: [
                ],
                title: [
                ],
                type: [
                ],
                youtubeUrl: [
                ],
            }
        }
    }

  // export const ApiKnowledgeBlogBaseValidationScheme = {
  //     validators: [],
  //     fields: {
  //               date: {
  //                   validators: []
  //               },
  //               id: {
  //                   validators: []
  //               },
  //               title: {
  //                   validators: []
  //               },
  //               type: {
  //                   validators: []
  //               },
  //               youtubeUrl: {
  //                   validators: []
  //               },
  //     }
  // } as SimpleValidationScheme<ApiKnowledgeBlogBase>;


}


