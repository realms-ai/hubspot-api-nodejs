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

import { OptionInput } from '../models/OptionInput';

/**
* Defines a property to create.
*/
export class ObjectTypePropertyCreate {
    'hidden'?: boolean;
    /**
    * Controls how the property options will be sorted in the HubSpot UI.
    */
    'optionSortStrategy'?: ObjectTypePropertyCreateOptionSortStrategyEnum;
    /**
    * The order that this property should be displayed in the HubSpot UI relative to other properties for this object type. Properties are displayed in order starting with the lowest positive integer value. A value of -1 will cause the property to be displayed **after** any positive values.
    */
    'displayOrder'?: number;
    /**
    * A description of the property that will be shown as help text in HubSpot.
    */
    'description'?: string;
    /**
    * Whether the property will display the currency symbol in the HubSpot UI.
    */
    'showCurrencySymbol'?: boolean;
    /**
    * A human-readable property label that will be shown in HubSpot.
    */
    'label': string;
    /**
    * The data type of the property.
    */
    'type': ObjectTypePropertyCreateTypeEnum;
    /**
    * Whether the property can be used in a HubSpot form.
    */
    'formField'?: boolean;
    /**
    * The name of the group this property belongs to.
    */
    'groupName'?: string;
    /**
    * Defines the options this property will return, e.g. OWNER would return name of users on the portal.
    */
    'referencedObjectType'?: string;
    /**
    * Controls how text properties are formatted in the HubSpot UI
    */
    'textDisplayHint'?: ObjectTypePropertyCreateTextDisplayHintEnum;
    /**
    * The internal property name, which must be used when referencing the property from the API.
    */
    'name': string;
    /**
    * A list of available options for the property. This field is only required for enumerated properties.
    */
    'options'?: Array<OptionInput>;
    /**
    * Allow users to search for information entered to this field (limited to 3 properties)
    */
    'searchableInGlobalSearch'?: boolean;
    /**
    * Controls how numeric properties are formatted in the HubSpot UI
    */
    'numberDisplayHint'?: ObjectTypePropertyCreateNumberDisplayHintEnum;
    /**
    * Whether or not the property's value must be unique. Once set, this can't be changed.
    */
    'hasUniqueValue'?: boolean;
    /**
    * Controls how the property appears in HubSpot.
    */
    'fieldType': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "hidden",
            "baseName": "hidden",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "optionSortStrategy",
            "baseName": "optionSortStrategy",
            "type": "ObjectTypePropertyCreateOptionSortStrategyEnum",
            "format": ""
        },
        {
            "name": "displayOrder",
            "baseName": "displayOrder",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "showCurrencySymbol",
            "baseName": "showCurrencySymbol",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ObjectTypePropertyCreateTypeEnum",
            "format": ""
        },
        {
            "name": "formField",
            "baseName": "formField",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "groupName",
            "baseName": "groupName",
            "type": "string",
            "format": ""
        },
        {
            "name": "referencedObjectType",
            "baseName": "referencedObjectType",
            "type": "string",
            "format": ""
        },
        {
            "name": "textDisplayHint",
            "baseName": "textDisplayHint",
            "type": "ObjectTypePropertyCreateTextDisplayHintEnum",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
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
            "name": "searchableInGlobalSearch",
            "baseName": "searchableInGlobalSearch",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "numberDisplayHint",
            "baseName": "numberDisplayHint",
            "type": "ObjectTypePropertyCreateNumberDisplayHintEnum",
            "format": ""
        },
        {
            "name": "hasUniqueValue",
            "baseName": "hasUniqueValue",
            "type": "boolean",
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


export type ObjectTypePropertyCreateOptionSortStrategyEnum = "DISPLAY_ORDER" | "ALPHABETICAL" ;
export type ObjectTypePropertyCreateTypeEnum = "string" | "number" | "date" | "datetime" | "enumeration" | "bool" ;
export type ObjectTypePropertyCreateTextDisplayHintEnum = "unformatted_single_line" | "multi_line" | "email" | "phone_number" | "domain_name" | "ip_address" | "physical_address" | "postal_code" ;
export type ObjectTypePropertyCreateNumberDisplayHintEnum = "unformatted" | "formatted" | "currency" | "percentage" | "duration" | "probability" ;

