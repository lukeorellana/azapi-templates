import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatamigrationServicesServicetasksProps extends IAzAPIBaseProps {

}

/**
 * DatamigrationServicesServicetasks resource
 */
export class DatamigrationServicesServicetasks extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatamigrationServicesServicetasksProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataMigration/services/serviceTasks@2022-03-30-preview";
  }

  protected getResourceBody(props: DatamigrationServicesServicetasksProps): string {
    return JSON.stringify(
        {properties: {clientData: {}, taskType: "string"}, etag: "string"}
    );
  }
}
