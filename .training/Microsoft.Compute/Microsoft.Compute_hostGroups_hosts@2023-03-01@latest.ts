import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ComputeHostgroupsHostsProps extends IAzAPIBaseProps {

}

/**
 * ComputeHostgroupsHosts resource
 */
export class ComputeHostgroupsHosts extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ComputeHostgroupsHostsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Compute/hostGroups/hosts@2023-03-01";
  }

  protected getResourceBody(props: ComputeHostgroupsHostsProps): string {
    return JSON.stringify(
        {properties: {autoReplaceOnFailure: "${bool}", licenseType: "string", platformFaultDomain: "${int}"}, sku: {capacity: "${int}", name: "string", tier: "string"}}
    );
  }
}
