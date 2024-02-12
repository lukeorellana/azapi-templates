import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MediaMediaservicesStreamingendpointsProps extends IAzAPIBaseProps {
/**
   * The streaming endpoint sku.
   */
readonly sku?: ArmStreamingEndponumberCurrentSku;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:mediaservices;

/**
   * The access control definition of the streaming endpoint.
   */
readonly accessControl?: StreamingEndponumberAccessControl;

/**
   * This feature is deprecated, do not set a value for this property.
   */
readonly availabilitySetName?: string;

/**
   * The CDN enabled flag.
   */
readonly cdnEnabled?: bool;

/**
   * The CDN profile name.
   */
readonly cdnProfile?: string;

/**
   * The CDN provider name.
   */
readonly cdnProvider?: string;

/**
   * The streaming endpoint access policies.
   */
readonly crossSiteAccessPolicies?: CrossSiteAccessPolicies;

/**
   * The custom host names of the streaming endpoint
   */
readonly customHostNames?: string[];

/**
   * The streaming endpoint description.
   */
readonly description?: string;

/**
   * Max cache age
   */
readonly maxCacheAge?: number;

/**
   * The number of scale units. Use the Scale operation to adjust this value.
   */
readonly scaleUnits: number;

/**
   * The access control of Akamai
   */
readonly akamai?: AkamaiAccessControl;

/**
   * The IP access control of the streaming endpoint.
   */
readonly ip?: IPAccessControl;

/**
   * authentication key list
   */
readonly akamaiSignatureHeaderAuthenticationKeyList?: AkamaiSignatureHeaderAuthenticationKey[];

/**
   * authentication key
   */
readonly base64Key?: string;

/**
   * The expiration time of the authentication key.
   */
readonly expiration?: string;

/**
   * identifier of the key
   */
readonly identifier?: string;

/**
   * The IP allow list.
   */
readonly allow?: IPRange[];

/**
   * The IP address.
   */
readonly address?: string;

/**
   * The subnet mask prefix length (see CIDR notation).
   */
readonly subnetPrefixLength?: number;

/**
   * The content of clientaccesspolicy.xml used by Silverlight.
   */
readonly clientAccessPolicy?: string;

/**
   * The content of crossdomain.xml used by Silverlight.
   */
readonly crossDomainPolicy?: string;

/**
   * The streaming endpoint sku capacity.
   */
readonly capacity?: number;
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
