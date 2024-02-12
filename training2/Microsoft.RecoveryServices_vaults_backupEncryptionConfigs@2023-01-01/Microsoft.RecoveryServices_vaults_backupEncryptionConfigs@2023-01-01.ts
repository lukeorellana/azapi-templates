import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RecoveryservicesVaultsBackupencryptionconfigsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:vaults;

/**
   * Optional ETag.
   */
readonly eTag?: string;

/**
   * Encryption At Rest Type
   */
readonly encryptionAtRestType?: 'CustomerManaged''Invalid''MicrosoftManaged';

/**
   * 
   */
readonly infrastructureEncryptionState?: 'Disabled''Enabled''Invalid';

/**
   * Key Vault Key URI
   */
readonly keyUri?: string;

/**
   * 
   */
readonly lastUpdateStatus?: 'Failed''FirstInitialization''Initialized''Invalid''NotEnabled''PartiallyFailed''PartiallySucceeded''Succeeded';

/**
   * Key Vault Subscription Id
   */
readonly subscriptionId?: string;
}

/**
 * RecoveryservicesVaultsBackupencryptionconfigs resource
 */
export class RecoveryservicesVaultsBackupencryptionconfigs extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RecoveryservicesVaultsBackupencryptionconfigsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.RecoveryServices/vaults/backupEncryptionConfigs@2023-01-01";
  }

  protected getResourceBody(props: RecoveryservicesVaultsBackupencryptionconfigsProps): string {
    return JSON.stringify(
        {properties: {encryptionAtRestType: "string", infrastructureEncryptionState: "string", keyUri: "string", lastUpdateStatus: "string", subscriptionId: "string"}, eTag: "string"}
    );
  }
}
