import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppContainerappsProps extends IAzAPIBaseProps {
/**
   * The complex type of the extended location.
   */
readonly extendedLocation?: ExtendedLocation;

/**
   * managed identities for the Container App to interact with other Azure services without maintaining any secrets or credentials in code.
   */
readonly identity?: ManagedServiceIdentity;

/**
   * The fully qualified resource ID of the resource that manages this resource. Indicates if this resource is managed by another Azure resource. If this is present, complete mode deployment will not delete the resource if it is removed from the template since it is managed by another resource.
   */
readonly managedBy?: string;

/**
   * The type of the extended location.
   */
readonly type?: 'CustomLocation';

/**
   * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
   */
readonly type: 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned';

/**
   * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
   */
readonly userAssignedIdentities?: object;

/**
   * Non versioned Container App configuration properties.
   */
readonly configuration?: Configuration;

/**
   * Resource ID of environment.
   */
readonly environmentId?: string;

/**
   * Deprecated. Resource ID of the Container App's environment.
   */
readonly managedEnvironmentId?: string;

/**
   * Container App versioned application definition.
   */
readonly template?: Template;

/**
   * Workload profile name to pin for container app execution.
   */
readonly workloadProfileName?: string;

/**
   * ActiveRevisionsMode controls how active revisions are handled for the Container app:{list}{item}Multiple: multiple revisions can be active.{/item}{item}Single: Only one revision can be active at a time. Revision weights can not be used in this mode. If no value if provided, this is the default.{/item}{/list}
   */
readonly activeRevisionsMode?: 'Multiple''Single';

/**
   * Dapr configuration for the Container App.
   */
readonly dapr?: Dapr;

/**
   * Ingress configurations.
   */
readonly ingress?: Ingress;

/**
   * Optional. Max inactive revisions a Container App can have.
   */
readonly maxInactiveRevisions?: number;

/**
   * Collection of private container registry credentials for containers used by the Container app
   */
readonly registries?: RegistryCredentials[];

/**
   * Collection of secrets used by a Container app
   */
readonly secrets?: Secret[];

/**
   * Container App to be a dev Container App Service
   */
readonly service?: Service;

/**
   * Dapr application identifier
   */
readonly appId?: string;

/**
   * Tells Dapr which port your application is listening on
   */
readonly appPort?: number;

/**
   * Tells Dapr which protocol your application is using. Valid options are http and grpc. Default is http
   */
readonly appProtocol?: 'grpc''http';

/**
   * Enables API logging for the Dapr sidecar
   */
readonly enableApiLogging?: bool;

/**
   * Boolean indicating if the Dapr side car is enabled
   */
readonly enabled?: bool;

/**
   * Increasing max size of request body http and grpc servers parameter in MB to handle uploading of big files. Default is 4 MB.
   */
readonly httpMaxRequestSize?: number;

/**
   * Dapr max size of http header read buffer in KB to handle when sending multi-KB headers. Default is 65KB.
   */
readonly httpReadBufferSize?: number;

/**
   * Sets the log level for the Dapr sidecar. Allowed values are debug, info, warn, error. Default is info.
   */
readonly logLevel?: 'debug''error''info''warn';

/**
   * Bool indicating if HTTP connections to is allowed. If set to false HTTP connections are automatically redirected to HTTPS connections
   */
readonly allowInsecure?: bool;

/**
   * Client certificate mode for mTLS authentication. Ignore indicates server drops client certificate on forwarding. Accept indicates server forwards client certificate but does not require a client certificate. Require indicates server requires a client certificate.
   */
readonly clientCertificateMode?: 'accept''ignore''require';

/**
   * CORS policy for container app
   */
readonly corsPolicy?: CorsPolicy;

/**
   * custom domain bindings for Container Apps' hostnames.
   */
readonly customDomains?: CustomDomain[];

/**
   * Exposed Port in containers for TCP traffic from ingress
   */
readonly exposedPort?: number;

/**
   * Bool indicating if app exposes an external http endpoint
   */
readonly external?: bool;

/**
   * Rules to restrict incoming IP address.
   */
readonly ipSecurityRestrictions?: IpSecurityRestrictionRule[];

/**
   * Sticky Sessions for Single Revision Mode
   */
readonly stickySessions?: IngressStickySessions;

/**
   * Target Port in containers for traffic from ingress
   */
readonly targetPort?: number;

/**
   * Traffic weights for app's revisions
   */
readonly traffic?: TrafficWeight[];

/**
   * Ingress transport protocol
   */
readonly transport?: 'auto''http''http2''tcp';

/**
   * Specifies whether the resource allows credentials
   */
readonly allowCredentials?: bool;

/**
   * Specifies the content for the access-control-allow-headers header
   */
readonly allowedHeaders?: string[];

/**
   * Specifies the content for the access-control-allow-methods header
   */
readonly allowedMethods?: string[];

/**
   * Specifies the content for the access-control-allow-origins header
   */
readonly allowedOrigins: string[];

/**
   * Specifies the content for the access-control-expose-headers header
   */
readonly exposeHeaders?: string[];

/**
   * Specifies the content for the access-control-max-age header
   */
readonly maxAge?: number;

/**
   * Custom Domain binding type.
   */
readonly bindingType?: 'Disabled''SniEnabled';

/**
   * Resource Id of the Certificate to be bound to this hostname. Must exist in the Managed Environment.
   */
readonly certificateId?: string;

/**
   * Allow or Deny rules to determine for incoming IP. Note: Rules can only consist of ALL Allow or ALL Deny
   */
readonly action: 'Allow''Deny';

/**
   * Describe the IP restriction rule that is being sent to the container-app. This is an optional field.
   */
readonly description?: string;

/**
   * CIDR notation to match incoming IP address
   */
readonly ipAddressRange: string;

/**
   * Sticky Session Affinity
   */
readonly affinity?: 'none''sticky';

/**
   * Associates a traffic label with a revision
   */
readonly label?: string;

/**
   * Indicates that the traffic weight belongs to a latest stable revision
   */
readonly latestRevision?: bool;

/**
   * Name of a revision
   */
readonly revisionName?: string;

/**
   * Traffic weight assigned to a revision
   */
readonly weight?: number;

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
   * Dev ContainerApp service type
   */
readonly type: string;

/**
   * List of container definitions for the Container App.
   */
readonly containers?: Container[];

/**
   * List of specialized containers that run before app containers.
   */
readonly initContainers?: InitContainer[];

/**
   * User friendly suffix that is appended to the revision name
   */
readonly revisionSuffix?: string;

/**
   * Scaling properties for the Container App.
   */
readonly scale?: Scale;

/**
   * List of container app services bound to the app
   */
readonly serviceBinds?: ServiceBind[];

/**
   * Optional duration in seconds the Container App Instance needs to terminate gracefully. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). If this value is nil, the default grace period will be used instead. Set this value longer than the expected cleanup time for your process. Defaults to 30 seconds.
   */
readonly terminationGracePeriodSeconds?: number;

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
   * Name of the secret from which to pull the auth params.
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
   * Resource id of the target service
   */
readonly serviceId?: string;

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
