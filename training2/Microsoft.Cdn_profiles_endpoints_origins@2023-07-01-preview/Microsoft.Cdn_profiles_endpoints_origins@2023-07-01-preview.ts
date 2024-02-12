import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CdnProfilesEndpointsOriginsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:endponumbers;

/**
   * Origin is enabled for load balancing or not
   */
readonly enabled?: bool;

/**
   * The address of the origin. Domain names, IPv4 addresses, and IPv6 addresses are supported.This should be unique across all origins in an endpoint.
   */
readonly hostName?: string;

/**
   * The value of the HTTP port. Must be between 1 and 65535.
   */
readonly httpPort?: numberConstranumbers:Min value = 1Max value = 65535;

/**
   * The value of the HTTPS port. Must be between 1 and 65535.
   */
readonly httpsPort?: numberConstranumbers:Min value = 1Max value = 65535;

/**
   * The host header value sent to the origin with each request. If you leave this blank, the request hostname determines this value. Azure CDN origins, such as Web Apps, Blob Storage, and Cloud Services require this host header value to match the origin hostname by default. This overrides the host header defined at Endpoint
   */
readonly originHostHeader?: string;

/**
   * Priority of origin in given origin group for load balancing. Higher priorities will not be used for load balancing if any lower priority origin is healthy.Must be between 1 and 5
   */
readonly priority?: numberConstranumbers:Min value = 1Max value = 5;

/**
   * The Alias of the Private Link resource. Populating this optional field indicates that this origin is 'Private'
   */
readonly privateLinkAlias?: string;

/**
   * A custom message to be included in the approval request to connect to the Private Link.
   */
readonly privateLinkApprovalMessage?: string;

/**
   * The location of the Private Link resource. Required only if 'privateLinkResourceId' is populated
   */
readonly privateLinkLocation?: string;

/**
   * The Resource Id of the Private Link resource. Populating this optional field indicates that this backend is 'Private'
   */
readonly privateLinkResourceId?: string;

/**
   * Weight of the origin in given origin group for load balancing. Must be between 1 and 1000
   */
readonly weight?: numberConstranumbers:Min value = 1Max value = 1000;
}

/**
 * CdnProfilesEndpointsOrigins resource
 */
export class CdnProfilesEndpointsOrigins extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CdnProfilesEndpointsOriginsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Cdn/profiles/endpoints/origins@2023-07-01-preview";
  }

  protected getResourceBody(props: CdnProfilesEndpointsOriginsProps): string {
    return JSON.stringify(
        {properties: {enabled: "${bool}", hostName: "string", httpPort: "${int}", httpsPort: "${int}", originHostHeader: "string", priority: "${int}", privateLinkAlias: "string", privateLinkApprovalMessage: "string", privateLinkLocation: "string", privateLinkResourceId: "string", weight: "${int}"}}
    );
  }
}
