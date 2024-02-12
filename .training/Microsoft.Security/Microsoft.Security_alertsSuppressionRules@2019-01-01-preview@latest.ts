import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityAlertssuppressionrulesProps extends IAzAPIBaseProps {

}

/**
 * SecurityAlertssuppressionrules resource
 */
export class SecurityAlertssuppressionrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityAlertssuppressionrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Security/alertsSuppressionRules@2019-01-01-preview";
  }

  protected getResourceBody(props: SecurityAlertssuppressionrulesProps): string {
    return JSON.stringify(
        {properties: {alertType: "string", comment: "string", expirationDateUtc: "string", reason: "string", state: "string", suppressionAlertsScope: {allOf: [{field: "string"}]}}}
    );
  }
}
