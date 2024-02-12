import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AutomationAutomationaccountsRunbooksDraftProps extends IAzAPIBaseProps {

}

/**
 * AutomationAutomationaccountsRunbooksDraft resource
 */
export class AutomationAutomationaccountsRunbooksDraft extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AutomationAutomationaccountsRunbooksDraftProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Automation/automationAccounts/runbooks/draft@2023-11-01";
  }

  protected getResourceBody(props: AutomationAutomationaccountsRunbooksDraftProps): string {
    return JSON.stringify(
        
    );
  }
}
