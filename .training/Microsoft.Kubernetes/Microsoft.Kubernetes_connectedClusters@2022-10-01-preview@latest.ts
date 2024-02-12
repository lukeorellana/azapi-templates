import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface KubernetesConnectedclustersProps extends IAzAPIBaseProps {

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
