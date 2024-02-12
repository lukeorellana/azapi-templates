import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface InsightsComponentsExportconfigurationProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:components;

/**
   * The name of destination storage account.
   */
readonly DestinationAccountId?: string;

/**
   * The SAS URL for the destination storage container. It must grant write permission.
   */
readonly DestinationAddress?: string;

/**
   * The location ID of the destination storage container.
   */
readonly DestinationStorageLocationId?: string;

/**
   * The subscription ID of the destination storage container.
   */
readonly DestinationStorageSubscriptionId?: string;

/**
   * The Continuous Export destination type. This has to be 'Blob'.
   */
readonly DestinationType?: string;

/**
   * Set to 'true' to create a Continuous Export configuration as enabled, otherwise set it to 'false'.
   */
readonly IsEnabled?: string;

/**
   * Deprecated
   */
readonly NotificationQueueEnabled?: string;

/**
   * Deprecated
   */
readonly NotificationQueueUri?: string;

/**
   * The document types to be exported, as comma separated values. Allowed values include 'Requests', 'Event', 'Exceptions', 'Metrics', 'PageViews', 'PageViewPerformance', 'Rdd', 'PerformanceCounters', 'Availability', 'Messages'.
   */
readonly RecordTypes?: string;
}

/**
 * InsightsComponentsExportconfiguration resource
 */
export class InsightsComponentsExportconfiguration extends AzAPIBase {
  constructor(scope: Construct, id: string, props: InsightsComponentsExportconfigurationProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Insights/components/exportconfiguration@2015-05-01";
  }

  protected getResourceBody(props: InsightsComponentsExportconfigurationProps): string {
    return JSON.stringify(
        {DestinationAccountId: "string", DestinationAddress: "string", DestinationStorageLocationId: "string", DestinationStorageSubscriptionId: "string", DestinationType: "string", IsEnabled: "string", NotificationQueueEnabled: "string", NotificationQueueUri: "string", RecordTypes: "string"}
    );
  }
}
