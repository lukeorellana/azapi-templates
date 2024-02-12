import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorageStorageaccountsManagementpoliciesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:storageAccounts;

/**
   * The Storage Account ManagementPolicy, in JSON format. See more details in: /azure/storage/common/storage-lifecycle-managment-concepts.
   */
readonly policy: ManagementPolicySchema;

/**
   * The Storage Account ManagementPolicies Rules. See more details in: /azure/storage/common/storage-lifecycle-managment-concepts.
   */
readonly rules: ManagementPolicyRule[];

/**
   * An object that defines the Lifecycle rule.
   */
readonly definition: ManagementPolicyDefinition;

/**
   * Rule is enabled if set to true.
   */
readonly enabled?: bool;

/**
   * The valid value is Lifecycle
   */
readonly type: 'Lifecycle';

/**
   * An object that defines the action set.
   */
readonly actions: ManagementPolicyAction;

/**
   * An object that defines the filter set.
   */
readonly filters?: ManagementPolicyFilter;

/**
   * The management policy action for base blob
   */
readonly baseBlob?: ManagementPolicyBaseBlob;

/**
   * The management policy action for snapshot
   */
readonly snapshot?: ManagementPolicySnapShot;

/**
   * The management policy action for version
   */
readonly version?: ManagementPolicyVersion;

/**
   * The function to delete the blob
   */
readonly delete?: DateAfterModification;

/**
   * This property enables auto tiering of a blob from cool to hot on a blob access. This property requires tierToCool.daysAfterLastAccessTimeGreaterThan.
   */
readonly enableAutoTierToHotFromCool?: bool;

/**
   * The function to tier blobs to archive storage.
   */
readonly tierToArchive?: DateAfterModification;

/**
   * The function to tier blobs to cold storage.
   */
readonly tierToCold?: DateAfterModification;

/**
   * The function to tier blobs to cool storage.
   */
readonly tierToCool?: DateAfterModification;

/**
   * The function to tier blobs to hot storage. This action can only be used with Premium Block Blob Storage Accounts
   */
readonly tierToHot?: DateAfterModification;

/**
   * Value indicating the age in days after blob creation.
   */
readonly daysAfterCreationGreaterThan?: number;

/**
   * Value indicating the age in days after last blob access. This property can only be used in conjunction with last access time tracking policy
   */
readonly daysAfterLastAccessTimeGreaterThan?: number;

/**
   * Value indicating the age in days after last blob tier change time. This property is only applicable for tierToArchive actions and requires daysAfterModificationGreaterThan to be set for baseBlobs based actions. The blob will be archived if both the conditions are satisfied.
   */
readonly daysAfterLastTierChangeGreaterThan?: number;

/**
   * Value indicating the age in days after last modification
   */
readonly daysAfterModificationGreaterThan?: number;

/**
   * The function to delete the blob snapshot
   */
readonly delete?: DateAfterCreation;

/**
   * The function to tier blob snapshot to archive storage.
   */
readonly tierToArchive?: DateAfterCreation;

/**
   * The function to tier blobs to cold storage.
   */
readonly tierToCold?: DateAfterCreation;

/**
   * The function to tier blob snapshot to cool storage.
   */
readonly tierToCool?: DateAfterCreation;

/**
   * The function to tier blobs to hot storage. This action can only be used with Premium Block Blob Storage Accounts
   */
readonly tierToHot?: DateAfterCreation;

/**
   * Value indicating the age in days after creation
   */
readonly daysAfterCreationGreaterThan: number;

/**
   * Value indicating the age in days after last blob tier change time. This property is only applicable for tierToArchive actions and requires daysAfterCreationGreaterThan to be set for snapshots and blob version based actions. The blob will be archived if both the conditions are satisfied.
   */
readonly daysAfterLastTierChangeGreaterThan?: number;

/**
   * The function to delete the blob version
   */
readonly delete?: DateAfterCreation;

/**
   * The function to tier blob version to archive storage.
   */
readonly tierToArchive?: DateAfterCreation;

/**
   * The function to tier blobs to cold storage.
   */
readonly tierToCold?: DateAfterCreation;

/**
   * The function to tier blob version to cool storage.
   */
readonly tierToCool?: DateAfterCreation;

/**
   * The function to tier blobs to hot storage. This action can only be used with Premium Block Blob Storage Accounts
   */
readonly tierToHot?: DateAfterCreation;

/**
   * An array of blob index tag based filters, there can be at most 10 tag filters
   */
readonly blobIndexMatch?: TagFilter[];

/**
   * An array of predefined enum values. Currently blockBlob supports all tiering and delete actions. Only delete actions are supported for appendBlob.
   */
readonly blobTypes: string[];

/**
   * An array of strings for prefixes to be match.
   */
readonly prefixMatch?: string[];

/**
   * This is the comparison operator which is used for object comparison and filtering. Only == (equality operator) is currently supported
   */
readonly op: string;

/**
   * This is the filter tag value field used for tag based filtering, it can have 0 - 256 characters
   */
readonly value: string;
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
