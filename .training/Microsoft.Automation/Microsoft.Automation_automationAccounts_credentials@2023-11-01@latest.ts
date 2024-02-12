import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AutomationAutomationaccountsCredentialsProps extends IAzAPIBaseProps {

}

/**
 * AutomationAutomationaccountsCredentials resource
 */
export class AutomationAutomationaccountsCredentials extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AutomationAutomationaccountsCredentialsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Automation/automationAccounts/credentials@2023-11-01";
  }

  protected getResourceBody(props: AutomationAutomationaccountsCredentialsProps): string {
    return JSON.stringify(
        {properties: {description: "string", password: "string", userName: "string"}}
    );
  }
}
