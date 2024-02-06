## Microsoft.DataFactory/factories@2018-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataFactory/factories@2018-06-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      encryption = {
        identity = {
          userAssignedIdentity = "string"
        }
        keyName = "string"
        keyVersion = "string"
        vaultBaseUrl = "string"
      }
      globalParameters = {}
      publicNetworkAccess = "string"
      purviewConfiguration = {
        purviewResourceId = "string"
      }
      repoConfiguration = {
        accountName = "string"
        collaborationBranch = "string"
        disablePublish = bool
        lastCommitId = "string"
        repositoryName = "string"
        rootFolder = "string"
        type = "string"
        // For remaining properties, see FactoryRepoConfiguration objects
      }
    }
  })
}

```

### factories

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 3-63Valid characters:Alphanumerics and hyphens.Start and end with alphanumeric.Resource name must be unique across Azure. |
| location | The resource location. | string |
| tags | The resource tags. | Dictionary of tag names and values. SeeTags in templates |
| identity | Managed service identity of the factory. | FactoryIdentity |
| properties | Properties of the factory. | FactoryProperties |


### FactoryIdentity

| Name | Description | Value |
|-|-|-|
| type | The identity type. | 'SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' (required) |
| userAssignedIdentities | List of user assigned identities for the factory. | object |


### FactoryProperties

| Name | Description | Value |
|-|-|-|
| encryption | Properties to enable Customer Managed Key for the factory. | EncryptionConfiguration |
| globalParameters | List of parameters for factory. | object |
| publicNetworkAccess | Whether or not public network access is allowed for the data factory. | 'Disabled''Enabled' |
| purviewConfiguration | Purview information of the factory. | PurviewConfiguration |
| repoConfiguration | Git repo information of the factory. | FactoryRepoConfiguration |


### EncryptionConfiguration

| Name | Description | Value |
|-|-|-|
| identity | User assigned identity to use to authenticate to customer's key vault. If not provided Managed Service Identity will be used. | CMKIdentityDefinition |
| keyName | The name of the key in Azure Key Vault to use as Customer Managed Key. | string (required) |
| keyVersion | The version of the key used for CMK. If not provided, latest version will be used. | string |
| vaultBaseUrl | The url of the Azure Key Vault used for CMK. | string (required) |


### CMKIdentityDefinition

| Name | Description | Value |
|-|-|-|
| userAssignedIdentity | The resource id of the user assigned identity to authenticate to customer's key vault. | string |


### PurviewConfiguration

| Name | Description | Value |
|-|-|-|
| purviewResourceId | Purview resource id. | string |


### FactoryRepoConfiguration

| Name | Description | Value |
|-|-|-|
| accountName | Account name. | string (required) |
| collaborationBranch | Collaboration branch. | string (required) |
| disablePublish | Disable manual publish operation in ADF studio to favor automated publish. | bool |
| lastCommitId | Last commit id. | string |
| repositoryName | Repository name. | string (required) |
| rootFolder | Root folder. | string (required) |
| type | Set the object type | FactoryGitHubConfigurationFactoryVSTSConfiguration(required) |


### FactoryGitHubConfiguration

| Name | Description | Value |
|-|-|-|
| type | Type of repo configuration. | 'FactoryGitHubConfiguration' (required) |
| clientId | GitHub bring your own app client id. | string |
| clientSecret | GitHub bring your own app client secret information. | GitHubClientSecret |
| hostName | GitHub Enterprise host name. For example:https://github.mydomain.com | string |


### GitHubClientSecret

| Name | Description | Value |
|-|-|-|
| byoaSecretAkvUrl | Bring your own app client secret AKV URL. | string |
| byoaSecretName | Bring your own app client secret name in AKV. | string |


### FactoryVstsConfiguration

| Name | Description | Value |
|-|-|-|
| type | Type of repo configuration. | 'FactoryVSTSConfiguration' (required) |
| projectName | VSTS project name. | string (required) |
| tenantId | VSTS tenant id. | string |
## Microsoft.DataFactory/factories/credentials@2018-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataFactory/factories/credentials@2018-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      annotations = [ object ]
      description = "string"
      type = "string"
      typeProperties = {
        resourceId = "string"
      }
    }
  })
}

```

### factories/credentials

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:factories |
| properties | Managed Identity Credential properties. | ManagedIdentityCredential(required) |


### ManagedIdentityCredential

| Name | Description | Value |
|-|-|-|
| annotations | List of tags that can be used for describing the Credential. | any[] |
| description | Credential description. | string |
| type | Type of credential. | string (required) |
| typeProperties | Managed identity credential properties. | ManagedIdentityTypeProperties |


### ManagedIdentityTypeProperties

| Name | Description | Value |
|-|-|-|
| resourceId | The resource id of user assigned managed identity | string |
## Microsoft.DataFactory/factories/dataflows@2018-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataFactory/factories/dataflows@2018-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      annotations = [ object ]
      description = "string"
      folder = {
        name = "string"
      }
      type = "string"
      // For remaining properties, see DataFlow objects
    }
  })
}

```

### factories/dataflows

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-260Valid characters:Can't use:<>*#.%&:\\+?/or control charactersStart with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:factories |
| properties | Data flow properties. | DataFlow(required) |


### DataFlow

| Name | Description | Value |
|-|-|-|
| annotations | List of tags that can be used for describing the data flow. | any[] |
| description | The description of the data flow. | string |
| folder | The folder that this data flow is in. If not specified, Data flow will appear at the root level. | DataFlowFolder |
| type | Set the object type | FlowletMappingDataFlowWranglingDataFlow(required) |


### DataFlowFolder

| Name | Description | Value |
|-|-|-|
| name | The name of the folder that this data flow is in. | string |


### Flowlet

| Name | Description | Value |
|-|-|-|
| type | Type of data flow. | 'Flowlet' (required) |
| typeProperties | Flowlet type properties. | FlowletTypeProperties |


### FlowletTypeProperties

| Name | Description | Value |
|-|-|-|
| script | Flowlet script. | string |
| scriptLines | Flowlet script lines. | string[] |
| sinks | List of sinks in Flowlet. | DataFlowSink[] |
| sources | List of sources in Flowlet. | DataFlowSource[] |
| transformations | List of transformations in Flowlet. | Transformation[] |


### DataFlowSink

| Name | Description | Value |
|-|-|-|
| dataset | Dataset reference. | DatasetReference |
| description | Transformation description. | string |
| flowlet | Flowlet Reference | DataFlowReference |
| linkedService | Linked service reference. | LinkedServiceReference |
| name | Transformation name. | string (required) |
| rejectedDataLinkedService | Rejected data linked service reference. | LinkedServiceReference |
| schemaLinkedService | Schema linked service reference. | LinkedServiceReference |


### DatasetReference

| Name | Description | Value |
|-|-|-|
| parameters | Arguments for dataset. | object |
| referenceName | Reference dataset name. | string (required) |
| type | Dataset reference type. | 'DatasetReference' (required) |


### DataFlowReference

| Name | Description | Value |
|-|-|-|
| datasetParameters | Reference data flow parameters from dataset. | For Bicep, you can use theany()function. |
| parameters | Data flow parameters | object |
| referenceName | Reference data flow name. | string (required) |
| type | Data flow reference type. | 'DataFlowReference' (required) |


### LinkedServiceReference

| Name | Description | Value |
|-|-|-|
| parameters | Arguments for LinkedService. | object |
| referenceName | Reference LinkedService name. | string (required) |
| type | Linked service reference type. | 'LinkedServiceReference' (required) |


### DataFlowSource

| Name | Description | Value |
|-|-|-|
| dataset | Dataset reference. | DatasetReference |
| description | Transformation description. | string |
| flowlet | Flowlet Reference | DataFlowReference |
| linkedService | Linked service reference. | LinkedServiceReference |
| name | Transformation name. | string (required) |
| schemaLinkedService | Schema linked service reference. | LinkedServiceReference |


### Transformation

| Name | Description | Value |
|-|-|-|
| dataset | Dataset reference. | DatasetReference |
| description | Transformation description. | string |
| flowlet | Flowlet Reference | DataFlowReference |
| linkedService | Linked service reference. | LinkedServiceReference |
| name | Transformation name. | string (required) |


### MappingDataFlow

| Name | Description | Value |
|-|-|-|
| type | Type of data flow. | 'MappingDataFlow' (required) |
| typeProperties | Mapping data flow type properties. | MappingDataFlowTypeProperties |


### MappingDataFlowTypeProperties

| Name | Description | Value |
|-|-|-|
| script | DataFlow script. | string |
| scriptLines | Data flow script lines. | string[] |
| sinks | List of sinks in data flow. | DataFlowSink[] |
| sources | List of sources in data flow. | DataFlowSource[] |
| transformations | List of transformations in data flow. | Transformation[] |


### WranglingDataFlow

| Name | Description | Value |
|-|-|-|
| type | Type of data flow. | 'WranglingDataFlow' (required) |
| typeProperties | PowerQuery data flow type properties. | PowerQueryTypeProperties |


### PowerQueryTypeProperties

| Name | Description | Value |
|-|-|-|
| documentLocale | Locale of the Power query mashup document. | string |
| script | Power query mashup script. | string |
| sources | List of sources in Power Query. | PowerQuerySource[] |


### PowerQuerySource

| Name | Description | Value |
|-|-|-|
| dataset | Dataset reference. | DatasetReference |
| description | Transformation description. | string |
| flowlet | Flowlet Reference | DataFlowReference |
| linkedService | Linked service reference. | LinkedServiceReference |
| name | Transformation name. | string (required) |
| schemaLinkedService | Schema linked service reference. | LinkedServiceReference |
| script | source script. | string |
## Microsoft.DataFactory/factories/datasets@2018-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataFactory/factories/datasets@2018-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      annotations = [ object ]
      description = "string"
      folder = {
        name = "string"
      }
      linkedServiceName = {
        parameters = {}
        referenceName = "string"
        type = "LinkedServiceReference"
      }
      parameters = {}
      type = "string"
      // For remaining properties, see Dataset objects
    }
  })
}

```

### factories/datasets

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-260Valid characters:Can't use:<>*#.%&:\\+?/or control charactersStart with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:factories |
| properties | Dataset properties. | Dataset(required) |


### Dataset

| Name | Description | Value |
|-|-|-|
| annotations | List of tags that can be used for describing the Dataset. | any[] |
| description | Dataset description. | string |
| folder | The folder that this Dataset is in. If not specified, Dataset will appear at the root level. | DatasetFolder |
| linkedServiceName | Linked service reference. | LinkedServiceReference(required) |
| parameters | Parameters for dataset. | object |
| schema | Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement. | For Bicep, you can use theany()function. |
| structure | Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement. | For Bicep, you can use theany()function. |
| type | Set the object type | AmazonMWSObjectAmazonRdsForOracleTableAmazonRdsForSqlServerTableAmazonRedshiftTableAmazonS3ObjectAvroAzureBlobAzureBlobFSFileAzureDatabricksDeltaLakeDatasetAzureDataExplorerTableAzureDataLakeStoreFileAzureMariaDBTableAzureMySqlTableAzurePostgreSqlTableAzureSearchIndexAzureSqlDWTableAzureSqlMITableAzureSqlTableAzureTableBinaryCassandraTableCommonDataServiceForAppsEntityConcurObjectCosmosDbMongoDbApiCollectionCosmosDbSqlApiCollectionCouchbaseTableCustomDatasetDb2TableDelimitedTextDocumentDbCollectionDrillTableDynamicsAXResourceDynamicsCrmEntityDynamicsEntityEloquaObjectExcelFileShareGoogleAdWordsObjectGoogleBigQueryObjectGreenplumTableHBaseObjectHiveObjectHttpFileHubspotObjectImpalaObjectInformixTableJiraObjectJsonMagentoObjectMariaDBTableMarketoObjectMicrosoftAccessTableMongoDbAtlasCollectionMongoDbCollectionMongoDbV2CollectionMySqlTableNetezzaTableODataResourceOdbcTableOffice365TableOracleServiceCloudObjectOracleTableOrcParquetPaypalObjectPhoenixObjectPostgreSqlTablePrestoObjectQuickBooksObjectRelationalTableResponsysObjectRestResourceSalesforceMarketingCloudObjectSalesforceObjectSalesforceServiceCloudObjectSapBwCubeSapCloudForCustomerResourceSapEccResourceSapHanaTableSapOdpResourceSapOpenHubTableSapTableResourceServiceNowObjectSharePointOnlineListResourceShopifyObjectSnowflakeTableSparkObjectSqlServerTableSquareObjectSybaseTableTeradataTableVerticaTableWebTableXeroObjectXmlZohoObject(required) |


### DatasetFolder

| Name | Description | Value |
|-|-|-|
| name | The name of the folder that this Dataset is in. | string |


### LinkedServiceReference

| Name | Description | Value |
|-|-|-|
| parameters | Arguments for LinkedService. | object |
| referenceName | Reference LinkedService name. | string (required) |
| type | Linked service reference type. | 'LinkedServiceReference' (required) |


### AmazonMWSObjectDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'AmazonMWSObject' (required) |
| typeProperties | Properties specific to this dataset type. | GenericDatasetTypeProperties |


### GenericDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| tableName | The table name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### AmazonRdsForOracleTableDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'AmazonRdsForOracleTable' (required) |
| typeProperties | AmazonRdsForOracle dataset properties. | AmazonRdsForOracleTableDatasetTypeProperties |


### AmazonRdsForOracleTableDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| schema | The schema name of the AmazonRdsForOracle database. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| table | The table name of the AmazonRdsForOracle database. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### AmazonRdsForSqlServerTableDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'AmazonRdsForSqlServerTable' (required) |
| typeProperties | The Amazon RDS for SQL Server dataset properties. | AmazonRdsForSqlServerTableDatasetTypeProperties |


### AmazonRdsForSqlServerTableDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| schema | The schema name of the SQL Server dataset. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| table | The table name of the SQL Server dataset. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### AmazonRedshiftTableDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'AmazonRedshiftTable' (required) |
| typeProperties | Amazon Redshift table dataset properties. | AmazonRedshiftTableDatasetTypeProperties |


### AmazonRedshiftTableDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| schema | The Amazon Redshift schema name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| table | The Amazon Redshift table name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| tableName | This property will be retired. Please consider using schema + table properties instead. | For Bicep, you can use theany()function. |


### AmazonS3Dataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'AmazonS3Object' (required) |
| typeProperties | Amazon S3 dataset properties. | AmazonS3DatasetTypeProperties(required) |


### AmazonS3DatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| bucketName | The name of the Amazon S3 bucket. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| compression | The data compression method used for the Amazon S3 object. | DatasetCompression |
| format | The format of files. | DatasetStorageFormat |
| key | The key of the Amazon S3 object. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| modifiedDatetimeEnd | The end of S3 object's modified datetime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| modifiedDatetimeStart | The start of S3 object's modified datetime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| prefix | The prefix filter for the S3 object name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| version | The version for the S3 object. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### DatasetCompression

| Name | Description | Value |
|-|-|-|
| level | The dataset compression level. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| type | Type of dataset compression. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |


### DatasetStorageFormat

| Name | Description | Value |
|-|-|-|
| deserializer | Deserializer. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| serializer | Serializer. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| type | Set the object type | AvroFormatJsonFormatOrcFormatParquetFormatTextFormat(required) |


### AvroFormat

| Name | Description | Value |
|-|-|-|
| type | Type of dataset storage format. | 'AvroFormat' (required) |


### JsonFormat

| Name | Description | Value |
|-|-|-|
| type | Type of dataset storage format. | 'JsonFormat' (required) |
| encodingName | The code page name of the preferred encoding. If not provided, the default value is 'utf-8', unless the byte order mark (BOM) denotes another Unicode encoding. The full list of supported values can be found in the 'Name' column of the table of encodings in the following reference:https://go.microsoft.com/fwlink/?linkid=861078. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| filePattern | File pattern of JSON. To be more specific, the way of separating a collection of JSON objects. The default value is 'setOfObjects'. It is case-sensitive. | For Bicep, you can use theany()function. |
| jsonNodeReference | The JSONPath of the JSON array element to be flattened. Example: "$.ArrayPath". Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| jsonPathDefinition | The JSONPath definition for each column mapping with a customized column name to extract data from JSON file. For fields under root object, start with "$"; for fields inside the array chosen by jsonNodeReference property, start from the array element. Example: {"Column1": "$.Column1Path", "Column2": "Column2PathInArray"}. Type: object (or Expression with resultType object). | For Bicep, you can use theany()function. |
| nestingSeparator | The character used to separate nesting levels. Default value is '.' (dot). Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### OrcFormat

| Name | Description | Value |
|-|-|-|
| type | Type of dataset storage format. | 'OrcFormat' (required) |


### ParquetFormat

| Name | Description | Value |
|-|-|-|
| type | Type of dataset storage format. | 'ParquetFormat' (required) |


### TextFormat

| Name | Description | Value |
|-|-|-|
| type | Type of dataset storage format. | 'TextFormat' (required) |
| columnDelimiter | The column delimiter. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| encodingName | The code page name of the preferred encoding. If miss, the default value is ÎÃÂ£utf-8ÎÃÂ¥, unless BOM denotes another Unicode encoding. Refer to the ÎÃÂ£NameÎÃÂ¥ column of the table in the following link to set supported values:https://msdn.microsoft.com/library/system.text.encoding.aspx. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| escapeChar | The escape character. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| firstRowAsHeader | When used as input, treat the first row of data as headers. When used as output,write the headers into the output as the first row of data. The default value is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| nullValue | The null value string. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| quoteChar | The quote character. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| rowDelimiter | The row delimiter. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| skipLineCount | The number of lines/rows to be skipped when parsing text files. The default value is 0. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |
| treatEmptyAsNull | Treat empty column values in the text file as null. The default value is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |


### AvroDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'Avro' (required) |
| typeProperties | Avro dataset properties. | AvroDatasetTypeProperties |


### AvroDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| avroCompressionCodec | The data avroCompressionCodec. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| avroCompressionLevel |  | int |
| location | The location of the avro storage. | DatasetLocation(required) |


### DatasetLocation

| Name | Description | Value |
|-|-|-|
| fileName | Specify the file name of dataset. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| folderPath | Specify the folder path of dataset. Type: string (or Expression with resultType string) | For Bicep, you can use theany()function. |
| type | Set the object type | AmazonS3CompatibleLocationAmazonS3LocationAzureBlobFSLocationAzureBlobStorageLocationAzureDataLakeStoreLocationAzureFileStorageLocationFileServerLocationFtpServerLocationGoogleCloudStorageLocationHdfsLocationHttpServerLocationOracleCloudStorageLocationSftpLocation(required) |


### AmazonS3CompatibleLocation

| Name | Description | Value |
|-|-|-|
| type | Type of dataset storage location. | 'AmazonS3CompatibleLocation' (required) |
| bucketName | Specify the bucketName of Amazon S3 Compatible. Type: string (or Expression with resultType string) | For Bicep, you can use theany()function. |
| version | Specify the version of Amazon S3 Compatible. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### AmazonS3Location

| Name | Description | Value |
|-|-|-|
| type | Type of dataset storage location. | 'AmazonS3Location' (required) |
| bucketName | Specify the bucketName of amazon S3. Type: string (or Expression with resultType string) | For Bicep, you can use theany()function. |
| version | Specify the version of amazon S3. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### AzureBlobFSLocation

| Name | Description | Value |
|-|-|-|
| type | Type of dataset storage location. | 'AzureBlobFSLocation' (required) |
| fileSystem | Specify the fileSystem of azure blobFS. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### AzureBlobStorageLocation

| Name | Description | Value |
|-|-|-|
| type | Type of dataset storage location. | 'AzureBlobStorageLocation' (required) |
| container | Specify the container of azure blob. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### AzureDataLakeStoreLocation

| Name | Description | Value |
|-|-|-|
| type | Type of dataset storage location. | 'AzureDataLakeStoreLocation' (required) |


### AzureFileStorageLocation

| Name | Description | Value |
|-|-|-|
| type | Type of dataset storage location. | 'AzureFileStorageLocation' (required) |


### FileServerLocation

| Name | Description | Value |
|-|-|-|
| type | Type of dataset storage location. | 'FileServerLocation' (required) |


### FtpServerLocation

| Name | Description | Value |
|-|-|-|
| type | Type of dataset storage location. | 'FtpServerLocation' (required) |


### GoogleCloudStorageLocation

| Name | Description | Value |
|-|-|-|
| type | Type of dataset storage location. | 'GoogleCloudStorageLocation' (required) |
| bucketName | Specify the bucketName of Google Cloud Storage. Type: string (or Expression with resultType string) | For Bicep, you can use theany()function. |
| version | Specify the version of Google Cloud Storage. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### HdfsLocation

| Name | Description | Value |
|-|-|-|
| type | Type of dataset storage location. | 'HdfsLocation' (required) |


### HttpServerLocation

| Name | Description | Value |
|-|-|-|
| type | Type of dataset storage location. | 'HttpServerLocation' (required) |
| relativeUrl | Specify the relativeUrl of http server. Type: string (or Expression with resultType string) | For Bicep, you can use theany()function. |


### OracleCloudStorageLocation

| Name | Description | Value |
|-|-|-|
| type | Type of dataset storage location. | 'OracleCloudStorageLocation' (required) |
| bucketName | Specify the bucketName of Oracle Cloud Storage. Type: string (or Expression with resultType string) | For Bicep, you can use theany()function. |
| version | Specify the version of Oracle Cloud Storage. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### SftpLocation

| Name | Description | Value |
|-|-|-|
| type | Type of dataset storage location. | 'SftpLocation' (required) |


### AzureBlobDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'AzureBlob' (required) |
| typeProperties | Azure Blob dataset properties. | AzureBlobDatasetTypeProperties |


### AzureBlobDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| compression | The data compression method used for the blob storage. | DatasetCompression |
| fileName | The name of the Azure Blob. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| folderPath | The path of the Azure Blob storage. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| format | The format of the Azure Blob storage. | DatasetStorageFormat |
| modifiedDatetimeEnd | The end of Azure Blob's modified datetime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| modifiedDatetimeStart | The start of Azure Blob's modified datetime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| tableRootLocation | The root of blob path. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### AzureBlobFSDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'AzureBlobFSFile' (required) |
| typeProperties | Azure Data Lake Storage Gen2 dataset properties. | AzureBlobFSDatasetTypeProperties |


### AzureBlobFSDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| compression | The data compression method used for the blob storage. | DatasetCompression |
| fileName | The name of the Azure Data Lake Storage Gen2. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| folderPath | The path of the Azure Data Lake Storage Gen2 storage. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| format | The format of the Azure Data Lake Storage Gen2 storage. | DatasetStorageFormat |


### AzureDatabricksDeltaLakeDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'AzureDatabricksDeltaLakeDataset' (required) |
| typeProperties | Properties specific to this dataset type. | AzureDatabricksDeltaLakeDatasetTypeProperties |


### AzureDatabricksDeltaLakeDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| database | The database name of delta table. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| table | The name of delta table. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### AzureDataExplorerTableDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'AzureDataExplorerTable' (required) |
| typeProperties | Azure Data Explorer (Kusto) dataset properties. | AzureDataExplorerDatasetTypeProperties(required) |


### AzureDataExplorerDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| table | The table name of the Azure Data Explorer database. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### AzureDataLakeStoreDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'AzureDataLakeStoreFile' (required) |
| typeProperties | Azure Data Lake Store dataset properties. | AzureDataLakeStoreDatasetTypeProperties |


### AzureDataLakeStoreDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| compression | The data compression method used for the item(s) in the Azure Data Lake Store. | DatasetCompression |
| fileName | The name of the file in the Azure Data Lake Store. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| folderPath | Path to the folder in the Azure Data Lake Store. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| format | The format of the Data Lake Store. | DatasetStorageFormat |


### AzureMariaDBTableDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'AzureMariaDBTable' (required) |
| typeProperties | Properties specific to this dataset type. | GenericDatasetTypeProperties |


### AzureMySqlTableDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'AzureMySqlTable' (required) |
| typeProperties | Azure MySQL database dataset properties. | AzureMySqlTableDatasetTypeProperties(required) |


### AzureMySqlTableDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| table | The name of Azure MySQL database table. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| tableName | The Azure MySQL database table name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### AzurePostgreSqlTableDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'AzurePostgreSqlTable' (required) |
| typeProperties | Properties specific to this dataset type. | AzurePostgreSqlTableDatasetTypeProperties |


### AzurePostgreSqlTableDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| schema | The schema name of the Azure PostgreSQL database. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| table | The table name of the Azure PostgreSQL database. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| tableName | The table name of the Azure PostgreSQL database which includes both schema and table. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### AzureSearchIndexDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'AzureSearchIndex' (required) |
| typeProperties | Properties specific to this dataset type. | AzureSearchIndexDatasetTypeProperties(required) |


### AzureSearchIndexDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| indexName | The name of the Azure Search Index. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |


### AzureSqlDWTableDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'AzureSqlDWTable' (required) |
| typeProperties | Azure SQL Data Warehouse dataset properties. | AzureSqlDWTableDatasetTypeProperties |


### AzureSqlDWTableDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| schema | The schema name of the Azure SQL Data Warehouse. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| table | The table name of the Azure SQL Data Warehouse. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| tableName | This property will be retired. Please consider using schema + table properties instead. | For Bicep, you can use theany()function. |


### AzureSqlMITableDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'AzureSqlMITable' (required) |
| typeProperties | Azure SQL Managed Instance dataset properties. | AzureSqlMITableDatasetTypeProperties |


### AzureSqlMITableDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| schema | The schema name of the Azure SQL Managed Instance. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| table | The table name of the Azure SQL Managed Instance dataset. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| tableName | This property will be retired. Please consider using schema + table properties instead. | For Bicep, you can use theany()function. |


### AzureSqlTableDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'AzureSqlTable' (required) |
| typeProperties | Azure SQL dataset properties. | AzureSqlTableDatasetTypeProperties |


### AzureSqlTableDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| schema | The schema name of the Azure SQL database. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| table | The table name of the Azure SQL database. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| tableName | This property will be retired. Please consider using schema + table properties instead. | For Bicep, you can use theany()function. |


### AzureTableDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'AzureTable' (required) |
| typeProperties | Azure Table dataset properties. | AzureTableDatasetTypeProperties(required) |


### AzureTableDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| tableName | The table name of the Azure Table storage. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |


### BinaryDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'Binary' (required) |
| typeProperties | Binary dataset properties. | BinaryDatasetTypeProperties |


### BinaryDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| compression | The data compression method used for the binary dataset. | DatasetCompression |
| location | The location of the Binary storage. | DatasetLocation(required) |


### CassandraTableDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'CassandraTable' (required) |
| typeProperties | Cassandra dataset properties. | CassandraTableDatasetTypeProperties |


### CassandraTableDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| keyspace | The keyspace of the Cassandra database. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| tableName | The table name of the Cassandra database. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### CommonDataServiceForAppsEntityDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'CommonDataServiceForAppsEntity' (required) |
| typeProperties | Common Data Service for Apps entity dataset properties. | CommonDataServiceForAppsEntityDatasetTypeProperties |


### CommonDataServiceForAppsEntityDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| entityName | The logical name of the entity. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### ConcurObjectDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'ConcurObject' (required) |
| typeProperties | Properties specific to this dataset type. | GenericDatasetTypeProperties |


### CosmosDbMongoDbApiCollectionDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'CosmosDbMongoDbApiCollection' (required) |
| typeProperties | CosmosDB (MongoDB API) database dataset properties. | CosmosDbMongoDbApiCollectionDatasetTypeProperties(required) |


### CosmosDbMongoDbApiCollectionDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| collection | The collection name of the CosmosDB (MongoDB API) database. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |


### CosmosDbSqlApiCollectionDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'CosmosDbSqlApiCollection' (required) |
| typeProperties | CosmosDB (SQL API) Collection dataset properties. | CosmosDbSqlApiCollectionDatasetTypeProperties(required) |


### CosmosDbSqlApiCollectionDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| collectionName | CosmosDB (SQL API) collection name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |


### CouchbaseTableDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'CouchbaseTable' (required) |
| typeProperties | Properties specific to this dataset type. | GenericDatasetTypeProperties |


### CustomDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'CustomDataset' (required) |
| typeProperties | Custom dataset properties. | For Bicep, you can use theany()function. |


### Db2TableDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'Db2Table' (required) |
| typeProperties | Db2 table dataset properties. | Db2TableDatasetTypeProperties |


### Db2TableDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| schema | The Db2 schema name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| table | The Db2 table name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| tableName | This property will be retired. Please consider using schema + table properties instead. | For Bicep, you can use theany()function. |


### DelimitedTextDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'DelimitedText' (required) |
| typeProperties | Delimited text dataset properties. | DelimitedTextDatasetTypeProperties |


### DelimitedTextDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| columnDelimiter | The column delimiter. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| compressionCodec | The data compressionCodec. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| compressionLevel | The data compression method used for DelimitedText. | For Bicep, you can use theany()function. |
| encodingName | The code page name of the preferred encoding. If miss, the default value is UTF-8, unless BOM denotes another Unicode encoding. Refer to the name column of the table in the following link to set supported values:https://msdn.microsoft.com/library/system.text.encoding.aspx. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| escapeChar | The escape character. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| firstRowAsHeader | When used as input, treat the first row of data as headers. When used as output,write the headers into the output as the first row of data. The default value is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| location | The location of the delimited text storage. | DatasetLocation(required) |
| nullValue | The null value string. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| quoteChar | The quote character. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| rowDelimiter | The row delimiter. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### DocumentDbCollectionDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'DocumentDbCollection' (required) |
| typeProperties | DocumentDB Collection dataset properties. | DocumentDbCollectionDatasetTypeProperties(required) |


### DocumentDbCollectionDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| collectionName | Document Database collection name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |


### DrillTableDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'DrillTable' (required) |
| typeProperties | Properties specific to this dataset type. | DrillDatasetTypeProperties |


### DrillDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| schema | The schema name of the Drill. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| table | The table name of the Drill. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| tableName | This property will be retired. Please consider using schema + table properties instead. | For Bicep, you can use theany()function. |


### DynamicsAXResourceDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'DynamicsAXResource' (required) |
| typeProperties | Dynamics AX OData resource dataset properties. | DynamicsAXResourceDatasetTypeProperties(required) |


### DynamicsAXResourceDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| path | The path of the Dynamics AX OData entity. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |


### DynamicsCrmEntityDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'DynamicsCrmEntity' (required) |
| typeProperties | Dynamics CRM entity dataset properties. | DynamicsCrmEntityDatasetTypeProperties |


### DynamicsCrmEntityDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| entityName | The logical name of the entity. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### DynamicsEntityDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'DynamicsEntity' (required) |
| typeProperties | Dynamics entity dataset properties. | DynamicsEntityDatasetTypeProperties |


### DynamicsEntityDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| entityName | The logical name of the entity. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### EloquaObjectDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'EloquaObject' (required) |
| typeProperties | Properties specific to this dataset type. | GenericDatasetTypeProperties |


### ExcelDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'Excel' (required) |
| typeProperties | Excel dataset properties. | ExcelDatasetTypeProperties |


### ExcelDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| compression | The data compression method used for the json dataset. | DatasetCompression |
| firstRowAsHeader | When used as input, treat the first row of data as headers. When used as output,write the headers into the output as the first row of data. The default value is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| location | The location of the excel storage. | DatasetLocation(required) |
| nullValue | The null value string. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| range | The partial data of one sheet. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| sheetIndex | The sheet index of excel file and default value is 0. Type: integer (or Expression with resultType integer) | For Bicep, you can use theany()function. |
| sheetName | The sheet name of excel file. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### FileShareDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'FileShare' (required) |
| typeProperties | On-premises file system dataset properties. | FileShareDatasetTypeProperties |


### FileShareDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| compression | The data compression method used for the file system. | DatasetCompression |
| fileFilter | Specify a filter to be used to select a subset of files in the folderPath rather than all files. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| fileName | The name of the on-premises file system. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| folderPath | The path of the on-premises file system. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| format | The format of the files. | DatasetStorageFormat |
| modifiedDatetimeEnd | The end of file's modified datetime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| modifiedDatetimeStart | The start of file's modified datetime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### GoogleAdWordsObjectDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'GoogleAdWordsObject' (required) |
| typeProperties | Properties specific to this dataset type. | GenericDatasetTypeProperties |


### GoogleBigQueryObjectDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'GoogleBigQueryObject' (required) |
| typeProperties | Properties specific to this dataset type. | GoogleBigQueryDatasetTypeProperties |


### GoogleBigQueryDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| dataset | The database name of the Google BigQuery. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| table | The table name of the Google BigQuery. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| tableName | This property will be retired. Please consider using database + table properties instead. | For Bicep, you can use theany()function. |


### GreenplumTableDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'GreenplumTable' (required) |
| typeProperties | Properties specific to this dataset type. | GreenplumDatasetTypeProperties |


### GreenplumDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| schema | The schema name of Greenplum. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| table | The table name of Greenplum. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| tableName | This property will be retired. Please consider using schema + table properties instead. | For Bicep, you can use theany()function. |


### HBaseObjectDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'HBaseObject' (required) |
| typeProperties | Properties specific to this dataset type. | GenericDatasetTypeProperties |


### HiveObjectDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'HiveObject' (required) |
| typeProperties | Properties specific to this dataset type. | HiveDatasetTypeProperties |


### HiveDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| schema | The schema name of the Hive. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| table | The table name of the Hive. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| tableName | This property will be retired. Please consider using schema + table properties instead. | For Bicep, you can use theany()function. |


### HttpDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'HttpFile' (required) |
| typeProperties | Properties specific to this dataset type. | HttpDatasetTypeProperties |


### HttpDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| additionalHeaders | The headers for the HTTP Request. e.g. request-header-name-1:request-header-value-1...request-header-name-n:request-header-value-n Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| compression | The data compression method used on files. | DatasetCompression |
| format | The format of files. | DatasetStorageFormat |
| relativeUrl | The relative URL based on the URL in the HttpLinkedService refers to an HTTP file Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| requestBody | The body for the HTTP request. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| requestMethod | The HTTP method for the HTTP request. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### HubspotObjectDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'HubspotObject' (required) |
| typeProperties | Properties specific to this dataset type. | GenericDatasetTypeProperties |


### ImpalaObjectDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'ImpalaObject' (required) |
| typeProperties | Properties specific to this dataset type. | ImpalaDatasetTypeProperties |


### ImpalaDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| schema | The schema name of the Impala. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| table | The table name of the Impala. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| tableName | This property will be retired. Please consider using schema + table properties instead. | For Bicep, you can use theany()function. |


### InformixTableDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'InformixTable' (required) |
| typeProperties | Informix table dataset properties. | InformixTableDatasetTypeProperties |


### InformixTableDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| tableName | The Informix table name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### JiraObjectDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'JiraObject' (required) |
| typeProperties | Properties specific to this dataset type. | GenericDatasetTypeProperties |


### JsonDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'Json' (required) |
| typeProperties | Json dataset properties. | JsonDatasetTypeProperties |


### JsonDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| compression | The data compression method used for the json dataset. | DatasetCompression |
| encodingName | The code page name of the preferred encoding. If not specified, the default value is UTF-8, unless BOM denotes another Unicode encoding. Refer to the name column of the table in the following link to set supported values:https://msdn.microsoft.com/library/system.text.encoding.aspx. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| location | The location of the json data storage. | DatasetLocation(required) |


### MagentoObjectDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'MagentoObject' (required) |
| typeProperties | Properties specific to this dataset type. | GenericDatasetTypeProperties |


### MariaDBTableDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'MariaDBTable' (required) |
| typeProperties | Properties specific to this dataset type. | GenericDatasetTypeProperties |


### MarketoObjectDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'MarketoObject' (required) |
| typeProperties | Properties specific to this dataset type. | GenericDatasetTypeProperties |


### MicrosoftAccessTableDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'MicrosoftAccessTable' (required) |
| typeProperties | Microsoft Access table dataset properties. | MicrosoftAccessTableDatasetTypeProperties |


### MicrosoftAccessTableDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| tableName | The Microsoft Access table name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### MongoDbAtlasCollectionDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'MongoDbAtlasCollection' (required) |
| typeProperties | MongoDB Atlas database dataset properties. | MongoDbAtlasCollectionDatasetTypeProperties(required) |


### MongoDbAtlasCollectionDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| collection | The collection name of the MongoDB Atlas database. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |


### MongoDbCollectionDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'MongoDbCollection' (required) |
| typeProperties | MongoDB database dataset properties. | MongoDbCollectionDatasetTypeProperties(required) |


### MongoDbCollectionDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| collectionName | The table name of the MongoDB database. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |


### MongoDbV2CollectionDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'MongoDbV2Collection' (required) |
| typeProperties | MongoDB database dataset properties. | MongoDbV2CollectionDatasetTypeProperties(required) |


### MongoDbV2CollectionDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| collection | The collection name of the MongoDB database. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |


### MySqlTableDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'MySqlTable' (required) |
| typeProperties | MySQL table dataset properties. | MySqlTableDatasetTypeProperties |


### MySqlTableDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| tableName | The MySQL table name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### NetezzaTableDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'NetezzaTable' (required) |
| typeProperties | Properties specific to this dataset type. | NetezzaTableDatasetTypeProperties |


### NetezzaTableDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| schema | The schema name of the Netezza. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| table | The table name of the Netezza. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| tableName | This property will be retired. Please consider using schema + table properties instead. | For Bicep, you can use theany()function. |


### ODataResourceDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'ODataResource' (required) |
| typeProperties | OData dataset properties. | ODataResourceDatasetTypeProperties |


### ODataResourceDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| path | The OData resource path. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### OdbcTableDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'OdbcTable' (required) |
| typeProperties | ODBC table dataset properties. | OdbcTableDatasetTypeProperties |


### OdbcTableDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| tableName | The ODBC table name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### Office365Dataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'Office365Table' (required) |
| typeProperties | Office365 dataset properties. | Office365DatasetTypeProperties(required) |


### Office365DatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| predicate | A predicate expression that can be used to filter the specific rows to extract from Office 365. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| tableName | Name of the dataset to extract from Office 365. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |


### OracleServiceCloudObjectDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'OracleServiceCloudObject' (required) |
| typeProperties | Properties specific to this dataset type. | GenericDatasetTypeProperties |


### OracleTableDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'OracleTable' (required) |
| typeProperties | On-premises Oracle dataset properties. | OracleTableDatasetTypeProperties |


### OracleTableDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| schema | The schema name of the on-premises Oracle database. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| table | The table name of the on-premises Oracle database. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| tableName | This property will be retired. Please consider using schema + table properties instead. | For Bicep, you can use theany()function. |


### OrcDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'Orc' (required) |
| typeProperties | ORC dataset properties. | OrcDatasetTypeProperties |


### OrcDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| location | The location of the ORC data storage. | DatasetLocation(required) |
| orcCompressionCodec | The data orcCompressionCodec. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### ParquetDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'Parquet' (required) |
| typeProperties | Parquet dataset properties. | ParquetDatasetTypeProperties |


### ParquetDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| compressionCodec | The data compressionCodec. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| location | The location of the parquet storage. | DatasetLocation(required) |


### PaypalObjectDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'PaypalObject' (required) |
| typeProperties | Properties specific to this dataset type. | GenericDatasetTypeProperties |


### PhoenixObjectDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'PhoenixObject' (required) |
| typeProperties | Properties specific to this dataset type. | PhoenixDatasetTypeProperties |


### PhoenixDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| schema | The schema name of the Phoenix. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| table | The table name of the Phoenix. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| tableName | This property will be retired. Please consider using schema + table properties instead. | For Bicep, you can use theany()function. |


### PostgreSqlTableDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'PostgreSqlTable' (required) |
| typeProperties | PostgreSQL table dataset properties. | PostgreSqlTableDatasetTypeProperties |


### PostgreSqlTableDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| schema | The PostgreSQL schema name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| table | The PostgreSQL table name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| tableName | This property will be retired. Please consider using schema + table properties instead. | For Bicep, you can use theany()function. |


### PrestoObjectDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'PrestoObject' (required) |
| typeProperties | Properties specific to this dataset type. | PrestoDatasetTypeProperties |


### PrestoDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| schema | The schema name of the Presto. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| table | The table name of the Presto. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| tableName | This property will be retired. Please consider using schema + table properties instead. | For Bicep, you can use theany()function. |


### QuickBooksObjectDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'QuickBooksObject' (required) |
| typeProperties | Properties specific to this dataset type. | GenericDatasetTypeProperties |


### RelationalTableDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'RelationalTable' (required) |
| typeProperties | Relational table dataset properties. | RelationalTableDatasetTypeProperties |


### RelationalTableDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| tableName | The relational table name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### ResponsysObjectDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'ResponsysObject' (required) |
| typeProperties | Properties specific to this dataset type. | GenericDatasetTypeProperties |


### RestResourceDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'RestResource' (required) |
| typeProperties | Properties specific to this dataset type. | RestResourceDatasetTypeProperties |


### RestResourceDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| additionalHeaders | The additional HTTP headers in the request to the RESTful API. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| paginationRules | The pagination rules to compose next page requests. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| relativeUrl | The relative URL to the resource that the RESTful API provides. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| requestBody | The HTTP request body to the RESTful API if requestMethod is POST. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| requestMethod | The HTTP method used to call the RESTful API. The default is GET. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### SalesforceMarketingCloudObjectDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'SalesforceMarketingCloudObject' (required) |
| typeProperties | Properties specific to this dataset type. | GenericDatasetTypeProperties |


### SalesforceObjectDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'SalesforceObject' (required) |
| typeProperties | Salesforce object dataset properties. | SalesforceObjectDatasetTypeProperties |


### SalesforceObjectDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| objectApiName | The Salesforce object API name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### SalesforceServiceCloudObjectDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'SalesforceServiceCloudObject' (required) |
| typeProperties | Salesforce Service Cloud object dataset properties. | SalesforceServiceCloudObjectDatasetTypeProperties |


### SalesforceServiceCloudObjectDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| objectApiName | The Salesforce Service Cloud object API name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### SapBwCubeDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'SapBwCube' (required) |


### SapCloudForCustomerResourceDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'SapCloudForCustomerResource' (required) |
| typeProperties | SAP Cloud For Customer OData resource dataset properties. | SapCloudForCustomerResourceDatasetTypeProperties(required) |


### SapCloudForCustomerResourceDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| path | The path of the SAP Cloud for Customer OData entity. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |


### SapEccResourceDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'SapEccResource' (required) |
| typeProperties | SAP ECC OData resource dataset properties. | SapEccResourceDatasetTypeProperties(required) |


### SapEccResourceDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| path | The path of the SAP ECC OData entity. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |


### SapHanaTableDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'SapHanaTable' (required) |
| typeProperties | SAP HANA Table properties. | SapHanaTableDatasetTypeProperties |


### SapHanaTableDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| schema | The schema name of SAP HANA. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| table | The table name of SAP HANA. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### SapOdpResourceDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'SapOdpResource' (required) |
| typeProperties | SAP ODP Resource properties. | SapOdpResourceDatasetTypeProperties(required) |


### SapOdpResourceDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| context | The context of the SAP ODP Object. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| objectName | The name of the SAP ODP Object. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |


### SapOpenHubTableDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'SapOpenHubTable' (required) |
| typeProperties | Sap Business Warehouse Open Hub Destination Table properties. | SapOpenHubTableDatasetTypeProperties(required) |


### SapOpenHubTableDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| baseRequestId | The ID of request for delta loading. Once it is set, only data with requestId larger than the value of this property will be retrieved. The default value is 0. Type: integer (or Expression with resultType integer ). | For Bicep, you can use theany()function. |
| excludeLastRequest | Whether to exclude the records of the last request. The default value is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| openHubDestinationName | The name of the Open Hub Destination with destination type as Database Table. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |


### SapTableResourceDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'SapTableResource' (required) |
| typeProperties | SAP Table Resource properties. | SapTableResourceDatasetTypeProperties(required) |


### SapTableResourceDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| tableName | The name of the SAP Table. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |


### ServiceNowObjectDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'ServiceNowObject' (required) |
| typeProperties | Properties specific to this dataset type. | GenericDatasetTypeProperties |


### SharePointOnlineListResourceDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'SharePointOnlineListResource' (required) |
| typeProperties | Sharepoint online list dataset properties. | SharePointOnlineListDatasetTypeProperties |


### SharePointOnlineListDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| listName | The name of the SharePoint Online list. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### ShopifyObjectDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'ShopifyObject' (required) |
| typeProperties | Properties specific to this dataset type. | GenericDatasetTypeProperties |


### SnowflakeDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'SnowflakeTable' (required) |
| typeProperties | Snowflake dataset properties. | SnowflakeDatasetTypeProperties(required) |


### SnowflakeDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| schema | The schema name of the Snowflake database. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| table | The table name of the Snowflake database. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### SparkObjectDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'SparkObject' (required) |
| typeProperties | Properties specific to this dataset type. | SparkDatasetTypeProperties |


### SparkDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| schema | The schema name of the Spark. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| table | The table name of the Spark. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| tableName | This property will be retired. Please consider using schema + table properties instead. | For Bicep, you can use theany()function. |


### SqlServerTableDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'SqlServerTable' (required) |
| typeProperties | On-premises SQL Server dataset properties. | SqlServerTableDatasetTypeProperties |


### SqlServerTableDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| schema | The schema name of the SQL Server dataset. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| table | The table name of the SQL Server dataset. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| tableName | This property will be retired. Please consider using schema + table properties instead. | For Bicep, you can use theany()function. |


### SquareObjectDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'SquareObject' (required) |
| typeProperties | Properties specific to this dataset type. | GenericDatasetTypeProperties |


### SybaseTableDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'SybaseTable' (required) |
| typeProperties | Sybase table dataset properties. | SybaseTableDatasetTypeProperties |


### SybaseTableDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| tableName | The Sybase table name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### TeradataTableDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'TeradataTable' (required) |
| typeProperties | Teradata dataset properties. | TeradataTableDatasetTypeProperties |


### TeradataTableDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| database | The database name of Teradata. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| table | The table name of Teradata. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### VerticaTableDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'VerticaTable' (required) |
| typeProperties | Properties specific to this dataset type. | VerticaDatasetTypeProperties |


### VerticaDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| schema | The schema name of the Vertica. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| table | The table name of the Vertica. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| tableName | This property will be retired. Please consider using schema + table properties instead. | For Bicep, you can use theany()function. |


### WebTableDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'WebTable' (required) |
| typeProperties | Web table dataset properties. | WebTableDatasetTypeProperties(required) |


### WebTableDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| index | The zero-based index of the table in the web page. Type: integer (or Expression with resultType integer), minimum: 0. | For Bicep, you can use theany()function.(required) |
| path | The relative URL to the web page from the linked service URL. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### XeroObjectDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'XeroObject' (required) |
| typeProperties | Properties specific to this dataset type. | GenericDatasetTypeProperties |


### XmlDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'Xml' (required) |
| typeProperties | Xml dataset properties. | XmlDatasetTypeProperties |


### XmlDatasetTypeProperties

| Name | Description | Value |
|-|-|-|
| compression | The data compression method used for the json dataset. | DatasetCompression |
| encodingName | The code page name of the preferred encoding. If not specified, the default value is UTF-8, unless BOM denotes another Unicode encoding. Refer to the name column of the table in the following link to set supported values:https://msdn.microsoft.com/library/system.text.encoding.aspx. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| location | The location of the json data storage. | DatasetLocation(required) |
| nullValue | The null value string. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### ZohoObjectDataset

| Name | Description | Value |
|-|-|-|
| type | Type of dataset. | 'ZohoObject' (required) |
| typeProperties | Properties specific to this dataset type. | GenericDatasetTypeProperties |
## Microsoft.DataFactory/factories/globalParameters@2018-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataFactory/factories/globalParameters@2018-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {}
  })
}

```

### factories/globalParameters

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:factories |
| properties | Properties of the global parameter. | object (required) |
## Microsoft.DataFactory/factories/integrationRuntimes@2018-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataFactory/factories/integrationRuntimes@2018-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      type = "string"
      // For remaining properties, see IntegrationRuntime objects
    }
  })
}

```

### factories/integrationRuntimes

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 3-63Valid characters:Alphanumerics and hyphens.Start and end with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:factories |
| properties | Integration runtime properties. | IntegrationRuntime(required) |


### IntegrationRuntime

| Name | Description | Value |
|-|-|-|
| description | Integration runtime description. | string |
| type | Set the object type | ManagedSelfHosted(required) |


### ManagedIntegrationRuntime

| Name | Description | Value |
|-|-|-|
| type | Type of integration runtime. | 'Managed' (required) |
| managedVirtualNetwork | Managed Virtual Network reference. | ManagedVirtualNetworkReference |
| typeProperties | Managed integration runtime properties. | ManagedIntegrationRuntimeTypeProperties(required) |


### ManagedVirtualNetworkReference

| Name | Description | Value |
|-|-|-|
| referenceName | Reference ManagedVirtualNetwork name. | string (required) |
| type | Managed Virtual Network reference type. | 'ManagedVirtualNetworkReference' (required) |


### ManagedIntegrationRuntimeTypeProperties

| Name | Description | Value |
|-|-|-|
| computeProperties | The compute resource for managed integration runtime. | IntegrationRuntimeComputeProperties |
| customerVirtualNetwork | The name of virtual network to which Azure-SSIS integration runtime will join | IntegrationRuntimeCustomerVirtualNetwork |
| ssisProperties | SSIS properties for managed integration runtime. | IntegrationRuntimeSsisProperties |


### IntegrationRuntimeComputeProperties

| Name | Description | Value |
|-|-|-|
| copyComputeScaleProperties | CopyComputeScale properties for managed integration runtime. | CopyComputeScaleProperties |
| dataFlowProperties | Data flow properties for managed integration runtime. | IntegrationRuntimeDataFlowProperties |
| location | The location for managed integration runtime. The supported regions could be found on /azure/data-factory/data-factory-data-movement-activities | string |
| maxParallelExecutionsPerNode | Maximum parallel executions count per node for managed integration runtime. | int |
| nodeSize | The node size requirement to managed integration runtime. | string |
| numberOfNodes | The required number of nodes for managed integration runtime. | int |
| pipelineExternalComputeScaleProperties | PipelineExternalComputeScale properties for managed integration runtime. | PipelineExternalComputeScaleProperties |
| vNetProperties | VNet properties for managed integration runtime. | IntegrationRuntimeVNetProperties |


### CopyComputeScaleProperties

| Name | Description | Value |
|-|-|-|
| dataIntegrationUnit | DIU number setting reserved for copy activity execution. Supported values are multiples of 4 in range 4-256. | int |
| timeToLive | Time to live (in minutes) setting of integration runtime which will execute copy activity. | int |


### IntegrationRuntimeDataFlowProperties

| Name | Description | Value |
|-|-|-|
| cleanup | Cluster will not be recycled and it will be used in next data flow activity run until TTL (time to live) is reached if this is set as false. Default is true. | bool |
| computeType | Compute type of the cluster which will execute data flow job. | 'ComputeOptimized''General''MemoryOptimized' |
| coreCount | Core count of the cluster which will execute data flow job. Supported values are: 8, 16, 32, 48, 80, 144 and 272. | int |
| timeToLive | Time to live (in minutes) setting of the cluster which will execute data flow job. | int |


### PipelineExternalComputeScaleProperties

| Name | Description | Value |
|-|-|-|
| timeToLive | Time to live (in minutes) setting of integration runtime which will execute pipeline and external activity. | int |


### IntegrationRuntimeVNetProperties

| Name | Description | Value |
|-|-|-|
| publicIPs | Resource IDs of the public IP addresses that this integration runtime will use. | string[] |
| subnet | The name of the subnet this integration runtime will join. | string |
| subnetId | The ID of subnet, to which this Azure-SSIS integration runtime will be joined. | string |
| vNetId | The ID of the VNet that this integration runtime will join. | string |


### IntegrationRuntimeCustomerVirtualNetwork

| Name | Description | Value |
|-|-|-|
| subnetId | The ID of subnet to which Azure-SSIS integration runtime will join. | string |


### IntegrationRuntimeSsisProperties

| Name | Description | Value |
|-|-|-|
| catalogInfo | Catalog information for managed dedicated integration runtime. | IntegrationRuntimeSsisCatalogInfo |
| credential | The credential reference containing authentication information. | CredentialReference |
| customSetupScriptProperties | Custom setup script properties for a managed dedicated integration runtime. | IntegrationRuntimeCustomSetupScriptProperties |
| dataProxyProperties | Data proxy properties for a managed dedicated integration runtime. | IntegrationRuntimeDataProxyProperties |
| edition | The edition for the SSIS Integration Runtime | 'Enterprise''Standard' |
| expressCustomSetupProperties | Custom setup without script properties for a SSIS integration runtime. | CustomSetupBase[] |
| licenseType | License type for bringing your own license scenario. | 'BasePrice''LicenseIncluded' |
| packageStores | Package stores for the SSIS Integration Runtime. | PackageStore[] |


### IntegrationRuntimeSsisCatalogInfo

| Name | Description | Value |
|-|-|-|
| catalogAdminPassword | The password of the administrator user account of the catalog database. | SecureString |
| catalogAdminUserName | The administrator user name of catalog database. | string |
| catalogPricingTier | The pricing tier for the catalog database. The valid values could be found inhttps://azure.microsoft.com/pricing/details/sql-database/ | 'Basic''Premium''PremiumRS''Standard' |
| catalogServerEndpoint | The catalog database server URL. | string |
| dualStandbyPairName | The dual standby pair name of Azure-SSIS Integration Runtimes to support SSISDB failover. | string |


### SecureString

| Name | Description | Value |
|-|-|-|
| type | Type of the secret. | string (required) |
| value | Value of secure string. | string (required) |


### CredentialReference

| Name | Description | Value |
|-|-|-|
| referenceName | Reference credential name. | string (required) |
| type | Credential reference type. | 'CredentialReference' (required) |


### IntegrationRuntimeCustomSetupScriptProperties

| Name | Description | Value |
|-|-|-|
| blobContainerUri | The URI of the Azure blob container that contains the custom setup script. | string |
| sasToken | The SAS token of the Azure blob container. | SecureString |


### IntegrationRuntimeDataProxyProperties

| Name | Description | Value |
|-|-|-|
| connectVia | The self-hosted integration runtime reference. | EntityReference |
| path | The path to contain the staged data in the Blob storage. | string |
| stagingLinkedService | The staging linked service reference. | EntityReference |


### EntityReference

| Name | Description | Value |
|-|-|-|
| referenceName | The name of this referenced entity. | string |
| type | The type of this referenced entity. | 'IntegrationRuntimeReference''LinkedServiceReference' |


### CustomSetupBase

| Name | Description | Value |
|-|-|-|
| type | Set the object type | AzPowerShellSetupCmdkeySetupComponentSetupEnvironmentVariableSetup(required) |


### AzPowerShellSetup

| Name | Description | Value |
|-|-|-|
| type | The type of custom setup. | 'AzPowerShellSetup' (required) |
| typeProperties | Install Azure PowerShell type properties. | AzPowerShellSetupTypeProperties(required) |


### AzPowerShellSetupTypeProperties

| Name | Description | Value |
|-|-|-|
| version | The required version of Azure PowerShell to install. | string (required) |


### CmdkeySetup

| Name | Description | Value |
|-|-|-|
| type | The type of custom setup. | 'CmdkeySetup' (required) |
| typeProperties | Cmdkey command custom setup type properties. | CmdkeySetupTypeProperties(required) |


### CmdkeySetupTypeProperties

| Name | Description | Value |
|-|-|-|
| password | The password of data source access. | SecretBase(required) |
| targetName | The server name of data source access. | For Bicep, you can use theany()function.(required) |
| userName | The user name of data source access. | For Bicep, you can use theany()function.(required) |


### SecretBase

| Name | Description | Value |
|-|-|-|
| type | Set the object type | AzureKeyVaultSecretSecureString(required) |


### AzureKeyVaultSecretReference

| Name | Description | Value |
|-|-|-|
| secretName | The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| secretVersion | The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| store | The Azure Key Vault linked service reference. | LinkedServiceReference(required) |
| type | Type of the secret. | string (required) |


### LinkedServiceReference

| Name | Description | Value |
|-|-|-|
| parameters | Arguments for LinkedService. | object |
| referenceName | Reference LinkedService name. | string (required) |
| type | Linked service reference type. | 'LinkedServiceReference' (required) |


### ComponentSetup

| Name | Description | Value |
|-|-|-|
| type | The type of custom setup. | 'ComponentSetup' (required) |
| typeProperties | Install 3rd party component type properties. | LicensedComponentSetupTypeProperties(required) |


### LicensedComponentSetupTypeProperties

| Name | Description | Value |
|-|-|-|
| componentName | The name of the 3rd party component. | string (required) |
| licenseKey | The license key to activate the component. | SecretBase |


### EnvironmentVariableSetup

| Name | Description | Value |
|-|-|-|
| type | The type of custom setup. | 'EnvironmentVariableSetup' (required) |
| typeProperties | Add environment variable type properties. | EnvironmentVariableSetupTypeProperties(required) |


### EnvironmentVariableSetupTypeProperties

| Name | Description | Value |
|-|-|-|
| variableName | The name of the environment variable. | string (required) |
| variableValue | The value of the environment variable. | string (required) |


### PackageStore

| Name | Description | Value |
|-|-|-|
| name | The name of the package store | string (required) |
| packageStoreLinkedService | The package store linked service reference. | EntityReference(required) |


### SelfHostedIntegrationRuntime

| Name | Description | Value |
|-|-|-|
| type | Type of integration runtime. | 'SelfHosted' (required) |
| typeProperties | When this property is not null, means this is a linked integration runtime. The property is used to access original integration runtime. | SelfHostedIntegrationRuntimeTypeProperties |


### SelfHostedIntegrationRuntimeTypeProperties

| Name | Description | Value |
|-|-|-|
| linkedInfo | The base definition of a linked integration runtime. | LinkedIntegrationRuntimeType |


### LinkedIntegrationRuntimeType

| Name | Description | Value |
|-|-|-|
| authorizationType | Set the object type | KeyRBAC(required) |


### LinkedIntegrationRuntimeKeyAuthorization

| Name | Description | Value |
|-|-|-|
| authorizationType | The authorization type for integration runtime sharing. | 'Key' (required) |
| key | The key used for authorization. | SecureString(required) |


### LinkedIntegrationRuntimeRbacAuthorization

| Name | Description | Value |
|-|-|-|
| authorizationType | The authorization type for integration runtime sharing. | 'RBAC' (required) |
| credential | The credential reference containing authentication information. | CredentialReference |
| resourceId | The resource identifier of the integration runtime to be shared. | string (required) |
## Microsoft.DataFactory/factories/linkedservices@2018-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataFactory/factories/linkedservices@2018-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      annotations = [ object ]
      connectVia = {
        parameters = {}
        referenceName = "string"
        type = "IntegrationRuntimeReference"
      }
      description = "string"
      parameters = {}
      type = "string"
      // For remaining properties, see LinkedService objects
    }
  })
}

```

### factories/linkedservices

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-260Valid characters:Can't use:<>*#.%&:\\+?/or control charactersStart with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:factories |
| properties | Properties of linked service. | LinkedService(required) |


### LinkedService

| Name | Description | Value |
|-|-|-|
| annotations | List of tags that can be used for describing the linked service. | any[] |
| connectVia | The integration runtime reference. | IntegrationRuntimeReference |
| description | Linked service description. | string |
| parameters | Parameters for linked service. | object |
| type | Set the object type | AmazonMWSAmazonRdsForOracleAmazonRdsForSqlServerAmazonRedshiftAmazonS3AmazonS3CompatibleAppFiguresAsanaAzureBatchAzureBlobFSAzureBlobStorageAzureDatabricksAzureDatabricksDeltaLakeAzureDataExplorerAzureDataLakeAnalyticsAzureDataLakeStoreAzureFileStorageAzureFunctionAzureKeyVaultAzureMariaDBAzureMLAzureMLServiceAzureMySqlAzurePostgreSqlAzureSearchAzureSqlDatabaseAzureSqlDWAzureSqlMIAzureStorageAzureSynapseArtifactsAzureTableStorageCassandraCommonDataServiceForAppsConcurCosmosDbCosmosDbMongoDbApiCouchbaseCustomDataSourceDataworldDb2DrillDynamicsDynamicsAXDynamicsCrmEloquaFileServerFtpServerGoogleAdWordsGoogleBigQueryGoogleCloudStorageGoogleSheetsGreenplumHBaseHdfsHDInsightHDInsightOnDemandHiveHttpServerHubspotImpalaInformixJiraMagentoMariaDBMarketoMicrosoftAccessMongoDbMongoDbAtlasMongoDbV2MySqlNetezzaODataOdbcOffice365OracleOracleCloudStorageOracleServiceCloudPaypalPhoenixPostgreSqlPrestoQuickbaseQuickBooksResponsysRestServiceSalesforceSalesforceMarketingCloudSalesforceServiceCloudSapBWSapCloudForCustomerSapEccSapHanaSapOdpSapOpenHubSapTableServiceNowSftpSharePointOnlineListShopifySmartsheetSnowflakeSparkSqlServerSquareSybaseTeamDeskTeradataTwilioVerticaWebXeroZendeskZoho(required) |


### IntegrationRuntimeReference

| Name | Description | Value |
|-|-|-|
| parameters | Arguments for integration runtime. | object |
| referenceName | Reference integration runtime name. | string (required) |
| type | Type of integration runtime. | 'IntegrationRuntimeReference' (required) |


### AmazonMWSLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'AmazonMWS' (required) |
| typeProperties | Amazon Marketplace Web Service linked service properties. | AmazonMWSLinkedServiceTypeProperties(required) |


### AmazonMWSLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| accessKeyId | The access key id used to access data. | For Bicep, you can use theany()function.(required) |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| endpoint | The endpoint of the Amazon MWS server, (i.e. mws.amazonservices.com) | For Bicep, you can use theany()function.(required) |
| marketplaceID | The Amazon Marketplace ID you want to retrieve data from. To retrieve data from multiple Marketplace IDs, separate them with a comma (,). (i.e. A2EUQ1WTGCTBG2) | For Bicep, you can use theany()function.(required) |
| mwsAuthToken | The Amazon MWS authentication token. | SecretBase |
| secretKey | The secret key used to access data. | SecretBase |
| sellerID | The Amazon seller ID. | For Bicep, you can use theany()function.(required) |
| useEncryptedEndpoints | Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. | For Bicep, you can use theany()function. |
| useHostVerification | Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. | For Bicep, you can use theany()function. |
| usePeerVerification | Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. | For Bicep, you can use theany()function. |


### SecretBase

| Name | Description | Value |
|-|-|-|
| type | Set the object type | AzureKeyVaultSecretSecureString(required) |


### AzureKeyVaultSecretReference

| Name | Description | Value |
|-|-|-|
| secretName | The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| secretVersion | The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| store | The Azure Key Vault linked service reference. | LinkedServiceReference(required) |
| type | Type of the secret. | string (required) |


### LinkedServiceReference

| Name | Description | Value |
|-|-|-|
| parameters | Arguments for LinkedService. | object |
| referenceName | Reference LinkedService name. | string (required) |
| type | Linked service reference type. | 'LinkedServiceReference' (required) |


### SecureString

| Name | Description | Value |
|-|-|-|
| type | Type of the secret. | string (required) |
| value | Value of secure string. | string (required) |


### AmazonRdsForOracleLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'AmazonRdsForOracle' (required) |
| typeProperties | AmazonRdsForOracle database linked service properties. | AmazonRdsForLinkedServiceTypeProperties(required) |


### AmazonRdsForLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| connectionString | The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function.(required) |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| password | The Azure key vault secret reference of password in connection string. | SecretBase |


### AmazonRdsForSqlServerLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'AmazonRdsForSqlServer' (required) |
| typeProperties | Amazon RDS for SQL Server linked service properties. | AmazonRdsForSqlServerLinkedServiceTypeProperties(required) |


### AmazonRdsForSqlServerLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| alwaysEncryptedSettings | Sql always encrypted properties. | SqlAlwaysEncryptedProperties |
| connectionString | The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function.(required) |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| password | The on-premises Windows authentication password. | SecretBase |
| userName | The on-premises Windows authentication user name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### SqlAlwaysEncryptedProperties

| Name | Description | Value |
|-|-|-|
| alwaysEncryptedAkvAuthType | Sql always encrypted AKV authentication type. Type: string (or Expression with resultType string). | 'ManagedIdentity''ServicePrincipal''UserAssignedManagedIdentity' (required) |
| credential | The credential reference containing authentication information. | CredentialReference |
| servicePrincipalId | The client ID of the application in Azure Active Directory used for Azure Key Vault authentication. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| servicePrincipalKey | The key of the service principal used to authenticate against Azure Key Vault. | SecretBase |


### CredentialReference

| Name | Description | Value |
|-|-|-|
| referenceName | Reference credential name. | string (required) |
| type | Credential reference type. | 'CredentialReference' (required) |


### AmazonRedshiftLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'AmazonRedshift' (required) |
| typeProperties | Amazon Redshift linked service properties. | AmazonRedshiftLinkedServiceTypeProperties(required) |


### AmazonRedshiftLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| database | The database name of the Amazon Redshift source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| password | The password of the Amazon Redshift source. | SecretBase |
| port | The TCP port number that the Amazon Redshift server uses to listen for client connections. The default value is 5439. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |
| server | The name of the Amazon Redshift server. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| username | The username of the Amazon Redshift source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### AmazonS3LinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'AmazonS3' (required) |
| typeProperties | Amazon S3 linked service properties. | AmazonS3LinkedServiceTypeProperties(required) |


### AmazonS3LinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| accessKeyId | The access key identifier of the Amazon S3 Identity and Access Management (IAM) user. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| authenticationType | The authentication type of S3. Allowed value: AccessKey (default) or TemporarySecurityCredentials. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| secretAccessKey | The secret access key of the Amazon S3 Identity and Access Management (IAM) user. | SecretBase |
| serviceUrl | This value specifies the endpoint to access with the S3 Connector. This is an optional property; change it only if you want to try a different service endpoint or want to switch between https and http. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| sessionToken | The session token for the S3 temporary security credential. | SecretBase |


### AmazonS3CompatibleLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'AmazonS3Compatible' (required) |
| typeProperties | Amazon S3 Compatible linked service properties. | AmazonS3CompatibleLinkedServiceTypeProperties(required) |


### AmazonS3CompatibleLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| accessKeyId | The access key identifier of the Amazon S3 Compatible Identity and Access Management (IAM) user. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| forcePathStyle | If true, use S3 path-style access instead of virtual hosted-style access. Default value is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| secretAccessKey | The secret access key of the Amazon S3 Compatible Identity and Access Management (IAM) user. | SecretBase |
| serviceUrl | This value specifies the endpoint to access with the Amazon S3 Compatible Connector. This is an optional property; change it only if you want to try a different service endpoint or want to switch between https and http. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### AppFiguresLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'AppFigures' (required) |
| typeProperties | AppFigures linked service properties. | AppFiguresLinkedServiceTypeProperties(required) |


### AppFiguresLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| clientKey | The client key for the AppFigures source. | SecretBase(required) |
| password | The password of the AppFigures source. | SecretBase(required) |
| userName | The username of the Appfigures source. | For Bicep, you can use theany()function.(required) |


### AsanaLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'Asana' (required) |
| typeProperties | Asana linked service properties. | AsanaLinkedServiceTypeProperties(required) |


### AsanaLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| apiToken | The api token for the Asana source. | SecretBase(required) |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### AzureBatchLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'AzureBatch' (required) |
| typeProperties | Azure Batch linked service properties. | AzureBatchLinkedServiceTypeProperties(required) |


### AzureBatchLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| accessKey | The Azure Batch account access key. | SecretBase |
| accountName | The Azure Batch account name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| batchUri | The Azure Batch URI. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| credential | The credential reference containing authentication information. | CredentialReference |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| linkedServiceName | The Azure Storage linked service reference. | LinkedServiceReference(required) |
| poolName | The Azure Batch pool name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |


### AzureBlobFSLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'AzureBlobFS' (required) |
| typeProperties | Azure Data Lake Storage Gen2 linked service properties. | AzureBlobFSLinkedServiceTypeProperties(required) |


### AzureBlobFSLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| accountKey | Account key for the Azure Data Lake Storage Gen2 service. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| azureCloudType | Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regionsâ cloud type. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| credential | The credential reference containing authentication information. | CredentialReference |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| sasToken | The Azure key vault secret reference of sasToken in sas uri. | SecretBase |
| sasUri | SAS URI of the Azure Data Lake Storage Gen2 service. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function. |
| servicePrincipalCredential | The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference. | SecretBase |
| servicePrincipalCredentialType | The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| servicePrincipalId | The ID of the application used to authenticate against the Azure Data Lake Storage Gen2 account. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| servicePrincipalKey | The Key of the application used to authenticate against the Azure Data Lake Storage Gen2 account. | SecretBase |
| tenant | The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| url | Endpoint for the Azure Data Lake Storage Gen2 service. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### AzureBlobStorageLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'AzureBlobStorage' (required) |
| typeProperties | Azure Blob Storage linked service properties. | AzureBlobStorageLinkedServiceTypeProperties(required) |


### AzureBlobStorageLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| accountKey | The Azure key vault secret reference of accountKey in connection string. | AzureKeyVaultSecretReference |
| accountKind | Specify the kind of your storage account. Allowed values are: Storage (general purpose v1), StorageV2 (general purpose v2), BlobStorage, or BlockBlobStorage. Type: string (or Expression with resultType string). | string |
| authenticationType | The type used for authentication. Type: string. | 'AccountKey''Anonymous''Msi''SasUri''ServicePrincipal' |
| azureCloudType | Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regionsâ cloud type. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| connectionString | The connection string. It is mutually exclusive with sasUri, serviceEndpoint property. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function. |
| containerUri | Container uri of the Azure Blob Storage resource only support for anonymous access. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| credential | The credential reference containing authentication information. | CredentialReference |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | string |
| sasToken | The Azure key vault secret reference of sasToken in sas uri. | AzureKeyVaultSecretReference |
| sasUri | SAS URI of the Azure Blob Storage resource. It is mutually exclusive with connectionString, serviceEndpoint property. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function. |
| serviceEndpoint | Blob service endpoint of the Azure Blob Storage resource. It is mutually exclusive with connectionString, sasUri property. | string |
| servicePrincipalId | The ID of the service principal used to authenticate against Azure SQL Data Warehouse. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| servicePrincipalKey | The key of the service principal used to authenticate against Azure SQL Data Warehouse. | SecretBase |
| tenant | The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### AzureDatabricksLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'AzureDatabricks' (required) |
| typeProperties | Azure Databricks linked service properties. | AzureDatabricksLinkedServiceTypeProperties(required) |


### AzureDatabricksLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| accessToken | Access token for databricks REST API. Refer tohttps://docs.azuredatabricks.net/api/latest/authentication.html. Type: string (or Expression with resultType string). | SecretBase |
| authentication | Required to specify MSI, if using Workspace resource id for databricks REST API. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| credential | The credential reference containing authentication information. | CredentialReference |
| domain | {REGION}.azuredatabricks.net, domain name of your Databricks deployment. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| existingClusterId | The id of an existing interactive cluster that will be used for all runs of this activity. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| instancePoolId | The id of an existing instance pool that will be used for all runs of this activity. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| newClusterCustomTags | Additional tags for cluster resources. This property is ignored in instance pool configurations. | object |
| newClusterDriverNodeType | The driver node type for the new job cluster. This property is ignored in instance pool configurations. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| newClusterEnableElasticDisk | Enable the elastic disk on the new cluster. This property is now ignored, and takes the default elastic disk behavior in Databricks (elastic disks are always enabled). Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| newClusterInitScripts | User-defined initialization scripts for the new cluster. Type: array of strings (or Expression with resultType array of strings). | For Bicep, you can use theany()function. |
| newClusterLogDestination | Specify a location to deliver Spark driver, worker, and event logs. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| newClusterNodeType | The node type of the new job cluster. This property is required if newClusterVersion is specified and instancePoolId is not specified. If instancePoolId is specified, this property is ignored. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| newClusterNumOfWorker | If not using an existing interactive cluster, this specifies the number of worker nodes to use for the new job cluster or instance pool. For new job clusters, this a string-formatted Int32, like '1' means numOfWorker is 1 or '1:10' means auto-scale from 1 (min) to 10 (max). For instance pools, this is a string-formatted Int32, and can only specify a fixed number of worker nodes, such as '2'. Required if newClusterVersion is specified. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| newClusterSparkConf | A set of optional, user-specified Spark configuration key-value pairs. | object |
| newClusterSparkEnvVars | A set of optional, user-specified Spark environment variables key-value pairs. | object |
| newClusterVersion | If not using an existing interactive cluster, this specifies the Spark version of a new job cluster or instance pool nodes created for each run of this activity. Required if instancePoolId is specified. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| policyId | The policy id for limiting the ability to configure clusters based on a user defined set of rules. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| workspaceResourceId | Workspace resource id for databricks REST API. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### AzureDatabricksDeltaLakeLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'AzureDatabricksDeltaLake' (required) |
| typeProperties | Azure Databricks Delta Lake linked service properties. | AzureDatabricksDetltaLakeLinkedServiceTypeProperties(required) |


### AzureDatabricksDetltaLakeLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| accessToken | Access token for databricks REST API. Refer tohttps://docs.azuredatabricks.net/api/latest/authentication.html. Type: string, SecureString or AzureKeyVaultSecretReference. | SecretBase |
| clusterId | The id of an existing interactive cluster that will be used for all runs of this job. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| credential | The credential reference containing authentication information. | CredentialReference |
| domain | {REGION}.azuredatabricks.net, domain name of your Databricks deployment. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| workspaceResourceId | Workspace resource id for databricks REST API. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### AzureDataExplorerLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'AzureDataExplorer' (required) |
| typeProperties | Azure Data Explorer (Kusto) linked service properties. | AzureDataExplorerLinkedServiceTypeProperties(required) |


### AzureDataExplorerLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| credential | The credential reference containing authentication information. | CredentialReference |
| database | Database name for connection. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| endpoint | The endpoint of Azure Data Explorer (the engine's endpoint). URL will be in the formathttps://{clusterName}.{regionName}.kusto.windows.net. Type: string (or Expression with resultType string) | For Bicep, you can use theany()function.(required) |
| servicePrincipalId | The ID of the service principal used to authenticate against Azure Data Explorer. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| servicePrincipalKey | The key of the service principal used to authenticate against Kusto. | SecretBase |
| tenant | The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### AzureDataLakeAnalyticsLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'AzureDataLakeAnalytics' (required) |
| typeProperties | Azure Data Lake Analytics linked service properties. | AzureDataLakeAnalyticsLinkedServiceTypeProperties(required) |


### AzureDataLakeAnalyticsLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| accountName | The Azure Data Lake Analytics account name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| dataLakeAnalyticsUri | Azure Data Lake Analytics URI Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| resourceGroupName | Data Lake Analytics account resource group name (if different from Data Factory account). Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| servicePrincipalId | The ID of the application used to authenticate against the Azure Data Lake Analytics account. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| servicePrincipalKey | The Key of the application used to authenticate against the Azure Data Lake Analytics account. | SecretBase |
| subscriptionId | Data Lake Analytics account subscription ID (if different from Data Factory account). Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| tenant | The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |


### AzureDataLakeStoreLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'AzureDataLakeStore' (required) |
| typeProperties | Azure Data Lake Store linked service properties. | AzureDataLakeStoreLinkedServiceTypeProperties(required) |


### AzureDataLakeStoreLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| accountName | Data Lake Store account name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| azureCloudType | Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regionsâ cloud type. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| credential | The credential reference containing authentication information. | CredentialReference |
| dataLakeStoreUri | Data Lake Store service URI. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| resourceGroupName | Data Lake Store account resource group name (if different from Data Factory account). Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| servicePrincipalId | The ID of the application used to authenticate against the Azure Data Lake Store account. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| servicePrincipalKey | The Key of the application used to authenticate against the Azure Data Lake Store account. | SecretBase |
| subscriptionId | Data Lake Store account subscription ID (if different from Data Factory account). Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| tenant | The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### AzureFileStorageLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'AzureFileStorage' (required) |
| typeProperties | Azure File Storage linked service properties. | AzureFileStorageLinkedServiceTypeProperties(required) |


### AzureFileStorageLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| accountKey | The Azure key vault secret reference of accountKey in connection string. | AzureKeyVaultSecretReference |
| connectionString | The connection string. It is mutually exclusive with sasUri property. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function. |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| fileShare | The azure file share name. It is required when auth with accountKey/sasToken. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| host | Host name of the server. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| password | Password to logon the server. | SecretBase |
| sasToken | The Azure key vault secret reference of sasToken in sas uri. | AzureKeyVaultSecretReference |
| sasUri | SAS URI of the Azure File resource. It is mutually exclusive with connectionString property. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function. |
| snapshot | The azure file share snapshot version. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| userId | User ID to logon the server. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### AzureFunctionLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'AzureFunction' (required) |
| typeProperties | Azure Function linked service properties. | AzureFunctionLinkedServiceTypeProperties(required) |


### AzureFunctionLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| authentication | Type of authentication (Required to specify MSI) used to connect to AzureFunction. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| credential | The credential reference containing authentication information. | CredentialReference |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| functionAppUrl | The endpoint of the Azure Function App. URL will be in the formathttps://{accountName}.azurewebsites.net. | For Bicep, you can use theany()function.(required) |
| functionKey | Function or Host key for Azure Function App. | SecretBase |
| resourceId | Allowed token audiences for azure function. | For Bicep, you can use theany()function. |


### AzureKeyVaultLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'AzureKeyVault' (required) |
| typeProperties | Azure Key Vault linked service properties. | AzureKeyVaultLinkedServiceTypeProperties(required) |


### AzureKeyVaultLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| baseUrl | The base URL of the Azure Key Vault. e.g.https://myakv.vault.azure.netType: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| credential | The credential reference containing authentication information. | CredentialReference |


### AzureMariaDBLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'AzureMariaDB' (required) |
| typeProperties | Azure Database for MariaDB linked service properties. | AzureMariaDBLinkedServiceTypeProperties(required) |


### AzureMariaDBLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| connectionString | An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function. |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| pwd | The Azure key vault secret reference of password in connection string. | AzureKeyVaultSecretReference |


### AzureMLLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'AzureML' (required) |
| typeProperties | Azure ML Studio Web Service linked service properties. | AzureMLLinkedServiceTypeProperties(required) |


### AzureMLLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| apiKey | The API key for accessing the Azure ML model endpoint. | SecretBase(required) |
| authentication | Type of authentication (Required to specify MSI) used to connect to AzureML. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| mlEndpoint | The Batch Execution REST URL for an Azure ML Studio Web Service endpoint. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| servicePrincipalId | The ID of the service principal used to authenticate against the ARM-based updateResourceEndpoint of an Azure ML Studio web service. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| servicePrincipalKey | The key of the service principal used to authenticate against the ARM-based updateResourceEndpoint of an Azure ML Studio web service. | SecretBase |
| tenant | The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| updateResourceEndpoint | The Update Resource REST URL for an Azure ML Studio Web Service endpoint. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### AzureMLServiceLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'AzureMLService' (required) |
| typeProperties | Azure ML Service linked service properties. | AzureMLServiceLinkedServiceTypeProperties(required) |


### AzureMLServiceLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| mlWorkspaceName | Azure ML Service workspace name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| resourceGroupName | Azure ML Service workspace resource group name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| servicePrincipalId | The ID of the service principal used to authenticate against the endpoint of a published Azure ML Service pipeline. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| servicePrincipalKey | The key of the service principal used to authenticate against the endpoint of a published Azure ML Service pipeline. | SecretBase |
| subscriptionId | Azure ML Service workspace subscription ID. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| tenant | The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### AzureMySqlLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'AzureMySql' (required) |
| typeProperties | Azure MySQL database linked service properties. | AzureMySqlLinkedServiceTypeProperties(required) |


### AzureMySqlLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| connectionString | The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function.(required) |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| password | The Azure key vault secret reference of password in connection string. | AzureKeyVaultSecretReference |


### AzurePostgreSqlLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'AzurePostgreSql' (required) |
| typeProperties | Azure PostgreSQL linked service properties. | AzurePostgreSqlLinkedServiceTypeProperties(required) |


### AzurePostgreSqlLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| connectionString | An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function. |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| password | The Azure key vault secret reference of password in connection string. | AzureKeyVaultSecretReference |


### AzureSearchLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'AzureSearch' (required) |
| typeProperties | Windows Azure Search Service linked service properties. | AzureSearchLinkedServiceTypeProperties(required) |


### AzureSearchLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| key | Admin Key for Azure Search service | SecretBase |
| url | URL for Azure Search service. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |


### AzureSqlDatabaseLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'AzureSqlDatabase' (required) |
| typeProperties | Azure SQL Database linked service properties. | AzureSqlDatabaseLinkedServiceTypeProperties(required) |


### AzureSqlDatabaseLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| alwaysEncryptedSettings | Sql always encrypted properties. | SqlAlwaysEncryptedProperties |
| azureCloudType | Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regionsâ cloud type. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| connectionString | The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function.(required) |
| credential | The credential reference containing authentication information. | CredentialReference |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| password | The Azure key vault secret reference of password in connection string. | AzureKeyVaultSecretReference |
| servicePrincipalId | The ID of the service principal used to authenticate against Azure SQL Database. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| servicePrincipalKey | The key of the service principal used to authenticate against Azure SQL Database. | SecretBase |
| tenant | The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### AzureSqlDWLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'AzureSqlDW' (required) |
| typeProperties | Azure SQL Data Warehouse linked service properties. | AzureSqlDWLinkedServiceTypeProperties(required) |


### AzureSqlDWLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| azureCloudType | Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regionsâ cloud type. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| connectionString | The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function.(required) |
| credential | The credential reference containing authentication information. | CredentialReference |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| password | The Azure key vault secret reference of password in connection string. | AzureKeyVaultSecretReference |
| servicePrincipalId | The ID of the service principal used to authenticate against Azure SQL Data Warehouse. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| servicePrincipalKey | The key of the service principal used to authenticate against Azure SQL Data Warehouse. | SecretBase |
| tenant | The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### AzureSqlMILinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'AzureSqlMI' (required) |
| typeProperties | Azure SQL Managed Instance linked service properties. | AzureSqlMILinkedServiceTypeProperties(required) |


### AzureSqlMILinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| alwaysEncryptedSettings | Sql always encrypted properties. | SqlAlwaysEncryptedProperties |
| azureCloudType | Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regionsâ cloud type. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| connectionString | The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function.(required) |
| credential | The credential reference containing authentication information. | CredentialReference |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| password | The Azure key vault secret reference of password in connection string. | AzureKeyVaultSecretReference |
| servicePrincipalId | The ID of the service principal used to authenticate against Azure SQL Managed Instance. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| servicePrincipalKey | The key of the service principal used to authenticate against Azure SQL Managed Instance. | SecretBase |
| tenant | The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### AzureStorageLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'AzureStorage' (required) |
| typeProperties | Azure Storage linked service properties. | AzureStorageLinkedServiceTypeProperties(required) |


### AzureStorageLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| accountKey | The Azure key vault secret reference of accountKey in connection string. | AzureKeyVaultSecretReference |
| connectionString | The connection string. It is mutually exclusive with sasUri property. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function. |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | string |
| sasToken | The Azure key vault secret reference of sasToken in sas uri. | AzureKeyVaultSecretReference |
| sasUri | SAS URI of the Azure Storage resource. It is mutually exclusive with connectionString property. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function. |


### AzureSynapseArtifactsLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'AzureSynapseArtifacts' (required) |
| typeProperties | Azure Synapse Analytics (Artifacts) linked service properties. | AzureSynapseArtifactsLinkedServiceTypeProperties(required) |


### AzureSynapseArtifactsLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| authentication | Required to specify MSI, if using system assigned managed identity as authentication method. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| endpoint | https://{workspacename}.dev.azuresynapse.net, Azure Synapse Analytics workspace URL. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| workspaceResourceId | The resource ID of the Synapse workspace. The format should be: /subscriptions/{subscriptionID}/resourceGroups/{resourceGroup}/providers/Microsoft.Synapse/workspaces/{workspaceName}. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### AzureTableStorageLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'AzureTableStorage' (required) |
| typeProperties | Azure Table Storage linked service properties. | AzureStorageLinkedServiceTypeProperties(required) |


### CassandraLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'Cassandra' (required) |
| typeProperties | Cassandra linked service properties. | CassandraLinkedServiceTypeProperties(required) |


### CassandraLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| authenticationType | AuthenticationType to be used for connection. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| host | Host name for connection. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| password | Password for authentication. | SecretBase |
| port | The port for the connection. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |
| username | Username for authentication. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### CommonDataServiceForAppsLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'CommonDataServiceForApps' (required) |
| typeProperties | Common Data Service for Apps linked service properties. | CommonDataServiceForAppsLinkedServiceTypeProperties(required) |


### CommonDataServiceForAppsLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| authenticationType | The authentication type to connect to Common Data Service for Apps server. 'Office365' for online scenario, 'Ifd' for on-premises with Ifd scenario. 'AADServicePrincipal' for Server-To-Server authentication in online scenario. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| deploymentType | The deployment type of the Common Data Service for Apps instance. 'Online' for Common Data Service for Apps Online and 'OnPremisesWithIfd' for Common Data Service for Apps on-premises with Ifd. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| hostName | The host name of the on-premises Common Data Service for Apps server. The property is required for on-prem and not allowed for online. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| organizationName | The organization name of the Common Data Service for Apps instance. The property is required for on-prem and required for online when there are more than one Common Data Service for Apps instances associated with the user. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| password | Password to access the Common Data Service for Apps instance. | SecretBase |
| port | The port of on-premises Common Data Service for Apps server. The property is required for on-prem and not allowed for online. Default is 443. Type: integer (or Expression with resultType integer), minimum: 0. | For Bicep, you can use theany()function. |
| servicePrincipalCredential | The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference. | SecretBase |
| servicePrincipalCredentialType | The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| servicePrincipalId | The client ID of the application in Azure Active Directory used for Server-To-Server authentication. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| serviceUri | The URL to the Microsoft Common Data Service for Apps server. The property is required for on-line and not allowed for on-prem. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| username | User name to access the Common Data Service for Apps instance. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### ConcurLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'Concur' (required) |
| typeProperties | Concur Service linked service properties. | ConcurLinkedServiceTypeProperties(required) |


### ConcurLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| clientId | Application client_id supplied by Concur App Management. | For Bicep, you can use theany()function.(required) |
| connectionProperties | Properties used to connect to Concur. It is mutually exclusive with any other properties in the linked service. Type: object. | For Bicep, you can use theany()function. |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| password | The password corresponding to the user name that you provided in the username field. | SecretBase |
| useEncryptedEndpoints | Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. | For Bicep, you can use theany()function. |
| useHostVerification | Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. | For Bicep, you can use theany()function. |
| usePeerVerification | Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. | For Bicep, you can use theany()function. |
| username | The user name that you use to access Concur Service. | For Bicep, you can use theany()function.(required) |


### CosmosDbLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'CosmosDb' (required) |
| typeProperties | CosmosDB linked service properties. | CosmosDbLinkedServiceTypeProperties(required) |


### CosmosDbLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| accountEndpoint | The endpoint of the Azure CosmosDB account. Type: string (or Expression with resultType string) | For Bicep, you can use theany()function. |
| accountKey | The account key of the Azure CosmosDB account. Type: SecureString or AzureKeyVaultSecretReference. | SecretBase |
| azureCloudType | Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regionsâ cloud type. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| connectionMode | The connection mode used to access CosmosDB account. Type: string (or Expression with resultType string). | 'Direct''Gateway' |
| connectionString | The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function. |
| credential | The credential reference containing authentication information. | CredentialReference |
| database | The name of the database. Type: string (or Expression with resultType string) | For Bicep, you can use theany()function. |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| servicePrincipalCredential | The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference. | SecretBase |
| servicePrincipalCredentialType | The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string). | 'ServicePrincipalCert''ServicePrincipalKey' |
| servicePrincipalId | The client ID of the application in Azure Active Directory used for Server-To-Server authentication. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| tenant | The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### CosmosDbMongoDbApiLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'CosmosDbMongoDbApi' (required) |
| typeProperties | CosmosDB (MongoDB API) linked service properties. | CosmosDbMongoDbApiLinkedServiceTypeProperties(required) |


### CosmosDbMongoDbApiLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| connectionString | The CosmosDB (MongoDB API) connection string. Type: string, SecureString or AzureKeyVaultSecretReference. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function.(required) |
| database | The name of the CosmosDB (MongoDB API) database that you want to access. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| isServerVersionAbove32 | Whether the CosmosDB (MongoDB API) server version is higher than 3.2. The default value is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |


### CouchbaseLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'Couchbase' (required) |
| typeProperties | Couchbase server linked service properties. | CouchbaseLinkedServiceTypeProperties(required) |


### CouchbaseLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| connectionString | An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function. |
| credString | The Azure key vault secret reference of credString in connection string. | AzureKeyVaultSecretReference |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### CustomDataSourceLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'CustomDataSource' (required) |
| typeProperties | Custom linked service properties. | For Bicep, you can use theany()function.(required) |


### DataworldLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'Dataworld' (required) |
| typeProperties | Dataworld linked service properties. | DataworldLinkedServiceTypeProperties(required) |


### DataworldLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| apiToken | The api token for the Dataworld source. | SecretBase(required) |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### Db2LinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'Db2' (required) |
| typeProperties | DB2 linked service properties. | Db2LinkedServiceTypeProperties(required) |


### Db2LinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| authenticationType | AuthenticationType to be used for connection. It is mutually exclusive with connectionString property. | 'Basic' |
| certificateCommonName | Certificate Common Name when TLS is enabled. It is mutually exclusive with connectionString property. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| connectionString | The connection string. It is mutually exclusive with server, database, authenticationType, userName, packageCollection and certificateCommonName property. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function. |
| database | Database name for connection. It is mutually exclusive with connectionString property. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. It is mutually exclusive with connectionString property. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| packageCollection | Under where packages are created when querying database. It is mutually exclusive with connectionString property. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| password | Password for authentication. | SecretBase |
| server | Server name for connection. It is mutually exclusive with connectionString property. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| username | Username for authentication. It is mutually exclusive with connectionString property. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### DrillLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'Drill' (required) |
| typeProperties | Drill server linked service properties. | DrillLinkedServiceTypeProperties(required) |


### DrillLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| connectionString | An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function. |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| pwd | The Azure key vault secret reference of password in connection string. | AzureKeyVaultSecretReference |


### DynamicsLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'Dynamics' (required) |
| typeProperties | Dynamics linked service properties. | DynamicsLinkedServiceTypeProperties(required) |


### DynamicsLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| authenticationType | The authentication type to connect to Dynamics server. 'Office365' for online scenario, 'Ifd' for on-premises with Ifd scenario, 'AADServicePrincipal' for Server-To-Server authentication in online scenario. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| credential | The credential reference containing authentication information. | CredentialReference |
| deploymentType | The deployment type of the Dynamics instance. 'Online' for Dynamics Online and 'OnPremisesWithIfd' for Dynamics on-premises with Ifd. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| hostName | The host name of the on-premises Dynamics server. The property is required for on-prem and not allowed for online. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| organizationName | The organization name of the Dynamics instance. The property is required for on-prem and required for online when there are more than one Dynamics instances associated with the user. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| password | Password to access the Dynamics instance. | SecretBase |
| port | The port of on-premises Dynamics server. The property is required for on-prem and not allowed for online. Default is 443. Type: integer (or Expression with resultType integer), minimum: 0. | For Bicep, you can use theany()function. |
| servicePrincipalCredential | The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference. | SecretBase |
| servicePrincipalCredentialType | The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| servicePrincipalId | The client ID of the application in Azure Active Directory used for Server-To-Server authentication. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| serviceUri | The URL to the Microsoft Dynamics server. The property is required for on-line and not allowed for on-prem. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| username | User name to access the Dynamics instance. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### DynamicsAXLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'DynamicsAX' (required) |
| typeProperties | Dynamics AX linked service properties. | DynamicsAXLinkedServiceTypeProperties(required) |


### DynamicsAXLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| aadResourceId | Specify the resource you are requesting authorization. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| servicePrincipalId | Specify the application's client ID. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| servicePrincipalKey | Specify the application's key. Mark this field as a SecureString to store it securely in Data Factory, or reference a secret stored in Azure Key Vault. Type: string (or Expression with resultType string). | SecretBase(required) |
| tenant | Specify the tenant information (domain name or tenant ID) under which your application resides. Retrieve it by hovering the mouse in the top-right corner of the Azure portal. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| url | The Dynamics AX (or Dynamics 365 Finance and Operations) instance OData endpoint. | For Bicep, you can use theany()function.(required) |


### DynamicsCrmLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'DynamicsCrm' (required) |
| typeProperties | Dynamics CRM linked service properties. | DynamicsCrmLinkedServiceTypeProperties(required) |


### DynamicsCrmLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| authenticationType | The authentication type to connect to Dynamics CRM server. 'Office365' for online scenario, 'Ifd' for on-premises with Ifd scenario, 'AADServicePrincipal' for Server-To-Server authentication in online scenario. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| deploymentType | The deployment type of the Dynamics CRM instance. 'Online' for Dynamics CRM Online and 'OnPremisesWithIfd' for Dynamics CRM on-premises with Ifd. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| hostName | The host name of the on-premises Dynamics CRM server. The property is required for on-prem and not allowed for online. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| organizationName | The organization name of the Dynamics CRM instance. The property is required for on-prem and required for online when there are more than one Dynamics CRM instances associated with the user. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| password | Password to access the Dynamics CRM instance. | SecretBase |
| port | The port of on-premises Dynamics CRM server. The property is required for on-prem and not allowed for online. Default is 443. Type: integer (or Expression with resultType integer), minimum: 0. | For Bicep, you can use theany()function. |
| servicePrincipalCredential | The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference. | SecretBase |
| servicePrincipalCredentialType | The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| servicePrincipalId | The client ID of the application in Azure Active Directory used for Server-To-Server authentication. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| serviceUri | The URL to the Microsoft Dynamics CRM server. The property is required for on-line and not allowed for on-prem. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| username | User name to access the Dynamics CRM instance. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### EloquaLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'Eloqua' (required) |
| typeProperties | Eloqua server linked service properties. | EloquaLinkedServiceTypeProperties(required) |


### EloquaLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| endpoint | The endpoint of the Eloqua server. (i.e. eloqua.example.com) | For Bicep, you can use theany()function.(required) |
| password | The password corresponding to the user name. | SecretBase |
| useEncryptedEndpoints | Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. | For Bicep, you can use theany()function. |
| useHostVerification | Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. | For Bicep, you can use theany()function. |
| usePeerVerification | Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. | For Bicep, you can use theany()function. |
| username | The site name and user name of your Eloqua account in the form: sitename/username. (i.e. Eloqua/Alice) | For Bicep, you can use theany()function.(required) |


### FileServerLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'FileServer' (required) |
| typeProperties | File system linked service properties. | FileServerLinkedServiceTypeProperties(required) |


### FileServerLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| host | Host name of the server. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| password | Password to logon the server. | SecretBase |
| userId | User ID to logon the server. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### FtpServerLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'FtpServer' (required) |
| typeProperties | Properties specific to this linked service type. | FtpServerLinkedServiceTypeProperties(required) |


### FtpServerLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| authenticationType | The authentication type to be used to connect to the FTP server. | 'Anonymous''Basic' |
| enableServerCertificateValidation | If true, validate the FTP server SSL certificate when connect over SSL/TLS channel. Default value is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| enableSsl | If true, connect to the FTP server over SSL/TLS channel. Default value is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| host | Host name of the FTP server. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| password | Password to logon the FTP server. | SecretBase |
| port | The TCP port number that the FTP server uses to listen for client connections. Default value is 21. Type: integer (or Expression with resultType integer), minimum: 0. | For Bicep, you can use theany()function. |
| userName | Username to logon the FTP server. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### GoogleAdWordsLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'GoogleAdWords' (required) |
| typeProperties | Google AdWords service linked service properties. | GoogleAdWordsLinkedServiceTypeProperties(required) |


### GoogleAdWordsLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| authenticationType | The OAuth 2.0 authentication mechanism used for authentication. ServiceAuthentication can only be used on self-hosted IR. | 'ServiceAuthentication''UserAuthentication' |
| clientCustomerID | The Client customer ID of the AdWords account that you want to fetch report data for. | For Bicep, you can use theany()function. |
| clientId | The client id of the google application used to acquire the refresh token. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| clientSecret | The client secret of the google application used to acquire the refresh token. | SecretBase |
| connectionProperties | Properties used to connect to GoogleAds. It is mutually exclusive with any other properties in the linked service. Type: object. | For Bicep, you can use theany()function. |
| developerToken | The developer token associated with the manager account that you use to grant access to the AdWords API. | SecretBase |
| email | The service account email ID that is used for ServiceAuthentication and can only be used on self-hosted IR. | For Bicep, you can use theany()function. |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| keyFilePath | The full path to the .p12 key file that is used to authenticate the service account email address and can only be used on self-hosted IR. | For Bicep, you can use theany()function. |
| refreshToken | The refresh token obtained from Google for authorizing access to AdWords for UserAuthentication. | SecretBase |
| trustedCertPath | The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. | For Bicep, you can use theany()function. |
| useSystemTrustStore | Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false. | For Bicep, you can use theany()function. |


### GoogleBigQueryLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'GoogleBigQuery' (required) |
| typeProperties | Google BigQuery service linked service properties. | GoogleBigQueryLinkedServiceTypeProperties(required) |


### GoogleBigQueryLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| additionalProjects | A comma-separated list of public BigQuery projects to access. | For Bicep, you can use theany()function. |
| authenticationType | The OAuth 2.0 authentication mechanism used for authentication. ServiceAuthentication can only be used on self-hosted IR. | 'ServiceAuthentication''UserAuthentication' (required) |
| clientId | The client id of the google application used to acquire the refresh token. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| clientSecret | The client secret of the google application used to acquire the refresh token. | SecretBase |
| email | The service account email ID that is used for ServiceAuthentication and can only be used on self-hosted IR. | For Bicep, you can use theany()function. |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| keyFilePath | The full path to the .p12 key file that is used to authenticate the service account email address and can only be used on self-hosted IR. | For Bicep, you can use theany()function. |
| project | The default BigQuery project to query against. | For Bicep, you can use theany()function.(required) |
| refreshToken | The refresh token obtained from Google for authorizing access to BigQuery for UserAuthentication. | SecretBase |
| requestGoogleDriveScope | Whether to request access to Google Drive. Allowing Google Drive access enables support for federated tables that combine BigQuery data with data from Google Drive. The default value is false. | For Bicep, you can use theany()function. |
| trustedCertPath | The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. | For Bicep, you can use theany()function. |
| useSystemTrustStore | Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false. | For Bicep, you can use theany()function. |


### GoogleCloudStorageLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'GoogleCloudStorage' (required) |
| typeProperties | Google Cloud Storage linked service properties. | GoogleCloudStorageLinkedServiceTypeProperties(required) |


### GoogleCloudStorageLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| accessKeyId | The access key identifier of the Google Cloud Storage Identity and Access Management (IAM) user. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| secretAccessKey | The secret access key of the Google Cloud Storage Identity and Access Management (IAM) user. | SecretBase |
| serviceUrl | This value specifies the endpoint to access with the Google Cloud Storage Connector. This is an optional property; change it only if you want to try a different service endpoint or want to switch between https and http. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### GoogleSheetsLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'GoogleSheets' (required) |
| typeProperties | GoogleSheets linked service properties. | GoogleSheetsLinkedServiceTypeProperties(required) |


### GoogleSheetsLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| apiToken | The api token for the GoogleSheets source. | SecretBase(required) |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### GreenplumLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'Greenplum' (required) |
| typeProperties | Greenplum Database linked service properties. | GreenplumLinkedServiceTypeProperties(required) |


### GreenplumLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| connectionString | An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function. |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| pwd | The Azure key vault secret reference of password in connection string. | AzureKeyVaultSecretReference |


### HBaseLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'HBase' (required) |
| typeProperties | HBase server linked service properties. | HBaseLinkedServiceTypeProperties(required) |


### HBaseLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| allowHostNameCNMismatch | Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false. | For Bicep, you can use theany()function. |
| allowSelfSignedServerCert | Specifies whether to allow self-signed certificates from the server. The default value is false. | For Bicep, you can use theany()function. |
| authenticationType | The authentication mechanism to use to connect to the HBase server. | 'Anonymous''Basic' (required) |
| enableSsl | Specifies whether the connections to the server are encrypted using SSL. The default value is false. | For Bicep, you can use theany()function. |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| host | The IP address or host name of the HBase server. (i.e. 192.168.222.160) | For Bicep, you can use theany()function.(required) |
| httpPath | The partial URL corresponding to the HBase server. (i.e. /gateway/sandbox/hbase/version) | For Bicep, you can use theany()function. |
| password | The password corresponding to the user name. | SecretBase |
| port | The TCP port that the HBase instance uses to listen for client connections. The default value is 9090. | For Bicep, you can use theany()function. |
| trustedCertPath | The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. | For Bicep, you can use theany()function. |
| username | The user name used to connect to the HBase instance. | For Bicep, you can use theany()function. |


### HdfsLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'Hdfs' (required) |
| typeProperties | HDFS linked service properties. | HdfsLinkedServiceTypeProperties(required) |


### HdfsLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| authenticationType | Type of authentication used to connect to the HDFS. Possible values are: Anonymous and Windows. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| password | Password for Windows authentication. | SecretBase |
| url | The URL of the HDFS service endpoint, e.g.http://myhostname:50070/webhdfs/v1. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| userName | User name for Windows authentication. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### HDInsightLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'HDInsight' (required) |
| typeProperties | HDInsight linked service properties. | HDInsightLinkedServiceTypeProperties(required) |


### HDInsightLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| clusterUri | HDInsight cluster URI. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| fileSystem | Specify the FileSystem if the main storage for the HDInsight is ADLS Gen2. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| hcatalogLinkedServiceName | A reference to the Azure SQL linked service that points to the HCatalog database. | LinkedServiceReference |
| isEspEnabled | Specify if the HDInsight is created with ESP (Enterprise Security Package). Type: Boolean. | For Bicep, you can use theany()function. |
| linkedServiceName | The Azure Storage linked service reference. | LinkedServiceReference |
| password | HDInsight cluster password. | SecretBase |
| userName | HDInsight cluster user name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### HDInsightOnDemandLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'HDInsightOnDemand' (required) |
| typeProperties | HDInsight ondemand linked service properties. | HDInsightOnDemandLinkedServiceTypeProperties(required) |


### HDInsightOnDemandLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| additionalLinkedServiceNames | Specifies additional storage accounts for the HDInsight linked service so that the Data Factory service can register them on your behalf. | LinkedServiceReference[] |
| clusterNamePrefix | The prefix of cluster name, postfix will be distinct with timestamp. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| clusterPassword | The password to access the cluster. | SecretBase |
| clusterResourceGroup | The resource group where the cluster belongs. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| clusterSize | Number of worker/data nodes in the cluster. Suggestion value: 4. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| clusterSshPassword | The password to SSH remotely connect clusterâs node (for Linux). | SecretBase |
| clusterSshUserName | The username to SSH remotely connect to clusterâs node (for Linux). Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| clusterType | The cluster type. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| clusterUserName | The username to access the cluster. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| coreConfiguration | Specifies the core configuration parameters (as in core-site.xml) for the HDInsight cluster to be created. | For Bicep, you can use theany()function. |
| credential | The credential reference containing authentication information. | CredentialReference |
| dataNodeSize | Specifies the size of the data node for the HDInsight cluster. | For Bicep, you can use theany()function. |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| hBaseConfiguration | Specifies the HBase configuration parameters (hbase-site.xml) for the HDInsight cluster. | For Bicep, you can use theany()function. |
| hcatalogLinkedServiceName | The name of Azure SQL linked service that point to the HCatalog database. The on-demand HDInsight cluster is created by using the Azure SQL database as the metastore. | LinkedServiceReference |
| hdfsConfiguration | Specifies the HDFS configuration parameters (hdfs-site.xml) for the HDInsight cluster. | For Bicep, you can use theany()function. |
| headNodeSize | Specifies the size of the head node for the HDInsight cluster. | For Bicep, you can use theany()function. |
| hiveConfiguration | Specifies the hive configuration parameters (hive-site.xml) for the HDInsight cluster. | For Bicep, you can use theany()function. |
| hostSubscriptionId | The customerâs subscription to host the cluster. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| linkedServiceName | Azure Storage linked service to be used by the on-demand cluster for storing and processing data. | LinkedServiceReference(required) |
| mapReduceConfiguration | Specifies the MapReduce configuration parameters (mapred-site.xml) for the HDInsight cluster. | For Bicep, you can use theany()function. |
| oozieConfiguration | Specifies the Oozie configuration parameters (oozie-site.xml) for the HDInsight cluster. | For Bicep, you can use theany()function. |
| scriptActions | Custom script actions to run on HDI ondemand cluster once it's up. Please refer to /azure/hdinsight/hdinsight-hadoop-customize-cluster-linux?toc=%2Fen-us%2Fazure%2Fhdinsight%2Fr-server%2FTOC.json&bc=%2Fen-us%2Fazure%2Fbread%2Ftoc.json#understanding-script-actions. | ScriptAction[] |
| servicePrincipalId | The service principal id for the hostSubscriptionId. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| servicePrincipalKey | The key for the service principal id. | SecretBase |
| sparkVersion | The version of spark if the cluster type is 'spark'. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| stormConfiguration | Specifies the Storm configuration parameters (storm-site.xml) for the HDInsight cluster. | For Bicep, you can use theany()function. |
| subnetName | The ARM resource ID for the subnet in the vNet. If virtualNetworkId was specified, then this property is required. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| tenant | The Tenant id/name to which the service principal belongs. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| timeToLive | The allowed idle time for the on-demand HDInsight cluster. Specifies how long the on-demand HDInsight cluster stays alive after completion of an activity run if there are no other active jobs in the cluster. The minimum value is 5 mins. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| version | Version of the HDInsight cluster.Â  Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| virtualNetworkId | The ARM resource ID for the vNet to which the cluster should be joined after creation. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| yarnConfiguration | Specifies the Yarn configuration parameters (yarn-site.xml) for the HDInsight cluster. | For Bicep, you can use theany()function. |
| zookeeperNodeSize | Specifies the size of the Zoo Keeper node for the HDInsight cluster. | For Bicep, you can use theany()function. |


### ScriptAction

| Name | Description | Value |
|-|-|-|
| name | The user provided name of the script action. | string (required) |
| parameters | The parameters for the script action. | string |
| roles | The node types on which the script action should be executed. | For Bicep, you can use theany()function.(required) |
| uri | The URI for the script action. | string (required) |


### HiveLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'Hive' (required) |
| typeProperties | Hive Server linked service properties. | HiveLinkedServiceTypeProperties(required) |


### HiveLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| allowHostNameCNMismatch | Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false. | For Bicep, you can use theany()function. |
| allowSelfSignedServerCert | Specifies whether to allow self-signed certificates from the server. The default value is false. | For Bicep, you can use theany()function. |
| authenticationType | The authentication method used to access the Hive server. | 'Anonymous''Username''UsernameAndPassword''WindowsAzureHDInsightService' (required) |
| enableSsl | Specifies whether the connections to the server are encrypted using SSL. The default value is false. | For Bicep, you can use theany()function. |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| host | IP address or host name of the Hive server, separated by ';' for multiple hosts (only when serviceDiscoveryMode is enable). | For Bicep, you can use theany()function.(required) |
| httpPath | The partial URL corresponding to the Hive server. | For Bicep, you can use theany()function. |
| password | The password corresponding to the user name that you provided in the Username field | SecretBase |
| port | The TCP port that the Hive server uses to listen for client connections. | For Bicep, you can use theany()function. |
| serverType | The type of Hive server. | 'HiveServer1''HiveServer2''HiveThriftServer' |
| serviceDiscoveryMode | true to indicate using the ZooKeeper service, false not. | For Bicep, you can use theany()function. |
| thriftTransportProtocol | The transport protocol to use in the Thrift layer. | 'Binary''HTTP ''SASL' |
| trustedCertPath | The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. | For Bicep, you can use theany()function. |
| useNativeQuery | Specifies whether the driver uses native HiveQL queries,or converts them into an equivalent form in HiveQL. | For Bicep, you can use theany()function. |
| username | The user name that you use to access Hive Server. | For Bicep, you can use theany()function. |
| useSystemTrustStore | Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false. | For Bicep, you can use theany()function. |
| zooKeeperNameSpace | The namespace on ZooKeeper under which Hive Server 2 nodes are added. | For Bicep, you can use theany()function. |


### HttpLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'HttpServer' (required) |
| typeProperties | Properties specific to this linked service type. | HttpLinkedServiceTypeProperties(required) |


### HttpLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| authenticationType | The authentication type to be used to connect to the HTTP server. | 'Anonymous''Basic''ClientCertificate''Digest''Windows' |
| authHeaders | The additional HTTP headers in the request to RESTful API used for authorization. Type: object (or Expression with resultType object). | For Bicep, you can use theany()function. |
| certThumbprint | Thumbprint of certificate for ClientCertificate authentication. Only valid for on-premises copy. For on-premises copy with ClientCertificate authentication, either CertThumbprint or EmbeddedCertData/Password should be specified. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| embeddedCertData | Base64 encoded certificate data for ClientCertificate authentication. For on-premises copy with ClientCertificate authentication, either CertThumbprint or EmbeddedCertData/Password should be specified. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| enableServerCertificateValidation | If true, validate the HTTPS server SSL certificate. Default value is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| password | Password for Basic, Digest, Windows, or ClientCertificate with EmbeddedCertData authentication. | SecretBase |
| url | The base URL of the HTTP endpoint, e.g.https://www.microsoft.com. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| userName | User name for Basic, Digest, or Windows authentication. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### HubspotLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'Hubspot' (required) |
| typeProperties | Hubspot Service linked service properties. | HubspotLinkedServiceTypeProperties(required) |


### HubspotLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| accessToken | The access token obtained when initiallyÂ authenticatingÂ yourÂ OAuth integration. | SecretBase |
| clientId | The client ID associated with your Hubspot application. | For Bicep, you can use theany()function.(required) |
| clientSecret | The client secret associated with your Hubspot application. | SecretBase |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| refreshToken | The refresh token obtained when initiallyÂ authenticatingÂ yourÂ OAuth integration. | SecretBase |
| useEncryptedEndpoints | Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. | For Bicep, you can use theany()function. |
| useHostVerification | Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. | For Bicep, you can use theany()function. |
| usePeerVerification | Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. | For Bicep, you can use theany()function. |


### ImpalaLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'Impala' (required) |
| typeProperties | Impala server linked service properties. | ImpalaLinkedServiceTypeProperties(required) |


### ImpalaLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| allowHostNameCNMismatch | Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false. | For Bicep, you can use theany()function. |
| allowSelfSignedServerCert | Specifies whether to allow self-signed certificates from the server. The default value is false. | For Bicep, you can use theany()function. |
| authenticationType | The authentication type to use. | 'Anonymous''SASLUsername''UsernameAndPassword' (required) |
| enableSsl | Specifies whether the connections to the server are encrypted using SSL. The default value is false. | For Bicep, you can use theany()function. |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| host | The IP address or host name of the Impala server. (i.e. 192.168.222.160) | For Bicep, you can use theany()function.(required) |
| password | The password corresponding to the user name when using UsernameAndPassword. | SecretBase |
| port | The TCP port that the Impala server uses to listen for client connections. The default value is 21050. | For Bicep, you can use theany()function. |
| trustedCertPath | The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. | For Bicep, you can use theany()function. |
| username | The user name used to access the Impala server. The default value is anonymous when using SASLUsername. | For Bicep, you can use theany()function. |
| useSystemTrustStore | Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false. | For Bicep, you can use theany()function. |


### InformixLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'Informix' (required) |
| typeProperties | Informix linked service properties. | InformixLinkedServiceTypeProperties(required) |


### InformixLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| authenticationType | Type of authentication used to connect to the Informix as ODBC data store. Possible values are: Anonymous and Basic. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| connectionString | The non-access credential portion of the connection string as well as an optional encrypted credential. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function.(required) |
| credential | The access credential portion of the connection string specified in driver-specific property-value format. | SecretBase |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| password | Password for Basic authentication. | SecretBase |
| userName | User name for Basic authentication. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### JiraLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'Jira' (required) |
| typeProperties | Jira Service linked service properties. | JiraLinkedServiceTypeProperties(required) |


### JiraLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| host | The IP address or host name of the Jira service. (e.g. jira.example.com) | For Bicep, you can use theany()function.(required) |
| password | The password corresponding to the user name that you provided in the username field. | SecretBase |
| port | The TCP port that the Jira server uses to listen for client connections. The default value is 443 if connecting through HTTPS, or 8080 if connecting through HTTP. | For Bicep, you can use theany()function. |
| useEncryptedEndpoints | Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. | For Bicep, you can use theany()function. |
| useHostVerification | Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. | For Bicep, you can use theany()function. |
| usePeerVerification | Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. | For Bicep, you can use theany()function. |
| username | The user name that you use to access Jira Service. | For Bicep, you can use theany()function.(required) |


### MagentoLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'Magento' (required) |
| typeProperties | Magento server linked service properties. | MagentoLinkedServiceTypeProperties(required) |


### MagentoLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| accessToken | The access token from Magento. | SecretBase |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| host | The URL of the Magento instance. (i.e. 192.168.222.110/magento3) | For Bicep, you can use theany()function.(required) |
| useEncryptedEndpoints | Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. | For Bicep, you can use theany()function. |
| useHostVerification | Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. | For Bicep, you can use theany()function. |
| usePeerVerification | Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. | For Bicep, you can use theany()function. |


### MariaDBLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'MariaDB' (required) |
| typeProperties | MariaDB server linked service properties. | MariaDBLinkedServiceTypeProperties(required) |


### MariaDBLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| connectionString | An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function. |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| pwd | The Azure key vault secret reference of password in connection string. | AzureKeyVaultSecretReference |


### MarketoLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'Marketo' (required) |
| typeProperties | Marketo server linked service properties. | MarketoLinkedServiceTypeProperties(required) |


### MarketoLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| clientId | The client Id of your Marketo service. | For Bicep, you can use theany()function.(required) |
| clientSecret | The client secret of your Marketo service. | SecretBase |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| endpoint | The endpoint of the Marketo server. (i.e. 123-ABC-321.mktorest.com) | For Bicep, you can use theany()function.(required) |
| useEncryptedEndpoints | Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. | For Bicep, you can use theany()function. |
| useHostVerification | Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. | For Bicep, you can use theany()function. |
| usePeerVerification | Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. | For Bicep, you can use theany()function. |


### MicrosoftAccessLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'MicrosoftAccess' (required) |
| typeProperties | Microsoft Access linked service properties. | MicrosoftAccessLinkedServiceTypeProperties(required) |


### MicrosoftAccessLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| authenticationType | Type of authentication used to connect to the Microsoft Access as ODBC data store. Possible values are: Anonymous and Basic. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| connectionString | The non-access credential portion of the connection string as well as an optional encrypted credential. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function.(required) |
| credential | The access credential portion of the connection string specified in driver-specific property-value format. | SecretBase |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| password | Password for Basic authentication. | SecretBase |
| userName | User name for Basic authentication. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### MongoDbLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'MongoDb' (required) |
| typeProperties | MongoDB linked service properties. | MongoDbLinkedServiceTypeProperties(required) |


### MongoDbLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| allowSelfSignedServerCert | Specifies whether to allow self-signed certificates from the server. The default value is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| authenticationType | The authentication type to be used to connect to the MongoDB database. | 'Anonymous''Basic' |
| authSource | Database to verify the username and password. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| databaseName | The name of the MongoDB database that you want to access. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| enableSsl | Specifies whether the connections to the server are encrypted using SSL. The default value is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| password | Password for authentication. | SecretBase |
| port | The TCP port number that the MongoDB server uses to listen for client connections. The default value is 27017. Type: integer (or Expression with resultType integer), minimum: 0. | For Bicep, you can use theany()function. |
| server | The IP address or server name of the MongoDB server. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| username | Username for authentication. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### MongoDbAtlasLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'MongoDbAtlas' (required) |
| typeProperties | MongoDB Atlas linked service properties. | MongoDbAtlasLinkedServiceTypeProperties(required) |


### MongoDbAtlasLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| connectionString | The MongoDB Atlas connection string. Type: string, SecureString or AzureKeyVaultSecretReference. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function.(required) |
| database | The name of the MongoDB Atlas database that you want to access. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |


### MongoDbV2LinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'MongoDbV2' (required) |
| typeProperties | MongoDB linked service properties. | MongoDbV2LinkedServiceTypeProperties(required) |


### MongoDbV2LinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| connectionString | The MongoDB connection string. Type: string, SecureString or AzureKeyVaultSecretReference. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function.(required) |
| database | The name of the MongoDB database that you want to access. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |


### MySqlLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'MySql' (required) |
| typeProperties | MySQL linked service properties. | MySqlLinkedServiceTypeProperties(required) |


### MySqlLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| connectionString | The connection string. | For Bicep, you can use theany()function.(required) |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| password | The Azure key vault secret reference of password in connection string. | AzureKeyVaultSecretReference |


### NetezzaLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'Netezza' (required) |
| typeProperties | Netezza linked service properties. | NetezzaLinkedServiceTypeProperties(required) |


### NetezzaLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| connectionString | An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function. |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| pwd | The Azure key vault secret reference of password in connection string. | AzureKeyVaultSecretReference |


### ODataLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'OData' (required) |
| typeProperties | OData linked service properties. | ODataLinkedServiceTypeProperties(required) |


### ODataLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| aadResourceId | Specify the resource you are requesting authorization to use Directory. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| aadServicePrincipalCredentialType | Specify the credential type (key or cert) is used for service principal. | 'ServicePrincipalCert''ServicePrincipalKey' |
| authenticationType | Type of authentication used to connect to the OData service. | 'AadServicePrincipal''Anonymous''Basic''ManagedServiceIdentity''Windows' |
| authHeaders | The additional HTTP headers in the request to RESTful API used for authorization. Type: object (or Expression with resultType object). | For Bicep, you can use theany()function. |
| azureCloudType | Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regionsâ cloud type. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| password | Password of the OData service. | SecretBase |
| servicePrincipalEmbeddedCert | Specify the base64 encoded certificate of your application registered in Azure Active Directory. Type: string (or Expression with resultType string). | SecretBase |
| servicePrincipalEmbeddedCertPassword | Specify the password of your certificate if your certificate has a password and you are using AadServicePrincipal authentication. Type: string (or Expression with resultType string). | SecretBase |
| servicePrincipalId | Specify the application id of your application registered in Azure Active Directory. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| servicePrincipalKey | Specify the secret of your application registered in Azure Active Directory. Type: string (or Expression with resultType string). | SecretBase |
| tenant | Specify the tenant information (domain name or tenant ID) under which your application resides. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| url | The URL of the OData service endpoint. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| userName | User name of the OData service. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### OdbcLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'Odbc' (required) |
| typeProperties | ODBC linked service properties. | OdbcLinkedServiceTypeProperties(required) |


### OdbcLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| authenticationType | Type of authentication used to connect to the ODBC data store. Possible values are: Anonymous and Basic. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| connectionString | The non-access credential portion of the connection string as well as an optional encrypted credential. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function.(required) |
| credential | The access credential portion of the connection string specified in driver-specific property-value format. | SecretBase |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| password | Password for Basic authentication. | SecretBase |
| userName | User name for Basic authentication. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### Office365LinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'Office365' (required) |
| typeProperties | Office365 linked service properties. | Office365LinkedServiceTypeProperties(required) |


### Office365LinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| office365TenantId | Azure tenant ID to which the Office 365 account belongs. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| servicePrincipalId | Specify the application's client ID. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| servicePrincipalKey | Specify the application's key. | SecretBase(required) |
| servicePrincipalTenantId | Specify the tenant information under which your Azure AD web application resides. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |


### OracleLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'Oracle' (required) |
| typeProperties | Oracle database linked service properties. | OracleLinkedServiceTypeProperties(required) |


### OracleLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| connectionString | The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function.(required) |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| password | The Azure key vault secret reference of password in connection string. | AzureKeyVaultSecretReference |


### OracleCloudStorageLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'OracleCloudStorage' (required) |
| typeProperties | Oracle Cloud Storage linked service properties. | OracleCloudStorageLinkedServiceTypeProperties(required) |


### OracleCloudStorageLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| accessKeyId | The access key identifier of the Oracle Cloud Storage Identity and Access Management (IAM) user. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| secretAccessKey | The secret access key of the Oracle Cloud Storage Identity and Access Management (IAM) user. | SecretBase |
| serviceUrl | This value specifies the endpoint to access with the Oracle Cloud Storage Connector. This is an optional property; change it only if you want to try a different service endpoint or want to switch between https and http. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### OracleServiceCloudLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'OracleServiceCloud' (required) |
| typeProperties | Oracle Service Cloud linked service properties. | OracleServiceCloudLinkedServiceTypeProperties(required) |


### OracleServiceCloudLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| host | The URL of the Oracle Service Cloud instance. | For Bicep, you can use theany()function.(required) |
| password | The password corresponding to the user name that you provided in the username key. | SecretBase(required) |
| useEncryptedEndpoints | Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| useHostVerification | Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| usePeerVerification | Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| username | The user name that you use to access Oracle Service Cloud server. | For Bicep, you can use theany()function.(required) |


### PaypalLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'Paypal' (required) |
| typeProperties | Paypal Service linked service properties. | PaypalLinkedServiceTypeProperties(required) |


### PaypalLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| clientId | The client ID associated with your PayPal application. | For Bicep, you can use theany()function.(required) |
| clientSecret | The client secret associated with your PayPal application. | SecretBase |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| host | The URLÂ of the PayPal instance. (i.e. api.sandbox.paypal.com) | For Bicep, you can use theany()function.(required) |
| useEncryptedEndpoints | Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. | For Bicep, you can use theany()function. |
| useHostVerification | Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. | For Bicep, you can use theany()function. |
| usePeerVerification | Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. | For Bicep, you can use theany()function. |


### PhoenixLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'Phoenix' (required) |
| typeProperties | Phoenix server linked service properties. | PhoenixLinkedServiceTypeProperties(required) |


### PhoenixLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| allowHostNameCNMismatch | Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false. | For Bicep, you can use theany()function. |
| allowSelfSignedServerCert | Specifies whether to allow self-signed certificates from the server. The default value is false. | For Bicep, you can use theany()function. |
| authenticationType | The authentication mechanism used to connect to the Phoenix server. | 'Anonymous''UsernameAndPassword''WindowsAzureHDInsightService' (required) |
| enableSsl | Specifies whether the connections to the server are encrypted using SSL. The default value is false. | For Bicep, you can use theany()function. |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| host | The IP address or host name of the Phoenix server. (i.e. 192.168.222.160) | For Bicep, you can use theany()function.(required) |
| httpPath | The partial URL corresponding to the Phoenix server. (i.e. /gateway/sandbox/phoenix/version). The default value is hbasephoenix if using WindowsAzureHDInsightService. | For Bicep, you can use theany()function. |
| password | The password corresponding to the user name. | SecretBase |
| port | The TCP port that the Phoenix server uses to listen for client connections. The default value is 8765. | For Bicep, you can use theany()function. |
| trustedCertPath | The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. | For Bicep, you can use theany()function. |
| username | The user name used to connect to the Phoenix server. | For Bicep, you can use theany()function. |
| useSystemTrustStore | Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false. | For Bicep, you can use theany()function. |


### PostgreSqlLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'PostgreSql' (required) |
| typeProperties | PostgreSQL linked service properties. | PostgreSqlLinkedServiceTypeProperties(required) |


### PostgreSqlLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| connectionString | The connection string. | For Bicep, you can use theany()function.(required) |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| password | The Azure key vault secret reference of password in connection string. | AzureKeyVaultSecretReference |


### PrestoLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'Presto' (required) |
| typeProperties | Presto server linked service properties. | PrestoLinkedServiceTypeProperties(required) |


### PrestoLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| allowHostNameCNMismatch | Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false. | For Bicep, you can use theany()function. |
| allowSelfSignedServerCert | Specifies whether to allow self-signed certificates from the server. The default value is false. | For Bicep, you can use theany()function. |
| authenticationType | The authentication mechanism used to connect to the Presto server. | 'Anonymous''LDAP' (required) |
| catalog | The catalog context for all request against the server. | For Bicep, you can use theany()function.(required) |
| enableSsl | Specifies whether the connections to the server are encrypted using SSL. The default value is false. | For Bicep, you can use theany()function. |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| host | The IP address or host name of the Presto server. (i.e. 192.168.222.160) | For Bicep, you can use theany()function.(required) |
| password | The password corresponding to the user name. | SecretBase |
| port | The TCP port that the Presto server uses to listen for client connections. The default value is 8080. | For Bicep, you can use theany()function. |
| serverVersion | The version of the Presto server. (i.e. 0.148-t) | For Bicep, you can use theany()function.(required) |
| timeZoneID | The local time zone used by the connection. Valid values for this option are specified in the IANA Time Zone Database. The default value is the system time zone. | For Bicep, you can use theany()function. |
| trustedCertPath | The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. | For Bicep, you can use theany()function. |
| username | The user name used to connect to the Presto server. | For Bicep, you can use theany()function. |
| useSystemTrustStore | Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false. | For Bicep, you can use theany()function. |


### QuickbaseLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'Quickbase' (required) |
| typeProperties | Quickbase linked service properties. | QuickbaseLinkedServiceTypeProperties(required) |


### QuickbaseLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| url | The url to connect Quickbase source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| userToken | The user token for the Quickbase source. | SecretBase(required) |


### QuickBooksLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'QuickBooks' (required) |
| typeProperties | QuickBooks server linked service properties. | QuickBooksLinkedServiceTypeProperties(required) |


### QuickBooksLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| accessToken | The access token for OAuth 1.0 authentication. | SecretBase |
| accessTokenSecret | The access token secret for OAuth 1.0 authentication. | SecretBase |
| companyId | The company ID of the QuickBooks company to authorize. | For Bicep, you can use theany()function. |
| connectionProperties | Properties used to connect to QuickBooks. It is mutually exclusive with any other properties in the linked service. Type: object. | For Bicep, you can use theany()function. |
| consumerKey | The consumer key for OAuth 1.0 authentication. | For Bicep, you can use theany()function. |
| consumerSecret | The consumer secret for OAuth 1.0 authentication. | SecretBase |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| endpoint | The endpoint of the QuickBooks server. (i.e. quickbooks.api.intuit.com) | For Bicep, you can use theany()function. |
| useEncryptedEndpoints | Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. | For Bicep, you can use theany()function. |


### ResponsysLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'Responsys' (required) |
| typeProperties | Responsys linked service properties. | ResponsysLinkedServiceTypeProperties(required) |


### ResponsysLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| clientId | The client ID associated with the Responsys application. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| clientSecret | The client secret associated with the Responsys application. Type: string (or Expression with resultType string). | SecretBase |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| endpoint | The endpoint of the Responsys server. | For Bicep, you can use theany()function.(required) |
| useEncryptedEndpoints | Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| useHostVerification | Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| usePeerVerification | Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |


### RestServiceLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'RestService' (required) |
| typeProperties | Rest Service linked service properties. | RestServiceLinkedServiceTypeProperties(required) |


### RestServiceLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| aadResourceId | The resource you are requesting authorization to use. | For Bicep, you can use theany()function. |
| authenticationType | Type of authentication used to connect to the REST service. | 'AadServicePrincipal''Anonymous''Basic''ManagedServiceIdentity''OAuth2ClientCredential' (required) |
| authHeaders | The additional HTTP headers in the request to RESTful API used for authorization. Type: object (or Expression with resultType object). | For Bicep, you can use theany()function. |
| azureCloudType | Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regionsâ cloud type. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| clientId | The client ID associated with your application. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| clientSecret | The client secret associated with your application. | SecretBase |
| credential | The credential reference containing authentication information. | CredentialReference |
| enableServerCertificateValidation | Whether to validate server side SSL certificate when connecting to the endpoint.The default value is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| password | The password used in Basic authentication type. | SecretBase |
| resource | The target service or resource to which the access will be requested. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| scope | The scope of the access required. It describes what kind of access will be requested. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| servicePrincipalId | The application's client ID used in AadServicePrincipal authentication type. | For Bicep, you can use theany()function. |
| servicePrincipalKey | The application's key used in AadServicePrincipal authentication type. | SecretBase |
| tenant | The tenant information (domain name or tenant ID) used in AadServicePrincipal authentication type under which your application resides. | For Bicep, you can use theany()function. |
| tokenEndpoint | The token endpoint of the authorization server to acquire access token. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| url | The base URL of the REST service. | For Bicep, you can use theany()function.(required) |
| userName | The user name used in Basic authentication type. | For Bicep, you can use theany()function. |


### SalesforceLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'Salesforce' (required) |
| typeProperties | Salesforce linked service properties. | SalesforceLinkedServiceTypeProperties(required) |


### SalesforceLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| apiVersion | The Salesforce API version used in ADF. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| environmentUrl | The URL of Salesforce instance. Default is 'https://login.salesforce.com'. To copy data from sandbox, specify 'https://test.salesforce.com'. To copy data from custom domain, specify, for example, 'https://[domain].my.salesforce.com'. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| password | The password for Basic authentication of the Salesforce instance. | SecretBase |
| securityToken | The security token is optional to remotely access Salesforce instance. | SecretBase |
| username | The username for Basic authentication of the Salesforce instance. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### SalesforceMarketingCloudLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'SalesforceMarketingCloud' (required) |
| typeProperties | Salesforce Marketing Cloud linked service properties. | SalesforceMarketingCloudLinkedServiceTypeProperties(required) |


### SalesforceMarketingCloudLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| clientId | The client ID associated with the Salesforce Marketing Cloud application. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| clientSecret | The client secret associated with the Salesforce Marketing Cloud application. Type: string (or Expression with resultType string). | SecretBase |
| connectionProperties | Properties used to connect to Salesforce Marketing Cloud. It is mutually exclusive with any other properties in the linked service. Type: object. | For Bicep, you can use theany()function. |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| useEncryptedEndpoints | Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| useHostVerification | Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| usePeerVerification | Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |


### SalesforceServiceCloudLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'SalesforceServiceCloud' (required) |
| typeProperties | Salesforce Service Cloud linked service properties. | SalesforceServiceCloudLinkedServiceTypeProperties(required) |


### SalesforceServiceCloudLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| apiVersion | The Salesforce API version used in ADF. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| environmentUrl | The URL of Salesforce Service Cloud instance. Default is 'https://login.salesforce.com'. To copy data from sandbox, specify 'https://test.salesforce.com'. To copy data from custom domain, specify, for example, 'https://[domain].my.salesforce.com'. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| extendedProperties | Extended properties appended to the connection string. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| password | The password for Basic authentication of the Salesforce instance. | SecretBase |
| securityToken | The security token is optional to remotely access Salesforce instance. | SecretBase |
| username | The username for Basic authentication of the Salesforce instance. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### SapBWLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'SapBW' (required) |
| typeProperties | Properties specific to this linked service type. | SapBWLinkedServiceTypeProperties(required) |


### SapBWLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| clientId | Client ID of the client on the BW system. (Usually a three-digit decimal number represented as a string) Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| password | Password to access the SAP BW server. | SecretBase |
| server | Host name of the SAP BW instance. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| systemNumber | System number of the BW system. (Usually a two-digit decimal number represented as a string.) Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| userName | Username to access the SAP BW server. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### SapCloudForCustomerLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'SapCloudForCustomer' (required) |
| typeProperties | SAP Cloud for Customer linked service properties. | SapCloudForCustomerLinkedServiceTypeProperties(required) |


### SapCloudForCustomerLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Either encryptedCredential or username/password must be provided. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| password | The password for Basic authentication. | SecretBase |
| url | The URL of SAP Cloud for Customer OData API. For example, '[https://[tenantname].crm.ondemand.com/sap/c4c/odata/v1]'. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| username | The username for Basic authentication. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### SapEccLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'SapEcc' (required) |
| typeProperties | SAP ECC linked service properties. | SapEccLinkedServiceTypeProperties(required) |


### SapEccLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Either encryptedCredential or username/password must be provided. Type: string (or Expression with resultType string). | string |
| password | The password for Basic authentication. | SecretBase |
| url | The URL of SAP ECC OData API. For example, '[https://hostname:port/sap/opu/odata/sap/servicename/]'. Type: string (or Expression with resultType string). | string (required) |
| username | The username for Basic authentication. Type: string (or Expression with resultType string). | string |


### SapHanaLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'SapHana' (required) |
| typeProperties | Properties specific to this linked service type. | SapHanaLinkedServiceProperties(required) |


### SapHanaLinkedServiceProperties

| Name | Description | Value |
|-|-|-|
| authenticationType | The authentication type to be used to connect to the SAP HANA server. | 'Basic''Windows' |
| connectionString | SAP HANA ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function. |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| password | Password to access the SAP HANA server. | SecretBase |
| server | Host name of the SAP HANA server. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| userName | Username to access the SAP HANA server. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### SapOdpLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'SapOdp' (required) |
| typeProperties | Properties specific to SAP ODP linked service type. | SapOdpLinkedServiceTypeProperties(required) |


### SapOdpLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| clientId | Client ID of the client on the SAP system where the table is located. (Usually a three-digit decimal number represented as a string) Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| language | Language of the SAP system where the table is located. The default value is EN. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| logonGroup | The Logon Group for the SAP System. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| messageServer | The hostname of the SAP Message Server. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| messageServerService | The service name or port number of the Message Server. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| password | Password to access the SAP server where the table is located. | SecretBase |
| server | Host name of the SAP instance where the table is located. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| sncLibraryPath | External security product's library to access the SAP server where the table is located. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| sncMode | SNC activation indicator to access the SAP server where the table is located. Must be either 0 (off) or 1 (on). Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| sncMyName | Initiator's SNC name to access the SAP server where the table is located. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| sncPartnerName | Communication partner's SNC name to access the SAP server where the table is located. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| sncQop | SNC Quality of Protection. Allowed value include: 1, 2, 3, 8, 9. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| subscriberName | The subscriber name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| systemId | SystemID of the SAP system where the table is located. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| systemNumber | System number of the SAP system where the table is located. (Usually a two-digit decimal number represented as a string.) Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| userName | Username to access the SAP server where the table is located. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| x509CertificatePath | SNC X509 certificate file path. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### SapOpenHubLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'SapOpenHub' (required) |
| typeProperties | Properties specific to SAP Business Warehouse Open Hub Destination linked service type. | SapOpenHubLinkedServiceTypeProperties(required) |


### SapOpenHubLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| clientId | Client ID of the client on the BW system where the open hub destination is located. (Usually a three-digit decimal number represented as a string) Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| language | Language of the BW system where the open hub destination is located. The default value is EN. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| logonGroup | The Logon Group for the SAP System. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| messageServer | The hostname of the SAP Message Server. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| messageServerService | The service name or port number of the Message Server. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| password | Password to access the SAP BW server where the open hub destination is located. | SecretBase |
| server | Host name of the SAP BW instance where the open hub destination is located. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| systemId | SystemID of the SAP system where the table is located. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| systemNumber | System number of the BW system where the open hub destination is located. (Usually a two-digit decimal number represented as a string.) Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| userName | Username to access the SAP BW server where the open hub destination is located. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### SapTableLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'SapTable' (required) |
| typeProperties | Properties specific to this linked service type. | SapTableLinkedServiceTypeProperties(required) |


### SapTableLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| clientId | Client ID of the client on the SAP system where the table is located. (Usually a three-digit decimal number represented as a string) Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| language | Language of the SAP system where the table is located. The default value is EN. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| logonGroup | The Logon Group for the SAP System. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| messageServer | The hostname of the SAP Message Server. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| messageServerService | The service name or port number of the Message Server. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| password | Password to access the SAP server where the table is located. | SecretBase |
| server | Host name of the SAP instance where the table is located. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| sncLibraryPath | External security product's library to access the SAP server where the table is located. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| sncMode | SNC activation indicator to access the SAP server where the table is located. Must be either 0 (off) or 1 (on). Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| sncMyName | Initiator's SNC name to access the SAP server where the table is located. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| sncPartnerName | Communication partner's SNC name to access the SAP server where the table is located. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| sncQop | SNC Quality of Protection. Allowed value include: 1, 2, 3, 8, 9. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| systemId | SystemID of the SAP system where the table is located. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| systemNumber | System number of the SAP system where the table is located. (Usually a two-digit decimal number represented as a string.) Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| userName | Username to access the SAP server where the table is located. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### ServiceNowLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'ServiceNow' (required) |
| typeProperties | ServiceNow server linked service properties. | ServiceNowLinkedServiceTypeProperties(required) |


### ServiceNowLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| authenticationType | The authentication type to use. | 'Basic''OAuth2' (required) |
| clientId | The client id for OAuth2 authentication. | For Bicep, you can use theany()function. |
| clientSecret | The client secret for OAuth2 authentication. | SecretBase |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| endpoint | The endpoint of the ServiceNow server. (i.e. {instance}.service-now.com) | For Bicep, you can use theany()function.(required) |
| password | The password corresponding to the user name for Basic and OAuth2 authentication. | SecretBase |
| useEncryptedEndpoints | Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. | For Bicep, you can use theany()function. |
| useHostVerification | Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. | For Bicep, you can use theany()function. |
| usePeerVerification | Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. | For Bicep, you can use theany()function. |
| username | The user name used to connect to the ServiceNow server for Basic and OAuth2 authentication. | For Bicep, you can use theany()function. |


### SftpServerLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'Sftp' (required) |
| typeProperties | Properties specific to this linked service type. | SftpServerLinkedServiceTypeProperties(required) |


### SftpServerLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| authenticationType | The authentication type to be used to connect to the FTP server. | 'Basic''MultiFactor''SshPublicKey' |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| host | The SFTP server host name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| hostKeyFingerprint | The host key finger-print of the SFTP server. When SkipHostKeyValidation is false, HostKeyFingerprint should be specified. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| passPhrase | The password to decrypt the SSH private key if the SSH private key is encrypted. | SecretBase |
| password | Password to logon the SFTP server for Basic authentication. | SecretBase |
| port | The TCP port number that the SFTP server uses to listen for client connections. Default value is 22. Type: integer (or Expression with resultType integer), minimum: 0. | For Bicep, you can use theany()function. |
| privateKeyContent | Base64 encoded SSH private key content for SshPublicKey authentication. For on-premises copy with SshPublicKey authentication, either PrivateKeyPath or PrivateKeyContent should be specified. SSH private key should be OpenSSH format. | SecretBase |
| privateKeyPath | The SSH private key file path for SshPublicKey authentication. Only valid for on-premises copy. For on-premises copy with SshPublicKey authentication, either PrivateKeyPath or PrivateKeyContent should be specified. SSH private key should be OpenSSH format. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| skipHostKeyValidation | If true, skip the SSH host key validation. Default value is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| userName | The username used to log on to the SFTP server. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### SharePointOnlineListLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'SharePointOnlineList' (required) |
| typeProperties | SharePoint Online List linked service properties. | SharePointOnlineListLinkedServiceTypeProperties(required) |


### SharePointOnlineListLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| servicePrincipalId | The application (client) ID of your application registered in Azure Active Directory. Make sure to grant SharePoint site permission to this application. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| servicePrincipalKey | The client secret of your application registered in Azure Active Directory. Type: string (or Expression with resultType string). | SecretBase(required) |
| siteUrl | The URL of the SharePoint Online site. For example,https://contoso.sharepoint.com/sites/siteName. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| tenantId | The tenant ID under which your application resides. You can find it from Azure portal Active Directory overview page. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |


### ShopifyLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'Shopify' (required) |
| typeProperties | Shopify Service linked service properties. | ShopifyLinkedServiceTypeProperties(required) |


### ShopifyLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| accessToken | The API access token that can be used to access Shopifyâs data. The token won't expire if it is offline mode. | SecretBase |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| host | The endpoint of the Shopify server. (i.e. mystore.myshopify.com) | For Bicep, you can use theany()function.(required) |
| useEncryptedEndpoints | Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. | For Bicep, you can use theany()function. |
| useHostVerification | Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. | For Bicep, you can use theany()function. |
| usePeerVerification | Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. | For Bicep, you can use theany()function. |


### SmartsheetLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'Smartsheet' (required) |
| typeProperties | Smartsheet linked service properties. | SmartsheetLinkedServiceTypeProperties(required) |


### SmartsheetLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| apiToken | The api token for the Smartsheet source. | SecretBase(required) |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### SnowflakeLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'Snowflake' (required) |
| typeProperties | Snowflake linked service properties. | SnowflakeLinkedServiceTypeProperties(required) |


### SnowflakeLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| connectionString | The connection string of snowflake. Type: string, SecureString. | For Bicep, you can use theany()function.(required) |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| password | The Azure key vault secret reference of password in connection string. | AzureKeyVaultSecretReference |


### SparkLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'Spark' (required) |
| typeProperties | Spark Server linked service properties. | SparkLinkedServiceTypeProperties(required) |


### SparkLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| allowHostNameCNMismatch | Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false. | For Bicep, you can use theany()function. |
| allowSelfSignedServerCert | Specifies whether to allow self-signed certificates from the server. The default value is false. | For Bicep, you can use theany()function. |
| authenticationType | The authentication method used to access the Spark server. | 'Anonymous''Username''UsernameAndPassword''WindowsAzureHDInsightService' (required) |
| enableSsl | Specifies whether the connections to the server are encrypted using SSL. The default value is false. | For Bicep, you can use theany()function. |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| host | IP address or host name of the Spark server | For Bicep, you can use theany()function.(required) |
| httpPath | The partial URL corresponding to the Spark server. | For Bicep, you can use theany()function. |
| password | The password corresponding to the user name that you provided in the Username field | SecretBase |
| port | The TCP port that the Spark server uses to listen for client connections. | For Bicep, you can use theany()function.(required) |
| serverType | The type of Spark server. | 'SharkServer''SharkServer2''SparkThriftServer' |
| thriftTransportProtocol | The transport protocol to use in the Thrift layer. | 'Binary''HTTP ''SASL' |
| trustedCertPath | The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. | For Bicep, you can use theany()function. |
| username | The user name that you use to access Spark Server. | For Bicep, you can use theany()function. |
| useSystemTrustStore | Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false. | For Bicep, you can use theany()function. |


### SqlServerLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'SqlServer' (required) |
| typeProperties | SQL Server linked service properties. | SqlServerLinkedServiceTypeProperties(required) |


### SqlServerLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| alwaysEncryptedSettings | Sql always encrypted properties. | SqlAlwaysEncryptedProperties |
| connectionString | The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function.(required) |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| password | The on-premises Windows authentication password. | SecretBase |
| userName | The on-premises Windows authentication user name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### SquareLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'Square' (required) |
| typeProperties | Square Service linked service properties. | SquareLinkedServiceTypeProperties(required) |


### SquareLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| clientId | The client ID associated with your Square application. | For Bicep, you can use theany()function. |
| clientSecret | The client secret associated with your Square application. | SecretBase |
| connectionProperties | Properties used to connect to Square. It is mutually exclusive with any other properties in the linked service. Type: object. | For Bicep, you can use theany()function. |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| host | The URLÂ of the Square instance. (i.e. mystore.mysquare.com) | For Bicep, you can use theany()function. |
| redirectUri | The redirect URL assigned in the Square application dashboard. (i.e.http://localhost:2500) | For Bicep, you can use theany()function. |
| useEncryptedEndpoints | Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. | For Bicep, you can use theany()function. |
| useHostVerification | Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. | For Bicep, you can use theany()function. |
| usePeerVerification | Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. | For Bicep, you can use theany()function. |


### SybaseLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'Sybase' (required) |
| typeProperties | Sybase linked service properties. | SybaseLinkedServiceTypeProperties(required) |


### SybaseLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| authenticationType | AuthenticationType to be used for connection. | 'Basic''Windows' |
| database | Database name for connection. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| password | Password for authentication. | SecretBase |
| schema | Schema name for connection. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| server | Server name for connection. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| username | Username for authentication. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### TeamDeskLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'TeamDesk' (required) |
| typeProperties | TeamDesk linked service properties. | TeamDeskLinkedServiceTypeProperties(required) |


### TeamDeskLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| apiToken | The api token for the TeamDesk source. | SecretBase |
| authenticationType | The authentication type to use. | 'Basic''Token' (required) |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| password | The password of the TeamDesk source. | SecretBase |
| url | The url to connect TeamDesk source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| userName | The username of the TeamDesk source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### TeradataLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'Teradata' (required) |
| typeProperties | Teradata linked service properties. | TeradataLinkedServiceTypeProperties(required) |


### TeradataLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| authenticationType | AuthenticationType to be used for connection. | 'Basic''Windows' |
| connectionString | Teradata ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function. |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| password | Password for authentication. | SecretBase |
| server | Server name for connection. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| username | Username for authentication. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### TwilioLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'Twilio' (required) |
| typeProperties | Twilio linked service properties. | TwilioLinkedServiceTypeProperties(required) |


### TwilioLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| password | The auth token of Twilio service. | SecretBase(required) |
| userName | The Account SID of Twilio service. | For Bicep, you can use theany()function.(required) |


### VerticaLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'Vertica' (required) |
| typeProperties | Vertica linked service properties. | VerticaLinkedServiceTypeProperties(required) |


### VerticaLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| connectionString | An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function. |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| pwd | The Azure key vault secret reference of password in connection string. | AzureKeyVaultSecretReference |


### WebLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'Web' (required) |
| typeProperties | Web linked service properties. | WebLinkedServiceTypeProperties(required) |


### WebLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| url | The URL of the web service endpoint, e.g.https://www.microsoft.com. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| authenticationType | Set the object type | AnonymousBasicClientCertificate(required) |


### WebAnonymousAuthentication

| Name | Description | Value |
|-|-|-|
| authenticationType | Type of authentication used to connect to the web table source. | 'Anonymous' (required) |


### WebBasicAuthentication

| Name | Description | Value |
|-|-|-|
| authenticationType | Type of authentication used to connect to the web table source. | 'Basic' (required) |
| password | The password for Basic authentication. | SecretBase(required) |
| username | User name for Basic authentication. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |


### WebClientCertificateAuthentication

| Name | Description | Value |
|-|-|-|
| authenticationType | Type of authentication used to connect to the web table source. | 'ClientCertificate' (required) |
| password | Password for the PFX file. | SecretBase(required) |
| pfx | Base64-encoded contents of a PFX file. | SecretBase(required) |


### XeroLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'Xero' (required) |
| typeProperties | Xero Service linked service properties. | XeroLinkedServiceTypeProperties(required) |


### XeroLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| connectionProperties | Properties used to connect to Xero. It is mutually exclusive with any other properties in the linked service. Type: object. | For Bicep, you can use theany()function. |
| consumerKey | The consumer key associated with the Xero application. | SecretBase |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| host | The endpoint of the Xero server. (i.e. api.xero.com) | For Bicep, you can use theany()function. |
| privateKey | The private key from the .pem file that was generated for your Xero private application. You must include all the text from the .pem file, including the Unix line endings(). | SecretBase |
| useEncryptedEndpoints | Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. | For Bicep, you can use theany()function. |
| useHostVerification | Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. | For Bicep, you can use theany()function. |
| usePeerVerification | Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. | For Bicep, you can use theany()function. |


### ZendeskLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'Zendesk' (required) |
| typeProperties | Zendesk linked service properties. | ZendeskLinkedServiceTypeProperties(required) |


### ZendeskLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| apiToken | The api token for the Zendesk source. | SecretBase |
| authenticationType | The authentication type to use. | 'Basic''Token' (required) |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| password | The password of the Zendesk source. | SecretBase |
| url | The url to connect Zendesk source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| userName | The username of the Zendesk source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### ZohoLinkedService

| Name | Description | Value |
|-|-|-|
| type | Type of linked service. | 'Zoho' (required) |
| typeProperties | Zoho server linked service properties. | ZohoLinkedServiceTypeProperties(required) |


### ZohoLinkedServiceTypeProperties

| Name | Description | Value |
|-|-|-|
| accessToken | The access token for Zoho authentication. | SecretBase |
| connectionProperties | Properties used to connect to Zoho. It is mutually exclusive with any other properties in the linked service. Type: object. | For Bicep, you can use theany()function. |
| encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| endpoint | The endpoint of the Zoho server. (i.e. crm.zoho.com/crm/private) | For Bicep, you can use theany()function. |
| useEncryptedEndpoints | Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. | For Bicep, you can use theany()function. |
| useHostVerification | Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. | For Bicep, you can use theany()function. |
| usePeerVerification | Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. | For Bicep, you can use theany()function. |
## Microsoft.DataFactory/factories/managedVirtualNetworks@2018-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataFactory/factories/managedVirtualNetworks@2018-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {}
  })
}

```

### factories/managedVirtualNetworks

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:factories |
| properties | Managed Virtual Network properties. | ManagedVirtualNetwork(required) |
## Microsoft.DataFactory/factories/managedVirtualNetworks/managedPrivateEndpoints@2018-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataFactory/factories/managedVirtualNetworks/managedPrivateEndpoints@2018-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      connectionState = {}
      fqdns = [
        "string"
      ]
      groupId = "string"
      privateLinkResourceId = "string"
    }
  })
}

```

### factories/managedVirtualNetworks/managedPrivateEndpo...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:managedVirtualNetworks |
| properties | Managed private endpoint properties. | ManagedPrivateEndpoint(required) |


### ManagedPrivateEndpoint

| Name | Description | Value |
|-|-|-|
| connectionState | The managed private endpoint connection state | ConnectionStateProperties |
| fqdns | Fully qualified domain names | string[] |
| groupId | The groupId to which the managed private endpoint is created | string |
| privateLinkResourceId | The ARM resource ID of the resource to which the managed private endpoint is created | string |
## Microsoft.DataFactory/factories/pipelines@2018-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataFactory/factories/pipelines@2018-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      activities = [
        {
          dependsOn = [
            {
              activity = "string"
              dependencyConditions = [
                "string"
              ]
            }
          ]
          description = "string"
          name = "string"
          userProperties = [
            {
              name = "string"
            }
          ]
          type = "string"
          // For remaining properties, see Activity objects
        }
      ]
      annotations = [ object ]
      concurrency = int
      description = "string"
      folder = {
        name = "string"
      }
      parameters = {}
      policy = {
        elapsedTimeMetric = {}
      }
      runDimensions = {}
      variables = {}
    }
  })
}

```

### factories/pipelines

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-260Valid characters:Can't use:<>*#.%&:\\+?/or control charactersStart with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:factories |
| properties | Properties of the pipeline. | Pipeline(required) |


### Pipeline

| Name | Description | Value |
|-|-|-|
| activities | List of activities in pipeline. | Activity[] |
| annotations | List of tags that can be used for describing the Pipeline. | any[] |
| concurrency | The max number of concurrent runs for the pipeline. | int |
| description | The description of the pipeline. | string |
| folder | The folder that this Pipeline is in. If not specified, Pipeline will appear at the root level. | PipelineFolder |
| parameters | List of parameters for pipeline. | object |
| policy | Pipeline Policy. | PipelinePolicy |
| runDimensions | Dimensions emitted by Pipeline. | object |
| variables | List of variables for pipeline. | object |


### Activity

| Name | Description | Value |
|-|-|-|
| dependsOn | Activity depends on condition. | ActivityDependency[] |
| description | Activity description. | string |
| name | Activity name. | string (required) |
| userProperties | Activity user properties. | UserProperty[] |
| type | Set the object type | AppendVariableAzureDataExplorerCommandAzureFunctionActivityAzureMLBatchExecutionAzureMLExecutePipelineAzureMLUpdateResourceCopyCustomDatabricksNotebookDatabricksSparkJarDatabricksSparkPythonDataLakeAnalyticsU-SQLDeleteExecuteDataFlowExecutePipelineExecuteSSISPackageExecuteWranglingDataflowFailFilterForEachGetMetadataHDInsightHiveHDInsightMapReduceHDInsightPigHDInsightSparkHDInsightStreamingIfConditionLookupScriptSetVariableSparkJobSqlServerStoredProcedureSwitchSynapseNotebookUntilValidationWaitWebActivityWebHook(required) |


### ActivityDependency

| Name | Description | Value |
|-|-|-|
| activity | Activity name. | string (required) |
| dependencyConditions | Match-Condition for the dependency. | String array containing any of:'Completed''Failed''Skipped''Succeeded' (required) |


### UserProperty

| Name | Description | Value |
|-|-|-|
| name | User property name. | string (required) |
| value | User property value. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |


### AppendVariableActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'AppendVariable' (required) |
| typeProperties | Append Variable activity properties. | AppendVariableActivityTypeProperties(required) |


### AppendVariableActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| value | Value to be appended. Could be a static value or Expression | For Bicep, you can use theany()function. |
| variableName | Name of the variable whose value needs to be appended to. | string |


### AzureDataExplorerCommandActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'AzureDataExplorerCommand' (required) |
| linkedServiceName | Linked service reference. | LinkedServiceReference |
| policy | Activity policy. | ActivityPolicy |
| typeProperties | Azure Data Explorer command activity properties. | AzureDataExplorerCommandActivityTypeProperties(required) |


### LinkedServiceReference

| Name | Description | Value |
|-|-|-|
| parameters | Arguments for LinkedService. | object |
| referenceName | Reference LinkedService name. | string (required) |
| type | Linked service reference type. | 'LinkedServiceReference' (required) |


### ActivityPolicy

| Name | Description | Value |
|-|-|-|
| retry | Maximum ordinary retry attempts. Default is 0. Type: integer (or Expression with resultType integer), minimum: 0. | For Bicep, you can use theany()function. |
| retryIntervalInSeconds | Interval between each retry attempt (in seconds). The default is 30 sec. | int |
| secureInput | When set to true, Input from activity is considered as secure and will not be logged to monitoring. | bool |
| secureOutput | When set to true, Output from activity is considered as secure and will not be logged to monitoring. | bool |
| timeout | Specifies the timeout for the activity to run. The default timeout is 7 days. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### AzureDataExplorerCommandActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| command | A control command, according to the Azure Data Explorer command syntax. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| commandTimeout | Control command timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9]))..) | For Bicep, you can use theany()function. |


### AzureFunctionActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'AzureFunctionActivity' (required) |
| linkedServiceName | Linked service reference. | LinkedServiceReference |
| policy | Activity policy. | ActivityPolicy |
| typeProperties | Azure Function activity properties. | AzureFunctionActivityTypeProperties(required) |


### AzureFunctionActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| body | Represents the payload that will be sent to the endpoint. Required for POST/PUT method, not allowed for GET method Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| functionName | Name of the Function that the Azure Function Activity will call. Type: string (or Expression with resultType string) | For Bicep, you can use theany()function.(required) |
| headers | Represents the headers that will be sent to the request. For example, to set the language and type on a request: "headers" : { "Accept-Language": "en-us", "Content-Type": "application/json" }. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| method | Rest API method for target endpoint. | 'DELETE''GET''HEAD''OPTIONS''POST''PUT''TRACE' (required) |


### AzureMLBatchExecutionActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'AzureMLBatchExecution' (required) |
| linkedServiceName | Linked service reference. | LinkedServiceReference |
| policy | Activity policy. | ActivityPolicy |
| typeProperties | Azure ML Batch Execution activity properties. | AzureMLBatchExecutionActivityTypeProperties(required) |


### AzureMLBatchExecutionActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| globalParameters | Key,Value pairs to be passed to the Azure ML Batch Execution Service endpoint. Keys must match the names of web service parameters defined in the published Azure ML web service. Values will be passed in the GlobalParameters property of the Azure ML batch execution request. | object |
| webServiceInputs | Key,Value pairs, mapping the names of Azure ML endpoint's Web Service Inputs to AzureMLWebServiceFile objects specifying the input Blob locations.. This information will be passed in the WebServiceInputs property of the Azure ML batch execution request. | object |
| webServiceOutputs | Key,Value pairs, mapping the names of Azure ML endpoint's Web Service Outputs to AzureMLWebServiceFile objects specifying the output Blob locations. This information will be passed in the WebServiceOutputs property of the Azure ML batch execution request. | object |


### AzureMLExecutePipelineActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'AzureMLExecutePipeline' (required) |
| linkedServiceName | Linked service reference. | LinkedServiceReference |
| policy | Activity policy. | ActivityPolicy |
| typeProperties | Azure ML Execute Pipeline activity properties. | AzureMLExecutePipelineActivityTypeProperties(required) |


### AzureMLExecutePipelineActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| continueOnStepFailure | Whether to continue execution of other steps in the PipelineRun if a step fails. This information will be passed in the continueOnStepFailure property of the published pipeline execution request. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| dataPathAssignments | Dictionary used for changing data path assignments without retraining. Values will be passed in the dataPathAssignments property of the published pipeline execution request. Type: object with key value pairs (or Expression with resultType object). | For Bicep, you can use theany()function. |
| experimentName | Run history experiment name of the pipeline run. This information will be passed in the ExperimentName property of the published pipeline execution request. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| mlParentRunId | The parent Azure ML Service pipeline run id. This information will be passed in the ParentRunId property of the published pipeline execution request. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| mlPipelineEndpointId | ID of the published Azure ML pipeline endpoint. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| mlPipelineId | ID of the published Azure ML pipeline. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| mlPipelineParameters | Key,Value pairs to be passed to the published Azure ML pipeline endpoint. Keys must match the names of pipeline parameters defined in the published pipeline. Values will be passed in the ParameterAssignments property of the published pipeline execution request. Type: object with key value pairs (or Expression with resultType object). | For Bicep, you can use theany()function. |
| version | Version of the published Azure ML pipeline endpoint. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### AzureMLUpdateResourceActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'AzureMLUpdateResource' (required) |
| linkedServiceName | Linked service reference. | LinkedServiceReference |
| policy | Activity policy. | ActivityPolicy |
| typeProperties | Azure ML Update Resource management activity properties. | AzureMLUpdateResourceActivityTypeProperties(required) |


### AzureMLUpdateResourceActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| trainedModelFilePath | The relative file path in trainedModelLinkedService to represent the .ilearner file that will be uploaded by the update operation.  Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| trainedModelLinkedServiceName | Name of Azure Storage linked service holding the .ilearner file that will be uploaded by the update operation. | LinkedServiceReference(required) |
| trainedModelName | Name of the Trained Model module in the Web Service experiment to be updated. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |


### CopyActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'Copy' (required) |
| inputs | List of inputs for the activity. | DatasetReference[] |
| linkedServiceName | Linked service reference. | LinkedServiceReference |
| outputs | List of outputs for the activity. | DatasetReference[] |
| policy | Activity policy. | ActivityPolicy |
| typeProperties | Copy activity properties. | CopyActivityTypeProperties(required) |


### DatasetReference

| Name | Description | Value |
|-|-|-|
| parameters | Arguments for dataset. | object |
| referenceName | Reference dataset name. | string (required) |
| type | Dataset reference type. | 'DatasetReference' (required) |


### CopyActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| dataIntegrationUnits | Maximum number of data integration units that can be used to perform this data movement. Type: integer (or Expression with resultType integer), minimum: 0. | For Bicep, you can use theany()function. |
| enableSkipIncompatibleRow | Whether to skip incompatible row. Default value is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| enableStaging | Specifies whether to copy data via an interim staging. Default value is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| logSettings | Log settings customer needs provide when enabling log. | LogSettings |
| logStorageSettings | (Deprecated. Please use LogSettings) Log storage settings customer need to provide when enabling session log. | LogStorageSettings |
| parallelCopies | Maximum number of concurrent sessions opened on the source or sink to avoid overloading the data store. Type: integer (or Expression with resultType integer), minimum: 0. | For Bicep, you can use theany()function. |
| preserve | Preserve rules. | any[] |
| preserveRules | Preserve Rules. | any[] |
| redirectIncompatibleRowSettings | Redirect incompatible row settings when EnableSkipIncompatibleRow is true. | RedirectIncompatibleRowSettings |
| sink | Copy activity sink. | CopySink(required) |
| skipErrorFile | Specify the fault tolerance for data consistency. | SkipErrorFile |
| source | Copy activity source. | CopySource(required) |
| stagingSettings | Specifies interim staging settings when EnableStaging is true. | StagingSettings |
| translator | Copy activity translator. If not specified, tabular translator is used. | For Bicep, you can use theany()function. |
| validateDataConsistency | Whether to enable Data Consistency validation. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |


### LogSettings

| Name | Description | Value |
|-|-|-|
| copyActivityLogSettings | Specifies settings for copy activity log. | CopyActivityLogSettings |
| enableCopyActivityLog | Specifies whether to enable copy activity log. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| logLocationSettings | Log location settings customer needs to provide when enabling log. | LogLocationSettings(required) |


### CopyActivityLogSettings

| Name | Description | Value |
|-|-|-|
| enableReliableLogging | Specifies whether to enable reliable logging. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| logLevel | Gets or sets the log level, support: Info, Warning. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### LogLocationSettings

| Name | Description | Value |
|-|-|-|
| linkedServiceName | Log storage linked service reference. | LinkedServiceReference(required) |
| path | The path to storage for storing detailed logs of activity execution. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### LogStorageSettings

| Name | Description | Value |
|-|-|-|
| enableReliableLogging | Specifies whether to enable reliable logging. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| linkedServiceName | Log storage linked service reference. | LinkedServiceReference(required) |
| logLevel | Gets or sets the log level, support: Info, Warning. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| path | The path to storage for storing detailed logs of activity execution. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### RedirectIncompatibleRowSettings

| Name | Description | Value |
|-|-|-|
| linkedServiceName | Name of the Azure Storage, Storage SAS, or Azure Data Lake Store linked service used for redirecting incompatible row. Must be specified if redirectIncompatibleRowSettings is specified. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| path | The path for storing the redirect incompatible row data. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### CopySink

| Name | Description | Value |
|-|-|-|
| disableMetricsCollection | If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| maxConcurrentConnections | The maximum concurrent connection count for the sink data store. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |
| sinkRetryCount | Sink retry count. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |
| sinkRetryWait | Sink retry wait. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |
| writeBatchSize | Write batch size. Type: integer (or Expression with resultType integer), minimum: 0. | For Bicep, you can use theany()function. |
| writeBatchTimeout | Write batch timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |
| type | Set the object type | AvroSinkAzureBlobFSSinkAzureDatabricksDeltaLakeSinkAzureDataExplorerSinkAzureDataLakeStoreSinkAzureMySqlSinkAzurePostgreSqlSinkAzureQueueSinkAzureSearchIndexSinkAzureSqlSinkAzureTableSinkBinarySinkBlobSinkCommonDataServiceForAppsSinkCosmosDbMongoDbApiSinkCosmosDbSqlApiSinkDelimitedTextSinkDocumentDbCollectionSinkDynamicsCrmSinkDynamicsSinkFileSystemSinkInformixSinkJsonSinkMicrosoftAccessSinkMongoDbAtlasSinkMongoDbV2SinkOdbcSinkOracleSinkOrcSinkParquetSinkRestSinkSalesforceServiceCloudSinkSalesforceSinkSapCloudForCustomerSinkSnowflakeSinkSqlDWSinkSqlMISinkSqlServerSinkSqlSink(required) |


### AvroSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'AvroSink' (required) |
| formatSettings | Avro format settings. | AvroWriteSettings |
| storeSettings | Avro store settings. | StoreWriteSettings |


### AvroWriteSettings

| Name | Description | Value |
|-|-|-|
| fileNamePrefix | Specifies the file name pattern {fileNamePrefix}_{fileIndex}.{fileExtension} when copy from non-file based store without partitionOptions. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| maxRowsPerFile | Limit the written file's row count to be smaller than or equal to the specified count. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |
| recordName | Top level record name in write result, which is required in AVRO spec. | string |
| recordNamespace | Record namespace in the write result. | string |
| type | The write setting type. | string (required) |


### StoreWriteSettings

| Name | Description | Value |
|-|-|-|
| copyBehavior | The type of copy behavior for copy sink. | For Bicep, you can use theany()function. |
| disableMetricsCollection | If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| maxConcurrentConnections | The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |
| type | Set the object type | AzureBlobFSWriteSettingsAzureBlobStorageWriteSettingsAzureDataLakeStoreWriteSettingsAzureFileStorageWriteSettingsFileServerWriteSettingsSftpWriteSettings(required) |


### AzureBlobFSWriteSettings

| Name | Description | Value |
|-|-|-|
| type | The write setting type. | 'AzureBlobFSWriteSettings' (required) |
| blockSizeInMB | Indicates the block size(MB) when writing data to blob. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |


### AzureBlobStorageWriteSettings

| Name | Description | Value |
|-|-|-|
| type | The write setting type. | 'AzureBlobStorageWriteSettings' (required) |
| blockSizeInMB | Indicates the block size(MB) when writing data to blob. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |


### AzureDataLakeStoreWriteSettings

| Name | Description | Value |
|-|-|-|
| type | The write setting type. | 'AzureDataLakeStoreWriteSettings' (required) |
| expiryDateTime | Specifies the expiry time of the written files. The time is applied to the UTC time zone in the format of "2018-12-01T05:00:00Z". Default value is NULL. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |


### AzureFileStorageWriteSettings

| Name | Description | Value |
|-|-|-|
| type | The write setting type. | 'AzureFileStorageWriteSettings' (required) |


### FileServerWriteSettings

| Name | Description | Value |
|-|-|-|
| type | The write setting type. | 'FileServerWriteSettings' (required) |


### SftpWriteSettings

| Name | Description | Value |
|-|-|-|
| type | The write setting type. | 'SftpWriteSettings' (required) |
| operationTimeout | Specifies the timeout for writing each chunk to SFTP server. Default value: 01:00:00 (one hour). Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| useTempFileRename | Upload to temporary file(s) and rename. Disable this option if your SFTP server doesn't support rename operation. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |


### AzureBlobFSSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'AzureBlobFSSink' (required) |
| copyBehavior | The type of copy behavior for copy sink. | For Bicep, you can use theany()function. |
| metadata | Specify the custom metadata to be added to sink data. Type: array of objects (or Expression with resultType array of objects). | MetadataItem[] |


### MetadataItem

| Name | Description | Value |
|-|-|-|
| name | Metadata item key name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| value | Metadata item value. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### AzureDatabricksDeltaLakeSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'AzureDatabricksDeltaLakeSink' (required) |
| importSettings | Azure Databricks Delta Lake import settings. | AzureDatabricksDeltaLakeImportCommand |
| preCopyScript | SQL pre-copy script. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### AzureDatabricksDeltaLakeImportCommand

| Name | Description | Value |
|-|-|-|
| dateFormat | Specify the date format for csv in Azure Databricks Delta Lake Copy. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| timestampFormat | Specify the timestamp format for csv in Azure Databricks Delta Lake Copy. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| type | The import setting type. | string (required) |


### AzureDataExplorerSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'AzureDataExplorerSink' (required) |
| flushImmediately | If set to true, any aggregation will be skipped. Default is false. Type: boolean. | For Bicep, you can use theany()function. |
| ingestionMappingAsJson | An explicit column mapping description provided in a json format. Type: string. | For Bicep, you can use theany()function. |
| ingestionMappingName | A name of a pre-created csv mapping that was defined on the target Kusto table. Type: string. | For Bicep, you can use theany()function. |


### AzureDataLakeStoreSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'AzureDataLakeStoreSink' (required) |
| copyBehavior | The type of copy behavior for copy sink. | For Bicep, you can use theany()function. |
| enableAdlsSingleFileParallel | Single File Parallel. | For Bicep, you can use theany()function. |


### AzureMySqlSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'AzureMySqlSink' (required) |
| preCopyScript | A query to execute before starting the copy. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### AzurePostgreSqlSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'AzurePostgreSqlSink' (required) |
| preCopyScript | A query to execute before starting the copy. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### AzureQueueSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'AzureQueueSink' (required) |


### AzureSearchIndexSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'AzureSearchIndexSink' (required) |
| writeBehavior | Specify the write behavior when upserting documents into Azure Search Index. | 'Merge''Upload' |


### AzureSqlSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'AzureSqlSink' (required) |
| preCopyScript | SQL pre-copy script. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| sqlWriterStoredProcedureName | SQL writer stored procedure name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| sqlWriterTableType | SQL writer table type. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| sqlWriterUseTableLock | Whether to use table lock during bulk copy. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| storedProcedureParameters | SQL stored procedure parameters. | For Bicep, you can use theany()function. |
| storedProcedureTableTypeParameterName | The stored procedure parameter name of the table type. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| tableOption | The option to handle sink table, such as autoCreate. For now only 'autoCreate' value is supported. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| upsertSettings | SQL upsert settings. | SqlUpsertSettings |
| writeBehavior | Write behavior when copying data into Azure SQL. Type: SqlWriteBehaviorEnum (or Expression with resultType SqlWriteBehaviorEnum) | For Bicep, you can use theany()function. |


### SqlUpsertSettings

| Name | Description | Value |
|-|-|-|
| interimSchemaName | Schema name for interim table. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| keys | Key column names for unique row identification. Type: array of strings (or Expression with resultType array of strings). | For Bicep, you can use theany()function. |
| useTempDB | Specifies whether to use temp db for upsert interim table. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |


### AzureTableSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'AzureTableSink' (required) |
| azureTableDefaultPartitionKeyValue | Azure Table default partition key value. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| azureTableInsertType | Azure Table insert type. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| azureTablePartitionKeyName | Azure Table partition key name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| azureTableRowKeyName | Azure Table row key name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### BinarySink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'BinarySink' (required) |
| storeSettings | Binary store settings. | StoreWriteSettings |


### BlobSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'BlobSink' (required) |
| blobWriterAddHeader | Blob writer add header. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| blobWriterDateTimeFormat | Blob writer date time format. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| blobWriterOverwriteFiles | Blob writer overwrite files. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| copyBehavior | The type of copy behavior for copy sink. | For Bicep, you can use theany()function. |
| metadata | Specify the custom metadata to be added to sink data. Type: array of objects (or Expression with resultType array of objects). | MetadataItem[] |


### CommonDataServiceForAppsSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'CommonDataServiceForAppsSink' (required) |
| alternateKeyName | The logical name of the alternate key which will be used when upserting records. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| ignoreNullValues | The flag indicating whether to ignore null values from input dataset (except key fields) during write operation. Default is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| writeBehavior | The write behavior for the operation. | 'Upsert' (required) |


### CosmosDbMongoDbApiSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'CosmosDbMongoDbApiSink' (required) |
| writeBehavior | Specifies whether the document with same key to be overwritten (upsert) rather than throw exception (insert). The default value is "insert". Type: string (or Expression with resultType string). Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### CosmosDbSqlApiSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'CosmosDbSqlApiSink' (required) |
| writeBehavior | Describes how to write data to Azure Cosmos DB. Type: string (or Expression with resultType string). Allowed values: insert and upsert. | For Bicep, you can use theany()function. |


### DelimitedTextSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'DelimitedTextSink' (required) |
| formatSettings | DelimitedText format settings. | DelimitedTextWriteSettings |
| storeSettings | DelimitedText store settings. | StoreWriteSettings |


### DelimitedTextWriteSettings

| Name | Description | Value |
|-|-|-|
| fileExtension | The file extension used to create the files. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| fileNamePrefix | Specifies the file name pattern {fileNamePrefix}_{fileIndex}.{fileExtension} when copy from non-file based store without partitionOptions. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| maxRowsPerFile | Limit the written file's row count to be smaller than or equal to the specified count. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |
| quoteAllText | Indicates whether string values should always be enclosed with quotes. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| type | The write setting type. | string (required) |


### DocumentDbCollectionSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'DocumentDbCollectionSink' (required) |
| nestingSeparator | Nested properties separator. Default is . (dot). Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| writeBehavior | Describes how to write data to Azure Cosmos DB. Type: string (or Expression with resultType string). Allowed values: insert and upsert. | For Bicep, you can use theany()function. |


### DynamicsCrmSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'DynamicsCrmSink' (required) |
| alternateKeyName | The logical name of the alternate key which will be used when upserting records. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| ignoreNullValues | The flag indicating whether to ignore null values from input dataset (except key fields) during write operation. Default is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| writeBehavior | The write behavior for the operation. | 'Upsert' (required) |


### DynamicsSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'DynamicsSink' (required) |
| alternateKeyName | The logical name of the alternate key which will be used when upserting records. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| ignoreNullValues | The flag indicating whether ignore null values from input dataset (except key fields) during write operation. Default is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| writeBehavior | The write behavior for the operation. | 'Upsert' (required) |


### FileSystemSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'FileSystemSink' (required) |
| copyBehavior | The type of copy behavior for copy sink. | For Bicep, you can use theany()function. |


### InformixSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'InformixSink' (required) |
| preCopyScript | A query to execute before starting the copy. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### JsonSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'JsonSink' (required) |
| formatSettings | Json format settings. | JsonWriteSettings |
| storeSettings | Json store settings. | StoreWriteSettings |


### JsonWriteSettings

| Name | Description | Value |
|-|-|-|
| filePattern | File pattern of JSON. This setting controls the way a collection of JSON objects will be treated. The default value is 'setOfObjects'. It is case-sensitive. | For Bicep, you can use theany()function. |
| type | The write setting type. | string (required) |


### MicrosoftAccessSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'MicrosoftAccessSink' (required) |
| preCopyScript | A query to execute before starting the copy. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### MongoDbAtlasSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'MongoDbAtlasSink' (required) |
| writeBehavior | Specifies whether the document with same key to be overwritten (upsert) rather than throw exception (insert). The default value is "insert". Type: string (or Expression with resultType string). Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### MongoDbV2Sink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'MongoDbV2Sink' (required) |
| writeBehavior | Specifies whether the document with same key to be overwritten (upsert) rather than throw exception (insert). The default value is "insert". Type: string (or Expression with resultType string). Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### OdbcSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'OdbcSink' (required) |
| preCopyScript | A query to execute before starting the copy. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### OracleSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'OracleSink' (required) |
| preCopyScript | SQL pre-copy script. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### OrcSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'OrcSink' (required) |
| formatSettings | ORC format settings. | OrcWriteSettings |
| storeSettings | ORC store settings. | StoreWriteSettings |


### OrcWriteSettings

| Name | Description | Value |
|-|-|-|
| fileNamePrefix | Specifies the file name pattern {fileNamePrefix}_{fileIndex}.{fileExtension} when copy from non-file based store without partitionOptions. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| maxRowsPerFile | Limit the written file's row count to be smaller than or equal to the specified count. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |
| type | The write setting type. | string (required) |


### ParquetSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'ParquetSink' (required) |
| formatSettings | Parquet format settings. | ParquetWriteSettings |
| storeSettings | Parquet store settings. | StoreWriteSettings |


### ParquetWriteSettings

| Name | Description | Value |
|-|-|-|
| fileNamePrefix | Specifies the file name pattern {fileNamePrefix}_{fileIndex}.{fileExtension} when copy from non-file based store without partitionOptions. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| maxRowsPerFile | Limit the written file's row count to be smaller than or equal to the specified count. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |
| type | The write setting type. | string (required) |


### RestSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'RestSink' (required) |
| additionalHeaders | The additional HTTP headers in the request to the RESTful API. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| httpCompressionType | Http Compression Type to Send data in compressed format with Optimal Compression Level, Default is None. And The Only Supported option is Gzip. | For Bicep, you can use theany()function. |
| httpRequestTimeout | The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:01:40. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |
| requestInterval | The time to await before sending next request, in milliseconds | For Bicep, you can use theany()function. |
| requestMethod | The HTTP method used to call the RESTful API. The default is POST. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### SalesforceServiceCloudSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'SalesforceServiceCloudSink' (required) |
| externalIdFieldName | The name of the external ID field for upsert operation. Default value is 'Id' column. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| ignoreNullValues | The flag indicating whether or not to ignore null values from input dataset (except key fields) during write operation. Default value is false. If set it to true, it means ADF will leave the data in the destination object unchanged when doing upsert/update operation and insert defined default value when doing insert operation, versus ADF will update the data in the destination object to NULL when doing upsert/update operation and insert NULL value when doing insert operation. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| writeBehavior | The write behavior for the operation. Default is Insert. | 'Insert''Upsert' |


### SalesforceSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'SalesforceSink' (required) |
| externalIdFieldName | The name of the external ID field for upsert operation. Default value is 'Id' column. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| ignoreNullValues | The flag indicating whether or not to ignore null values from input dataset (except key fields) during write operation. Default value is false. If set it to true, it means ADF will leave the data in the destination object unchanged when doing upsert/update operation and insert defined default value when doing insert operation, versus ADF will update the data in the destination object to NULL when doing upsert/update operation and insert NULL value when doing insert operation. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| writeBehavior | The write behavior for the operation. Default is Insert. | 'Insert''Upsert' |


### SapCloudForCustomerSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'SapCloudForCustomerSink' (required) |
| httpRequestTimeout | The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:05:00. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |
| writeBehavior | The write behavior for the operation. Default is 'Insert'. | 'Insert''Update' |


### SnowflakeSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'SnowflakeSink' (required) |
| importSettings | Snowflake import settings. | SnowflakeImportCopyCommand |
| preCopyScript | SQL pre-copy script. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### SnowflakeImportCopyCommand

| Name | Description | Value |
|-|-|-|
| additionalCopyOptions | Additional copy options directly passed to snowflake Copy Command. Type: key value pairs (value should be string type) (or Expression with resultType object). Example: "additionalCopyOptions": { "DATE_FORMAT": "MM/DD/YYYY", "TIME_FORMAT": "'HH24:MI:SS.FF'" } | object |
| additionalFormatOptions | Additional format options directly passed to snowflake Copy Command. Type: key value pairs (value should be string type) (or Expression with resultType object). Example: "additionalFormatOptions": { "FORCE": "TRUE", "LOAD_UNCERTAIN_FILES": "'FALSE'" } | object |
| type | The import setting type. | string (required) |


### SqlDWSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'SqlDWSink' (required) |
| allowCopyCommand | Indicates to use Copy Command to copy data into SQL Data Warehouse. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| allowPolyBase | Indicates to use PolyBase to copy data into SQL Data Warehouse when applicable. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| copyCommandSettings | Specifies Copy Command related settings when allowCopyCommand is true. | DWCopyCommandSettings |
| polyBaseSettings | Specifies PolyBase-related settings when allowPolyBase is true. | PolybaseSettings |
| preCopyScript | SQL pre-copy script. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| sqlWriterUseTableLock | Whether to use table lock during bulk copy. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| tableOption | The option to handle sink table, such as autoCreate. For now only 'autoCreate' value is supported. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| upsertSettings | SQL DW upsert settings. | SqlDWUpsertSettings |
| writeBehavior | Write behavior when copying data into azure SQL DW. Type: SqlDWWriteBehaviorEnum (or Expression with resultType SqlDWWriteBehaviorEnum) | For Bicep, you can use theany()function. |


### DWCopyCommandSettings

| Name | Description | Value |
|-|-|-|
| additionalOptions | Additional options directly passed to SQL DW in Copy Command. Type: key value pairs (value should be string type) (or Expression with resultType object). Example: "additionalOptions": { "MAXERRORS": "1000", "DATEFORMAT": "'ymd'" } | object |
| defaultValues | Specifies the default values for each target column in SQL DW. The default values in the property overwrite the DEFAULT constraint set in the DB, and identity column cannot have a default value. Type: array of objects (or Expression with resultType array of objects). | DWCopyCommandDefaultValue[] |


### DWCopyCommandDefaultValue

| Name | Description | Value |
|-|-|-|
| columnName | Column name. Type: object (or Expression with resultType string). | For Bicep, you can use theany()function. |
| defaultValue | The default value of the column. Type: object (or Expression with resultType string). | For Bicep, you can use theany()function. |


### PolybaseSettings

| Name | Description | Value |
|-|-|-|
| rejectSampleValue | Determines the number of rows to attempt to retrieve before the PolyBase recalculates the percentage of rejected rows. Type: integer (or Expression with resultType integer), minimum: 0. | For Bicep, you can use theany()function. |
| rejectType | Reject type. | 'percentage''value' |
| rejectValue | Specifies the value or the percentage of rows that can be rejected before the query fails. Type: number (or Expression with resultType number), minimum: 0. | For Bicep, you can use theany()function. |
| useTypeDefault | Specifies how to handle missing values in delimited text files when PolyBase retrieves data from the text file. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |


### SqlDWUpsertSettings

| Name | Description | Value |
|-|-|-|
| interimSchemaName | Schema name for interim table. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| keys | Key column names for unique row identification. Type: array of strings (or Expression with resultType array of strings). | For Bicep, you can use theany()function. |


### SqlMISink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'SqlMISink' (required) |
| preCopyScript | SQL pre-copy script. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| sqlWriterStoredProcedureName | SQL writer stored procedure name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| sqlWriterTableType | SQL writer table type. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| sqlWriterUseTableLock | Whether to use table lock during bulk copy. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| storedProcedureParameters | SQL stored procedure parameters. | For Bicep, you can use theany()function. |
| storedProcedureTableTypeParameterName | The stored procedure parameter name of the table type. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| tableOption | The option to handle sink table, such as autoCreate. For now only 'autoCreate' value is supported. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| upsertSettings | SQL upsert settings. | SqlUpsertSettings |
| writeBehavior | White behavior when copying data into azure SQL MI. Type: SqlWriteBehaviorEnum (or Expression with resultType SqlWriteBehaviorEnum) | For Bicep, you can use theany()function. |


### SqlServerSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'SqlServerSink' (required) |
| preCopyScript | SQL pre-copy script. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| sqlWriterStoredProcedureName | SQL writer stored procedure name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| sqlWriterTableType | SQL writer table type. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| sqlWriterUseTableLock | Whether to use table lock during bulk copy. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| storedProcedureParameters | SQL stored procedure parameters. | For Bicep, you can use theany()function. |
| storedProcedureTableTypeParameterName | The stored procedure parameter name of the table type. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| tableOption | The option to handle sink table, such as autoCreate. For now only 'autoCreate' value is supported. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| upsertSettings | SQL upsert settings. | SqlUpsertSettings |
| writeBehavior | Write behavior when copying data into sql server. Type: SqlWriteBehaviorEnum (or Expression with resultType SqlWriteBehaviorEnum) | For Bicep, you can use theany()function. |


### SqlSink

| Name | Description | Value |
|-|-|-|
| type | Copy sink type. | 'SqlSink' (required) |
| preCopyScript | SQL pre-copy script. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| sqlWriterStoredProcedureName | SQL writer stored procedure name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| sqlWriterTableType | SQL writer table type. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| sqlWriterUseTableLock | Whether to use table lock during bulk copy. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| storedProcedureParameters | SQL stored procedure parameters. | For Bicep, you can use theany()function. |
| storedProcedureTableTypeParameterName | The stored procedure parameter name of the table type. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| tableOption | The option to handle sink table, such as autoCreate. For now only 'autoCreate' value is supported. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| upsertSettings | SQL upsert settings. | SqlUpsertSettings |
| writeBehavior | Write behavior when copying data into sql. Type: SqlWriteBehaviorEnum (or Expression with resultType SqlWriteBehaviorEnum) | For Bicep, you can use theany()function. |


### SkipErrorFile

| Name | Description | Value |
|-|-|-|
| dataInconsistency | Skip if source/sink file changed by other concurrent write. Default is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| fileMissing | Skip if file is deleted by other client during copy. Default is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |


### CopySource

| Name | Description | Value |
|-|-|-|
| disableMetricsCollection | If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| maxConcurrentConnections | The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |
| sourceRetryCount | Source retry count. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |
| sourceRetryWait | Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |
| type | Set the object type | AmazonMWSSourceAmazonRdsForOracleSourceAmazonRdsForSqlServerSourceAmazonRedshiftSourceAvroSourceAzureBlobFSSourceAzureDatabricksDeltaLakeSourceAzureDataExplorerSourceAzureDataLakeStoreSourceAzureMariaDBSourceAzureMySqlSourceAzurePostgreSqlSourceAzureSqlSourceAzureTableSourceBinarySourceBlobSourceCassandraSourceCommonDataServiceForAppsSourceConcurSourceCosmosDbMongoDbApiSourceCosmosDbSqlApiSourceCouchbaseSourceDb2SourceDelimitedTextSourceDocumentDbCollectionSourceDrillSourceDynamicsAXSourceDynamicsCrmSourceDynamicsSourceEloquaSourceExcelSourceFileSystemSourceGoogleAdWordsSourceGoogleBigQuerySourceGreenplumSourceHBaseSourceHdfsSourceHiveSourceHttpSourceHubspotSourceImpalaSourceInformixSourceJiraSourceJsonSourceMagentoSourceMariaDBSourceMarketoSourceMicrosoftAccessSourceMongoDbAtlasSourceMongoDbSourceMongoDbV2SourceMySqlSourceNetezzaSourceODataSourceOdbcSourceOffice365SourceOracleServiceCloudSourceOracleSourceOrcSourceParquetSourcePaypalSourcePhoenixSourcePostgreSqlSourcePrestoSourceQuickBooksSourceRelationalSourceResponsysSourceRestSourceSalesforceMarketingCloudSourceSalesforceServiceCloudSourceSalesforceSourceSapBwSourceSapCloudForCustomerSourceSapEccSourceSapHanaSourceSapOdpSourceSapOpenHubSourceSapTableSourceServiceNowSourceSharePointOnlineListSourceShopifySourceSnowflakeSourceSparkSourceSqlDWSourceSqlMISourceSqlServerSourceSqlSourceSquareSourceSybaseSourceTeradataSourceVerticaSourceWebSourceXeroSourceXmlSourceZohoSource(required) |


### AmazonMWSSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'AmazonMWSSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### AmazonRdsForOracleSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'AmazonRdsForOracleSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| oracleReaderQuery | AmazonRdsForOracle reader query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionOption | The partition mechanism that will be used for AmazonRdsForOracle read in parallel. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionSettings | The settings that will be leveraged for AmazonRdsForOracle source partitioning. | AmazonRdsForOraclePartitionSettings |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### AmazonRdsForOraclePartitionSettings

| Name | Description | Value |
|-|-|-|
| partitionColumnName | The name of the column in integer type that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionLowerBound | The minimum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionNames | Names of the physical partitions of AmazonRdsForOracle table. | For Bicep, you can use theany()function. |
| partitionUpperBound | The maximum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### AmazonRdsForSqlServerSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'AmazonRdsForSqlServerSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| partitionOption | The partition mechanism that will be used for Sql read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "DynamicRange". | For Bicep, you can use theany()function. |
| partitionSettings | The settings that will be leveraged for Sql source partitioning. | SqlPartitionSettings |
| produceAdditionalTypes | Which additional types to produce. | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |
| sqlReaderQuery | SQL reader query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| sqlReaderStoredProcedureName | Name of the stored procedure for a SQL Database source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| storedProcedureParameters | Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}". | For Bicep, you can use theany()function. |


### SqlPartitionSettings

| Name | Description | Value |
|-|-|-|
| partitionColumnName | The name of the column in integer or datetime type that will be used for proceeding partitioning. If not specified, the primary key of the table is auto-detected and used as the partition column. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionLowerBound | The minimum value of the partition column for partition range splitting. This value is used to decide the partition stride, not for filtering the rows in table. All rows in the table or query result will be partitioned and copied. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionUpperBound | The maximum value of the partition column for partition range splitting. This value is used to decide the partition stride, not for filtering the rows in table. All rows in the table or query result will be partitioned and copied. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### AmazonRedshiftSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'AmazonRedshiftSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | Database query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |
| redshiftUnloadSettings | The Amazon S3 settings needed for the interim Amazon S3 when copying from Amazon Redshift with unload. With this, data from Amazon Redshift source will be unloaded into S3 first and then copied into the targeted sink from the interim S3. | RedshiftUnloadSettings |


### RedshiftUnloadSettings

| Name | Description | Value |
|-|-|-|
| bucketName | The bucket of the interim Amazon S3 which will be used to store the unloaded data from Amazon Redshift source. The bucket must be in the same region as the Amazon Redshift source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| s3LinkedServiceName | The name of the Amazon S3 linked service which will be used for the unload operation when copying from the Amazon Redshift source. | LinkedServiceReference(required) |


### AvroSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'AvroSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| storeSettings | Avro store settings. | StoreReadSettings |


### StoreReadSettings

| Name | Description | Value |
|-|-|-|
| disableMetricsCollection | If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| maxConcurrentConnections | The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |
| type | Set the object type | AmazonS3CompatibleReadSettingsAmazonS3ReadSettingsAzureBlobFSReadSettingsAzureBlobStorageReadSettingsAzureDataLakeStoreReadSettingsAzureFileStorageReadSettingsFileServerReadSettingsFtpReadSettingsGoogleCloudStorageReadSettingsHdfsReadSettingsHttpReadSettingsOracleCloudStorageReadSettingsSftpReadSettings(required) |


### AmazonS3CompatibleReadSettings

| Name | Description | Value |
|-|-|-|
| type | The read setting type. | 'AmazonS3CompatibleReadSettings' (required) |
| deleteFilesAfterCompletion | Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| enablePartitionDiscovery | Indicates whether to enable partition discovery. | bool |
| fileListPath | Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| modifiedDatetimeEnd | The end of file's modified datetime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| modifiedDatetimeStart | The start of file's modified datetime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionRootPath | Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| prefix | The prefix filter for the S3 Compatible object name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| recursive | If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| wildcardFileName | Amazon S3 Compatible wildcardFileName. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| wildcardFolderPath | Amazon S3 Compatible wildcardFolderPath. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### AmazonS3ReadSettings

| Name | Description | Value |
|-|-|-|
| type | The read setting type. | 'AmazonS3ReadSettings' (required) |
| deleteFilesAfterCompletion | Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| enablePartitionDiscovery | Indicates whether to enable partition discovery. | bool |
| fileListPath | Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| modifiedDatetimeEnd | The end of file's modified datetime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| modifiedDatetimeStart | The start of file's modified datetime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionRootPath | Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| prefix | The prefix filter for the S3 object name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| recursive | If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| wildcardFileName | AmazonS3 wildcardFileName. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| wildcardFolderPath | AmazonS3 wildcardFolderPath. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### AzureBlobFSReadSettings

| Name | Description | Value |
|-|-|-|
| type | The read setting type. | 'AzureBlobFSReadSettings' (required) |
| deleteFilesAfterCompletion | Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| enablePartitionDiscovery | Indicates whether to enable partition discovery. | bool |
| fileListPath | Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| modifiedDatetimeEnd | The end of file's modified datetime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| modifiedDatetimeStart | The start of file's modified datetime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionRootPath | Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| recursive | If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| wildcardFileName | Azure blobFS wildcardFileName. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| wildcardFolderPath | Azure blobFS wildcardFolderPath. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### AzureBlobStorageReadSettings

| Name | Description | Value |
|-|-|-|
| type | The read setting type. | 'AzureBlobStorageReadSettings' (required) |
| deleteFilesAfterCompletion | Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| enablePartitionDiscovery | Indicates whether to enable partition discovery. | bool |
| fileListPath | Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| modifiedDatetimeEnd | The end of file's modified datetime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| modifiedDatetimeStart | The start of file's modified datetime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionRootPath | Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| prefix | The prefix filter for the Azure Blob name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| recursive | If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| wildcardFileName | Azure blob wildcardFileName. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| wildcardFolderPath | Azure blob wildcardFolderPath. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### AzureDataLakeStoreReadSettings

| Name | Description | Value |
|-|-|-|
| type | The read setting type. | 'AzureDataLakeStoreReadSettings' (required) |
| deleteFilesAfterCompletion | Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| enablePartitionDiscovery | Indicates whether to enable partition discovery. | bool |
| fileListPath | Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| listAfter | Lists files after the value (exclusive) based on file/folder namesâ lexicographical order. Applies under the folderPath in data set, and filter files/sub-folders under the folderPath. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| listBefore | Lists files before the value (inclusive) based on file/folder namesâ lexicographical order. Applies under the folderPath in data set, and filter files/sub-folders under the folderPath. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| modifiedDatetimeEnd | The end of file's modified datetime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| modifiedDatetimeStart | The start of file's modified datetime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionRootPath | Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| recursive | If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| wildcardFileName | ADLS wildcardFileName. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| wildcardFolderPath | ADLS wildcardFolderPath. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### AzureFileStorageReadSettings

| Name | Description | Value |
|-|-|-|
| type | The read setting type. | 'AzureFileStorageReadSettings' (required) |
| deleteFilesAfterCompletion | Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| enablePartitionDiscovery | Indicates whether to enable partition discovery. | bool |
| fileListPath | Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| modifiedDatetimeEnd | The end of file's modified datetime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| modifiedDatetimeStart | The start of file's modified datetime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionRootPath | Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| prefix | The prefix filter for the Azure File name starting from root path. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| recursive | If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| wildcardFileName | Azure File Storage wildcardFileName. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| wildcardFolderPath | Azure File Storage wildcardFolderPath. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### FileServerReadSettings

| Name | Description | Value |
|-|-|-|
| type | The read setting type. | 'FileServerReadSettings' (required) |
| deleteFilesAfterCompletion | Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| enablePartitionDiscovery | Indicates whether to enable partition discovery. | bool |
| fileFilter | Specify a filter to be used to select a subset of files in the folderPath rather than all files. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| fileListPath | Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| modifiedDatetimeEnd | The end of file's modified datetime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| modifiedDatetimeStart | The start of file's modified datetime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionRootPath | Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| recursive | If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| wildcardFileName | FileServer wildcardFileName. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| wildcardFolderPath | FileServer wildcardFolderPath. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### FtpReadSettings

| Name | Description | Value |
|-|-|-|
| type | The read setting type. | 'FtpReadSettings' (required) |
| deleteFilesAfterCompletion | Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| disableChunking | If true, disable parallel reading within each file. Default is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| enablePartitionDiscovery | Indicates whether to enable partition discovery. | bool |
| fileListPath | Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionRootPath | Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| recursive | If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| useBinaryTransfer | Specify whether to use binary transfer mode for FTP stores. | bool |
| wildcardFileName | Ftp wildcardFileName. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| wildcardFolderPath | Ftp wildcardFolderPath. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### GoogleCloudStorageReadSettings

| Name | Description | Value |
|-|-|-|
| type | The read setting type. | 'GoogleCloudStorageReadSettings' (required) |
| deleteFilesAfterCompletion | Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| enablePartitionDiscovery | Indicates whether to enable partition discovery. | bool |
| fileListPath | Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| modifiedDatetimeEnd | The end of file's modified datetime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| modifiedDatetimeStart | The start of file's modified datetime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionRootPath | Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| prefix | The prefix filter for the Google Cloud Storage object name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| recursive | If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| wildcardFileName | Google Cloud Storage wildcardFileName. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| wildcardFolderPath | Google Cloud Storage wildcardFolderPath. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### HdfsReadSettings

| Name | Description | Value |
|-|-|-|
| type | The read setting type. | 'HdfsReadSettings' (required) |
| deleteFilesAfterCompletion | Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| distcpSettings | Specifies Distcp-related settings. | DistcpSettings |
| enablePartitionDiscovery | Indicates whether to enable partition discovery. | bool |
| fileListPath | Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| modifiedDatetimeEnd | The end of file's modified datetime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| modifiedDatetimeStart | The start of file's modified datetime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionRootPath | Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| recursive | If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| wildcardFileName | HDFS wildcardFileName. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| wildcardFolderPath | HDFS wildcardFolderPath. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### DistcpSettings

| Name | Description | Value |
|-|-|-|
| distcpOptions | Specifies the Distcp options. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| resourceManagerEndpoint | Specifies the Yarn ResourceManager endpoint. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| tempScriptPath | Specifies an existing folder path which will be used to store temp Distcp command script. The script file is generated by ADF and will be removed after Copy job finished. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |


### HttpReadSettings

| Name | Description | Value |
|-|-|-|
| type | The read setting type. | 'HttpReadSettings' (required) |
| additionalHeaders | The additional HTTP headers in the request to the RESTful API. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| enablePartitionDiscovery | Indicates whether to enable partition discovery. | bool |
| partitionRootPath | Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| requestBody | The HTTP request body to the RESTful API if requestMethod is POST. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| requestMethod | The HTTP method used to call the RESTful API. The default is GET. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| requestTimeout | Specifies the timeout for a HTTP client to get HTTP response from HTTP server. | For Bicep, you can use theany()function. |


### OracleCloudStorageReadSettings

| Name | Description | Value |
|-|-|-|
| type | The read setting type. | 'OracleCloudStorageReadSettings' (required) |
| deleteFilesAfterCompletion | Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| enablePartitionDiscovery | Indicates whether to enable partition discovery. | bool |
| fileListPath | Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| modifiedDatetimeEnd | The end of file's modified datetime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| modifiedDatetimeStart | The start of file's modified datetime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionRootPath | Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| prefix | The prefix filter for the Oracle Cloud Storage object name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| recursive | If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| wildcardFileName | Oracle Cloud Storage wildcardFileName. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| wildcardFolderPath | Oracle Cloud Storage wildcardFolderPath. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### SftpReadSettings

| Name | Description | Value |
|-|-|-|
| type | The read setting type. | 'SftpReadSettings' (required) |
| deleteFilesAfterCompletion | Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| disableChunking | If true, disable parallel reading within each file. Default is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| enablePartitionDiscovery | Indicates whether to enable partition discovery. | bool |
| fileListPath | Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| modifiedDatetimeEnd | The end of file's modified datetime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| modifiedDatetimeStart | The start of file's modified datetime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionRootPath | Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| recursive | If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| wildcardFileName | Sftp wildcardFileName. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| wildcardFolderPath | Sftp wildcardFolderPath. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### AzureBlobFSSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'AzureBlobFSSource' (required) |
| recursive | If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| skipHeaderLineCount | Number of header lines to skip from each blob. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |
| treatEmptyAsNull | Treat empty as null. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |


### AzureDatabricksDeltaLakeSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'AzureDatabricksDeltaLakeSource' (required) |
| exportSettings | Azure Databricks Delta Lake export settings. | AzureDatabricksDeltaLakeExportCommand |
| query | Azure Databricks Delta Lake Sql query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### AzureDatabricksDeltaLakeExportCommand

| Name | Description | Value |
|-|-|-|
| dateFormat | Specify the date format for the csv in Azure Databricks Delta Lake Copy. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| timestampFormat | Specify the timestamp format for the csv in Azure Databricks Delta Lake Copy. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| type | The export setting type. | string (required) |


### AzureDataExplorerSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'AzureDataExplorerSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| noTruncation | The name of the Boolean option that controls whether truncation is applied to result-sets that go beyond a certain row-count limit. | For Bicep, you can use theany()function. |
| query | Database query. Should be a Kusto Query Language (KQL) query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).. | For Bicep, you can use theany()function. |


### AzureDataLakeStoreSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'AzureDataLakeStoreSource' (required) |
| recursive | If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |


### AzureMariaDBSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'AzureMariaDBSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### AzureMySqlSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'AzureMySqlSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | Database query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### AzurePostgreSqlSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'AzurePostgreSqlSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### AzureSqlSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'AzureSqlSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| partitionOption | The partition mechanism that will be used for Sql read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "DynamicRange". | For Bicep, you can use theany()function. |
| partitionSettings | The settings that will be leveraged for Sql source partitioning. | SqlPartitionSettings |
| produceAdditionalTypes | Which additional types to produce. | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |
| sqlReaderQuery | SQL reader query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| sqlReaderStoredProcedureName | Name of the stored procedure for a SQL Database source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| storedProcedureParameters | Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}". | For Bicep, you can use theany()function. |


### AzureTableSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'AzureTableSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| azureTableSourceIgnoreTableNotFound | Azure Table source ignore table not found. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| azureTableSourceQuery | Azure Table source query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### BinarySource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'BinarySource' (required) |
| formatSettings | Binary format settings. | BinaryReadSettings |
| storeSettings | Binary store settings. | StoreReadSettings |


### BinaryReadSettings

| Name | Description | Value |
|-|-|-|
| compressionProperties | Compression settings. | CompressionReadSettings |
| type | The read setting type. | string (required) |


### CompressionReadSettings

| Name | Description | Value |
|-|-|-|
| type | Set the object type | TarGZipReadSettingsTarReadSettingsZipDeflateReadSettings(required) |


### TarGZipReadSettings

| Name | Description | Value |
|-|-|-|
| type | The Compression setting type. | 'TarGZipReadSettings' (required) |
| preserveCompressionFileNameAsFolder | Preserve the compression file name as folder path. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |


### TarReadSettings

| Name | Description | Value |
|-|-|-|
| type | The Compression setting type. | 'TarReadSettings' (required) |
| preserveCompressionFileNameAsFolder | Preserve the compression file name as folder path. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |


### ZipDeflateReadSettings

| Name | Description | Value |
|-|-|-|
| type | The Compression setting type. | 'ZipDeflateReadSettings' (required) |
| preserveZipFileNameAsFolder | Preserve the zip file name as folder path. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |


### BlobSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'BlobSource' (required) |
| recursive | If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| skipHeaderLineCount | Number of header lines to skip from each blob. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |
| treatEmptyAsNull | Treat empty as null. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |


### CassandraSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'CassandraSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| consistencyLevel | The consistency level specifies how many Cassandra servers must respond to a read request before returning data to the client application. Cassandra checks the specified number of Cassandra servers for data to satisfy the read request. Must be one of cassandraSourceReadConsistencyLevels. The default value is 'ONE'. It is case-insensitive. | 'ALL''EACH_QUORUM''LOCAL_ONE''LOCAL_QUORUM''LOCAL_SERIAL''ONE''QUORUM''SERIAL''THREE''TWO' |
| query | Database query. Should be a SQL-92 query expression or Cassandra Query Language (CQL) command. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### CommonDataServiceForAppsSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'CommonDataServiceForAppsSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | FetchXML is a proprietary query language that is used in Microsoft Common Data Service for Apps (online & on-premises). Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### ConcurSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'ConcurSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### CosmosDbMongoDbApiSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'CosmosDbMongoDbApiSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| batchSize | Specifies the number of documents to return in each batch of the response from MongoDB instance. In most cases, modifying the batch size will not affect the user or the application. This property's main purpose is to avoid hit the limitation of response size. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |
| cursorMethods | Cursor methods for Mongodb query. | MongoDbCursorMethodsProperties |
| filter | Specifies selection filter using query operators. To return all documents in a collection, omit this parameter or pass an empty document ({}). Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### MongoDbCursorMethodsProperties

| Name | Description | Value |
|-|-|-|
| limit | Specifies the maximum number of documents the server returns. limit() is analogous to the LIMIT statement in a SQL database. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |
| project | Specifies the fields to return in the documents that match the query filter. To return all fields in the matching documents, omit this parameter. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| skip | Specifies the how many documents skipped and where MongoDB begins returning results. This approach may be useful in implementing paginated results. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |
| sort | Specifies the order in which the query returns matching documents. Type: string (or Expression with resultType string). Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### CosmosDbSqlApiSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'CosmosDbSqlApiSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| detectDatetime | Whether detect primitive values as datetime values. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| pageSize | Page size of the result. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |
| preferredRegions | Preferred regions. Type: array of strings (or Expression with resultType array of strings). | For Bicep, you can use theany()function. |
| query | SQL API query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### CouchbaseSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'CouchbaseSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### Db2Source

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'Db2Source' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | Database query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### DelimitedTextSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'DelimitedTextSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| formatSettings | DelimitedText format settings. | DelimitedTextReadSettings |
| storeSettings | DelimitedText store settings. | StoreReadSettings |


### DelimitedTextReadSettings

| Name | Description | Value |
|-|-|-|
| compressionProperties | Compression settings. | CompressionReadSettings |
| skipLineCount | Indicates the number of non-empty rows to skip when reading data from input files. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |
| type | The read setting type. | string (required) |


### DocumentDbCollectionSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'DocumentDbCollectionSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| nestingSeparator | Nested properties separator. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| query | Documents query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### DrillSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'DrillSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### DynamicsAXSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'DynamicsAXSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| httpRequestTimeout | The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:05:00. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### DynamicsCrmSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'DynamicsCrmSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | FetchXML is a proprietary query language that is used in Microsoft Dynamics CRM (online & on-premises). Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### DynamicsSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'DynamicsSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | FetchXML is a proprietary query language that is used in Microsoft Dynamics (online & on-premises). Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### EloquaSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'EloquaSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### ExcelSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'ExcelSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| storeSettings | Excel store settings. | StoreReadSettings |


### FileSystemSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'FileSystemSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| recursive | If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |


### GoogleAdWordsSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'GoogleAdWordsSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### GoogleBigQuerySource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'GoogleBigQuerySource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### GreenplumSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'GreenplumSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### HBaseSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'HBaseSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### HdfsSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'HdfsSource' (required) |
| distcpSettings | Specifies Distcp-related settings. | DistcpSettings |
| recursive | If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |


### HiveSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'HiveSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### HttpSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'HttpSource' (required) |
| httpRequestTimeout | Specifies the timeout for a HTTP client to get HTTP response from HTTP server. The default value is equivalent to System.Net.HttpWebRequest.Timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### HubspotSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'HubspotSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### ImpalaSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'ImpalaSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### InformixSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'InformixSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | Database query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### JiraSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'JiraSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### JsonSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'JsonSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| formatSettings | Json format settings. | JsonReadSettings |
| storeSettings | Json store settings. | StoreReadSettings |


### JsonReadSettings

| Name | Description | Value |
|-|-|-|
| compressionProperties | Compression settings. | CompressionReadSettings |
| type | The read setting type. | string (required) |


### MagentoSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'MagentoSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### MariaDBSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'MariaDBSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### MarketoSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'MarketoSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### MicrosoftAccessSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'MicrosoftAccessSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | Database query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### MongoDbAtlasSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'MongoDbAtlasSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| batchSize | Specifies the number of documents to return in each batch of the response from MongoDB Atlas instance. In most cases, modifying the batch size will not affect the user or the application. This property's main purpose is to avoid hit the limitation of response size. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |
| cursorMethods | Cursor methods for Mongodb query | MongoDbCursorMethodsProperties |
| filter | Specifies selection filter using query operators. To return all documents in a collection, omit this parameter or pass an empty document ({}). Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### MongoDbSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'MongoDbSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | Database query. Should be a SQL-92 query expression. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### MongoDbV2Source

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'MongoDbV2Source' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| batchSize | Specifies the number of documents to return in each batch of the response from MongoDB instance. In most cases, modifying the batch size will not affect the user or the application. This property's main purpose is to avoid hit the limitation of response size. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |
| cursorMethods | Cursor methods for Mongodb query | MongoDbCursorMethodsProperties |
| filter | Specifies selection filter using query operators. To return all documents in a collection, omit this parameter or pass an empty document ({}). Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### MySqlSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'MySqlSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | Database query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### NetezzaSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'NetezzaSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| partitionOption | The partition mechanism that will be used for Netezza read in parallel. Possible values include: "None", "DataSlice", "DynamicRange". | For Bicep, you can use theany()function. |
| partitionSettings | The settings that will be leveraged for Netezza source partitioning. | NetezzaPartitionSettings |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### NetezzaPartitionSettings

| Name | Description | Value |
|-|-|-|
| partitionColumnName | The name of the column in integer type that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionLowerBound | The minimum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionUpperBound | The maximum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### ODataSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'ODataSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| httpRequestTimeout | The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:05:00. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |
| query | OData query. For example, "$top=1". Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### OdbcSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'OdbcSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | Database query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### Office365Source

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'Office365Source' (required) |
| allowedGroups | The groups containing all the users. Type: array of strings (or Expression with resultType array of strings). | For Bicep, you can use theany()function. |
| dateFilterColumn | The Column to apply the {paramref name="StartTime"/} and {paramref name="EndTime"/}. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| endTime | End time of the requested range for this dataset. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| outputColumns | The columns to be read out from the Office 365 table. Type: array of objects (or Expression with resultType array of objects). Example: [ { "name": "Id" }, { "name": "CreatedDateTime" } ] | For Bicep, you can use theany()function. |
| startTime | Start time of the requested range for this dataset. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| userScopeFilterUri | The user scope uri. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### OracleServiceCloudSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'OracleServiceCloudSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### OracleSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'OracleSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| oracleReaderQuery | Oracle reader query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionOption | The partition mechanism that will be used for Oracle read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "DynamicRange". | For Bicep, you can use theany()function. |
| partitionSettings | The settings that will be leveraged for Oracle source partitioning. | OraclePartitionSettings |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### OraclePartitionSettings

| Name | Description | Value |
|-|-|-|
| partitionColumnName | The name of the column in integer type that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionLowerBound | The minimum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionNames | Names of the physical partitions of Oracle table. | For Bicep, you can use theany()function. |
| partitionUpperBound | The maximum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### OrcSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'OrcSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| storeSettings | ORC store settings. | StoreReadSettings |


### ParquetSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'ParquetSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| storeSettings | Parquet store settings. | StoreReadSettings |


### PaypalSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'PaypalSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### PhoenixSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'PhoenixSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### PostgreSqlSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'PostgreSqlSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | Database query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### PrestoSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'PrestoSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### QuickBooksSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'QuickBooksSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### RelationalSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'RelationalSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | Database query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### ResponsysSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'ResponsysSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### RestSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'RestSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| additionalHeaders | The additional HTTP headers in the request to the RESTful API. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| httpRequestTimeout | The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:01:40. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |
| paginationRules | The pagination rules to compose next page requests. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| requestBody | The HTTP request body to the RESTful API if requestMethod is POST. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| requestInterval | The time to await before sending next page request. | For Bicep, you can use theany()function. |
| requestMethod | The HTTP method used to call the RESTful API. The default is GET. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### SalesforceMarketingCloudSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'SalesforceMarketingCloudSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### SalesforceServiceCloudSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'SalesforceServiceCloudSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | Database query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| readBehavior | The read behavior for the operation. Default is Query. | 'Query''QueryAll' |


### SalesforceSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'SalesforceSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | Database query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |
| readBehavior | The read behavior for the operation. Default is Query. | 'Query''QueryAll' |


### SapBwSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'SapBwSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | MDX query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### SapCloudForCustomerSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'SapCloudForCustomerSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| httpRequestTimeout | The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:05:00. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |
| query | SAP Cloud for Customer OData query. For example, "$top=1". Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### SapEccSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'SapEccSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| httpRequestTimeout | The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:05:00. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |
| query | SAP ECC OData query. For example, "$top=1". Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### SapHanaSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'SapHanaSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| packetSize | The packet size of data read from SAP HANA. Type: integer(or Expression with resultType integer). | For Bicep, you can use theany()function. |
| partitionOption | The partition mechanism that will be used for SAP HANA read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "SapHanaDynamicRange". | For Bicep, you can use theany()function. |
| partitionSettings | The settings that will be leveraged for SAP HANA source partitioning. | SapHanaPartitionSettings |
| query | SAP HANA Sql query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### SapHanaPartitionSettings

| Name | Description | Value |
|-|-|-|
| partitionColumnName | The name of the column that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### SapOdpSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'SapOdpSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| extractionMode | The extraction mode. Allowed value include: Full, Delta and Recovery. The default value is Full. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| projection | Specifies the columns to be selected from source data. Type: array of objects(projection) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |
| selection | Specifies the selection conditions from source data. Type: array of objects(selection) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| subscriberProcess | The subscriber process to manage the delta process. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### SapOpenHubSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'SapOpenHubSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| baseRequestId | The ID of request for delta loading. Once it is set, only data with requestId larger than the value of this property will be retrieved. The default value is 0. Type: integer (or Expression with resultType integer ). | For Bicep, you can use theany()function. |
| customRfcReadTableFunctionModule | Specifies the custom RFC function module that will be used to read data from SAP Table. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| excludeLastRequest | Whether to exclude the records of the last request. The default value is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |
| sapDataColumnDelimiter | The single character that will be used as delimiter passed to SAP RFC as well as splitting the output data retrieved. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### SapTableSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'SapTableSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| batchSize | Specifies the maximum number of rows that will be retrieved at a time when retrieving data from SAP Table. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |
| customRfcReadTableFunctionModule | Specifies the custom RFC function module that will be used to read data from SAP Table. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionOption | The partition mechanism that will be used for SAP table read in parallel. Possible values include: "None", "PartitionOnInt", "PartitionOnCalendarYear", "PartitionOnCalendarMonth", "PartitionOnCalendarDate", "PartitionOnTime". | For Bicep, you can use theany()function. |
| partitionSettings | The settings that will be leveraged for SAP table source partitioning. | SapTablePartitionSettings |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |
| rfcTableFields | The fields of the SAP table that will be retrieved. For example, column0, column1. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| rfcTableOptions | The options for the filtering of the SAP Table. For example, COLUMN0 EQ SOME VALUE. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| rowCount | The number of rows to be retrieved. Type: integer(or Expression with resultType integer). | For Bicep, you can use theany()function. |
| rowSkips | The number of rows that will be skipped. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |
| sapDataColumnDelimiter | The single character that will be used as delimiter passed to SAP RFC as well as splitting the output data retrieved. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### SapTablePartitionSettings

| Name | Description | Value |
|-|-|-|
| maxPartitionsNumber | The maximum value of partitions the table will be split into. Type: integer (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionColumnName | The name of the column that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionLowerBound | The minimum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionUpperBound | The maximum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### ServiceNowSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'ServiceNowSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### SharePointOnlineListSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'SharePointOnlineListSource' (required) |
| httpRequestTimeout | The wait time to get a response from SharePoint Online. Default value is 5 minutes (00:05:00). Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |
| query | The OData query to filter the data in SharePoint Online list. For example, "$top=1". Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### ShopifySource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'ShopifySource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### SnowflakeSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'SnowflakeSource' (required) |
| exportSettings | Snowflake export settings. | SnowflakeExportCopyCommand(required) |
| query | Snowflake Sql query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### SnowflakeExportCopyCommand

| Name | Description | Value |
|-|-|-|
| additionalCopyOptions | Additional copy options directly passed to snowflake Copy Command. Type: key value pairs (value should be string type) (or Expression with resultType object). Example: "additionalCopyOptions": { "DATE_FORMAT": "MM/DD/YYYY", "TIME_FORMAT": "'HH24:MI:SS.FF'" } | object |
| additionalFormatOptions | Additional format options directly passed to snowflake Copy Command. Type: key value pairs (value should be string type) (or Expression with resultType object). Example: "additionalFormatOptions": { "OVERWRITE": "TRUE", "MAX_FILE_SIZE": "'FALSE'" } | object |
| type | The export setting type. | string (required) |


### SparkSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'SparkSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### SqlDWSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'SqlDWSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| partitionOption | The partition mechanism that will be used for Sql read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "DynamicRange". | For Bicep, you can use theany()function. |
| partitionSettings | The settings that will be leveraged for Sql source partitioning. | SqlPartitionSettings |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |
| sqlReaderQuery | SQL Data Warehouse reader query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| sqlReaderStoredProcedureName | Name of the stored procedure for a SQL Data Warehouse source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| storedProcedureParameters | Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}". Type: object (or Expression with resultType object), itemType: StoredProcedureParameter. | For Bicep, you can use theany()function. |


### SqlMISource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'SqlMISource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| partitionOption | The partition mechanism that will be used for Sql read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "DynamicRange". | For Bicep, you can use theany()function. |
| partitionSettings | The settings that will be leveraged for Sql source partitioning. | SqlPartitionSettings |
| produceAdditionalTypes | Which additional types to produce. | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |
| sqlReaderQuery | SQL reader query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| sqlReaderStoredProcedureName | Name of the stored procedure for a Azure SQL Managed Instance source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| storedProcedureParameters | Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}". | For Bicep, you can use theany()function. |


### SqlServerSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'SqlServerSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| partitionOption | The partition mechanism that will be used for Sql read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "DynamicRange". | For Bicep, you can use theany()function. |
| partitionSettings | The settings that will be leveraged for Sql source partitioning. | SqlPartitionSettings |
| produceAdditionalTypes | Which additional types to produce. | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |
| sqlReaderQuery | SQL reader query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| sqlReaderStoredProcedureName | Name of the stored procedure for a SQL Database source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| storedProcedureParameters | Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}". | For Bicep, you can use theany()function. |


### SqlSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'SqlSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| isolationLevel | Specifies the transaction locking behavior for the SQL source. Allowed values: ReadCommitted/ReadUncommitted/RepeatableRead/Serializable/Snapshot. The default value is ReadCommitted. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionOption | The partition mechanism that will be used for Sql read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "DynamicRange". | For Bicep, you can use theany()function. |
| partitionSettings | The settings that will be leveraged for Sql source partitioning. | SqlPartitionSettings |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |
| sqlReaderQuery | SQL reader query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| sqlReaderStoredProcedureName | Name of the stored procedure for a SQL Database source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| storedProcedureParameters | Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}". | For Bicep, you can use theany()function. |


### SquareSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'SquareSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### SybaseSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'SybaseSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | Database query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### TeradataSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'TeradataSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| partitionOption | The partition mechanism that will be used for teradata read in parallel. Possible values include: "None", "Hash", "DynamicRange". | For Bicep, you can use theany()function. |
| partitionSettings | The settings that will be leveraged for teradata source partitioning. | TeradataPartitionSettings |
| query | Teradata query. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### TeradataPartitionSettings

| Name | Description | Value |
|-|-|-|
| partitionColumnName | The name of the column that will be used for proceeding range or hash partitioning. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionLowerBound | The minimum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| partitionUpperBound | The maximum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### VerticaSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'VerticaSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### WebSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'WebSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |


### XeroSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'XeroSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### XmlSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'XmlSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| formatSettings | Xml format settings. | XmlReadSettings |
| storeSettings | Xml store settings. | StoreReadSettings |


### XmlReadSettings

| Name | Description | Value |
|-|-|-|
| compressionProperties | Compression settings. | CompressionReadSettings |
| detectDataType | Indicates whether type detection is enabled when reading the xml files. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| namespacePrefixes | Namespace uri to prefix mappings to override the prefixes in column names when namespace is enabled, if no prefix is defined for a namespace uri, the prefix of xml element/attribute name in the xml data file will be used. Example: "{"http://www.example.com/xml":"prefix"}" Type: object (or Expression with resultType object). | For Bicep, you can use theany()function. |
| namespaces | Indicates whether namespace is enabled when reading the xml files. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| type | The read setting type. | string (required) |
| validationMode | Indicates what validation method is used when reading the xml files. Allowed values: 'none', 'xsd', or 'dtd'. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### ZohoSource

| Name | Description | Value |
|-|-|-|
| type | Copy source type. | 'ZohoSource' (required) |
| additionalColumns | Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). | For Bicep, you can use theany()function. |
| query | A query to retrieve data from source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| queryTimeout | Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### StagingSettings

| Name | Description | Value |
|-|-|-|
| enableCompression | Specifies whether to use compression when copying data via an interim staging. Default value is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| linkedServiceName | Staging linked service reference. | LinkedServiceReference(required) |
| path | The path to storage for storing the interim data. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### CustomActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'Custom' (required) |
| linkedServiceName | Linked service reference. | LinkedServiceReference |
| policy | Activity policy. | ActivityPolicy |
| typeProperties | Custom activity properties. | CustomActivityTypeProperties(required) |


### CustomActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| autoUserSpecification | Elevation level and scope for the user, default is nonadmin task. Type: string (or Expression with resultType double). | For Bicep, you can use theany()function. |
| command | Command for custom activity Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| extendedProperties | User defined property bag. There is no restriction on the keys or values that can be used. The user specified custom activity has the full responsibility to consume and interpret the content defined. | object |
| folderPath | Folder path for resource files Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| referenceObjects | Reference objects | CustomActivityReferenceObject |
| resourceLinkedService | Resource linked service reference. | LinkedServiceReference |
| retentionTimeInDays | The retention time for the files submitted for custom activity. Type: double (or Expression with resultType double). | For Bicep, you can use theany()function. |


### CustomActivityReferenceObject

| Name | Description | Value |
|-|-|-|
| datasets | Dataset references. | DatasetReference[] |
| linkedServices | Linked service references. | LinkedServiceReference[] |


### DatabricksNotebookActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'DatabricksNotebook' (required) |
| linkedServiceName | Linked service reference. | LinkedServiceReference |
| policy | Activity policy. | ActivityPolicy |
| typeProperties | Databricks Notebook activity properties. | DatabricksNotebookActivityTypeProperties(required) |


### DatabricksNotebookActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| baseParameters | Base parameters to be used for each run of this job.If the notebook takes a parameter that is not specified, the default value from the notebook will be used. | object |
| libraries | A list of libraries to be installed on the cluster that will execute the job. | object |
| notebookPath | The absolute path of the notebook to be run in the Databricks Workspace. This path must begin with a slash. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |


### DatabricksSparkJarActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'DatabricksSparkJar' (required) |
| linkedServiceName | Linked service reference. | LinkedServiceReference |
| policy | Activity policy. | ActivityPolicy |
| typeProperties | Databricks SparkJar activity properties. | DatabricksSparkJarActivityTypeProperties(required) |


### DatabricksSparkJarActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| libraries | A list of libraries to be installed on the cluster that will execute the job. | object |
| mainClassName | The full name of the class containing the main method to be executed. This class must be contained in a JAR provided as a library. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| parameters | Parameters that will be passed to the main method. | any[] |


### DatabricksSparkPythonActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'DatabricksSparkPython' (required) |
| linkedServiceName | Linked service reference. | LinkedServiceReference |
| policy | Activity policy. | ActivityPolicy |
| typeProperties | Databricks SparkPython activity properties. | DatabricksSparkPythonActivityTypeProperties(required) |


### DatabricksSparkPythonActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| libraries | A list of libraries to be installed on the cluster that will execute the job. | object |
| parameters | Command line parameters that will be passed to the Python file. | any[] |
| pythonFile | The URI of the Python file to be executed. DBFS paths are supported. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |


### DataLakeAnalyticsUsqlActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'DataLakeAnalyticsU-SQL' (required) |
| linkedServiceName | Linked service reference. | LinkedServiceReference |
| policy | Activity policy. | ActivityPolicy |
| typeProperties | Data Lake Analytics U-SQL activity properties. | DataLakeAnalyticsUsqlActivityTypeProperties(required) |


### DataLakeAnalyticsUsqlActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| compilationMode | Compilation mode of U-SQL. Must be one of these values : Semantic, Full and SingleBox. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| degreeOfParallelism | The maximum number of nodes simultaneously used to run the job. Default value is 1. Type: integer (or Expression with resultType integer), minimum: 1. | For Bicep, you can use theany()function. |
| parameters | Parameters for U-SQL job request. | object |
| priority | Determines which jobs out of all that are queued should be selected to run first. The lower the number, the higher the priority. Default value is 1000. Type: integer (or Expression with resultType integer), minimum: 1. | For Bicep, you can use theany()function. |
| runtimeVersion | Runtime version of the U-SQL engine to use. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| scriptLinkedService | Script linked service reference. | LinkedServiceReference(required) |
| scriptPath | Case-sensitive path to folder that contains the U-SQL script. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |


### DeleteActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'Delete' (required) |
| linkedServiceName | Linked service reference. | LinkedServiceReference |
| policy | Activity policy. | ActivityPolicy |
| typeProperties | Delete activity properties. | DeleteActivityTypeProperties(required) |


### DeleteActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| dataset | Delete activity dataset reference. | DatasetReference(required) |
| enableLogging | Whether to record detailed logs of delete-activity execution. Default value is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| logStorageSettings | Log storage settings customer need to provide when enableLogging is true. | LogStorageSettings |
| maxConcurrentConnections | The max concurrent connections to connect data source at the same time. | int |
| recursive | If true, files or sub-folders under current folder path will be deleted recursively. Default is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| storeSettings | Delete activity store settings. | StoreReadSettings |


### ExecuteDataFlowActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'ExecuteDataFlow' (required) |
| linkedServiceName | Linked service reference. | LinkedServiceReference |
| policy | Activity policy. | ActivityPolicy |
| typeProperties | Execute data flow activity properties. | ExecuteDataFlowActivityTypeProperties(required) |


### ExecuteDataFlowActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| compute | Compute properties for data flow activity. | ExecuteDataFlowActivityTypePropertiesCompute |
| continueOnError | Continue on error setting used for data flow execution. Enables processing to continue if a sink fails. Type: boolean (or Expression with resultType boolean) | For Bicep, you can use theany()function. |
| dataFlow | Data flow reference. | DataFlowReference(required) |
| integrationRuntime | The integration runtime reference. | IntegrationRuntimeReference |
| runConcurrently | Concurrent run setting used for data flow execution. Allows sinks with the same save order to be processed concurrently. Type: boolean (or Expression with resultType boolean) | For Bicep, you can use theany()function. |
| sourceStagingConcurrency | Specify number of parallel staging for sources applicable to the sink. Type: integer (or Expression with resultType integer) | For Bicep, you can use theany()function. |
| staging | Staging info for execute data flow activity. | DataFlowStagingInfo |
| traceLevel | Trace level setting used for data flow monitoring output. Supported values are: 'coarse', 'fine', and 'none'. Type: string (or Expression with resultType string) | For Bicep, you can use theany()function. |


### ExecuteDataFlowActivityTypePropertiesCompute

| Name | Description | Value |
|-|-|-|
| computeType | Compute type of the cluster which will execute data flow job. Possible values include: 'General', 'MemoryOptimized', 'ComputeOptimized'. Type: string (or Expression with resultType string) | For Bicep, you can use theany()function. |
| coreCount | Core count of the cluster which will execute data flow job. Supported values are: 8, 16, 32, 48, 80, 144 and 272. Type: integer (or Expression with resultType integer) | For Bicep, you can use theany()function. |


### DataFlowReference

| Name | Description | Value |
|-|-|-|
| datasetParameters | Reference data flow parameters from dataset. | For Bicep, you can use theany()function. |
| parameters | Data flow parameters | object |
| referenceName | Reference data flow name. | string (required) |
| type | Data flow reference type. | 'DataFlowReference' (required) |


### IntegrationRuntimeReference

| Name | Description | Value |
|-|-|-|
| parameters | Arguments for integration runtime. | object |
| referenceName | Reference integration runtime name. | string (required) |
| type | Type of integration runtime. | 'IntegrationRuntimeReference' (required) |


### DataFlowStagingInfo

| Name | Description | Value |
|-|-|-|
| folderPath | Folder path for staging blob. Type: string (or Expression with resultType string) | For Bicep, you can use theany()function. |
| linkedService | Staging linked service reference. | LinkedServiceReference |


### ExecutePipelineActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'ExecutePipeline' (required) |
| policy | Execute pipeline activity policy. | ExecutePipelineActivityPolicy |
| typeProperties | Execute pipeline activity properties. | ExecutePipelineActivityTypeProperties(required) |


### ExecutePipelineActivityPolicy

| Name | Description | Value |
|-|-|-|
| secureInput | When set to true, Input from activity is considered as secure and will not be logged to monitoring. | bool |


### ExecutePipelineActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| parameters | Pipeline parameters. | object |
| pipeline | Pipeline reference. | PipelineReference(required) |
| waitOnCompletion | Defines whether activity execution will wait for the dependent pipeline execution to finish. Default is false. | bool |


### PipelineReference

| Name | Description | Value |
|-|-|-|
| name | Reference name. | string |
| referenceName | Reference pipeline name. | string (required) |
| type | Pipeline reference type. | 'PipelineReference' (required) |


### ExecuteSsisPackageActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'ExecuteSSISPackage' (required) |
| linkedServiceName | Linked service reference. | LinkedServiceReference |
| policy | Activity policy. | ActivityPolicy |
| typeProperties | Execute SSIS package activity properties. | ExecuteSsisPackageActivityTypeProperties(required) |


### ExecuteSsisPackageActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| connectVia | The integration runtime reference. | IntegrationRuntimeReference(required) |
| environmentPath | The environment path to execute the SSIS package. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| executionCredential | The package execution credential. | SsisExecutionCredential |
| loggingLevel | The logging level of SSIS package execution. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| logLocation | SSIS package execution log location. | SsisLogLocation |
| packageConnectionManagers | The package level connection managers to execute the SSIS package. | object |
| packageLocation | SSIS package location. | SsisPackageLocation(required) |
| packageParameters | The package level parameters to execute the SSIS package. | object |
| projectConnectionManagers | The project level connection managers to execute the SSIS package. | object |
| projectParameters | The project level parameters to execute the SSIS package. | object |
| propertyOverrides | The property overrides to execute the SSIS package. | object |
| runtime | Specifies the runtime to execute SSIS package. The value should be "x86" or "x64". Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### SsisExecutionCredential

| Name | Description | Value |
|-|-|-|
| domain | Domain for windows authentication. | For Bicep, you can use theany()function.(required) |
| password | Password for windows authentication. | SecureString(required) |
| userName | UseName for windows authentication. | For Bicep, you can use theany()function.(required) |


### SecureString

| Name | Description | Value |
|-|-|-|
| type | Type of the secret. | string (required) |
| value | Value of secure string. | string (required) |


### SsisLogLocation

| Name | Description | Value |
|-|-|-|
| logPath | The SSIS package execution log path. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| type | The type of SSIS log location. | 'File' (required) |
| typeProperties | SSIS package execution log location properties. | SsisLogLocationTypeProperties(required) |


### SsisLogLocationTypeProperties

| Name | Description | Value |
|-|-|-|
| accessCredential | The package execution log access credential. | SsisAccessCredential |
| logRefreshInterval | Specifies the interval to refresh log. The default interval is 5 minutes. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### SsisAccessCredential

| Name | Description | Value |
|-|-|-|
| domain | Domain for windows authentication. | For Bicep, you can use theany()function.(required) |
| password | Password for windows authentication. | SecretBase(required) |
| userName | UseName for windows authentication. | For Bicep, you can use theany()function.(required) |


### SecretBase

| Name | Description | Value |
|-|-|-|
| type | Set the object type | AzureKeyVaultSecretSecureString(required) |


### AzureKeyVaultSecretReference

| Name | Description | Value |
|-|-|-|
| secretName | The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| secretVersion | The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| store | The Azure Key Vault linked service reference. | LinkedServiceReference(required) |
| type | Type of the secret. | string (required) |


### SsisPackageLocation

| Name | Description | Value |
|-|-|-|
| packagePath | The SSIS package path. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| type | The type of SSIS package location. | 'File''InlinePackage''PackageStore''SSISDB' |
| typeProperties | SSIS package location properties. | SsisPackageLocationTypeProperties |


### SsisPackageLocationTypeProperties

| Name | Description | Value |
|-|-|-|
| accessCredential | The package access credential. | SsisAccessCredential |
| childPackages | The embedded child package list. | SsisChildPackage[] |
| configurationAccessCredential | The configuration file access credential. | SsisAccessCredential |
| configurationPath | The configuration file of the package execution. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| packageContent | The embedded package content. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| packageLastModifiedDate | The embedded package last modified date. | string |
| packageName | The package name. | string |
| packagePassword | Password of the package. | SecretBase |


### SsisChildPackage

| Name | Description | Value |
|-|-|-|
| packageContent | Content for embedded child package. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| packageLastModifiedDate | Last modified date for embedded child package. | string |
| packageName | Name for embedded child package. | string |
| packagePath | Path for embedded child package. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |


### ExecuteWranglingDataflowActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'ExecuteWranglingDataflow' (required) |
| policy | Activity policy. | ActivityPolicy |
| typeProperties | Execute power query activity properties. | ExecutePowerQueryActivityTypeProperties(required) |


### ExecutePowerQueryActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| compute | Compute properties for data flow activity. | ExecuteDataFlowActivityTypePropertiesCompute |
| continueOnError | Continue on error setting used for data flow execution. Enables processing to continue if a sink fails. Type: boolean (or Expression with resultType boolean) | For Bicep, you can use theany()function. |
| dataFlow | Data flow reference. | DataFlowReference(required) |
| integrationRuntime | The integration runtime reference. | IntegrationRuntimeReference |
| queries | List of mapping for Power Query mashup query to sink dataset(s). | PowerQuerySinkMapping[] |
| runConcurrently | Concurrent run setting used for data flow execution. Allows sinks with the same save order to be processed concurrently. Type: boolean (or Expression with resultType boolean) | For Bicep, you can use theany()function. |
| sinks | (Deprecated. Please use Queries). List of Power Query activity sinks mapped to a queryName. | object |
| sourceStagingConcurrency | Specify number of parallel staging for sources applicable to the sink. Type: integer (or Expression with resultType integer) | For Bicep, you can use theany()function. |
| staging | Staging info for execute data flow activity. | DataFlowStagingInfo |
| traceLevel | Trace level setting used for data flow monitoring output. Supported values are: 'coarse', 'fine', and 'none'. Type: string (or Expression with resultType string) | For Bicep, you can use theany()function. |


### PowerQuerySinkMapping

| Name | Description | Value |
|-|-|-|
| dataflowSinks | List of sinks mapped to Power Query mashup query. | PowerQuerySink[] |
| queryName | Name of the query in Power Query mashup document. | string |


### PowerQuerySink

| Name | Description | Value |
|-|-|-|
| dataset | Dataset reference. | DatasetReference |
| description | Transformation description. | string |
| flowlet | Flowlet Reference | DataFlowReference |
| linkedService | Linked service reference. | LinkedServiceReference |
| name | Transformation name. | string (required) |
| rejectedDataLinkedService | Rejected data linked service reference. | LinkedServiceReference |
| schemaLinkedService | Schema linked service reference. | LinkedServiceReference |
| script | sink script. | string |


### FailActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'Fail' (required) |
| typeProperties | Fail activity properties. | FailActivityTypeProperties(required) |


### FailActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| errorCode | The error code that categorizes the error type of the Fail activity. It can be dynamic content that's evaluated to a non empty/blank string at runtime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| message | The error message that surfaced in the Fail activity. It can be dynamic content that's evaluated to a non empty/blank string at runtime. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |


### FilterActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'Filter' (required) |
| typeProperties | Filter activity properties. | FilterActivityTypeProperties(required) |


### FilterActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| condition | Condition to be used for filtering the input. | Expression(required) |
| items | Input array on which filter should be applied. | Expression(required) |


### Expression

| Name | Description | Value |
|-|-|-|
| type | Expression type. | 'Expression' (required) |
| value | Expression value. | string (required) |


### ForEachActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'ForEach' (required) |
| typeProperties | ForEach activity properties. | ForEachActivityTypeProperties(required) |


### ForEachActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| activities | List of activities to execute . | Activity[] (required) |
| batchCount | Batch count to be used for controlling the number of parallel execution (when isSequential is set to false). | int |
| isSequential | Should the loop be executed in sequence or in parallel (max 50) | bool |
| items | Collection to iterate. | Expression(required) |


### GetMetadataActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'GetMetadata' (required) |
| linkedServiceName | Linked service reference. | LinkedServiceReference |
| policy | Activity policy. | ActivityPolicy |
| typeProperties | GetMetadata activity properties. | GetMetadataActivityTypeProperties(required) |


### GetMetadataActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| dataset | GetMetadata activity dataset reference. | DatasetReference(required) |
| fieldList | Fields of metadata to get from dataset. | any[] |
| formatSettings | GetMetadata activity format settings. | FormatReadSettings |
| storeSettings | GetMetadata activity store settings. | StoreReadSettings |


### FormatReadSettings

| Name | Description | Value |
|-|-|-|
| type | Set the object type | BinaryReadSettingsDelimitedTextReadSettingsJsonReadSettingsXmlReadSettings(required) |


### HDInsightHiveActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'HDInsightHive' (required) |
| linkedServiceName | Linked service reference. | LinkedServiceReference |
| policy | Activity policy. | ActivityPolicy |
| typeProperties | HDInsight Hive activity properties. | HDInsightHiveActivityTypeProperties(required) |


### HDInsightHiveActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| arguments | User specified arguments to HDInsightActivity. | any[] |
| defines | Allows user to specify defines for Hive job request. | object |
| getDebugInfo | Debug info option. | 'Always''Failure''None' |
| queryTimeout | Query timeout value (in minutes).  Effective when the HDInsight cluster is with ESP (Enterprise Security Package) | int |
| scriptLinkedService | Script linked service reference. | LinkedServiceReference |
| scriptPath | Script path. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| storageLinkedServices | Storage linked service references. | LinkedServiceReference[] |
| variables | User specified arguments under hivevar namespace. | any[] |


### HDInsightMapReduceActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'HDInsightMapReduce' (required) |
| linkedServiceName | Linked service reference. | LinkedServiceReference |
| policy | Activity policy. | ActivityPolicy |
| typeProperties | HDInsight MapReduce activity properties. | HDInsightMapReduceActivityTypeProperties(required) |


### HDInsightMapReduceActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| arguments | User specified arguments to HDInsightActivity. | any[] |
| className | Class name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| defines | Allows user to specify defines for the MapReduce job request. | object |
| getDebugInfo | Debug info option. | 'Always''Failure''None' |
| jarFilePath | Jar path. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| jarLibs | Jar libs. | any[] |
| jarLinkedService | Jar linked service reference. | LinkedServiceReference |
| storageLinkedServices | Storage linked service references. | LinkedServiceReference[] |


### HDInsightPigActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'HDInsightPig' (required) |
| linkedServiceName | Linked service reference. | LinkedServiceReference |
| policy | Activity policy. | ActivityPolicy |
| typeProperties | HDInsight Pig activity properties. | HDInsightPigActivityTypeProperties(required) |


### HDInsightPigActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| arguments | User specified arguments to HDInsightActivity. Type: array (or Expression with resultType array). | For Bicep, you can use theany()function. |
| defines | Allows user to specify defines for Pig job request. | object |
| getDebugInfo | Debug info option. | 'Always''Failure''None' |
| scriptLinkedService | Script linked service reference. | LinkedServiceReference |
| scriptPath | Script path. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| storageLinkedServices | Storage linked service references. | LinkedServiceReference[] |


### HDInsightSparkActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'HDInsightSpark' (required) |
| linkedServiceName | Linked service reference. | LinkedServiceReference |
| policy | Activity policy. | ActivityPolicy |
| typeProperties | HDInsight spark activity properties. | HDInsightSparkActivityTypeProperties(required) |


### HDInsightSparkActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| arguments | The user-specified arguments to HDInsightSparkActivity. | any[] |
| className | The application's Java/Spark main class. | string |
| entryFilePath | The relative path to the root folder of the code/package to be executed. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| getDebugInfo | Debug info option. | 'Always''Failure''None' |
| proxyUser | The user to impersonate that will execute the job. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| rootPath | The root path in 'sparkJobLinkedService' for all the jobâs files. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| sparkConfig | Spark configuration property. | object |
| sparkJobLinkedService | The storage linked service for uploading the entry file and dependencies, and for receiving logs. | LinkedServiceReference |


### HDInsightStreamingActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'HDInsightStreaming' (required) |
| linkedServiceName | Linked service reference. | LinkedServiceReference |
| policy | Activity policy. | ActivityPolicy |
| typeProperties | HDInsight streaming activity properties. | HDInsightStreamingActivityTypeProperties(required) |


### HDInsightStreamingActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| arguments | User specified arguments to HDInsightActivity. | any[] |
| combiner | Combiner executable name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| commandEnvironment | Command line environment values. | any[] |
| defines | Allows user to specify defines for streaming job request. | object |
| fileLinkedService | Linked service reference where the files are located. | LinkedServiceReference |
| filePaths | Paths to streaming job files. Can be directories. | any[] (required) |
| getDebugInfo | Debug info option. | 'Always''Failure''None' |
| input | Input blob path. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| mapper | Mapper executable name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| output | Output blob path. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| reducer | Reducer executable name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| storageLinkedServices | Storage linked service references. | LinkedServiceReference[] |


### IfConditionActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'IfCondition' (required) |
| typeProperties | IfCondition activity properties. | IfConditionActivityTypeProperties(required) |


### IfConditionActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| expression | An expression that would evaluate to Boolean. This is used to determine the block of activities (ifTrueActivities or ifFalseActivities) that will be executed. | Expression(required) |
| ifFalseActivities | List of activities to execute if expression is evaluated to false. This is an optional property and if not provided, the activity will exit without any action. | Activity[] |
| ifTrueActivities | List of activities to execute if expression is evaluated to true. This is an optional property and if not provided, the activity will exit without any action. | Activity[] |


### LookupActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'Lookup' (required) |
| linkedServiceName | Linked service reference. | LinkedServiceReference |
| policy | Activity policy. | ActivityPolicy |
| typeProperties | Lookup activity properties. | LookupActivityTypeProperties(required) |


### LookupActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| dataset | Lookup activity dataset reference. | DatasetReference(required) |
| firstRowOnly | Whether to return first row or all rows. Default value is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| source | Dataset-specific source properties, same as copy activity source. | CopySource(required) |


### ScriptActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'Script' (required) |
| linkedServiceName | Linked service reference. | LinkedServiceReference |
| policy | Activity policy. | ActivityPolicy |
| typeProperties | Script activity properties. | ScriptActivityTypeProperties(required) |


### ScriptActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| logSettings | Log settings of script activity. | ScriptActivityTypePropertiesLogSettings |
| scriptBlockExecutionTimeout | ScriptBlock execution timeout. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |
| scripts | Array of script blocks. Type: array. | ScriptActivityScriptBlock[] |


### ScriptActivityTypePropertiesLogSettings

| Name | Description | Value |
|-|-|-|
| logDestination | The destination of logs. Type: string. | 'ActivityOutput''ExternalStore' (required) |
| logLocationSettings | Log location settings customer needs to provide when enabling log. | LogLocationSettings |


### ScriptActivityScriptBlock

| Name | Description | Value |
|-|-|-|
| parameters | Array of script parameters. Type: array. | ScriptActivityParameter[] |
| text | The query text. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| type | The type of the query. Type: string. | 'NonQuery''Query' (required) |


### ScriptActivityParameter

| Name | Description | Value |
|-|-|-|
| direction | The direction of the parameter. | 'Input''InputOutput''Output' |
| name | The name of the parameter. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| size | The size of the output direction parameter. | int |
| type | The type of the parameter. | 'Boolean''DateTime''DateTimeOffset''Decimal''Double''Guid''Int16''Int32''Int64''Single''String''Timespan' |
| value | The value of the parameter. | For Bicep, you can use theany()function. |


### SetVariableActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'SetVariable' (required) |
| typeProperties | Set Variable activity properties. | SetVariableActivityTypeProperties(required) |


### SetVariableActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| value | Value to be set. Could be a static value or Expression | For Bicep, you can use theany()function. |
| variableName | Name of the variable whose value needs to be set. | string |


### SynapseSparkJobDefinitionActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'SparkJob' (required) |
| linkedServiceName | Linked service reference. | LinkedServiceReference |
| policy | Activity policy. | ActivityPolicy |
| typeProperties | Execute spark job activity properties. | SynapseSparkJobActivityTypeProperties(required) |


### SynapseSparkJobActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| args | User specified arguments to SynapseSparkJobDefinitionActivity. | any[] |
| className | The fully-qualified identifier or the main class that is in the main definition file, which will override the 'className' of the spark job definition you provide. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| conf | Spark configuration properties, which will override the 'conf' of the spark job definition you provide. | For Bicep, you can use theany()function. |
| configurationType | The type of the spark config. | 'Artifact''Customized''Default' |
| driverSize | Number of core and memory to be used for driver allocated in the specified Spark pool for the job, which will be used for overriding 'driverCores' and 'driverMemory' of the spark job definition you provide. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| executorSize | Number of core and memory to be used for executors allocated in the specified Spark pool for the job, which will be used for overriding 'executorCores' and 'executorMemory' of the spark job definition you provide. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| file | The main file used for the job, which will override the 'file' of the spark job definition you provide. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| files | (Deprecated. Please use pythonCodeReference and filesV2) Additional files used for reference in the main definition file, which will override the 'files' of the spark job definition you provide. | any[] |
| filesV2 | Additional files used for reference in the main definition file, which will override the 'jars' and 'files' of the spark job definition you provide. | any[] |
| numExecutors | Number of executors to launch for this job, which will override the 'numExecutors' of the spark job definition you provide. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |
| pythonCodeReference | Additional python code files used for reference in the main definition file, which will override the 'pyFiles' of the spark job definition you provide. | any[] |
| scanFolder | Scanning subfolders from the root folder of the main definition file, these files will be added as reference files. The folders named 'jars', 'pyFiles', 'files' or 'archives' will be scanned, and the folders name are case sensitive. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| sparkConfig | Spark configuration property. | object |
| sparkJob | Synapse spark job reference. | SynapseSparkJobReference(required) |
| targetBigDataPool | The name of the big data pool which will be used to execute the spark batch job, which will override the 'targetBigDataPool' of the spark job definition you provide. | BigDataPoolParametrizationReference |
| targetSparkConfiguration | The spark configuration of the spark job. | SparkConfigurationParametrizationReference |


### SynapseSparkJobReference

| Name | Description | Value |
|-|-|-|
| referenceName | Reference spark job name. Expression with resultType string. | For Bicep, you can use theany()function.(required) |
| type | Synapse spark job reference type. | 'SparkJobDefinitionReference' (required) |


### BigDataPoolParametrizationReference

| Name | Description | Value |
|-|-|-|
| referenceName | Reference big data pool name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| type | Big data pool reference type. | 'BigDataPoolReference' (required) |


### SparkConfigurationParametrizationReference

| Name | Description | Value |
|-|-|-|
| referenceName | Reference spark configuration name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| type | Spark configuration reference type. | 'SparkConfigurationReference' (required) |


### SqlServerStoredProcedureActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'SqlServerStoredProcedure' (required) |
| linkedServiceName | Linked service reference. | LinkedServiceReference |
| policy | Activity policy. | ActivityPolicy |
| typeProperties | SQL stored procedure activity properties. | SqlServerStoredProcedureActivityTypeProperties(required) |


### SqlServerStoredProcedureActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| storedProcedureName | Stored procedure name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| storedProcedureParameters | Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}". | For Bicep, you can use theany()function. |


### SwitchActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'Switch' (required) |
| typeProperties | Switch activity properties. | SwitchActivityTypeProperties(required) |


### SwitchActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| cases | List of cases that correspond to expected values of the 'on' property. This is an optional property and if not provided, the activity will execute activities provided in defaultActivities. | SwitchCase[] |
| defaultActivities | List of activities to execute if no case condition is satisfied. This is an optional property and if not provided, the activity will exit without any action. | Activity[] |
| on | An expression that would evaluate to a string or integer. This is used to determine the block of activities in cases that will be executed. | Expression(required) |


### SwitchCase

| Name | Description | Value |
|-|-|-|
| activities | List of activities to execute for satisfied case condition. | Activity[] |
| value | Expected value that satisfies the expression result of the 'on' property. | string |


### SynapseNotebookActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'SynapseNotebook' (required) |
| linkedServiceName | Linked service reference. | LinkedServiceReference |
| policy | Activity policy. | ActivityPolicy |
| typeProperties | Execute Synapse notebook activity properties. | SynapseNotebookActivityTypeProperties(required) |


### SynapseNotebookActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| conf | Spark configuration properties, which will override the 'conf' of the notebook you provide. | For Bicep, you can use theany()function. |
| driverSize | Number of core and memory to be used for driver allocated in the specified Spark pool for the session, which will be used for overriding 'driverCores' and 'driverMemory' of the notebook you provide. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| executorSize | Number of core and memory to be used for executors allocated in the specified Spark pool for the session, which will be used for overriding 'executorCores' and 'executorMemory' of the notebook you provide. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| notebook | Synapse notebook reference. | SynapseNotebookReference(required) |
| numExecutors | Number of executors to launch for this session, which will override the 'numExecutors' of the notebook you provide. | int |
| parameters | Notebook parameters. | object |
| sparkPool | The name of the big data pool which will be used to execute the notebook. | BigDataPoolParametrizationReference |


### SynapseNotebookReference

| Name | Description | Value |
|-|-|-|
| referenceName | Reference notebook name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
| type | Synapse notebook reference type. | 'NotebookReference' (required) |


### UntilActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'Until' (required) |
| typeProperties | Until activity properties. | UntilActivityTypeProperties(required) |


### UntilActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| activities | List of activities to execute. | Activity[] (required) |
| expression | An expression that would evaluate to Boolean. The loop will continue until this expression evaluates to true | Expression(required) |
| timeout | Specifies the timeout for the activity to run. If there is no value specified, it takes the value of TimeSpan.FromDays(7) which is 1 week as default. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### ValidationActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'Validation' (required) |
| typeProperties | Validation activity properties. | ValidationActivityTypeProperties(required) |


### ValidationActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| childItems | Can be used if dataset points to a folder. If set to true, the folder must have at least one file. If set to false, the folder must be empty. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| dataset | Validation activity dataset reference. | DatasetReference(required) |
| minimumSize | Can be used if dataset points to a file. The file must be greater than or equal in size to the value specified. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |
| sleep | A delay in seconds between validation attempts. If no value is specified, 10 seconds will be used as the default. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |
| timeout | Specifies the timeout for the activity to run. If there is no value specified, it takes the value of TimeSpan.FromDays(7) which is 1 week as default. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |


### WaitActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'Wait' (required) |
| typeProperties | Wait activity properties. | WaitActivityTypeProperties(required) |


### WaitActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| waitTimeInSeconds | Duration in seconds. | For Bicep, you can use theany()function.(required) |


### WebActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'WebActivity' (required) |
| linkedServiceName | Linked service reference. | LinkedServiceReference |
| policy | Activity policy. | ActivityPolicy |
| typeProperties | Web activity properties. | WebActivityTypeProperties(required) |


### WebActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| authentication | Authentication method used for calling the endpoint. | WebActivityAuthentication |
| body | Represents the payload that will be sent to the endpoint. Required for POST/PUT method, not allowed for GET method Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| connectVia | The integration runtime reference. | IntegrationRuntimeReference |
| datasets | List of datasets passed to web endpoint. | DatasetReference[] |
| disableCertValidation | When set to true, Certificate validation will be disabled. | bool |
| headers | Represents the headers that will be sent to the request. For example, to set the language and type on a request: "headers" : { "Accept-Language": "en-us", "Content-Type": "application/json" }. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| linkedServices | List of linked services passed to web endpoint. | LinkedServiceReference[] |
| method | Rest API method for target endpoint. | 'DELETE''GET''POST''PUT' (required) |
| url | Web activity target endpoint and path. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |


### WebActivityAuthentication

| Name | Description | Value |
|-|-|-|
| credential | The credential reference containing authentication information. | CredentialReference |
| password | Password for the PFX file or basic authentication / Secret when used for ServicePrincipal | SecretBase |
| pfx | Base64-encoded contents of a PFX file or Certificate when used for ServicePrincipal | SecretBase |
| resource | Resource for which Azure Auth token will be requested when using MSI Authentication. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| type | Web activity authentication (Basic/ClientCertificate/MSI/ServicePrincipal) | string |
| username | Web activity authentication user name for basic authentication or ClientID when used for ServicePrincipal. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| userTenant | TenantId for which Azure Auth token will be requested when using ServicePrincipal Authentication. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |


### CredentialReference

| Name | Description | Value |
|-|-|-|
| referenceName | Reference credential name. | string (required) |
| type | Credential reference type. | 'CredentialReference' (required) |


### WebHookActivity

| Name | Description | Value |
|-|-|-|
| type | Type of activity. | 'WebHook' (required) |
| typeProperties | WebHook activity properties. | WebHookActivityTypeProperties(required) |


### WebHookActivityTypeProperties

| Name | Description | Value |
|-|-|-|
| authentication | Authentication method used for calling the endpoint. | WebActivityAuthentication |
| body | Represents the payload that will be sent to the endpoint. Required for POST/PUT method, not allowed for GET method Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| headers | Represents the headers that will be sent to the request. For example, to set the language and type on a request: "headers" : { "Accept-Language": "en-us", "Content-Type": "application/json" }. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
| method | Rest API method for target endpoint. | 'POST' (required) |
| reportStatusOnCallBack | When set to true, statusCode, output and error in callback request body will be consumed by activity. The activity can be marked as failed by setting statusCode >= 400 in callback request. Default is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
| timeout | The timeout within which the webhook should be called back. If there is no value specified, it defaults to 10 minutes. Type: string. Pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | string |
| url | WebHook activity target endpoint and path. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |


### PipelineFolder

| Name | Description | Value |
|-|-|-|
| name | The name of the folder that this Pipeline is in. | string |


### PipelinePolicy

| Name | Description | Value |
|-|-|-|
| elapsedTimeMetric | Pipeline ElapsedTime Metric Policy. | PipelineElapsedTimeMetricPolicy |


### PipelineElapsedTimeMetricPolicy

| Name | Description | Value |
|-|-|-|
| duration | TimeSpan value, after which an Azure Monitoring Metric is fired. | For Bicep, you can use theany()function. |
## Microsoft.DataFactory/factories/privateEndpointConnections@2018-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataFactory/factories/privateEndpointConnections@2018-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateEndpoint = {
        id = "string"
      }
      privateLinkServiceConnectionState = {
        actionsRequired = "string"
        description = "string"
        status = "string"
      }
    }
  })
}

```

### factories/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:factories |
| properties | Core resource properties | PrivateLinkConnectionApprovalRequestOrRemotePrivateE... |


### PrivateLinkConnectionApprovalRequestOrRemotePrivateE...

| Name | Description | Value |
|-|-|-|
| privateEndpoint | The resource of private endpoint. | PrivateEndpointOrArmIdWrapper |
| privateLinkServiceConnectionState | The state of a private link connection | PrivateLinkConnectionState |


### PrivateEndpointOrArmIdWrapper

| Name | Description | Value |
|-|-|-|
| id | The resource Id for private endpoint | string |


### PrivateLinkConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | ActionsRequired for a private link connection | string |
| description | Description of a private link connection | string |
| status | Status of a private link connection | string |
## Microsoft.DataFactory/factories/triggers@2018-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataFactory/factories/triggers@2018-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      annotations = [ object ]
      description = "string"
      type = "string"
      // For remaining properties, see Trigger objects
    }
  })
}

```

### factories/triggers

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-260Valid characters:Can't use:<>*#.%&:\\+?/or control charactersStart with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:factories |
| properties | Properties of the trigger. | Trigger(required) |


### Trigger

| Name | Description | Value |
|-|-|-|
| annotations | List of tags that can be used for describing the trigger. | any[] |
| description | Trigger description. | string |
| type | Set the object type | BlobEventsTriggerBlobTriggerChainingTriggerCustomEventsTriggerRerunTumblingWindowTriggerScheduleTriggerTumblingWindowTrigger(required) |


### BlobEventsTrigger

| Name | Description | Value |
|-|-|-|
| type | Trigger type. | 'BlobEventsTrigger' (required) |
| pipelines | Pipelines that need to be started. | TriggerPipelineReference[] |
| typeProperties | Blob Events Trigger properties. | BlobEventsTriggerTypeProperties(required) |


### TriggerPipelineReference

| Name | Description | Value |
|-|-|-|
| parameters | Pipeline parameters. | object |
| pipelineReference | Pipeline reference. | PipelineReference |


### PipelineReference

| Name | Description | Value |
|-|-|-|
| name | Reference name. | string |
| referenceName | Reference pipeline name. | string (required) |
| type | Pipeline reference type. | 'PipelineReference' (required) |


### BlobEventsTriggerTypeProperties

| Name | Description | Value |
|-|-|-|
| blobPathBeginsWith | The blob path must begin with the pattern provided for trigger to fire. For example, '/records/blobs/december/' will only fire the trigger for blobs in the december folder under the records container. At least one of these must be provided: blobPathBeginsWith, blobPathEndsWith. | string |
| blobPathEndsWith | The blob path must end with the pattern provided for trigger to fire. For example, 'december/boxes.csv' will only fire the trigger for blobs named boxes in a december folder. At least one of these must be provided: blobPathBeginsWith, blobPathEndsWith. | string |
| events | The type of events that cause this trigger to fire. | String array containing any of:'Microsoft.Storage.BlobCreated''Microsoft.Storage.BlobDeleted' (required) |
| ignoreEmptyBlobs | If set to true, blobs with zero bytes will be ignored. | bool |
| scope | The ARM resource ID of the Storage Account. | string (required) |


### BlobTrigger

| Name | Description | Value |
|-|-|-|
| type | Trigger type. | 'BlobTrigger' (required) |
| pipelines | Pipelines that need to be started. | TriggerPipelineReference[] |
| typeProperties | Blob Trigger properties. | BlobTriggerTypeProperties(required) |


### BlobTriggerTypeProperties

| Name | Description | Value |
|-|-|-|
| folderPath | The path of the container/folder that will trigger the pipeline. | string (required) |
| linkedService | The Azure Storage linked service reference. | LinkedServiceReference(required) |
| maxConcurrency | The max number of parallel files to handle when it is triggered. | int (required) |


### LinkedServiceReference

| Name | Description | Value |
|-|-|-|
| parameters | Arguments for LinkedService. | object |
| referenceName | Reference LinkedService name. | string (required) |
| type | Linked service reference type. | 'LinkedServiceReference' (required) |


### ChainingTrigger

| Name | Description | Value |
|-|-|-|
| type | Trigger type. | 'ChainingTrigger' (required) |
| pipeline | Pipeline for which runs are created when all upstream pipelines complete successfully. | TriggerPipelineReference(required) |
| typeProperties | Chaining Trigger properties. | ChainingTriggerTypeProperties(required) |


### ChainingTriggerTypeProperties

| Name | Description | Value |
|-|-|-|
| dependsOn | Upstream Pipelines. | PipelineReference[] (required) |
| runDimension | Run Dimension property that needs to be emitted by upstream pipelines. | string (required) |


### CustomEventsTrigger

| Name | Description | Value |
|-|-|-|
| type | Trigger type. | 'CustomEventsTrigger' (required) |
| pipelines | Pipelines that need to be started. | TriggerPipelineReference[] |
| typeProperties | Custom Events Trigger properties. | CustomEventsTriggerTypeProperties(required) |


### CustomEventsTriggerTypeProperties

| Name | Description | Value |
|-|-|-|
| events | The list of event types that cause this trigger to fire. | any[] (required) |
| scope | The ARM resource ID of the Azure Event Grid Topic. | string (required) |
| subjectBeginsWith | The event subject must begin with the pattern provided for trigger to fire. At least one of these must be provided: subjectBeginsWith, subjectEndsWith. | string |
| subjectEndsWith | The event subject must end with the pattern provided for trigger to fire. At least one of these must be provided: subjectBeginsWith, subjectEndsWith. | string |


### RerunTumblingWindowTrigger

| Name | Description | Value |
|-|-|-|
| type | Trigger type. | 'RerunTumblingWindowTrigger' (required) |
| typeProperties | Rerun Trigger properties. | RerunTumblingWindowTriggerTypeProperties(required) |


### RerunTumblingWindowTriggerTypeProperties

| Name | Description | Value |
|-|-|-|
| parentTrigger | The parent trigger reference. | For Bicep, you can use theany()function.(required) |
| requestedEndTime | The end time for the time period for which restatement is initiated. Only UTC time is currently supported. | string (required) |
| requestedStartTime | The start time for the time period for which restatement is initiated. Only UTC time is currently supported. | string (required) |
| rerunConcurrency | The max number of parallel time windows (ready for execution) for which a rerun is triggered. | int (required) |


### ScheduleTrigger

| Name | Description | Value |
|-|-|-|
| type | Trigger type. | 'ScheduleTrigger' (required) |
| pipelines | Pipelines that need to be started. | TriggerPipelineReference[] |
| typeProperties | Schedule Trigger properties. | ScheduleTriggerTypeProperties(required) |


### ScheduleTriggerTypeProperties

| Name | Description | Value |
|-|-|-|
| recurrence | Recurrence schedule configuration. | ScheduleTriggerRecurrence(required) |


### ScheduleTriggerRecurrence

| Name | Description | Value |
|-|-|-|
| endTime | The end time. | string |
| frequency | The frequency. | 'Day''Hour''Minute''Month''NotSpecified''Week''Year' |
| interval | The interval. | int |
| schedule | The recurrence schedule. | RecurrenceSchedule |
| startTime | The start time. | string |
| timeZone | The time zone. | string |


### RecurrenceSchedule

| Name | Description | Value |
|-|-|-|
| hours | The hours. | int[] |
| minutes | The minutes. | int[] |
| monthDays | The month days. | int[] |
| monthlyOccurrences | The monthly occurrences. | RecurrenceScheduleOccurrence[] |
| weekDays | The days of the week. | String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday' |


### RecurrenceScheduleOccurrence

| Name | Description | Value |
|-|-|-|
| day | The day of the week. | 'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday' |
| occurrence | The occurrence. | int |


### TumblingWindowTrigger

| Name | Description | Value |
|-|-|-|
| type | Trigger type. | 'TumblingWindowTrigger' (required) |
| pipeline | Pipeline for which runs are created when an event is fired for trigger window that is ready. | TriggerPipelineReference(required) |
| typeProperties | Tumbling Window Trigger properties. | TumblingWindowTriggerTypeProperties(required) |


### TumblingWindowTriggerTypeProperties

| Name | Description | Value |
|-|-|-|
| delay | Specifies how long the trigger waits past due time before triggering new run. It doesn't alter window start and end time. The default is 0. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |
| dependsOn | Triggers that this trigger depends on. Only tumbling window triggers are supported. | DependencyReference[] |
| endTime | The end time for the time period for the trigger during which events are fired for windows that are ready. Only UTC time is currently supported. | string |
| frequency | The frequency of the time windows. | 'Hour''Minute''Month' (required) |
| interval | The interval of the time windows. The minimum interval allowed is 15 Minutes. | int (required) |
| maxConcurrency | The max number of parallel time windows (ready for execution) for which a new run is triggered. | int (required) |
| retryPolicy | Retry policy that will be applied for failed pipeline runs. | RetryPolicy |
| startTime | The start time for the time period for the trigger during which events are fired for windows that are ready. Only UTC time is currently supported. | string (required) |


### DependencyReference

| Name | Description | Value |
|-|-|-|
| type | Set the object type | SelfDependencyTumblingWindowTriggerReferenceTumblingWindowTriggerDependencyReference(required) |


### SelfDependencyTumblingWindowTriggerReference

| Name | Description | Value |
|-|-|-|
| type | The type of dependency reference. | 'SelfDependencyTumblingWindowTriggerReference' (required) |
| offset | Timespan applied to the start time of a tumbling window when evaluating dependency. | string (required) |
| size | The size of the window when evaluating the dependency. If undefined the frequency of the tumbling window will be used. | string |


### TumblingWindowTriggerDependencyReference

| Name | Description | Value |
|-|-|-|
| type | The type of dependency reference. | 'TumblingWindowTriggerDependencyReference' (required) |
| offset | Timespan applied to the start time of a tumbling window when evaluating dependency. | string |
| referenceTrigger | Referenced trigger. | TriggerReference(required) |
| size | The size of the window when evaluating the dependency. If undefined the frequency of the tumbling window will be used. | string |


### TriggerReference

| Name | Description | Value |
|-|-|-|
| referenceName | Reference trigger name. | string (required) |
| type | Trigger reference type. | 'TriggerReference' (required) |


### RetryPolicy

| Name | Description | Value |
|-|-|-|
| count | Maximum ordinary retry attempts. Default is 0. Type: integer (or Expression with resultType integer), minimum: 0. | For Bicep, you can use theany()function. |
| intervalInSeconds | Interval between retries in seconds. Default is 30. | int |
