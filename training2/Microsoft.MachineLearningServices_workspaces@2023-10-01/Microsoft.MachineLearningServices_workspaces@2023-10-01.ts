import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * The sku of the workspace.
   */
readonly sku?: Sku;

/**
   * 
   */
readonly kind?: string;

/**
   * The identity of the resource.
   */
readonly identity?: ManagedServiceIdentity;

/**
   * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
   */
readonly type: 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned';

/**
   * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
   */
readonly userAssignedIdentities?: UserAssignedIdentities;

/**
   * 
   */
readonly {customized property}?: UserAssignedIdentity;

/**
   * The flag to indicate whether to allow public access when behind VNet.
   */
readonly allowPublicAccessWhenBehindVnet?: bool;

/**
   * ARM id of the application insights associated with this workspace.
   */
readonly applicationInsights?: string;

/**
   * ARM id of the container registry associated with this workspace.
   */
readonly containerRegistry?: string;

/**
   * The description of this workspace.
   */
readonly description?: string;

/**
   * Url for the discovery service to identify regional endpoints for machine learning experimentation services
   */
readonly discoveryUrl?: string;

/**
   * The encryption settings of Azure ML workspace.
   */
readonly encryption?: EncryptionProperty;

/**
   * Settings for feature store type workspace.
   */
readonly featureStoreSettings?: FeatureStoreSettings;

/**
   * The friendly name for this workspace. This name in mutable
   */
readonly friendlyName?: string;

/**
   * The flag to signal HBI data in the workspace and reduce diagnostic data collected by the service
   */
readonly hbiWorkspace?: bool;

/**
   * The compute name for image build
   */
readonly imageBuildCompute?: string;

/**
   * ARM id of the key vault associated with this workspace. This cannot be changed once the workspace has been created
   */
readonly keyVault?: string;

/**
   * Managed Network settings for a machine learning workspace.
   */
readonly managedNetwork?: ManagedNetworkSettings;

/**
   * The user assigned identity resource id that represents the workspace identity.
   */
readonly primaryUserAssignedIdentity?: string;

/**
   * Whether requests from Public Network are allowed.
   */
readonly publicNetworkAccess?: 'Disabled''Enabled';

/**
   * Settings for serverless compute created in the workspace
   */
readonly serverlessComputeSettings?: ServerlessComputeSettings;

/**
   * The service managed resource settings.
   */
readonly serviceManagedResourcesSettings?: ServiceManagedResourcesSettings;

/**
   * The list of shared private link resources in this workspace.
   */
readonly sharedPrivateLinkResources?: SharedPrivateLinkResource[];

/**
   * ARM id of the storage account associated with this workspace. This cannot be changed once the workspace has been created
   */
readonly storageAccount?: string;

/**
   * Enabling v1_legacy_mode may prevent you from using features provided by the v2 API.
   */
readonly v1LegacyMode?: bool;

/**
   * The identity that will be used to access the key vault for encryption at rest.
   */
readonly identity?: IdentityForCmk;

/**
   * Customer Key vault properties.
   */
readonly keyVaultProperties: EncryptionKeyVaultProperties;

/**
   * Indicates whether or not the encryption is enabled for the workspace.
   */
readonly status: 'Disabled''Enabled';

/**
   * The ArmId of the user assigned identity that will be used to access the customer managed key vault
   */
readonly userAssignedIdentity?: string;

/**
   * For future use - The client id of the identity which will be used to access key vault.
   */
readonly identityClientId?: string;

/**
   * Key vault uri to access the encryption key.
   */
readonly keyIdentifier: string;

/**
   * The ArmId of the keyVault where the customer owned encryption key is present.
   */
readonly keyVaultArmId: string;

/**
   * Compute runtime config for feature store type workspace.
   */
readonly computeRuntime?: ComputeRuntimeDto;

/**
   * 
   */
readonly offlineStoreConnectionName?: string;

/**
   * 
   */
readonly onlineStoreConnectionName?: string;

/**
   * 
   */
readonly sparkRuntimeVersion?: string;

/**
   * Isolation mode for the managed network of a machine learning workspace.
   */
readonly isolationMode?: 'AllowInternetOutbound''AllowOnlyApprovedOutbound''Disabled';

/**
   * Dictionary of {OutboundRule}
   */
readonly outboundRules?: ManagedNetworkSettingsOutboundRules;

/**
   * Status of the Provisioning for the managed network of a machine learning workspace.
   */
readonly status?: ManagedNetworkProvisionStatus;

/**
   * 
   */
readonly {customized property}?: OutboundRule;

/**
   * Category of a managed network Outbound Rule of a machine learning workspace.
   */
readonly category?: 'Recommended''Required''UserDefined';

/**
   * Type of a managed network Outbound Rule of a machine learning workspace.
   */
readonly status?: 'Active''Inactive';

/**
   * Set the object type
   */
readonly type: FQDNPrivateEndponumberServiceTag;

/**
   * Type of a managed network Outbound Rule of a machine learning workspace.
   */
readonly type: 'FQDN';

/**
   * 
   */
readonly destination?: string;

/**
   * Type of a managed network Outbound Rule of a machine learning workspace.
   */
readonly type: 'PrivateEndponumber';

/**
   * Private Endpoint destination for a Private Endpoint Outbound Rule for the managed network of a machine learning workspace.
   */
readonly destination?: PrivateEndponumberDestination;

/**
   * 
   */
readonly serviceResourceId?: string;

/**
   * 
   */
readonly sparkEnabled?: bool;

/**
   * Type of a managed network Outbound Rule of a machine learning workspace.
   */
readonly sparkStatus?: 'Active''Inactive';

/**
   * 
   */
readonly subresourceTarget?: string;

/**
   * Type of a managed network Outbound Rule of a machine learning workspace.
   */
readonly type: 'ServiceTag';

/**
   * Service Tag destination for a Service Tag Outbound Rule for the managed network of a machine learning workspace.
   */
readonly destination?: ServiceTagDestination;

/**
   * The action enum for networking rule.
   */
readonly action?: 'Allow''Deny';

/**
   * 
   */
readonly portRanges?: string;

/**
   * 
   */
readonly protocol?: string;

/**
   * 
   */
readonly serviceTag?: string;

/**
   * 
   */
readonly sparkReady?: bool;

/**
   * Status for the managed network of a machine learning workspace.
   */
readonly status?: 'Active''Inactive';

/**
   * The resource ID of an existing virtual network subnet in which serverless compute nodes should be deployed
   */
readonly serverlessComputeCustomSubnet?: string;

/**
   * The flag to signal if serverless compute nodes deployed in custom vNet would have no public IP addresses for a workspace with private endpoint
   */
readonly serverlessComputeNoPublicIP?: bool;

/**
   * The settings for the service managed cosmosdb account.
   */
readonly cosmosDb?: CosmosDbSettings;

/**
   * The throughput of the collections in cosmosdb database
   */
readonly collectionsThroughput?: number;

/**
   * The private link resource group id.
   */
readonly groupId?: string;

/**
   * The resource id that private link links to.
   */
readonly privateLinkResourceId?: string;

/**
   * Request message.
   */
readonly requestMessage?: string;

/**
   * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
   */
readonly status?: 'Approved''Disconnected''Pending''Rejected''Timeout';

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
