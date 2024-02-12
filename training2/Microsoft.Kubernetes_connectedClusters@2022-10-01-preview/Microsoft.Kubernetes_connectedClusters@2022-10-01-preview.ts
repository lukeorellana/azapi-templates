import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface KubernetesConnectedclustersProps extends IAzAPIBaseProps {
/**
   * The identity of the connected cluster.
   */
readonly identity: ConnectedClusterIdentity;

/**
   * The type of identity used for the connected cluster. The type 'SystemAssigned, includes a system created identity. The type 'None' means no identity is assigned to the connected cluster.
   */
readonly type: 'None''SystemAssigned';

/**
   * Base64 encoded public certificate used by the agent to do the initial handshake to the backend services in Azure.
   */
readonly agentPublicKeyCertificate: string;

/**
   * Indicates whether Azure Hybrid Benefit is opted in
   */
readonly azureHybridBenefit?: 'False''NotApplicable''True';

/**
   * The Kubernetes distribution running on this connected cluster.
   */
readonly distribution?: string;

/**
   * The Kubernetes distribution version on this connected cluster.
   */
readonly distributionVersion?: string;

/**
   * The infrastructure on which the Kubernetes cluster represented by this connected cluster is running on.
   */
readonly infrastructure?: string;

/**
   * The resource id of the private link scope this connected cluster is assigned to, if any.
   */
readonly privateLinkScopeResourceId?: string;

/**
   * Property which describes the state of private link on a connected cluster resource.
   */
readonly privateLinkState?: 'Disabled''Enabled';

/**
   * Provisioning state of the connected cluster resource.
   */
readonly provisioningState?: 'Accepted''Canceled''Deleting''Failed''Provisioning''Succeeded''Updating';
}

/**
 * KubernetesConnectedclusters resource
 */
export class KubernetesConnectedclusters extends AzAPIBase {
  constructor(scope: Construct, id: string, props: KubernetesConnectedclustersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Kubernetes/connectedClusters@2022-10-01-preview";
  }

  protected getResourceBody(props: KubernetesConnectedclustersProps): string {
    return JSON.stringify(
        {properties: {agentPublicKeyCertificate: "string", azureHybridBenefit: "string", distribution: "string", distributionVersion: "string", infrastructure: "string", privateLinkScopeResourceId: "string", privateLinkState: "string", provisioningState: "string"}}
    );
  }
}
