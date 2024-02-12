import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:hostPools;

/**
   * Value for availability zones to be used by the session host. Should be from [1,2,3].
   */
readonly availabilityZones?: number[];

/**
   * Boot Diagnostics information.
   */
readonly bootDiagnosticsInfo?: BootDiagnosticsInfoProperties;

/**
   * The uri to the storage blob containing the arm template to be run on the virtual machine after provisioning.
   */
readonly customConfigurationScriptUrl?: string;

/**
   * Disk information.
   */
readonly diskInfo: DiskInfoProperties;

/**
   * Domain configurations of session hosts.
   */
readonly domainInfo: DomainInfoProperties;

/**
   * Friendly name to describe this version of the SessionHostConfiguration.
   */
readonly friendlyName?: stringConstranumbers:Max length = 260;

/**
   * Image configurations of HostPool.
   */
readonly imageInfo: ImageInfoProperties;

/**
   * Network information.
   */
readonly networkInfo: NetworkInfoProperties;

/**
   * Security information.
   */
readonly securityInfo?: SecurityInfoProperties;

/**
   * Local Admin credentials for session hosts.
   */
readonly vmAdminCredentials: KeyVaultCredentialsProperties;

/**
   * The Location for the session host to be created in. It will default to the location of the hostpool if not provided.
   */
readonly vmLocation?: string;

/**
   * The prefix that should be associated with session host names
   */
readonly vmNamePrefix: string Constranumbers:Max length = 11;

/**
   * The ResourceGroup for the session hosts to be created in. It will default to the ResourceGroup of the hostpool if not provided.
   */
readonly vmResourceGroup?: string;

/**
   * The id of the size of a virtual machine connected to a hostpool.
   */
readonly vmSizeId: string;

/**
   * Hashtable that lists key/value pair tags to apply to the VMs
   */
readonly vmTags?: SessionHostConfigurationPropertiesVmTags;

/**
   * Whether boot diagnostics should be enabled on the Virtual Machine.
   */
readonly enabled?: bool;

/**
   * Uri of the storage account to use for placing the console output and screenshot.If storageUri is not specified while enabling boot diagnostics, managed storage will be used.
   */
readonly storageUri?: string;

/**
   * The disk type used by virtual machine in hostpool session host.
   */
readonly type: 'Premium_LRS''StandardSSD_LRS''Standard_LRS';

/**
   * Active directory info. Only one should be populated based on the join type.
   */
readonly activeDirectoryInfo?: ActiveDirectoryInfoProperties;

/**
   * Azure active directory info. Only one should be populated based on the join type.
   */
readonly azureActiveDirectoryInfo?: AzureActiveDirectoryInfoProperties;

/**
   * The type of domain join done by the virtual machine.
   */
readonly joinType: 'ActiveDirectory''AzureActiveDirectory';

/**
   * Credentials needed to create the virtual machine.
   */
readonly domainCredentials: KeyVaultCredentialsProperties;

/**
   * The domain a virtual machine connected to a hostpool will join.
   */
readonly domainName?: string;

/**
   * The ou path.
   */
readonly ouPath: string;

/**
   * The uri to access the secret that the password is stored in.
   */
readonly passwordKeyVaultSecretUri: string;

/**
   * The uri to access the secret that the username is stored in.
   */
readonly usernameKeyVaultSecretUri: string;

/**
   * The mdm guid.
   */
readonly mdmProviderGuid: string;

/**
   * The values to uniquely identify a custom image. Only one should be populated based on the image type.
   */
readonly customInfo?: CustomInfoProperties;

/**
   * The values to uniquely identify a marketplace image. Only one should be populated based on the image type.
   */
readonly marketplaceInfo?: MarketplaceInfoProperties;

/**
   * The type of image session hosts use in the hostpool.
   */
readonly type: 'Custom''Marketplace';

/**
   * The resource id of the custom image.
   */
readonly resourceId: string;

/**
   * The exact version of the image.
   */
readonly exactVersion: string;

/**
   * The offer of the image.
   */
readonly offer: string;

/**
   * The publisher of the image.
   */
readonly publisher: string;

/**
   * The sku of the image.
   */
readonly sku: string;

/**
   * The resource ID of the security group. Any allowable/open ports should be specified in the NSG.
   */
readonly securityGroupId?: string;

/**
   * The resource ID of the subnet.
   */
readonly subnetId: string;

/**
   * Whether to use secureBoot on the virtual machine.
   */
readonly secureBootEnabled?: bool;

/**
   * The security type used by virtual machine in hostpool session host. Default is Standard.
   */
readonly type?: 'ConfidentialVM''Standard''TrustedLaunch';

/**
   * Whether to use vTPM on the virtual machine.
   */
readonly vTpmEnabled?: bool;

/**
   * 
   */
readonly {customized property}?: string;
}

/**
 *  resource
 */
export class  extends AzAPIBase {
  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "";
  }

  protected getResourceBody(props: Props): string {
    return JSON.stringify(
        
    );
  }
}
