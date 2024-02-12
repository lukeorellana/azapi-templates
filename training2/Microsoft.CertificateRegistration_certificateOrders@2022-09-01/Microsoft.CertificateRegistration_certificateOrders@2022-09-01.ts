import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CertificateregistrationCertificateordersProps extends IAzAPIBaseProps {
/**
   * Kind of resource.
   */
readonly kind?: string;

/**
   * trueif the certificate should be automatically renewed when it expires; otherwise,false.
   */
readonly autoRenew?: bool;

/**
   * State of the Key Vault secret.
   */
readonly certificates?: object;

/**
   * Last CSR that was created for this order.
   */
readonly csr?: string;

/**
   * Certificate distinguished name.
   */
readonly distinguishedName?: string;

/**
   * Certificate key size.
   */
readonly keySize?: number;

/**
   * Certificate product type.
   */
readonly productType: 'StandardDomainValidatedSsl''StandardDomainValidatedWildCardSsl';

/**
   * Duration in years (must be 1).
   */
readonly validityInYears?: number;
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
