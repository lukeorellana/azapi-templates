import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RecoveryservicesVaultsReplicationfabricsReplicationvcentersProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:replicationFabrics;

/**
   * The friendly name of the vCenter.
   */
readonly friendlyName?: string;

/**
   * The IP address of the vCenter to be discovered.
   */
readonly ipAddress?: string;

/**
   * The port number for discovery.
   */
readonly port?: string;

/**
   * The process server Id from where the discovery is orchestrated.
   */
readonly processServerId?: string;

/**
   * The account Id which has privileges to discover the vCenter.
   */
readonly runAsAccountId?: string;
}

/**
 * RecoveryservicesVaultsReplicationfabricsReplicationvcenters resource
 */
export class RecoveryservicesVaultsReplicationfabricsReplicationvcenters extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RecoveryservicesVaultsReplicationfabricsReplicationvcentersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationvCenters@2022-10-01";
  }

  protected getResourceBody(props: RecoveryservicesVaultsReplicationfabricsReplicationvcentersProps): string {
    return JSON.stringify(
        {properties: {friendlyName: "string", ipAddress: "string", port: "string", processServerId: "string", runAsAccountId: "string"}}
    );
  }
}
