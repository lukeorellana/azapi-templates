import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SolutionsApplicationdefinitionsProps extends IAzAPIBaseProps {

}

/**
 * SolutionsApplicationdefinitions resource
 */
export class SolutionsApplicationdefinitions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SolutionsApplicationdefinitionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Solutions/applicationDefinitions@2021-07-01";
  }

  protected getResourceBody(props: SolutionsApplicationdefinitionsProps): string {
    return JSON.stringify(
        {properties: {artifacts: [{name: "string", type: "string", uri: "string"}], authorizations: [{principalId: "string", roleDefinitionId: "string"}], deploymentPolicy: {deploymentMode: "string"}, description: "string", displayName: "string", isEnabled: "${bool}", lockingPolicy: {allowedActions: ["string"], allowedDataActions: ["string"]}, managementPolicy: {mode: "string"}, notificationPolicy: {notificationEndpoints: [{uri: "string"}]}, packageFileUri: "string", policies: [{name: "string", parameters: "string", policyDefinitionId: "string"}], storageAccountId: "string"}, sku: {capacity: "${int}", family: "string", model: "string", name: "string", size: "string", tier: "string"}, managedBy: "string"}
    );
  }
}
