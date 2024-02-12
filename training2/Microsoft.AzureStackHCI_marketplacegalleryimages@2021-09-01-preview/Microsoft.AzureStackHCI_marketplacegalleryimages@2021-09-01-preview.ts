import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzurestackhciMarketplacegalleryimagesProps extends IAzAPIBaseProps {
/**
   * The extendedLocation of the resource.
   */
readonly extendedLocation?: ExtendedLocation;

/**
   * The type of the extended location.
   */
readonly type?: 'CustomLocation';

/**
   * Datasource for the gallery image when provisioning with cloud-init [Azure, NoCloud]
   */
readonly cloudInitDataSource?: 'Azure''NoCloud';

/**
   * Container Name for storage container
   */
readonly containerName?: string;

/**
   * The hypervisor generation of the Virtual Machine [V1, V2]
   */
readonly hyperVGeneration?: 'V1''V2';

/**
   * This is the gallery image definition identifier.
   */
readonly identifier?: GalleryImageIdentifier;

/**
   * operating system type that the gallery image uses. Expected to be linux or windows
   */
readonly osType?: 'Linux''Windows';

/**
   * name of the object to be used in moc
   */
readonly resourceName?: string;

/**
   * Specifies information about the gallery image version that you want to create or update.
   */
readonly version?: GalleryImageVersion;

/**
   * The name of the gallery image definition offer.
   */
readonly offer: string;

/**
   * The name of the gallery image definition publisher.
   */
readonly publisher: string;

/**
   * The name of the gallery image definition SKU.
   */
readonly sku: string;

/**
   * This is the storage profile of a Gallery Image Version.
   */
readonly storageProfile: GalleryImageVersionStorageProfile;

/**
   * This is the OS disk image.
   */
readonly osDiskImage?: GalleryOSDiskImage;
}

/**
 * AzurestackhciMarketplacegalleryimages resource
 */
export class AzurestackhciMarketplacegalleryimages extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AzurestackhciMarketplacegalleryimagesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AzureStackHCI/marketplacegalleryimages@2021-09-01-preview";
  }

  protected getResourceBody(props: AzurestackhciMarketplacegalleryimagesProps): string {
    return JSON.stringify(
        {properties: {cloudInitDataSource: "string", containerName: "string", hyperVGeneration: "string", identifier: {offer: "string", publisher: "string", sku: "string"}, osType: "string", resourceName: "string", version: {name: "string", properties: {storageProfile: {osDiskImage: {}}}}}, extendedLocation: {name: "string", type: "CustomLocation"}}
    );
  }
}
