import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CertificateregistrationCertificateordersProps extends IAzAPIBaseProps {

}

/**
 * CertificateregistrationCertificateorders resource
 */
export class CertificateregistrationCertificateorders extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CertificateregistrationCertificateordersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.CertificateRegistration/certificateOrders@2022-09-01";
  }

  protected getResourceBody(props: CertificateregistrationCertificateordersProps): string {
    return JSON.stringify(
        {properties: {autoRenew: "${bool}", certificates: {}, csr: "string", distinguishedName: "string", keySize: "${int}", productType: "string", validityInYears: "${int}"}, kind: "string"}
    );
  }
}
