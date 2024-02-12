import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevtestlabLabsUsersServicefabricsProps extends IAzAPIBaseProps {

}

/**
 * DevtestlabLabsUsersServicefabrics resource
 */
export class DevtestlabLabsUsersServicefabrics extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DevtestlabLabsUsersServicefabricsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DevTestLab/labs/users/servicefabrics@2018-09-15";
  }

  protected getResourceBody(props: DevtestlabLabsUsersServicefabricsProps): string {
    return JSON.stringify(
        {properties: {environmentId: "string", externalServiceFabricId: "string"}}
    );
  }
}
