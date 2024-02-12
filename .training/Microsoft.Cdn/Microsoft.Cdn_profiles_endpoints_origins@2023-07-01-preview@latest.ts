import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CdnProfilesEndpointsOriginsProps extends IAzAPIBaseProps {

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
