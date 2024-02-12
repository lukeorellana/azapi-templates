import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorageStorageaccountsBlobservicesContainersProps extends IAzAPIBaseProps {

}

/**
 * StorageStorageaccountsBlobservicesContainers resource
 */
export class StorageStorageaccountsBlobservicesContainers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StorageStorageaccountsBlobservicesContainersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Storage/storageAccounts/blobServices/containers@2022-09-01";
  }

  protected getResourceBody(props: StorageStorageaccountsBlobservicesContainersProps): string {
    return JSON.stringify(
        {properties: {defaultEncryptionScope: "string", denyEncryptionScopeOverride: "${bool}", enableNfsV3AllSquash: "${bool}", enableNfsV3RootSquash: "${bool}", immutableStorageWithVersioning: {enabled: "${bool}"}, metadata: {}, publicAccess: "string"}}
    );
  }
}
