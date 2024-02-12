import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AutomationAutomationaccountsVariablesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:automationAccounts;

/**
   * Gets or sets the description of the variable.
   */
readonly description?: string;

/**
   * Gets or sets the encrypted flag of the variable.
   */
readonly isEncrypted?: bool;

/**
   * Gets or sets the value of the variable.
   */
readonly value?: string;
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
