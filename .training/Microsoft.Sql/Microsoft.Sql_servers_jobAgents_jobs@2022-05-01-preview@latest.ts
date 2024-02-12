import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersJobagentsJobsProps extends IAzAPIBaseProps {

}

/**
 * SqlServersJobagentsJobs resource
 */
export class SqlServersJobagentsJobs extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlServersJobagentsJobsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/servers/jobAgents/jobs@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlServersJobagentsJobsProps): string {
    return JSON.stringify(
        {properties: {description: "string", schedule: {enabled: "${bool}", endTime: "string", interval: "string", startTime: "string", type: "string"}}}
    );
  }
}
