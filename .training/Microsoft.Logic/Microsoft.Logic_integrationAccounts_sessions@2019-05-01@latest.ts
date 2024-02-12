import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface LogicIntegrationaccountsSessionsProps extends IAzAPIBaseProps {

}

/**
 * LogicIntegrationaccountsSessions resource
 */
export class LogicIntegrationaccountsSessions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: LogicIntegrationaccountsSessionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Logic/integrationAccounts/sessions@2019-05-01";
  }

  protected getResourceBody(props: LogicIntegrationaccountsSessionsProps): string {
    return JSON.stringify(
        {properties: {}}
    );
  }
}
