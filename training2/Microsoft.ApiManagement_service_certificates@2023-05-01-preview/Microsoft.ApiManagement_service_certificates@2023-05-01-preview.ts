import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceCertificatesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:service;

/**
   * Base 64 encoded certificate using the application/x-pkcs12 representation.
   */
readonly data?: string;

/**
   * KeyVault location details of the certificate.
   */
readonly keyVault?: KeyVaultContractCreatePropertiesOrKeyVaultContractPr...;

/**
   * Password for the Certificate
   */
readonly password?: string;

/**
   * Null for SystemAssignedIdentity or Client Id for UserAssignedIdentity , which will be used to access key vault secret.
   */
readonly identityClientId?: string;

/**
   * Key vault secret identifier for fetching secret. Providing a versioned secret will prevent auto-refresh. This requires API Management service to be configured with aka.ms/apimmsi
   */
readonly secretIdentifier?: string;
}

/**
 * ApimanagementServiceCertificates resource
 */
export class ApimanagementServiceCertificates extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceCertificatesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/certificates@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceCertificatesProps): string {
    return JSON.stringify(
        {properties: {data: "string", keyVault: {identityClientId: "string", secretIdentifier: "string"}, password: "string"}}
    );
  }
}
