import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorageStorageaccountsBlobservicesContainersImmutabilitypoliciesProps extends IAzAPIBaseProps {

}

/**
 * StorageStorageaccountsBlobservicesContainersImmutabilitypolicies resource
 */
export class StorageStorageaccountsBlobservicesContainersImmutabilitypolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StorageStorageaccountsBlobservicesContainersImmutabilitypoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Storage/storageAccounts/blobServices/containers/immutabilityPolicies@2022-09-01";
  }

  protected getResourceBody(props: StorageStorageaccountsBlobservicesContainersImmutabilitypoliciesProps): string {
    return JSON.stringify(
        {properties: {allowProtectedAppendWrites: "${bool}", allowProtectedAppendWritesAll: "${bool}", immutabilityPeriodSinceCreationInDays: "${int}"}}
    );
  }
}
