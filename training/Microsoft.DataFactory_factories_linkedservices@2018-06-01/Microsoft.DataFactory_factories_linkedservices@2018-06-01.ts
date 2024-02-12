import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface DatafactoryFactoriesLinkedservicesProps extends IAzAPIBaseProps {

}

export class DatafactoryFactoriesLinkedservices extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatafactoryFactoriesLinkedservicesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataFactory/factories/linkedservices@2018-06-01";
  }

  protected getResourceBody(props: DatafactoryFactoriesLinkedservicesProps): string {
    return JSON.stringify(
      {properties: {annotations: ["${object}"], connectVia: {parameters: {}, referenceName: "string", type: "IntegrationRuntimeReference"}, description: "string", parameters: {}, type: "string"}}
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-260Valid characters:Can't use:<>*#.%&:\\+?/or control charactersStart with alphanumeric. |
// | parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:factories |
// | properties | Properties of linked service. | LinkedService(required) |

// | Name | Description | Value |
// |-|-|-|
// | annotations | List of tags that can be used for describing the linked service. | any[] |
// | connectVia | The integration runtime reference. | IntegrationRuntimeReference |
// | description | Linked service description. | string |
// | parameters | Parameters for linked service. | object |
// | type | Set the object type | AmazonMWSAmazonRdsForOracleAmazonRdsForSqlServerAmazonRedshiftAmazonS3AmazonS3CompatibleAppFiguresAsanaAzureBatchAzureBlobFSAzureBlobStorageAzureDatabricksAzureDatabricksDeltaLakeAzureDataExplorerAzureDataLakeAnalyticsAzureDataLakeStoreAzureFileStorageAzureFunctionAzureKeyVaultAzureMariaDBAzureMLAzureMLServiceAzureMySqlAzurePostgreSqlAzureSearchAzureSqlDatabaseAzureSqlDWAzureSqlMIAzureStorageAzureSynapseArtifactsAzureTableStorageCassandraCommonDataServiceForAppsConcurCosmosDbCosmosDbMongoDbApiCouchbaseCustomDataSourceDataworldDb2DrillDynamicsDynamicsAXDynamicsCrmEloquaFileServerFtpServerGoogleAdWordsGoogleBigQueryGoogleCloudStorageGoogleSheetsGreenplumHBaseHdfsHDInsightHDInsightOnDemandHiveHttpServerHubspotImpalaInformixJiraMagentoMariaDBMarketoMicrosoftAccessMongoDbMongoDbAtlasMongoDbV2MySqlNetezzaODataOdbcOffice365OracleOracleCloudStorageOracleServiceCloudPaypalPhoenixPostgreSqlPrestoQuickbaseQuickBooksResponsysRestServiceSalesforceSalesforceMarketingCloudSalesforceServiceCloudSapBWSapCloudForCustomerSapEccSapHanaSapOdpSapOpenHubSapTableServiceNowSftpSharePointOnlineListShopifySmartsheetSnowflakeSparkSqlServerSquareSybaseTeamDeskTeradataTwilioVerticaWebXeroZendeskZoho(required) |

// | Name | Description | Value |
// |-|-|-|
// | parameters | Arguments for integration runtime. | object |
// | referenceName | Reference integration runtime name. | string (required) |
// | type | Type of integration runtime. | 'IntegrationRuntimeReference' (required) |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'AmazonMWS' (required) |
// | typeProperties | Amazon Marketplace Web Service linked service properties. | AmazonMWSLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | accessKeyId | The access key id used to access data. | For Bicep, you can use theany()function.(required) |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | endpoint | The endpoint of the Amazon MWS server, (i.e. mws.amazonservices.com) | For Bicep, you can use theany()function.(required) |
// | marketplaceID | The Amazon Marketplace ID you want to retrieve data from. To retrieve data from multiple Marketplace IDs, separate them with a comma (,). (i.e. A2EUQ1WTGCTBG2) | For Bicep, you can use theany()function.(required) |
// | mwsAuthToken | The Amazon MWS authentication token. | SecretBase |
// | secretKey | The secret key used to access data. | SecretBase |
// | sellerID | The Amazon seller ID. | For Bicep, you can use theany()function.(required) |
// | useEncryptedEndpoints | Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. | For Bicep, you can use theany()function. |
// | useHostVerification | Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. | For Bicep, you can use theany()function. |
// | usePeerVerification | Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Set the object type | AzureKeyVaultSecretSecureString(required) |

// | Name | Description | Value |
// |-|-|-|
// | secretName | The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | secretVersion | The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | store | The Azure Key Vault linked service reference. | LinkedServiceReference(required) |
// | type | Type of the secret. | string (required) |

// | Name | Description | Value |
// |-|-|-|
// | parameters | Arguments for LinkedService. | object |
// | referenceName | Reference LinkedService name. | string (required) |
// | type | Linked service reference type. | 'LinkedServiceReference' (required) |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of the secret. | string (required) |
// | value | Value of secure string. | string (required) |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'AmazonRdsForOracle' (required) |
// | typeProperties | AmazonRdsForOracle database linked service properties. | AmazonRdsForLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | connectionString | The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function.(required) |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | password | The Azure key vault secret reference of password in connection string. | SecretBase |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'AmazonRdsForSqlServer' (required) |
// | typeProperties | Amazon RDS for SQL Server linked service properties. | AmazonRdsForSqlServerLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | alwaysEncryptedSettings | Sql always encrypted properties. | SqlAlwaysEncryptedProperties |
// | connectionString | The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function.(required) |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | password | The on-premises Windows authentication password. | SecretBase |
// | userName | The on-premises Windows authentication user name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | alwaysEncryptedAkvAuthType | Sql always encrypted AKV authentication type. Type: string (or Expression with resultType string). | 'ManagedIdentity''ServicePrincipal''UserAssignedManagedIdentity' (required) |
// | credential | The credential reference containing authentication information. | CredentialReference |
// | servicePrincipalId | The client ID of the application in Azure Active Directory used for Azure Key Vault authentication. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | servicePrincipalKey | The key of the service principal used to authenticate against Azure Key Vault. | SecretBase |

// | Name | Description | Value |
// |-|-|-|
// | referenceName | Reference credential name. | string (required) |
// | type | Credential reference type. | 'CredentialReference' (required) |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'AmazonRedshift' (required) |
// | typeProperties | Amazon Redshift linked service properties. | AmazonRedshiftLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | database | The database name of the Amazon Redshift source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | password | The password of the Amazon Redshift source. | SecretBase |
// | port | The TCP port number that the Amazon Redshift server uses to listen for client connections. The default value is 5439. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |
// | server | The name of the Amazon Redshift server. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | username | The username of the Amazon Redshift source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'AmazonS3' (required) |
// | typeProperties | Amazon S3 linked service properties. | AmazonS3LinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | accessKeyId | The access key identifier of the Amazon S3 Identity and Access Management (IAM) user. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | authenticationType | The authentication type of S3. Allowed value: AccessKey (default) or TemporarySecurityCredentials. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | secretAccessKey | The secret access key of the Amazon S3 Identity and Access Management (IAM) user. | SecretBase |
// | serviceUrl | This value specifies the endpoint to access with the S3 Connector. This is an optional property; change it only if you want to try a different service endpoint or want to switch between https and http. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | sessionToken | The session token for the S3 temporary security credential. | SecretBase |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'AmazonS3Compatible' (required) |
// | typeProperties | Amazon S3 Compatible linked service properties. | AmazonS3CompatibleLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | accessKeyId | The access key identifier of the Amazon S3 Compatible Identity and Access Management (IAM) user. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | forcePathStyle | If true, use S3 path-style access instead of virtual hosted-style access. Default value is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
// | secretAccessKey | The secret access key of the Amazon S3 Compatible Identity and Access Management (IAM) user. | SecretBase |
// | serviceUrl | This value specifies the endpoint to access with the Amazon S3 Compatible Connector. This is an optional property; change it only if you want to try a different service endpoint or want to switch between https and http. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'AppFigures' (required) |
// | typeProperties | AppFigures linked service properties. | AppFiguresLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | clientKey | The client key for the AppFigures source. | SecretBase(required) |
// | password | The password of the AppFigures source. | SecretBase(required) |
// | userName | The username of the Appfigures source. | For Bicep, you can use theany()function.(required) |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'Asana' (required) |
// | typeProperties | Asana linked service properties. | AsanaLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | apiToken | The api token for the Asana source. | SecretBase(required) |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'AzureBatch' (required) |
// | typeProperties | Azure Batch linked service properties. | AzureBatchLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | accessKey | The Azure Batch account access key. | SecretBase |
// | accountName | The Azure Batch account name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | batchUri | The Azure Batch URI. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | credential | The credential reference containing authentication information. | CredentialReference |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | linkedServiceName | The Azure Storage linked service reference. | LinkedServiceReference(required) |
// | poolName | The Azure Batch pool name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'AzureBlobFS' (required) |
// | typeProperties | Azure Data Lake Storage Gen2 linked service properties. | AzureBlobFSLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | accountKey | Account key for the Azure Data Lake Storage Gen2 service. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | azureCloudType | Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regionsâ cloud type. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | credential | The credential reference containing authentication information. | CredentialReference |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | sasToken | The Azure key vault secret reference of sasToken in sas uri. | SecretBase |
// | sasUri | SAS URI of the Azure Data Lake Storage Gen2 service. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function. |
// | servicePrincipalCredential | The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference. | SecretBase |
// | servicePrincipalCredentialType | The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | servicePrincipalId | The ID of the application used to authenticate against the Azure Data Lake Storage Gen2 account. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | servicePrincipalKey | The Key of the application used to authenticate against the Azure Data Lake Storage Gen2 account. | SecretBase |
// | tenant | The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | url | Endpoint for the Azure Data Lake Storage Gen2 service. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'AzureBlobStorage' (required) |
// | typeProperties | Azure Blob Storage linked service properties. | AzureBlobStorageLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | accountKey | The Azure key vault secret reference of accountKey in connection string. | AzureKeyVaultSecretReference |
// | accountKind | Specify the kind of your storage account. Allowed values are: Storage (general purpose v1), StorageV2 (general purpose v2), BlobStorage, or BlockBlobStorage. Type: string (or Expression with resultType string). | string |
// | authenticationType | The type used for authentication. Type: string. | 'AccountKey''Anonymous''Msi''SasUri''ServicePrincipal' |
// | azureCloudType | Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regionsâ cloud type. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | connectionString | The connection string. It is mutually exclusive with sasUri, serviceEndpoint property. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function. |
// | containerUri | Container uri of the Azure Blob Storage resource only support for anonymous access. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | credential | The credential reference containing authentication information. | CredentialReference |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | string |
// | sasToken | The Azure key vault secret reference of sasToken in sas uri. | AzureKeyVaultSecretReference |
// | sasUri | SAS URI of the Azure Blob Storage resource. It is mutually exclusive with connectionString, serviceEndpoint property. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function. |
// | serviceEndpoint | Blob service endpoint of the Azure Blob Storage resource. It is mutually exclusive with connectionString, sasUri property. | string |
// | servicePrincipalId | The ID of the service principal used to authenticate against Azure SQL Data Warehouse. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | servicePrincipalKey | The key of the service principal used to authenticate against Azure SQL Data Warehouse. | SecretBase |
// | tenant | The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'AzureDatabricks' (required) |
// | typeProperties | Azure Databricks linked service properties. | AzureDatabricksLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | accessToken | Access token for databricks REST API. Refer tohttps://docs.azuredatabricks.net/api/latest/authentication.html. Type: string (or Expression with resultType string). | SecretBase |
// | authentication | Required to specify MSI, if using Workspace resource id for databricks REST API. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | credential | The credential reference containing authentication information. | CredentialReference |
// | domain | {REGION}.azuredatabricks.net, domain name of your Databricks deployment. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | existingClusterId | The id of an existing interactive cluster that will be used for all runs of this activity. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | instancePoolId | The id of an existing instance pool that will be used for all runs of this activity. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | newClusterCustomTags | Additional tags for cluster resources. This property is ignored in instance pool configurations. | object |
// | newClusterDriverNodeType | The driver node type for the new job cluster. This property is ignored in instance pool configurations. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | newClusterEnableElasticDisk | Enable the elastic disk on the new cluster. This property is now ignored, and takes the default elastic disk behavior in Databricks (elastic disks are always enabled). Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
// | newClusterInitScripts | User-defined initialization scripts for the new cluster. Type: array of strings (or Expression with resultType array of strings). | For Bicep, you can use theany()function. |
// | newClusterLogDestination | Specify a location to deliver Spark driver, worker, and event logs. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | newClusterNodeType | The node type of the new job cluster. This property is required if newClusterVersion is specified and instancePoolId is not specified. If instancePoolId is specified, this property is ignored. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | newClusterNumOfWorker | If not using an existing interactive cluster, this specifies the number of worker nodes to use for the new job cluster or instance pool. For new job clusters, this a string-formatted Int32, like '1' means numOfWorker is 1 or '1:10' means auto-scale from 1 (min) to 10 (max). For instance pools, this is a string-formatted Int32, and can only specify a fixed number of worker nodes, such as '2'. Required if newClusterVersion is specified. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | newClusterSparkConf | A set of optional, user-specified Spark configuration key-value pairs. | object |
// | newClusterSparkEnvVars | A set of optional, user-specified Spark environment variables key-value pairs. | object |
// | newClusterVersion | If not using an existing interactive cluster, this specifies the Spark version of a new job cluster or instance pool nodes created for each run of this activity. Required if instancePoolId is specified. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | policyId | The policy id for limiting the ability to configure clusters based on a user defined set of rules. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | workspaceResourceId | Workspace resource id for databricks REST API. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'AzureDatabricksDeltaLake' (required) |
// | typeProperties | Azure Databricks Delta Lake linked service properties. | AzureDatabricksDetltaLakeLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | accessToken | Access token for databricks REST API. Refer tohttps://docs.azuredatabricks.net/api/latest/authentication.html. Type: string, SecureString or AzureKeyVaultSecretReference. | SecretBase |
// | clusterId | The id of an existing interactive cluster that will be used for all runs of this job. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | credential | The credential reference containing authentication information. | CredentialReference |
// | domain | {REGION}.azuredatabricks.net, domain name of your Databricks deployment. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | workspaceResourceId | Workspace resource id for databricks REST API. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'AzureDataExplorer' (required) |
// | typeProperties | Azure Data Explorer (Kusto) linked service properties. | AzureDataExplorerLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | credential | The credential reference containing authentication information. | CredentialReference |
// | database | Database name for connection. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | endpoint | The endpoint of Azure Data Explorer (the engine's endpoint). URL will be in the formathttps://{clusterName}.{regionName}.kusto.windows.net. Type: string (or Expression with resultType string) | For Bicep, you can use theany()function.(required) |
// | servicePrincipalId | The ID of the service principal used to authenticate against Azure Data Explorer. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | servicePrincipalKey | The key of the service principal used to authenticate against Kusto. | SecretBase |
// | tenant | The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'AzureDataLakeAnalytics' (required) |
// | typeProperties | Azure Data Lake Analytics linked service properties. | AzureDataLakeAnalyticsLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | accountName | The Azure Data Lake Analytics account name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | dataLakeAnalyticsUri | Azure Data Lake Analytics URI Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | resourceGroupName | Data Lake Analytics account resource group name (if different from Data Factory account). Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | servicePrincipalId | The ID of the application used to authenticate against the Azure Data Lake Analytics account. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | servicePrincipalKey | The Key of the application used to authenticate against the Azure Data Lake Analytics account. | SecretBase |
// | subscriptionId | Data Lake Analytics account subscription ID (if different from Data Factory account). Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | tenant | The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'AzureDataLakeStore' (required) |
// | typeProperties | Azure Data Lake Store linked service properties. | AzureDataLakeStoreLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | accountName | Data Lake Store account name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | azureCloudType | Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regionsâ cloud type. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | credential | The credential reference containing authentication information. | CredentialReference |
// | dataLakeStoreUri | Data Lake Store service URI. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | resourceGroupName | Data Lake Store account resource group name (if different from Data Factory account). Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | servicePrincipalId | The ID of the application used to authenticate against the Azure Data Lake Store account. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | servicePrincipalKey | The Key of the application used to authenticate against the Azure Data Lake Store account. | SecretBase |
// | subscriptionId | Data Lake Store account subscription ID (if different from Data Factory account). Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | tenant | The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'AzureFileStorage' (required) |
// | typeProperties | Azure File Storage linked service properties. | AzureFileStorageLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | accountKey | The Azure key vault secret reference of accountKey in connection string. | AzureKeyVaultSecretReference |
// | connectionString | The connection string. It is mutually exclusive with sasUri property. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function. |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | fileShare | The azure file share name. It is required when auth with accountKey/sasToken. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | host | Host name of the server. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | password | Password to logon the server. | SecretBase |
// | sasToken | The Azure key vault secret reference of sasToken in sas uri. | AzureKeyVaultSecretReference |
// | sasUri | SAS URI of the Azure File resource. It is mutually exclusive with connectionString property. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function. |
// | snapshot | The azure file share snapshot version. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | userId | User ID to logon the server. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'AzureFunction' (required) |
// | typeProperties | Azure Function linked service properties. | AzureFunctionLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | authentication | Type of authentication (Required to specify MSI) used to connect to AzureFunction. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | credential | The credential reference containing authentication information. | CredentialReference |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | functionAppUrl | The endpoint of the Azure Function App. URL will be in the formathttps://{accountName}.azurewebsites.net. | For Bicep, you can use theany()function.(required) |
// | functionKey | Function or Host key for Azure Function App. | SecretBase |
// | resourceId | Allowed token audiences for azure function. | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'AzureKeyVault' (required) |
// | typeProperties | Azure Key Vault linked service properties. | AzureKeyVaultLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | baseUrl | The base URL of the Azure Key Vault. e.g.https://myakv.vault.azure.netType: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | credential | The credential reference containing authentication information. | CredentialReference |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'AzureMariaDB' (required) |
// | typeProperties | Azure Database for MariaDB linked service properties. | AzureMariaDBLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | connectionString | An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function. |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | pwd | The Azure key vault secret reference of password in connection string. | AzureKeyVaultSecretReference |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'AzureML' (required) |
// | typeProperties | Azure ML Studio Web Service linked service properties. | AzureMLLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | apiKey | The API key for accessing the Azure ML model endpoint. | SecretBase(required) |
// | authentication | Type of authentication (Required to specify MSI) used to connect to AzureML. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | mlEndpoint | The Batch Execution REST URL for an Azure ML Studio Web Service endpoint. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | servicePrincipalId | The ID of the service principal used to authenticate against the ARM-based updateResourceEndpoint of an Azure ML Studio web service. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | servicePrincipalKey | The key of the service principal used to authenticate against the ARM-based updateResourceEndpoint of an Azure ML Studio web service. | SecretBase |
// | tenant | The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | updateResourceEndpoint | The Update Resource REST URL for an Azure ML Studio Web Service endpoint. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'AzureMLService' (required) |
// | typeProperties | Azure ML Service linked service properties. | AzureMLServiceLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | mlWorkspaceName | Azure ML Service workspace name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | resourceGroupName | Azure ML Service workspace resource group name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | servicePrincipalId | The ID of the service principal used to authenticate against the endpoint of a published Azure ML Service pipeline. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | servicePrincipalKey | The key of the service principal used to authenticate against the endpoint of a published Azure ML Service pipeline. | SecretBase |
// | subscriptionId | Azure ML Service workspace subscription ID. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | tenant | The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'AzureMySql' (required) |
// | typeProperties | Azure MySQL database linked service properties. | AzureMySqlLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | connectionString | The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function.(required) |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | password | The Azure key vault secret reference of password in connection string. | AzureKeyVaultSecretReference |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'AzurePostgreSql' (required) |
// | typeProperties | Azure PostgreSQL linked service properties. | AzurePostgreSqlLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | connectionString | An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function. |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | password | The Azure key vault secret reference of password in connection string. | AzureKeyVaultSecretReference |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'AzureSearch' (required) |
// | typeProperties | Windows Azure Search Service linked service properties. | AzureSearchLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | key | Admin Key for Azure Search service | SecretBase |
// | url | URL for Azure Search service. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'AzureSqlDatabase' (required) |
// | typeProperties | Azure SQL Database linked service properties. | AzureSqlDatabaseLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | alwaysEncryptedSettings | Sql always encrypted properties. | SqlAlwaysEncryptedProperties |
// | azureCloudType | Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regionsâ cloud type. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | connectionString | The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function.(required) |
// | credential | The credential reference containing authentication information. | CredentialReference |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | password | The Azure key vault secret reference of password in connection string. | AzureKeyVaultSecretReference |
// | servicePrincipalId | The ID of the service principal used to authenticate against Azure SQL Database. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | servicePrincipalKey | The key of the service principal used to authenticate against Azure SQL Database. | SecretBase |
// | tenant | The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'AzureSqlDW' (required) |
// | typeProperties | Azure SQL Data Warehouse linked service properties. | AzureSqlDWLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | azureCloudType | Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regionsâ cloud type. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | connectionString | The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function.(required) |
// | credential | The credential reference containing authentication information. | CredentialReference |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | password | The Azure key vault secret reference of password in connection string. | AzureKeyVaultSecretReference |
// | servicePrincipalId | The ID of the service principal used to authenticate against Azure SQL Data Warehouse. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | servicePrincipalKey | The key of the service principal used to authenticate against Azure SQL Data Warehouse. | SecretBase |
// | tenant | The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'AzureSqlMI' (required) |
// | typeProperties | Azure SQL Managed Instance linked service properties. | AzureSqlMILinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | alwaysEncryptedSettings | Sql always encrypted properties. | SqlAlwaysEncryptedProperties |
// | azureCloudType | Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regionsâ cloud type. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | connectionString | The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function.(required) |
// | credential | The credential reference containing authentication information. | CredentialReference |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | password | The Azure key vault secret reference of password in connection string. | AzureKeyVaultSecretReference |
// | servicePrincipalId | The ID of the service principal used to authenticate against Azure SQL Managed Instance. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | servicePrincipalKey | The key of the service principal used to authenticate against Azure SQL Managed Instance. | SecretBase |
// | tenant | The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'AzureStorage' (required) |
// | typeProperties | Azure Storage linked service properties. | AzureStorageLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | accountKey | The Azure key vault secret reference of accountKey in connection string. | AzureKeyVaultSecretReference |
// | connectionString | The connection string. It is mutually exclusive with sasUri property. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function. |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | string |
// | sasToken | The Azure key vault secret reference of sasToken in sas uri. | AzureKeyVaultSecretReference |
// | sasUri | SAS URI of the Azure Storage resource. It is mutually exclusive with connectionString property. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'AzureSynapseArtifacts' (required) |
// | typeProperties | Azure Synapse Analytics (Artifacts) linked service properties. | AzureSynapseArtifactsLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | authentication | Required to specify MSI, if using system assigned managed identity as authentication method. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | endpoint | https://{workspacename}.dev.azuresynapse.net, Azure Synapse Analytics workspace URL. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | workspaceResourceId | The resource ID of the Synapse workspace. The format should be: /subscriptions/{subscriptionID}/resourceGroups/{resourceGroup}/providers/Microsoft.Synapse/workspaces/{workspaceName}. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'AzureTableStorage' (required) |
// | typeProperties | Azure Table Storage linked service properties. | AzureStorageLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'Cassandra' (required) |
// | typeProperties | Cassandra linked service properties. | CassandraLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | authenticationType | AuthenticationType to be used for connection. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | host | Host name for connection. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | password | Password for authentication. | SecretBase |
// | port | The port for the connection. Type: integer (or Expression with resultType integer). | For Bicep, you can use theany()function. |
// | username | Username for authentication. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'CommonDataServiceForApps' (required) |
// | typeProperties | Common Data Service for Apps linked service properties. | CommonDataServiceForAppsLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | authenticationType | The authentication type to connect to Common Data Service for Apps server. 'Office365' for online scenario, 'Ifd' for on-premises with Ifd scenario. 'AADServicePrincipal' for Server-To-Server authentication in online scenario. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | deploymentType | The deployment type of the Common Data Service for Apps instance. 'Online' for Common Data Service for Apps Online and 'OnPremisesWithIfd' for Common Data Service for Apps on-premises with Ifd. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | hostName | The host name of the on-premises Common Data Service for Apps server. The property is required for on-prem and not allowed for online. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | organizationName | The organization name of the Common Data Service for Apps instance. The property is required for on-prem and required for online when there are more than one Common Data Service for Apps instances associated with the user. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | password | Password to access the Common Data Service for Apps instance. | SecretBase |
// | port | The port of on-premises Common Data Service for Apps server. The property is required for on-prem and not allowed for online. Default is 443. Type: integer (or Expression with resultType integer), minimum: 0. | For Bicep, you can use theany()function. |
// | servicePrincipalCredential | The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference. | SecretBase |
// | servicePrincipalCredentialType | The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | servicePrincipalId | The client ID of the application in Azure Active Directory used for Server-To-Server authentication. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | serviceUri | The URL to the Microsoft Common Data Service for Apps server. The property is required for on-line and not allowed for on-prem. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | username | User name to access the Common Data Service for Apps instance. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'Concur' (required) |
// | typeProperties | Concur Service linked service properties. | ConcurLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | clientId | Application client_id supplied by Concur App Management. | For Bicep, you can use theany()function.(required) |
// | connectionProperties | Properties used to connect to Concur. It is mutually exclusive with any other properties in the linked service. Type: object. | For Bicep, you can use theany()function. |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | password | The password corresponding to the user name that you provided in the username field. | SecretBase |
// | useEncryptedEndpoints | Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. | For Bicep, you can use theany()function. |
// | useHostVerification | Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. | For Bicep, you can use theany()function. |
// | usePeerVerification | Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. | For Bicep, you can use theany()function. |
// | username | The user name that you use to access Concur Service. | For Bicep, you can use theany()function.(required) |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'CosmosDb' (required) |
// | typeProperties | CosmosDB linked service properties. | CosmosDbLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | accountEndpoint | The endpoint of the Azure CosmosDB account. Type: string (or Expression with resultType string) | For Bicep, you can use theany()function. |
// | accountKey | The account key of the Azure CosmosDB account. Type: SecureString or AzureKeyVaultSecretReference. | SecretBase |
// | azureCloudType | Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regionsâ cloud type. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | connectionMode | The connection mode used to access CosmosDB account. Type: string (or Expression with resultType string). | 'Direct''Gateway' |
// | connectionString | The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function. |
// | credential | The credential reference containing authentication information. | CredentialReference |
// | database | The name of the database. Type: string (or Expression with resultType string) | For Bicep, you can use theany()function. |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | servicePrincipalCredential | The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference. | SecretBase |
// | servicePrincipalCredentialType | The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string). | 'ServicePrincipalCert''ServicePrincipalKey' |
// | servicePrincipalId | The client ID of the application in Azure Active Directory used for Server-To-Server authentication. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | tenant | The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'CosmosDbMongoDbApi' (required) |
// | typeProperties | CosmosDB (MongoDB API) linked service properties. | CosmosDbMongoDbApiLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | connectionString | The CosmosDB (MongoDB API) connection string. Type: string, SecureString or AzureKeyVaultSecretReference. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function.(required) |
// | database | The name of the CosmosDB (MongoDB API) database that you want to access. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | isServerVersionAbove32 | Whether the CosmosDB (MongoDB API) server version is higher than 3.2. The default value is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'Couchbase' (required) |
// | typeProperties | Couchbase server linked service properties. | CouchbaseLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | connectionString | An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function. |
// | credString | The Azure key vault secret reference of credString in connection string. | AzureKeyVaultSecretReference |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'CustomDataSource' (required) |
// | typeProperties | Custom linked service properties. | For Bicep, you can use theany()function.(required) |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'Dataworld' (required) |
// | typeProperties | Dataworld linked service properties. | DataworldLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | apiToken | The api token for the Dataworld source. | SecretBase(required) |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'Db2' (required) |
// | typeProperties | DB2 linked service properties. | Db2LinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | authenticationType | AuthenticationType to be used for connection. It is mutually exclusive with connectionString property. | 'Basic' |
// | certificateCommonName | Certificate Common Name when TLS is enabled. It is mutually exclusive with connectionString property. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | connectionString | The connection string. It is mutually exclusive with server, database, authenticationType, userName, packageCollection and certificateCommonName property. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function. |
// | database | Database name for connection. It is mutually exclusive with connectionString property. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. It is mutually exclusive with connectionString property. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | packageCollection | Under where packages are created when querying database. It is mutually exclusive with connectionString property. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | password | Password for authentication. | SecretBase |
// | server | Server name for connection. It is mutually exclusive with connectionString property. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | username | Username for authentication. It is mutually exclusive with connectionString property. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'Drill' (required) |
// | typeProperties | Drill server linked service properties. | DrillLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | connectionString | An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function. |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | pwd | The Azure key vault secret reference of password in connection string. | AzureKeyVaultSecretReference |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'Dynamics' (required) |
// | typeProperties | Dynamics linked service properties. | DynamicsLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | authenticationType | The authentication type to connect to Dynamics server. 'Office365' for online scenario, 'Ifd' for on-premises with Ifd scenario, 'AADServicePrincipal' for Server-To-Server authentication in online scenario. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | credential | The credential reference containing authentication information. | CredentialReference |
// | deploymentType | The deployment type of the Dynamics instance. 'Online' for Dynamics Online and 'OnPremisesWithIfd' for Dynamics on-premises with Ifd. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | hostName | The host name of the on-premises Dynamics server. The property is required for on-prem and not allowed for online. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | organizationName | The organization name of the Dynamics instance. The property is required for on-prem and required for online when there are more than one Dynamics instances associated with the user. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | password | Password to access the Dynamics instance. | SecretBase |
// | port | The port of on-premises Dynamics server. The property is required for on-prem and not allowed for online. Default is 443. Type: integer (or Expression with resultType integer), minimum: 0. | For Bicep, you can use theany()function. |
// | servicePrincipalCredential | The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference. | SecretBase |
// | servicePrincipalCredentialType | The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | servicePrincipalId | The client ID of the application in Azure Active Directory used for Server-To-Server authentication. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | serviceUri | The URL to the Microsoft Dynamics server. The property is required for on-line and not allowed for on-prem. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | username | User name to access the Dynamics instance. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'DynamicsAX' (required) |
// | typeProperties | Dynamics AX linked service properties. | DynamicsAXLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | aadResourceId | Specify the resource you are requesting authorization. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | servicePrincipalId | Specify the application's client ID. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | servicePrincipalKey | Specify the application's key. Mark this field as a SecureString to store it securely in Data Factory, or reference a secret stored in Azure Key Vault. Type: string (or Expression with resultType string). | SecretBase(required) |
// | tenant | Specify the tenant information (domain name or tenant ID) under which your application resides. Retrieve it by hovering the mouse in the top-right corner of the Azure portal. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | url | The Dynamics AX (or Dynamics 365 Finance and Operations) instance OData endpoint. | For Bicep, you can use theany()function.(required) |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'DynamicsCrm' (required) |
// | typeProperties | Dynamics CRM linked service properties. | DynamicsCrmLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | authenticationType | The authentication type to connect to Dynamics CRM server. 'Office365' for online scenario, 'Ifd' for on-premises with Ifd scenario, 'AADServicePrincipal' for Server-To-Server authentication in online scenario. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | deploymentType | The deployment type of the Dynamics CRM instance. 'Online' for Dynamics CRM Online and 'OnPremisesWithIfd' for Dynamics CRM on-premises with Ifd. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | hostName | The host name of the on-premises Dynamics CRM server. The property is required for on-prem and not allowed for online. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | organizationName | The organization name of the Dynamics CRM instance. The property is required for on-prem and required for online when there are more than one Dynamics CRM instances associated with the user. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | password | Password to access the Dynamics CRM instance. | SecretBase |
// | port | The port of on-premises Dynamics CRM server. The property is required for on-prem and not allowed for online. Default is 443. Type: integer (or Expression with resultType integer), minimum: 0. | For Bicep, you can use theany()function. |
// | servicePrincipalCredential | The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference. | SecretBase |
// | servicePrincipalCredentialType | The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | servicePrincipalId | The client ID of the application in Azure Active Directory used for Server-To-Server authentication. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | serviceUri | The URL to the Microsoft Dynamics CRM server. The property is required for on-line and not allowed for on-prem. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | username | User name to access the Dynamics CRM instance. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'Eloqua' (required) |
// | typeProperties | Eloqua server linked service properties. | EloquaLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | endpoint | The endpoint of the Eloqua server. (i.e. eloqua.example.com) | For Bicep, you can use theany()function.(required) |
// | password | The password corresponding to the user name. | SecretBase |
// | useEncryptedEndpoints | Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. | For Bicep, you can use theany()function. |
// | useHostVerification | Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. | For Bicep, you can use theany()function. |
// | usePeerVerification | Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. | For Bicep, you can use theany()function. |
// | username | The site name and user name of your Eloqua account in the form: sitename/username. (i.e. Eloqua/Alice) | For Bicep, you can use theany()function.(required) |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'FileServer' (required) |
// | typeProperties | File system linked service properties. | FileServerLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | host | Host name of the server. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | password | Password to logon the server. | SecretBase |
// | userId | User ID to logon the server. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'FtpServer' (required) |
// | typeProperties | Properties specific to this linked service type. | FtpServerLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | authenticationType | The authentication type to be used to connect to the FTP server. | 'Anonymous''Basic' |
// | enableServerCertificateValidation | If true, validate the FTP server SSL certificate when connect over SSL/TLS channel. Default value is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
// | enableSsl | If true, connect to the FTP server over SSL/TLS channel. Default value is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | host | Host name of the FTP server. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | password | Password to logon the FTP server. | SecretBase |
// | port | The TCP port number that the FTP server uses to listen for client connections. Default value is 21. Type: integer (or Expression with resultType integer), minimum: 0. | For Bicep, you can use theany()function. |
// | userName | Username to logon the FTP server. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'GoogleAdWords' (required) |
// | typeProperties | Google AdWords service linked service properties. | GoogleAdWordsLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | authenticationType | The OAuth 2.0 authentication mechanism used for authentication. ServiceAuthentication can only be used on self-hosted IR. | 'ServiceAuthentication''UserAuthentication' |
// | clientCustomerID | The Client customer ID of the AdWords account that you want to fetch report data for. | For Bicep, you can use theany()function. |
// | clientId | The client id of the google application used to acquire the refresh token. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | clientSecret | The client secret of the google application used to acquire the refresh token. | SecretBase |
// | connectionProperties | Properties used to connect to GoogleAds. It is mutually exclusive with any other properties in the linked service. Type: object. | For Bicep, you can use theany()function. |
// | developerToken | The developer token associated with the manager account that you use to grant access to the AdWords API. | SecretBase |
// | email | The service account email ID that is used for ServiceAuthentication and can only be used on self-hosted IR. | For Bicep, you can use theany()function. |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | keyFilePath | The full path to the .p12 key file that is used to authenticate the service account email address and can only be used on self-hosted IR. | For Bicep, you can use theany()function. |
// | refreshToken | The refresh token obtained from Google for authorizing access to AdWords for UserAuthentication. | SecretBase |
// | trustedCertPath | The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. | For Bicep, you can use theany()function. |
// | useSystemTrustStore | Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false. | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'GoogleBigQuery' (required) |
// | typeProperties | Google BigQuery service linked service properties. | GoogleBigQueryLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | additionalProjects | A comma-separated list of public BigQuery projects to access. | For Bicep, you can use theany()function. |
// | authenticationType | The OAuth 2.0 authentication mechanism used for authentication. ServiceAuthentication can only be used on self-hosted IR. | 'ServiceAuthentication''UserAuthentication' (required) |
// | clientId | The client id of the google application used to acquire the refresh token. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | clientSecret | The client secret of the google application used to acquire the refresh token. | SecretBase |
// | email | The service account email ID that is used for ServiceAuthentication and can only be used on self-hosted IR. | For Bicep, you can use theany()function. |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | keyFilePath | The full path to the .p12 key file that is used to authenticate the service account email address and can only be used on self-hosted IR. | For Bicep, you can use theany()function. |
// | project | The default BigQuery project to query against. | For Bicep, you can use theany()function.(required) |
// | refreshToken | The refresh token obtained from Google for authorizing access to BigQuery for UserAuthentication. | SecretBase |
// | requestGoogleDriveScope | Whether to request access to Google Drive. Allowing Google Drive access enables support for federated tables that combine BigQuery data with data from Google Drive. The default value is false. | For Bicep, you can use theany()function. |
// | trustedCertPath | The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. | For Bicep, you can use theany()function. |
// | useSystemTrustStore | Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false. | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'GoogleCloudStorage' (required) |
// | typeProperties | Google Cloud Storage linked service properties. | GoogleCloudStorageLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | accessKeyId | The access key identifier of the Google Cloud Storage Identity and Access Management (IAM) user. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | secretAccessKey | The secret access key of the Google Cloud Storage Identity and Access Management (IAM) user. | SecretBase |
// | serviceUrl | This value specifies the endpoint to access with the Google Cloud Storage Connector. This is an optional property; change it only if you want to try a different service endpoint or want to switch between https and http. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'GoogleSheets' (required) |
// | typeProperties | GoogleSheets linked service properties. | GoogleSheetsLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | apiToken | The api token for the GoogleSheets source. | SecretBase(required) |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'Greenplum' (required) |
// | typeProperties | Greenplum Database linked service properties. | GreenplumLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | connectionString | An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function. |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | pwd | The Azure key vault secret reference of password in connection string. | AzureKeyVaultSecretReference |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'HBase' (required) |
// | typeProperties | HBase server linked service properties. | HBaseLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | allowHostNameCNMismatch | Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false. | For Bicep, you can use theany()function. |
// | allowSelfSignedServerCert | Specifies whether to allow self-signed certificates from the server. The default value is false. | For Bicep, you can use theany()function. |
// | authenticationType | The authentication mechanism to use to connect to the HBase server. | 'Anonymous''Basic' (required) |
// | enableSsl | Specifies whether the connections to the server are encrypted using SSL. The default value is false. | For Bicep, you can use theany()function. |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | host | The IP address or host name of the HBase server. (i.e. 192.168.222.160) | For Bicep, you can use theany()function.(required) |
// | httpPath | The partial URL corresponding to the HBase server. (i.e. /gateway/sandbox/hbase/version) | For Bicep, you can use theany()function. |
// | password | The password corresponding to the user name. | SecretBase |
// | port | The TCP port that the HBase instance uses to listen for client connections. The default value is 9090. | For Bicep, you can use theany()function. |
// | trustedCertPath | The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. | For Bicep, you can use theany()function. |
// | username | The user name used to connect to the HBase instance. | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'Hdfs' (required) |
// | typeProperties | HDFS linked service properties. | HdfsLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | authenticationType | Type of authentication used to connect to the HDFS. Possible values are: Anonymous and Windows. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | password | Password for Windows authentication. | SecretBase |
// | url | The URL of the HDFS service endpoint, e.g.http://myhostname:50070/webhdfs/v1. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | userName | User name for Windows authentication. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'HDInsight' (required) |
// | typeProperties | HDInsight linked service properties. | HDInsightLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | clusterUri | HDInsight cluster URI. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | fileSystem | Specify the FileSystem if the main storage for the HDInsight is ADLS Gen2. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | hcatalogLinkedServiceName | A reference to the Azure SQL linked service that points to the HCatalog database. | LinkedServiceReference |
// | isEspEnabled | Specify if the HDInsight is created with ESP (Enterprise Security Package). Type: Boolean. | For Bicep, you can use theany()function. |
// | linkedServiceName | The Azure Storage linked service reference. | LinkedServiceReference |
// | password | HDInsight cluster password. | SecretBase |
// | userName | HDInsight cluster user name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'HDInsightOnDemand' (required) |
// | typeProperties | HDInsight ondemand linked service properties. | HDInsightOnDemandLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | additionalLinkedServiceNames | Specifies additional storage accounts for the HDInsight linked service so that the Data Factory service can register them on your behalf. | LinkedServiceReference[] |
// | clusterNamePrefix | The prefix of cluster name, postfix will be distinct with timestamp. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | clusterPassword | The password to access the cluster. | SecretBase |
// | clusterResourceGroup | The resource group where the cluster belongs. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | clusterSize | Number of worker/data nodes in the cluster. Suggestion value: 4. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | clusterSshPassword | The password to SSH remotely connect clusterâs node (for Linux). | SecretBase |
// | clusterSshUserName | The username to SSH remotely connect to clusterâs node (for Linux). Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | clusterType | The cluster type. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | clusterUserName | The username to access the cluster. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | coreConfiguration | Specifies the core configuration parameters (as in core-site.xml) for the HDInsight cluster to be created. | For Bicep, you can use theany()function. |
// | credential | The credential reference containing authentication information. | CredentialReference |
// | dataNodeSize | Specifies the size of the data node for the HDInsight cluster. | For Bicep, you can use theany()function. |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | hBaseConfiguration | Specifies the HBase configuration parameters (hbase-site.xml) for the HDInsight cluster. | For Bicep, you can use theany()function. |
// | hcatalogLinkedServiceName | The name of Azure SQL linked service that point to the HCatalog database. The on-demand HDInsight cluster is created by using the Azure SQL database as the metastore. | LinkedServiceReference |
// | hdfsConfiguration | Specifies the HDFS configuration parameters (hdfs-site.xml) for the HDInsight cluster. | For Bicep, you can use theany()function. |
// | headNodeSize | Specifies the size of the head node for the HDInsight cluster. | For Bicep, you can use theany()function. |
// | hiveConfiguration | Specifies the hive configuration parameters (hive-site.xml) for the HDInsight cluster. | For Bicep, you can use theany()function. |
// | hostSubscriptionId | The customerâs subscription to host the cluster. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | linkedServiceName | Azure Storage linked service to be used by the on-demand cluster for storing and processing data. | LinkedServiceReference(required) |
// | mapReduceConfiguration | Specifies the MapReduce configuration parameters (mapred-site.xml) for the HDInsight cluster. | For Bicep, you can use theany()function. |
// | oozieConfiguration | Specifies the Oozie configuration parameters (oozie-site.xml) for the HDInsight cluster. | For Bicep, you can use theany()function. |
// | scriptActions | Custom script actions to run on HDI ondemand cluster once it's up. Please refer to /azure/hdinsight/hdinsight-hadoop-customize-cluster-linux?toc=%2Fen-us%2Fazure%2Fhdinsight%2Fr-server%2FTOC.json&bc=%2Fen-us%2Fazure%2Fbread%2Ftoc.json#understanding-script-actions. | ScriptAction[] |
// | servicePrincipalId | The service principal id for the hostSubscriptionId. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | servicePrincipalKey | The key for the service principal id. | SecretBase |
// | sparkVersion | The version of spark if the cluster type is 'spark'. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | stormConfiguration | Specifies the Storm configuration parameters (storm-site.xml) for the HDInsight cluster. | For Bicep, you can use theany()function. |
// | subnetName | The ARM resource ID for the subnet in the vNet. If virtualNetworkId was specified, then this property is required. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | tenant | The Tenant id/name to which the service principal belongs. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | timeToLive | The allowed idle time for the on-demand HDInsight cluster. Specifies how long the on-demand HDInsight cluster stays alive after completion of an activity run if there are no other active jobs in the cluster. The minimum value is 5 mins. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | version | Version of the HDInsight cluster.Â  Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | virtualNetworkId | The ARM resource ID for the vNet to which the cluster should be joined after creation. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | yarnConfiguration | Specifies the Yarn configuration parameters (yarn-site.xml) for the HDInsight cluster. | For Bicep, you can use theany()function. |
// | zookeeperNodeSize | Specifies the size of the Zoo Keeper node for the HDInsight cluster. | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | name | The user provided name of the script action. | string (required) |
// | parameters | The parameters for the script action. | string |
// | roles | The node types on which the script action should be executed. | For Bicep, you can use theany()function.(required) |
// | uri | The URI for the script action. | string (required) |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'Hive' (required) |
// | typeProperties | Hive Server linked service properties. | HiveLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | allowHostNameCNMismatch | Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false. | For Bicep, you can use theany()function. |
// | allowSelfSignedServerCert | Specifies whether to allow self-signed certificates from the server. The default value is false. | For Bicep, you can use theany()function. |
// | authenticationType | The authentication method used to access the Hive server. | 'Anonymous''Username''UsernameAndPassword''WindowsAzureHDInsightService' (required) |
// | enableSsl | Specifies whether the connections to the server are encrypted using SSL. The default value is false. | For Bicep, you can use theany()function. |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | host | IP address or host name of the Hive server, separated by ';' for multiple hosts (only when serviceDiscoveryMode is enable). | For Bicep, you can use theany()function.(required) |
// | httpPath | The partial URL corresponding to the Hive server. | For Bicep, you can use theany()function. |
// | password | The password corresponding to the user name that you provided in the Username field | SecretBase |
// | port | The TCP port that the Hive server uses to listen for client connections. | For Bicep, you can use theany()function. |
// | serverType | The type of Hive server. | 'HiveServer1''HiveServer2''HiveThriftServer' |
// | serviceDiscoveryMode | true to indicate using the ZooKeeper service, false not. | For Bicep, you can use theany()function. |
// | thriftTransportProtocol | The transport protocol to use in the Thrift layer. | 'Binary''HTTP ''SASL' |
// | trustedCertPath | The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. | For Bicep, you can use theany()function. |
// | useNativeQuery | Specifies whether the driver uses native HiveQL queries,or converts them into an equivalent form in HiveQL. | For Bicep, you can use theany()function. |
// | username | The user name that you use to access Hive Server. | For Bicep, you can use theany()function. |
// | useSystemTrustStore | Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false. | For Bicep, you can use theany()function. |
// | zooKeeperNameSpace | The namespace on ZooKeeper under which Hive Server 2 nodes are added. | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'HttpServer' (required) |
// | typeProperties | Properties specific to this linked service type. | HttpLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | authenticationType | The authentication type to be used to connect to the HTTP server. | 'Anonymous''Basic''ClientCertificate''Digest''Windows' |
// | authHeaders | The additional HTTP headers in the request to RESTful API used for authorization. Type: object (or Expression with resultType object). | For Bicep, you can use theany()function. |
// | certThumbprint | Thumbprint of certificate for ClientCertificate authentication. Only valid for on-premises copy. For on-premises copy with ClientCertificate authentication, either CertThumbprint or EmbeddedCertData/Password should be specified. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | embeddedCertData | Base64 encoded certificate data for ClientCertificate authentication. For on-premises copy with ClientCertificate authentication, either CertThumbprint or EmbeddedCertData/Password should be specified. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | enableServerCertificateValidation | If true, validate the HTTPS server SSL certificate. Default value is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | password | Password for Basic, Digest, Windows, or ClientCertificate with EmbeddedCertData authentication. | SecretBase |
// | url | The base URL of the HTTP endpoint, e.g.https://www.microsoft.com. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | userName | User name for Basic, Digest, or Windows authentication. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'Hubspot' (required) |
// | typeProperties | Hubspot Service linked service properties. | HubspotLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | accessToken | The access token obtained when initiallyÂ authenticatingÂ yourÂ OAuth integration. | SecretBase |
// | clientId | The client ID associated with your Hubspot application. | For Bicep, you can use theany()function.(required) |
// | clientSecret | The client secret associated with your Hubspot application. | SecretBase |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | refreshToken | The refresh token obtained when initiallyÂ authenticatingÂ yourÂ OAuth integration. | SecretBase |
// | useEncryptedEndpoints | Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. | For Bicep, you can use theany()function. |
// | useHostVerification | Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. | For Bicep, you can use theany()function. |
// | usePeerVerification | Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'Impala' (required) |
// | typeProperties | Impala server linked service properties. | ImpalaLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | allowHostNameCNMismatch | Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false. | For Bicep, you can use theany()function. |
// | allowSelfSignedServerCert | Specifies whether to allow self-signed certificates from the server. The default value is false. | For Bicep, you can use theany()function. |
// | authenticationType | The authentication type to use. | 'Anonymous''SASLUsername''UsernameAndPassword' (required) |
// | enableSsl | Specifies whether the connections to the server are encrypted using SSL. The default value is false. | For Bicep, you can use theany()function. |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | host | The IP address or host name of the Impala server. (i.e. 192.168.222.160) | For Bicep, you can use theany()function.(required) |
// | password | The password corresponding to the user name when using UsernameAndPassword. | SecretBase |
// | port | The TCP port that the Impala server uses to listen for client connections. The default value is 21050. | For Bicep, you can use theany()function. |
// | trustedCertPath | The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. | For Bicep, you can use theany()function. |
// | username | The user name used to access the Impala server. The default value is anonymous when using SASLUsername. | For Bicep, you can use theany()function. |
// | useSystemTrustStore | Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false. | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'Informix' (required) |
// | typeProperties | Informix linked service properties. | InformixLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | authenticationType | Type of authentication used to connect to the Informix as ODBC data store. Possible values are: Anonymous and Basic. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | connectionString | The non-access credential portion of the connection string as well as an optional encrypted credential. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function.(required) |
// | credential | The access credential portion of the connection string specified in driver-specific property-value format. | SecretBase |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | password | Password for Basic authentication. | SecretBase |
// | userName | User name for Basic authentication. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'Jira' (required) |
// | typeProperties | Jira Service linked service properties. | JiraLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | host | The IP address or host name of the Jira service. (e.g. jira.example.com) | For Bicep, you can use theany()function.(required) |
// | password | The password corresponding to the user name that you provided in the username field. | SecretBase |
// | port | The TCP port that the Jira server uses to listen for client connections. The default value is 443 if connecting through HTTPS, or 8080 if connecting through HTTP. | For Bicep, you can use theany()function. |
// | useEncryptedEndpoints | Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. | For Bicep, you can use theany()function. |
// | useHostVerification | Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. | For Bicep, you can use theany()function. |
// | usePeerVerification | Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. | For Bicep, you can use theany()function. |
// | username | The user name that you use to access Jira Service. | For Bicep, you can use theany()function.(required) |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'Magento' (required) |
// | typeProperties | Magento server linked service properties. | MagentoLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | accessToken | The access token from Magento. | SecretBase |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | host | The URL of the Magento instance. (i.e. 192.168.222.110/magento3) | For Bicep, you can use theany()function.(required) |
// | useEncryptedEndpoints | Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. | For Bicep, you can use theany()function. |
// | useHostVerification | Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. | For Bicep, you can use theany()function. |
// | usePeerVerification | Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'MariaDB' (required) |
// | typeProperties | MariaDB server linked service properties. | MariaDBLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | connectionString | An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function. |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | pwd | The Azure key vault secret reference of password in connection string. | AzureKeyVaultSecretReference |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'Marketo' (required) |
// | typeProperties | Marketo server linked service properties. | MarketoLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | clientId | The client Id of your Marketo service. | For Bicep, you can use theany()function.(required) |
// | clientSecret | The client secret of your Marketo service. | SecretBase |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | endpoint | The endpoint of the Marketo server. (i.e. 123-ABC-321.mktorest.com) | For Bicep, you can use theany()function.(required) |
// | useEncryptedEndpoints | Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. | For Bicep, you can use theany()function. |
// | useHostVerification | Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. | For Bicep, you can use theany()function. |
// | usePeerVerification | Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'MicrosoftAccess' (required) |
// | typeProperties | Microsoft Access linked service properties. | MicrosoftAccessLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | authenticationType | Type of authentication used to connect to the Microsoft Access as ODBC data store. Possible values are: Anonymous and Basic. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | connectionString | The non-access credential portion of the connection string as well as an optional encrypted credential. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function.(required) |
// | credential | The access credential portion of the connection string specified in driver-specific property-value format. | SecretBase |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | password | Password for Basic authentication. | SecretBase |
// | userName | User name for Basic authentication. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'MongoDb' (required) |
// | typeProperties | MongoDB linked service properties. | MongoDbLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | allowSelfSignedServerCert | Specifies whether to allow self-signed certificates from the server. The default value is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
// | authenticationType | The authentication type to be used to connect to the MongoDB database. | 'Anonymous''Basic' |
// | authSource | Database to verify the username and password. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | databaseName | The name of the MongoDB database that you want to access. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | enableSsl | Specifies whether the connections to the server are encrypted using SSL. The default value is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | password | Password for authentication. | SecretBase |
// | port | The TCP port number that the MongoDB server uses to listen for client connections. The default value is 27017. Type: integer (or Expression with resultType integer), minimum: 0. | For Bicep, you can use theany()function. |
// | server | The IP address or server name of the MongoDB server. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | username | Username for authentication. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'MongoDbAtlas' (required) |
// | typeProperties | MongoDB Atlas linked service properties. | MongoDbAtlasLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | connectionString | The MongoDB Atlas connection string. Type: string, SecureString or AzureKeyVaultSecretReference. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function.(required) |
// | database | The name of the MongoDB Atlas database that you want to access. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'MongoDbV2' (required) |
// | typeProperties | MongoDB linked service properties. | MongoDbV2LinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | connectionString | The MongoDB connection string. Type: string, SecureString or AzureKeyVaultSecretReference. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function.(required) |
// | database | The name of the MongoDB database that you want to access. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'MySql' (required) |
// | typeProperties | MySQL linked service properties. | MySqlLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | connectionString | The connection string. | For Bicep, you can use theany()function.(required) |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | password | The Azure key vault secret reference of password in connection string. | AzureKeyVaultSecretReference |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'Netezza' (required) |
// | typeProperties | Netezza linked service properties. | NetezzaLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | connectionString | An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function. |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | pwd | The Azure key vault secret reference of password in connection string. | AzureKeyVaultSecretReference |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'OData' (required) |
// | typeProperties | OData linked service properties. | ODataLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | aadResourceId | Specify the resource you are requesting authorization to use Directory. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | aadServicePrincipalCredentialType | Specify the credential type (key or cert) is used for service principal. | 'ServicePrincipalCert''ServicePrincipalKey' |
// | authenticationType | Type of authentication used to connect to the OData service. | 'AadServicePrincipal''Anonymous''Basic''ManagedServiceIdentity''Windows' |
// | authHeaders | The additional HTTP headers in the request to RESTful API used for authorization. Type: object (or Expression with resultType object). | For Bicep, you can use theany()function. |
// | azureCloudType | Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regionsâ cloud type. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | password | Password of the OData service. | SecretBase |
// | servicePrincipalEmbeddedCert | Specify the base64 encoded certificate of your application registered in Azure Active Directory. Type: string (or Expression with resultType string). | SecretBase |
// | servicePrincipalEmbeddedCertPassword | Specify the password of your certificate if your certificate has a password and you are using AadServicePrincipal authentication. Type: string (or Expression with resultType string). | SecretBase |
// | servicePrincipalId | Specify the application id of your application registered in Azure Active Directory. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | servicePrincipalKey | Specify the secret of your application registered in Azure Active Directory. Type: string (or Expression with resultType string). | SecretBase |
// | tenant | Specify the tenant information (domain name or tenant ID) under which your application resides. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | url | The URL of the OData service endpoint. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | userName | User name of the OData service. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'Odbc' (required) |
// | typeProperties | ODBC linked service properties. | OdbcLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | authenticationType | Type of authentication used to connect to the ODBC data store. Possible values are: Anonymous and Basic. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | connectionString | The non-access credential portion of the connection string as well as an optional encrypted credential. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function.(required) |
// | credential | The access credential portion of the connection string specified in driver-specific property-value format. | SecretBase |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | password | Password for Basic authentication. | SecretBase |
// | userName | User name for Basic authentication. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'Office365' (required) |
// | typeProperties | Office365 linked service properties. | Office365LinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | office365TenantId | Azure tenant ID to which the Office 365 account belongs. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | servicePrincipalId | Specify the application's client ID. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | servicePrincipalKey | Specify the application's key. | SecretBase(required) |
// | servicePrincipalTenantId | Specify the tenant information under which your Azure AD web application resides. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'Oracle' (required) |
// | typeProperties | Oracle database linked service properties. | OracleLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | connectionString | The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function.(required) |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | password | The Azure key vault secret reference of password in connection string. | AzureKeyVaultSecretReference |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'OracleCloudStorage' (required) |
// | typeProperties | Oracle Cloud Storage linked service properties. | OracleCloudStorageLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | accessKeyId | The access key identifier of the Oracle Cloud Storage Identity and Access Management (IAM) user. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | secretAccessKey | The secret access key of the Oracle Cloud Storage Identity and Access Management (IAM) user. | SecretBase |
// | serviceUrl | This value specifies the endpoint to access with the Oracle Cloud Storage Connector. This is an optional property; change it only if you want to try a different service endpoint or want to switch between https and http. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'OracleServiceCloud' (required) |
// | typeProperties | Oracle Service Cloud linked service properties. | OracleServiceCloudLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | host | The URL of the Oracle Service Cloud instance. | For Bicep, you can use theany()function.(required) |
// | password | The password corresponding to the user name that you provided in the username key. | SecretBase(required) |
// | useEncryptedEndpoints | Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
// | useHostVerification | Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
// | usePeerVerification | Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
// | username | The user name that you use to access Oracle Service Cloud server. | For Bicep, you can use theany()function.(required) |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'Paypal' (required) |
// | typeProperties | Paypal Service linked service properties. | PaypalLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | clientId | The client ID associated with your PayPal application. | For Bicep, you can use theany()function.(required) |
// | clientSecret | The client secret associated with your PayPal application. | SecretBase |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | host | The URLÂ of the PayPal instance. (i.e. api.sandbox.paypal.com) | For Bicep, you can use theany()function.(required) |
// | useEncryptedEndpoints | Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. | For Bicep, you can use theany()function. |
// | useHostVerification | Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. | For Bicep, you can use theany()function. |
// | usePeerVerification | Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'Phoenix' (required) |
// | typeProperties | Phoenix server linked service properties. | PhoenixLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | allowHostNameCNMismatch | Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false. | For Bicep, you can use theany()function. |
// | allowSelfSignedServerCert | Specifies whether to allow self-signed certificates from the server. The default value is false. | For Bicep, you can use theany()function. |
// | authenticationType | The authentication mechanism used to connect to the Phoenix server. | 'Anonymous''UsernameAndPassword''WindowsAzureHDInsightService' (required) |
// | enableSsl | Specifies whether the connections to the server are encrypted using SSL. The default value is false. | For Bicep, you can use theany()function. |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | host | The IP address or host name of the Phoenix server. (i.e. 192.168.222.160) | For Bicep, you can use theany()function.(required) |
// | httpPath | The partial URL corresponding to the Phoenix server. (i.e. /gateway/sandbox/phoenix/version). The default value is hbasephoenix if using WindowsAzureHDInsightService. | For Bicep, you can use theany()function. |
// | password | The password corresponding to the user name. | SecretBase |
// | port | The TCP port that the Phoenix server uses to listen for client connections. The default value is 8765. | For Bicep, you can use theany()function. |
// | trustedCertPath | The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. | For Bicep, you can use theany()function. |
// | username | The user name used to connect to the Phoenix server. | For Bicep, you can use theany()function. |
// | useSystemTrustStore | Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false. | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'PostgreSql' (required) |
// | typeProperties | PostgreSQL linked service properties. | PostgreSqlLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | connectionString | The connection string. | For Bicep, you can use theany()function.(required) |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | password | The Azure key vault secret reference of password in connection string. | AzureKeyVaultSecretReference |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'Presto' (required) |
// | typeProperties | Presto server linked service properties. | PrestoLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | allowHostNameCNMismatch | Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false. | For Bicep, you can use theany()function. |
// | allowSelfSignedServerCert | Specifies whether to allow self-signed certificates from the server. The default value is false. | For Bicep, you can use theany()function. |
// | authenticationType | The authentication mechanism used to connect to the Presto server. | 'Anonymous''LDAP' (required) |
// | catalog | The catalog context for all request against the server. | For Bicep, you can use theany()function.(required) |
// | enableSsl | Specifies whether the connections to the server are encrypted using SSL. The default value is false. | For Bicep, you can use theany()function. |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | host | The IP address or host name of the Presto server. (i.e. 192.168.222.160) | For Bicep, you can use theany()function.(required) |
// | password | The password corresponding to the user name. | SecretBase |
// | port | The TCP port that the Presto server uses to listen for client connections. The default value is 8080. | For Bicep, you can use theany()function. |
// | serverVersion | The version of the Presto server. (i.e. 0.148-t) | For Bicep, you can use theany()function.(required) |
// | timeZoneID | The local time zone used by the connection. Valid values for this option are specified in the IANA Time Zone Database. The default value is the system time zone. | For Bicep, you can use theany()function. |
// | trustedCertPath | The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. | For Bicep, you can use theany()function. |
// | username | The user name used to connect to the Presto server. | For Bicep, you can use theany()function. |
// | useSystemTrustStore | Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false. | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'Quickbase' (required) |
// | typeProperties | Quickbase linked service properties. | QuickbaseLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | url | The url to connect Quickbase source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | userToken | The user token for the Quickbase source. | SecretBase(required) |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'QuickBooks' (required) |
// | typeProperties | QuickBooks server linked service properties. | QuickBooksLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | accessToken | The access token for OAuth 1.0 authentication. | SecretBase |
// | accessTokenSecret | The access token secret for OAuth 1.0 authentication. | SecretBase |
// | companyId | The company ID of the QuickBooks company to authorize. | For Bicep, you can use theany()function. |
// | connectionProperties | Properties used to connect to QuickBooks. It is mutually exclusive with any other properties in the linked service. Type: object. | For Bicep, you can use theany()function. |
// | consumerKey | The consumer key for OAuth 1.0 authentication. | For Bicep, you can use theany()function. |
// | consumerSecret | The consumer secret for OAuth 1.0 authentication. | SecretBase |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | endpoint | The endpoint of the QuickBooks server. (i.e. quickbooks.api.intuit.com) | For Bicep, you can use theany()function. |
// | useEncryptedEndpoints | Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'Responsys' (required) |
// | typeProperties | Responsys linked service properties. | ResponsysLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | clientId | The client ID associated with the Responsys application. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | clientSecret | The client secret associated with the Responsys application. Type: string (or Expression with resultType string). | SecretBase |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | endpoint | The endpoint of the Responsys server. | For Bicep, you can use theany()function.(required) |
// | useEncryptedEndpoints | Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
// | useHostVerification | Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
// | usePeerVerification | Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'RestService' (required) |
// | typeProperties | Rest Service linked service properties. | RestServiceLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | aadResourceId | The resource you are requesting authorization to use. | For Bicep, you can use theany()function. |
// | authenticationType | Type of authentication used to connect to the REST service. | 'AadServicePrincipal''Anonymous''Basic''ManagedServiceIdentity''OAuth2ClientCredential' (required) |
// | authHeaders | The additional HTTP headers in the request to RESTful API used for authorization. Type: object (or Expression with resultType object). | For Bicep, you can use theany()function. |
// | azureCloudType | Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regionsâ cloud type. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | clientId | The client ID associated with your application. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | clientSecret | The client secret associated with your application. | SecretBase |
// | credential | The credential reference containing authentication information. | CredentialReference |
// | enableServerCertificateValidation | Whether to validate server side SSL certificate when connecting to the endpoint.The default value is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | password | The password used in Basic authentication type. | SecretBase |
// | resource | The target service or resource to which the access will be requested. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | scope | The scope of the access required. It describes what kind of access will be requested. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | servicePrincipalId | The application's client ID used in AadServicePrincipal authentication type. | For Bicep, you can use theany()function. |
// | servicePrincipalKey | The application's key used in AadServicePrincipal authentication type. | SecretBase |
// | tenant | The tenant information (domain name or tenant ID) used in AadServicePrincipal authentication type under which your application resides. | For Bicep, you can use theany()function. |
// | tokenEndpoint | The token endpoint of the authorization server to acquire access token. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | url | The base URL of the REST service. | For Bicep, you can use theany()function.(required) |
// | userName | The user name used in Basic authentication type. | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'Salesforce' (required) |
// | typeProperties | Salesforce linked service properties. | SalesforceLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | apiVersion | The Salesforce API version used in ADF. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | environmentUrl | The URL of Salesforce instance. Default is 'https://login.salesforce.com'. To copy data from sandbox, specify 'https://test.salesforce.com'. To copy data from custom domain, specify, for example, 'https://[domain].my.salesforce.com'. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | password | The password for Basic authentication of the Salesforce instance. | SecretBase |
// | securityToken | The security token is optional to remotely access Salesforce instance. | SecretBase |
// | username | The username for Basic authentication of the Salesforce instance. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'SalesforceMarketingCloud' (required) |
// | typeProperties | Salesforce Marketing Cloud linked service properties. | SalesforceMarketingCloudLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | clientId | The client ID associated with the Salesforce Marketing Cloud application. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | clientSecret | The client secret associated with the Salesforce Marketing Cloud application. Type: string (or Expression with resultType string). | SecretBase |
// | connectionProperties | Properties used to connect to Salesforce Marketing Cloud. It is mutually exclusive with any other properties in the linked service. Type: object. | For Bicep, you can use theany()function. |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | useEncryptedEndpoints | Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
// | useHostVerification | Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
// | usePeerVerification | Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'SalesforceServiceCloud' (required) |
// | typeProperties | Salesforce Service Cloud linked service properties. | SalesforceServiceCloudLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | apiVersion | The Salesforce API version used in ADF. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | environmentUrl | The URL of Salesforce Service Cloud instance. Default is 'https://login.salesforce.com'. To copy data from sandbox, specify 'https://test.salesforce.com'. To copy data from custom domain, specify, for example, 'https://[domain].my.salesforce.com'. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | extendedProperties | Extended properties appended to the connection string. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | password | The password for Basic authentication of the Salesforce instance. | SecretBase |
// | securityToken | The security token is optional to remotely access Salesforce instance. | SecretBase |
// | username | The username for Basic authentication of the Salesforce instance. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'SapBW' (required) |
// | typeProperties | Properties specific to this linked service type. | SapBWLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | clientId | Client ID of the client on the BW system. (Usually a three-digit decimal number represented as a string) Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | password | Password to access the SAP BW server. | SecretBase |
// | server | Host name of the SAP BW instance. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | systemNumber | System number of the BW system. (Usually a two-digit decimal number represented as a string.) Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | userName | Username to access the SAP BW server. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'SapCloudForCustomer' (required) |
// | typeProperties | SAP Cloud for Customer linked service properties. | SapCloudForCustomerLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Either encryptedCredential or username/password must be provided. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | password | The password for Basic authentication. | SecretBase |
// | url | The URL of SAP Cloud for Customer OData API. For example, '[https://[tenantname].crm.ondemand.com/sap/c4c/odata/v1]'. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | username | The username for Basic authentication. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'SapEcc' (required) |
// | typeProperties | SAP ECC linked service properties. | SapEccLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Either encryptedCredential or username/password must be provided. Type: string (or Expression with resultType string). | string |
// | password | The password for Basic authentication. | SecretBase |
// | url | The URL of SAP ECC OData API. For example, '[https://hostname:port/sap/opu/odata/sap/servicename/]'. Type: string (or Expression with resultType string). | string (required) |
// | username | The username for Basic authentication. Type: string (or Expression with resultType string). | string |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'SapHana' (required) |
// | typeProperties | Properties specific to this linked service type. | SapHanaLinkedServiceProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | authenticationType | The authentication type to be used to connect to the SAP HANA server. | 'Basic''Windows' |
// | connectionString | SAP HANA ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function. |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | password | Password to access the SAP HANA server. | SecretBase |
// | server | Host name of the SAP HANA server. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | userName | Username to access the SAP HANA server. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'SapOdp' (required) |
// | typeProperties | Properties specific to SAP ODP linked service type. | SapOdpLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | clientId | Client ID of the client on the SAP system where the table is located. (Usually a three-digit decimal number represented as a string) Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | language | Language of the SAP system where the table is located. The default value is EN. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | logonGroup | The Logon Group for the SAP System. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | messageServer | The hostname of the SAP Message Server. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | messageServerService | The service name or port number of the Message Server. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | password | Password to access the SAP server where the table is located. | SecretBase |
// | server | Host name of the SAP instance where the table is located. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | sncLibraryPath | External security product's library to access the SAP server where the table is located. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | sncMode | SNC activation indicator to access the SAP server where the table is located. Must be either 0 (off) or 1 (on). Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | sncMyName | Initiator's SNC name to access the SAP server where the table is located. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | sncPartnerName | Communication partner's SNC name to access the SAP server where the table is located. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | sncQop | SNC Quality of Protection. Allowed value include: 1, 2, 3, 8, 9. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | subscriberName | The subscriber name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | systemId | SystemID of the SAP system where the table is located. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | systemNumber | System number of the SAP system where the table is located. (Usually a two-digit decimal number represented as a string.) Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | userName | Username to access the SAP server where the table is located. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | x509CertificatePath | SNC X509 certificate file path. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'SapOpenHub' (required) |
// | typeProperties | Properties specific to SAP Business Warehouse Open Hub Destination linked service type. | SapOpenHubLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | clientId | Client ID of the client on the BW system where the open hub destination is located. (Usually a three-digit decimal number represented as a string) Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | language | Language of the BW system where the open hub destination is located. The default value is EN. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | logonGroup | The Logon Group for the SAP System. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | messageServer | The hostname of the SAP Message Server. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | messageServerService | The service name or port number of the Message Server. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | password | Password to access the SAP BW server where the open hub destination is located. | SecretBase |
// | server | Host name of the SAP BW instance where the open hub destination is located. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | systemId | SystemID of the SAP system where the table is located. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | systemNumber | System number of the BW system where the open hub destination is located. (Usually a two-digit decimal number represented as a string.) Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | userName | Username to access the SAP BW server where the open hub destination is located. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'SapTable' (required) |
// | typeProperties | Properties specific to this linked service type. | SapTableLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | clientId | Client ID of the client on the SAP system where the table is located. (Usually a three-digit decimal number represented as a string) Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | language | Language of the SAP system where the table is located. The default value is EN. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | logonGroup | The Logon Group for the SAP System. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | messageServer | The hostname of the SAP Message Server. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | messageServerService | The service name or port number of the Message Server. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | password | Password to access the SAP server where the table is located. | SecretBase |
// | server | Host name of the SAP instance where the table is located. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | sncLibraryPath | External security product's library to access the SAP server where the table is located. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | sncMode | SNC activation indicator to access the SAP server where the table is located. Must be either 0 (off) or 1 (on). Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | sncMyName | Initiator's SNC name to access the SAP server where the table is located. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | sncPartnerName | Communication partner's SNC name to access the SAP server where the table is located. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | sncQop | SNC Quality of Protection. Allowed value include: 1, 2, 3, 8, 9. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | systemId | SystemID of the SAP system where the table is located. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | systemNumber | System number of the SAP system where the table is located. (Usually a two-digit decimal number represented as a string.) Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | userName | Username to access the SAP server where the table is located. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'ServiceNow' (required) |
// | typeProperties | ServiceNow server linked service properties. | ServiceNowLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | authenticationType | The authentication type to use. | 'Basic''OAuth2' (required) |
// | clientId | The client id for OAuth2 authentication. | For Bicep, you can use theany()function. |
// | clientSecret | The client secret for OAuth2 authentication. | SecretBase |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | endpoint | The endpoint of the ServiceNow server. (i.e. {instance}.service-now.com) | For Bicep, you can use theany()function.(required) |
// | password | The password corresponding to the user name for Basic and OAuth2 authentication. | SecretBase |
// | useEncryptedEndpoints | Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. | For Bicep, you can use theany()function. |
// | useHostVerification | Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. | For Bicep, you can use theany()function. |
// | usePeerVerification | Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. | For Bicep, you can use theany()function. |
// | username | The user name used to connect to the ServiceNow server for Basic and OAuth2 authentication. | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'Sftp' (required) |
// | typeProperties | Properties specific to this linked service type. | SftpServerLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | authenticationType | The authentication type to be used to connect to the FTP server. | 'Basic''MultiFactor''SshPublicKey' |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | host | The SFTP server host name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | hostKeyFingerprint | The host key finger-print of the SFTP server. When SkipHostKeyValidation is false, HostKeyFingerprint should be specified. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | passPhrase | The password to decrypt the SSH private key if the SSH private key is encrypted. | SecretBase |
// | password | Password to logon the SFTP server for Basic authentication. | SecretBase |
// | port | The TCP port number that the SFTP server uses to listen for client connections. Default value is 22. Type: integer (or Expression with resultType integer), minimum: 0. | For Bicep, you can use theany()function. |
// | privateKeyContent | Base64 encoded SSH private key content for SshPublicKey authentication. For on-premises copy with SshPublicKey authentication, either PrivateKeyPath or PrivateKeyContent should be specified. SSH private key should be OpenSSH format. | SecretBase |
// | privateKeyPath | The SSH private key file path for SshPublicKey authentication. Only valid for on-premises copy. For on-premises copy with SshPublicKey authentication, either PrivateKeyPath or PrivateKeyContent should be specified. SSH private key should be OpenSSH format. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | skipHostKeyValidation | If true, skip the SSH host key validation. Default value is false. Type: boolean (or Expression with resultType boolean). | For Bicep, you can use theany()function. |
// | userName | The username used to log on to the SFTP server. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'SharePointOnlineList' (required) |
// | typeProperties | SharePoint Online List linked service properties. | SharePointOnlineListLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | servicePrincipalId | The application (client) ID of your application registered in Azure Active Directory. Make sure to grant SharePoint site permission to this application. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | servicePrincipalKey | The client secret of your application registered in Azure Active Directory. Type: string (or Expression with resultType string). | SecretBase(required) |
// | siteUrl | The URL of the SharePoint Online site. For example,https://contoso.sharepoint.com/sites/siteName. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | tenantId | The tenant ID under which your application resides. You can find it from Azure portal Active Directory overview page. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'Shopify' (required) |
// | typeProperties | Shopify Service linked service properties. | ShopifyLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | accessToken | The API access token that can be used to access Shopifyâs data. The token won't expire if it is offline mode. | SecretBase |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | host | The endpoint of the Shopify server. (i.e. mystore.myshopify.com) | For Bicep, you can use theany()function.(required) |
// | useEncryptedEndpoints | Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. | For Bicep, you can use theany()function. |
// | useHostVerification | Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. | For Bicep, you can use theany()function. |
// | usePeerVerification | Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'Smartsheet' (required) |
// | typeProperties | Smartsheet linked service properties. | SmartsheetLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | apiToken | The api token for the Smartsheet source. | SecretBase(required) |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'Snowflake' (required) |
// | typeProperties | Snowflake linked service properties. | SnowflakeLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | connectionString | The connection string of snowflake. Type: string, SecureString. | For Bicep, you can use theany()function.(required) |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | password | The Azure key vault secret reference of password in connection string. | AzureKeyVaultSecretReference |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'Spark' (required) |
// | typeProperties | Spark Server linked service properties. | SparkLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | allowHostNameCNMismatch | Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false. | For Bicep, you can use theany()function. |
// | allowSelfSignedServerCert | Specifies whether to allow self-signed certificates from the server. The default value is false. | For Bicep, you can use theany()function. |
// | authenticationType | The authentication method used to access the Spark server. | 'Anonymous''Username''UsernameAndPassword''WindowsAzureHDInsightService' (required) |
// | enableSsl | Specifies whether the connections to the server are encrypted using SSL. The default value is false. | For Bicep, you can use theany()function. |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | host | IP address or host name of the Spark server | For Bicep, you can use theany()function.(required) |
// | httpPath | The partial URL corresponding to the Spark server. | For Bicep, you can use theany()function. |
// | password | The password corresponding to the user name that you provided in the Username field | SecretBase |
// | port | The TCP port that the Spark server uses to listen for client connections. | For Bicep, you can use theany()function.(required) |
// | serverType | The type of Spark server. | 'SharkServer''SharkServer2''SparkThriftServer' |
// | thriftTransportProtocol | The transport protocol to use in the Thrift layer. | 'Binary''HTTP ''SASL' |
// | trustedCertPath | The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. | For Bicep, you can use theany()function. |
// | username | The user name that you use to access Spark Server. | For Bicep, you can use theany()function. |
// | useSystemTrustStore | Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false. | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'SqlServer' (required) |
// | typeProperties | SQL Server linked service properties. | SqlServerLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | alwaysEncryptedSettings | Sql always encrypted properties. | SqlAlwaysEncryptedProperties |
// | connectionString | The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function.(required) |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | password | The on-premises Windows authentication password. | SecretBase |
// | userName | The on-premises Windows authentication user name. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'Square' (required) |
// | typeProperties | Square Service linked service properties. | SquareLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | clientId | The client ID associated with your Square application. | For Bicep, you can use theany()function. |
// | clientSecret | The client secret associated with your Square application. | SecretBase |
// | connectionProperties | Properties used to connect to Square. It is mutually exclusive with any other properties in the linked service. Type: object. | For Bicep, you can use theany()function. |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | host | The URLÂ of the Square instance. (i.e. mystore.mysquare.com) | For Bicep, you can use theany()function. |
// | redirectUri | The redirect URL assigned in the Square application dashboard. (i.e.http://localhost:2500) | For Bicep, you can use theany()function. |
// | useEncryptedEndpoints | Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. | For Bicep, you can use theany()function. |
// | useHostVerification | Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. | For Bicep, you can use theany()function. |
// | usePeerVerification | Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'Sybase' (required) |
// | typeProperties | Sybase linked service properties. | SybaseLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | authenticationType | AuthenticationType to be used for connection. | 'Basic''Windows' |
// | database | Database name for connection. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | password | Password for authentication. | SecretBase |
// | schema | Schema name for connection. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | server | Server name for connection. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | username | Username for authentication. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'TeamDesk' (required) |
// | typeProperties | TeamDesk linked service properties. | TeamDeskLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | apiToken | The api token for the TeamDesk source. | SecretBase |
// | authenticationType | The authentication type to use. | 'Basic''Token' (required) |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | password | The password of the TeamDesk source. | SecretBase |
// | url | The url to connect TeamDesk source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | userName | The username of the TeamDesk source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'Teradata' (required) |
// | typeProperties | Teradata linked service properties. | TeradataLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | authenticationType | AuthenticationType to be used for connection. | 'Basic''Windows' |
// | connectionString | Teradata ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function. |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | password | Password for authentication. | SecretBase |
// | server | Server name for connection. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | username | Username for authentication. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'Twilio' (required) |
// | typeProperties | Twilio linked service properties. | TwilioLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | password | The auth token of Twilio service. | SecretBase(required) |
// | userName | The Account SID of Twilio service. | For Bicep, you can use theany()function.(required) |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'Vertica' (required) |
// | typeProperties | Vertica linked service properties. | VerticaLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | connectionString | An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. | For Bicep, you can use theany()function. |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | pwd | The Azure key vault secret reference of password in connection string. | AzureKeyVaultSecretReference |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'Web' (required) |
// | typeProperties | Web linked service properties. | WebLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | url | The URL of the web service endpoint, e.g.https://www.microsoft.com. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | authenticationType | Set the object type | AnonymousBasicClientCertificate(required) |

// | Name | Description | Value |
// |-|-|-|
// | authenticationType | Type of authentication used to connect to the web table source. | 'Anonymous' (required) |

// | Name | Description | Value |
// |-|-|-|
// | authenticationType | Type of authentication used to connect to the web table source. | 'Basic' (required) |
// | password | The password for Basic authentication. | SecretBase(required) |
// | username | User name for Basic authentication. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |

// | Name | Description | Value |
// |-|-|-|
// | authenticationType | Type of authentication used to connect to the web table source. | 'ClientCertificate' (required) |
// | password | Password for the PFX file. | SecretBase(required) |
// | pfx | Base64-encoded contents of a PFX file. | SecretBase(required) |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'Xero' (required) |
// | typeProperties | Xero Service linked service properties. | XeroLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | connectionProperties | Properties used to connect to Xero. It is mutually exclusive with any other properties in the linked service. Type: object. | For Bicep, you can use theany()function. |
// | consumerKey | The consumer key associated with the Xero application. | SecretBase |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | host | The endpoint of the Xero server. (i.e. api.xero.com) | For Bicep, you can use theany()function. |
// | privateKey | The private key from the .pem file that was generated for your Xero private application. You must include all the text from the .pem file, including the Unix line endings(). | SecretBase |
// | useEncryptedEndpoints | Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. | For Bicep, you can use theany()function. |
// | useHostVerification | Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. | For Bicep, you can use theany()function. |
// | usePeerVerification | Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'Zendesk' (required) |
// | typeProperties | Zendesk linked service properties. | ZendeskLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | apiToken | The api token for the Zendesk source. | SecretBase |
// | authenticationType | The authentication type to use. | 'Basic''Token' (required) |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | password | The password of the Zendesk source. | SecretBase |
// | url | The url to connect Zendesk source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function.(required) |
// | userName | The username of the Zendesk source. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of linked service. | 'Zoho' (required) |
// | typeProperties | Zoho server linked service properties. | ZohoLinkedServiceTypeProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | accessToken | The access token for Zoho authentication. | SecretBase |
// | connectionProperties | Properties used to connect to Zoho. It is mutually exclusive with any other properties in the linked service. Type: object. | For Bicep, you can use theany()function. |
// | encryptedCredential | The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). | For Bicep, you can use theany()function. |
// | endpoint | The endpoint of the Zoho server. (i.e. crm.zoho.com/crm/private) | For Bicep, you can use theany()function. |
// | useEncryptedEndpoints | Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. | For Bicep, you can use theany()function. |
// | useHostVerification | Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. | For Bicep, you can use theany()function. |
// | usePeerVerification | Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. | For Bicep, you can use theany()function. |
