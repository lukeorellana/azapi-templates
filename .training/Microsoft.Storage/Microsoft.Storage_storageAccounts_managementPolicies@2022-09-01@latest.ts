import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorageStorageaccountsManagementpoliciesProps extends IAzAPIBaseProps {

}

/**
 * StorageStorageaccountsManagementpolicies resource
 */
export class StorageStorageaccountsManagementpolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StorageStorageaccountsManagementpoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Storage/storageAccounts/managementPolicies@2022-09-01";
  }

  protected getResourceBody(props: StorageStorageaccountsManagementpoliciesProps): string {
    return JSON.stringify(
        {properties: {policy: {rules: [{definition: {actions: {baseBlob: {delete: {daysAfterCreationGreaterThan: "${int}", daysAfterLastAccessTimeGreaterThan: "${int}", daysAfterLastTierChangeGreaterThan: "${int}", daysAfterModificationGreaterThan: "${int}"}, enableAutoTierToHotFromCool: "${bool}", tierToArchive: {daysAfterCreationGreaterThan: "${int}", daysAfterLastAccessTimeGreaterThan: "${int}", daysAfterLastTierChangeGreaterThan: "${int}", daysAfterModificationGreaterThan: "${int}"}, tierToCold: {daysAfterCreationGreaterThan: "${int}", daysAfterLastAccessTimeGreaterThan: "${int}", daysAfterLastTierChangeGreaterThan: "${int}", daysAfterModificationGreaterThan: "${int}"}, tierToCool: {daysAfterCreationGreaterThan: "${int}", daysAfterLastAccessTimeGreaterThan: "${int}", daysAfterLastTierChangeGreaterThan: "${int}", daysAfterModificationGreaterThan: "${int}"}, tierToHot: {daysAfterCreationGreaterThan: "${int}", daysAfterLastAccessTimeGreaterThan: "${int}", daysAfterLastTierChangeGreaterThan: "${int}", daysAfterModificationGreaterThan: "${int}"}}, snapshot: {delete: {daysAfterCreationGreaterThan: "${int}", daysAfterLastTierChangeGreaterThan: "${int}"}, tierToArchive: {daysAfterCreationGreaterThan: "${int}", daysAfterLastTierChangeGreaterThan: "${int}"}, tierToCold: {daysAfterCreationGreaterThan: "${int}", daysAfterLastTierChangeGreaterThan: "${int}"}, tierToCool: {daysAfterCreationGreaterThan: "${int}", daysAfterLastTierChangeGreaterThan: "${int}"}, tierToHot: {daysAfterCreationGreaterThan: "${int}", daysAfterLastTierChangeGreaterThan: "${int}"}}, version: {delete: {daysAfterCreationGreaterThan: "${int}", daysAfterLastTierChangeGreaterThan: "${int}"}, tierToArchive: {daysAfterCreationGreaterThan: "${int}", daysAfterLastTierChangeGreaterThan: "${int}"}, tierToCold: {daysAfterCreationGreaterThan: "${int}", daysAfterLastTierChangeGreaterThan: "${int}"}, tierToCool: {daysAfterCreationGreaterThan: "${int}", daysAfterLastTierChangeGreaterThan: "${int}"}, tierToHot: {daysAfterCreationGreaterThan: "${int}", daysAfterLastTierChangeGreaterThan: "${int}"}}}, filters: {blobIndexMatch: [{name: "string", op: "string", value: "string"}], blobTypes: ["string"], prefixMatch: ["string"]}}, enabled: "${bool}", name: "string", type: "Lifecycle"}]}}}
    );
  }
}
