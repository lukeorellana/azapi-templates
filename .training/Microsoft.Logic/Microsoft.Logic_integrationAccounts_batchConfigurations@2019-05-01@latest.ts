import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface LogicIntegrationaccountsBatchconfigurationsProps extends IAzAPIBaseProps {

}

/**
 * LogicIntegrationaccountsBatchconfigurations resource
 */
export class LogicIntegrationaccountsBatchconfigurations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: LogicIntegrationaccountsBatchconfigurationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Logic/integrationAccounts/batchConfigurations@2019-05-01";
  }

  protected getResourceBody(props: LogicIntegrationaccountsBatchconfigurationsProps): string {
    return JSON.stringify(
        {properties: {batchGroupName: "string", changedTime: "string", createdTime: "string", releaseCriteria: {batchSize: "${int}", messageCount: "${int}", recurrence: {endTime: "string", frequency: "string", interval: "${int}", schedule: {hours: ["${int}"], minutes: ["${int}"], monthDays: ["${int}"], monthlyOccurrences: [{day: "string", occurrence: "${int}"}], weekDays: ["string"]}, startTime: "string", timeZone: "string"}}}}
    );
  }
}
