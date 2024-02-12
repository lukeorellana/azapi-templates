import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface InsightsComponentsProactivedetectionconfigsProps extends IAzAPIBaseProps {

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
