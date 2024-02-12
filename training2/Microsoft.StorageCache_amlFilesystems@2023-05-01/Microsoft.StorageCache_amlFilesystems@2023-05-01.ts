import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StoragecacheAmlfilesystemsProps extends IAzAPIBaseProps {
/**
   * SKU for the resource.
   */
readonly sku?: SkuName;

/**
   * The managed identity used by the AML file system, if configured.
   */
readonly identity?: AmlFilesystemIdentity;

/**
   * Availability zones for resources. This field should only contain a single element in the array.
   */
readonly zones?: string[];

/**
   * The type of identity used for the resource.
   */
readonly type?: 'None''UserAssigned';

/**
   * A dictionary where each key is a user assigned identity resource ID, and each key's value is an empty dictionary.
   */
readonly userAssignedIdentities?: object;

/**
   * Specifies encryption settings of the AML file system.
   */
readonly encryptionSettings?: AmlFilesystemEncryptionSettings;

/**
   * Subnet used for managing the AML file system and for client-facing operations. This subnet should have at least a /24 subnet mask within the VNET's address space.
   */
readonly filesystemSubnet: string;

/**
   * Hydration and archive settings and status
   */
readonly hsm?: AmlFilesystemPropertiesHsm;

/**
   * Start time of a 30-minute weekly maintenance window.
   */
readonly maintenanceWindow: AmlFilesystemPropertiesManumberenanceWindow;

/**
   * The size of the AML file system, in TiB. This might be rounded up.
   */
readonly storageCapacityTiB: number;

/**
   * Specifies the location of the encryption key in Key Vault.
   */
readonly keyEncryptionKey?: KeyVaultKeyReference;

/**
   * The URL referencing a key encryption key in key vault.
   */
readonly keyUrl: string;

/**
   * Describes a resource Id to source key vault.
   */
readonly sourceVault: KeyVaultKeyReferenceSourceVault;

/**
   * Resource Id.
   */
readonly id?: string;

/**
   * Specifies HSM settings of the AML file system.
   */
readonly settings?: AmlFilesystemHsmSettings;

/**
   * Resource ID of storage container used for hydrating the namespace and archiving from the namespace. The resource provider must have permission to create SAS tokens on the storage account.
   */
readonly container: string;

/**
   * Only blobs in the non-logging container that start with this path/prefix get hydrated into the cluster namespace.
   */
readonly importPrefix?: string;

/**
   * Resource ID of storage container used for logging events and errors.  Must be a separate container in the same storage account as the hydration and archive container. The resource provider must have permission to create SAS tokens on the storage account.
   */
readonly loggingContainer: string;

/**
   * Day of the week on which the maintenance window will occur.
   */
readonly dayOfWeek?: 'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday';

/**
   * The time of day (in UTC) to start the maintenance window.
   */
readonly timeOfDayUTC?: string;
}

/**
 * StoragecacheAmlfilesystems resource
 */
export class StoragecacheAmlfilesystems extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StoragecacheAmlfilesystemsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.StorageCache/amlFilesystems@2023-05-01";
  }

  protected getResourceBody(props: StoragecacheAmlfilesystemsProps): string {
    return JSON.stringify(
        {properties: {encryptionSettings: {keyEncryptionKey: {keyUrl: "string", sourceVault: {id: "string"}}}, filesystemSubnet: "string", hsm: {settings: {container: "string", importPrefix: "string", loggingContainer: "string"}}, maintenanceWindow: {dayOfWeek: "string", timeOfDayUTC: "string"}, storageCapacityTiB: "${int}"}, zones: ["string"], sku: {name: "string"}}
    );
  }
}
