/**
 * Schemas
 * The CRM uses schemas to define how custom objects should store and represent information in the HubSpot CRM. Schemas define details about an object's type, properties, and associations. The schema can be uniquely identified by its **object type ID**.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { OptionInput } from './OptionInput';
import { HttpFile } from '../http/http';

/**
* Defines a property to create.
*/
export class ObjectTypePropertyCreate {
    /**
    * The internal property name, which must be used when referencing the property from the API.
    */
    'name': string;
    /**
    * A human-readable property label that will be shown in HubSpot.
    */
    'label': string;
    /**
    * The name of the group this property belongs to.
    */
    'groupName'?: string;
    /**
    * A description of the property that will be shown as help text in HubSpot.
    */
    'description'?: string;
    /**
    * A list of available options for the property. This field is only required for enumerated properties.
    */
    'options'?: Array<OptionInput>;
    /**
    * The order that this property should be displayed in the HubSpot UI relative to other properties for this object type. Properties are displayed in order starting with the lowest positive integer value. A value of -1 will cause the property to be displayed **after** any positive values.
    */
    'displayOrder'?: number;
    /**
    * Whether or not the property's value must be unique. Once set, this can't be changed.
    */
    'hasUniqueValue'?: boolean;
    'hidden'?: boolean;
    /**
    * The data type of the property.
    */
    'type': ObjectTypePropertyCreateTypeEnum;
    /**
    * Controls how the property appears in HubSpot.
    */
    'fieldType': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string",
            "format": ""
        },
        {
            "name": "groupName",
            "baseName": "groupName",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "Array<OptionInput>",
            "format": ""
        },
        {
            "name": "displayOrder",
            "baseName": "displayOrder",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "hasUniqueValue",
            "baseName": "hasUniqueValue",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "hidden",
            "baseName": "hidden",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ObjectTypePropertyCreateTypeEnum",
            "format": ""
        },
        {
            "name": "fieldType",
            "baseName": "fieldType",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ObjectTypePropertyCreate.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ObjectTypePropertyCreateTypeEnum = "string" | "number" | "date" | "datetime" | "enumeration" | "bool" ;

