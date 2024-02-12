import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppplatformSpringAppsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:Spring;

/**
   * The Managed Identity type of the app resource
   */
readonly identity?: ManagedIdentityProperties;

/**
   * Principal Id of system-assigned managed identity.
   */
readonly principalId?: string;

/**
   * Tenant Id of system-assigned managed identity.
   */
readonly tenantId?: string;

/**
   * Type of the managed identity
   */
readonly type?: 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned';

/**
   * Properties of user-assigned managed identities
   */
readonly userAssignedIdentities?: object;

/**
   * Collection of addons
   */
readonly addonConfigs?: object;

/**
   * List of custom persistent disks
   */
readonly customPersistentDisks?: CustomPersistentDiskResource[];

/**
   * Indicate if end to end TLS is enabled.
   */
readonly enableEndToEndTLS?: bool;

/**
   * Indicate if only https is allowed.
   */
readonly httpsOnly?: bool;

/**
   * App ingress settings payload.
   */
readonly ingressSettings?: IngressSettings;

/**
   * Collection of loaded certificates
   */
readonly loadedCertificates?: LoadedCertificate[];

/**
   * Persistent disk settings
   */
readonly persistentDisk?: PersistentDisk;

/**
   * Indicates whether the App exposes public endpoint
   */
readonly public?: bool;

/**
   * Collection of auth secrets
   */
readonly secrets?: Secret[];

/**
   * Temporary disk settings
   */
readonly temporaryDisk?: TemporaryDisk;

/**
   * Additional App settings in vnet injection instance
   */
readonly vnetAddons?: AppVNetAddons;

/**
   * Properties of the custom persistent disk resource payload.
   */
readonly customPersistentDiskProperties?: CustomPersistentDiskProperties;

/**
   * The resource id of Azure Spring Apps Storage resource.
   */
readonly storageId: string;

/**
   * If set to true, it will create and mount a dedicated directory for every individual app instance.
   */
readonly enableSubPath?: bool;

/**
   * These are the mount options for a persistent disk.
   */
readonly mountOptions?: string[];

/**
   * The mount path of the persistent disk.
   */
readonly mountPath: string;

/**
   * Indicates whether the persistent disk is a readOnly one.
   */
readonly readOnly?: bool;

/**
   * Set the object type
   */
readonly type: AzureFileVolume;

/**
   * The type of the underlying resource to mount as a persistent disk.
   */
readonly type: 'AzureFileVolume';

/**
   * The share name of the Azure File share.
   */
readonly shareName?: string;

/**
   * How ingress should communicate with this app backend service.
   */
readonly backendProtocol?: 'Default''GRPC';

/**
   * Client-Certification Authentication.
   */
readonly clientAuth?: IngressSettingsClientAuth;

/**
   * Ingress read time out in seconds.
   */
readonly readTimeoutInSeconds?: number;

/**
   * Ingress send time out in seconds.
   */
readonly sendTimeoutInSeconds?: number;

/**
   * Type of the affinity, set this to Cookie to enable session affinity.
   */
readonly sessionAffinity?: 'Cookie''None';

/**
   * Time in seconds until the cookie expires.
   */
readonly sessionCookieMaxAge?: number;

/**
   * Collection of certificate resource id.
   */
readonly certificates?: string[];

/**
   * Indicate whether the certificate will be loaded into default trust store, only work for Java runtime.
   */
readonly loadTrustStore?: bool;

/**
   * Resource Id of loaded certificate
   */
readonly resourceId: string;

/**
   * Mount path of the persistent disk
   */
readonly mountPath?: string;

/**
   * Size of the persistent disk in GB
   */
readonly sizeInGB?: number;

/**
   * Secret Value.
   */
readonly value?: string;

/**
   * Mount path of the temporary disk
   */
readonly mountPath?: string;

/**
   * Size of the temporary disk in GB
   */
readonly sizeInGB?: number;

/**
   * Indicates whether the App in vnet injection instance exposes endpoint which could be accessed from internet.
   */
readonly publicEndpoint?: bool;
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
