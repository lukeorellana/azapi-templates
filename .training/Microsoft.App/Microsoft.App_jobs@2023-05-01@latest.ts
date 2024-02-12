import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppJobsProps extends IAzAPIBaseProps {

}

/**
 * AppJobs resource
 */
export class AppJobs extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppJobsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.App/jobs@2023-05-01";
  }

  protected getResourceBody(props: AppJobsProps): string {
    return JSON.stringify(
        {properties: {configuration: {eventTriggerConfig: {parallelism: "${int}", replicaCompletionCount: "${int}", scale: {maxExecutions: "${int}", minExecutions: "${int}", pollingInterval: "${int}", rules: [{auth: [{secretRef: "string", triggerParameter: "string"}], name: "string", type: "string"}]}}, manualTriggerConfig: {parallelism: "${int}", replicaCompletionCount: "${int}"}, registries: [{identity: "string", passwordSecretRef: "string", server: "string", username: "string"}], replicaRetryLimit: "${int}", replicaTimeout: "${int}", scheduleTriggerConfig: {cronExpression: "string", parallelism: "${int}", replicaCompletionCount: "${int}"}, secrets: [{identity: "string", keyVaultUrl: "string", name: "string", value: "string"}], triggerType: "string"}, environmentId: "string", template: {containers: [{args: ["string"], command: ["string"], env: [{name: "string", secretRef: "string", value: "string"}], image: "string", name: "string", probes: [{failureThreshold: "${int}", httpGet: {host: "string", httpHeaders: [{name: "string", value: "string"}], path: "string", port: "${int}", scheme: "string"}, initialDelaySeconds: "${int}", periodSeconds: "${int}", successThreshold: "${int}", tcpSocket: {host: "string", port: "${int}"}, terminationGracePeriodSeconds: "${int}", timeoutSeconds: "${int}", type: "string"}], resources: {cpu: "decimal-as-string", memory: "string"}, volumeMounts: [{mountPath: "string", subPath: "string", volumeName: "string"}]}], initContainers: [{args: ["string"], command: ["string"], env: [{name: "string", secretRef: "string", value: "string"}], image: "string", name: "string", resources: {cpu: "decimal-as-string", memory: "string"}, volumeMounts: [{mountPath: "string", subPath: "string", volumeName: "string"}]}], volumes: [{mountOptions: "string", name: "string", secrets: [{path: "string", secretRef: "string"}], storageName: "string", storageType: "string"}]}, workloadProfileName: "string"}}
    );
  }
}
