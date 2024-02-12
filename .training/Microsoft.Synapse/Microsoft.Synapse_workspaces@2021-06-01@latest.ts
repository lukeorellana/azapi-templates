import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesProps extends IAzAPIBaseProps {

}

/**
 * SynapseWorkspaces resource
 */
export class SynapseWorkspaces extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SynapseWorkspacesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Synapse/workspaces@2021-06-01";
  }

  protected getResourceBody(props: SynapseWorkspacesProps): string {
    return JSON.stringify(
        {properties: {azureADOnlyAuthentication: "${bool}", cspWorkspaceAdminProperties: {initialWorkspaceAdminObjectId: "string"}, defaultDataLakeStorage: {accountUrl: "string", createManagedPrivateEndpoint: "${bool}", filesystem: "string", resourceId: "string"}, encryption: {cmk: {kekIdentity: {userAssignedIdentity: "string"}, key: {keyVaultUrl: "string", name: "string"}}}, managedResourceGroupName: "string", managedVirtualNetwork: "string", managedVirtualNetworkSettings: {allowedAadTenantIdsForLinking: ["string"], linkedAccessCheckOnTargetResource: "${bool}", preventDataExfiltration: "${bool}"}, privateEndpointConnections: [{properties: {privateEndpoint: {}, privateLinkServiceConnectionState: {description: "string", status: "string"}}}], publicNetworkAccess: "string", purviewConfiguration: {purviewResourceId: "string"}, sqlAdministratorLogin: "string", sqlAdministratorLoginPassword: "string", trustedServiceBypassEnabled: "${bool}", virtualNetworkProfile: {computeSubnetId: "string"}, workspaceRepositoryConfiguration: {accountName: "string", collaborationBranch: "string", hostName: "string", lastCommitId: "string", projectName: "string", repositoryName: "string", rootFolder: "string", tenantId: "string", type: "string"}}}
    );
  }
}
