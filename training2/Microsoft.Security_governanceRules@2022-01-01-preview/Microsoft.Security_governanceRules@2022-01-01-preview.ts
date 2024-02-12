import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityGovernancerulesProps extends IAzAPIBaseProps {
/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.;

/**
   * The governance rule conditionSets - see examples
   */
readonly conditionSets: any[];

/**
   * Description of the governance rule
   */
readonly description?: string;

/**
   * Display name of the governance rule
   */
readonly displayName: string;

/**
   * Excluded scopes, filter out the descendants of the scope (on management scopes)
   */
readonly excludedScopes?: string[];

/**
   * The email notifications settings for the governance rule, states whether to disable notifications for mangers and owners
   */
readonly governanceEmailNotification?: GovernanceRuleEmailNotification;

/**
   * Defines whether the rule is management scope rule (master connector as a single scope or management scope)
   */
readonly includeMemberScopes?: bool;

/**
   * Defines whether the rule is active/inactive
   */
readonly isDisabled?: bool;

/**
   * Defines whether there is a grace period on the governance rule
   */
readonly isGracePeriod?: bool;

/**
   * The governance rule metadata
   */
readonly metadata?: GovernanceRuleMetadata;

/**
   * The owner source for the governance rule - e.g. Manually by user@contoso.com - see example
   */
readonly ownerSource: GovernanceRuleOwnerSource;

/**
   * Governance rule remediation timeframe - this is the time that will affect on the grace-period duration e.g. 7.00:00:00 - means 7 days
   */
readonly remediationTimeframe?: stringConstranumbers:Pattern =^[0-9]+\.[0-9]{2}:[0-9]{2}:[0-9]{2}$;

/**
   * The governance rule priority, priority to the lower number. Rules with the same priority on the same scope will not be allowed
   */
readonly rulePriority: number Constranumbers:Min value = 0Max value = 1000;

/**
   * The rule type of the governance rule, defines the source of the rule e.g. Integrated
   */
readonly ruleType: 'Integrated''ServiceNow';

/**
   * The governance rule source, what the rule affects, e.g. Assessments
   */
readonly sourceResourceType: 'Assessments';

/**
   * Defines whether manager email notifications are disabled
   */
readonly disableManagerEmailNotification?: bool;

/**
   * Defines whether owner email notifications are disabled
   */
readonly disableOwnerEmailNotification?: bool;

/**
   * The owner type for the governance rule owner source
   */
readonly type?: 'ByTag''Manually';

/**
   * The source value e.g. tag key like owner name or email address
   */
readonly value?: string;
}

/**
 * SecurityGovernancerules resource
 */
export class SecurityGovernancerules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityGovernancerulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Security/governanceRules@2022-01-01-preview";
  }

  protected getResourceBody(props: SecurityGovernancerulesProps): string {
    return JSON.stringify(
        {properties: {conditionSets: ["${object}"], description: "string", displayName: "string", excludedScopes: ["string"], governanceEmailNotification: {disableManagerEmailNotification: "${bool}", disableOwnerEmailNotification: "${bool}"}, includeMemberScopes: "${bool}", isDisabled: "${bool}", isGracePeriod: "${bool}", metadata: {}, ownerSource: {type: "string", value: "string"}, remediationTimeframe: "string", rulePriority: "${int}", ruleType: "string", sourceResourceType: "Assessments"}}
    );
  }
}
