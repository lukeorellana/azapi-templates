import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface InsightsComponentsProactivedetectionconfigsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:components;

/**
   * Custom email addresses for this rule notifications
   */
readonly CustomEmails?: string[];

/**
   * A flag that indicates whether this rule is enabled by the user
   */
readonly Enabled?: bool;

/**
   * Static definitions of the ProactiveDetection configuration rule (same values for all components).
   */
readonly RuleDefinitions?: ApplicationInsightsComponentProactiveDetectionConfig...;

/**
   * A flag that indicated whether notifications on this rule should be sent to subscription owners
   */
readonly SendEmailsToSubscriptionOwners?: bool;

/**
   * The rule description
   */
readonly Description?: string;

/**
   * The rule name as it is displayed in UI
   */
readonly DisplayName?: string;

/**
   * URL which displays additional info about the proactive detection rule
   */
readonly HelpUrl?: string;

/**
   * A flag indicating whether the rule is enabled by default
   */
readonly IsEnabledByDefault?: bool;

/**
   * A flag indicating whether the rule is hidden (from the UI)
   */
readonly IsHidden?: bool;

/**
   * A flag indicating whether the rule is in preview
   */
readonly IsInPreview?: bool;

/**
   * A flag indicating whether email notifications are supported for detections for this rule
   */
readonly SupportsEmailNotifications?: bool;
}

/**
 * InsightsComponentsProactivedetectionconfigs resource
 */
export class InsightsComponentsProactivedetectionconfigs extends AzAPIBase {
  constructor(scope: Construct, id: string, props: InsightsComponentsProactivedetectionconfigsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Insights/components/ProactiveDetectionConfigs@2018-05-01-preview";
  }

  protected getResourceBody(props: InsightsComponentsProactivedetectionconfigsProps): string {
    return JSON.stringify(
        {properties: {CustomEmails: ["string"], Enabled: "${bool}", RuleDefinitions: {Description: "string", DisplayName: "string", HelpUrl: "string", IsEnabledByDefault: "${bool}", IsHidden: "${bool}", IsInPreview: "${bool}", Name: "string", SupportsEmailNotifications: "${bool}"}, SendEmailsToSubscriptionOwners: "${bool}"}}
    );
  }
}
