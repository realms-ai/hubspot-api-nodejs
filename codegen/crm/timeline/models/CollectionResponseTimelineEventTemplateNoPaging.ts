/**
 * Timeline events
 * This feature allows an app to create and configure custom events that can show up in the timelines of certain CRM objects like contacts, companies, tickets, or deals. You'll find multiple use cases for this API in the sections below.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { TimelineEventTemplate } from './TimelineEventTemplate';
import { HttpFile } from '../http/http';

export class CollectionResponseTimelineEventTemplateNoPaging {
    'results': Array<TimelineEventTemplate>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<TimelineEventTemplate>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CollectionResponseTimelineEventTemplateNoPaging.attributeTypeMap;
    }

    public constructor() {
    }
}

