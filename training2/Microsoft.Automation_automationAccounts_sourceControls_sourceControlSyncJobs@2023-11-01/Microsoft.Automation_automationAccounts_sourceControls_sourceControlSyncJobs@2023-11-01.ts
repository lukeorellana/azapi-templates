import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AutomationAutomationaccountsSourcecontrolsSourcecontrolsyncjobsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:sourceControls;

/**
   * The commit id of the source control sync job. If not syncing to a commitId, enter an empty string.
   */
readonly commitId: string;
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
