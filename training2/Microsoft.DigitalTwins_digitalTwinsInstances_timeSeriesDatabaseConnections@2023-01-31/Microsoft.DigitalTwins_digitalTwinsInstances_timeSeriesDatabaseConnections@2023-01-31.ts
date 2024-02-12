import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DigitaltwinsDigitaltwinsinstancesTimeseriesdatabaseconnectionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:digitalTwinsInstances;

/**
   * Managed identity properties for the time series database connection resource.
   */
readonly identity?: ManagedIdentityReference;

/**
   * Set the object type
   */
readonly connectionType: AzureDataExplorer;

/**
   * The type of managed identity used.
   */
readonly type?: 'SystemAssigned''UserAssigned';

/**
   * The user identity ARM resource id if the managed identity type is 'UserAssigned'.
   */
readonly userAssignedIdentity?: string;

/**
   * The type of time series connection resource.
   */
readonly connectionType: 'AzureDataExplorer';

/**
   * The name of the Azure Data Explorer database.
   */
readonly adxDatabaseName: string;

/**
   * The URI of the Azure Data Explorer endpoint.
   */
readonly adxEndpointUri: string;

/**
   * The name of the Azure Data Explorer table used for recording relationship lifecycle events. The table will not be created if this property is left unspecified.
   */
readonly adxRelationshipLifecycleEventsTableName?: string;

/**
   * The resource ID of the Azure Data Explorer cluster.
   */
readonly adxResourceId: string;

/**
   * The name of the Azure Data Explorer table used for storing updates to properties of twins and relationships. Defaults to AdtPropertyEvents.
   */
readonly adxTableName?: string;

/**
   * The name of the Azure Data Explorer table used for recording twin lifecycle events. The table will not be created if this property is left unspecified.
   */
readonly adxTwinLifecycleEventsTableName?: string;

/**
   * The EventHub consumer group to use when ADX reads from EventHub. Defaults to $Default.
   */
readonly eventHubConsumerGroup?: string;

/**
   * The URL of the EventHub namespace for identity-based authentication. It must include the protocol sb://
   */
readonly eventHubEndpointUri: string;

/**
   * The EventHub name in the EventHub namespace for identity-based authentication.
   */
readonly eventHubEntityPath: string;

/**
   * The resource ID of the EventHub namespace.
   */
readonly eventHubNamespaceResourceId: string;

/**
   * Specifies whether or not to record twin / relationship property and item removals, including removals of indexed or keyed values (such as map entries, array elements, etc.). This feature is de-activated unless explicitly set to 'true'. Setting this property to 'true' will generate an additional column in the property events table in ADX.
   */
readonly recordPropertyAndItemRemovals?: 'false''true';
}

/**
 * DigitaltwinsDigitaltwinsinstancesTimeseriesdatabaseconnections resource
 */
export class DigitaltwinsDigitaltwinsinstancesTimeseriesdatabaseconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DigitaltwinsDigitaltwinsinstancesTimeseriesdatabaseconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DigitalTwins/digitalTwinsInstances/timeSeriesDatabaseConnections@2023-01-31";
  }

  protected getResourceBody(props: DigitaltwinsDigitaltwinsinstancesTimeseriesdatabaseconnectionsProps): string {
    return JSON.stringify(
        {properties: {identity: {type: "string", userAssignedIdentity: "string"}, connectionType: "string"}}
    );
  }
}
