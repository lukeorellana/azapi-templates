import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppJobsProps extends IAzAPIBaseProps {
/**
   * Managed identities needed by a container app job to interact with other Azure services to not maintain any secrets or credentials in code.
   */
readonly identity?: ManagedServiceIdentity;

/**
   * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
   */
readonly type: 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned';

/**
   * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
   */
readonly userAssignedIdentities?: object;

/**
   * Container Apps Job configuration properties.
   */
readonly configuration?: JobConfiguration;

/**
   * Resource ID of environment.
   */
readonly environmentId?: string;

/**
   * Container Apps job definition.
   */
readonly template?: JobTemplate;

/**
   * Workload profile name to pin for container apps job execution.
   */
readonly workloadProfileName?: string;

/**
   * Trigger configuration of an event driven job.
   */
readonly eventTriggerConfig?: JobConfigurationEventTriggerConfig;

/**
   * Manual trigger configuration for a single execution job. Properties replicaCompletionCount and parallelism would be set to 1 by default
   */
readonly manualTriggerConfig?: JobConfigurationManualTriggerConfig;

/**
   * Collection of private container registry credentials used by a Container apps job
   */
readonly registries?: RegistryCredentials[];

/**
   * Maximum number of retries before failing the job.
   */
readonly replicaRetryLimit?: number;

/**
   * Maximum number of seconds a replica is allowed to run.
   */
readonly replicaTimeout: number;

/**
   * Cron formatted repeating trigger schedule ("* * * * *") for cronjobs. Properties completions and parallelism would be set to 1 by default
   */
readonly scheduleTriggerConfig?: JobConfigurationScheduleTriggerConfig;

/**
   * Collection of secrets used by a Container Apps Job
   */
readonly secrets?: Secret[];

/**
   * Trigger type of the job
   */
readonly triggerType: 'Event''Manual''Schedule';

/**
   * Number of parallel replicas of a job that can run at a given time.
   */
readonly parallelism?: number;

/**
   * Minimum number of successful replica completions before overall job completion.
   */
readonly replicaCompletionCount?: number;

/**
   * Scaling configurations for event driven jobs.
   */
readonly scale?: JobScale;

/**
   * Maximum number of job executions that are created for a trigger, default 100.
   */
readonly maxExecutions?: number;

/**
   * Minimum number of job executions that are created for a trigger, default 0
   */
readonly minExecutions?: number;

/**
   * Interval to check each event source in seconds. Defaults to 30s
   */
readonly pollingInterval?: number;

/**
   * Scaling rules.
   */
readonly rules?: JobScaleRule[];

/**
   * Authentication secrets for the scale rule.
   */
readonly auth?: ScaleRuleAuth[];

/**
   * Metadata properties to describe the scale rule.
   */
readonly metadata?: For Bicep, you can use theany()function.;

/**
   * Type of the scale ruleeg: azure-servicebus, redis etc.
   */
readonly type?: string;

/**
   * Name of the secret from which to pull the auth params.
   */
readonly secretRef?: string;

/**
   * Trigger Parameter that uses the secret
   */
readonly triggerParameter?: string;

/**
   * Number of parallel replicas of a job that can run at a given time.
   */
readonly parallelism?: number;

/**
   * Minimum number of successful replica completions before overall job completion.
   */
readonly replicaCompletionCount?: number;

/**
   * A Managed Identity to use to authenticate with Azure Container Registry. For user-assigned identities, use the full user-assigned identity Resource ID. For system-assigned identities, use 'system'
   */
readonly identity?: string;

/**
   * The name of the Secret that contains the registry login password
   */
readonly passwordSecretRef?: string;

/**
   * Container Registry Server
   */
readonly server?: string;

/**
   * Container Registry Username
   */
readonly username?: string;

/**
   * Cron formatted repeating schedule ("* * * * *") of a Cron Job.
   */
readonly cronExpression: string;

/**
   * Number of parallel replicas of a job that can run at a given time.
   */
readonly parallelism?: number;

/**
   * Minimum number of successful replica completions before overall job completion.
   */
readonly replicaCompletionCount?: number;

/**
   * Resource ID of a managed identity to authenticate with Azure Key Vault, or System to use a system-assigned identity.
   */
readonly identity?: string;

/**
   * Azure Key Vault URL pointing to the secret referenced by the container app.
   */
readonly keyVaultUrl?: string;

/**
   * Secret Value.
   */
readonly value?: string;

/**
   * List of container definitions for the Container App.
   */
readonly containers?: Container[];

/**
   * List of specialized containers that run before app containers.
   */
readonly initContainers?: InitContainer[];

/**
   * List of volume definitions for the Container App.
   */
readonly volumes?: Volume[];

/**
   * Container start command arguments.
   */
readonly args?: string[];

/**
   * Container start command.
   */
readonly command?: string[];

/**
   * Container environment variables.
   */
readonly env?: EnvironmentVar[];

/**
   * Container image tag.
   */
readonly image?: string;

/**
   * List of probes for the container.
   */
readonly probes?: ContainerAppProbe[];

/**
   * Container resource requirements.
   */
readonly resources?: ContainerResources;

/**
   * Container volume mounts.
   */
readonly volumeMounts?: VolumeMount[];

/**
   * Name of the Container App secret from which to pull the environment variable value.
   */
readonly secretRef?: string;

/**
   * Non-secret environment variable value.
   */
readonly value?: string;

/**
   * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1. Maximum value is 10.
   */
readonly failureThreshold?: number;

/**
   * HTTPGet specifies the http request to perform.
   */
readonly httpGet?: ContainerAppProbeHttpGet;

/**
   * Number of seconds after the container has started before liveness probes are initiated. Minimum value is 1. Maximum value is 60.
   */
readonly initialDelaySeconds?: number;

/**
   * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value is 240.
   */
readonly periodSeconds?: number;

/**
   * Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1. Maximum value is 10.
   */
readonly successThreshold?: number;

/**
   * TCPSocket specifies an action involving a TCP port. TCP hooks not yet supported.
   */
readonly tcpSocket?: ContainerAppProbeTcpSocket;

/**
   * Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is an alpha field and requires enabling ProbeTerminationGracePeriod feature gate. Maximum value is 3600 seconds (1 hour)
   */
readonly terminationGracePeriodSeconds?: number;

/**
   * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 240.
   */
readonly timeoutSeconds?: number;

/**
   * The type of probe.
   */
readonly type?: 'Liveness''Readiness''Startup';

/**
   * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
   */
readonly host?: string;

/**
   * Custom headers to set in the request. HTTP allows repeated headers.
   */
readonly httpHeaders?: ContainerAppProbeHttpGetHttpHeadersItem[];

/**
   * Path to access on the HTTP server.
   */
readonly path?: string;

/**
   * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
   */
readonly port: number;

/**
   * Scheme to use for connecting to the host. Defaults to HTTP.
   */
readonly scheme?: 'HTTP''HTTPS';

/**
   * The header field value
   */
readonly value: string;

/**
   * Optional: Host name to connect to, defaults to the pod IP.
   */
readonly host?: string;

/**
   * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
   */
readonly port: number;

/**
   * Required CPU in cores, e.g. 0.5 To specify a decimal value, use thejson()function.
   */
readonly cpu?: number or json decimal;

/**
   * Required memory, e.g. "250Mb"
   */
readonly memory?: string;

/**
   * Path within the container at which the volume should be mounted.Must not contain ':'.
   */
readonly mountPath?: string;

/**
   * Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root).
   */
readonly subPath?: string;

/**
   * This must match the Name of a Volume.
   */
readonly volumeName?: string;

/**
   * Container start command arguments.
   */
readonly args?: string[];

/**
   * Container start command.
   */
readonly command?: string[];

/**
   * Container environment variables.
   */
readonly env?: EnvironmentVar[];

/**
   * Container image tag.
   */
readonly image?: string;

/**
   * Container resource requirements.
   */
readonly resources?: ContainerResources;

/**
   * Container volume mounts.
   */
readonly volumeMounts?: VolumeMount[];

/**
   * Mount options used while mounting the AzureFile. Must be a comma-separated string.
   */
readonly mountOptions?: string;

/**
   * List of secrets to be added in volume. If no secrets are provided, all secrets in collection will be added to volume.
   */
readonly secrets?: SecretVolumeItem[];

/**
   * Name of storage resource. No need to provide for EmptyDir and Secret.
   */
readonly storageName?: string;

/**
   * Storage type for the volume. If not provided, use EmptyDir.
   */
readonly storageType?: 'AzureFile''EmptyDir''Secret';

/**
   * Path to project secret to. If no path is provided, path defaults to name of secret listed in secretRef.
   */
readonly path?: string;

/**
   * Name of the Container App secret from which to pull the secret value.
   */
readonly secretRef?: string;
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
