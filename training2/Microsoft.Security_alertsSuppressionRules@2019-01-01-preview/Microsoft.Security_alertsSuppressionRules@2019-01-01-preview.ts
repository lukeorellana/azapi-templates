import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityAlertssuppressionrulesProps extends IAzAPIBaseProps {
/**
   * Type of the alert to automatically suppress. For all alert types, use '*'
   */
readonly alertType: string;

/**
   * Any comment regarding the rule
   */
readonly comment?: string;

/**
   * Expiration date of the rule, if value is not provided or provided as null there will no expiration at all
   */
readonly expirationDateUtc?: string;

/**
   * The reason for dismissing the alert
   */
readonly reason: string;

/**
   * Possible states of the rule
   */
readonly state: 'Disabled''Enabled''Expired';

/**
   * The suppression conditions
   */
readonly suppressionAlertsScope?: SuppressionAlertsScope;

/**
   * All the conditions inside need to be true in order to suppress the alert
   */
readonly allOf: ScopeElement[];

/**
   * The alert entity type to suppress by.
   */
readonly field?: string;

/**
   * 
   */
readonly {customized property}?: For Bicep, you can use theany()function.;
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
