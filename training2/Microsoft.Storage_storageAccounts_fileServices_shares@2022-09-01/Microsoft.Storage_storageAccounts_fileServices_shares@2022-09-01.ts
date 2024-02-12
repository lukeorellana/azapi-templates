import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorageStorageaccountsFileservicesSharesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:fileServices;

/**
   * Access tier for specific share. GpV2 account can choose between TransactionOptimized (default), Hot, and Cool. FileStorage account can choose Premium.
   */
readonly accessTier?: 'Cool''Hot''Premium''TransactionOptimized';

/**
   * The authentication protocol that is used for the file share. Can only be specified when creating a share.
   */
readonly enabledProtocols?: 'NFS''SMB';

/**
   * A name-value pair to associate with the share as metadata.
   */
readonly metadata?: object;

/**
   * The property is for NFS share only. The default is NoRootSquash.
   */
readonly rootSquash?: 'AllSquash''NoRootSquash''RootSquash';

/**
   * The maximum size of the share, in gigabytes. Must be greater than 0, and less than or equal to 5TB (5120). For Large File Shares, the maximum size is 102400.
   */
readonly shareQuota?: number;

/**
   * List of stored access policies specified on the share.
   */
readonly signedIdentifiers?: SignedIdentifier[];

/**
   * Access policy
   */
readonly accessPolicy?: AccessPolicy;

/**
   * An unique identifier of the stored access policy.
   */
readonly id?: string;

/**
   * Expiry time of the access policy
   */
readonly expiryTime?: string;

/**
   * List of abbreviated permissions.
   */
readonly permission?: string;

/**
   * Start time of the access policy
   */
readonly startTime?: string;
}

/**
 * StorageStorageaccountsFileservicesShares resource
 */
export class StorageStorageaccountsFileservicesShares extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StorageStorageaccountsFileservicesSharesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Storage/storageAccounts/fileServices/shares@2022-09-01";
  }

  protected getResourceBody(props: StorageStorageaccountsFileservicesSharesProps): string {
    return JSON.stringify(
        {properties: {accessTier: "string", enabledProtocols: "string", metadata: {}, rootSquash: "string", shareQuota: "${int}", signedIdentifiers: [{accessPolicy: {expiryTime: "string", permission: "string", startTime: "string"}, id: "string"}]}}
    );
  }
}
