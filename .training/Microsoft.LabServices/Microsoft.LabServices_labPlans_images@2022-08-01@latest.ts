import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface LabservicesLabplansImagesProps extends IAzAPIBaseProps {

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
