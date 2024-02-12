import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AutomationAutomationaccountsVariablesProps extends IAzAPIBaseProps {

}

/**
 * AutomationAutomationaccountsVariables resource
 */
export class AutomationAutomationaccountsVariables extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AutomationAutomationaccountsVariablesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Automation/automationAccounts/variables@2023-11-01";
  }

  protected getResourceBody(props: AutomationAutomationaccountsVariablesProps): string {
    return JSON.stringify(
        {properties: {description: "string", isEncrypted: "${bool}", value: "string"}}
    );
  }
}
