import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersJobagentsJobsExecutionsProps extends IAzAPIBaseProps {

}

/**
 * SqlServersJobagentsJobsExecutions resource
 */
export class SqlServersJobagentsJobsExecutions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlServersJobagentsJobsExecutionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/servers/jobAgents/jobs/executions@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlServersJobagentsJobsExecutionsProps): string {
    return JSON.stringify(
        
    );
  }
}
