import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ContainerregistryRegistriesAgentpoolsProps extends IAzAPIBaseProps {

}

/**
 * ContainerregistryRegistriesAgentpools resource
 */
export class ContainerregistryRegistriesAgentpools extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ContainerregistryRegistriesAgentpoolsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ContainerRegistry/registries/agentPools@2019-06-01-preview";
  }

  protected getResourceBody(props: ContainerregistryRegistriesAgentpoolsProps): string {
    return JSON.stringify(
        {properties: {count: "${int}", os: "string", tier: "string", virtualNetworkSubnetResourceId: "string"}}
    );
  }
}
