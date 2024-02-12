import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityinsightsAlertrulesActionsProps extends IAzAPIBaseProps {

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
