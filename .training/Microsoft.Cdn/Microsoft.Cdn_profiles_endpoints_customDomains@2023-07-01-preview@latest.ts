import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CdnProfilesEndpointsCustomdomainsProps extends IAzAPIBaseProps {

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
