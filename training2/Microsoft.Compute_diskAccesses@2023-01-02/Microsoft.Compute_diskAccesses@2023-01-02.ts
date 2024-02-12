import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ComputeDiskaccessesProps extends IAzAPIBaseProps {
/**
   * The extended location where the disk access will be created. Extended location cannot be changed.
   */
readonly extendedLocation?: ExtendedLocation;

/**
   * The type of the extended location.
   */
readonly type?: 'EdgeZone';
}

/**
 * ComputeDiskaccesses resource
 */
export class ComputeDiskaccesses extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ComputeDiskaccessesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Compute/diskAccesses@2023-01-02";
  }

  protected getResourceBody(props: ComputeDiskaccessesProps): string {
    return JSON.stringify(
        {properties: {}, extendedLocation: {name: "string", type: "EdgeZone"}}
    );
  }
}
