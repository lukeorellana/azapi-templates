import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzurestackhciClustersProps extends IAzAPIBaseProps {
/**
   * Identity of Cluster resource
   */
readonly identity?: ManagedServiceIdentity;

/**
   * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
   */
readonly type: 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned';

/**
   * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
   */
readonly userAssignedIdentities?: object;

/**
   * Object id of cluster AAD identity.
   */
readonly aadApplicationObjectId?: string;

/**
   * App id of cluster AAD identity.
   */
readonly aadClientId?: string;

/**
   * Id of cluster identity service principal.
   */
readonly aadServicePrincipalObjectId?: string;

/**
   * Tenant id of cluster AAD identity.
   */
readonly aadTenantId?: string;

/**
   * Endpoint configured for management from the Azure portal.
   */
readonly cloudManagementEndpoint?: string;

/**
   * Desired properties of the cluster.
   */
readonly desiredProperties?: ClusterDesiredProperties;

/**
   * Software Assurance properties of the cluster.
   */
readonly softwareAssuranceProperties?: SoftwareAssuranceProperties;

/**
   * Desired level of diagnostic data emitted by the cluster.
   */
readonly diagnosticLevel?: 'Basic''Enhanced''Off';

/**
   * Desired state of Windows Server Subscription.
   */
readonly windowsServerSubscription?: 'Disabled''Enabled';

/**
   * Customer Intent for Software Assurance Benefit.
   */
readonly softwareAssuranceIntent?: 'Disable''Enable';

/**
   * Status of the Software Assurance for the cluster.
   */
readonly softwareAssuranceStatus?: 'Disabled''Enabled';
}

/**
 * AzurestackhciClusters resource
 */
export class AzurestackhciClusters extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AzurestackhciClustersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AzureStackHCI/clusters@2022-12-01";
  }

  protected getResourceBody(props: AzurestackhciClustersProps): string {
    return JSON.stringify(
        {properties: {aadApplicationObjectId: "string", aadClientId: "string", aadServicePrincipalObjectId: "string", aadTenantId: "string", cloudManagementEndpoint: "string", desiredProperties: {diagnosticLevel: "string", windowsServerSubscription: "string"}, softwareAssuranceProperties: {softwareAssuranceIntent: "string", softwareAssuranceStatus: "string"}}}
    );
  }
}
