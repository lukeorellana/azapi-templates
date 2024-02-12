import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface LogicIntegrationaccountsProps extends IAzAPIBaseProps {

}

/**
 * LogicIntegrationaccounts resource
 */
export class LogicIntegrationaccounts extends AzAPIBase {
  constructor(scope: Construct, id: string, props: LogicIntegrationaccountsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Logic/integrationAccounts@2019-05-01";
  }

  protected getResourceBody(props: LogicIntegrationaccountsProps): string {
    return JSON.stringify(
        {properties: {integrationServiceEnvironment: {id: "string"}, state: "string"}, sku: {name: "string"}}
    );
  }
}
