import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorageStorageaccountsInventorypoliciesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:storageAccounts;

/**
   * The storage account blob inventory policy object. It is composed of policy rules.
   */
readonly policy: BlobInventoryPolicySchema;

/**
   * Policy is enabled if set to true.
   */
readonly enabled: bool;

/**
   * The storage account blob inventory policy rules. The rule is applied when it is enabled.
   */
readonly rules: BlobInventoryPolicyRule[];

/**
   * The valid value is Inventory
   */
readonly type: 'Inventory';

/**
   * An object that defines the blob inventory policy rule.
   */
readonly definition: BlobInventoryPolicyDefinition;

/**
   * Container name where blob inventory files are stored. Must be pre-created.
   */
readonly destination: string;

/**
   * Rule is enabled when set to true.
   */
readonly enabled: bool;

/**
   * An object that defines the filter set.
   */
readonly filters?: BlobInventoryPolicyFilter;

/**
   * This is a required field, it specifies the format for the inventory files.
   */
readonly format: 'Csv''Parquet';

/**
   * This is a required field. This field specifies the scope of the inventory created either at the blob or container level.
   */
readonly objectType: 'Blob''Container';

/**
   * This is a required field. This field is used to schedule an inventory formation.
   */
readonly schedule: 'Daily''Weekly';

/**
   * This is a required field. This field specifies the fields and properties of the object to be included in the inventory. The Schema field value 'Name' is always required. The valid values for this field for the 'Blob' definition.objectType include 'Name, Creation-Time, Last-Modified, Content-Length, Content-MD5, BlobType, AccessTier, AccessTierChangeTime, AccessTierInferred, Tags, Expiry-Time, hdi_isfolder, Owner, Group, Permissions, Acl, Snapshot, VersionId, IsCurrentVersion, Metadata, LastAccessTime, Tags, Etag, ContentType, ContentEncoding, ContentLanguage, ContentCRC64, CacheControl, ContentDisposition, LeaseStatus, LeaseState, LeaseDuration, ServerEncrypted, Deleted, DeletionId, DeletedTime, RemainingRetentionDays, ImmutabilityPolicyUntilDate, ImmutabilityPolicyMode, LegalHold, CopyId, CopyStatus, CopySource, CopyProgress, CopyCompletionTime, CopyStatusDescription, CustomerProvidedKeySha256, RehydratePriority, ArchiveStatus, XmsBlobSequenceNumber, EncryptionScope, IncrementalCopy, TagCount'. For Blob object type schema field value 'DeletedTime' is applicable only for Hns enabled accounts. The valid values for 'Container' definition.objectType include 'Name, Last-Modified, Metadata, LeaseStatus, LeaseState, LeaseDuration, PublicAccess, HasImmutabilityPolicy, HasLegalHold, Etag, DefaultEncryptionScope, DenyEncryptionScopeOverride, ImmutableStorageWithVersioningEnabled, Deleted, Version, DeletedTime, RemainingRetentionDays'. Schema field values 'Expiry-Time, hdi_isfolder, Owner, Group, Permissions, Acl, DeletionId' are valid only for Hns enabled accounts.Schema field values 'Tags, TagCount' are only valid for Non-Hns accounts.
   */
readonly schemaFields: string[];

/**
   * An array of predefined enum values. Valid values include blockBlob, appendBlob, pageBlob. Hns accounts does not support pageBlobs. This field is required when definition.objectType property is set to 'Blob'.
   */
readonly blobTypes?: string[];

/**
   * An array of strings with maximum 10 blob prefixes to be excluded from the inventory.
   */
readonly excludePrefix?: string[];

/**
   * Includes blob versions in blob inventory when value is set to true. The definition.schemaFields values 'VersionId and IsCurrentVersion' are required if this property is set to true, else they must be excluded.
   */
readonly includeBlobVersions?: bool;

/**
   * For 'Container' definition.objectType the definition.schemaFields must include 'Deleted, Version, DeletedTime and RemainingRetentionDays'. For 'Blob' definition.objectType and HNS enabled storage accounts the definition.schemaFields must include 'DeletionId, Deleted, DeletedTime and RemainingRetentionDays' and for Hns disabled accounts the definition.schemaFields must include 'Deleted and RemainingRetentionDays', else it must be excluded.
   */
readonly includeDeleted?: bool;

/**
   * Includes blob snapshots in blob inventory when value is set to true. The definition.schemaFields value 'Snapshot' is required if this property is set to true, else it must be excluded.
   */
readonly includeSnapshots?: bool;

/**
   * An array of strings with maximum 10 blob prefixes to be included in the inventory.
   */
readonly prefixMatch?: string[];
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
