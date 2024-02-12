import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityinsightsSettingsProps extends IAzAPIBaseProps {
/**
   * Set the object type
   */
readonly kind: AnomaliesEntityAnalyticsEyesOnUeba;

/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.;

/**
   * Etag of the azure resource
   */
readonly etag?: string;

/**
   * The kind of the setting
   */
readonly kind: 'Anomalies';

/**
   * The kind of the setting
   */
readonly kind: 'EntityAnalytics';

/**
   * The relevant entity providers that are synced
   */
readonly entityProviders?: String array containing any of:'ActiveDirectory''AzureActiveDirectory';

/**
   * The kind of the setting
   */
readonly kind: 'EyesOn';

/**
   * The kind of the setting
   */
readonly kind: 'Ueba';

/**
   * The relevant data sources that enriched by ueba
   */
readonly dataSources?: String array containing any of:'AuditLogs''AzureActivity''SecurityEvent''SigninLogs';
}

/**
 * SecurityinsightsSettings resource
 */
export class SecurityinsightsSettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityinsightsSettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.SecurityInsights/settings@2023-02-01-preview";
  }

  protected getResourceBody(props: SecurityinsightsSettingsProps): string {
    return JSON.stringify(
        {kind: "string", etag: "string"}
    );
  }
}
