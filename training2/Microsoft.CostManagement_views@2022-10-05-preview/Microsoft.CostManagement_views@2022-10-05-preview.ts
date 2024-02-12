import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.;

/**
   * eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
   */
readonly eTag?: string;

/**
   * Show costs accumulated over time.
   */
readonly accumulated?: 'false''true';

/**
   * Chart type of the main view in Cost Analysis. Required.
   */
readonly chart?: 'Area''GroupedColumn''Line''StackedColumn''Table';

/**
   * User input name of the view. Required.
   */
readonly displayName?: string;

/**
   * List of KPIs to show in Cost Analysis UI.
   */
readonly kpis?: KpiProperties[];

/**
   * Metric to use when displaying costs.
   */
readonly metric?: 'AHUB''ActualCost''AmortizedCost';

/**
   * Configuration of 3 sub-views in the Cost Analysis UI.
   */
readonly pivots?: PivotProperties[];

/**
   * Query body configuration. Required.
   */
readonly query?: ReportConfigDefinition;

/**
   * Cost Management scope to save the view on. This includes 'subscriptions/{subscriptionId}' for subscription scope, 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for BillingProfile scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/invoiceSections/{invoiceSectionId}' for InvoiceSection scope, 'providers/Microsoft.Management/managementGroups/{managementGroupId}' for Management Group scope, '/providers/Microsoft.CostManagement/externalBillingAccounts/{externalBillingAccountName}' for ExternalBillingAccount scope, and '/providers/Microsoft.CostManagement/externalSubscriptions/{externalSubscriptionName}' for ExternalSubscription scope.
   */
readonly scope?: string;

/**
   * show the KPI in the UI?
   */
readonly enabled?: bool;

/**
   * ID of resource related to metric (budget).
   */
readonly id?: string;

/**
   * KPI type (Forecast, Budget).
   */
readonly type?: 'Budget''Forecast';

/**
   * Data type to show in view.
   */
readonly type?: 'Dimension''TagKey';

/**
   * Has definition for data in this report config.
   */
readonly dataSet?: ReportConfigDataset;

/**
   * If true, report includes monetary commitment.
   */
readonly includeMonetaryCommitment?: bool;

/**
   * The time frame for pulling data for the report. If custom, then a specific time period must be provided.
   */
readonly timeframe: 'Custom''MonthToDate''WeekToDate''YearToDate';

/**
   * Has time period for pulling data for the report.
   */
readonly timePeriod?: ReportConfigTimePeriod;

/**
   * The type of the report. Usage represents actual usage, forecast represents forecasted data and UsageAndForecast represents both usage and forecasted data. Actual usage and forecasted data can be differentiated based on dates.
   */
readonly type: 'Usage';

/**
   * Dictionary of aggregation expression to use in the report. The key of each item in the dictionary is the alias for the aggregated column. Report can have up to 2 aggregation clauses.
   */
readonly aggregation?: object;

/**
   * Has configuration information for the data in the report. The configuration will be ignored if aggregation and grouping are provided.
   */
readonly configuration?: ReportConfigDatasetConfiguration;

/**
   * Has filter expression to use in the report.
   */
readonly filter?: ReportConfigFilter;

/**
   * The granularity of rows in the report.
   */
readonly granularity?: 'Daily''Monthly';

/**
   * Array of group by expression to use in the report. Report can have up to 2 group by clauses.
   */
readonly grouping?: ReportConfigGrouping[];

/**
   * Array of order by expression to use in the report.
   */
readonly sorting?: ReportConfigSorting[];

/**
   * Array of column names to be included in the report. Any valid report column name is allowed. If not provided, then report includes all columns.
   */
readonly columns?: string[];

/**
   * The logical "AND" expression. Must have at least 2 items.
   */
readonly and?: ReportConfigFilter[];

/**
   * Has comparison expression for a dimension
   */
readonly dimensions?: ReportConfigComparisonExpression;

/**
   * The logical "OR" expression. Must have at least 2 items.
   */
readonly or?: ReportConfigFilter[];

/**
   * The operator to use for comparison.
   */
readonly operator: 'Contains''In';

/**
   * Array of values to use for comparison
   */
readonly values: string[];

/**
   * Has type of the column to group.
   */
readonly type: 'Dimension''Tag';

/**
   * Direction of sort.
   */
readonly direction?: 'Ascending''Descending';

/**
   * The start date to pull data from.
   */
readonly from: string;

/**
   * The end date to pull data to.
   */
readonly to: string;
}

/**
 *  resource
 */
export class  extends AzAPIBase {
  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "";
  }

  protected getResourceBody(props: Props): string {
    return JSON.stringify(
        
    );
  }
}
