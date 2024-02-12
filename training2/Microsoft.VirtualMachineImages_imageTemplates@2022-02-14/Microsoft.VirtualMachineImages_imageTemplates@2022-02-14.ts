import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface VirtualmachineimagesImagetemplatesProps extends IAzAPIBaseProps {
/**
   * The identity of the image template, if configured.
   */
readonly identity: ImageTemplateIdentity;

/**
   * The type of identity used for the image template. The type 'None' will remove any identities from the image template.
   */
readonly type?: 'None''UserAssigned';

/**
   * The list of user identities associated with the image template. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
   */
readonly userAssignedIdentities?: object;

/**
   * Maximum duration to wait while building the image template (includes all customizations, validations, and distributions). Omit or specify 0 to use the default (4 hours).
   */
readonly buildTimeoutInMinutes?: number;

/**
   * Specifies the properties used to describe the customization steps of the image, like Image source etc
   */
readonly customize?: ImageTemplateCustomizer[];

/**
   * The distribution targets where the image output needs to go to.
   */
readonly distribute: ImageTemplateDistributor[];

/**
   * Specifies the properties used to describe the source image.
   */
readonly source: ImageTemplateSource;

/**
   * The staging resource group id in the same subscription as the image template that will be used to build the image. If this field is empty, a resource group with a random name will be created. If the resource group specified in this field doesn't exist, it will be created with the same name. If the resource group specified exists, it must be empty and in the same region as the image template. The resource group created will be deleted during template deletion if this field is empty or the resource group specified doesn't exist, but if the resource group specified exists the resources created in the resource group will be deleted during template deletion and the resource group itself will remain.
   */
readonly stagingResourceGroup?: string;

/**
   * Configuration options and list of validations to be performed on the resulting image.
   */
readonly validate?: ImageTemplatePropertiesValidate;

/**
   * Describes how virtual machine is set up to build images
   */
readonly vmProfile?: ImageTemplateVmProfile;

/**
   * Set the object type
   */
readonly type: FilePowerShellShellWindowsRestartWindowsUpdate;

/**
   * The type of customization tool you want to use on the Image. For example, "Shell" can be shell customizer
   */
readonly type: 'File';

/**
   * The absolute path to a file (with nested directory structures already created) where the file (from sourceUri) will be uploaded to in the VM
   */
readonly destination?: string;

/**
   * SHA256 checksum of the file provided in the sourceUri field above
   */
readonly sha256Checksum?: string;

/**
   * The URI of the file to be uploaded for customizing the VM. It can be a github link, SAS URI for Azure Storage, etc
   */
readonly sourceUri?: string;

/**
   * The type of customization tool you want to use on the Image. For example, "Shell" can be shell customizer
   */
readonly type: 'PowerShell';

/**
   * Array of PowerShell commands to execute
   */
readonly inline?: string[];

/**
   * If specified, the PowerShell script will be run with elevated privileges using the Local System user. Can only be true when the runElevated field above is set to true.
   */
readonly runAsSystem?: bool;

/**
   * If specified, the PowerShell script will be run with elevated privileges
   */
readonly runElevated?: bool;

/**
   * URI of the PowerShell script to be run for customizing. It can be a github link, SAS URI for Azure Storage, etc
   */
readonly scriptUri?: string;

/**
   * SHA256 checksum of the power shell script provided in the scriptUri field above
   */
readonly sha256Checksum?: string;

/**
   * Valid exit codes for the PowerShell script. [Default: 0]
   */
readonly validExitCodes?: number[];

/**
   * The type of customization tool you want to use on the Image. For example, "Shell" can be shell customizer
   */
readonly type: 'Shell';

/**
   * Array of shell commands to execute
   */
readonly inline?: string[];

/**
   * URI of the shell script to be run for customizing. It can be a github link, SAS URI for Azure Storage, etc
   */
readonly scriptUri?: string;

/**
   * SHA256 checksum of the shell script provided in the scriptUri field
   */
readonly sha256Checksum?: string;

/**
   * The type of customization tool you want to use on the Image. For example, "Shell" can be shell customizer
   */
readonly type: 'WindowsRestart';

/**
   * Command to check if restart succeeded [Default: '']
   */
readonly restartCheckCommand?: string;

/**
   * Command to execute the restart [Default: 'shutdown /r /f /t 0 /c "packer restart"']
   */
readonly restartCommand?: string;

/**
   * Restart timeout specified as a string of magnitude and unit, e.g. '5m' (5 minutes) or '2h' (2 hours) [Default: '5m']
   */
readonly restartTimeout?: string;

/**
   * The type of customization tool you want to use on the Image. For example, "Shell" can be shell customizer
   */
readonly type: 'WindowsUpdate';

/**
   * Array of filters to select updates to apply. Omit or specify empty array to use the default (no filter). Refer to above link for examples and detailed description of this field.
   */
readonly filters?: string[];

/**
   * Criteria to search updates. Omit or specify empty string to use the default (search all). Refer to above link for examples and detailed description of this field.
   */
readonly searchCriteria?: string;

/**
   * Maximum number of updates to apply at a time. Omit or specify 0 to use the default (1000)
   */
readonly updateLimit?: number;

/**
   * Tags that will be applied to the artifact once it has been created/updated by the distributor.
   */
readonly artifactTags?: object;

/**
   * The name to be used for the associated RunOutput.
   */
readonly runOutputName: string;

/**
   * Set the object type
   */
readonly type: ManagedImageSharedImageVHD;

/**
   * Type of distribution.
   */
readonly type: 'ManagedImage';

/**
   * Resource Id of the Managed Disk Image
   */
readonly imageId: string;

/**
   * Type of distribution.
   */
readonly type: 'SharedImage';

/**
   * Flag that indicates whether created image version should be excluded from latest. Omit to use the default (false).
   */
readonly excludeFromLatest?: bool;

/**
   * Resource Id of the Shared Image Gallery image
   */
readonly galleryImageId: string;

/**
   * A list of regions that the image will be replicated to
   */
readonly replicationRegions: string[];

/**
   * Storage account type to be used to store the shared image. Omit to use the default (Standard_LRS).
   */
readonly storageAccountType?: 'Standard_LRS''Standard_ZRS';

/**
   * Type of distribution.
   */
readonly type: 'VHD';

/**
   * Set the object type
   */
readonly type: ManagedImagePlatformImageSharedImageVersion;

/**
   * Specifies the type of source image you want to start with.
   */
readonly type: 'ManagedImage';

/**
   * ARM resource id of the managed image in customer subscription
   */
readonly imageId: string;

/**
   * Specifies the type of source image you want to start with.
   */
readonly type: 'PlatformImage';

/**
   * Image offer from theAzure Gallery Images.
   */
readonly offer?: string;

/**
   * Optional configuration of purchase plan for platform image.
   */
readonly planInfo?: PlatformImagePurchasePlan;

/**
   * Image Publisher inAzure Gallery Images.
   */
readonly publisher?: string;

/**
   * Image sku from theAzure Gallery Images.
   */
readonly sku?: string;

/**
   * Image version from theAzure Gallery Images. If 'latest' is specified here, the version is evaluated when the image build takes place, not when the template is submitted.
   */
readonly version?: string;

/**
   * Name of the purchase plan.
   */
readonly planName: string;

/**
   * Product of the purchase plan.
   */
readonly planProduct: string;

/**
   * Publisher of the purchase plan.
   */
readonly planPublisher: string;

/**
   * Specifies the type of source image you want to start with.
   */
readonly type: 'SharedImageVersion';

/**
   * ARM resource id of the image version in the shared image gallery
   */
readonly imageVersionId: string;

/**
   * If validation fails and this field is set to false, output image(s) will not be distributed. This is the default behavior. If validation fails and this field is set to true, output image(s) will still be distributed. Please use this option with caution as it may result in bad images being distributed for use. In either case (true or false), the end to end image run will be reported as having failed in case of a validation failure. [Note: This field has no effect if validation succeeds.]
   */
readonly continueDistributeOnFailure?: bool;

/**
   * List of validations to be performed.
   */
readonly inVMValidations?: ImageTemplateInVMValidator[];

/**
   * If this field is set to true, the image specified in the 'source' section will directly be validated. No separate build will be run to generate and then validate a customized image.
   */
readonly sourceValidationOnly?: bool;

/**
   * Set the object type
   */
readonly type: PowerShellShell;

/**
   * The type of validation you want to use on the Image. For example, "Shell" can be shell validation
   */
readonly type: 'PowerShell';

/**
   * Array of PowerShell commands to execute
   */
readonly inline?: string[];

/**
   * If specified, the PowerShell script will be run with elevated privileges using the Local System user. Can only be true when the runElevated field above is set to true.
   */
readonly runAsSystem?: bool;

/**
   * If specified, the PowerShell script will be run with elevated privileges
   */
readonly runElevated?: bool;

/**
   * URI of the PowerShell script to be run for validation. It can be a github link, Azure Storage URI, etc
   */
readonly scriptUri?: string;

/**
   * SHA256 checksum of the power shell script provided in the scriptUri field above
   */
readonly sha256Checksum?: string;

/**
   * Valid exit codes for the PowerShell script. [Default: 0]
   */
readonly validExitCodes?: number[];

/**
   * The type of validation you want to use on the Image. For example, "Shell" can be shell validation
   */
readonly type: 'Shell';

/**
   * Array of shell commands to execute
   */
readonly inline?: string[];

/**
   * URI of the shell script to be run for validation. It can be a github link, Azure Storage URI, etc
   */
readonly scriptUri?: string;

/**
   * SHA256 checksum of the shell script provided in the scriptUri field
   */
readonly sha256Checksum?: string;

/**
   * Size of the OS disk in GB. Omit or specify 0 to use Azure's default OS disk size.
   */
readonly osDiskSizeGB?: number;

/**
   * Optional array of resource IDs of user assigned managed identities to be configured on the build VM and validation VM. This may include the identity of the image template.
   */
readonly userAssignedIdentities?: string[];

/**
   * Size of the virtual machine used to build, customize and capture images. Omit or specify empty string to use the default (Standard_D1_v2 for Gen1 images and Standard_D2ds_v4 for Gen2 images).
   */
readonly vmSize?: string;

/**
   * Optional configuration of the virtual network to use to deploy the build VM and validation VM in. Omit if no specific virtual network needs to be used.
   */
readonly vnetConfig?: VirtualNetworkConfig;

/**
   * Size of the proxy virtual machine used to pass traffic to the build VM and validation VM. Omit or specify empty string to use the default (Standard_A1_v2).
   */
readonly proxyVmSize?: string;

/**
   * Resource id of a pre-existing subnet.
   */
readonly subnetId?: string;
}

/**
 * VirtualmachineimagesImagetemplates resource
 */
export class VirtualmachineimagesImagetemplates extends AzAPIBase {
  constructor(scope: Construct, id: string, props: VirtualmachineimagesImagetemplatesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.VirtualMachineImages/imageTemplates@2022-02-14";
  }

  protected getResourceBody(props: VirtualmachineimagesImagetemplatesProps): string {
    return JSON.stringify(
        {properties: {buildTimeoutInMinutes: "${int}", customize: [{name: "string", type: "string"}], distribute: [{artifactTags: {}, runOutputName: "string", type: "string"}], source: {type: "string"}, stagingResourceGroup: "string", validate: {continueDistributeOnFailure: "${bool}", inVMValidations: [{name: "string", type: "string"}], sourceValidationOnly: "${bool}"}, vmProfile: {osDiskSizeGB: "${int}", userAssignedIdentities: ["string"], vmSize: "string", vnetConfig: {proxyVmSize: "string", subnetId: "string"}}}}
    );
  }
}
