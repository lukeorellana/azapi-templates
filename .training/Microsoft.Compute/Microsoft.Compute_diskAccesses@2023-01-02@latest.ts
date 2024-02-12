import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ComputeDiskaccessesProps extends IAzAPIBaseProps {

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
