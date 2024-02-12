import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AlertsmanagementActionrulesProps extends IAzAPIBaseProps {

}

/**
 * AlertsmanagementActionrules resource
 */
export class AlertsmanagementActionrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AlertsmanagementActionrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AlertsManagement/actionRules@2021-08-08";
  }

  protected getResourceBody(props: AlertsmanagementActionrulesProps): string {
    return JSON.stringify(
        {properties: {actions: [{actionType: "string"}], conditions: [{field: "string", operator: "string", values: ["string"]}], description: "string", enabled: "${bool}", schedule: {effectiveFrom: "string", effectiveUntil: "string", recurrences: [{endTime: "string", startTime: "string", recurrenceType: "string"}], timeZone: "string"}, scopes: ["string"]}}
    );
  }
}
