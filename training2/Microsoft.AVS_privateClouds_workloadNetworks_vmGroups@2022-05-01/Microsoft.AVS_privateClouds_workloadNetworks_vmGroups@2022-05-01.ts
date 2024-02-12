import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AvsPrivatecloudsWorkloadnetworksVmgroupsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type: workloadNetworks;

/**
   * Display name of the VM group.
   */
readonly displayName?: string;

/**
   * Virtual machine members of this group.
   */
readonly members?: string[];

/**
   * NSX revision number.
   */
readonly revision?: number;
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
