import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ManagedservicesRegistrationdefinitionsProps extends IAzAPIBaseProps {

}

/**
 * ManagedservicesRegistrationdefinitions resource
 */
export class ManagedservicesRegistrationdefinitions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ManagedservicesRegistrationdefinitionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ManagedServices/registrationDefinitions@2022-10-01";
  }

  protected getResourceBody(props: ManagedservicesRegistrationdefinitionsProps): string {
    return JSON.stringify(
        {properties: {authorizations: [{delegatedRoleDefinitionIds: ["string"], principalId: "string", principalIdDisplayName: "string", roleDefinitionId: "string"}], description: "string", eligibleAuthorizations: [{justInTimeAccessPolicy: {managedByTenantApprovers: [{principalId: "string", principalIdDisplayName: "string"}], maximumActivationDuration: "string", multiFactorAuthProvider: "string"}, principalId: "string", principalIdDisplayName: "string", roleDefinitionId: "string"}], managedByTenantId: "string", registrationDefinitionName: "string"}, plan: {name: "string", product: "string", publisher: "string", version: "string"}}
    );
  }
}
