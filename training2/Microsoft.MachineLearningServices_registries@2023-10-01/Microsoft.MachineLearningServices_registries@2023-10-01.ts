import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MachinelearningservicesRegistriesProps extends IAzAPIBaseProps {
/**
   * Sku details required for ARM contract for Autoscaling.
   */
readonly sku?: Sku;

/**
   * Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type.
   */
readonly kind?: string;

/**
   * Managed service identity (system assigned and/or user assigned identities)
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
   * Discovery URL for the Registry
   */
readonly discoveryUrl?: string;

/**
   * IntellectualPropertyPublisher for the registry
   */
readonly intellectualPropertyPublisher?: string;

/**
   * ResourceId of the managed RG if the registry has system created resources
   */
readonly managedResourceGroup?: ArmResourceId;

/**
   * MLFlow Registry URI for the Registry
   */
readonly mlFlowRegistryUri?: string;

/**
   * Is the Registry accessible from the internet?Possible values: "Enabled" or "Disabled"
   */
readonly publicNetworkAccess?: string;

/**
   * Details of each region the registry is in
   */
readonly regionDetails?: RegistryRegionArmDetails[];

/**
   * Private endpoint connections info used for pending connections in private link portal
   */
readonly registryPrivateEndpointConnections?: RegistryPrivateEndponumberConnection[];

/**
   * Arm ResourceId is in the format "/subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/providers/Microsoft.Storage/storageAccounts/{StorageAccountName}"or "/subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{AcrName}"
   */
readonly resourceId?: string;

/**
   * List of ACR accounts
   */
readonly acrDetails?: AcrDetails[];

/**
   * List of storage accounts
   */
readonly storageAccountDetails?: StorageAccountDetails[];

/**
   * Details of system created ACR account to be used for the Registry
   */
readonly systemCreatedAcrAccount?: SystemCreatedAcrAccount;

/**
   * Details of user created ACR account to be used for the Registry
   */
readonly userCreatedAcrAccount?: UserCreatedAcrAccount;

/**
   * Name of the ACR account
   */
readonly acrAccountName?: string;

/**
   * SKU of the ACR account
   */
readonly acrAccountSku?: string;

/**
   * This is populated once the ACR account is created.
   */
readonly armResourceId?: ArmResourceId;

/**
   * ARM ResourceId of a resource
   */
readonly armResourceId?: ArmResourceId;

/**
   * Details of system created storage account to be used for the registry
   */
readonly systemCreatedStorageAccount?: SystemCreatedStorageAccount;

/**
   * Details of user created storage account to be used for the registry
   */
readonly userCreatedStorageAccount?: UserCreatedStorageAccount;

/**
   * Public blob access allowed
   */
readonly allowBlobPublicAccess?: bool;

/**
   * This is populated once the storage account is created.
   */
readonly armResourceId?: ArmResourceId;

/**
   * HNS enabled for storage account
   */
readonly storageAccountHnsEnabled?: bool;

/**
   * Name of the storage account
   */
readonly storageAccountName?: string;

/**
   * Allowed values:"Standard_LRS","Standard_GRS","Standard_RAGRS","Standard_ZRS","Standard_GZRS","Standard_RAGZRS","Premium_LRS","Premium_ZRS"
   */
readonly storageAccountType?: string;

/**
   * ARM ResourceId of a resource
   */
readonly armResourceId?: ArmResourceId;

/**
   * This is the private endpoint connection name created on SRPFull resource id: /subscriptions/{subId}/resourceGroups/{rgName}/providers/Microsoft.MachineLearningServices/{resourceType}/{resourceName}/registryPrivateEndpointConnections/{peConnectionName}
   */
readonly id?: string;

/**
   * The group ids
   */
readonly groupIds?: string[];

/**
   * The PE network resource that is linked to this PE connection.
   */
readonly privateEndpoint?: PrivateEndponumberResource;

/**
   * One of null, "Succeeded", "Provisioning", "Failed". While not approved, it's null.
   */
readonly provisioningState?: string;

/**
   * The connection state.
   */
readonly registryPrivateLinkServiceConnectionState?: RegistryPrivateLinkServiceConnectionState;

/**
   * The subnetId that the private endpoint is connected to.
   */
readonly subnetArmId?: string;

/**
   * Some RP chose "None". Other RPs use this for region expansion.
   */
readonly actionsRequired?: string;

/**
   * User-defined message that, per NRP doc, may be used for approval-related message.
   */
readonly description?: string;

/**
   * Connection status of the service consumer with the service provider
   */
readonly status?: 'Approved''Disconnected''Pending''Rejected';

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
 * MachinelearningservicesRegistries resource
 */
export class MachinelearningservicesRegistries extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MachinelearningservicesRegistriesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.MachineLearningServices/registries@2023-10-01";
  }

  protected getResourceBody(props: MachinelearningservicesRegistriesProps): string {
    return JSON.stringify(
        {properties: {discoveryUrl: "string", intellectualPropertyPublisher: "string", managedResourceGroup: {resourceId: "string"}, mlFlowRegistryUri: "string", publicNetworkAccess: "string", regionDetails: [{acrDetails: [{systemCreatedAcrAccount: {acrAccountName: "string", acrAccountSku: "string", armResourceId: {resourceId: "string"}}, userCreatedAcrAccount: {armResourceId: {resourceId: "string"}}}], location: "string", storageAccountDetails: [{systemCreatedStorageAccount: {allowBlobPublicAccess: "${bool}", armResourceId: {resourceId: "string"}, storageAccountHnsEnabled: "${bool}", storageAccountName: "string", storageAccountType: "string"}, userCreatedStorageAccount: {armResourceId: {resourceId: "string"}}}]}], registryPrivateEndpointConnections: [{id: "string", location: "string", properties: {groupIds: ["string"], privateEndpoint: {subnetArmId: "string"}, provisioningState: "string", registryPrivateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}}]}, sku: {capacity: "${int}", family: "string", name: "string", size: "string", tier: "string"}, kind: "string"}
    );
  }
}
