import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityAutomationsProps extends IAzAPIBaseProps {
/**
   * Kind of the resource
   */
readonly kind?: string;

/**
   * Entity tag is used for comparing two or more entities from the same requested resource.
   */
readonly etag?: string;

/**
   * A collection of the actions which are triggered if all the configured rules evaluations, within at least one rule set, are true.
   */
readonly actions?: AutomationAction[];

/**
   * The security automation description.
   */
readonly description?: string;

/**
   * Indicates whether the security automation is enabled.
   */
readonly isEnabled?: bool;

/**
   * A collection of scopes on which the security automations logic is applied. Supported scopes are the subscription itself or a resource group under that subscription. The automation will only apply on defined scopes.
   */
readonly scopes?: AutomationScope[];

/**
   * A collection of the source event types which evaluate the security automation set of rules.
   */
readonly sources?: AutomationSource[];

/**
   * Set the object type
   */
readonly actionType: EventHubLogicAppWorkspace;

/**
   * The type of the action that will be triggered by the Automation
   */
readonly actionType: 'EventHub';

/**
   * The target Event Hub connection string (it will not be included in any response).
   */
readonly connectionString?: string;

/**
   * The target Event Hub Azure Resource ID.
   */
readonly eventHubResourceId?: string;

/**
   * The type of the action that will be triggered by the Automation
   */
readonly actionType: 'LogicApp';

/**
   * The triggered Logic App Azure Resource ID. This can also reside on other subscriptions, given that you have permissions to trigger the Logic App
   */
readonly logicAppResourceId?: string;

/**
   * The Logic App trigger URI endpoint (it will not be included in any response).
   */
readonly uri?: string;

/**
   * The type of the action that will be triggered by the Automation
   */
readonly actionType: 'Workspace';

/**
   * The fully qualified Log Analytics Workspace Azure Resource ID.
   */
readonly workspaceResourceId?: string;

/**
   * The resources scope description.
   */
readonly description?: string;

/**
   * The resources scope path. Can be the subscription on which the automation is defined on or a resource group under that subscription (fully qualified Azure resource IDs).
   */
readonly scopePath?: string;

/**
   * A valid event source type.
   */
readonly eventSource?: 'Alerts''Assessments''AssessmentsSnapshot''RegulatoryComplianceAssessment''RegulatoryComplianceAssessmentSnapshot''SecureScoreControls''SecureScoreControlsSnapshot''SecureScores''SecureScoresSnapshot''SubAssessments''SubAssessmentsSnapshot';

/**
   * A set of rules which evaluate upon event interception. A logical disjunction is applied between defined rule sets (logical 'or').
   */
readonly ruleSets?: AutomationRuleSet[];

/**
   * 
   */
readonly rules?: AutomationTriggeringRule[];

/**
   * The expected value.
   */
readonly expectedValue?: string;

/**
   * A valid comparer operator to use. A case-insensitive comparison will be applied for String PropertyType.
   */
readonly operator?: 'Contains''EndsWith''Equals''GreaterThan''GreaterThanOrEqualTo''LesserThan''LesserThanOrEqualTo''NotEquals''StartsWith';

/**
   * The JPath of the entity model property that should be checked.
   */
readonly propertyJPath?: string;

/**
   * The data type of the compared operands (string, integer, floating point number or a boolean [true/false]]
   */
readonly propertyType?: 'Boolean''Integer''Number''String';
}

/**
 * SecurityAutomations resource
 */
export class SecurityAutomations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityAutomationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Security/automations@2019-01-01-preview";
  }

  protected getResourceBody(props: SecurityAutomationsProps): string {
    return JSON.stringify(
        {properties: {actions: [{actionType: "string"}], description: "string", isEnabled: "${bool}", scopes: [{description: "string", scopePath: "string"}], sources: [{eventSource: "string", ruleSets: [{rules: [{expectedValue: "string", operator: "string", propertyJPath: "string", propertyType: "string"}]}]}]}, kind: "string", etag: "string"}
    );
  }
}
