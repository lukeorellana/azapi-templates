import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface LogicIntegrationaccountsCertificatesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:numberegrationAccounts;

/**
   * The key details in the key vault.
   */
readonly key?: KeyVaultKeyReference;

/**
   * The metadata.
   */
readonly metadata?: For Bicep, you can use theany()function.;

/**
   * The public certificate.
   */
readonly publicCertificate?: string;

/**
   * The private key name in key vault.
   */
readonly keyName: string;

/**
   * The key vault reference.
   */
readonly keyVault: KeyVaultKeyReferenceKeyVault;

/**
   * The private key version in key vault.
   */
readonly keyVersion?: string;

/**
   * The resource id.
   */
readonly id?: string;
}

/**
 * LogicIntegrationaccountsCertificates resource
 */
export class LogicIntegrationaccountsCertificates extends AzAPIBase {
  constructor(scope: Construct, id: string, props: LogicIntegrationaccountsCertificatesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Logic/integrationAccounts/certificates@2019-05-01";
  }

  protected getResourceBody(props: LogicIntegrationaccountsCertificatesProps): string {
    return JSON.stringify(
        {properties: {key: {keyName: "string", keyVault: {id: "string"}, keyVersion: "string"}, publicCertificate: "string"}}
    );
  }
}
