import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DataprotectionBackupvaultsBackupinstancesProps extends IAzAPIBaseProps {

}

/**
 * DataprotectionBackupvaultsBackupinstances resource
 */
export class DataprotectionBackupvaultsBackupinstances extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DataprotectionBackupvaultsBackupinstancesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataProtection/backupVaults/backupInstances@2022-11-01-preview";
  }

  protected getResourceBody(props: DataprotectionBackupvaultsBackupinstancesProps): string {
    return JSON.stringify(
        {properties: {datasourceAuthCredentials: {objectType: "string"}, dataSourceInfo: {datasourceType: "string", objectType: "string", resourceID: "string", resourceLocation: "string", resourceName: "string", resourceType: "string", resourceUri: "string"}, dataSourceSetInfo: {datasourceType: "string", objectType: "string", resourceID: "string", resourceLocation: "string", resourceName: "string", resourceType: "string", resourceUri: "string"}, friendlyName: "string", objectType: "string", policyInfo: {policyId: "string", policyParameters: {backupDatasourceParametersList: [{objectType: "string"}], dataStoreParametersList: [{dataStoreType: "string", objectType: "string"}]}}, validationType: "string"}}
    );
  }
}
