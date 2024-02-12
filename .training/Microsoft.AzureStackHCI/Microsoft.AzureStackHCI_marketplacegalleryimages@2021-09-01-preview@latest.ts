import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzurestackhciMarketplacegalleryimagesProps extends IAzAPIBaseProps {

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
