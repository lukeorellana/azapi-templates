import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:workspaces;

/**
   * Specifies dataset type.
   */
readonly datasetType: 'file''tabular';

/**
   * 
   */
readonly parameters: DatasetCreateRequestParameters;

/**
   * 
   */
readonly registration: DatasetCreateRequestRegistration;

/**
   * Skip validation that ensures data can be loaded from the dataset before registration.
   */
readonly skipValidation?: bool;

/**
   * 
   */
readonly timeSeries?: DatasetCreateRequestTimeSeries;

/**
   * Header type.
   */
readonly header?: 'all_files_have_same_headers''combine_all_files_headers''no_headers''only_first_file_has_headers';

/**
   * Boolean to keep path information as column in the dataset. Defaults to False. This is useful when reading multiple files, and want to know which file a particular record originated from, or to keep useful information in file path.
   */
readonly includePath?: bool;

/**
   * The partition information of each path will be extracted into columns based on the specified format. Format part '{column_name}' creates string column, and '{column_name:yyyy/MM/dd/HH/mm/ss}' creates datetime column, where 'yyyy', 'MM', 'dd', 'HH', 'mm' and 'ss' are used to extract year, month, day, hour, minute and second for the datetime type. The format should start from the position of first partition key until the end of file path. For example, given the path '../USA/2019/01/01/data.parquet' where the partition is by country/region and time, partition_format='/{CountryOrRegion}/{PartitionDate:yyyy/MM/dd}/data.csv' creates a string column 'CountryOrRegion' with the value 'USA' and a datetime column 'PartitionDate' with the value '2019-01-01
   */
readonly partitionFormat?: string;

/**
   * 
   */
readonly path?: DatasetCreateRequestParametersPath;

/**
   * 
   */
readonly query?: DatasetCreateRequestParametersQuery;

/**
   * The separator used to split columns for 'delimited_files' sourceType.
   */
readonly separator?: string;

/**
   * Data source type.
   */
readonly sourceType?: 'delimited_files''json_lines_files''parquet_files';

/**
   * 
   */
readonly dataPath?: DatasetCreateRequestParametersPathDataPath;

/**
   * The Http URL.
   */
readonly httpUrl?: string;

/**
   * The datastore name.
   */
readonly datastoreName?: string;

/**
   * Path within the datastore.
   */
readonly relativePath?: string;

/**
   * The SQL/PostgreSQL/MySQL datastore name.
   */
readonly datastoreName?: string;

/**
   * SQL Quey.
   */
readonly query?: string;

/**
   * The description for the dataset.
   */
readonly description?: string;

/**
   * Column name to be used as CoarseGrainTimestamp. Can only be used if 'fineGrainTimestamp' is specified and cannot be same as 'fineGrainTimestamp'.
   */
readonly coarseGrainTimestamp?: string;

/**
   * Column name to be used as FineGrainTimestamp
   */
readonly fineGrainTimestamp?: string;
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
