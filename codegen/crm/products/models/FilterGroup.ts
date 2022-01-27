/**
 * Products
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Filter } from './Filter';
import { HttpFile } from '../http/http';

export class FilterGroup {
    'filters': Array<Filter>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "filters",
            "baseName": "filters",
            "type": "Array<Filter>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FilterGroup.attributeTypeMap;
    }

    public constructor() {
    }
}

