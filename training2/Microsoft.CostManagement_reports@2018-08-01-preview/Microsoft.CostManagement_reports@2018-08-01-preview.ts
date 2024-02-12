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
   * Has definition for the report.
   */
readonly definition: ReportDefinition;

/**
   * Has delivery information for the report.
   */
readonly deliveryInfo: ReportDeliveryInfo;

/**
   * The format of the report being delivered.
   */
readonly format?: 'Csv';

/**
   * Has schedule information for the report.
   */
readonly schedule?: ReportSchedule;

/**
   * Has definition for data in this report.
   */
readonly dataset?: ReportDataset;

/**
   * The time frame for pulling data for the report. If custom, then a specific time period must be provided.
   */
readonly timeframe: 'Custom''MonthToDate''WeekToDate';

/**
   * Has time period for pulling data for the report.
   */
readonly timePeriod?: ReportTimePeriod;

/**
   * The type of the report.
   */
readonly type: 'Usage';

/**
   * Dictionary of aggregation expression to use in the report. The key of each item in the dictionary is the alias for the aggregated column. Report can have up to 2 aggregation clauses.
   */
readonly aggregation?: object;

/**
   * Has configuration information for the data in the report. The configuration will be ignored if aggregation and grouping are provided.
   */
readonly configuration?: ReportDatasetConfiguration;

/**
   * Has filter expression to use in the report.
   */
readonly filter?: ReportFilter;

/**
   * The granularity of rows in the report.
   */
readonly granularity?: 'Daily''Hourly';

/**
   * Array of group by expression to use in the report. Report can have up to 2 group by clauses.
   */
readonly grouping?: ReportGrouping[];

/**
   * Array of column names to be included in the report. Any valid report column name is allowed. If not provided, then report includes all columns.
   */
readonly columns?: string[];

/**
   * The logical "AND" expression. Must have at least 2 items.
   */
readonly and?: ReportFilter[];

/**
   * Has comparison expression for a dimension
   */
readonly dimension?: ReportComparisonExpression;

/**
   * The logical "NOT" expression.
   */
readonly not?: ReportFilter;

/**
   * The logical "OR" expression. Must have at least 2 items.
   */
readonly or?: ReportFilter[];

/**
   * Has comparison expression for a tag
   */
readonly tag?: ReportComparisonExpression;

/**
   * The operator to use for comparison.
   */
readonly operator: 'In';

/**
   * Array of values to use for comparison
   */
readonly values: string[];

/**
   * Has type of the column to group.
   */
readonly type: 'Dimension''Tag';

/**
   * The start date to pull data from.
   */
readonly from: string;

/**
   * The end date to pull data to.
   */
readonly to: string;

/**
   * Has destination for the report being delivered.
   */
readonly destination: ReportDeliveryDestination;

/**
   * The name of the container where reports will be uploaded.
   */
readonly container: string;

/**
   * The resource id of the storage account where reports will be delivered.
   */
readonly resourceId: string;

/**
   * The name of the directory where reports will be uploaded.
   */
readonly rootFolderPath?: string;

/**
   * The schedule recurrence.
   */
readonly recurrence: 'Annually''Daily''Monthly''Weekly';

/**
   * Has start and end date of the recurrence. The start date must be in future. If present, the end date must be greater than start date.
   */
readonly recurrencePeriod?: ReportRecurrencePeriod;

/**
   * The status of the schedule. Whether active or not. If inactive, the report's scheduled execution is paused.
   */
readonly status?: 'Active''Inactive';

/**
   * The start date of recurrence.
   */
readonly from: string;

/**
   * The end date of recurrence.
   */
readonly to?: string;
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
