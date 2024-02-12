import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatabricksWorkspacesProps extends IAzAPIBaseProps {

}

/**
 * DatabricksWorkspaces resource
 */
export class DatabricksWorkspaces extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatabricksWorkspacesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Databricks/workspaces@2023-02-01";
  }

  protected getResourceBody(props: DatabricksWorkspacesProps): string {
    return JSON.stringify(
        {properties: {authorizations: [{principalId: "string", roleDefinitionId: "string"}], createdBy: {}, encryption: {entities: {managedDisk: {keySource: "Microsoft.Keyvault", keyVaultProperties: {keyName: "string", keyVaultUri: "string", keyVersion: "string"}, rotationToLatestKeyVersionEnabled: "${bool}"}, managedServices: {keySource: "Microsoft.Keyvault", keyVaultProperties: {keyName: "string", keyVaultUri: "string", keyVersion: "string"}}}}, managedDiskIdentity: {}, managedResourceGroupId: "string", parameters: {amlWorkspaceId: {value: "string"}, customPrivateSubnetName: {value: "string"}, customPublicSubnetName: {value: "string"}, customVirtualNetworkId: {value: "string"}, enableNoPublicIp: {value: "${bool}"}, encryption: {value: {KeyName: "string", keySource: "string", keyvaulturi: "string", keyversion: "string"}}, loadBalancerBackendPoolName: {value: "string"}, loadBalancerId: {value: "string"}, natGatewayName: {value: "string"}, prepareEncryption: {value: "${bool}"}, publicIpName: {value: "string"}, requireInfrastructureEncryption: {value: "${bool}"}, storageAccountName: {value: "string"}, storageAccountSkuName: {value: "string"}, vnetAddressPrefix: {value: "string"}}, publicNetworkAccess: "string", requiredNsgRules: "string", storageAccountIdentity: {}, uiDefinitionUri: "string", updatedBy: {}}, sku: {name: "string", tier: "string"}}
    );
  }
}
