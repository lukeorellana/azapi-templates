import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CdnProfilesOrigingroupsOriginsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:originGroups;

/**
   * Resource reference to the Azure origin resource.
   */
readonly azureOrigin?: ResourceReference;

/**
   * Whether to enable health probes to be made against backends defined under backendPools. Health probes can only be disabled if there is a single enabled backend in single enabled backend pool.
   */
readonly enabledState?: 'Disabled''Enabled';

/**
   * Whether to enable certificate name check at origin level
   */
readonly enforceCertificateNameCheck?: bool;

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
   * The host header value sent to the origin with each request. If you leave this blank, the request hostname determines this value. Azure Front Door origins, such as Web Apps, Blob Storage, and Cloud Services require this host header value to match the origin hostname by default. This overrides the host header defined at Endpoint
   */
readonly originHostHeader?: string;

/**
   * Priority of origin in given origin group for load balancing. Higher priorities will not be used for load balancing if any lower priority origin is healthy.Must be between 1 and 5
   */
readonly priority?: numberConstranumbers:Min value = 1Max value = 5;

/**
   * The properties of the private link resource for private origin.
   */
readonly sharedPrivateLinkResource?: SharedPrivateLinkResourceProperties;

/**
   * Weight of the origin in given origin group for load balancing. Must be between 1 and 1000
   */
readonly weight?: numberConstranumbers:Min value = 1Max value = 1000;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * The group id from the provider of resource the shared private link resource is for.
   */
readonly groupId?: string;

/**
   * The resource id of the resource the shared private link resource is for.
   */
readonly privateLink?: ResourceReference;

/**
   * The location of the shared private link resource
   */
readonly privateLinkLocation?: string;

/**
   * The request message for requesting approval of the shared private link resource.
   */
readonly requestMessage?: string;

/**
   * Status of the shared private link resource. Can be Pending, Approved, Rejected, Disconnected, or Timeout.
   */
readonly status?: 'Approved''Disconnected''Pending''Rejected''Timeout';
}

/**
 * CdnProfilesOrigingroupsOrigins resource
 */
export class CdnProfilesOrigingroupsOrigins extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CdnProfilesOrigingroupsOriginsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Cdn/profiles/originGroups/origins@2023-07-01-preview";
  }

  protected getResourceBody(props: CdnProfilesOrigingroupsOriginsProps): string {
    return JSON.stringify(
        {properties: {azureOrigin: {id: "string"}, enabledState: "string", enforceCertificateNameCheck: "${bool}", hostName: "string", httpPort: "${int}", httpsPort: "${int}", originHostHeader: "string", priority: "${int}", sharedPrivateLinkResource: {groupId: "string", privateLink: {id: "string"}, privateLinkLocation: "string", requestMessage: "string", status: "string"}, weight: "${int}"}}
    );
  }
}
