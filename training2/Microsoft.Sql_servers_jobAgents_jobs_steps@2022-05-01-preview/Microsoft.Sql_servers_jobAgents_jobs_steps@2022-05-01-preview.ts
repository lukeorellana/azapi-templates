import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersJobagentsJobsStepsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:jobs;

/**
   * The action payload of the job step.
   */
readonly action: JobStepAction;

/**
   * The resource ID of the job credential that will be used to connect to the targets.
   */
readonly credential: string;

/**
   * Execution options for the job step.
   */
readonly executionOptions?: JobStepExecutionOptions;

/**
   * Output destination properties of the job step.
   */
readonly output?: JobStepOutput;

/**
   * The job step's index within the job. If not specified when creating the job step, it will be created as the last step. If not specified when updating the job step, the step id is not modified.
   */
readonly stepId?: number;

/**
   * The resource ID of the target group that the job step will be executed on.
   */
readonly targetGroup: string;

/**
   * The source of the action to execute.
   */
readonly source?: 'Inline';

/**
   * Type of action being executed by the job step.
   */
readonly type?: 'TSql';

/**
   * The action value, for example the text of the T-SQL script to execute.
   */
readonly value: string;

/**
   * Initial delay between retries for job step execution.
   */
readonly initialRetryIntervalSeconds?: number;

/**
   * The maximum amount of time to wait between retries for job step execution.
   */
readonly maximumRetryIntervalSeconds?: number;

/**
   * Maximum number of times the job step will be reattempted if the first attempt fails.
   */
readonly retryAttempts?: number;

/**
   * The backoff multiplier for the time between retries.
   */
readonly retryIntervalBackoffMultiplier?: number;

/**
   * Execution timeout for the job step.
   */
readonly timeoutSeconds?: number;

/**
   * The resource ID of the credential to use to connect to the output destination.
   */
readonly credential: string;

/**
   * The output destination database.
   */
readonly databaseName: string;

/**
   * The output destination resource group.
   */
readonly resourceGroupName?: string;

/**
   * The output destination schema.
   */
readonly schemaName?: string;

/**
   * The output destination server name.
   */
readonly serverName: string;

/**
   * The output destination subscription id.
   */
readonly subscriptionId?: string;

/**
   * The output destination table.
   */
readonly tableName: string;

/**
   * The output destination type.
   */
readonly type?: 'SqlDatabase';
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
