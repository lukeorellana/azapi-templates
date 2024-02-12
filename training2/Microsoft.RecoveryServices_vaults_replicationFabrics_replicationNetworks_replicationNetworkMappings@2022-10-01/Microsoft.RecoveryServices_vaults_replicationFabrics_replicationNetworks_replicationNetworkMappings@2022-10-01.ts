import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RecoveryservicesVaultsReplicationfabricsReplicationnetworksReplicationnetworkmappingsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type: replicationNetworks;

/**
   * Fabric specific input properties.
   */
readonly fabricSpecificDetails?: FabricSpecificCreateNetworkMappingInput;

/**
   * Recovery fabric Name.
   */
readonly recoveryFabricName?: string;

/**
   * Recovery network Id.
   */
readonly recoveryNetworkId: string;

/**
   * Set the object type
   */
readonly instanceType: AzureToAzureVmmToAzureVmmToVmm;

/**
   * The instance type.
   */
readonly instanceType: 'AzureToAzure';

/**
   * The primary azure vnet Id.
   */
readonly primaryNetworkId: string;

/**
   * The instance type.
   */
readonly instanceType: 'VmmToAzure';

/**
   * The instance type.
   */
readonly instanceType: 'VmmToVmm';
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
