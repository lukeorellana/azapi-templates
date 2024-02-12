import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevtestlabLabsUsersEnvironmentsProps extends IAzAPIBaseProps {

}

/**
 * DevtestlabLabsUsersEnvironments resource
 */
export class DevtestlabLabsUsersEnvironments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DevtestlabLabsUsersEnvironmentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DevTestLab/labs/users/environments@2018-09-15";
  }

  protected getResourceBody(props: DevtestlabLabsUsersEnvironmentsProps): string {
    return JSON.stringify(
        {properties: {armTemplateDisplayName: "string", deploymentProperties: {armTemplateId: "string", parameters: [{name: "string", value: "string"}]}}}
    );
  }
}
