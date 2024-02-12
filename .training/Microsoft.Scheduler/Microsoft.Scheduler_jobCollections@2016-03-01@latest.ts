import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SchedulerJobcollectionsProps extends IAzAPIBaseProps {

}

/**
 * SchedulerJobcollections resource
 */
export class SchedulerJobcollections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SchedulerJobcollectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Scheduler/jobCollections@2016-03-01";
  }

  protected getResourceBody(props: SchedulerJobcollectionsProps): string {
    return JSON.stringify(
        {properties: {quota: {maxJobCount: "${int}", maxJobOccurrence: "${int}", maxRecurrence: {frequency: "string", interval: "${int}"}}, sku: {name: "string"}, state: "string"}}
    );
  }
}
