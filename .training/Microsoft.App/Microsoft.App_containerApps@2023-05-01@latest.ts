import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppContainerappsProps extends IAzAPIBaseProps {

}

/**
 * AppContainerapps resource
 */
export class AppContainerapps extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppContainerappsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.App/containerApps@2023-05-01";
  }

  protected getResourceBody(props: AppContainerappsProps): string {
    return JSON.stringify(
        {properties: {configuration: {activeRevisionsMode: "string", dapr: {appId: "string", appPort: "${int}", appProtocol: "string", enableApiLogging: "${bool}", enabled: "${bool}", httpMaxRequestSize: "${int}", httpReadBufferSize: "${int}", logLevel: "string"}, ingress: {allowInsecure: "${bool}", clientCertificateMode: "string", corsPolicy: {allowCredentials: "${bool}", allowedHeaders: ["string"], allowedMethods: ["string"], allowedOrigins: ["string"], exposeHeaders: ["string"], maxAge: "${int}"}, customDomains: [{bindingType: "string", certificateId: "string", name: "string"}], exposedPort: "${int}", external: "${bool}", ipSecurityRestrictions: [{action: "string", description: "string", ipAddressRange: "string", name: "string"}], stickySessions: {affinity: "string"}, targetPort: "${int}", traffic: [{label: "string", latestRevision: "${bool}", revisionName: "string", weight: "${int}"}], transport: "string"}, maxInactiveRevisions: "${int}", registries: [{identity: "string", passwordSecretRef: "string", server: "string", username: "string"}], secrets: [{identity: "string", keyVaultUrl: "string", name: "string", value: "string"}], service: {type: "string"}}, environmentId: "string", managedEnvironmentId: "string", template: {containers: [{args: ["string"], command: ["string"], env: [{name: "string", secretRef: "string", value: "string"}], image: "string", name: "string", probes: [{failureThreshold: "${int}", httpGet: {host: "string", httpHeaders: [{name: "string", value: "string"}], path: "string", port: "${int}", scheme: "string"}, initialDelaySeconds: "${int}", periodSeconds: "${int}", successThreshold: "${int}", tcpSocket: {host: "string", port: "${int}"}, terminationGracePeriodSeconds: "${int}", timeoutSeconds: "${int}", type: "string"}], resources: {cpu: "decimal-as-string", memory: "string"}, volumeMounts: [{mountPath: "string", subPath: "string", volumeName: "string"}]}], initContainers: [{args: ["string"], command: ["string"], env: [{name: "string", secretRef: "string", value: "string"}], image: "string", name: "string", resources: {cpu: "decimal-as-string", memory: "string"}, volumeMounts: [{mountPath: "string", subPath: "string", volumeName: "string"}]}], revisionSuffix: "string", scale: {maxReplicas: "${int}", minReplicas: "${int}", rules: [{azureQueue: {auth: [{secretRef: "string", triggerParameter: "string"}], queueLength: "${int}", queueName: "string"}, custom: {auth: [{secretRef: "string", triggerParameter: "string"}], metadata: {}, type: "string"}, http: {auth: [{secretRef: "string", triggerParameter: "string"}], metadata: {}}, name: "string", tcp: {auth: [{secretRef: "string", triggerParameter: "string"}], metadata: {}}}]}, serviceBinds: [{name: "string", serviceId: "string"}], terminationGracePeriodSeconds: "${int}", volumes: [{mountOptions: "string", name: "string", secrets: [{path: "string", secretRef: "string"}], storageName: "string", storageType: "string"}]}, workloadProfileName: "string"}, extendedLocation: {name: "string", type: "CustomLocation"}, managedBy: "string"}
    );
  }
}
