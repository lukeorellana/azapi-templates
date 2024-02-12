import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ContainerserviceFleetsMembersProps extends IAzAPIBaseProps {

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
