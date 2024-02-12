import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface PurviewAccountsKafkaconfigurationsProps extends IAzAPIBaseProps {

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
