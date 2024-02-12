import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityinsightsAlertrulesActionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:alertRules;

/**
   * Etag of the azure resource
   */
readonly etag?: string;

/**
   * Logic App Resource Id, /subscriptions/{my-subscription}/resourceGroups/{my-resource-group}/providers/Microsoft.Logic/workflows/{my-workflow-id}.
   */
readonly logicAppResourceId: string;

/**
   * Logic App Callback URL for this specific workflow.
   */
readonly triggerUri: string;
}

/**
 * SecurityinsightsAlertrulesActions resource
 */
export class SecurityinsightsAlertrulesActions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityinsightsAlertrulesActionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.SecurityInsights/alertRules/actions@2023-02-01-preview";
  }

  protected getResourceBody(props: SecurityinsightsAlertrulesActionsProps): string {
    return JSON.stringify(
        {properties: {logicAppResourceId: "string", triggerUri: "string"}, etag: "string"}
    );
  }
}
