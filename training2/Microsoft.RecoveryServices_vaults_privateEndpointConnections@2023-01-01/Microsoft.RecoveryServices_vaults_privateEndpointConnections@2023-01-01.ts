import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RecoveryservicesVaultsPrivateendpointconnectionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:vaults;

/**
   * Optional ETag.
   */
readonly eTag?: string;

/**
   * Group Ids for the Private Endpoint
   */
readonly groupIds?: String array containing any of:'AzureBackup''AzureBackup_secondary''AzureSiteRecovery';

/**
   * Gets or sets private endpoint associated with the private endpoint connection
   */
readonly privateEndpoint?: PrivateEndponumber;

/**
   * Gets or sets private link service connection state
   */
readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState;

/**
   * Gets or sets provisioning state of the private endpoint connection
   */
readonly provisioningState?: 'Deleting''Failed''Pending''Succeeded';

/**
   * Gets or sets id
   */
readonly id?: string;

/**
   * Gets or sets actions required
   */
readonly actionRequired?: string;

/**
   * Gets or sets description
   */
readonly description?: string;

/**
   * Gets or sets the status
   */
readonly status?: 'Approved''Disconnected''Pending''Rejected';
}

/**
 * RecoveryservicesVaultsPrivateendpointconnections resource
 */
export class RecoveryservicesVaultsPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RecoveryservicesVaultsPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.RecoveryServices/vaults/privateEndpointConnections@2023-01-01";
  }

  protected getResourceBody(props: RecoveryservicesVaultsPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {groupIds: ["string"], privateEndpoint: {id: "string"}, privateLinkServiceConnectionState: {actionRequired: "string", description: "string", status: "string"}, provisioningState: "string"}, eTag: "string"}
    );
  }
}
