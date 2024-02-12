import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface LabservicesLabaccountsGalleryimagesProps extends IAzAPIBaseProps {

}

/**
 * LabservicesLabaccountsGalleryimages resource
 */
export class LabservicesLabaccountsGalleryimages extends AzAPIBase {
  constructor(scope: Construct, id: string, props: LabservicesLabaccountsGalleryimagesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.LabServices/labaccounts/galleryimages@2018-10-15";
  }

  protected getResourceBody(props: LabservicesLabaccountsGalleryimagesProps): string {
    return JSON.stringify(
        {properties: {isEnabled: "${bool}", isOverride: "${bool}", isPlanAuthorized: "${bool}", provisioningState: "string", uniqueIdentifier: "string"}}
    );
  }
}
