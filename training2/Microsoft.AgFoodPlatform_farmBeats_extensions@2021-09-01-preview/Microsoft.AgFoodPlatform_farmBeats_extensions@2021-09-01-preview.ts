import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AgfoodplatformFarmbeatsExtensionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:farmBeats;

/**
   * Additional Api Properties.
   */
readonly additionalApiProperties?: object;

/**
   * Extension Version.
   */
readonly extensionVersion?: string;
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
