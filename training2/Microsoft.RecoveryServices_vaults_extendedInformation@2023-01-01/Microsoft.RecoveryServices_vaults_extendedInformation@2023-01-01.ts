import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RecoveryservicesVaultsExtendedinformationProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:vaults;

/**
   * Optional ETag.
   */
readonly etag?: string;

/**
   * Algorithm for Vault ExtendedInfo
   */
readonly algorithm?: string;

/**
   * Encryption key.
   */
readonly encryptionKey?: string;

/**
   * Encryption key thumbprint.
   */
readonly encryptionKeyThumbprint?: string;

/**
   * Integrity key.
   */
readonly integrityKey?: string;
}

/**
 * RecoveryservicesVaultsExtendedinformation resource
 */
export class RecoveryservicesVaultsExtendedinformation extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RecoveryservicesVaultsExtendedinformationProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.RecoveryServices/vaults/extendedInformation@2023-01-01";
  }

  protected getResourceBody(props: RecoveryservicesVaultsExtendedinformationProps): string {
    return JSON.stringify(
        {properties: {algorithm: "string", encryptionKey: "string", encryptionKeyThumbprint: "string", integrityKey: "string"}, etag: "string"}
    );
  }
}
