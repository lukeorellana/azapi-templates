import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CertificateregistrationCertificateordersCertificatesProps extends IAzAPIBaseProps {
/**
   * Kind of resource.
   */
readonly kind?: string;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:certificateOrders;

/**
   * Key Vault resource Id.
   */
readonly keyVaultId?: string;

/**
   * Key Vault secret name.
   */
readonly keyVaultSecretName?: string;
}

/**
 * CertificateregistrationCertificateordersCertificates resource
 */
export class CertificateregistrationCertificateordersCertificates extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CertificateregistrationCertificateordersCertificatesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.CertificateRegistration/certificateOrders/certificates@2022-09-01";
  }

  protected getResourceBody(props: CertificateregistrationCertificateordersCertificatesProps): string {
    return JSON.stringify(
        {properties: {keyVaultId: "string", keyVaultSecretName: "string"}, kind: "string"}
    );
  }
}
