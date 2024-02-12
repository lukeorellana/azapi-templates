import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzurestackhciVirtualharddisksProps extends IAzAPIBaseProps {
/**
   * The extendedLocation of the resource.
   */
readonly extendedLocation?: ExtendedLocation;

/**
   * The type of the extended location.
   */
readonly type?: 'CustomLocation';

/**
   * 
   */
readonly blockSizeBytes?: number;

/**
   * Storage ContainerID of the storage container to be used for VHD
   */
readonly containerId?: string;

/**
   * The format of the actual VHD file [vhd, vhdx]
   */
readonly diskFileFormat?: 'vhd''vhdx';

/**
   * diskSizeBytes - size of the disk in GB
   */
readonly diskSizeBytes?: number;

/**
   * Boolean for enabling dynamic sizing on the virtual hard disk
   */
readonly dynamic?: bool;

/**
   * The hypervisor generation of the Virtual Machine [V1, V2]
   */
readonly hyperVGeneration?: 'V1''V2';

/**
   * 
   */
readonly logicalSectorBytes?: number;

/**
   * 
   */
readonly physicalSectorBytes?: number;

/**
   * name of the object to be used in moc
   */
readonly resourceName?: string;
}

/**
 * AzurestackhciVirtualharddisks resource
 */
export class AzurestackhciVirtualharddisks extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AzurestackhciVirtualharddisksProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AzureStackHCI/virtualharddisks@2021-09-01-preview";
  }

  protected getResourceBody(props: AzurestackhciVirtualharddisksProps): string {
    return JSON.stringify(
        {properties: {blockSizeBytes: "${int}", containerId: "string", diskFileFormat: "string", diskSizeBytes: "${int}", dynamic: "${bool}", hyperVGeneration: "string", logicalSectorBytes: "${int}", physicalSectorBytes: "${int}", resourceName: "string"}, extendedLocation: {name: "string", type: "CustomLocation"}}
    );
  }
}
