import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ContainerserviceFleetsProps extends IAzAPIBaseProps {

}

/**
 * ContainerserviceFleets resource
 */
export class ContainerserviceFleets extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ContainerserviceFleetsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ContainerService/fleets@2023-10-15";
  }

  protected getResourceBody(props: ContainerserviceFleetsProps): string {
    return JSON.stringify(
        {properties: {}}
    );
  }
}
