import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CostmanagementExportsProps extends IAzAPIBaseProps {
/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.;

/**
   * eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
   */
readonly eTag?: string;

/**
   * Has the definition for the export.
   */
readonly definition: ExportDefinition;

/**
   * Has delivery information for the export.
   */
readonly deliveryInfo: ExportDeliveryInfo;

/**
   * The format of the export being delivered. Currently only 'Csv' is supported.
   */
readonly format?: 'Csv';

/**
   * If set to true, exported data will be partitioned by size and placed in a blob directory together with a manifest file. Note: this option is currently available only for Microsoft Customer Agreement commerce scopes.
   */
readonly partitionData?: bool;

/**
   * If requested, has the most recent run history for the export.
   */
readonly runHistory?: ExportExecutionListResult;

/**
   * Has schedule information for the export.
   */
readonly schedule?: ExportSchedule;

/**
   * The definition for data in the export.
   */
readonly dataSet?: ExportDataset;

/**
   * The time frame for pulling data for the export. If custom, then a specific time period must be provided.
   */
readonly timeframe: 'BillingMonthToDate''Custom''MonthToDate''TheLastBillingMonth''TheLastMonth''WeekToDate';

/**
   * Has time period for pulling data for the export.
   */
readonly timePeriod?: ExportTimePeriod;

/**
   * The type of the export. Note that 'Usage' is equivalent to 'ActualCost' and is applicable to exports that do not yet provide data for charges or amortization for service reservations.
   */
readonly type: 'ActualCost''AmortizedCost''Usage';

/**
   * The export dataset configuration.
   */
readonly configuration?: ExportDatasetConfiguration;

/**
   * The granularity of rows in the export. Currently only 'Daily' is supported.
   */
readonly granularity?: 'Daily';

/**
   * Array of column names to be included in the export. If not provided then the export will include all available columns. The available columns can vary by customer channel (see examples).
   */
readonly columns?: string[];

/**
   * The start date for export data.
   */
readonly from: string;

/**
   * The end date for export data.
   */
readonly to: string;

/**
   * Has destination for the export being delivered.
   */
readonly destination: ExportDeliveryDestination;

/**
   * The name of the container where exports will be uploaded. If the container does not exist it will be created.
   */
readonly container: string;

/**
   * The resource id of the storage account where exports will be delivered. This is not required if a sasToken and storageAccount are specified.
   */
readonly resourceId?: string;

/**
   * The name of the directory where exports will be uploaded.
   */
readonly rootFolderPath?: string;

/**
   * A SAS token for the storage account. For a restricted set of Azure customers this together with storageAccount can be specified instead of resourceId. Note: the value returned by the API for this property will always be obfuscated. Returning this same obfuscated value will not result in the SAS token being updated. To update this value a new SAS token must be specified.
   */
readonly sasToken?: string;

/**
   * The storage account where exports will be uploaded. For a restricted set of Azure customers this together with sasToken can be specified instead of resourceId.
   */
readonly storageAccount?: string;

/**
   * The schedule recurrence.
   */
readonly recurrence?: 'Annually''Daily''Monthly''Weekly';

/**
   * Has start and end date of the recurrence. The start date must be in future. If present, the end date must be greater than start date.
   */
readonly recurrencePeriod?: ExportRecurrencePeriod;

/**
   * The status of the export's schedule. If 'Inactive', the export's schedule is paused.
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
 * CostmanagementExports resource
 */
export class CostmanagementExports extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CostmanagementExportsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.CostManagement/exports@2022-10-01";
  }

  protected getResourceBody(props: CostmanagementExportsProps): string {
    return JSON.stringify(
        {properties: {definition: {dataSet: {configuration: {columns: ["string"]}, granularity: "Daily"}, timeframe: "string", timePeriod: {from: "string", to: "string"}, type: "string"}, deliveryInfo: {destination: {container: "string", resourceId: "string", rootFolderPath: "string", sasToken: "string", storageAccount: "string"}}, format: "Csv", partitionData: "${bool}", runHistory: {}, schedule: {recurrence: "string", recurrencePeriod: {from: "string", to: "string"}, status: "string"}}, eTag: "string"}
    );
  }
}
