import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CertificateregistrationCertificateordersCertificatesProps extends IAzAPIBaseProps {

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
