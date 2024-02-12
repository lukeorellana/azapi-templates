import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface LabservicesLabsProps extends IAzAPIBaseProps {
/**
   * The resource auto shutdown configuration for the lab. This controls whether actions are taken on resources that are sitting idle.
   */
readonly autoShutdownProfile?: AutoShutdownProfile;

/**
   * The connection profile for the lab. This controls settings such as web access to lab resources or whether RDP or SSH ports are open.
   */
readonly connectionProfile?: ConnectionProfile;

/**
   * The description of the lab.
   */
readonly description?: string;

/**
   * The ID of the lab plan. Used during resource creation to provide defaults and acts as a permission container when creating a lab via labs.azure.com. Setting a labPlanId on an existing lab provides organization..
   */
readonly labPlanId?: string;

/**
   * The network profile for the lab, typically applied via a lab plan. This profile cannot be modified once a lab has been created.
   */
readonly networkProfile?: LabNetworkProfile;

/**
   * The lab user list management profile.
   */
readonly rosterProfile?: RosterProfile;

/**
   * The lab security profile.
   */
readonly securityProfile?: SecurityProfile;

/**
   * The title of the lab.
   */
readonly title?: string;

/**
   * The profile used for creating lab virtual machines.
   */
readonly virtualMachineProfile?: VirtualMachineProfile;

/**
   * The amount of time a VM will stay running after a user disconnects if this behavior is enabled.
   */
readonly disconnectDelay?: string;

/**
   * The amount of time a VM will idle before it is shutdown if this behavior is enabled.
   */
readonly idleDelay?: string;

/**
   * The amount of time a VM will stay running before it is shutdown if no connection is made and this behavior is enabled.
   */
readonly noConnectDelay?: string;

/**
   * Whether shutdown on disconnect is enabled
   */
readonly shutdownOnDisconnect?: 'Disabled''Enabled';

/**
   * Whether a VM will get shutdown when it has idled for a period of time.
   */
readonly shutdownOnIdle?: 'LowUsage''None''UserAbsence';

/**
   * Whether a VM will get shutdown when it hasn't been connected to after a period of time.
   */
readonly shutdownWhenNotConnected?: 'Disabled''Enabled';

/**
   * The enabled access level for Client Access over RDP.
   */
readonly clientRdpAccess?: 'None''Private''Public';

/**
   * The enabled access level for Client Access over SSH.
   */
readonly clientSshAccess?: 'None''Private''Public';

/**
   * The enabled access level for Web Access over RDP.
   */
readonly webRdpAccess?: 'None''Private''Public';

/**
   * The enabled access level for Web Access over SSH.
   */
readonly webSshAccess?: 'None''Private''Public';

/**
   * The external load balancer resource id
   */
readonly loadBalancerId?: string;

/**
   * The external public IP resource id
   */
readonly publicIpId?: string;

/**
   * The external subnet resource id
   */
readonly subnetId?: string;

/**
   * The AAD group ID which this lab roster is populated from. Having this set enables AAD sync mode.
   */
readonly activeDirectoryGroupId?: string;

/**
   * The base URI identifying the lms instance.
   */
readonly lmsInstance?: string;

/**
   * The unique id of the azure lab services tool in the lms.
   */
readonly ltiClientId?: string;

/**
   * The unique context identifier for the lab in the lms.
   */
readonly ltiContextId?: string;

/**
   * The uri of the names and roles service endpoint on the lms for the class attached to this lab.
   */
readonly ltiRosterEndpoint?: string;

/**
   * Whether any user or only specified users can register to a lab.
   */
readonly openAccess?: 'Disabled''Enabled';

/**
   * Additional VM capabilities.
   */
readonly additionalCapabilities?: VirtualMachineAdditionalCapabilities;

/**
   * Credentials for the admin user on the VM.
   */
readonly adminUser: Credentials;

/**
   * Indicates what lab virtual machines are created from.
   */
readonly createOption: 'Image''TemplateVM';

/**
   * The image configuration for lab virtual machines.
   */
readonly imageReference: ImageReference;

/**
   * Credentials for the non-admin user on the VM, if one exists.
   */
readonly nonAdminUser?: Credentials;

/**
   * The SKU for the lab. Defines the type of virtual machines used in the lab.
   */
readonly sku: Sku;

/**
   * The initial quota alloted to each lab user. Must be a time span between 0 and 9999 hours.
   */
readonly usageQuota: string;

/**
   * Enabling this option will use the same password for all user VMs.
   */
readonly useSharedPassword?: 'Disabled''Enabled';

/**
   * Flag to pre-install dedicated GPU drivers.
   */
readonly installGpuDrivers?: 'Disabled''Enabled';

/**
   * The password for the user. This is required for the TemplateVM createOption.
   */
readonly password?: string;

/**
   * The username to use when signing in to lab VMs.
   */
readonly username: string;

/**
   * Image resource ID
   */
readonly id?: string;

/**
   * The image offer if applicable.
   */
readonly offer?: string;

/**
   * The image publisher
   */
readonly publisher?: string;

/**
   * The image SKU
   */
readonly sku?: string;

/**
   * The image version specified on creation.
   */
readonly version?: string;

/**
   * If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
   */
readonly capacity?: number;

/**
   * If the service has different generations of hardware, for the same SKU, then that can be captured here.
   */
readonly family?: string;

/**
   * The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
   */
readonly size?: string;

/**
   * This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
   */
readonly tier?: 'Basic''Free''Premium''Standard';
}

/**
 * LabservicesLabs resource
 */
export class LabservicesLabs extends AzAPIBase {
  constructor(scope: Construct, id: string, props: LabservicesLabsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.LabServices/labs@2022-08-01";
  }

  protected getResourceBody(props: LabservicesLabsProps): string {
    return JSON.stringify(
        {properties: {autoShutdownProfile: {disconnectDelay: "string", idleDelay: "string", noConnectDelay: "string", shutdownOnDisconnect: "string", shutdownOnIdle: "string", shutdownWhenNotConnected: "string"}, connectionProfile: {clientRdpAccess: "string", clientSshAccess: "string", webRdpAccess: "string", webSshAccess: "string"}, description: "string", labPlanId: "string", networkProfile: {loadBalancerId: "string", publicIpId: "string", subnetId: "string"}, rosterProfile: {activeDirectoryGroupId: "string", lmsInstance: "string", ltiClientId: "string", ltiContextId: "string", ltiRosterEndpoint: "string"}, securityProfile: {openAccess: "string"}, title: "string", virtualMachineProfile: {additionalCapabilities: {installGpuDrivers: "string"}, adminUser: {password: "string", username: "string"}, createOption: "string", imageReference: {id: "string", offer: "string", publisher: "string", sku: "string", version: "string"}, nonAdminUser: {password: "string", username: "string"}, sku: {capacity: "${int}", family: "string", name: "string", size: "string", tier: "string"}, usageQuota: "string", useSharedPassword: "string"}}}
    );
  }
}
