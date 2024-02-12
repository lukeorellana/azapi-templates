import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RecoveryservicesVaultsReplicationfabricsReplicationnetworksReplicationnetworkmappingsProps extends IAzAPIBaseProps {

}

/**
 * RecoveryservicesVaultsReplicationfabricsReplicationnetworksReplicationnetworkmappings resource
 */
export class RecoveryservicesVaultsReplicationfabricsReplicationnetworksReplicationnetworkmappings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RecoveryservicesVaultsReplicationfabricsReplicationnetworksReplicationnetworkmappingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationNetworks/replicationNetworkMappings@2022-10-01";
  }

  protected getResourceBody(props: RecoveryservicesVaultsReplicationfabricsReplicationnetworksReplicationnetworkmappingsProps): string {
    return JSON.stringify(
        {properties: {fabricSpecificDetails: {instanceType: "string"}, recoveryFabricName: "string", recoveryNetworkId: "string"}}
    );
  }
}
