import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface LabservicesLabplansImagesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:labPlans;

/**
   * The available regions of the image in the shared gallery.
   */
readonly availableRegions?: string[];

/**
   * Is the image enabled
   */
readonly enabledState?: 'Disabled''Enabled';
}

/**
 * LabservicesLabplansImages resource
 */
export class LabservicesLabplansImages extends AzAPIBase {
  constructor(scope: Construct, id: string, props: LabservicesLabplansImagesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.LabServices/labPlans/images@2022-08-01";
  }

  protected getResourceBody(props: LabservicesLabplansImagesProps): string {
    return JSON.stringify(
        {properties: {availableRegions: ["string"], enabledState: "string"}}
    );
  }
}
