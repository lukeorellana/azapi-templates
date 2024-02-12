import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ContainerregistryRegistriesAgentpoolsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:registries;

/**
   * The count of agent machine
   */
readonly count?: number;

/**
   * The OS of agent machine
   */
readonly os?: 'Linux''Windows';

/**
   * The Tier of agent machine
   */
readonly tier?: string;

/**
   * The Virtual Network Subnet Resource Id of the agent machine
   */
readonly virtualNetworkSubnetResourceId?: string;
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
