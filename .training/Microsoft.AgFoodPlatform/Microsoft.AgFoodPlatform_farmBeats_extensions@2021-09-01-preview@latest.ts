import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AgfoodplatformFarmbeatsExtensionsProps extends IAzAPIBaseProps {

}

/**
 * AgfoodplatformFarmbeatsExtensions resource
 */
export class AgfoodplatformFarmbeatsExtensions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AgfoodplatformFarmbeatsExtensionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AgFoodPlatform/farmBeats/extensions@2021-09-01-preview";
  }

  protected getResourceBody(props: AgfoodplatformFarmbeatsExtensionsProps): string {
    return JSON.stringify(
        {additionalApiProperties: {}, extensionVersion: "string"}
    );
  }
}
