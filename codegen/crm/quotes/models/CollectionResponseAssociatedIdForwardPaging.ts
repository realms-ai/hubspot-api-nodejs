/**
 * Quotes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AssociatedId } from './AssociatedId';
import { ForwardPaging } from './ForwardPaging';
import { HttpFile } from '../http/http';

export class CollectionResponseAssociatedIdForwardPaging {
    'results': Array<AssociatedId>;
    'paging'?: ForwardPaging;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<AssociatedId>",
            "format": ""
        },
        {
            "name": "paging",
            "baseName": "paging",
            "type": "ForwardPaging",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CollectionResponseAssociatedIdForwardPaging.attributeTypeMap;
    }

    public constructor() {
    }
}

