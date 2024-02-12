import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface LabservicesLabaccountsGalleryimagesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:labaccounts;

/**
   * Indicates whether this gallery image is enabled.
   */
readonly isEnabled?: bool;

/**
   * Indicates whether this gallery has been overridden for this lab account
   */
readonly isOverride?: bool;

/**
   * Indicates if the plan has been authorized for programmatic deployment.
   */
readonly isPlanAuthorized?: bool;

/**
   * The provisioning status of the resource.
   */
readonly provisioningState?: string;

/**
   * The unique immutable identifier of a resource (Guid).
   */
readonly uniqueIdentifier?: string;
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
