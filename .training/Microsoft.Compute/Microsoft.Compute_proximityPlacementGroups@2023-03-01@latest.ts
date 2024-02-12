import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ComputeProximityplacementgroupsProps extends IAzAPIBaseProps {

}

/**
 * ComputeProximityplacementgroups resource
 */
export class ComputeProximityplacementgroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ComputeProximityplacementgroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Compute/proximityPlacementGroups@2023-03-01";
  }

  protected getResourceBody(props: ComputeProximityplacementgroupsProps): string {
    return JSON.stringify(
        {properties: {colocationStatus: {code: "string", displayStatus: "string", level: "string", message: "string", time: "string"}, intent: {vmSizes: ["string"]}, proximityPlacementGroupType: "string"}, zones: ["string"]}
    );
  }
}
