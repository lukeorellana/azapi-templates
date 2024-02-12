import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatamigrationServicesProjectsTasksProps extends IAzAPIBaseProps {

}

/**
 * DatamigrationServicesProjectsTasks resource
 */
export class DatamigrationServicesProjectsTasks extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatamigrationServicesProjectsTasksProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataMigration/services/projects/tasks@2022-03-30-preview";
  }

  protected getResourceBody(props: DatamigrationServicesProjectsTasksProps): string {
    return JSON.stringify(
        {properties: {clientData: {}, taskType: "string"}, etag: "string"}
    );
  }
}
