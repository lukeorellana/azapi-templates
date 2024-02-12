import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ConnectedvmwarevsphereVcentersInventoryitemsProps extends IAzAPIBaseProps {
/**
   * Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
   */
readonly kind?: string;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:vcenters;

/**
   * Gets or sets the tracked resource id corresponding to the inventory resource.
   */
readonly managedResourceId?: string;

/**
   * Gets or sets the vCenter Managed Object name for the inventory item.
   */
readonly moName?: string;

/**
   * Gets or sets the MoRef (Managed Object Reference) ID for the inventory item.
   */
readonly moRefId?: string;

/**
   * Set the object type
   */
readonly inventoryType: ClusterDatastoreHostResourcePoolVirtualMachineVirtualMachineTemplateVirtualNetwork;

/**
   * They inventory type.
   */
readonly inventoryType: 'Cluster';

/**
   * They inventory type.
   */
readonly inventoryType: 'Datastore';

/**
   * Gets or sets Maximum capacity of this datastore, in GBs.
   */
readonly capacityGB?: number;

/**
   * Gets or sets Available space of this datastore, in GBs.
   */
readonly freeSpaceGB?: number;

/**
   * They inventory type.
   */
readonly inventoryType: 'Host';

/**
   * Parent host inventory resource details.
   */
readonly parent?: InventoryItemDetails;

/**
   * Gets or sets the inventory Item ID for the resource.
   */
readonly inventoryItemId?: string;

/**
   * The inventory type.
   */
readonly inventoryType?: 'Cluster''Datastore''Host''ResourcePool''VirtualMachine''VirtualMachineTemplate''VirtualNetwork';

/**
   * Gets or sets the vCenter Managed Object name for the resource.
   */
readonly moName?: string;

/**
   * They inventory type.
   */
readonly inventoryType: 'ResourcePool';

/**
   * Parent resourcePool inventory resource details.
   */
readonly parent?: InventoryItemDetails;

/**
   * They inventory type.
   */
readonly inventoryType: 'VirtualMachine';

/**
   * Cluster inventory resource details.
   */
readonly cluster?: InventoryItemDetails;

/**
   * Gets or sets the folder path of the vm.
   */
readonly folderPath?: string;

/**
   * Host inventory resource details.
   */
readonly host?: InventoryItemDetails;

/**
   * Gets or sets the instance uuid of the vm.
   */
readonly instanceUuid?: string;

/**
   * Gets or sets the nic ip addresses.
   */
readonly ipAddresses?: string[];

/**
   * Gets or sets os name.
   */
readonly osName?: string;

/**
   * Gets or sets the type of the os.
   */
readonly osType?: 'Linux''Other''Windows';

/**
   * ResourcePool inventory resource details.
   */
readonly resourcePool?: InventoryItemDetails;

/**
   * Gets or sets the SMBIOS UUID of the vm.
   */
readonly smbiosUuid?: string;

/**
   * They inventory type.
   */
readonly inventoryType: 'VirtualMachineTemplate';

/**
   * Gets or sets the folder path of the template.
   */
readonly folderPath?: string;

/**
   * Gets or sets memory size in MBs for the template.
   */
readonly memorySizeMB?: number;

/**
   * Gets or sets the number of cores per socket for the template.Defaults to 1 if unspecified.
   */
readonly numCoresPerSocket?: number;

/**
   * Gets or sets the number of vCPUs for the template.
   */
readonly numCPUs?: number;

/**
   * Gets or sets os name.
   */
readonly osName?: string;

/**
   * Gets or sets the type of the os.
   */
readonly osType?: 'Linux''Other''Windows';

/**
   * They inventory type.
   */
readonly inventoryType: 'VirtualNetwork';
}

/**
 * ConnectedvmwarevsphereVcentersInventoryitems resource
 */
export class ConnectedvmwarevsphereVcentersInventoryitems extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ConnectedvmwarevsphereVcentersInventoryitemsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ConnectedVMwarevSphere/vcenters/inventoryItems@2022-07-15-preview";
  }

  protected getResourceBody(props: ConnectedvmwarevsphereVcentersInventoryitemsProps): string {
    return JSON.stringify(
        {properties: {managedResourceId: "string", moName: "string", moRefId: "string", inventoryType: "string"}, kind: "string"}
    );
  }
}
