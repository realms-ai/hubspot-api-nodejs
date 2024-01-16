/**
 * Public App Crm Cards
 * Allows an app to extend the CRM UI by surfacing custom cards in the sidebar of record pages. These cards are defined up-front as part of app configuration, then populated by external data fetch requests when the record page is accessed by a user.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class IFrameActionBody {
    'propertyNamesIncluded': Array<string>;
    'width': number;
    'label'?: string;
    'type': IFrameActionBodyTypeEnum;
    'url': string;
    'height': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "propertyNamesIncluded",
            "baseName": "propertyNamesIncluded",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "width",
            "baseName": "width",
            "type": "number",
            "format": "int32"
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
            "type": "IFrameActionBodyTypeEnum",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        },
        {
            "name": "height",
            "baseName": "height",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return IFrameActionBody.attributeTypeMap;
    }

    public constructor() {
    }
}


export type IFrameActionBodyTypeEnum = "IFRAME" ;

