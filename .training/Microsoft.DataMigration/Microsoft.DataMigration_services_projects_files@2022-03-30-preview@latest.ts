import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatamigrationServicesProjectsFilesProps extends IAzAPIBaseProps {

}

/**
 * DatamigrationServicesProjectsFiles resource
 */
export class DatamigrationServicesProjectsFiles extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatamigrationServicesProjectsFilesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataMigration/services/projects/files@2022-03-30-preview";
  }

  protected getResourceBody(props: DatamigrationServicesProjectsFilesProps): string {
    return JSON.stringify(
        {properties: {extension: "string", filePath: "string", mediaType: "string"}, etag: "string"}
    );
  }
}
