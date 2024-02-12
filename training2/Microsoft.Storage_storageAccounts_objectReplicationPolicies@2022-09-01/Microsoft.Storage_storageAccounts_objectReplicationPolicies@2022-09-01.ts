import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorageStorageaccountsObjectreplicationpoliciesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:storageAccounts;

/**
   * Required. Destination account name. It should be full resource id if allowCrossTenantReplication set to false.
   */
readonly destinationAccount: string;

/**
   * The storage account object replication rules.
   */
readonly rules?: ObjectReplicationPolicyRule[];

/**
   * Required. Source account name. It should be full resource id if allowCrossTenantReplication set to false.
   */
readonly sourceAccount: string;

/**
   * Required. Destination container name.
   */
readonly destinationContainer: string;

/**
   * Optional. An object that defines the filter set.
   */
readonly filters?: ObjectReplicationPolicyFilter;

/**
   * Rule Id is auto-generated for each new rule on destination account. It is required for put policy on source account.
   */
readonly ruleId?: string;

/**
   * Required. Source container name.
   */
readonly sourceContainer: string;

/**
   * Blobs created after the time will be replicated to the destination. It must be in datetime format 'yyyy-MM-ddTHH:mm:ssZ'. Example: 2020-02-19T16:05:00Z
   */
readonly minCreationTime?: string;

/**
   * Optional. Filters the results to replicate only blobs whose names begin with the specified prefix.
   */
readonly prefixMatch?: string[];
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
