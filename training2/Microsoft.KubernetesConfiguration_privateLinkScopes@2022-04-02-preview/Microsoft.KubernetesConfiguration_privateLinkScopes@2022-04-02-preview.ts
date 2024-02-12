import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface KubernetesconfigurationPrivatelinkscopesProps extends IAzAPIBaseProps {
/**
   * Managed Cluster ARM ID for the private link scope  (Required)
   */
readonly clusterResourceId: string;

/**
   * Indicates whether machines associated with the private link scope can also use public Azure Arc service endpoints.
   */
readonly publicNetworkAccess?: 'Disabled''Enabled';
}

/**
 * KubernetesconfigurationPrivatelinkscopes resource
 */
export class KubernetesconfigurationPrivatelinkscopes extends AzAPIBase {
  constructor(scope: Construct, id: string, props: KubernetesconfigurationPrivatelinkscopesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.KubernetesConfiguration/privateLinkScopes@2022-04-02-preview";
  }

  protected getResourceBody(props: KubernetesconfigurationPrivatelinkscopesProps): string {
    return JSON.stringify(
        {properties: {clusterResourceId: "string", publicNetworkAccess: "string"}}
    );
  }
}
