import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface OperationalinsightsClustersProps extends IAzAPIBaseProps {
/**
   * The sku properties.
   */
readonly sku?: ClusterSku;

/**
   * The identity of the resource.
   */
readonly identity?: Identity;

/**
   * Type of managed service identity.
   */
readonly type: 'None''SystemAssigned''UserAssigned';

/**
   * The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
   */
readonly userAssignedIdentities?: object;

/**
   * The list of Log Analytics workspaces associated with the cluster
   */
readonly associatedWorkspaces?: AssociatedWorkspace[];

/**
   * The cluster's billing type.
   */
readonly billingType?: 'Cluster''Workspaces';

/**
   * Additional properties for capacity reservation
   */
readonly capacityReservationProperties?: CapacityReservationProperties;

/**
   * Sets whether the cluster will support availability zones. This can be set as true only in regions where Azure Data Explorer support Availability Zones. This Property can not be modified after cluster creation. Default value is 'true' if region supports Availability Zones.
   */
readonly isAvailabilityZonesEnabled?: bool;

/**
   * Configures whether cluster will use double encryption. This Property can not be modified after cluster creation. Default value is 'true'
   */
readonly isDoubleEncryptionEnabled?: bool;

/**
   * The associated key properties.
   */
readonly keyVaultProperties?: KeyVaultProperties;

/**
   * The name of the key associated with the Log Analytics cluster.
   */
readonly keyName?: string;

/**
   * Selected key minimum required size.
   */
readonly keyRsaSize?: number;

/**
   * The Key Vault uri which holds they key associated with the Log Analytics cluster.
   */
readonly keyVaultUri?: string;

/**
   * The version of the key associated with the Log Analytics cluster.
   */
readonly keyVersion?: string;

/**
   * The capacity value
   */
readonly capacity?: number;
}

/**
 * OperationalinsightsClusters resource
 */
export class OperationalinsightsClusters extends AzAPIBase {
  constructor(scope: Construct, id: string, props: OperationalinsightsClustersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.OperationalInsights/clusters@2021-06-01";
  }

  protected getResourceBody(props: OperationalinsightsClustersProps): string {
    return JSON.stringify(
        {properties: {associatedWorkspaces: [{}], billingType: "string", capacityReservationProperties: {}, isAvailabilityZonesEnabled: "${bool}", isDoubleEncryptionEnabled: "${bool}", keyVaultProperties: {keyName: "string", keyRsaSize: "${int}", keyVaultUri: "string", keyVersion: "string"}}, sku: {capacity: "${int}", name: "CapacityReservation"}}
    );
  }
}
