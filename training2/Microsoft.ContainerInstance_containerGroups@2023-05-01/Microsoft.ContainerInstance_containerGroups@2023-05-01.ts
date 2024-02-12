import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ContainerinstanceContainergroupsProps extends IAzAPIBaseProps {
/**
   * The identity of the container group, if configured.
   */
readonly identity?: ContainerGroupIdentity;

/**
   * The zones for the container group.
   */
readonly zones?: string[];

/**
   * The type of identity used for the container group. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the container group.
   */
readonly type?: 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned';

/**
   * The list of user identities associated with the container group.
   */
readonly userAssignedIdentities?: object;

/**
   * The properties for confidential container group
   */
readonly confidentialComputeProperties?: ConfidentialComputeProperties;

/**
   * The containers within the container group.
   */
readonly containers: Container[];

/**
   * The diagnostic information for a container group.
   */
readonly diagnostics?: ContainerGroupDiagnostics;

/**
   * The DNS config information for a container group.
   */
readonly dnsConfig?: DnsConfiguration;

/**
   * The encryption properties for a container group.
   */
readonly encryptionProperties?: EncryptionProperties;

/**
   * extensions used by virtual kubelet
   */
readonly extensions?: DeploymentExtensionSpec[];

/**
   * The image registry credentials by which the container group is created from.
   */
readonly imageRegistryCredentials?: ImageRegistryCredential[];

/**
   * The init containers for a container group.
   */
readonly initContainers?: InitContainerDefinition[];

/**
   * The IP address type of the container group.
   */
readonly ipAddress?: IpAddress;

/**
   * The operating system type required by the containers in the container group.
   */
readonly osType: 'Linux''Windows';

/**
   * The priority of the container group.
   */
readonly priority?: 'Regular''Spot';

/**
   * Restart policy for all containers within the container group.-AlwaysAlways restart-OnFailureRestart on failure-NeverNever restart
   */
readonly restartPolicy?: 'Always''Never''OnFailure';

/**
   * The SKU for a container group.
   */
readonly sku?: 'Confidential''Dedicated''Standard';

/**
   * The subnet resource IDs for a container group.
   */
readonly subnetIds?: ContainerGroupSubnetId[];

/**
   * The list of volumes that can be mounted by containers in this container group.
   */
readonly volumes?: Volume[];

/**
   * The base64 encoded confidential compute enforcement policy
   */
readonly ccePolicy?: string;

/**
   * The commands to execute within the container instance in exec form.
   */
readonly command?: string[];

/**
   * The environment variables to set in the container instance.
   */
readonly environmentVariables?: EnvironmentVariable[];

/**
   * The name of the image used to create the container instance.
   */
readonly image: string;

/**
   * The liveness probe.
   */
readonly livenessProbe?: ContainerProbe;

/**
   * The exposed ports on the container instance.
   */
readonly ports?: ContainerPort[];

/**
   * The readiness probe.
   */
readonly readinessProbe?: ContainerProbe;

/**
   * The resource requirements of the container instance.
   */
readonly resources: ResourceRequirements;

/**
   * The container security properties.
   */
readonly securityContext?: SecurityContextDefinition;

/**
   * The volume mounts available to the container instance.
   */
readonly volumeMounts?: VolumeMount[];

/**
   * The value of the secure environment variable.
   */
readonly secureValue?: string;

/**
   * The value of the environment variable.
   */
readonly value?: string;

/**
   * The execution command to probe
   */
readonly exec?: ContainerExec;

/**
   * The failure threshold.
   */
readonly failureThreshold?: number;

/**
   * The Http Get settings to probe
   */
readonly httpGet?: ContainerHttpGet;

/**
   * The initial delay seconds.
   */
readonly initialDelaySeconds?: number;

/**
   * The period seconds.
   */
readonly periodSeconds?: number;

/**
   * The success threshold.
   */
readonly successThreshold?: number;

/**
   * The timeout seconds.
   */
readonly timeoutSeconds?: number;

/**
   * The commands to execute within the container.
   */
readonly command?: string[];

/**
   * The HTTP headers.
   */
readonly httpHeaders?: HttpHeader[];

/**
   * The path to probe.
   */
readonly path?: string;

/**
   * The port number to probe.
   */
readonly port: number;

/**
   * The scheme.
   */
readonly scheme?: 'http''https';

/**
   * The header value.
   */
readonly value?: string;

/**
   * The port number exposed within the container group.
   */
readonly port: number;

/**
   * The protocol associated with the port.
   */
readonly protocol?: 'TCP''UDP';

/**
   * The resource limits of this container instance.
   */
readonly limits?: ResourceLimits;

/**
   * The resource requests of this container instance.
   */
readonly requests: ResourceRequests;

/**
   * The CPU limit of this container instance.
   */
readonly cpu?: number;

/**
   * The GPU limit of this container instance.
   */
readonly gpu?: GpuResource;

/**
   * The memory limit in GB of this container instance. To specify a decimal value, use thejson()function.
   */
readonly memoryInGB?: number or json decimal;

/**
   * The count of the GPU resource.
   */
readonly count: number;

/**
   * The SKU of the GPU resource.
   */
readonly sku: 'K80''P100''V100';

/**
   * The CPU request of this container instance.
   */
readonly cpu: number;

/**
   * The GPU request of this container instance.
   */
readonly gpu?: GpuResource;

/**
   * The memory request in GB of this container instance. To specify a decimal value, use thejson()function.
   */
readonly memoryInGB: number or json decimal;

/**
   * A boolean value indicating whether the init process can elevate its privileges
   */
readonly allowPrivilegeEscalation?: bool;

/**
   * The capabilities to add or drop from a container.
   */
readonly capabilities?: SecurityContextCapabilitiesDefinition;

/**
   * The flag to determine if the container permissions is elevated to Privileged.
   */
readonly privileged?: bool;

/**
   * Sets the User GID for the container.
   */
readonly runAsGroup?: number;

/**
   * Sets the User UID for the container.
   */
readonly runAsUser?: number;

/**
   * a base64 encoded string containing the contents of the JSON in the seccomp profile
   */
readonly seccompProfile?: string;

/**
   * The capabilities to add to the container.
   */
readonly add?: string[];

/**
   * The capabilities to drop from the container.
   */
readonly drop?: string[];

/**
   * The path within the container where the volume should be mounted. Must not contain colon (:).
   */
readonly mountPath: string;

/**
   * The flag indicating whether the volume mount is read-only.
   */
readonly readOnly?: bool;

/**
   * Container group log analytics information.
   */
readonly logAnalytics?: LogAnalytics;

/**
   * The log type to be used.
   */
readonly logType?: 'ContainerInsights''ContainerInstanceLogs';

/**
   * Metadata for log analytics.
   */
readonly metadata?: object;

/**
   * The workspace id for log analytics
   */
readonly workspaceId: string;

/**
   * The workspace key for log analytics
   */
readonly workspaceKey: string;

/**
   * The workspace resource id for log analytics
   */
readonly workspaceResourceId?: string;

/**
   * The DNS servers for the container group.
   */
readonly nameServers: string[];

/**
   * The DNS options for the container group.
   */
readonly options?: string;

/**
   * The DNS search domains for hostname lookup in the container group.
   */
readonly searchDomains?: string;

/**
   * The keyvault managed identity.
   */
readonly identity?: string;

/**
   * The encryption key name.
   */
readonly keyName: string;

/**
   * The encryption key version.
   */
readonly keyVersion: string;

/**
   * The keyvault base url.
   */
readonly vaultBaseUrl: string;

/**
   * Type of extension to be added.
   */
readonly extensionType: string;

/**
   * Protected settings for the extension.
   */
readonly protectedSettings?: For Bicep, you can use theany()function.;

/**
   * Settings for the extension.
   */
readonly settings?: For Bicep, you can use theany()function.;

/**
   * Version of the extension being used.
   */
readonly version: string;

/**
   * The identity for the private registry.
   */
readonly identity?: string;

/**
   * The identity URL for the private registry.
   */
readonly identityUrl?: string;

/**
   * The password for the private registry.
   */
readonly password?: string;

/**
   * The Docker image registry server without a protocol such as "http" and "https".
   */
readonly server: string;

/**
   * The username for the private registry.
   */
readonly username?: string;

/**
   * The command to execute within the init container in exec form.
   */
readonly command?: string[];

/**
   * The environment variables to set in the init container.
   */
readonly environmentVariables?: EnvironmentVariable[];

/**
   * The image of the init container.
   */
readonly image?: string;

/**
   * The container security properties.
   */
readonly securityContext?: SecurityContextDefinition;

/**
   * The volume mounts available to the init container.
   */
readonly volumeMounts?: VolumeMount[];

/**
   * The value representing the security enum. The 'Unsecure' value is the default value if not selected and means the object's domain name label is not secured against subdomain takeover. The 'TenantReuse' value is the default value if selected and means the object's domain name label can be reused within the same tenant. The 'SubscriptionReuse' value means the object's domain name label can be reused within the same subscription. The 'ResourceGroupReuse' value means the object's domain name label can be reused within the same resource group. The 'NoReuse' value means the object's domain name label cannot be reused within the same resource group, subscription, or tenant.
   */
readonly autoGeneratedDomainNameLabelScope?: 'Noreuse''ResourceGroupReuse''SubscriptionReuse''TenantReuse''Unsecure';

/**
   * The Dns name label for the IP.
   */
readonly dnsNameLabel?: string;

/**
   * The IP exposed to the public internet.
   */
readonly ip?: string;

/**
   * The list of ports exposed on the container group.
   */
readonly ports: Port[];

/**
   * Specifies if the IP is exposed to the public internet or private VNET.
   */
readonly type: 'Private''Public';

/**
   * The port number.
   */
readonly port: number;

/**
   * The protocol associated with the port.
   */
readonly protocol?: 'TCP''UDP';

/**
   * Resource ID of virtual network and subnet.
   */
readonly id: string;

/**
   * The Azure File volume.
   */
readonly azureFile?: AzureFileVolume;

/**
   * The empty directory volume.
   */
readonly emptyDir?: For Bicep, you can use theany()function.;

/**
   * The git repo volume.
   */
readonly gitRepo?: GitRepoVolume;

/**
   * The secret volume.
   */
readonly secret?: object;

/**
   * The flag indicating whether the Azure File shared mounted as a volume is read-only.
   */
readonly readOnly?: bool;

/**
   * The name of the Azure File share to be mounted as a volume.
   */
readonly shareName: string;

/**
   * The storage account access key used to access the Azure File share.
   */
readonly storageAccountKey?: string;

/**
   * The name of the storage account that contains the Azure File share.
   */
readonly storageAccountName: string;

/**
   * Target directory name. Must not contain or start with '..'.  If '.' is supplied, the volume directory will be the git repository.  Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name.
   */
readonly directory?: string;

/**
   * Repository URL
   */
readonly repository: string;

/**
   * Commit hash for the specified revision.
   */
readonly revision?: string;
}

/**
 * ContainerinstanceContainergroups resource
 */
export class ContainerinstanceContainergroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ContainerinstanceContainergroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ContainerInstance/containerGroups@2023-05-01";
  }

  protected getResourceBody(props: ContainerinstanceContainergroupsProps): string {
    return JSON.stringify(
        {properties: {confidentialComputeProperties: {ccePolicy: "string"}, containers: [{name: "string", properties: {command: ["string"], environmentVariables: [{name: "string", secureValue: "string", value: "string"}], image: "string", livenessProbe: {exec: {command: ["string"]}, failureThreshold: "${int}", httpGet: {httpHeaders: [{name: "string", value: "string"}], path: "string", port: "${int}", scheme: "string"}, initialDelaySeconds: "${int}", periodSeconds: "${int}", successThreshold: "${int}", timeoutSeconds: "${int}"}, ports: [{port: "${int}", protocol: "string"}], readinessProbe: {exec: {command: ["string"]}, failureThreshold: "${int}", httpGet: {httpHeaders: [{name: "string", value: "string"}], path: "string", port: "${int}", scheme: "string"}, initialDelaySeconds: "${int}", periodSeconds: "${int}", successThreshold: "${int}", timeoutSeconds: "${int}"}, resources: {limits: {cpu: "${int}", gpu: {count: "${int}", sku: "string"}, memoryInGB: "decimal-as-string"}, requests: {cpu: "${int}", gpu: {count: "${int}", sku: "string"}, memoryInGB: "decimal-as-string"}}, securityContext: {allowPrivilegeEscalation: "${bool}", capabilities: {add: ["string"], drop: ["string"]}, privileged: "${bool}", runAsGroup: "${int}", runAsUser: "${int}", seccompProfile: "string"}, volumeMounts: [{mountPath: "string", name: "string", readOnly: "${bool}"}]}}], diagnostics: {logAnalytics: {logType: "string", metadata: {}, workspaceId: "string", workspaceKey: "string", workspaceResourceId: "string"}}, dnsConfig: {nameServers: ["string"], options: "string", searchDomains: "string"}, encryptionProperties: {identity: "string", keyName: "string", keyVersion: "string", vaultBaseUrl: "string"}, extensions: [{name: "string", properties: {extensionType: "string", version: "string"}}], imageRegistryCredentials: [{identity: "string", identityUrl: "string", password: "string", server: "string", username: "string"}], initContainers: [{name: "string", properties: {command: ["string"], environmentVariables: [{name: "string", secureValue: "string", value: "string"}], image: "string", securityContext: {allowPrivilegeEscalation: "${bool}", capabilities: {add: ["string"], drop: ["string"]}, privileged: "${bool}", runAsGroup: "${int}", runAsUser: "${int}", seccompProfile: "string"}, volumeMounts: [{mountPath: "string", name: "string", readOnly: "${bool}"}]}}], ipAddress: {autoGeneratedDomainNameLabelScope: "string", dnsNameLabel: "string", ip: "string", ports: [{port: "${int}", protocol: "string"}], type: "string"}, osType: "string", priority: "string", restartPolicy: "string", sku: "string", subnetIds: [{id: "string", name: "string"}], volumes: [{azureFile: {readOnly: "${bool}", shareName: "string", storageAccountKey: "string", storageAccountName: "string"}, gitRepo: {directory: "string", repository: "string", revision: "string"}, name: "string", secret: {}}]}, zones: ["string"]}
    );
  }
}
