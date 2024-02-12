import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MediaVideoanalyzersProps extends IAzAPIBaseProps {
/**
   * The identities associated to the Video Analyzer resource.
   */
readonly identity?: VideoAnalyzerIdentity;

/**
   * The identity type.
   */
readonly type: string;

/**
   * The User Assigned Managed Identities.
   */
readonly userAssignedIdentities?: object;

/**
   * The account encryption properties.
   */
readonly encryption?: AccountEncryption;

/**
   * The IoT Hubs for this resource.
   */
readonly iotHubs?: IotHub[];

/**
   * Network access control for Video Analyzer.
   */
readonly networkAccessControl?: NetworkAccessControl;

/**
   * Whether or not public network access is allowed for resources under the Video Analyzer account.
   */
readonly publicNetworkAccess?: 'Disabled''Enabled';

/**
   * The storage accounts for this resource.
   */
readonly storageAccounts: StorageAccount[];

/**
   * The Key Vault identity.
   */
readonly identity?: ResourceIdentity;

/**
   * The properties of the key used to encrypt the account.
   */
readonly keyVaultProperties?: KeyVaultProperties;

/**
   * The type of key used to encrypt the Account Key.
   */
readonly type: 'CustomerKey''SystemKey';

/**
   * The user assigned managed identity's resource identifier to use when accessing a resource.
   */
readonly userAssignedIdentity: string;

/**
   * The URL of the Key Vault key used to encrypt the account. The key may either be versioned (for examplehttps://vault/keys/mykey/version1) or reference a key without a version (for examplehttps://vault/keys/mykey).
   */
readonly keyIdentifier: string;

/**
   * The IoT Hub resource identifier.
   */
readonly id: string;

/**
   * The IoT Hub identity.
   */
readonly identity: ResourceIdentity;

/**
   * Public network access for consumption group.
   */
readonly consumption?: GroupLevelAccessControl;

/**
   * Public network access for ingestion group.
   */
readonly ingestion?: GroupLevelAccessControl;

/**
   * Public network access for integration group.
   */
readonly integration?: GroupLevelAccessControl;

/**
   * Whether or not public network access is allowed for specified resources under the Video Analyzer account.
   */
readonly publicNetworkAccess?: 'Disabled''Enabled';

/**
   * The ID of the storage account resource. Video Analyzer relies on tables, queues, and blobs. The primary storage account must be a Standard Storage account (either Microsoft.ClassicStorage or Microsoft.Storage).
   */
readonly id: string;

/**
   * A managed identity that Video Analyzer will use to access the storage account.
   */
readonly identity?: ResourceIdentity;
}

/**
 * MediaVideoanalyzers resource
 */
export class MediaVideoanalyzers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MediaVideoanalyzersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Media/videoAnalyzers@2021-11-01-preview";
  }

  protected getResourceBody(props: MediaVideoanalyzersProps): string {
    return JSON.stringify(
        {properties: {encryption: {identity: {userAssignedIdentity: "string"}, keyVaultProperties: {keyIdentifier: "string"}, type: "string"}, iotHubs: [{id: "string", identity: {userAssignedIdentity: "string"}}], networkAccessControl: {consumption: {publicNetworkAccess: "string"}, ingestion: {publicNetworkAccess: "string"}, integration: {publicNetworkAccess: "string"}}, publicNetworkAccess: "string", storageAccounts: [{id: "string", identity: {userAssignedIdentity: "string"}}]}}
    );
  }
}
