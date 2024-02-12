import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MediaMediaservicesStreamingendpointsProps extends IAzAPIBaseProps {

}

/**
 * MediaMediaservicesStreamingendpoints resource
 */
export class MediaMediaservicesStreamingendpoints extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MediaMediaservicesStreamingendpointsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Media/mediaservices/streamingEndpoints@2022-08-01";
  }

  protected getResourceBody(props: MediaMediaservicesStreamingendpointsProps): string {
    return JSON.stringify(
        {properties: {accessControl: {akamai: {akamaiSignatureHeaderAuthenticationKeyList: [{base64Key: "string", expiration: "string", identifier: "string"}]}, ip: {allow: [{address: "string", name: "string", subnetPrefixLength: "${int}"}]}}, availabilitySetName: "string", cdnEnabled: "${bool}", cdnProfile: "string", cdnProvider: "string", crossSiteAccessPolicies: {clientAccessPolicy: "string", crossDomainPolicy: "string"}, customHostNames: ["string"], description: "string", maxCacheAge: "${int}", scaleUnits: "${int}"}, sku: {capacity: "${int}"}}
    );
  }
}
