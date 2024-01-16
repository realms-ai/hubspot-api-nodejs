/**
 * Postal Mail
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AssociationSpec } from '../models/AssociationSpec';
import { PublicObjectId } from '../models/PublicObjectId';

export class PublicAssociationsForObject {
    'types': Array<AssociationSpec>;
    'to': PublicObjectId;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "types",
            "baseName": "types",
            "type": "Array<AssociationSpec>",
            "format": ""
        },
        {
            "name": "to",
            "baseName": "to",
            "type": "PublicObjectId",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PublicAssociationsForObject.attributeTypeMap;
    }

    public constructor() {
    }
}

