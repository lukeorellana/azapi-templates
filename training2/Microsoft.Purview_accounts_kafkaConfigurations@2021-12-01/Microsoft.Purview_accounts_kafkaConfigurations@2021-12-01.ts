import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface PurviewAccountsKafkaconfigurationsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:accounts;

/**
   * Consumer group for hook event hub.
   */
readonly consumerGroup?: string;

/**
   * Credentials to access event hub.
   */
readonly credentials?: Credentials;

/**
   * Optional partition Id for notification event hub. If not set, all partitions will be leveraged.
   */
readonly eventHubPartitionId?: string;

/**
   * 
   */
readonly eventHubResourceId?: string;

/**
   * The event hub type.
   */
readonly eventHubType?: 'Hook''Notification';

/**
   * The state of the event streaming service
   */
readonly eventStreamingState?: 'Disabled''Enabled';

/**
   * The event streaming service type
   */
readonly eventStreamingType?: 'Azure''Managed''None';

/**
   * Identity identifier for UserAssign type.
   */
readonly identityId?: string;

/**
   * Identity Type.
   */
readonly type?: 'None''SystemAssigned''UserAssigned';
}

/**
 * PurviewAccountsKafkaconfigurations resource
 */
export class PurviewAccountsKafkaconfigurations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: PurviewAccountsKafkaconfigurationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Purview/accounts/kafkaConfigurations@2021-12-01";
  }

  protected getResourceBody(props: PurviewAccountsKafkaconfigurationsProps): string {
    return JSON.stringify(
        {properties: {consumerGroup: "string", credentials: {identityId: "string", type: "string"}, eventHubPartitionId: "string", eventHubResourceId: "string", eventHubType: "string", eventStreamingState: "string", eventStreamingType: "string"}}
    );
  }
}
