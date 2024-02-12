import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ComputeCloudservicesProps extends IAzAPIBaseProps {
/**
   * The system meta data relating to this resource.
   */
readonly systemData?: SystemData;

/**
   * List of logical availability zone of the resource. List should contain only 1 zone where cloud service should be provisioned. This field is optional.
   */
readonly zones?: string[];

/**
   * (Optional) Indicates whether the role sku properties (roleProfile.roles.sku) specified in the model/template should override the role instance count and vm size specified in the .cscfg and .csdef respectively.The default value isfalse.
   */
readonly allowModelOverride?: bool;

/**
   * Specifies the XML service configuration (.cscfg) for the cloud service.
   */
readonly configuration?: string;

/**
   * Specifies a URL that refers to the location of the service configuration in the Blob service. The service package URL  can be Shared Access Signature (SAS) URI from any storage account.This is a write-only property and is not returned in GET calls.
   */
readonly configurationUrl?: string;

/**
   * Describes a cloud service extension profile.
   */
readonly extensionProfile?: CloudServiceExtensionProfile;

/**
   * Network Profile for the cloud service.
   */
readonly networkProfile?: CloudServiceNetworkProfile;

/**
   * Describes the OS profile for the cloud service.
   */
readonly osProfile?: CloudServiceOsProfile;

/**
   * Specifies a URL that refers to the location of the service package in the Blob service. The service package URL can be Shared Access Signature (SAS) URI from any storage account.This is a write-only property and is not returned in GET calls.
   */
readonly packageUrl?: string;

/**
   * Describes the role profile for the cloud service.
   */
readonly roleProfile?: CloudServiceRoleProfile;

/**
   * (Optional) Indicates whether to start the cloud service immediately after it is created. The default value istrue.If false, the service model is still deployed, but the code is not run immediately. Instead, the service is PoweredOff until you call Start, at which time the service will be started. A deployed service still incurs charges, even if it is poweredoff.
   */
readonly startCloudService?: bool;

/**
   * Update mode for the cloud service. Role instances are allocated to update domains when the service is deployed. Updates can be initiated manually in each update domain or initiated automatically in all update domains.Possible Values areAutoManualSimultaneousIf not specified, the default value is Auto. If set to Manual, PUT UpdateDomain must be called to apply the update. If set to Auto, the update is automatically applied to each update domain in sequence.
   */
readonly upgradeMode?: 'Auto''Manual''Simultaneous';

/**
   * List of extensions for the cloud service.
   */
readonly extensions?: Extension[];

/**
   * Explicitly specify whether platform can automatically upgrade typeHandlerVersion to higher minor versions when they become available.
   */
readonly autoUpgradeMinorVersion?: bool;

/**
   * Tag to force apply the provided public and protected settings.Changing the tag value allows for re-running the extension without changing any of the public or protected settings.If forceUpdateTag is not changed, updates to public or protected settings would still be applied by the handler.If neither forceUpdateTag nor any of public or protected settings change, extension would flow to the role instance with the same sequence-number, andit is up to handler implementation whether to re-run it or not
   */
readonly forceUpdateTag?: string;

/**
   * Protected settings for the extension which are encrypted before sent to the role instance.
   */
readonly protectedSettings?: For Bicep, you can use theany()function.;

/**
   * Protected settings for the extension, referenced using KeyVault which are encrypted before sent to the role instance.
   */
readonly protectedSettingsFromKeyVault?: CloudServiceVaultAndSecretReference;

/**
   * The name of the extension handler publisher.
   */
readonly publisher?: string;

/**
   * Optional list of roles to apply this extension. If property is not specified or '*' is specified, extension is applied to all roles in the cloud service.
   */
readonly rolesAppliedTo?: string[];

/**
   * Public settings for the extension. For JSON extensions, this is the JSON settings for the extension. For XML Extension (like RDP), this is the XML setting for the extension.
   */
readonly settings?: For Bicep, you can use theany()function.;

/**
   * Specifies the type of the extension.
   */
readonly type?: string;

/**
   * Specifies the version of the extension. Specifies the version of the extension. If this element is not specified or an asterisk (*) is used as the value, the latest version of the extension is used. If the value is specified with a major version number and an asterisk as the minor version number (X.), the latest minor version of the specified major version is selected. If a major version number and a minor version number are specified (X.Y), the specific extension version is selected. If a version is specified, an auto-upgrade is performed on the role instance.
   */
readonly typeHandlerVersion?: string;

/**
   * Secret URL which contains the protected settings of the extension
   */
readonly secretUrl?: string;

/**
   * The ARM Resource ID of the Key Vault
   */
readonly sourceVault?: SubResource;

/**
   * Resource Id
   */
readonly id?: string;

/**
   * List of Load balancer configurations. Cloud service can have up to two load balancer configurations, corresponding to a Public Load Balancer and an Internal Load Balancer.
   */
readonly loadBalancerConfigurations?: LoadBalancerConfiguration[];

/**
   * Slot type for the cloud service.Possible values areProductionStagingIf not specified, the default value is Production.
   */
readonly slotType?: 'Production''Staging';

/**
   * The id reference of the cloud service containing the target IP with which the subject cloud service can perform a swap. This property cannot be updated once it is set. The swappable cloud service referred by this id must be present otherwise an error will be thrown.
   */
readonly swappableCloudService?: SubResource;

/**
   * Resource Id
   */
readonly id?: string;

/**
   * Specifies the frontend IP to be used for the load balancer. Only IPv4 frontend IP address is supported. Each load balancer configuration must have exactly one frontend IP configuration.
   */
readonly frontendIpConfigurations: LoadBalancerFrontendIpConfiguration[];

/**
   * The virtual network private IP address of the IP configuration.
   */
readonly privateIPAddress?: string;

/**
   * The reference to the public ip address resource.
   */
readonly publicIPAddress?: SubResource;

/**
   * The reference to the virtual network subnet resource.
   */
readonly subnet?: SubResource;

/**
   * Specifies set of certificates that should be installed onto the role instances.
   */
readonly secrets?: CloudServiceVaultSecretGroup[];

/**
   * The relative URL of the Key Vault containing all of the certificates in VaultCertificates.
   */
readonly sourceVault?: SubResource;

/**
   * The list of key vault references in SourceVault which contain certificates.
   */
readonly vaultCertificates?: CloudServiceVaultCertificate[];

/**
   * This is the URL of a certificate that has been uploaded to Key Vault as a secret.
   */
readonly certificateUrl?: string;

/**
   * List of roles for the cloud service.
   */
readonly roles?: CloudServiceRoleProfileProperties[];

/**
   * Describes the cloud service role sku.
   */
readonly sku?: CloudServiceRoleSku;

/**
   * Specifies the number of role instances in the cloud service.
   */
readonly capacity?: number;

/**
   * Specifies the tier of the cloud service. Possible Values areStandardBasic
   */
readonly tier?: string;
}

/**
 * ComputeCloudservices resource
 */
export class ComputeCloudservices extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ComputeCloudservicesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Compute/cloudServices@2022-09-04";
  }

  protected getResourceBody(props: ComputeCloudservicesProps): string {
    return JSON.stringify(
        {properties: {allowModelOverride: "${bool}", configuration: "string", configurationUrl: "string", extensionProfile: {extensions: [{name: "string", properties: {autoUpgradeMinorVersion: "${bool}", forceUpdateTag: "string", protectedSettingsFromKeyVault: {secretUrl: "string", sourceVault: {id: "string"}}, publisher: "string", rolesAppliedTo: ["string"], type: "string", typeHandlerVersion: "string"}}]}, networkProfile: {loadBalancerConfigurations: [{id: "string", name: "string", properties: {frontendIpConfigurations: [{name: "string", properties: {privateIPAddress: "string", publicIPAddress: {id: "string"}, subnet: {id: "string"}}}]}}], slotType: "string", swappableCloudService: {id: "string"}}, osProfile: {secrets: [{sourceVault: {id: "string"}, vaultCertificates: [{certificateUrl: "string"}]}]}, packageUrl: "string", roleProfile: {roles: [{name: "string", sku: {capacity: "${int}", name: "string", tier: "string"}}]}, startCloudService: "${bool}", upgradeMode: "string"}, systemData: {}, zones: ["string"]}
    );
  }
}
