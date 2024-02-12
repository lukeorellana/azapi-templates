import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorageStorageaccountsObjectreplicationpoliciesProps extends IAzAPIBaseProps {

}

/**
 * StorageStorageaccountsObjectreplicationpolicies resource
 */
export class StorageStorageaccountsObjectreplicationpolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StorageStorageaccountsObjectreplicationpoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Storage/storageAccounts/objectReplicationPolicies@2022-09-01";
  }

  protected getResourceBody(props: StorageStorageaccountsObjectreplicationpoliciesProps): string {
    return JSON.stringify(
        {properties: {destinationAccount: "string", rules: [{destinationContainer: "string", filters: {minCreationTime: "string", prefixMatch: ["string"]}, ruleId: "string", sourceContainer: "string"}], sourceAccount: "string"}}
    );
  }
}
