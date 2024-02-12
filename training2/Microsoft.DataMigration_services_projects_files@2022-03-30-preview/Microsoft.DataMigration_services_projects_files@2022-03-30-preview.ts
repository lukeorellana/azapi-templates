import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatamigrationServicesProjectsFilesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:projects;

/**
   * HTTP strong entity tag value. This is ignored if submitted.
   */
readonly etag?: string;

/**
   * Optional File extension. If submitted it should not have a leading period and must match the extension from filePath.
   */
readonly extension?: string;

/**
   * Relative path of this file resource. This property can be set when creating or updating the file resource.
   */
readonly filePath?: string;

/**
   * File content type. This property can be modified to reflect the file content type.
   */
readonly mediaType?: string;
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
