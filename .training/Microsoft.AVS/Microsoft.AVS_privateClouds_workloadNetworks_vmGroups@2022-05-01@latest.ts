import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AvsPrivatecloudsWorkloadnetworksVmgroupsProps extends IAzAPIBaseProps {

}

/**
 * AvsPrivatecloudsWorkloadnetworksVmgroups resource
 */
export class AvsPrivatecloudsWorkloadnetworksVmgroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AvsPrivatecloudsWorkloadnetworksVmgroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AVS/privateClouds/workloadNetworks/vmGroups@2022-05-01";
  }

  protected getResourceBody(props: AvsPrivatecloudsWorkloadnetworksVmgroupsProps): string {
    return JSON.stringify(
        {properties: {displayName: "string", members: ["string"], revision: "${int}"}}
    );
  }
}
