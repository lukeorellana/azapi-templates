import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface KubernetesconfigurationFluxconfigurationsProps extends IAzAPIBaseProps {

}

/**
 * KubernetesconfigurationFluxconfigurations resource
 */
export class KubernetesconfigurationFluxconfigurations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: KubernetesconfigurationFluxconfigurationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.KubernetesConfiguration/fluxConfigurations@2022-11-01";
  }

  protected getResourceBody(props: KubernetesconfigurationFluxconfigurationsProps): string {
    return JSON.stringify(
        {properties: {azureBlob: {accountKey: "string", containerName: "string", localAuthRef: "string", managedIdentity: {clientId: "string"}, sasToken: "string", servicePrincipal: {clientCertificate: "string", clientCertificatePassword: "string", clientCertificateSendChain: "${bool}", clientId: "string", clientSecret: "string", tenantId: "string"}, syncIntervalInSeconds: "${int}", timeoutInSeconds: "${int}", url: "string"}, bucket: {accessKey: "string", bucketName: "string", insecure: "${bool}", localAuthRef: "string", syncIntervalInSeconds: "${int}", timeoutInSeconds: "${int}", url: "string"}, configurationProtectedSettings: {}, gitRepository: {httpsCACert: "string", httpsUser: "string", localAuthRef: "string", repositoryRef: {branch: "string", commit: "string", semver: "string", tag: "string"}, sshKnownHosts: "string", syncIntervalInSeconds: "${int}", timeoutInSeconds: "${int}", url: "string"}, kustomizations: {}, namespace: "string", scope: "string", sourceKind: "string", suspend: "${bool}"}}
    );
  }
}
