import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityinsightsAlertrulesProps extends IAzAPIBaseProps {
/**
   * Set the object type
   */
readonly kind: FusionMicrosoftSecurityIncidentCreationMLBehaviorAnalyticsNRTScheduledThreatIntelligence;

/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.;

/**
   * Etag of the azure resource
   */
readonly etag?: string;

/**
   * The kind of the alert rule
   */
readonly kind: 'Fusion';

/**
   * The Name of the alert rule template used to create this rule.
   */
readonly alertRuleTemplateName: string;

/**
   * Determines whether this alert rule is enabled or disabled.
   */
readonly enabled: bool;

/**
   * Configuration to exclude scenarios in fusion detection.
   */
readonly scenarioExclusionPatterns?: FusionScenarioExclusionPattern[];

/**
   * Configuration for all supported source signals in fusion detection.
   */
readonly sourceSettings?: FusionSourceSettings[];

/**
   * DateTime when scenario exclusion pattern is added in UTC.
   */
readonly dateAddedInUTC: string;

/**
   * Scenario exclusion pattern.
   */
readonly exclusionPattern: string;

/**
   * Determines whether this source signal is enabled or disabled in Fusion detection.
   */
readonly enabled: bool;

/**
   * Name of the Fusion source signal. Refer to Fusion alert rule template for supported values.
   */
readonly sourceName: string;

/**
   * Configuration for all source subtypes under this source signal consumed in fusion detection.
   */
readonly sourceSubTypes?: FusionSourceSubTypeSetting[];

/**
   * Determines whether this source subtype under source signal is enabled or disabled in Fusion detection.
   */
readonly enabled: bool;

/**
   * Severity configuration for a source subtype consumed in fusion detection.
   */
readonly severityFilters: FusionSubTypeSeverityFilter;

/**
   * The Name of the source subtype under a given source signal in Fusion detection. Refer to Fusion alert rule template for supported values.
   */
readonly sourceSubTypeName: string;

/**
   * Individual Severity configuration settings for a given source subtype consumed in Fusion detection.
   */
readonly filters?: FusionSubTypeSeverityFiltersItem[];

/**
   * Determines whether this severity is enabled or disabled for this source subtype consumed in Fusion detection.
   */
readonly enabled: bool;

/**
   * The Severity for a given source subtype consumed in Fusion detection.
   */
readonly severity: 'High''Informational''Low''Medium';

/**
   * The kind of the alert rule
   */
readonly kind: 'MicrosoftSecurityIncidentCreation';

/**
   * The Name of the alert rule template used to create this rule.
   */
readonly alertRuleTemplateName?: string;

/**
   * The description of the alert rule.
   */
readonly description?: string;

/**
   * The display name for alerts created by this alert rule.
   */
readonly displayName: string;

/**
   * the alerts' displayNames on which the cases will not be generated
   */
readonly displayNamesExcludeFilter?: string[];

/**
   * the alerts' displayNames on which the cases will be generated
   */
readonly displayNamesFilter?: string[];

/**
   * Determines whether this alert rule is enabled or disabled.
   */
readonly enabled: bool;

/**
   * The alerts' productName on which the cases will be generated
   */
readonly productFilter: 'Azure Active Directory Identity Protection''Azure Advanced Threat Protection''Azure Security Center for IoT''Azure Security Center''Microsoft Cloud App Security''Microsoft Defender Advanced Threat Protection''Office 365 Advanced Threat Protection';

/**
   * the alerts' severities on which the cases will be generated
   */
readonly severitiesFilter?: String array containing any of:'High''Informational''Low''Medium';

/**
   * The kind of the alert rule
   */
readonly kind: 'MLBehaviorAnalytics';

/**
   * The Name of the alert rule template used to create this rule.
   */
readonly alertRuleTemplateName: string;

/**
   * Determines whether this alert rule is enabled or disabled.
   */
readonly enabled: bool;

/**
   * The kind of the alert rule
   */
readonly kind: 'NRT';

/**
   * The alert details override settings
   */
readonly alertDetailsOverride?: AlertDetailsOverride;

/**
   * The Name of the alert rule template used to create this rule.
   */
readonly alertRuleTemplateName?: string;

/**
   * Dictionary of string key-value pairs of columns to be attached to the alert
   */
readonly customDetails?: object;

/**
   * The description of the alert rule.
   */
readonly description?: string;

/**
   * The display name for alerts created by this alert rule.
   */
readonly displayName: string;

/**
   * Determines whether this alert rule is enabled or disabled.
   */
readonly enabled: bool;

/**
   * Array of the entity mappings of the alert rule
   */
readonly entityMappings?: EntityMapping[];

/**
   * The event grouping settings.
   */
readonly eventGroupingSettings?: EventGroupingSettings;

/**
   * The settings of the incidents that created from alerts triggered by this analytics rule
   */
readonly incidentConfiguration?: IncidentConfiguration;

/**
   * The query that creates alerts for this rule.
   */
readonly query: string;

/**
   * Array of the sentinel entity mappings of the alert rule
   */
readonly sentinelEntitiesMappings?: SentinelEntityMapping[];

/**
   * The severity for alerts created by this alert rule.
   */
readonly severity: 'High''Informational''Low''Medium';

/**
   * The suppression (in ISO 8601 duration format) to wait since last time this alert rule been triggered.
   */
readonly suppressionDuration: string;

/**
   * Determines whether the suppression for this alert rule is enabled or disabled.
   */
readonly suppressionEnabled: bool;

/**
   * The tactics of the alert rule
   */
readonly tactics?: String array containing any of:'Collection''CommandAndControl''CredentialAccess''DefenseEvasion''Discovery''Execution''Exfiltration''Impact''ImpairProcessControl''InhibitResponseFunction''InitialAccess''LateralMovement''Persistence''PreAttack''PrivilegeEscalation''Reconnaissance''ResourceDevelopment';

/**
   * The techniques of the alert rule
   */
readonly techniques?: string[];

/**
   * The version of the alert rule template used to create this rule - in format {a.b.c}, where all are numbers, for example 0 {1.0.2}
   */
readonly templateVersion?: string;

/**
   * the format containing columns name(s) to override the alert description
   */
readonly alertDescriptionFormat?: string;

/**
   * the format containing columns name(s) to override the alert name
   */
readonly alertDisplayNameFormat?: string;

/**
   * List of additional dynamic properties to override
   */
readonly alertDynamicProperties?: AlertPropertyMapping[];

/**
   * the column name to take the alert severity from
   */
readonly alertSeverityColumnName?: string;

/**
   * the column name to take the alert tactics from
   */
readonly alertTacticsColumnName?: string;

/**
   * The V3 alert property
   */
readonly alertProperty?: 'AlertLink''ConfidenceLevel''ConfidenceScore''ExtendedLinks''ProductComponentName''ProductName''ProviderName''RemediationSteps''Techniques';

/**
   * the column name to use to override this property
   */
readonly value?: string;

/**
   * The V3 type of the mapped entity
   */
readonly entityType?: 'Account''AzureResource''CloudApplication''DNS''File''FileHash''Host''IP''MailCluster''MailMessage''Mailbox''Malware''Process''RegistryKey''RegistryValue''SecurityGroup''SubmissionMail''URL';

/**
   * array of field mappings for the given entity mapping
   */
readonly fieldMappings?: FieldMapping[];

/**
   * the column name to be mapped to the identifier
   */
readonly columnName?: string;

/**
   * the V3 identifier of the entity
   */
readonly identifier?: string;

/**
   * The event grouping aggregation kinds
   */
readonly aggregationKind?: 'AlertPerResult''SingleAlert';

/**
   * Create incidents from alerts triggered by this analytics rule
   */
readonly createIncident: bool;

/**
   * Set how the alerts that are triggered by this analytics rule, are grouped into incidents
   */
readonly groupingConfiguration?: GroupingConfiguration;

/**
   * Grouping enabled
   */
readonly enabled: bool;

/**
   * A list of alert details to group by (when matchingMethod is Selected)
   */
readonly groupByAlertDetails?: String array containing any of:'DisplayName''Severity';

/**
   * A list of custom details keys to group by (when matchingMethod is Selected). Only keys defined in the current alert rule may be used.
   */
readonly groupByCustomDetails?: string[];

/**
   * A list of entity types to group by (when matchingMethod is Selected). Only entities defined in the current alert rule may be used.
   */
readonly groupByEntities?: String array containing any of:'Account''AzureResource''CloudApplication''DNS''File''FileHash''Host''IP''MailCluster''MailMessage''Mailbox''Malware''Process''RegistryKey''RegistryValue''SecurityGroup''SubmissionMail''URL';

/**
   * Limit the group to alerts created within the lookback duration (in ISO 8601 duration format)
   */
readonly lookbackDuration: string;

/**
   * Grouping matching method. When method is Selected at least one of groupByEntities, groupByAlertDetails, groupByCustomDetails must be provided and not empty.
   */
readonly matchingMethod: 'AllEntities''AnyAlert''Selected';

/**
   * Re-open closed matching incidents
   */
readonly reopenClosedIncident: bool;

/**
   * the column name to be mapped to the SentinelEntities
   */
readonly columnName?: string;

/**
   * The kind of the alert rule
   */
readonly kind: 'Scheduled';

/**
   * The alert details override settings
   */
readonly alertDetailsOverride?: AlertDetailsOverride;

/**
   * The Name of the alert rule template used to create this rule.
   */
readonly alertRuleTemplateName?: string;

/**
   * Dictionary of string key-value pairs of columns to be attached to the alert
   */
readonly customDetails?: object;

/**
   * The description of the alert rule.
   */
readonly description?: string;

/**
   * The display name for alerts created by this alert rule.
   */
readonly displayName: string;

/**
   * Determines whether this alert rule is enabled or disabled.
   */
readonly enabled: bool;

/**
   * Array of the entity mappings of the alert rule
   */
readonly entityMappings?: EntityMapping[];

/**
   * The event grouping settings.
   */
readonly eventGroupingSettings?: EventGroupingSettings;

/**
   * The settings of the incidents that created from alerts triggered by this analytics rule
   */
readonly incidentConfiguration?: IncidentConfiguration;

/**
   * The query that creates alerts for this rule.
   */
readonly query?: string;

/**
   * The frequency (in ISO 8601 duration format) for this alert rule to run.
   */
readonly queryFrequency?: string;

/**
   * The period (in ISO 8601 duration format) that this alert rule looks at.
   */
readonly queryPeriod?: string;

/**
   * Array of the sentinel entity mappings of the alert rule
   */
readonly sentinelEntitiesMappings?: SentinelEntityMapping[];

/**
   * The severity for alerts created by this alert rule.
   */
readonly severity?: 'High''Informational''Low''Medium';

/**
   * The suppression (in ISO 8601 duration format) to wait since last time this alert rule been triggered.
   */
readonly suppressionDuration: string;

/**
   * Determines whether the suppression for this alert rule is enabled or disabled.
   */
readonly suppressionEnabled: bool;

/**
   * The tactics of the alert rule
   */
readonly tactics?: String array containing any of:'Collection''CommandAndControl''CredentialAccess''DefenseEvasion''Discovery''Execution''Exfiltration''Impact''ImpairProcessControl''InhibitResponseFunction''InitialAccess''LateralMovement''Persistence''PreAttack''PrivilegeEscalation''Reconnaissance''ResourceDevelopment';

/**
   * The techniques of the alert rule
   */
readonly techniques?: string[];

/**
   * The version of the alert rule template used to create this rule - in format {a.b.c}, where all are numbers, for example 0 {1.0.2}
   */
readonly templateVersion?: string;

/**
   * The operation against the threshold that triggers alert rule.
   */
readonly triggerOperator?: 'Equal''GreaterThan''LessThan''NotEqual';

/**
   * The threshold triggers this alert rule.
   */
readonly triggerThreshold?: number;

/**
   * The kind of the alert rule
   */
readonly kind: 'ThreatIntelligence';

/**
   * The Name of the alert rule template used to create this rule.
   */
readonly alertRuleTemplateName: string;

/**
   * Determines whether this alert rule is enabled or disabled.
   */
readonly enabled: bool;
}

/**
 * SecurityinsightsAlertrules resource
 */
export class SecurityinsightsAlertrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityinsightsAlertrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.SecurityInsights/alertRules@2023-02-01-preview";
  }

  protected getResourceBody(props: SecurityinsightsAlertrulesProps): string {
    return JSON.stringify(
        {kind: "string", etag: "string"}
    );
  }
}
