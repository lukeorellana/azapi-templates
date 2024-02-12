import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RecoveryservicesVaultsReplicationfabricsProps extends IAzAPIBaseProps {

}

/**
 * RecoveryservicesVaultsReplicationfabrics resource
 */
export class RecoveryservicesVaultsReplicationfabrics extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RecoveryservicesVaultsReplicationfabricsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.RecoveryServices/vaults/replicationFabrics@2022-10-01";
  }

  protected getResourceBody(props: RecoveryservicesVaultsReplicationfabricsProps): string {
    return JSON.stringify(
        {properties: {customDetails: {instanceType: "string"}}}
    );
  }
}
