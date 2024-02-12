import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppplatformSpringCertificatesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:Spring;

/**
   * Set the object type
   */
readonly type: ContentCertificateKeyVaultCertificate;

/**
   * The type of the certificate source.
   */
readonly type: 'ContentCertificate';

/**
   * The content of uploaded certificate.
   */
readonly content?: string;

/**
   * The type of the certificate source.
   */
readonly type: 'KeyVaultCertificate';

/**
   * The certificate version of key vault.
   */
readonly certVersion?: string;

/**
   * Optional. If set to true, it will not import private key from key vault.
   */
readonly excludePrivateKey?: bool;

/**
   * The certificate name of key vault.
   */
readonly keyVaultCertName: string;

/**
   * The vault uri of user key vault.
   */
readonly vaultUri: string;
}

/**
 * AppplatformSpringCertificates resource
 */
export class AppplatformSpringCertificates extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppplatformSpringCertificatesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AppPlatform/Spring/certificates@2023-03-01-preview";
  }

  protected getResourceBody(props: AppplatformSpringCertificatesProps): string {
    return JSON.stringify(
        {properties: {type: "string"}}
    );
  }
}
