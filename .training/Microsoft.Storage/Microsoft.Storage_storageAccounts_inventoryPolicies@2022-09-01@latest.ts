import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorageStorageaccountsInventorypoliciesProps extends IAzAPIBaseProps {

}

/**
 * StorageStorageaccountsInventorypolicies resource
 */
export class StorageStorageaccountsInventorypolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StorageStorageaccountsInventorypoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Storage/storageAccounts/inventoryPolicies@2022-09-01";
  }

  protected getResourceBody(props: StorageStorageaccountsInventorypoliciesProps): string {
    return JSON.stringify(
        {properties: {policy: {enabled: "${bool}", rules: [{definition: {filters: {blobTypes: ["string"], excludePrefix: ["string"], includeBlobVersions: "${bool}", includeDeleted: "${bool}", includeSnapshots: "${bool}", prefixMatch: ["string"]}, format: "string", objectType: "string", schedule: "string", schemaFields: ["string"]}, destination: "string", enabled: "${bool}", name: "string"}], type: "Inventory"}}}
    );
  }
}
