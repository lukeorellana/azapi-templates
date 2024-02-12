import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersJobagentsJobsStepsProps extends IAzAPIBaseProps {

}

/**
 * SqlServersJobagentsJobsSteps resource
 */
export class SqlServersJobagentsJobsSteps extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlServersJobagentsJobsStepsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/servers/jobAgents/jobs/steps@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlServersJobagentsJobsStepsProps): string {
    return JSON.stringify(
        {properties: {action: {source: "Inline", type: "TSql", value: "string"}, credential: "string", executionOptions: {initialRetryIntervalSeconds: "${int}", maximumRetryIntervalSeconds: "${int}", retryAttempts: "${int}", retryIntervalBackoffMultiplier: "${int}", timeoutSeconds: "${int}"}, output: {credential: "string", databaseName: "string", resourceGroupName: "string", schemaName: "string", serverName: "string", subscriptionId: "string", tableName: "string", type: "SqlDatabase"}, stepId: "${int}", targetGroup: "string"}}
    );
  }
}
