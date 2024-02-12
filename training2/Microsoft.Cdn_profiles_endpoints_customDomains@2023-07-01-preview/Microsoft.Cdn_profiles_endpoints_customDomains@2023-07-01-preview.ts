import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CdnProfilesEndpointsCustomdomainsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:endponumbers;

/**
   * The host name of the custom domain. Must be a domain name.
   */
readonly hostName: string;
}

/**
 * CdnProfilesEndpointsCustomdomains resource
 */
export class CdnProfilesEndpointsCustomdomains extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CdnProfilesEndpointsCustomdomainsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Cdn/profiles/endpoints/customDomains@2023-07-01-preview";
  }

  protected getResourceBody(props: CdnProfilesEndpointsCustomdomainsProps): string {
    return JSON.stringify(
        {properties: {hostName: "string"}}
    );
  }
}
