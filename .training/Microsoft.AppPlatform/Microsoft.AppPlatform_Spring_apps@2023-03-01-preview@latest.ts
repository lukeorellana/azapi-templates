import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppplatformSpringAppsProps extends IAzAPIBaseProps {

}

/**
 * AppplatformSpringApps resource
 */
export class AppplatformSpringApps extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppplatformSpringAppsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AppPlatform/Spring/apps@2023-03-01-preview";
  }

  protected getResourceBody(props: AppplatformSpringAppsProps): string {
    return JSON.stringify(
        {properties: {addonConfigs: {}, customPersistentDisks: [{customPersistentDiskProperties: {enableSubPath: "${bool}", mountOptions: ["string"], mountPath: "string", readOnly: "${bool}", type: "string"}, storageId: "string"}], enableEndToEndTLS: "${bool}", httpsOnly: "${bool}", ingressSettings: {backendProtocol: "string", clientAuth: {certificates: ["string"]}, readTimeoutInSeconds: "${int}", sendTimeoutInSeconds: "${int}", sessionAffinity: "string", sessionCookieMaxAge: "${int}"}, loadedCertificates: [{loadTrustStore: "${bool}", resourceId: "string"}], persistentDisk: {mountPath: "string", sizeInGB: "${int}"}, public: "${bool}", secrets: [{name: "string", value: "string"}], temporaryDisk: {mountPath: "string", sizeInGB: "${int}"}, vnetAddons: {publicEndpoint: "${bool}"}}}
    );
  }
}
