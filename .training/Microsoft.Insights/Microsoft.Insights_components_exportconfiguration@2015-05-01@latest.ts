import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface InsightsComponentsExportconfigurationProps extends IAzAPIBaseProps {

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
