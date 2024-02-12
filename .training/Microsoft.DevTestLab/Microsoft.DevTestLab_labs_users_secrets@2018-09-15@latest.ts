import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevtestlabLabsUsersSecretsProps extends IAzAPIBaseProps {

}

/**
 * DevtestlabLabsUsersSecrets resource
 */
export class DevtestlabLabsUsersSecrets extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DevtestlabLabsUsersSecretsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DevTestLab/labs/users/secrets@2018-09-15";
  }

  protected getResourceBody(props: DevtestlabLabsUsersSecretsProps): string {
    return JSON.stringify(
        {properties: {value: "string"}}
    );
  }
}
