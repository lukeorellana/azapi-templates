import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface DatafactoryFactoriesDatasetsProps extends IAzAPIBaseProps {

}

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

// | Name | Description | Value |
// |-|-|-|
// | name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-260Valid characters:Can't use:<>*#.%&:\\+?/or control charactersStart with alphanumeric. |
// | parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:factories |
// | properties | Dataset properties. | Dataset(required) |

// | Name | Description | Value |
// |-|-|-|
// | annotations | List of tags that can be used for describing the Dataset. | any[] |
// | description | Dataset description. | string |
// | folder | The folder that this Dataset is in. If not specified, Dataset will appear at the root level. | DatasetFolder |
// | linkedServiceName | Linked service reference. | LinkedServiceReference(required) |
// | parameters | Parameters for dataset. | object |
// | schema | Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement. | For Bicep, you can use theany()function. |
// | structure | Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement. | For Bicep, you can use theany()function. |
// | type | Set the object type | AmazonMWSObjectAmazonRdsForOracleTableAmazonRdsForSqlServerTableAmazonRedshiftTableAmazonS3ObjectAvroAzureBlobAzureBlobFSFileAzureDatabricksDeltaLakeDatasetAzureDataExplorerTableAzureDataLakeStoreFileAzureMariaDBTableAzureMySqlTableAzurePostgreSqlTableAzureSearchIndexAzureSqlDWTableAzureSqlMITableAzureSqlTableAzureTableBinaryCassandraTableCommonDataServiceForAppsEntityConcurObjectCosmosDbMongoDbApiCollectionCosmosDbSqlApiCollectionCouchbaseTableCustomDatasetDb2TableDelimitedTextDocumentDbCollectionDrillTableDynamicsAXResourceDynamicsCrmEntityDynamicsEntityEloquaObjectExcelFileShareGoogleAdWordsObjectGoogleBigQueryObjectGreenplumTableHBaseObjectHiveObjectHttpFileHubspotObjectImpalaObjectInformixTableJiraObjectJsonMagentoObjectMariaDBTableMarketoObjectMicrosoftAccessTableMongoDbAtlasCollectionMongoDbCollectionMongoDbV2CollectionMySqlTableNetezzaTableODataResourceOdbcTableOffice365TableOracleServiceCloudObjectOracleTableOrcParquetPaypalObjectPhoenixObjectPostgreSqlTablePrestoObjectQuickBooksObjectRelationalTableResponsysObjectRestResourceSalesforceMarketingCloudObjectSalesforceObjectSalesforceServiceCloudObjectSapBwCubeSapCloudForCustomerResourceSapEccResourceSapHanaTableSapOdpResourceSapOpenHubTableSapTableResourceServiceNowObjectSharePointOnlineListResourceShopifyObjectSnowflakeTableSparkObjectSqlServerTableSquareObjectSybaseTableTeradataTableVerticaTableWebTableXeroObjectXmlZohoObject(required) |

// | Name | Description | Value |
// |-|-|-|
// | name | The name of the folder that this Dataset is in. | string |

// | Name | Description | Value |
// |-|-|-|
// | parameters | Arguments for LinkedService. | object |
// | referenceName | Reference LinkedService name. | string (required) |
// | type | Linked service reference type. | 'LinkedServiceReference' (required) |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'AmazonMWSObject' (required) |
// | typeProperties | Properties specific to this dataset type. | GenericDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | tableName | The table name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'AmazonRdsForOracleTable' (required) |
// | typeProperties | AmazonRdsForOracle dataset properties. | AmazonRdsForOracleTableDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | schema | The schema name of the AmazonRdsForOracle database. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | table | The table name of the AmazonRdsForOracle database. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'AmazonRdsForSqlServerTable' (required) |
// | typeProperties | The Amazon RDS for SQL Server dataset properties. | AmazonRdsForSqlServerTableDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | schema | The schema name of the SQL Server dataset. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | table | The table name of the SQL Server dataset. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'AmazonRedshiftTable' (required) |
// | typeProperties | Amazon Redshift table dataset properties. | AmazonRedshiftTableDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | schema | The Amazon Redshift schema name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | table | The Amazon Redshift table name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | tableName | This property will be retired. Please consider using schema + table properties instead. | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'AmazonS3Object' (required) |
// | typeProperties | Amazon S3 dataset properties. | AmazonS3DatasetTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | bucketName | The name of the Amazon S3 bucket. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | compression | The data compression method used for the Amazon S3 object. | DatasetCompression |
// | format | The format of files. | DatasetStorageFormat |
// | key | The key of the Amazon S3 object. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | modifiedDatetimeEnd | The end of S3 object's modified datetime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | modifiedDatetimeStart | The start of S3 object's modified datetime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | prefix | The prefix filter for the S3 object name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | version | The version for the S3 object. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | level | The dataset compression level. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | type | Type of dataset compression. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |

// | Name | Description | Value |
// |-|-|-|
// | deserializer | Deserializer. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | serializer | Serializer. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | type | Set the object type | AvroFormatJsonFormatOrcFormatParquetFormatTextFormat(required) |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset storage format. | 'AvroFormat' (required) |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset storage format. | 'JsonFormat' (required) |
// | encodingName | The code page name of the preferred encoding. If not provided, the default value is 'utf-8', unless the byte order mark (BOM) denotes another Unicode encoding. The full list of supported values can be found in the 'Name' column of the table of encodings in the following reference:https://go.microsoft.com/fwlink/?linkid=861078. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | filePattern | File pattern of JSON. To be more specific, the way of separating a collection of JSON objects. The default value is 'setOfObjects'. It is case-sensitive. | For Bicep, you can use theany()function. |
// | jsonNodeReference | The JSONPath of the JSON array element to be flattened. Example: "$.ArrayPath". Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | jsonPathDefinition | The JSONPath definition for each column mapping with a customized column name to extract data from JSON file. For fields under root object, start with "$"; for fields inside the array chosen by jsonNodeReference property, start from the array element. Example: {"Column1": "$.Column1Path", "Column2": "Column2PathInArray"}. Type: object (or Expression with resultType object). | For Bicep, you can use theany()function. |
// | nestingSeparator | The character used to separate nesting levels. Default value is '.' (dot). Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset storage format. | 'OrcFormat' (required) |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset storage format. | 'ParquetFormat' (required) |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset storage format. | 'TextFormat' (required) |
// | columnDelimiter | The column delimiter. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | encodingName | The code page name of the preferred encoding. If miss, the default value is ÎÃÂ£utf-8ÎÃÂ¥, unless BOM denotes another Unicode encoding. Refer to the ÎÃÂ£NameÎÃÂ¥ column of the table in the following link to set supported values:https://msdn.microsoft.com/library/system.text.encoding.aspx. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | escapeChar | The escape character. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | firstRowAsHeader | When used as input, treat the first row of data as headers. When used as output,write the headers into the output as the first row of data. The default value is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
// | nullValue | The null value string. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | quoteChar | The quote character. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | rowDelimiter | The row delimiter. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | skipLineCount | The number of lines/rows to be skipped when parsing text files. The default value is 0. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |
// | treatEmptyAsNull | Treat empty column values in the text file as null. The default value is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'Avro' (required) |
// | typeProperties | Avro dataset properties. | AvroDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | avroCompressionCodec | The data avroCompressionCodec. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | avroCompressionLevel |  | int |
// | location | The location of the avro storage. | DatasetLocation(required) |

// | Name | Description | Value |
// |-|-|-|
// | fileName | Specify the file name of dataset. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | folderPath | Specify the folder path of dataset. Type: string (or Expression with resultType string) | For Bicep, you can use theany()function. |
// | type | Set the object type | AmazonS3CompatibleLocationAmazonS3LocationAzureBlobFSLocationAzureBlobStorageLocationAzureDataLakeStoreLocationAzureFileStorageLocationFileServerLocationFtpServerLocationGoogleCloudStorageLocationHdfsLocationHttpServerLocationOracleCloudStorageLocationSftpLocation(required) |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset storage location. | 'AmazonS3CompatibleLocation' (required) |
// | bucketName | Specify the bucketName of Amazon S3 Compatible. Type: string (or Expression with resultType string) | For Bicep, you can use theany()function. |
// | version | Specify the version of Amazon S3 Compatible. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset storage location. | 'AmazonS3Location' (required) |
// | bucketName | Specify the bucketName of amazon S3. Type: string (or Expression with resultType string) | For Bicep, you can use theany()function. |
// | version | Specify the version of amazon S3. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset storage location. | 'AzureBlobFSLocation' (required) |
// | fileSystem | Specify the fileSystem of azure blobFS. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset storage location. | 'AzureBlobStorageLocation' (required) |
// | container | Specify the container of azure blob. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset storage location. | 'AzureDataLakeStoreLocation' (required) |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset storage location. | 'AzureFileStorageLocation' (required) |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset storage location. | 'FileServerLocation' (required) |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset storage location. | 'FtpServerLocation' (required) |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset storage location. | 'GoogleCloudStorageLocation' (required) |
// | bucketName | Specify the bucketName of Google Cloud Storage. Type: string (or Expression with resultType string) | For Bicep, you can use theany()function. |
// | version | Specify the version of Google Cloud Storage. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset storage location. | 'HdfsLocation' (required) |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset storage location. | 'HttpServerLocation' (required) |
// | relativeUrl | Specify the relativeUrl of http server. Type: string (or Expression with resultType string) | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset storage location. | 'OracleCloudStorageLocation' (required) |
// | bucketName | Specify the bucketName of Oracle Cloud Storage. Type: string (or Expression with resultType string) | For Bicep, you can use theany()function. |
// | version | Specify the version of Oracle Cloud Storage. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset storage location. | 'SftpLocation' (required) |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'AzureBlob' (required) |
// | typeProperties | Azure Blob dataset properties. | AzureBlobDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | compression | The data compression method used for the blob storage. | DatasetCompression |
// | fileName | The name of the Azure Blob. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | folderPath | The path of the Azure Blob storage. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | format | The format of the Azure Blob storage. | DatasetStorageFormat |
// | modifiedDatetimeEnd | The end of Azure Blob's modified datetime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | modifiedDatetimeStart | The start of Azure Blob's modified datetime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | tableRootLocation | The root of blob path. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'AzureBlobFSFile' (required) |
// | typeProperties | Azure Data Lake Storage Gen2 dataset properties. | AzureBlobFSDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | compression | The data compression method used for the blob storage. | DatasetCompression |
// | fileName | The name of the Azure Data Lake Storage Gen2. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | folderPath | The path of the Azure Data Lake Storage Gen2 storage. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | format | The format of the Azure Data Lake Storage Gen2 storage. | DatasetStorageFormat |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'AzureDatabricksDeltaLakeDataset' (required) |
// | typeProperties | Properties specific to this dataset type. | AzureDatabricksDeltaLakeDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | database | The database name of delta table. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | table | The name of delta table. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'AzureDataExplorerTable' (required) |
// | typeProperties | Azure Data Explorer (Kusto) dataset properties. | AzureDataExplorerDatasetTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | table | The table name of the Azure Data Explorer database. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'AzureDataLakeStoreFile' (required) |
// | typeProperties | Azure Data Lake Store dataset properties. | AzureDataLakeStoreDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | compression | The data compression method used for the item(s) in the Azure Data Lake Store. | DatasetCompression |
// | fileName | The name of the file in the Azure Data Lake Store. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | folderPath | Path to the folder in the Azure Data Lake Store. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | format | The format of the Data Lake Store. | DatasetStorageFormat |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'AzureMariaDBTable' (required) |
// | typeProperties | Properties specific to this dataset type. | GenericDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'AzureMySqlTable' (required) |
// | typeProperties | Azure MySQL database dataset properties. | AzureMySqlTableDatasetTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | table | The name of Azure MySQL database table. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | tableName | The Azure MySQL database table name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'AzurePostgreSqlTable' (required) |
// | typeProperties | Properties specific to this dataset type. | AzurePostgreSqlTableDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | schema | The schema name of the Azure PostgreSQL database. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | table | The table name of the Azure PostgreSQL database. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | tableName | The table name of the Azure PostgreSQL database which includes both schema and table. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'AzureSearchIndex' (required) |
// | typeProperties | Properties specific to this dataset type. | AzureSearchIndexDatasetTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | indexName | The name of the Azure Search Index. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'AzureSqlDWTable' (required) |
// | typeProperties | Azure SQL Data Warehouse dataset properties. | AzureSqlDWTableDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | schema | The schema name of the Azure SQL Data Warehouse. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | table | The table name of the Azure SQL Data Warehouse. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | tableName | This property will be retired. Please consider using schema + table properties instead. | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'AzureSqlMITable' (required) |
// | typeProperties | Azure SQL Managed Instance dataset properties. | AzureSqlMITableDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | schema | The schema name of the Azure SQL Managed Instance. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | table | The table name of the Azure SQL Managed Instance dataset. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | tableName | This property will be retired. Please consider using schema + table properties instead. | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'AzureSqlTable' (required) |
// | typeProperties | Azure SQL dataset properties. | AzureSqlTableDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | schema | The schema name of the Azure SQL database. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | table | The table name of the Azure SQL database. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | tableName | This property will be retired. Please consider using schema + table properties instead. | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'AzureTable' (required) |
// | typeProperties | Azure Table dataset properties. | AzureTableDatasetTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | tableName | The table name of the Azure Table storage. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'Binary' (required) |
// | typeProperties | Binary dataset properties. | BinaryDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | compression | The data compression method used for the binary dataset. | DatasetCompression |
// | location | The location of the Binary storage. | DatasetLocation(required) |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'CassandraTable' (required) |
// | typeProperties | Cassandra dataset properties. | CassandraTableDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | keyspace | The keyspace of the Cassandra database. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | tableName | The table name of the Cassandra database. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'CommonDataServiceForAppsEntity' (required) |
// | typeProperties | Common Data Service for Apps entity dataset properties. | CommonDataServiceForAppsEntityDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | entityName | The logical name of the entity. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'ConcurObject' (required) |
// | typeProperties | Properties specific to this dataset type. | GenericDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'CosmosDbMongoDbApiCollection' (required) |
// | typeProperties | CosmosDB (MongoDB API) database dataset properties. | CosmosDbMongoDbApiCollectionDatasetTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | collection | The collection name of the CosmosDB (MongoDB API) database. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'CosmosDbSqlApiCollection' (required) |
// | typeProperties | CosmosDB (SQL API) Collection dataset properties. | CosmosDbSqlApiCollectionDatasetTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | collectionName | CosmosDB (SQL API) collection name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'CouchbaseTable' (required) |
// | typeProperties | Properties specific to this dataset type. | GenericDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'CustomDataset' (required) |
// | typeProperties | Custom dataset properties. | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'Db2Table' (required) |
// | typeProperties | Db2 table dataset properties. | Db2TableDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | schema | The Db2 schema name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | table | The Db2 table name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | tableName | This property will be retired. Please consider using schema + table properties instead. | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'DelimitedText' (required) |
// | typeProperties | Delimited text dataset properties. | DelimitedTextDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | columnDelimiter | The column delimiter. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | compressionCodec | The data compressionCodec. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | compressionLevel | The data compression method used for DelimitedText. | For Bicep, you can use theany()function. |
// | encodingName | The code page name of the preferred encoding. If miss, the default value is UTF-8, unless BOM denotes another Unicode encoding. Refer to the name column of the table in the following link to set supported values:https://msdn.microsoft.com/library/system.text.encoding.aspx. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | escapeChar | The escape character. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | firstRowAsHeader | When used as input, treat the first row of data as headers. When used as output,write the headers into the output as the first row of data. The default value is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
// | location | The location of the delimited text storage. | DatasetLocation(required) |
// | nullValue | The null value string. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | quoteChar | The quote character. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | rowDelimiter | The row delimiter. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'DocumentDbCollection' (required) |
// | typeProperties | DocumentDB Collection dataset properties. | DocumentDbCollectionDatasetTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | collectionName | Document Database collection name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'DrillTable' (required) |
// | typeProperties | Properties specific to this dataset type. | DrillDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | schema | The schema name of the Drill. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | table | The table name of the Drill. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | tableName | This property will be retired. Please consider using schema + table properties instead. | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'DynamicsAXResource' (required) |
// | typeProperties | Dynamics AX OData resource dataset properties. | DynamicsAXResourceDatasetTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | path | The path of the Dynamics AX OData entity. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'DynamicsCrmEntity' (required) |
// | typeProperties | Dynamics CRM entity dataset properties. | DynamicsCrmEntityDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | entityName | The logical name of the entity. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'DynamicsEntity' (required) |
// | typeProperties | Dynamics entity dataset properties. | DynamicsEntityDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | entityName | The logical name of the entity. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'EloquaObject' (required) |
// | typeProperties | Properties specific to this dataset type. | GenericDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'Excel' (required) |
// | typeProperties | Excel dataset properties. | ExcelDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | compression | The data compression method used for the json dataset. | DatasetCompression |
// | firstRowAsHeader | When used as input, treat the first row of data as headers. When used as output,write the headers into the output as the first row of data. The default value is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
// | location | The location of the excel storage. | DatasetLocation(required) |
// | nullValue | The null value string. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | range | The partial data of one sheet. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | sheetIndex | The sheet index of excel file and default value is 0. Type: integer (or Expression with resultType integer) | For Bicep, you can use theany()function. |
// | sheetName | The sheet name of excel file. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'FileShare' (required) |
// | typeProperties | On-premises file system dataset properties. | FileShareDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | compression | The data compression method used for the file system. | DatasetCompression |
// | fileFilter | Specify a filter to be used to select a subset of files in the folderPath rather than all files. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | fileName | The name of the on-premises file system. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | folderPath | The path of the on-premises file system. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | format | The format of the files. | DatasetStorageFormat |
// | modifiedDatetimeEnd | The end of file's modified datetime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | modifiedDatetimeStart | The start of file's modified datetime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'GoogleAdWordsObject' (required) |
// | typeProperties | Properties specific to this dataset type. | GenericDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'GoogleBigQueryObject' (required) |
// | typeProperties | Properties specific to this dataset type. | GoogleBigQueryDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | dataset | The database name of the Google BigQuery. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | table | The table name of the Google BigQuery. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | tableName | This property will be retired. Please consider using database + table properties instead. | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'GreenplumTable' (required) |
// | typeProperties | Properties specific to this dataset type. | GreenplumDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | schema | The schema name of Greenplum. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | table | The table name of Greenplum. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | tableName | This property will be retired. Please consider using schema + table properties instead. | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'HBaseObject' (required) |
// | typeProperties | Properties specific to this dataset type. | GenericDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'HiveObject' (required) |
// | typeProperties | Properties specific to this dataset type. | HiveDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | schema | The schema name of the Hive. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | table | The table name of the Hive. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | tableName | This property will be retired. Please consider using schema + table properties instead. | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'HttpFile' (required) |
// | typeProperties | Properties specific to this dataset type. | HttpDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | additionalHeaders | The headers for the HTTP Request. e.g. request-header-name-1:request-header-value-1...request-header-name-n:request-header-value-n Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | compression | The data compression method used on files. | DatasetCompression |
// | format | The format of files. | DatasetStorageFormat |
// | relativeUrl | The relative URL based on the URL in the HttpLinkedService refers to an HTTP file Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | requestBody | The body for the HTTP request. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | requestMethod | The HTTP method for the HTTP request. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'HubspotObject' (required) |
// | typeProperties | Properties specific to this dataset type. | GenericDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'ImpalaObject' (required) |
// | typeProperties | Properties specific to this dataset type. | ImpalaDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | schema | The schema name of the Impala. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | table | The table name of the Impala. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | tableName | This property will be retired. Please consider using schema + table properties instead. | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'InformixTable' (required) |
// | typeProperties | Informix table dataset properties. | InformixTableDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | tableName | The Informix table name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'JiraObject' (required) |
// | typeProperties | Properties specific to this dataset type. | GenericDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'Json' (required) |
// | typeProperties | Json dataset properties. | JsonDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | compression | The data compression method used for the json dataset. | DatasetCompression |
// | encodingName | The code page name of the preferred encoding. If not specified, the default value is UTF-8, unless BOM denotes another Unicode encoding. Refer to the name column of the table in the following link to set supported values:https://msdn.microsoft.com/library/system.text.encoding.aspx. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | location | The location of the json data storage. | DatasetLocation(required) |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'MagentoObject' (required) |
// | typeProperties | Properties specific to this dataset type. | GenericDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'MariaDBTable' (required) |
// | typeProperties | Properties specific to this dataset type. | GenericDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'MarketoObject' (required) |
// | typeProperties | Properties specific to this dataset type. | GenericDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'MicrosoftAccessTable' (required) |
// | typeProperties | Microsoft Access table dataset properties. | MicrosoftAccessTableDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | tableName | The Microsoft Access table name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'MongoDbAtlasCollection' (required) |
// | typeProperties | MongoDB Atlas database dataset properties. | MongoDbAtlasCollectionDatasetTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | collection | The collection name of the MongoDB Atlas database. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'MongoDbCollection' (required) |
// | typeProperties | MongoDB database dataset properties. | MongoDbCollectionDatasetTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | collectionName | The table name of the MongoDB database. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'MongoDbV2Collection' (required) |
// | typeProperties | MongoDB database dataset properties. | MongoDbV2CollectionDatasetTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | collection | The collection name of the MongoDB database. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'MySqlTable' (required) |
// | typeProperties | MySQL table dataset properties. | MySqlTableDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | tableName | The MySQL table name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'NetezzaTable' (required) |
// | typeProperties | Properties specific to this dataset type. | NetezzaTableDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | schema | The schema name of the Netezza. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | table | The table name of the Netezza. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | tableName | This property will be retired. Please consider using schema + table properties instead. | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'ODataResource' (required) |
// | typeProperties | OData dataset properties. | ODataResourceDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | path | The OData resource path. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'OdbcTable' (required) |
// | typeProperties | ODBC table dataset properties. | OdbcTableDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | tableName | The ODBC table name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'Office365Table' (required) |
// | typeProperties | Office365 dataset properties. | Office365DatasetTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | predicate | A predicate expression that can be used to filter the specific rows to extract from Office 365. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | tableName | Name of the dataset to extract from Office 365. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'OracleServiceCloudObject' (required) |
// | typeProperties | Properties specific to this dataset type. | GenericDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'OracleTable' (required) |
// | typeProperties | On-premises Oracle dataset properties. | OracleTableDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | schema | The schema name of the on-premises Oracle database. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | table | The table name of the on-premises Oracle database. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | tableName | This property will be retired. Please consider using schema + table properties instead. | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'Orc' (required) |
// | typeProperties | ORC dataset properties. | OrcDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | location | The location of the ORC data storage. | DatasetLocation(required) |
// | orcCompressionCodec | The data orcCompressionCodec. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'Parquet' (required) |
// | typeProperties | Parquet dataset properties. | ParquetDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | compressionCodec | The data compressionCodec. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | location | The location of the parquet storage. | DatasetLocation(required) |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'PaypalObject' (required) |
// | typeProperties | Properties specific to this dataset type. | GenericDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'PhoenixObject' (required) |
// | typeProperties | Properties specific to this dataset type. | PhoenixDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | schema | The schema name of the Phoenix. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | table | The table name of the Phoenix. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | tableName | This property will be retired. Please consider using schema + table properties instead. | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'PostgreSqlTable' (required) |
// | typeProperties | PostgreSQL table dataset properties. | PostgreSqlTableDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | schema | The PostgreSQL schema name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | table | The PostgreSQL table name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | tableName | This property will be retired. Please consider using schema + table properties instead. | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'PrestoObject' (required) |
// | typeProperties | Properties specific to this dataset type. | PrestoDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | schema | The schema name of the Presto. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | table | The table name of the Presto. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | tableName | This property will be retired. Please consider using schema + table properties instead. | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'QuickBooksObject' (required) |
// | typeProperties | Properties specific to this dataset type. | GenericDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'RelationalTable' (required) |
// | typeProperties | Relational table dataset properties. | RelationalTableDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | tableName | The relational table name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'ResponsysObject' (required) |
// | typeProperties | Properties specific to this dataset type. | GenericDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'RestResource' (required) |
// | typeProperties | Properties specific to this dataset type. | RestResourceDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | additionalHeaders | The additional HTTP headers in the request to the RESTful API. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | paginationRules | The pagination rules to compose next page requests. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | relativeUrl | The relative URL to the resource that the RESTful API provides. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | requestBody | The HTTP request body to the RESTful API if requestMethod is POST. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | requestMethod | The HTTP method used to call the RESTful API. The default is GET. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'SalesforceMarketingCloudObject' (required) |
// | typeProperties | Properties specific to this dataset type. | GenericDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'SalesforceObject' (required) |
// | typeProperties | Salesforce object dataset properties. | SalesforceObjectDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | objectApiName | The Salesforce object API name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'SalesforceServiceCloudObject' (required) |
// | typeProperties | Salesforce Service Cloud object dataset properties. | SalesforceServiceCloudObjectDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | objectApiName | The Salesforce Service Cloud object API name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'SapBwCube' (required) |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'SapCloudForCustomerResource' (required) |
// | typeProperties | SAP Cloud For Customer OData resource dataset properties. | SapCloudForCustomerResourceDatasetTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | path | The path of the SAP Cloud for Customer OData entity. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'SapEccResource' (required) |
// | typeProperties | SAP ECC OData resource dataset properties. | SapEccResourceDatasetTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | path | The path of the SAP ECC OData entity. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'SapHanaTable' (required) |
// | typeProperties | SAP HANA Table properties. | SapHanaTableDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | schema | The schema name of SAP HANA. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | table | The table name of SAP HANA. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'SapOdpResource' (required) |
// | typeProperties | SAP ODP Resource properties. | SapOdpResourceDatasetTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | context | The context of the SAP ODP Object. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | objectName | The name of the SAP ODP Object. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'SapOpenHubTable' (required) |
// | typeProperties | Sap Business Warehouse Open Hub Destination Table properties. | SapOpenHubTableDatasetTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | baseRequestId | The ID of request for delta loading. Once it is set, only data with requestId larger than the value of this property will be retrieved. The default value is 0. Type: integer (or Expression with resultType integer ). | For Bicep, you can use theany()function. |
// | excludeLastRequest | Whether to exclude the records of the last request. The default value is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
// | openHubDestinationName | The name of the Open Hub Destination with destination type as Database Table. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'SapTableResource' (required) |
// | typeProperties | SAP Table Resource properties. | SapTableResourceDatasetTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | tableName | The name of the SAP Table. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'ServiceNowObject' (required) |
// | typeProperties | Properties specific to this dataset type. | GenericDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'SharePointOnlineListResource' (required) |
// | typeProperties | Sharepoint online list dataset properties. | SharePointOnlineListDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | listName | The name of the SharePoint Online list. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'ShopifyObject' (required) |
// | typeProperties | Properties specific to this dataset type. | GenericDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'SnowflakeTable' (required) |
// | typeProperties | Snowflake dataset properties. | SnowflakeDatasetTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | schema | The schema name of the Snowflake database. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | table | The table name of the Snowflake database. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'SparkObject' (required) |
// | typeProperties | Properties specific to this dataset type. | SparkDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | schema | The schema name of the Spark. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | table | The table name of the Spark. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | tableName | This property will be retired. Please consider using schema + table properties instead. | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'SqlServerTable' (required) |
// | typeProperties | On-premises SQL Server dataset properties. | SqlServerTableDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | schema | The schema name of the SQL Server dataset. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | table | The table name of the SQL Server dataset. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | tableName | This property will be retired. Please consider using schema + table properties instead. | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'SquareObject' (required) |
// | typeProperties | Properties specific to this dataset type. | GenericDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'SybaseTable' (required) |
// | typeProperties | Sybase table dataset properties. | SybaseTableDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | tableName | The Sybase table name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'TeradataTable' (required) |
// | typeProperties | Teradata dataset properties. | TeradataTableDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | database | The database name of Teradata. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | table | The table name of Teradata. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'VerticaTable' (required) |
// | typeProperties | Properties specific to this dataset type. | VerticaDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | schema | The schema name of the Vertica. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | table | The table name of the Vertica. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | tableName | This property will be retired. Please consider using schema + table properties instead. | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'WebTable' (required) |
// | typeProperties | Web table dataset properties. | WebTableDatasetTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | index | The zero-based index of the table in the web page. Type: integer (or Expression with resultType integer), minimum: 0. | For Bicep, you can use theany()function.(required) |
// | path | The relative URL to the web page from the linked service URL. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'XeroObject' (required) |
// | typeProperties | Properties specific to this dataset type. | GenericDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'Xml' (required) |
// | typeProperties | Xml dataset properties. | XmlDatasetTypeProperties |

// | Name | Description | Value |
// |-|-|-|
// | compression | The data compression method used for the json dataset. | DatasetCompression |
// | encodingName | The code page name of the preferred encoding. If not specified, the default value is UTF-8, unless BOM denotes another Unicode encoding. Refer to the name column of the table in the following link to set supported values:https://msdn.microsoft.com/library/system.text.encoding.aspx. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | location | The location of the json data storage. | DatasetLocation(required) |
// | nullValue | The null value string. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of dataset. | 'ZohoObject' (required) |
// | typeProperties | Properties specific to this dataset type. | GenericDatasetTypeProperties |
