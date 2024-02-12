import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ContainerserviceFleetsMembersProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:fleets;

/**
   * The ARM resource id of the cluster that joins the Fleet. Must be a valid Azure resource id. e.g.: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{clusterName}'.
   */
readonly clusterResourceId: string;

/**
   * The group this member belongs to for multi-cluster update management.
   */
readonly group?: stringConstranumbers:Min length = 1Max length = 50Pattern =^[a-z0-9]([-a-z0-9]*[a-z0-9])?$;
}

/**
 * ContainerserviceFleetsMembers resource
 */
export class ContainerserviceFleetsMembers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ContainerserviceFleetsMembersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ContainerService/fleets/members@2023-10-15";
  }

  protected getResourceBody(props: ContainerserviceFleetsMembersProps): string {
    return JSON.stringify(
        {properties: {clusterResourceId: "string", group: "string"}}
    );
  }
}
