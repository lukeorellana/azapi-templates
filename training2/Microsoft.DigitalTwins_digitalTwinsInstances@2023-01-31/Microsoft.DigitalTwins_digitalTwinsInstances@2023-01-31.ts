import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DigitaltwinsDigitaltwinsinstancesProps extends IAzAPIBaseProps {
/**
   * The managed identity for the DigitalTwinsInstance.
   */
readonly identity?: DigitalTwinsIdentity;

/**
   * The type of Managed Identity used by the DigitalTwinsInstance.
   */
readonly type?: 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned';

/**
   * The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form:'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'..
   */
readonly userAssignedIdentities?: object;

/**
   * The private endpoint connections.
   */
readonly privateEndpointConnections?: PrivateEndponumberConnection[];

/**
   * Public network access for the DigitalTwinsInstance.
   */
readonly publicNetworkAccess?: 'Disabled''Enabled';

/**
   * The list of group ids for the private endpoint connection.
   */
readonly groupIds?: string[];

/**
   * The private endpoint.
   */
readonly privateEndpoint?: PrivateEndponumber;

/**
   * The connection state.
   */
readonly privateLinkServiceConnectionState?: ConnectionPropertiesPrivateLinkServiceConnectionStat...;

/**
   * Actions required for a private endpoint connection.
   */
readonly actionsRequired?: string;

/**
   * The description for the current state of a private endpoint connection.
   */
readonly description: string;

/**
   * The status of a private endpoint connection.
   */
readonly status: 'Approved''Disconnected''Pending''Rejected';
}

/**
 * DigitaltwinsDigitaltwinsinstances resource
 */
export class DigitaltwinsDigitaltwinsinstances extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DigitaltwinsDigitaltwinsinstancesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DigitalTwins/digitalTwinsInstances@2023-01-31";
  }

  protected getResourceBody(props: DigitaltwinsDigitaltwinsinstancesProps): string {
    return JSON.stringify(
        {properties: {privateEndpointConnections: [{properties: {groupIds: ["string"], privateEndpoint: {}, privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}}], publicNetworkAccess: "string"}}
    );
  }
}
