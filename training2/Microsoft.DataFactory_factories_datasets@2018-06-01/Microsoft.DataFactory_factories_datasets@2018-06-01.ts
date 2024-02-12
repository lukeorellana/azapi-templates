import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatafactoryFactoriesDatasetsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:factories;

/**
   * List of tags that can be used for describing the Dataset.
   */
readonly annotations?: any[];

/**
   * Dataset description.
   */
readonly description?: string;

/**
   * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
   */
readonly folder?: DatasetFolder;

/**
   * Linked service reference.
   */
readonly linkedServiceName: LinkedServiceReference;

/**
   * Parameters for dataset.
   */
readonly parameters?: object;

/**
   * Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement.
   */
readonly schema?: For Bicep, you can use theany()function.;

/**
   * Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement.
   */
readonly structure?: For Bicep, you can use theany()function.;

/**
   * Set the object type
   */
readonly type: AmazonMWSObjectAmazonRdsForOracleTableAmazonRdsForSqlServerTableAmazonRedshiftTableAmazonS3ObjectAvroAzureBlobAzureBlobFSFileAzureDatabricksDeltaLakeDatasetAzureDataExplorerTableAzureDataLakeStoreFileAzureMariaDBTableAzureMySqlTableAzurePostgreSqlTableAzureSearchIndexAzureSqlDWTableAzureSqlMITableAzureSqlTableAzureTableBinaryCassandraTableCommonDataServiceForAppsEntityConcurObjectCosmosDbMongoDbApiCollectionCosmosDbSqlApiCollectionCouchbaseTableCustomDatasetDb2TableDelimitedTextDocumentDbCollectionDrillTableDynamicsAXResourceDynamicsCrmEntityDynamicsEntityEloquaObjectExcelFileShareGoogleAdWordsObjectGoogleBigQueryObjectGreenplumTableHBaseObjectHiveObjectHttpFileHubspotObjectImpalaObjectInformixTableJiraObjectJsonMagentoObjectMariaDBTableMarketoObjectMicrosoftAccessTableMongoDbAtlasCollectionMongoDbCollectionMongoDbV2CollectionMySqlTableNetezzaTableODataResourceOdbcTableOffice365TableOracleServiceCloudObjectOracleTableOrcParquetPaypalObjectPhoenixObjectPostgreSqlTablePrestoObjectQuickBooksObjectRelationalTableResponsysObjectRestResourceSalesforceMarketingCloudObjectSalesforceObjectSalesforceServiceCloudObjectSapBwCubeSapCloudForCustomerResourceSapEccResourceSapHanaTableSapOdpResourceSapOpenHubTableSapTableResourceServiceNowObjectSharePonumberOnlineListResourceShopifyObjectSnowflakeTableSparkObjectSqlServerTableSquareObjectSybaseTableTeradataTableVerticaTableWebTableXeroObjectXmlZohoObject;

/**
   * Arguments for LinkedService.
   */
readonly parameters?: object;

/**
   * Reference LinkedService name.
   */
readonly referenceName: string;

/**
   * Linked service reference type.
   */
readonly type: 'LinkedServiceReference';

/**
   * Type of dataset.
   */
readonly type: 'AmazonMWSObject';

/**
   * Properties specific to this dataset type.
   */
readonly typeProperties?: GenericDatasetTypeProperties;

/**
   * The table name. Type: string (or Expression with resultType string).
   */
readonly tableName?: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'AmazonRdsForOracleTable';

/**
   * AmazonRdsForOracle dataset properties.
   */
readonly typeProperties?: AmazonRdsForOracleTableDatasetTypeProperties;

/**
   * The schema name of the AmazonRdsForOracle database. Type: string (or Expression with resultType string).
   */
readonly schema?: For Bicep, you can use theany()function.;

/**
   * The table name of the AmazonRdsForOracle database. Type: string (or Expression with resultType string).
   */
readonly table?: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'AmazonRdsForSqlServerTable';

/**
   * The Amazon RDS for SQL Server dataset properties.
   */
readonly typeProperties?: AmazonRdsForSqlServerTableDatasetTypeProperties;

/**
   * The schema name of the SQL Server dataset. Type: string (or Expression with resultType string).
   */
readonly schema?: For Bicep, you can use theany()function.;

/**
   * The table name of the SQL Server dataset. Type: string (or Expression with resultType string).
   */
readonly table?: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'AmazonRedshiftTable';

/**
   * Amazon Redshift table dataset properties.
   */
readonly typeProperties?: AmazonRedshiftTableDatasetTypeProperties;

/**
   * The Amazon Redshift schema name. Type: string (or Expression with resultType string).
   */
readonly schema?: For Bicep, you can use theany()function.;

/**
   * The Amazon Redshift table name. Type: string (or Expression with resultType string).
   */
readonly table?: For Bicep, you can use theany()function.;

/**
   * This property will be retired. Please consider using schema + table properties instead.
   */
readonly tableName?: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'AmazonS3Object';

/**
   * Amazon S3 dataset properties.
   */
readonly typeProperties: AmazonS3DatasetTypeProperties;

/**
   * The name of the Amazon S3 bucket. Type: string (or Expression with resultType string).
   */
readonly bucketName: For Bicep, you can use theany()function.;

/**
   * The data compression method used for the Amazon S3 object.
   */
readonly compression?: DatasetCompression;

/**
   * The format of files.
   */
readonly format?: DatasetStorageFormat;

/**
   * The key of the Amazon S3 object. Type: string (or Expression with resultType string).
   */
readonly key?: For Bicep, you can use theany()function.;

/**
   * The end of S3 object's modified datetime. Type: string (or Expression with resultType string).
   */
readonly modifiedDatetimeEnd?: For Bicep, you can use theany()function.;

/**
   * The start of S3 object's modified datetime. Type: string (or Expression with resultType string).
   */
readonly modifiedDatetimeStart?: For Bicep, you can use theany()function.;

/**
   * The prefix filter for the S3 object name. Type: string (or Expression with resultType string).
   */
readonly prefix?: For Bicep, you can use theany()function.;

/**
   * The version for the S3 object. Type: string (or Expression with resultType string).
   */
readonly version?: For Bicep, you can use theany()function.;

/**
   * The dataset compression level. Type: string (or Expression with resultType string).
   */
readonly level?: For Bicep, you can use theany()function.;

/**
   * Type of dataset compression. Type: string (or Expression with resultType string).
   */
readonly type: For Bicep, you can use theany()function.;

/**
   * Deserializer. Type: string (or Expression with resultType string).
   */
readonly deserializer?: For Bicep, you can use theany()function.;

/**
   * Serializer. Type: string (or Expression with resultType string).
   */
readonly serializer?: For Bicep, you can use theany()function.;

/**
   * Set the object type
   */
readonly type: AvroFormatJsonFormatOrcFormatParquetFormatTextFormat;

/**
   * Type of dataset storage format.
   */
readonly type: 'AvroFormat';

/**
   * Type of dataset storage format.
   */
readonly type: 'JsonFormat';

/**
   * The code page name of the preferred encoding. If not provided, the default value is 'utf-8', unless the byte order mark (BOM) denotes another Unicode encoding. The full list of supported values can be found in the 'Name' column of the table of encodings in the following reference:https://go.microsoft.com/fwlink/?linkid=861078. Type: string (or Expression with resultType string).
   */
readonly encodingName?: For Bicep, you can use theany()function.;

/**
   * File pattern of JSON. To be more specific, the way of separating a collection of JSON objects. The default value is 'setOfObjects'. It is case-sensitive.
   */
readonly filePattern?: For Bicep, you can use theany()function.;

/**
   * The JSONPath of the JSON array element to be flattened. Example: "$.ArrayPath". Type: string (or Expression with resultType string).
   */
readonly jsonNodeReference?: For Bicep, you can use theany()function.;

/**
   * The JSONPath definition for each column mapping with a customized column name to extract data from JSON file. For fields under root object, start with "$"; for fields inside the array chosen by jsonNodeReference property, start from the array element. Example: {"Column1": "$.Column1Path", "Column2": "Column2PathInArray"}. Type: object (or Expression with resultType object).
   */
readonly jsonPathDefinition?: For Bicep, you can use theany()function.;

/**
   * The character used to separate nesting levels. Default value is '.' (dot). Type: string (or Expression with resultType string).
   */
readonly nestingSeparator?: For Bicep, you can use theany()function.;

/**
   * Type of dataset storage format.
   */
readonly type: 'OrcFormat';

/**
   * Type of dataset storage format.
   */
readonly type: 'ParquetFormat';

/**
   * Type of dataset storage format.
   */
readonly type: 'TextFormat';

/**
   * The column delimiter. Type: string (or Expression with resultType string).
   */
readonly columnDelimiter?: For Bicep, you can use theany()function.;

/**
   * The code page name of the preferred encoding. If miss, the default value is ÎÃÂ£utf-8ÎÃÂ¥, unless BOM denotes another Unicode encoding. Refer to the ÎÃÂ£NameÎÃÂ¥ column of the table in the following link to set supported values:https://msdn.microsoft.com/library/system.text.encoding.aspx. Type: string (or Expression with resultType string).
   */
readonly encodingName?: For Bicep, you can use theany()function.;

/**
   * The escape character. Type: string (or Expression with resultType string).
   */
readonly escapeChar?: For Bicep, you can use theany()function.;

/**
   * When used as input, treat the first row of data as headers. When used as output,write the headers into the output as the first row of data. The default value is false. Type: boolean (or Expression with resultType boolean).
   */
readonly firstRowAsHeader?: For Bicep, you can use theany()function.;

/**
   * The null value string. Type: string (or Expression with resultType string).
   */
readonly nullValue?: For Bicep, you can use theany()function.;

/**
   * The quote character. Type: string (or Expression with resultType string).
   */
readonly quoteChar?: For Bicep, you can use theany()function.;

/**
   * The row delimiter. Type: string (or Expression with resultType string).
   */
readonly rowDelimiter?: For Bicep, you can use theany()function.;

/**
   * The number of lines/rows to be skipped when parsing text files. The default value is 0. Type: integer (or Expression with resultType integer).
   */
readonly skipLineCount?: For Bicep, you can use theany()function.;

/**
   * Treat empty column values in the text file as null. The default value is true. Type: boolean (or Expression with resultType boolean).
   */
readonly treatEmptyAsNull?: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'Avro';

/**
   * Avro dataset properties.
   */
readonly typeProperties?: AvroDatasetTypeProperties;

/**
   * The data avroCompressionCodec. Type: string (or Expression with resultType string).
   */
readonly avroCompressionCodec?: For Bicep, you can use theany()function.;

/**
   * 
   */
readonly avroCompressionLevel?: number;

/**
   * Specify the file name of dataset. Type: string (or Expression with resultType string).
   */
readonly fileName?: For Bicep, you can use theany()function.;

/**
   * Specify the folder path of dataset. Type: string (or Expression with resultType string)
   */
readonly folderPath?: For Bicep, you can use theany()function.;

/**
   * Set the object type
   */
readonly type: AmazonS3CompatibleLocationAmazonS3LocationAzureBlobFSLocationAzureBlobStorageLocationAzureDataLakeStoreLocationAzureFileStorageLocationFileServerLocationFtpServerLocationGoogleCloudStorageLocationHdfsLocationHttpServerLocationOracleCloudStorageLocationSftpLocation;

/**
   * Type of dataset storage location.
   */
readonly type: 'AmazonS3CompatibleLocation';

/**
   * Specify the bucketName of Amazon S3 Compatible. Type: string (or Expression with resultType string)
   */
readonly bucketName?: For Bicep, you can use theany()function.;

/**
   * Specify the version of Amazon S3 Compatible. Type: string (or Expression with resultType string).
   */
readonly version?: For Bicep, you can use theany()function.;

/**
   * Type of dataset storage location.
   */
readonly type: 'AmazonS3Location';

/**
   * Specify the bucketName of amazon S3. Type: string (or Expression with resultType string)
   */
readonly bucketName?: For Bicep, you can use theany()function.;

/**
   * Specify the version of amazon S3. Type: string (or Expression with resultType string).
   */
readonly version?: For Bicep, you can use theany()function.;

/**
   * Type of dataset storage location.
   */
readonly type: 'AzureBlobFSLocation';

/**
   * Specify the fileSystem of azure blobFS. Type: string (or Expression with resultType string).
   */
readonly fileSystem?: For Bicep, you can use theany()function.;

/**
   * Type of dataset storage location.
   */
readonly type: 'AzureBlobStorageLocation';

/**
   * Specify the container of azure blob. Type: string (or Expression with resultType string).
   */
readonly container?: For Bicep, you can use theany()function.;

/**
   * Type of dataset storage location.
   */
readonly type: 'AzureDataLakeStoreLocation';

/**
   * Type of dataset storage location.
   */
readonly type: 'AzureFileStorageLocation';

/**
   * Type of dataset storage location.
   */
readonly type: 'FileServerLocation';

/**
   * Type of dataset storage location.
   */
readonly type: 'FtpServerLocation';

/**
   * Type of dataset storage location.
   */
readonly type: 'GoogleCloudStorageLocation';

/**
   * Specify the bucketName of Google Cloud Storage. Type: string (or Expression with resultType string)
   */
readonly bucketName?: For Bicep, you can use theany()function.;

/**
   * Specify the version of Google Cloud Storage. Type: string (or Expression with resultType string).
   */
readonly version?: For Bicep, you can use theany()function.;

/**
   * Type of dataset storage location.
   */
readonly type: 'HdfsLocation';

/**
   * Type of dataset storage location.
   */
readonly type: 'HttpServerLocation';

/**
   * Specify the relativeUrl of http server. Type: string (or Expression with resultType string)
   */
readonly relativeUrl?: For Bicep, you can use theany()function.;

/**
   * Type of dataset storage location.
   */
readonly type: 'OracleCloudStorageLocation';

/**
   * Specify the bucketName of Oracle Cloud Storage. Type: string (or Expression with resultType string)
   */
readonly bucketName?: For Bicep, you can use theany()function.;

/**
   * Specify the version of Oracle Cloud Storage. Type: string (or Expression with resultType string).
   */
readonly version?: For Bicep, you can use theany()function.;

/**
   * Type of dataset storage location.
   */
readonly type: 'SftpLocation';

/**
   * Type of dataset.
   */
readonly type: 'AzureBlob';

/**
   * Azure Blob dataset properties.
   */
readonly typeProperties?: AzureBlobDatasetTypeProperties;

/**
   * The data compression method used for the blob storage.
   */
readonly compression?: DatasetCompression;

/**
   * The name of the Azure Blob. Type: string (or Expression with resultType string).
   */
readonly fileName?: For Bicep, you can use theany()function.;

/**
   * The path of the Azure Blob storage. Type: string (or Expression with resultType string).
   */
readonly folderPath?: For Bicep, you can use theany()function.;

/**
   * The format of the Azure Blob storage.
   */
readonly format?: DatasetStorageFormat;

/**
   * The end of Azure Blob's modified datetime. Type: string (or Expression with resultType string).
   */
readonly modifiedDatetimeEnd?: For Bicep, you can use theany()function.;

/**
   * The start of Azure Blob's modified datetime. Type: string (or Expression with resultType string).
   */
readonly modifiedDatetimeStart?: For Bicep, you can use theany()function.;

/**
   * The root of blob path. Type: string (or Expression with resultType string).
   */
readonly tableRootLocation?: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'AzureBlobFSFile';

/**
   * Azure Data Lake Storage Gen2 dataset properties.
   */
readonly typeProperties?: AzureBlobFSDatasetTypeProperties;

/**
   * The data compression method used for the blob storage.
   */
readonly compression?: DatasetCompression;

/**
   * The name of the Azure Data Lake Storage Gen2. Type: string (or Expression with resultType string).
   */
readonly fileName?: For Bicep, you can use theany()function.;

/**
   * The path of the Azure Data Lake Storage Gen2 storage. Type: string (or Expression with resultType string).
   */
readonly folderPath?: For Bicep, you can use theany()function.;

/**
   * The format of the Azure Data Lake Storage Gen2 storage.
   */
readonly format?: DatasetStorageFormat;

/**
   * Type of dataset.
   */
readonly type: 'AzureDatabricksDeltaLakeDataset';

/**
   * Properties specific to this dataset type.
   */
readonly typeProperties?: AzureDatabricksDeltaLakeDatasetTypeProperties;

/**
   * The database name of delta table. Type: string (or Expression with resultType string).
   */
readonly database?: For Bicep, you can use theany()function.;

/**
   * The name of delta table. Type: string (or Expression with resultType string).
   */
readonly table?: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'AzureDataExplorerTable';

/**
   * Azure Data Explorer (Kusto) dataset properties.
   */
readonly typeProperties: AzureDataExplorerDatasetTypeProperties;

/**
   * The table name of the Azure Data Explorer database. Type: string (or Expression with resultType string).
   */
readonly table?: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'AzureDataLakeStoreFile';

/**
   * Azure Data Lake Store dataset properties.
   */
readonly typeProperties?: AzureDataLakeStoreDatasetTypeProperties;

/**
   * The data compression method used for the item(s) in the Azure Data Lake Store.
   */
readonly compression?: DatasetCompression;

/**
   * The name of the file in the Azure Data Lake Store. Type: string (or Expression with resultType string).
   */
readonly fileName?: For Bicep, you can use theany()function.;

/**
   * Path to the folder in the Azure Data Lake Store. Type: string (or Expression with resultType string).
   */
readonly folderPath?: For Bicep, you can use theany()function.;

/**
   * The format of the Data Lake Store.
   */
readonly format?: DatasetStorageFormat;

/**
   * Type of dataset.
   */
readonly type: 'AzureMariaDBTable';

/**
   * Properties specific to this dataset type.
   */
readonly typeProperties?: GenericDatasetTypeProperties;

/**
   * Type of dataset.
   */
readonly type: 'AzureMySqlTable';

/**
   * Azure MySQL database dataset properties.
   */
readonly typeProperties: AzureMySqlTableDatasetTypeProperties;

/**
   * The name of Azure MySQL database table. Type: string (or Expression with resultType string).
   */
readonly table?: For Bicep, you can use theany()function.;

/**
   * The Azure MySQL database table name. Type: string (or Expression with resultType string).
   */
readonly tableName?: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'AzurePostgreSqlTable';

/**
   * Properties specific to this dataset type.
   */
readonly typeProperties?: AzurePostgreSqlTableDatasetTypeProperties;

/**
   * The schema name of the Azure PostgreSQL database. Type: string (or Expression with resultType string).
   */
readonly schema?: For Bicep, you can use theany()function.;

/**
   * The table name of the Azure PostgreSQL database. Type: string (or Expression with resultType string).
   */
readonly table?: For Bicep, you can use theany()function.;

/**
   * The table name of the Azure PostgreSQL database which includes both schema and table. Type: string (or Expression with resultType string).
   */
readonly tableName?: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'AzureSearchIndex';

/**
   * Properties specific to this dataset type.
   */
readonly typeProperties: AzureSearchIndexDatasetTypeProperties;

/**
   * The name of the Azure Search Index. Type: string (or Expression with resultType string).
   */
readonly indexName: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'AzureSqlDWTable';

/**
   * Azure SQL Data Warehouse dataset properties.
   */
readonly typeProperties?: AzureSqlDWTableDatasetTypeProperties;

/**
   * The schema name of the Azure SQL Data Warehouse. Type: string (or Expression with resultType string).
   */
readonly schema?: For Bicep, you can use theany()function.;

/**
   * The table name of the Azure SQL Data Warehouse. Type: string (or Expression with resultType string).
   */
readonly table?: For Bicep, you can use theany()function.;

/**
   * This property will be retired. Please consider using schema + table properties instead.
   */
readonly tableName?: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'AzureSqlMITable';

/**
   * Azure SQL Managed Instance dataset properties.
   */
readonly typeProperties?: AzureSqlMITableDatasetTypeProperties;

/**
   * The schema name of the Azure SQL Managed Instance. Type: string (or Expression with resultType string).
   */
readonly schema?: For Bicep, you can use theany()function.;

/**
   * The table name of the Azure SQL Managed Instance dataset. Type: string (or Expression with resultType string).
   */
readonly table?: For Bicep, you can use theany()function.;

/**
   * This property will be retired. Please consider using schema + table properties instead.
   */
readonly tableName?: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'AzureSqlTable';

/**
   * Azure SQL dataset properties.
   */
readonly typeProperties?: AzureSqlTableDatasetTypeProperties;

/**
   * The schema name of the Azure SQL database. Type: string (or Expression with resultType string).
   */
readonly schema?: For Bicep, you can use theany()function.;

/**
   * The table name of the Azure SQL database. Type: string (or Expression with resultType string).
   */
readonly table?: For Bicep, you can use theany()function.;

/**
   * This property will be retired. Please consider using schema + table properties instead.
   */
readonly tableName?: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'AzureTable';

/**
   * Azure Table dataset properties.
   */
readonly typeProperties: AzureTableDatasetTypeProperties;

/**
   * The table name of the Azure Table storage. Type: string (or Expression with resultType string).
   */
readonly tableName: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'Binary';

/**
   * Binary dataset properties.
   */
readonly typeProperties?: BinaryDatasetTypeProperties;

/**
   * The data compression method used for the binary dataset.
   */
readonly compression?: DatasetCompression;

/**
   * Type of dataset.
   */
readonly type: 'CassandraTable';

/**
   * Cassandra dataset properties.
   */
readonly typeProperties?: CassandraTableDatasetTypeProperties;

/**
   * The keyspace of the Cassandra database. Type: string (or Expression with resultType string).
   */
readonly keyspace?: For Bicep, you can use theany()function.;

/**
   * The table name of the Cassandra database. Type: string (or Expression with resultType string).
   */
readonly tableName?: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'CommonDataServiceForAppsEntity';

/**
   * Common Data Service for Apps entity dataset properties.
   */
readonly typeProperties?: CommonDataServiceForAppsEntityDatasetTypeProperties;

/**
   * The logical name of the entity. Type: string (or Expression with resultType string).
   */
readonly entityName?: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'ConcurObject';

/**
   * Properties specific to this dataset type.
   */
readonly typeProperties?: GenericDatasetTypeProperties;

/**
   * Type of dataset.
   */
readonly type: 'CosmosDbMongoDbApiCollection';

/**
   * CosmosDB (MongoDB API) database dataset properties.
   */
readonly typeProperties: CosmosDbMongoDbApiCollectionDatasetTypeProperties;

/**
   * The collection name of the CosmosDB (MongoDB API) database. Type: string (or Expression with resultType string).
   */
readonly collection: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'CosmosDbSqlApiCollection';

/**
   * CosmosDB (SQL API) Collection dataset properties.
   */
readonly typeProperties: CosmosDbSqlApiCollectionDatasetTypeProperties;

/**
   * CosmosDB (SQL API) collection name. Type: string (or Expression with resultType string).
   */
readonly collectionName: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'CouchbaseTable';

/**
   * Properties specific to this dataset type.
   */
readonly typeProperties?: GenericDatasetTypeProperties;

/**
   * Type of dataset.
   */
readonly type: 'CustomDataset';

/**
   * Custom dataset properties.
   */
readonly typeProperties?: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'Db2Table';

/**
   * Db2 table dataset properties.
   */
readonly typeProperties?: Db2TableDatasetTypeProperties;

/**
   * The Db2 schema name. Type: string (or Expression with resultType string).
   */
readonly schema?: For Bicep, you can use theany()function.;

/**
   * The Db2 table name. Type: string (or Expression with resultType string).
   */
readonly table?: For Bicep, you can use theany()function.;

/**
   * This property will be retired. Please consider using schema + table properties instead.
   */
readonly tableName?: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'DelimitedText';

/**
   * Delimited text dataset properties.
   */
readonly typeProperties?: DelimitedTextDatasetTypeProperties;

/**
   * The column delimiter. Type: string (or Expression with resultType string).
   */
readonly columnDelimiter?: For Bicep, you can use theany()function.;

/**
   * The data compressionCodec. Type: string (or Expression with resultType string).
   */
readonly compressionCodec?: For Bicep, you can use theany()function.;

/**
   * The data compression method used for DelimitedText.
   */
readonly compressionLevel?: For Bicep, you can use theany()function.;

/**
   * The code page name of the preferred encoding. If miss, the default value is UTF-8, unless BOM denotes another Unicode encoding. Refer to the name column of the table in the following link to set supported values:https://msdn.microsoft.com/library/system.text.encoding.aspx. Type: string (or Expression with resultType string).
   */
readonly encodingName?: For Bicep, you can use theany()function.;

/**
   * The escape character. Type: string (or Expression with resultType string).
   */
readonly escapeChar?: For Bicep, you can use theany()function.;

/**
   * When used as input, treat the first row of data as headers. When used as output,write the headers into the output as the first row of data. The default value is false. Type: boolean (or Expression with resultType boolean).
   */
readonly firstRowAsHeader?: For Bicep, you can use theany()function.;

/**
   * The null value string. Type: string (or Expression with resultType string).
   */
readonly nullValue?: For Bicep, you can use theany()function.;

/**
   * The quote character. Type: string (or Expression with resultType string).
   */
readonly quoteChar?: For Bicep, you can use theany()function.;

/**
   * The row delimiter. Type: string (or Expression with resultType string).
   */
readonly rowDelimiter?: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'DocumentDbCollection';

/**
   * DocumentDB Collection dataset properties.
   */
readonly typeProperties: DocumentDbCollectionDatasetTypeProperties;

/**
   * Document Database collection name. Type: string (or Expression with resultType string).
   */
readonly collectionName: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'DrillTable';

/**
   * Properties specific to this dataset type.
   */
readonly typeProperties?: DrillDatasetTypeProperties;

/**
   * The schema name of the Drill. Type: string (or Expression with resultType string).
   */
readonly schema?: For Bicep, you can use theany()function.;

/**
   * The table name of the Drill. Type: string (or Expression with resultType string).
   */
readonly table?: For Bicep, you can use theany()function.;

/**
   * This property will be retired. Please consider using schema + table properties instead.
   */
readonly tableName?: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'DynamicsAXResource';

/**
   * Dynamics AX OData resource dataset properties.
   */
readonly typeProperties: DynamicsAXResourceDatasetTypeProperties;

/**
   * The path of the Dynamics AX OData entity. Type: string (or Expression with resultType string).
   */
readonly path: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'DynamicsCrmEntity';

/**
   * Dynamics CRM entity dataset properties.
   */
readonly typeProperties?: DynamicsCrmEntityDatasetTypeProperties;

/**
   * The logical name of the entity. Type: string (or Expression with resultType string).
   */
readonly entityName?: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'DynamicsEntity';

/**
   * Dynamics entity dataset properties.
   */
readonly typeProperties?: DynamicsEntityDatasetTypeProperties;

/**
   * The logical name of the entity. Type: string (or Expression with resultType string).
   */
readonly entityName?: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'EloquaObject';

/**
   * Properties specific to this dataset type.
   */
readonly typeProperties?: GenericDatasetTypeProperties;

/**
   * Type of dataset.
   */
readonly type: 'Excel';

/**
   * Excel dataset properties.
   */
readonly typeProperties?: ExcelDatasetTypeProperties;

/**
   * The data compression method used for the json dataset.
   */
readonly compression?: DatasetCompression;

/**
   * When used as input, treat the first row of data as headers. When used as output,write the headers into the output as the first row of data. The default value is false. Type: boolean (or Expression with resultType boolean).
   */
readonly firstRowAsHeader?: For Bicep, you can use theany()function.;

/**
   * The null value string. Type: string (or Expression with resultType string).
   */
readonly nullValue?: For Bicep, you can use theany()function.;

/**
   * The partial data of one sheet. Type: string (or Expression with resultType string).
   */
readonly range?: For Bicep, you can use theany()function.;

/**
   * The sheet index of excel file and default value is 0. Type: integer (or Expression with resultType integer)
   */
readonly sheetIndex?: For Bicep, you can use theany()function.;

/**
   * The sheet name of excel file. Type: string (or Expression with resultType string).
   */
readonly sheetName?: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'FileShare';

/**
   * On-premises file system dataset properties.
   */
readonly typeProperties?: FileShareDatasetTypeProperties;

/**
   * The data compression method used for the file system.
   */
readonly compression?: DatasetCompression;

/**
   * Specify a filter to be used to select a subset of files in the folderPath rather than all files. Type: string (or Expression with resultType string).
   */
readonly fileFilter?: For Bicep, you can use theany()function.;

/**
   * The name of the on-premises file system. Type: string (or Expression with resultType string).
   */
readonly fileName?: For Bicep, you can use theany()function.;

/**
   * The path of the on-premises file system. Type: string (or Expression with resultType string).
   */
readonly folderPath?: For Bicep, you can use theany()function.;

/**
   * The format of the files.
   */
readonly format?: DatasetStorageFormat;

/**
   * The end of file's modified datetime. Type: string (or Expression with resultType string).
   */
readonly modifiedDatetimeEnd?: For Bicep, you can use theany()function.;

/**
   * The start of file's modified datetime. Type: string (or Expression with resultType string).
   */
readonly modifiedDatetimeStart?: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'GoogleAdWordsObject';

/**
   * Properties specific to this dataset type.
   */
readonly typeProperties?: GenericDatasetTypeProperties;

/**
   * Type of dataset.
   */
readonly type: 'GoogleBigQueryObject';

/**
   * Properties specific to this dataset type.
   */
readonly typeProperties?: GoogleBigQueryDatasetTypeProperties;

/**
   * The database name of the Google BigQuery. Type: string (or Expression with resultType string).
   */
readonly dataset?: For Bicep, you can use theany()function.;

/**
   * The table name of the Google BigQuery. Type: string (or Expression with resultType string).
   */
readonly table?: For Bicep, you can use theany()function.;

/**
   * This property will be retired. Please consider using database + table properties instead.
   */
readonly tableName?: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'GreenplumTable';

/**
   * Properties specific to this dataset type.
   */
readonly typeProperties?: GreenplumDatasetTypeProperties;

/**
   * The schema name of Greenplum. Type: string (or Expression with resultType string).
   */
readonly schema?: For Bicep, you can use theany()function.;

/**
   * The table name of Greenplum. Type: string (or Expression with resultType string).
   */
readonly table?: For Bicep, you can use theany()function.;

/**
   * This property will be retired. Please consider using schema + table properties instead.
   */
readonly tableName?: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'HBaseObject';

/**
   * Properties specific to this dataset type.
   */
readonly typeProperties?: GenericDatasetTypeProperties;

/**
   * Type of dataset.
   */
readonly type: 'HiveObject';

/**
   * Properties specific to this dataset type.
   */
readonly typeProperties?: HiveDatasetTypeProperties;

/**
   * The schema name of the Hive. Type: string (or Expression with resultType string).
   */
readonly schema?: For Bicep, you can use theany()function.;

/**
   * The table name of the Hive. Type: string (or Expression with resultType string).
   */
readonly table?: For Bicep, you can use theany()function.;

/**
   * This property will be retired. Please consider using schema + table properties instead.
   */
readonly tableName?: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'HttpFile';

/**
   * Properties specific to this dataset type.
   */
readonly typeProperties?: HttpDatasetTypeProperties;

/**
   * The headers for the HTTP Request. e.g. request-header-name-1:request-header-value-1...request-header-name-n:request-header-value-n Type: string (or Expression with resultType string).
   */
readonly additionalHeaders?: For Bicep, you can use theany()function.;

/**
   * The data compression method used on files.
   */
readonly compression?: DatasetCompression;

/**
   * The format of files.
   */
readonly format?: DatasetStorageFormat;

/**
   * The relative URL based on the URL in the HttpLinkedService refers to an HTTP file Type: string (or Expression with resultType string).
   */
readonly relativeUrl?: For Bicep, you can use theany()function.;

/**
   * The body for the HTTP request. Type: string (or Expression with resultType string).
   */
readonly requestBody?: For Bicep, you can use theany()function.;

/**
   * The HTTP method for the HTTP request. Type: string (or Expression with resultType string).
   */
readonly requestMethod?: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'HubspotObject';

/**
   * Properties specific to this dataset type.
   */
readonly typeProperties?: GenericDatasetTypeProperties;

/**
   * Type of dataset.
   */
readonly type: 'ImpalaObject';

/**
   * Properties specific to this dataset type.
   */
readonly typeProperties?: ImpalaDatasetTypeProperties;

/**
   * The schema name of the Impala. Type: string (or Expression with resultType string).
   */
readonly schema?: For Bicep, you can use theany()function.;

/**
   * The table name of the Impala. Type: string (or Expression with resultType string).
   */
readonly table?: For Bicep, you can use theany()function.;

/**
   * This property will be retired. Please consider using schema + table properties instead.
   */
readonly tableName?: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'InformixTable';

/**
   * Informix table dataset properties.
   */
readonly typeProperties?: InformixTableDatasetTypeProperties;

/**
   * The Informix table name. Type: string (or Expression with resultType string).
   */
readonly tableName?: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'JiraObject';

/**
   * Properties specific to this dataset type.
   */
readonly typeProperties?: GenericDatasetTypeProperties;

/**
   * Type of dataset.
   */
readonly type: 'Json';

/**
   * Json dataset properties.
   */
readonly typeProperties?: JsonDatasetTypeProperties;

/**
   * The data compression method used for the json dataset.
   */
readonly compression?: DatasetCompression;

/**
   * The code page name of the preferred encoding. If not specified, the default value is UTF-8, unless BOM denotes another Unicode encoding. Refer to the name column of the table in the following link to set supported values:https://msdn.microsoft.com/library/system.text.encoding.aspx. Type: string (or Expression with resultType string).
   */
readonly encodingName?: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'MagentoObject';

/**
   * Properties specific to this dataset type.
   */
readonly typeProperties?: GenericDatasetTypeProperties;

/**
   * Type of dataset.
   */
readonly type: 'MariaDBTable';

/**
   * Properties specific to this dataset type.
   */
readonly typeProperties?: GenericDatasetTypeProperties;

/**
   * Type of dataset.
   */
readonly type: 'MarketoObject';

/**
   * Properties specific to this dataset type.
   */
readonly typeProperties?: GenericDatasetTypeProperties;

/**
   * Type of dataset.
   */
readonly type: 'MicrosoftAccessTable';

/**
   * Microsoft Access table dataset properties.
   */
readonly typeProperties?: MicrosoftAccessTableDatasetTypeProperties;

/**
   * The Microsoft Access table name. Type: string (or Expression with resultType string).
   */
readonly tableName?: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'MongoDbAtlasCollection';

/**
   * MongoDB Atlas database dataset properties.
   */
readonly typeProperties: MongoDbAtlasCollectionDatasetTypeProperties;

/**
   * The collection name of the MongoDB Atlas database. Type: string (or Expression with resultType string).
   */
readonly collection: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'MongoDbCollection';

/**
   * MongoDB database dataset properties.
   */
readonly typeProperties: MongoDbCollectionDatasetTypeProperties;

/**
   * The table name of the MongoDB database. Type: string (or Expression with resultType string).
   */
readonly collectionName: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'MongoDbV2Collection';

/**
   * MongoDB database dataset properties.
   */
readonly typeProperties: MongoDbV2CollectionDatasetTypeProperties;

/**
   * The collection name of the MongoDB database. Type: string (or Expression with resultType string).
   */
readonly collection: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'MySqlTable';

/**
   * MySQL table dataset properties.
   */
readonly typeProperties?: MySqlTableDatasetTypeProperties;

/**
   * The MySQL table name. Type: string (or Expression with resultType string).
   */
readonly tableName?: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'NetezzaTable';

/**
   * Properties specific to this dataset type.
   */
readonly typeProperties?: NetezzaTableDatasetTypeProperties;

/**
   * The schema name of the Netezza. Type: string (or Expression with resultType string).
   */
readonly schema?: For Bicep, you can use theany()function.;

/**
   * The table name of the Netezza. Type: string (or Expression with resultType string).
   */
readonly table?: For Bicep, you can use theany()function.;

/**
   * This property will be retired. Please consider using schema + table properties instead.
   */
readonly tableName?: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'ODataResource';

/**
   * OData dataset properties.
   */
readonly typeProperties?: ODataResourceDatasetTypeProperties;

/**
   * The OData resource path. Type: string (or Expression with resultType string).
   */
readonly path?: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'OdbcTable';

/**
   * ODBC table dataset properties.
   */
readonly typeProperties?: OdbcTableDatasetTypeProperties;

/**
   * The ODBC table name. Type: string (or Expression with resultType string).
   */
readonly tableName?: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'Office365Table';

/**
   * Office365 dataset properties.
   */
readonly typeProperties: Office365DatasetTypeProperties;

/**
   * A predicate expression that can be used to filter the specific rows to extract from Office 365. Type: string (or Expression with resultType string).
   */
readonly predicate?: For Bicep, you can use theany()function.;

/**
   * Name of the dataset to extract from Office 365. Type: string (or Expression with resultType string).
   */
readonly tableName: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'OracleServiceCloudObject';

/**
   * Properties specific to this dataset type.
   */
readonly typeProperties?: GenericDatasetTypeProperties;

/**
   * Type of dataset.
   */
readonly type: 'OracleTable';

/**
   * On-premises Oracle dataset properties.
   */
readonly typeProperties?: OracleTableDatasetTypeProperties;

/**
   * The schema name of the on-premises Oracle database. Type: string (or Expression with resultType string).
   */
readonly schema?: For Bicep, you can use theany()function.;

/**
   * The table name of the on-premises Oracle database. Type: string (or Expression with resultType string).
   */
readonly table?: For Bicep, you can use theany()function.;

/**
   * This property will be retired. Please consider using schema + table properties instead.
   */
readonly tableName?: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'Orc';

/**
   * ORC dataset properties.
   */
readonly typeProperties?: OrcDatasetTypeProperties;

/**
   * The data orcCompressionCodec. Type: string (or Expression with resultType string).
   */
readonly orcCompressionCodec?: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'Parquet';

/**
   * Parquet dataset properties.
   */
readonly typeProperties?: ParquetDatasetTypeProperties;

/**
   * The data compressionCodec. Type: string (or Expression with resultType string).
   */
readonly compressionCodec?: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'PaypalObject';

/**
   * Properties specific to this dataset type.
   */
readonly typeProperties?: GenericDatasetTypeProperties;

/**
   * Type of dataset.
   */
readonly type: 'PhoenixObject';

/**
   * Properties specific to this dataset type.
   */
readonly typeProperties?: PhoenixDatasetTypeProperties;

/**
   * The schema name of the Phoenix. Type: string (or Expression with resultType string).
   */
readonly schema?: For Bicep, you can use theany()function.;

/**
   * The table name of the Phoenix. Type: string (or Expression with resultType string).
   */
readonly table?: For Bicep, you can use theany()function.;

/**
   * This property will be retired. Please consider using schema + table properties instead.
   */
readonly tableName?: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'PostgreSqlTable';

/**
   * PostgreSQL table dataset properties.
   */
readonly typeProperties?: PostgreSqlTableDatasetTypeProperties;

/**
   * The PostgreSQL schema name. Type: string (or Expression with resultType string).
   */
readonly schema?: For Bicep, you can use theany()function.;

/**
   * The PostgreSQL table name. Type: string (or Expression with resultType string).
   */
readonly table?: For Bicep, you can use theany()function.;

/**
   * This property will be retired. Please consider using schema + table properties instead.
   */
readonly tableName?: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'PrestoObject';

/**
   * Properties specific to this dataset type.
   */
readonly typeProperties?: PrestoDatasetTypeProperties;

/**
   * The schema name of the Presto. Type: string (or Expression with resultType string).
   */
readonly schema?: For Bicep, you can use theany()function.;

/**
   * The table name of the Presto. Type: string (or Expression with resultType string).
   */
readonly table?: For Bicep, you can use theany()function.;

/**
   * This property will be retired. Please consider using schema + table properties instead.
   */
readonly tableName?: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'QuickBooksObject';

/**
   * Properties specific to this dataset type.
   */
readonly typeProperties?: GenericDatasetTypeProperties;

/**
   * Type of dataset.
   */
readonly type: 'RelationalTable';

/**
   * Relational table dataset properties.
   */
readonly typeProperties?: RelationalTableDatasetTypeProperties;

/**
   * The relational table name. Type: string (or Expression with resultType string).
   */
readonly tableName?: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'ResponsysObject';

/**
   * Properties specific to this dataset type.
   */
readonly typeProperties?: GenericDatasetTypeProperties;

/**
   * Type of dataset.
   */
readonly type: 'RestResource';

/**
   * Properties specific to this dataset type.
   */
readonly typeProperties?: RestResourceDatasetTypeProperties;

/**
   * The additional HTTP headers in the request to the RESTful API. Type: string (or Expression with resultType string).
   */
readonly additionalHeaders?: For Bicep, you can use theany()function.;

/**
   * The pagination rules to compose next page requests. Type: string (or Expression with resultType string).
   */
readonly paginationRules?: For Bicep, you can use theany()function.;

/**
   * The relative URL to the resource that the RESTful API provides. Type: string (or Expression with resultType string).
   */
readonly relativeUrl?: For Bicep, you can use theany()function.;

/**
   * The HTTP request body to the RESTful API if requestMethod is POST. Type: string (or Expression with resultType string).
   */
readonly requestBody?: For Bicep, you can use theany()function.;

/**
   * The HTTP method used to call the RESTful API. The default is GET. Type: string (or Expression with resultType string).
   */
readonly requestMethod?: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'SalesforceMarketingCloudObject';

/**
   * Properties specific to this dataset type.
   */
readonly typeProperties?: GenericDatasetTypeProperties;

/**
   * Type of dataset.
   */
readonly type: 'SalesforceObject';

/**
   * Salesforce object dataset properties.
   */
readonly typeProperties?: SalesforceObjectDatasetTypeProperties;

/**
   * The Salesforce object API name. Type: string (or Expression with resultType string).
   */
readonly objectApiName?: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'SalesforceServiceCloudObject';

/**
   * Salesforce Service Cloud object dataset properties.
   */
readonly typeProperties?: SalesforceServiceCloudObjectDatasetTypeProperties;

/**
   * The Salesforce Service Cloud object API name. Type: string (or Expression with resultType string).
   */
readonly objectApiName?: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'SapBwCube';

/**
   * Type of dataset.
   */
readonly type: 'SapCloudForCustomerResource';

/**
   * SAP Cloud For Customer OData resource dataset properties.
   */
readonly typeProperties: SapCloudForCustomerResourceDatasetTypeProperties;

/**
   * The path of the SAP Cloud for Customer OData entity. Type: string (or Expression with resultType string).
   */
readonly path: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'SapEccResource';

/**
   * SAP ECC OData resource dataset properties.
   */
readonly typeProperties: SapEccResourceDatasetTypeProperties;

/**
   * The path of the SAP ECC OData entity. Type: string (or Expression with resultType string).
   */
readonly path: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'SapHanaTable';

/**
   * SAP HANA Table properties.
   */
readonly typeProperties?: SapHanaTableDatasetTypeProperties;

/**
   * The schema name of SAP HANA. Type: string (or Expression with resultType string).
   */
readonly schema?: For Bicep, you can use theany()function.;

/**
   * The table name of SAP HANA. Type: string (or Expression with resultType string).
   */
readonly table?: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'SapOdpResource';

/**
   * SAP ODP Resource properties.
   */
readonly typeProperties: SapOdpResourceDatasetTypeProperties;

/**
   * The context of the SAP ODP Object. Type: string (or Expression with resultType string).
   */
readonly context: For Bicep, you can use theany()function.;

/**
   * The name of the SAP ODP Object. Type: string (or Expression with resultType string).
   */
readonly objectName: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'SapOpenHubTable';

/**
   * Sap Business Warehouse Open Hub Destination Table properties.
   */
readonly typeProperties: SapOpenHubTableDatasetTypeProperties;

/**
   * The ID of request for delta loading. Once it is set, only data with requestId larger than the value of this property will be retrieved. The default value is 0. Type: integer (or Expression with resultType integer ).
   */
readonly baseRequestId?: For Bicep, you can use theany()function.;

/**
   * Whether to exclude the records of the last request. The default value is true. Type: boolean (or Expression with resultType boolean).
   */
readonly excludeLastRequest?: For Bicep, you can use theany()function.;

/**
   * The name of the Open Hub Destination with destination type as Database Table. Type: string (or Expression with resultType string).
   */
readonly openHubDestinationName: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'SapTableResource';

/**
   * SAP Table Resource properties.
   */
readonly typeProperties: SapTableResourceDatasetTypeProperties;

/**
   * The name of the SAP Table. Type: string (or Expression with resultType string).
   */
readonly tableName: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'ServiceNowObject';

/**
   * Properties specific to this dataset type.
   */
readonly typeProperties?: GenericDatasetTypeProperties;

/**
   * Type of dataset.
   */
readonly type: 'SharePonumberOnlineListResource';

/**
   * Sharepoint online list dataset properties.
   */
readonly typeProperties?: SharePonumberOnlineListDatasetTypeProperties;

/**
   * The name of the SharePoint Online list. Type: string (or Expression with resultType string).
   */
readonly listName?: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'ShopifyObject';

/**
   * Properties specific to this dataset type.
   */
readonly typeProperties?: GenericDatasetTypeProperties;

/**
   * Type of dataset.
   */
readonly type: 'SnowflakeTable';

/**
   * Snowflake dataset properties.
   */
readonly typeProperties: SnowflakeDatasetTypeProperties;

/**
   * The schema name of the Snowflake database. Type: string (or Expression with resultType string).
   */
readonly schema?: For Bicep, you can use theany()function.;

/**
   * The table name of the Snowflake database. Type: string (or Expression with resultType string).
   */
readonly table?: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'SparkObject';

/**
   * Properties specific to this dataset type.
   */
readonly typeProperties?: SparkDatasetTypeProperties;

/**
   * The schema name of the Spark. Type: string (or Expression with resultType string).
   */
readonly schema?: For Bicep, you can use theany()function.;

/**
   * The table name of the Spark. Type: string (or Expression with resultType string).
   */
readonly table?: For Bicep, you can use theany()function.;

/**
   * This property will be retired. Please consider using schema + table properties instead.
   */
readonly tableName?: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'SqlServerTable';

/**
   * On-premises SQL Server dataset properties.
   */
readonly typeProperties?: SqlServerTableDatasetTypeProperties;

/**
   * The schema name of the SQL Server dataset. Type: string (or Expression with resultType string).
   */
readonly schema?: For Bicep, you can use theany()function.;

/**
   * The table name of the SQL Server dataset. Type: string (or Expression with resultType string).
   */
readonly table?: For Bicep, you can use theany()function.;

/**
   * This property will be retired. Please consider using schema + table properties instead.
   */
readonly tableName?: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'SquareObject';

/**
   * Properties specific to this dataset type.
   */
readonly typeProperties?: GenericDatasetTypeProperties;

/**
   * Type of dataset.
   */
readonly type: 'SybaseTable';

/**
   * Sybase table dataset properties.
   */
readonly typeProperties?: SybaseTableDatasetTypeProperties;

/**
   * The Sybase table name. Type: string (or Expression with resultType string).
   */
readonly tableName?: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'TeradataTable';

/**
   * Teradata dataset properties.
   */
readonly typeProperties?: TeradataTableDatasetTypeProperties;

/**
   * The database name of Teradata. Type: string (or Expression with resultType string).
   */
readonly database?: For Bicep, you can use theany()function.;

/**
   * The table name of Teradata. Type: string (or Expression with resultType string).
   */
readonly table?: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'VerticaTable';

/**
   * Properties specific to this dataset type.
   */
readonly typeProperties?: VerticaDatasetTypeProperties;

/**
   * The schema name of the Vertica. Type: string (or Expression with resultType string).
   */
readonly schema?: For Bicep, you can use theany()function.;

/**
   * The table name of the Vertica. Type: string (or Expression with resultType string).
   */
readonly table?: For Bicep, you can use theany()function.;

/**
   * This property will be retired. Please consider using schema + table properties instead.
   */
readonly tableName?: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'WebTable';

/**
   * Web table dataset properties.
   */
readonly typeProperties: WebTableDatasetTypeProperties;

/**
   * The zero-based index of the table in the web page. Type: integer (or Expression with resultType integer), minimum: 0.
   */
readonly index: For Bicep, you can use theany()function.;

/**
   * The relative URL to the web page from the linked service URL. Type: string (or Expression with resultType string).
   */
readonly path?: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'XeroObject';

/**
   * Properties specific to this dataset type.
   */
readonly typeProperties?: GenericDatasetTypeProperties;

/**
   * Type of dataset.
   */
readonly type: 'Xml';

/**
   * Xml dataset properties.
   */
readonly typeProperties?: XmlDatasetTypeProperties;

/**
   * The data compression method used for the json dataset.
   */
readonly compression?: DatasetCompression;

/**
   * The code page name of the preferred encoding. If not specified, the default value is UTF-8, unless BOM denotes another Unicode encoding. Refer to the name column of the table in the following link to set supported values:https://msdn.microsoft.com/library/system.text.encoding.aspx. Type: string (or Expression with resultType string).
   */
readonly encodingName?: For Bicep, you can use theany()function.;

/**
   * The null value string. Type: string (or Expression with resultType string).
   */
readonly nullValue?: For Bicep, you can use theany()function.;

/**
   * Type of dataset.
   */
readonly type: 'ZohoObject';

/**
   * Properties specific to this dataset type.
   */
readonly typeProperties?: GenericDatasetTypeProperties;
}

/**
 * DatafactoryFactoriesDatasets resource
 */
export class DatafactoryFactoriesDatasets extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatafactoryFactoriesDatasetsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataFactory/factories/datasets@2018-06-01";
  }

  protected getResourceBody(props: DatafactoryFactoriesDatasetsProps): string {
    return JSON.stringify(
        {properties: {annotations: ["${object}"], description: "string", folder: {name: "string"}, linkedServiceName: {parameters: {}, referenceName: "string", type: "LinkedServiceReference"}, parameters: {}, type: "string"}}
    );
  }
}
