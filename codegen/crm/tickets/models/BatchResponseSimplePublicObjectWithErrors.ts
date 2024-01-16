/**
 * Tickets
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SimplePublicObject } from '../models/SimplePublicObject';
import { StandardError } from '../models/StandardError';

export class BatchResponseSimplePublicObjectWithErrors {
    'completedAt': Date;
    'numErrors'?: number;
    'requestedAt'?: Date;
    'startedAt': Date;
    'links'?: { [key: string]: string; };
    'results': Array<SimplePublicObject>;
    'errors'?: Array<StandardError>;
    'status': BatchResponseSimplePublicObjectWithErrorsStatusEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "completedAt",
            "baseName": "completedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "numErrors",
            "baseName": "numErrors",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "requestedAt",
            "baseName": "requestedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "startedAt",
            "baseName": "startedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<SimplePublicObject>",
            "format": ""
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<StandardError>",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "BatchResponseSimplePublicObjectWithErrorsStatusEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BatchResponseSimplePublicObjectWithErrors.attributeTypeMap;
    }

    public constructor() {
    }
}


export type BatchResponseSimplePublicObjectWithErrorsStatusEnum = "PENDING" | "PROCESSING" | "CANCELED" | "COMPLETE" ;

