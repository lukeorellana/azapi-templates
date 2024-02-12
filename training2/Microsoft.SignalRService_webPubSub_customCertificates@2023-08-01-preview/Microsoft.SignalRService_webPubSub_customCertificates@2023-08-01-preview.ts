import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SignalrserviceWebpubsubCustomcertificatesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:webPubSub;

/**
   * Base uri of the KeyVault that stores certificate.
   */
readonly keyVaultBaseUri: string;

/**
   * Certificate secret name.
   */
readonly keyVaultSecretName: string;

/**
   * Certificate secret version.
   */
readonly keyVaultSecretVersion?: string;
}

/**
 * SignalrserviceWebpubsubCustomcertificates resource
 */
export class SignalrserviceWebpubsubCustomcertificates extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SignalrserviceWebpubsubCustomcertificatesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.SignalRService/webPubSub/customCertificates@2023-08-01-preview";
  }

  protected getResourceBody(props: SignalrserviceWebpubsubCustomcertificatesProps): string {
    return JSON.stringify(
        {properties: {keyVaultBaseUri: "string", keyVaultSecretName: "string", keyVaultSecretVersion: "string"}}
    );
  }
}
