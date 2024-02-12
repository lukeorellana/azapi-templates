import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatamigrationServicesProjectsProps extends IAzAPIBaseProps {

}

/**
 * DatamigrationServicesProjects resource
 */
export class DatamigrationServicesProjects extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatamigrationServicesProjectsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataMigration/services/projects@2022-03-30-preview";
  }

  protected getResourceBody(props: DatamigrationServicesProjectsProps): string {
    return JSON.stringify(
        {properties: {azureAuthenticationInfo: {appKey: "string", applicationId: "string", ignoreAzurePermissions: "${bool}", tenantId: "string"}, databasesInfo: [{sourceDatabaseName: "string"}], sourceConnectionInfo: {password: "string", userName: "string", type: "string"}, sourcePlatform: "string", targetConnectionInfo: {password: "string", userName: "string", type: "string"}, targetPlatform: "string"}, etag: "string"}
    );
  }
}
