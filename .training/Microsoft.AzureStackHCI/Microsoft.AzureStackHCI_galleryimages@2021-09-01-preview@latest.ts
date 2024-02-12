import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzurestackhciGalleryimagesProps extends IAzAPIBaseProps {

}

/**
 * AzurestackhciGalleryimages resource
 */
export class AzurestackhciGalleryimages extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AzurestackhciGalleryimagesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AzureStackHCI/galleryimages@2021-09-01-preview";
  }

  protected getResourceBody(props: AzurestackhciGalleryimagesProps): string {
    return JSON.stringify(
        {properties: {cloudInitDataSource: "string", containerName: "string", hyperVGeneration: "string", identifier: {offer: "string", publisher: "string", sku: "string"}, imagePath: "string", osType: "string", resourceName: "string", version: {name: "string", properties: {storageProfile: {osDiskImage: {}}}}}, extendedLocation: {name: "string", type: "CustomLocation"}}
    );
  }
}
