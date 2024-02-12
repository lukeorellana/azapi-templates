import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevtestlabLabsFormulasProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:labs;

/**
   * The description of the formula.
   */
readonly description?: string;

/**
   * The content of the formula.
   */
readonly formulaContent?: LabVirtualMachineCreationParameter;

/**
   * The OS type of the formula.
   */
readonly osType?: string;

/**
   * Information about a VM from which a formula is to be created.
   */
readonly vm?: FormulaPropertiesFromVm;

/**
   * Indicates whether another user can take ownership of the virtual machine
   */
readonly allowClaim?: bool;

/**
   * The artifacts to be installed on the virtual machine.
   */
readonly artifacts?: ArtifactInstallProperties[];

/**
   * The number of virtual machine instances to create.
   */
readonly bulkCreationParameters?: BulkCreationParameters;

/**
   * The creation date of the virtual machine.
   */
readonly createdDate?: string;

/**
   * The custom image identifier of the virtual machine.
   */
readonly customImageId?: string;

/**
   * New or existing data disks to attach to the virtual machine after creation
   */
readonly dataDiskParameters?: DataDiskProperties[];

/**
   * Indicates whether the virtual machine is to be created without a public IP address.
   */
readonly disallowPublicIpAddress?: bool;

/**
   * The resource ID of the environment that contains this virtual machine, if any.
   */
readonly environmentId?: string;

/**
   * The expiration date for VM.
   */
readonly expirationDate?: string;

/**
   * The Microsoft Azure Marketplace image reference of the virtual machine.
   */
readonly galleryImageReference?: GalleryImageReference;

/**
   * Indicates whether this virtual machine uses an SSH key for authentication.
   */
readonly isAuthenticationWithSshKey?: bool;

/**
   * The lab subnet name of the virtual machine.
   */
readonly labSubnetName?: string;

/**
   * The lab virtual network identifier of the virtual machine.
   */
readonly labVirtualNetworkId?: string;

/**
   * The network interface properties.
   */
readonly networkInterface?: NetworkInterfaceProperties;

/**
   * The notes of the virtual machine.
   */
readonly notes?: string;

/**
   * The object identifier of the owner of the virtual machine.
   */
readonly ownerObjectId?: string;

/**
   * The user principal name of the virtual machine owner.
   */
readonly ownerUserPrincipalName?: string;

/**
   * The password of the virtual machine administrator.
   */
readonly password?: string;

/**
   * The id of the plan associated with the virtual machine image
   */
readonly planId?: string;

/**
   * Virtual Machine schedules to be created
   */
readonly scheduleParameters?: ScheduleCreationParameter[];

/**
   * The size of the virtual machine.
   */
readonly size?: string;

/**
   * The SSH key of the virtual machine administrator.
   */
readonly sshKey?: string;

/**
   * Storage type to use for virtual machine (i.e. Standard, Premium).
   */
readonly storageType?: string;

/**
   * The user name of the virtual machine.
   */
readonly userName?: string;

/**
   * The artifact's identifier.
   */
readonly artifactId?: string;

/**
   * The artifact's title.
   */
readonly artifactTitle?: string;

/**
   * The status message from the deployment.
   */
readonly deploymentStatusMessage?: string;

/**
   * The time that the artifact starts to install on the virtual machine.
   */
readonly installTime?: string;

/**
   * The parameters of the artifact.
   */
readonly parameters?: ArtifactParameterProperties[];

/**
   * The status of the artifact.
   */
readonly status?: string;

/**
   * The status message from the virtual machine extension.
   */
readonly vmExtensionStatusMessage?: string;

/**
   * The value of the artifact parameter.
   */
readonly value?: string;

/**
   * The number of virtual machine instances to create.
   */
readonly instanceCount?: number;

/**
   * Specifies options to attach a new disk to the virtual machine.
   */
readonly attachNewDataDiskOptions?: AttachNewDataDiskOptions;

/**
   * Specifies the existing lab disk id to attach to virtual machine.
   */
readonly existingLabDiskId?: string;

/**
   * Caching option for a data disk (i.e. None, ReadOnly, ReadWrite).
   */
readonly hostCaching?: 'None''ReadOnly''ReadWrite';

/**
   * The name of the disk to be attached.
   */
readonly diskName?: string;

/**
   * Size of the disk to be attached in Gibibytes.
   */
readonly diskSizeGiB?: number;

/**
   * The storage type for the disk (i.e. Standard, Premium).
   */
readonly diskType?: 'Premium''Standard''StandardSSD';

/**
   * The offer of the gallery image.
   */
readonly offer?: string;

/**
   * The OS type of the gallery image.
   */
readonly osType?: string;

/**
   * The publisher of the gallery image.
   */
readonly publisher?: string;

/**
   * The SKU of the gallery image.
   */
readonly sku?: string;

/**
   * The version of the gallery image.
   */
readonly version?: string;

/**
   * The DNS name.
   */
readonly dnsName?: string;

/**
   * The private IP address.
   */
readonly privateIpAddress?: string;

/**
   * The public IP address.
   */
readonly publicIpAddress?: string;

/**
   * The resource ID of the public IP address.
   */
readonly publicIpAddressId?: string;

/**
   * The RdpAuthority property is a server DNS host name or IP address followed by the service port number for RDP (Remote Desktop Protocol).
   */
readonly rdpAuthority?: string;

/**
   * The configuration for sharing a public IP address across multiple virtual machines.
   */
readonly sharedPublicIpAddressConfiguration?: SharedPublicIpAddressConfiguration;

/**
   * The SshAuthority property is a server DNS host name or IP address followed by the service port number for SSH.
   */
readonly sshAuthority?: string;

/**
   * The resource ID of the sub net.
   */
readonly subnetId?: string;

/**
   * The resource ID of the virtual network.
   */
readonly virtualNetworkId?: string;

/**
   * The incoming NAT rules
   */
readonly inboundNatRules?: InboundNatRule[];

/**
   * The port to which the external traffic will be redirected.
   */
readonly backendPort?: number;

/**
   * The external endpoint port of the inbound connection. Possible values range between 1 and 65535, inclusive. If unspecified, a value will be allocated automatically.
   */
readonly frontendPort?: number;

/**
   * The transport protocol for the endpoint.
   */
readonly transportProtocol?: 'Tcp''Udp';

/**
   * If the schedule will occur once each day of the week, specify the daily recurrence.
   */
readonly dailyRecurrence?: DayDetails;

/**
   * If the schedule will occur multiple times a day, specify the hourly recurrence.
   */
readonly hourlyRecurrence?: HourDetails;

/**
   * Notification settings.
   */
readonly notificationSettings?: NotificationSettings;

/**
   * The status of the schedule (i.e. Enabled, Disabled)
   */
readonly status?: 'Disabled''Enabled';

/**
   * The resource ID to which the schedule belongs
   */
readonly targetResourceId?: string;

/**
   * The task type of the schedule (e.g. LabVmsShutdownTask, LabVmAutoStart).
   */
readonly taskType?: string;

/**
   * If the schedule will occur only some days of the week, specify the weekly recurrence.
   */
readonly weeklyRecurrence?: WeekDetails;

/**
   * The time of day the schedule will occur.
   */
readonly time?: string;

/**
   * Minutes of the hour the schedule will run.
   */
readonly minute?: number;

/**
   * The email recipient to send notifications to (can be a list of semi-colon separated email addresses).
   */
readonly emailRecipient?: string;

/**
   * The locale to use when sending a notification (fallback for unsupported languages is EN).
   */
readonly notificationLocale?: string;

/**
   * If notifications are enabled for this schedule (i.e. Enabled, Disabled).
   */
readonly status?: 'Disabled''Enabled';

/**
   * Time in minutes before event at which notification will be sent.
   */
readonly timeInMinutes?: number;

/**
   * The webhook URL to which the notification will be sent.
   */
readonly webhookUrl?: string;

/**
   * The time of the day the schedule will occur.
   */
readonly time?: string;

/**
   * The days of the week for which the schedule is set (e.g. Sunday, Monday, Tuesday, etc.).
   */
readonly weekdays?: string[];

/**
   * The identifier of the VM from which a formula is to be created.
   */
readonly labVmId?: string;
}

/**
 * DevtestlabLabsFormulas resource
 */
export class DevtestlabLabsFormulas extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DevtestlabLabsFormulasProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DevTestLab/labs/formulas@2018-09-15";
  }

  protected getResourceBody(props: DevtestlabLabsFormulasProps): string {
    return JSON.stringify(
        {properties: {description: "string", formulaContent: {location: "string", name: "string", properties: {allowClaim: "${bool}", artifacts: [{artifactId: "string", artifactTitle: "string", deploymentStatusMessage: "string", installTime: "string", parameters: [{name: "string", value: "string"}], status: "string", vmExtensionStatusMessage: "string"}], bulkCreationParameters: {instanceCount: "${int}"}, createdDate: "string", customImageId: "string", dataDiskParameters: [{attachNewDataDiskOptions: {diskName: "string", diskSizeGiB: "${int}", diskType: "string"}, existingLabDiskId: "string", hostCaching: "string"}], disallowPublicIpAddress: "${bool}", environmentId: "string", expirationDate: "string", galleryImageReference: {offer: "string", osType: "string", publisher: "string", sku: "string", version: "string"}, isAuthenticationWithSshKey: "${bool}", labSubnetName: "string", labVirtualNetworkId: "string", networkInterface: {dnsName: "string", privateIpAddress: "string", publicIpAddress: "string", publicIpAddressId: "string", rdpAuthority: "string", sharedPublicIpAddressConfiguration: {inboundNatRules: [{backendPort: "${int}", frontendPort: "${int}", transportProtocol: "string"}]}, sshAuthority: "string", subnetId: "string", virtualNetworkId: "string"}, notes: "string", ownerObjectId: "string", ownerUserPrincipalName: "string", password: "string", planId: "string", scheduleParameters: [{name: "string", properties: {dailyRecurrence: {time: "string"}, hourlyRecurrence: {minute: "${int}"}, notificationSettings: {emailRecipient: "string", notificationLocale: "string", status: "string", timeInMinutes: "${int}", webhookUrl: "string"}, status: "string", targetResourceId: "string", taskType: "string", weeklyRecurrence: {time: "string", weekdays: ["string"]}}, tags: {}}], size: "string", sshKey: "string", storageType: "string", userName: "string"}, tags: {}}, osType: "string", vm: {labVmId: "string"}}}
    );
  }
}
