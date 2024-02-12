import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ComputeProximityplacementgroupsProps extends IAzAPIBaseProps {
/**
   * Specifies the Availability Zone where virtual machine, virtual machine scale set or availability set associated with the  proximity placement group can be created.
   */
readonly zones?: string[];

/**
   * Describes colocation status of the Proximity Placement Group.
   */
readonly colocationStatus?: InstanceViewStatus;

/**
   * Specifies the user intent of the proximity placement group.
   */
readonly intent?: ProximityPlacementGroupPropertiesIntent;

/**
   * Specifies the type of the proximity placement group. Possible values are:Standard: Co-locate resources within an Azure region or Availability Zone.Ultra: For future use.
   */
readonly proximityPlacementGroupType?: 'Standard''Ultra';

/**
   * The status code.
   */
readonly code?: string;

/**
   * The short localizable label for the status.
   */
readonly displayStatus?: string;

/**
   * The level code.
   */
readonly level?: 'Error''Info''Warning';

/**
   * The detailed status message, including for alerts and error messages.
   */
readonly message?: string;

/**
   * The time of the status.
   */
readonly time?: string;

/**
   * Specifies possible sizes of virtual machines that can be created in the proximity placement group.
   */
readonly vmSizes?: string[];
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
