import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RecoveryservicesVaultsCertificatesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:vaults;

/**
   * Specifies the authentication type.
   */
readonly authType?: 'AAD''ACS''AccessControlService''AzureActiveDirectory''Invalid';

/**
   * The base64 encoded certificate raw data string
   */
readonly certificate?: For Bicep, you can use theany()function.;
}

/**
 * RecoveryservicesVaultsCertificates resource
 */
export class RecoveryservicesVaultsCertificates extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RecoveryservicesVaultsCertificatesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.RecoveryServices/vaults/certificates@2023-01-01";
  }

  protected getResourceBody(props: RecoveryservicesVaultsCertificatesProps): string {
    return JSON.stringify(
        {properties: {authType: "string"}}
    );
  }
}
