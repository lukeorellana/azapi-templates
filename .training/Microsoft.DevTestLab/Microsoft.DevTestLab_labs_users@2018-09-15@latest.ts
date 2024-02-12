import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevtestlabLabsUsersProps extends IAzAPIBaseProps {

}

/**
 * DevtestlabLabsUsers resource
 */
export class DevtestlabLabsUsers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DevtestlabLabsUsersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DevTestLab/labs/users@2018-09-15";
  }

  protected getResourceBody(props: DevtestlabLabsUsersProps): string {
    return JSON.stringify(
        {properties: {identity: {appId: "string", objectId: "string", principalId: "string", principalName: "string", tenantId: "string"}, secretStore: {keyVaultId: "string", keyVaultUri: "string"}}}
    );
  }
}
