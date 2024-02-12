import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppplatformSpringAppsDeploymentsProps extends IAzAPIBaseProps {
/**
   * Sku of the Deployment resource
   */
readonly sku?: Sku;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:apps;

/**
   * Indicates whether the Deployment is active
   */
readonly active?: bool;

/**
   * Deployment settings of the Deployment
   */
readonly deploymentSettings?: DeploymentSettings;

/**
   * Uploaded source information of the deployment.
   */
readonly source?: UserSourceInfo;

/**
   * Collection of addons
   */
readonly addonConfigs?: object;

/**
   * Container liveness and readiness probe settings
   */
readonly containerProbeSettings?: ContainerProbeSettings;

/**
   * Collection of environment variables
   */
readonly environmentVariables?: object;

/**
   * Periodic probe of App Instance liveness. App Instance will be restarted if the probe fails. More info:https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
   */
readonly livenessProbe?: Probe;

/**
   * Periodic probe of App Instance service readiness. App Instance will be removed from service endpoints if the probe fails. More info:https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
   */
readonly readinessProbe?: Probe;

/**
   * The requested resource quantity for required CPU and Memory. It is recommended that using this field to represent the required CPU and Memory, the old field cpu and memoryInGB will be deprecated later.
   */
readonly resourceRequests?: ResourceRequests;

/**
   * Scaling properties for the Azure Spring Apps App Instance.
   */
readonly scale?: Scale;

/**
   * StartupProbe indicates that the App Instance has successfully initialized. If specified, no other probes are executed until this completes successfully. If this probe fails, the Pod will be restarted, just as if the livenessProbe failed. This can be used to provide different probe parameters at the beginning of a App Instance's lifecycle, when it might take a long time to load data or warm a cache, than during steady-state operation. This cannot be updated. More info:https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
   */
readonly startupProbe?: Probe;

/**
   * Optional duration in seconds the App Instance needs to terminate gracefully. May be decreased in delete request. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). If this value is nil, the default grace period will be used instead. The grace period is the duration in seconds after the processes running in the App Instance are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. Defaults to 90 seconds.
   */
readonly terminationGracePeriodSeconds?: number;

/**
   * Indicates whether disable the liveness and readiness probe
   */
readonly disableProbe?: bool;

/**
   * Indicate whether the probe is disabled.
   */
readonly disableProbe: bool;

/**
   * Minimum consecutive failures for the probe to be considered failed after having succeeded. Minimum value is 1.
   */
readonly failureThreshold?: number;

/**
   * Number of seconds after the App Instance has started before probes are initiated. More info:https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
   */
readonly initialDelaySeconds?: number;

/**
   * How often (in seconds) to perform the probe. Minimum value is 1.
   */
readonly periodSeconds?: number;

/**
   * The action of the probe.
   */
readonly probeAction?: ProbeAction;

/**
   * Minimum consecutive successes for the probe to be considered successful after having failed. Must be 1 for liveness and startup. Minimum value is 1.
   */
readonly successThreshold?: number;

/**
   * Number of seconds after which the probe times out. Minimum value is 1.
   */
readonly timeoutSeconds?: number;

/**
   * Set the object type
   */
readonly type: ExecActionHTTPGetActionTCPSocketAction;

/**
   * The type of the action to take to perform the health check.
   */
readonly type: 'ExecAction';

/**
   * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is not run inside a shell, so traditional shell instructions (',', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
   */
readonly command?: string[];

/**
   * The type of the action to take to perform the health check.
   */
readonly type: 'HTTPGetAction';

/**
   * Path to access on the HTTP server.
   */
readonly path?: string;

/**
   * Scheme to use for connecting to the host. Defaults to HTTP.Possible enum values:-"HTTP"means that the scheme used will behttp://-"HTTPS"means that the scheme used will behttps://
   */
readonly scheme?: 'HTTP''HTTPS';

/**
   * The type of the action to take to perform the health check.
   */
readonly type: 'TCPSocketAction';

/**
   * Required CPU. 1 core can be represented by 1 or 1000m. This should be 500m or 1 for Basic tier, and {500m, 1, 2, 3, 4} for Standard tier.
   */
readonly cpu?: string;

/**
   * Required memory. 1 GB can be represented by 1Gi or 1024Mi. This should be {512Mi, 1Gi, 2Gi} for Basic tier, and {512Mi, 1Gi, 2Gi, ..., 8Gi} for Standard tier.
   */
readonly memory?: string;

/**
   * Optional. Maximum number of container replicas. Defaults to 10 if not set.
   */
readonly maxReplicas?: number;

/**
   * Optional. Minimum number of container replicas.
   */
readonly minReplicas?: number;

/**
   * Scaling rules.
   */
readonly rules?: ScaleRule[];

/**
   * Azure Queue based scaling.
   */
readonly azureQueue?: QueueScaleRule;

/**
   * Custom scale rule.
   */
readonly custom?: CustomScaleRule;

/**
   * HTTP requests based scaling.
   */
readonly http?: HttpScaleRule;

/**
   * Tcp requests based scaling.
   */
readonly tcp?: TcpScaleRule;

/**
   * Authentication secrets for the queue scale rule.
   */
readonly auth?: ScaleRuleAuth[];

/**
   * Queue length.
   */
readonly queueLength?: number;

/**
   * Queue name.
   */
readonly queueName?: string;

/**
   * Name of the Azure Spring Apps App Instance secret from which to pull the auth params.
   */
readonly secretRef?: string;

/**
   * Trigger Parameter that uses the secret
   */
readonly triggerParameter?: string;

/**
   * Authentication secrets for the custom scale rule.
   */
readonly auth?: ScaleRuleAuth[];

/**
   * Metadata properties to describe custom scale rule.
   */
readonly metadata?: object;

/**
   * Type of the custom scale ruleeg: azure-servicebus, redis etc.
   */
readonly type?: string;

/**
   * Authentication secrets for the custom scale rule.
   */
readonly auth?: ScaleRuleAuth[];

/**
   * Metadata properties to describe http scale rule.
   */
readonly metadata?: object;

/**
   * Authentication secrets for the tcp scale rule.
   */
readonly auth?: ScaleRuleAuth[];

/**
   * Metadata properties to describe tcp scale rule.
   */
readonly metadata?: object;

/**
   * Version of the source
   */
readonly version?: string;

/**
   * Set the object type
   */
readonly type: BuildResultContainerJarNetCoreZipSource;

/**
   * Type of the source uploaded
   */
readonly type: 'BuildResult';

/**
   * Resource id of an existing succeeded build result under the same Spring instance.
   */
readonly buildResultId?: string;

/**
   * Type of the source uploaded
   */
readonly type: 'Container';

/**
   * Custom container payload
   */
readonly customContainer?: CustomContainer;

/**
   * Arguments to the entrypoint. The docker image's CMD is used if this is not provided.
   */
readonly args?: string[];

/**
   * Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided.
   */
readonly command?: string[];

/**
   * Container image of the custom container. This should be in the form of {repository}:{tag} without the server name of the registry
   */
readonly containerImage?: string;

/**
   * Credential of the image registry
   */
readonly imageRegistryCredential?: ImageRegistryCredential;

/**
   * Language framework of the container image uploaded
   */
readonly languageFramework?: string;

/**
   * The name of the registry that contains the container image
   */
readonly server?: string;

/**
   * The password of the image registry credential
   */
readonly password?: string;

/**
   * The username of the image registry credential
   */
readonly username?: string;

/**
   * Type of the source uploaded
   */
readonly type: 'Jar';

/**
   * JVM parameter
   */
readonly jvmOptions?: string;

/**
   * Relative path of the storage which stores the source
   */
readonly relativePath?: string;

/**
   * Runtime version of the Jar file
   */
readonly runtimeVersion?: string;

/**
   * Type of the source uploaded
   */
readonly type: 'NetCoreZip';

/**
   * The path to the .NET executable relative to zip root
   */
readonly netCoreMainEntryPath?: string;

/**
   * Relative path of the storage which stores the source
   */
readonly relativePath?: string;

/**
   * Runtime version of the .Net file
   */
readonly runtimeVersion?: string;

/**
   * Type of the source uploaded
   */
readonly type: 'Source';

/**
   * Selector for the artifact to be used for the deployment for multi-module projects. This should bethe relative path to the target module/project.
   */
readonly artifactSelector?: string;

/**
   * Relative path of the storage which stores the source
   */
readonly relativePath?: string;

/**
   * Runtime version of the source file
   */
readonly runtimeVersion?: string;

/**
   * Current capacity of the target resource
   */
readonly capacity?: number;

/**
   * Tier of the Sku
   */
readonly tier?: string;
}

/**
 * AppplatformSpringAppsDeployments resource
 */
export class AppplatformSpringAppsDeployments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppplatformSpringAppsDeploymentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AppPlatform/Spring/apps/deployments@2023-03-01-preview";
  }

  protected getResourceBody(props: AppplatformSpringAppsDeploymentsProps): string {
    return JSON.stringify(
        {properties: {active: "${bool}", deploymentSettings: {addonConfigs: {}, containerProbeSettings: {disableProbe: "${bool}"}, environmentVariables: {}, livenessProbe: {disableProbe: "${bool}", failureThreshold: "${int}", initialDelaySeconds: "${int}", periodSeconds: "${int}", probeAction: {type: "string"}, successThreshold: "${int}", timeoutSeconds: "${int}"}, readinessProbe: {disableProbe: "${bool}", failureThreshold: "${int}", initialDelaySeconds: "${int}", periodSeconds: "${int}", probeAction: {type: "string"}, successThreshold: "${int}", timeoutSeconds: "${int}"}, resourceRequests: {cpu: "string", memory: "string"}, scale: {maxReplicas: "${int}", minReplicas: "${int}", rules: [{azureQueue: {auth: [{secretRef: "string", triggerParameter: "string"}], queueLength: "${int}", queueName: "string"}, custom: {auth: [{secretRef: "string", triggerParameter: "string"}], metadata: {}, type: "string"}, http: {auth: [{secretRef: "string", triggerParameter: "string"}], metadata: {}}, name: "string", tcp: {auth: [{secretRef: "string", triggerParameter: "string"}], metadata: {}}}]}, startupProbe: {disableProbe: "${bool}", failureThreshold: "${int}", initialDelaySeconds: "${int}", periodSeconds: "${int}", probeAction: {type: "string"}, successThreshold: "${int}", timeoutSeconds: "${int}"}, terminationGracePeriodSeconds: "${int}"}, source: {version: "string", type: "string"}}, sku: {capacity: "${int}", name: "string", tier: "string"}}
    );
  }
}
