import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SignalrserviceWebpubsubCustomcertificatesProps extends IAzAPIBaseProps {

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
