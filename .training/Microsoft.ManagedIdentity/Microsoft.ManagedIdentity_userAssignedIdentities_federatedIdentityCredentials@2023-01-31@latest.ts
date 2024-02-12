import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ManagedidentityUserassignedidentitiesFederatedidentitycredentialsProps extends IAzAPIBaseProps {

}

/**
 * ManagedidentityUserassignedidentitiesFederatedidentitycredentials resource
 */
export class ManagedidentityUserassignedidentitiesFederatedidentitycredentials extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ManagedidentityUserassignedidentitiesFederatedidentitycredentialsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ManagedIdentity/userAssignedIdentities/federatedIdentityCredentials@2023-01-31";
  }

  protected getResourceBody(props: ManagedidentityUserassignedidentitiesFederatedidentitycredentialsProps): string {
    return JSON.stringify(
        {properties: {audiences: ["string"], issuer: "string", subject: "string"}}
    );
  }
}
