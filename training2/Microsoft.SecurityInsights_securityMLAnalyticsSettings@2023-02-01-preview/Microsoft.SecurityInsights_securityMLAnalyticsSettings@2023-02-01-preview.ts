import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityinsightsSecuritymlanalyticssettingsProps extends IAzAPIBaseProps {
/**
   * Set the object type
   */
readonly kind: Anomaly;

/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.;

/**
   * Etag of the azure resource
   */
readonly etag?: string;

/**
   * The kind of security ML Analytics Settings
   */
readonly kind: 'Anomaly';

/**
   * The anomaly settings version of the Anomaly security ml analytics settings that dictates whether job version gets updated or not.
   */
readonly anomalySettingsVersion?: number;

/**
   * The anomaly version of the AnomalySecurityMLAnalyticsSettings.
   */
readonly anomalyVersion: string;

/**
   * The customizable observations of the AnomalySecurityMLAnalyticsSettings.
   */
readonly customizableObservations?: For Bicep, you can use theany()function.;

/**
   * The description of the SecurityMLAnalyticsSettings.
   */
readonly description?: string;

/**
   * The display name for settings created by this SecurityMLAnalyticsSettings.
   */
readonly displayName: string;

/**
   * Determines whether this settings is enabled or disabled.
   */
readonly enabled: bool;

/**
   * The frequency that this SecurityMLAnalyticsSettings will be run.
   */
readonly frequency: string;

/**
   * Determines whether this anomaly security ml analytics settings is a default settings
   */
readonly isDefaultSettings: bool;

/**
   * The required data sources for this SecurityMLAnalyticsSettings
   */
readonly requiredDataConnectors?: SecurityMLAnalyticsSettingsDataSource[];

/**
   * The anomaly settings definition Id
   */
readonly settingsDefinitionId?: string;

/**
   * The anomaly SecurityMLAnalyticsSettings status
   */
readonly settingsStatus: 'Flighting''Production';

/**
   * The tactics of the SecurityMLAnalyticsSettings
   */
readonly tactics?: String array containing any of:'Collection''CommandAndControl''CredentialAccess''DefenseEvasion''Discovery''Execution''Exfiltration''Impact''ImpairProcessControl''InhibitResponseFunction''InitialAccess''LateralMovement''Persistence''PreAttack''PrivilegeEscalation''Reconnaissance''ResourceDevelopment';

/**
   * The techniques of the SecurityMLAnalyticsSettings
   */
readonly techniques?: string[];

/**
   * The connector id that provides the following data types
   */
readonly connectorId?: string;

/**
   * The data types used by the security ml analytics settings
   */
readonly dataTypes?: string[];
}

/**
 * SecurityinsightsSecuritymlanalyticssettings resource
 */
export class SecurityinsightsSecuritymlanalyticssettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityinsightsSecuritymlanalyticssettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.SecurityInsights/securityMLAnalyticsSettings@2023-02-01-preview";
  }

  protected getResourceBody(props: SecurityinsightsSecuritymlanalyticssettingsProps): string {
    return JSON.stringify(
        {kind: "string", etag: "string"}
    );
  }
}
