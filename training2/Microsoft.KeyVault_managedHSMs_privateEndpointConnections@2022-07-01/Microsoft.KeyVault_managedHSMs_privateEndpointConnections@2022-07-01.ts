import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface KeyvaultManagedhsmsPrivateendpointconnectionsProps extends IAzAPIBaseProps {
/**
   * SKU details
   */
readonly sku?: ManagedHsmSku;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:managedHSMs;

/**
   * Modified whenever there is a change in the state of private endpoint connection.
   */
readonly etag?: string;

/**
   * Properties of the private endpoint object.
   */
readonly privateEndpoint?: MhsmPrivateEndponumber;

/**
   * Approval state of the private link connection.
   */
readonly privateLinkServiceConnectionState?: MhsmPrivateLinkServiceConnectionState;

/**
   * Provisioning state of the private endpoint connection.
   */
readonly provisioningState?: 'Creating''Deleting''Disconnected''Failed''Succeeded''Updating';

/**
   * A message indicating if changes on the service provider require any updates on the consumer.
   */
readonly actionsRequired?: 'None';

/**
   * The reason for approval or rejection.
   */
readonly description?: string;

/**
   * Indicates whether the connection has been approved, rejected or removed by the key vault owner.
   */
readonly status?: 'Approved''Disconnected''Pending''Rejected';

/**
   * SKU Family of the managed HSM Pool
   */
readonly family: 'B';
}

/**
 * KeyvaultManagedhsmsPrivateendpointconnections resource
 */
export class KeyvaultManagedhsmsPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: KeyvaultManagedhsmsPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.KeyVault/managedHSMs/privateEndpointConnections@2022-07-01";
  }

  protected getResourceBody(props: KeyvaultManagedhsmsPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateEndpoint: {}, privateLinkServiceConnectionState: {actionsRequired: "None", description: "string", status: "string"}, provisioningState: "string"}, sku: {family: "B", name: "string"}, etag: "string"}
    );
  }
}
