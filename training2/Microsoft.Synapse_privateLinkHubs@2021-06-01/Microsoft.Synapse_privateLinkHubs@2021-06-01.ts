import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapsePrivatelinkhubsProps extends IAzAPIBaseProps {
/**
   * PrivateLinkHub provisioning state
   */
readonly provisioningState?: string;
}

/**
 * SynapsePrivatelinkhubs resource
 */
export class SynapsePrivatelinkhubs extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SynapsePrivatelinkhubsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Synapse/privateLinkHubs@2021-06-01";
  }

  protected getResourceBody(props: SynapsePrivatelinkhubsProps): string {
    return JSON.stringify(
        {properties: {provisioningState: "string"}}
    );
  }
}
