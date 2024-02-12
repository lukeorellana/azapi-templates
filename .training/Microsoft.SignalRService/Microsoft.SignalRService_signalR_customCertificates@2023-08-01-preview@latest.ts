import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SignalrserviceSignalrCustomcertificatesProps extends IAzAPIBaseProps {

}

/**
 * SignalrserviceSignalrCustomcertificates resource
 */
export class SignalrserviceSignalrCustomcertificates extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SignalrserviceSignalrCustomcertificatesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.SignalRService/signalR/customCertificates@2023-08-01-preview";
  }

  protected getResourceBody(props: SignalrserviceSignalrCustomcertificatesProps): string {
    return JSON.stringify(
        {properties: {keyVaultBaseUri: "string", keyVaultSecretName: "string", keyVaultSecretVersion: "string"}}
    );
  }
}
