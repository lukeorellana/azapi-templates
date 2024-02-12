import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CdnProfilesSecretsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:profiles;

/**
   * object which contains secret parameters
   */
readonly parameters?: SecretParameters;

/**
   * Set the object type
   */
readonly type: AzureFirstPartyManagedCertificateCustomerCertificateManagedCertificateUrlSigningKey;

/**
   * The type of the secret resource.
   */
readonly type: 'AzureFirstPartyManagedCertificate';

/**
   * The list of SANs.
   */
readonly subjectAlternativeNames?: string[];

/**
   * The type of the secret resource.
   */
readonly type: 'CustomerCertificate';

/**
   * Resource reference to the Azure Key Vault certificate. Expected to be in format of /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/secrets/{certificateName}
   */
readonly secretSource: ResourceReference;

/**
   * Version of the secret to be used
   */
readonly secretVersion?: string;

/**
   * The list of SANs.
   */
readonly subjectAlternativeNames?: string[];

/**
   * Whether to use the latest version for the certificate
   */
readonly useLatestVersion?: bool;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * The type of the secret resource.
   */
readonly type: 'ManagedCertificate';

/**
   * The type of the secret resource.
   */
readonly type: 'UrlSigningKey';

/**
   * Defines the customer defined key Id. This id will exist in the incoming request to indicate the key used to form the hash.
   */
readonly keyId: string;

/**
   * Resource reference to the Azure Key Vault secret. Expected to be in format of /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/secrets/{secretName}
   */
readonly secretSource: ResourceReference;

/**
   * Version of the secret to be used
   */
readonly secretVersion?: string;
}

/**
 * CdnProfilesSecrets resource
 */
export class CdnProfilesSecrets extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CdnProfilesSecretsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Cdn/profiles/secrets@2023-07-01-preview";
  }

  protected getResourceBody(props: CdnProfilesSecretsProps): string {
    return JSON.stringify(
        {properties: {parameters: {type: "string"}}}
    );
  }
}
