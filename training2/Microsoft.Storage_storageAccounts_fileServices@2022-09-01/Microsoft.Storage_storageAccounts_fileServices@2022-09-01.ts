import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorageStorageaccountsFileservicesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:storageAccounts;

/**
   * Specifies CORS rules for the File service. You can include up to five CorsRule elements in the request. If no CorsRule elements are included in the request body, all CORS rules will be deleted, and CORS will be disabled for the File service.
   */
readonly cors?: CorsRules;

/**
   * Protocol settings for file service
   */
readonly protocolSettings?: ProtocolSettings;

/**
   * The file service properties for share soft delete.
   */
readonly shareDeleteRetentionPolicy?: DeleteRetentionPolicy;

/**
   * The List of CORS rules. You can include up to five CorsRule elements in the request.
   */
readonly corsRules?: CorsRule[];

/**
   * Required if CorsRule element is present. A list of headers allowed to be part of the cross-origin request.
   */
readonly allowedHeaders: string[];

/**
   * Required if CorsRule element is present. A list of HTTP methods that are allowed to be executed by the origin.
   */
readonly allowedMethods: String array containing any of:'DELETE''GET''HEAD''MERGE''OPTIONS''PATCH''POST''PUT';

/**
   * Required if CorsRule element is present. A list of origin domains that will be allowed via CORS, or "*" to allow all domains
   */
readonly allowedOrigins: string[];

/**
   * Required if CorsRule element is present. A list of response headers to expose to CORS clients.
   */
readonly exposedHeaders: string[];

/**
   * Required if CorsRule element is present. The number of seconds that the client/browser should cache a preflight response.
   */
readonly maxAgeInSeconds: number;

/**
   * Setting for SMB protocol
   */
readonly smb?: SmbSetting;

/**
   * SMB authentication methods supported by server. Valid values are NTLMv2, Kerberos. Should be passed as a string with delimiter ';'.
   */
readonly authenticationMethods?: string;

/**
   * SMB channel encryption supported by server. Valid values are AES-128-CCM, AES-128-GCM, AES-256-GCM. Should be passed as a string with delimiter ';'.
   */
readonly channelEncryption?: string;

/**
   * Kerberos ticket encryption supported by server. Valid values are RC4-HMAC, AES-256. Should be passed as a string with delimiter ';'
   */
readonly kerberosTicketEncryption?: string;

/**
   * Multichannel setting. Applies to Premium FileStorage only.
   */
readonly multichannel?: Multichannel;

/**
   * SMB protocol versions supported by server. Valid values are SMB2.1, SMB3.0, SMB3.1.1. Should be passed as a string with delimiter ';'.
   */
readonly versions?: string;

/**
   * Indicates whether multichannel is enabled
   */
readonly enabled?: bool;

/**
   * This property when set to true allows deletion of the soft deleted blob versions and snapshots. This property cannot be used blob restore policy. This property only applies to blob service and does not apply to containers or file share.
   */
readonly allowPermanentDelete?: bool;

/**
   * Indicates the number of days that the deleted item should be retained. The minimum specified value can be 1 and the maximum value can be 365.
   */
readonly days?: number;

/**
   * Indicates whether DeleteRetentionPolicy is enabled.
   */
readonly enabled?: bool;
}

/**
 * StorageStorageaccountsFileservices resource
 */
export class StorageStorageaccountsFileservices extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StorageStorageaccountsFileservicesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Storage/storageAccounts/fileServices@2022-09-01";
  }

  protected getResourceBody(props: StorageStorageaccountsFileservicesProps): string {
    return JSON.stringify(
        {properties: {cors: {corsRules: [{allowedHeaders: ["string"], allowedMethods: ["string"], allowedOrigins: ["string"], exposedHeaders: ["string"], maxAgeInSeconds: "${int}"}]}, protocolSettings: {smb: {authenticationMethods: "string", channelEncryption: "string", kerberosTicketEncryption: "string", multichannel: {enabled: "${bool}"}, versions: "string"}}, shareDeleteRetentionPolicy: {allowPermanentDelete: "${bool}", days: "${int}", enabled: "${bool}"}}}
    );
  }
}
