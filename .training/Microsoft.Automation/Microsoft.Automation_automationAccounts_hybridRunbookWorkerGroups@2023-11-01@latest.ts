import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AutomationAutomationaccountsHybridrunbookworkergroupsProps extends IAzAPIBaseProps {

}

/**
 * AutomationAutomationaccountsHybridrunbookworkergroups resource
 */
export class AutomationAutomationaccountsHybridrunbookworkergroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AutomationAutomationaccountsHybridrunbookworkergroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Automation/automationAccounts/hybridRunbookWorkerGroups@2023-11-01";
  }

  protected getResourceBody(props: AutomationAutomationaccountsHybridrunbookworkergroupsProps): string {
    return JSON.stringify(
        {properties: {credential: {name: "string"}}}
    );
  }
}
