import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebCertificatesProps extends IAzAPIBaseProps {
/**
   * Kind of resource.
   */
readonly kind?: string;

/**
   * CNAME of the certificate to be issued via free certificate
   */
readonly canonicalName?: string;

/**
   * Method of domain validation for free cert
   */
readonly domainValidationMethod?: string;

/**
   * Host names the certificate applies to.
   */
readonly hostNames?: string[];

/**
   * Key Vault Csm resource Id.
   */
readonly keyVaultId?: string;

/**
   * Key Vault secret name.
   */
readonly keyVaultSecretName?: string;

/**
   * Certificate password.
   */
readonly password?: string;

/**
   * Pfx blob.
   */
readonly pfxBlob?: For Bicep, you can use theany()function.;

/**
   * Resource ID of the associated App Service plan, formatted as: "/subscriptions/{subscriptionID}/resourceGroups/{groupName}/providers/Microsoft.Web/serverfarms/{appServicePlanName}".
   */
readonly serverFarmId?: string;
}

/**
 * WebCertificates resource
 */
export class WebCertificates extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebCertificatesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/certificates@2022-09-01";
  }

  protected getResourceBody(props: WebCertificatesProps): string {
    return JSON.stringify(
        {properties: {canonicalName: "string", domainValidationMethod: "string", hostNames: ["string"], keyVaultId: "string", keyVaultSecretName: "string", password: "string", serverFarmId: "string"}, kind: "string"}
    );
  }
}
