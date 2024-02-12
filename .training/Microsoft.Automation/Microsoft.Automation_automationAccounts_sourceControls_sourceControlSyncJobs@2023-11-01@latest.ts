import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AutomationAutomationaccountsSourcecontrolsSourcecontrolsyncjobsProps extends IAzAPIBaseProps {

}

/**
 * AutomationAutomationaccountsSourcecontrolsSourcecontrolsyncjobs resource
 */
export class AutomationAutomationaccountsSourcecontrolsSourcecontrolsyncjobs extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AutomationAutomationaccountsSourcecontrolsSourcecontrolsyncjobsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Automation/automationAccounts/sourceControls/sourceControlSyncJobs@2023-11-01";
  }

  protected getResourceBody(props: AutomationAutomationaccountsSourcecontrolsSourcecontrolsyncjobsProps): string {
    return JSON.stringify(
        {properties: {commitId: "string"}}
    );
  }
}
