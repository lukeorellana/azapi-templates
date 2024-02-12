import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AutomationAutomationaccountsHybridrunbookworkergroupsHybridrunbookworkersProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:hybridRunbookWorkerGroups;

/**
   * Azure Resource Manager Id for a virtual machine.
   */
readonly vmResourceId?: string;
}

/**
 * AutomationAutomationaccountsHybridrunbookworkergroupsHybridrunbookworkers resource
 */
export class AutomationAutomationaccountsHybridrunbookworkergroupsHybridrunbookworkers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AutomationAutomationaccountsHybridrunbookworkergroupsHybridrunbookworkersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Automation/automationAccounts/hybridRunbookWorkerGroups/hybridRunbookWorkers@2023-11-01";
  }

  protected getResourceBody(props: AutomationAutomationaccountsHybridrunbookworkergroupsHybridrunbookworkersProps): string {
    return JSON.stringify(
        {properties: {vmResourceId: "string"}}
    );
  }
}
