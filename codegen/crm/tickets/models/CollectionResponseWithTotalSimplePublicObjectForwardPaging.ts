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

import { ForwardPaging } from './ForwardPaging';
import { SimplePublicObject } from './SimplePublicObject';
import { HttpFile } from '../http/http';

export class CollectionResponseWithTotalSimplePublicObjectForwardPaging {
    'total': number;
    'results': Array<SimplePublicObject>;
    'paging'?: ForwardPaging;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "total",
            "baseName": "total",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<SimplePublicObject>",
            "format": ""
        },
        {
            "name": "paging",
            "baseName": "paging",
            "type": "ForwardPaging",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CollectionResponseWithTotalSimplePublicObjectForwardPaging.attributeTypeMap;
    }

    public constructor() {
    }
}

