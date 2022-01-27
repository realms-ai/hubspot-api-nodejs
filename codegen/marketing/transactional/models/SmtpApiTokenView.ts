/**
 * Transactional Email
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* A SMTP API token provides both an ID and password that can be used to send email through the HubSpot SMTP API.
*/
export class SmtpApiTokenView {
    /**
    * User name to log into the HubSpot SMTP server.
    */
    'id': string;
    /**
    * Email address of the user that sent the token creation request.
    */
    'createdBy': string;
    /**
    * Password used to log into the HubSpot SMTP server.
    */
    'password'?: string;
    /**
    * Identifier assigned to the campaign provided in the token creation request.
    */
    'emailCampaignId': string;
    /**
    * Timestamp generated when a token is created.
    */
    'createdAt': Date;
    /**
    * Indicates whether a contact should be created for recipients of emails.
    */
    'createContact': boolean;
    /**
    * A name for the campaign tied to the token.
    */
    'campaignName': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdBy",
            "baseName": "createdBy",
            "type": "string",
            "format": ""
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string",
            "format": ""
        },
        {
            "name": "emailCampaignId",
            "baseName": "emailCampaignId",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "createContact",
            "baseName": "createContact",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "campaignName",
            "baseName": "campaignName",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SmtpApiTokenView.attributeTypeMap;
    }

    public constructor() {
    }
}

