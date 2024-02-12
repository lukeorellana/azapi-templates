import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ComputeHostgroupsProps extends IAzAPIBaseProps {

}

/**
 * ComputeHostgroups resource
 */
export class ComputeHostgroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ComputeHostgroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Compute/hostGroups@2023-03-01";
  }

  protected getResourceBody(props: ComputeHostgroupsProps): string {
    return JSON.stringify(
        {properties: {additionalCapabilities: {ultraSSDEnabled: "${bool}"}, platformFaultDomainCount: "${int}", supportAutomaticPlacement: "${bool}"}, zones: ["string"]}
    );
  }
}
