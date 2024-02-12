import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CustomerinsightsHubsKpiProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:hubs;

/**
   * The aliases.
   */
readonly aliases?: KpiAlias[];

/**
   * The calculation window.
   */
readonly calculationWindow: 'Day''Hour''Lifetime''Month''Week';

/**
   * Name of calculation window field.
   */
readonly calculationWindowFieldName?: string;

/**
   * Localized description for the KPI.
   */
readonly description?: object;

/**
   * Localized display name for the KPI.
   */
readonly displayName?: object;

/**
   * The mapping entity type.
   */
readonly entityType: 'Interaction''None''Profile''Relationship';

/**
   * The mapping entity name.
   */
readonly entityTypeName: string;

/**
   * The computation expression for the KPI.
   */
readonly expression: string;

/**
   * The KPI extracts.
   */
readonly extracts?: KpiExtract[];

/**
   * The filter expression for the KPI.
   */
readonly filter?: string;

/**
   * The computation function for the KPI.
   */
readonly function: 'Avg''Count''CountDistinct''Last''Max''Min''None''Sum';

/**
   * the group by properties for the KPI.
   */
readonly groupBy?: string[];

/**
   * The KPI thresholds.
   */
readonly thresHolds?: KpiThresholds;

/**
   * The unit of measurement for the KPI.
   */
readonly unit?: string;

/**
   * KPI alias name.
   */
readonly aliasName: string;

/**
   * The expression.
   */
readonly expression: string;

/**
   * The expression.
   */
readonly expression: string;

/**
   * KPI extract name.
   */
readonly extractName: string;

/**
   * Whether or not the KPI is an increasing KPI.
   */
readonly increasingKpi: bool;

/**
   * The lower threshold limit.
   */
readonly lowerLimit: number;

/**
   * The upper threshold limit.
   */
readonly upperLimit: number;
}

/**
 * CustomerinsightsHubsKpi resource
 */
export class CustomerinsightsHubsKpi extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CustomerinsightsHubsKpiProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.CustomerInsights/hubs/kpi@2017-04-26";
  }

  protected getResourceBody(props: CustomerinsightsHubsKpiProps): string {
    return JSON.stringify(
        {properties: {aliases: [{aliasName: "string", expression: "string"}], calculationWindow: "string", calculationWindowFieldName: "string", description: {}, displayName: {}, entityType: "string", entityTypeName: "string", expression: "string", extracts: [{expression: "string", extractName: "string"}], filter: "string", function: "string", groupBy: ["string"], thresHolds: {increasingKpi: "${bool}", lowerLimit: "${int}", upperLimit: "${int}"}, unit: "string"}}
    );
  }
}
