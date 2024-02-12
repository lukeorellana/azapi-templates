import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface LogicIntegrationaccountsSessionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:numberegrationAccounts;

/**
   * The session content.
   */
readonly content?: For Bicep, you can use theany()function.;
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
