import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SignalrserviceSignalrCustomcertificatesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:signalR;

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
