import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DataboxedgeDataboxedgedevicesRolesProps extends IAzAPIBaseProps {
/**
   * Set the object type
   */
readonly kind: CloudEdgeManagementIOTKubernetesMEC;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:dataBoxEdgeDevices;

/**
   * Role type.
   */
readonly kind: 'CloudEdgeManagement';

/**
   * Role status.
   */
readonly roleStatus: 'Disabled''Enabled';

/**
   * Role type.
   */
readonly kind: 'IOT';

/**
   * Resource allocation
   */
readonly computeResource?: ComputeResource;

/**
   * Host OS supported by the IoT role.
   */
readonly hostPlatform: 'Linux''Windows';

/**
   * IoT device metadata to which data box edge device needs to be connected.
   */
readonly ioTDeviceDetails: IoTDeviceInfo;

/**
   * Iot edge agent details to download the agent and bootstrap iot runtime.
   */
readonly ioTEdgeAgentInfo?: IoTEdgeAgentInfo;

/**
   * IoT edge device to which the IoT role needs to be configured.
   */
readonly ioTEdgeDeviceDetails: IoTDeviceInfo;

/**
   * Role status.
   */
readonly roleStatus: 'Disabled''Enabled';

/**
   * Mount points of shares in role(s).
   */
readonly shareMappings?: MountPonumberMap[];

/**
   * Memory in GB
   */
readonly memoryInGB: number;

/**
   * Processor count
   */
readonly processorCount: number;

/**
   * Encrypted IoT device/IoT edge device connection string.
   */
readonly authentication?: Authentication;

/**
   * ID of the IoT device/edge device.
   */
readonly deviceId: string;

/**
   * Host name for the IoT hub associated to the device.
   */
readonly ioTHostHub: string;

/**
   * Id for the IoT hub associated to the device.
   */
readonly ioTHostHubId?: string;

/**
   * Symmetric key for authentication.
   */
readonly symmetricKey?: SymmetricKey;

/**
   * Connection string based on the symmetric key.
   */
readonly connectionString?: AsymmetricEncryptedSecret;

/**
   * The algorithm used to encrypt "Value".
   */
readonly encryptionAlgorithm: 'AES256''None''RSAES_PKCS1_v_1_5';

/**
   * Thumbprint certificate used to encrypt "Value". If the value is unencrypted, it will be null.
   */
readonly encryptionCertThumbprint?: string;

/**
   * The value of the secret.
   */
readonly value: string;

/**
   * Name of the IoT edge agent image.
   */
readonly imageName: string;

/**
   * Image repository details.
   */
readonly imageRepository?: ImageRepositoryCredential;

/**
   * Image Tag.
   */
readonly tag: string;

/**
   * Image repository url (e.g.: mcr.microsoft.com).
   */
readonly imageRepositoryUrl: string;

/**
   * Repository user password.
   */
readonly password?: AsymmetricEncryptedSecret;

/**
   * Repository user name.
   */
readonly userName: string;

/**
   * ID of the share mounted to the role VM.
   */
readonly shareId: string;

/**
   * Role type.
   */
readonly kind: 'Kubernetes';

/**
   * Host OS supported by the Kubernetes role.
   */
readonly hostPlatform: 'Linux''Windows';

/**
   * Kubernetes cluster configuration
   */
readonly kubernetesClusterInfo: KubernetesClusterInfo;

/**
   * Kubernetes role resources
   */
readonly kubernetesRoleResources: KubernetesRoleResources;

/**
   * Role status.
   */
readonly roleStatus: 'Disabled''Enabled';

/**
   * Kubernetes cluster version
   */
readonly version: string;

/**
   * Kubernetes role compute resource
   */
readonly compute: KubernetesRoleCompute;

/**
   * Kubernetes role storage resource
   */
readonly storage?: KubernetesRoleStorage;

/**
   * VM profile
   */
readonly vmProfile: string;

/**
   * Mount points of shares in role(s).
   */
readonly endpoints?: MountPonumberMap[];

/**
   * Role type.
   */
readonly kind: 'MEC';

/**
   * Activation key of the MEC.
   */
readonly connectionString?: AsymmetricEncryptedSecret;

/**
   * Controller Endpoint.
   */
readonly controllerEndpoint?: string;

/**
   * Unique Id of the Resource.
   */
readonly resourceUniqueId?: string;

/**
   * Role status.
   */
readonly roleStatus: 'Disabled''Enabled';
}

/**
 * DataboxedgeDataboxedgedevicesRoles resource
 */
export class DataboxedgeDataboxedgedevicesRoles extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DataboxedgeDataboxedgedevicesRolesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles@2022-12-01-preview";
  }

  protected getResourceBody(props: DataboxedgeDataboxedgedevicesRolesProps): string {
    return JSON.stringify(
        {kind: "string"}
    );
  }
}
