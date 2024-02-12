import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevtestlabLabsUsersServicefabricsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:users;

/**
   * The resource id of the environment under which the service fabric resource is present
   */
readonly environmentId?: string;

/**
   * The backing service fabric resource's id
   */
readonly externalServiceFabricId?: string;
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
