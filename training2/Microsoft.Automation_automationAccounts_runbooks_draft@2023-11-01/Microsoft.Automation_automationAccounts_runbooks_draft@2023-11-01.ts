import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AutomationAutomationaccountsRunbooksDraftProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:runbooks;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:runbooks;

/**
   * Gets or sets the parameters of the test job.
   */
readonly parameters?: TestJobCreateParameters;

/**
   * Gets or sets the runOn which specifies the group name where the job is to be executed.
   */
readonly runOn?: string;

/**
   * 
   */
readonly {customized property}?: string;
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
