import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ManagedidentityUserassignedidentitiesFederatedidentitycredentialsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:userAssignedIdentities;

/**
   * The list of audiences that can appear in the issued token.
   */
readonly audiences: string[];

/**
   * The URL of the issuer to be trusted.
   */
readonly issuer: string;

/**
   * The identifier of the external identity.
   */
readonly subject: string;
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
