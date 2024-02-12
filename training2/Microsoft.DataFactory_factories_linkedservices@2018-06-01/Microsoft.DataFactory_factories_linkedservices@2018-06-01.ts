import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatafactoryFactoriesLinkedservicesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:factories;

/**
   * List of tags that can be used for describing the linked service.
   */
readonly annotations?: any[];

/**
   * The integration runtime reference.
   */
readonly connectVia?: IntegrationRuntimeReference;

/**
   * Linked service description.
   */
readonly description?: string;

/**
   * Parameters for linked service.
   */
readonly parameters?: object;

/**
   * Set the object type
   */
readonly type: AmazonMWSAmazonRdsForOracleAmazonRdsForSqlServerAmazonRedshiftAmazonS3AmazonS3CompatibleAppFiguresAsanaAzureBatchAzureBlobFSAzureBlobStorageAzureDatabricksAzureDatabricksDeltaLakeAzureDataExplorerAzureDataLakeAnalyticsAzureDataLakeStoreAzureFileStorageAzureFunctionAzureKeyVaultAzureMariaDBAzureMLAzureMLServiceAzureMySqlAzurePostgreSqlAzureSearchAzureSqlDatabaseAzureSqlDWAzureSqlMIAzureStorageAzureSynapseArtifactsAzureTableStorageCassandraCommonDataServiceForAppsConcurCosmosDbCosmosDbMongoDbApiCouchbaseCustomDataSourceDataworldDb2DrillDynamicsDynamicsAXDynamicsCrmEloquaFileServerFtpServerGoogleAdWordsGoogleBigQueryGoogleCloudStorageGoogleSheetsGreenplumHBaseHdfsHDInsightHDInsightOnDemandHiveHttpServerHubspotImpalaInformixJiraMagentoMariaDBMarketoMicrosoftAccessMongoDbMongoDbAtlasMongoDbV2MySqlNetezzaODataOdbcOffice365OracleOracleCloudStorageOracleServiceCloudPaypalPhoenixPostgreSqlPrestoQuickbaseQuickBooksResponsysRestServiceSalesforceSalesforceMarketingCloudSalesforceServiceCloudSapBWSapCloudForCustomerSapEccSapHanaSapOdpSapOpenHubSapTableServiceNowSftpSharePonumberOnlineListShopifySmartsheetSnowflakeSparkSqlServerSquareSybaseTeamDeskTeradataTwilioVerticaWebXeroZendeskZoho;

/**
   * Arguments for integration runtime.
   */
readonly parameters?: object;

/**
   * Reference integration runtime name.
   */
readonly referenceName: string;

/**
   * Type of integration runtime.
   */
readonly type: 'IntegrationRuntimeReference';

/**
   * Type of linked service.
   */
readonly type: 'AmazonMWS';

/**
   * Amazon Marketplace Web Service linked service properties.
   */
readonly typeProperties: AmazonMWSLinkedServiceTypeProperties;

/**
   * The access key id used to access data.
   */
readonly accessKeyId: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The endpoint of the Amazon MWS server, (i.e. mws.amazonservices.com)
   */
readonly endpoint: For Bicep, you can use theany()function.;

/**
   * The Amazon Marketplace ID you want to retrieve data from. To retrieve data from multiple Marketplace IDs, separate them with a comma (,). (i.e. A2EUQ1WTGCTBG2)
   */
readonly marketplaceID: For Bicep, you can use theany()function.;

/**
   * The Amazon MWS authentication token.
   */
readonly mwsAuthToken?: SecretBase;

/**
   * The secret key used to access data.
   */
readonly secretKey?: SecretBase;

/**
   * The Amazon seller ID.
   */
readonly sellerID: For Bicep, you can use theany()function.;

/**
   * Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
   */
readonly useEncryptedEndpoints?: For Bicep, you can use theany()function.;

/**
   * Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
   */
readonly useHostVerification?: For Bicep, you can use theany()function.;

/**
   * Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.
   */
readonly usePeerVerification?: For Bicep, you can use theany()function.;

/**
   * Set the object type
   */
readonly type: AzureKeyVaultSecretSecureString;

/**
   * The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string).
   */
readonly secretName: For Bicep, you can use theany()function.;

/**
   * The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string).
   */
readonly secretVersion?: For Bicep, you can use theany()function.;

/**
   * The Azure Key Vault linked service reference.
   */
readonly store: LinkedServiceReference;

/**
   * Type of the secret.
   */
readonly type: string;

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
   * Type of the secret.
   */
readonly type: string;

/**
   * Value of secure string.
   */
readonly value: string;

/**
   * Type of linked service.
   */
readonly type: 'AmazonRdsForOracle';

/**
   * AmazonRdsForOracle database linked service properties.
   */
readonly typeProperties: AmazonRdsForLinkedServiceTypeProperties;

/**
   * The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
readonly connectionString: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The Azure key vault secret reference of password in connection string.
   */
readonly password?: SecretBase;

/**
   * Type of linked service.
   */
readonly type: 'AmazonRdsForSqlServer';

/**
   * Amazon RDS for SQL Server linked service properties.
   */
readonly typeProperties: AmazonRdsForSqlServerLinkedServiceTypeProperties;

/**
   * Sql always encrypted properties.
   */
readonly alwaysEncryptedSettings?: SqlAlwaysEncryptedProperties;

/**
   * The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
readonly connectionString: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The on-premises Windows authentication password.
   */
readonly password?: SecretBase;

/**
   * The on-premises Windows authentication user name. Type: string (or Expression with resultType string).
   */
readonly userName?: For Bicep, you can use theany()function.;

/**
   * Sql always encrypted AKV authentication type. Type: string (or Expression with resultType string).
   */
readonly alwaysEncryptedAkvAuthType: 'ManagedIdentity''ServicePrincipal''UserAssignedManagedIdentity';

/**
   * The credential reference containing authentication information.
   */
readonly credential?: CredentialReference;

/**
   * The client ID of the application in Azure Active Directory used for Azure Key Vault authentication. Type: string (or Expression with resultType string).
   */
readonly servicePrincipalId?: For Bicep, you can use theany()function.;

/**
   * The key of the service principal used to authenticate against Azure Key Vault.
   */
readonly servicePrincipalKey?: SecretBase;

/**
   * Reference credential name.
   */
readonly referenceName: string;

/**
   * Credential reference type.
   */
readonly type: 'CredentialReference';

/**
   * Type of linked service.
   */
readonly type: 'AmazonRedshift';

/**
   * Amazon Redshift linked service properties.
   */
readonly typeProperties: AmazonRedshiftLinkedServiceTypeProperties;

/**
   * The database name of the Amazon Redshift source. Type: string (or Expression with resultType string).
   */
readonly database: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The password of the Amazon Redshift source.
   */
readonly password?: SecretBase;

/**
   * The TCP port number that the Amazon Redshift server uses to listen for client connections. The default value is 5439. Type: integer (or Expression with resultType integer).
   */
readonly port?: For Bicep, you can use theany()function.;

/**
   * The name of the Amazon Redshift server. Type: string (or Expression with resultType string).
   */
readonly server: For Bicep, you can use theany()function.;

/**
   * The username of the Amazon Redshift source. Type: string (or Expression with resultType string).
   */
readonly username?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'AmazonS3';

/**
   * Amazon S3 linked service properties.
   */
readonly typeProperties: AmazonS3LinkedServiceTypeProperties;

/**
   * The access key identifier of the Amazon S3 Identity and Access Management (IAM) user. Type: string (or Expression with resultType string).
   */
readonly accessKeyId?: For Bicep, you can use theany()function.;

/**
   * The authentication type of S3. Allowed value: AccessKey (default) or TemporarySecurityCredentials. Type: string (or Expression with resultType string).
   */
readonly authenticationType?: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The secret access key of the Amazon S3 Identity and Access Management (IAM) user.
   */
readonly secretAccessKey?: SecretBase;

/**
   * This value specifies the endpoint to access with the S3 Connector. This is an optional property; change it only if you want to try a different service endpoint or want to switch between https and http. Type: string (or Expression with resultType string).
   */
readonly serviceUrl?: For Bicep, you can use theany()function.;

/**
   * The session token for the S3 temporary security credential.
   */
readonly sessionToken?: SecretBase;

/**
   * Type of linked service.
   */
readonly type: 'AmazonS3Compatible';

/**
   * Amazon S3 Compatible linked service properties.
   */
readonly typeProperties: AmazonS3CompatibleLinkedServiceTypeProperties;

/**
   * The access key identifier of the Amazon S3 Compatible Identity and Access Management (IAM) user. Type: string (or Expression with resultType string).
   */
readonly accessKeyId?: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * If true, use S3 path-style access instead of virtual hosted-style access. Default value is false. Type: boolean (or Expression with resultType boolean).
   */
readonly forcePathStyle?: For Bicep, you can use theany()function.;

/**
   * The secret access key of the Amazon S3 Compatible Identity and Access Management (IAM) user.
   */
readonly secretAccessKey?: SecretBase;

/**
   * This value specifies the endpoint to access with the Amazon S3 Compatible Connector. This is an optional property; change it only if you want to try a different service endpoint or want to switch between https and http. Type: string (or Expression with resultType string).
   */
readonly serviceUrl?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'AppFigures';

/**
   * AppFigures linked service properties.
   */
readonly typeProperties: AppFiguresLinkedServiceTypeProperties;

/**
   * The client key for the AppFigures source.
   */
readonly clientKey: SecretBase;

/**
   * The password of the AppFigures source.
   */
readonly password: SecretBase;

/**
   * The username of the Appfigures source.
   */
readonly userName: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'Asana';

/**
   * Asana linked service properties.
   */
readonly typeProperties: AsanaLinkedServiceTypeProperties;

/**
   * The api token for the Asana source.
   */
readonly apiToken: SecretBase;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'AzureBatch';

/**
   * Azure Batch linked service properties.
   */
readonly typeProperties: AzureBatchLinkedServiceTypeProperties;

/**
   * The Azure Batch account access key.
   */
readonly accessKey?: SecretBase;

/**
   * The Azure Batch account name. Type: string (or Expression with resultType string).
   */
readonly accountName: For Bicep, you can use theany()function.;

/**
   * The Azure Batch URI. Type: string (or Expression with resultType string).
   */
readonly batchUri: For Bicep, you can use theany()function.;

/**
   * The credential reference containing authentication information.
   */
readonly credential?: CredentialReference;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The Azure Storage linked service reference.
   */
readonly linkedServiceName: LinkedServiceReference;

/**
   * The Azure Batch pool name. Type: string (or Expression with resultType string).
   */
readonly poolName: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'AzureBlobFS';

/**
   * Azure Data Lake Storage Gen2 linked service properties.
   */
readonly typeProperties: AzureBlobFSLinkedServiceTypeProperties;

/**
   * Account key for the Azure Data Lake Storage Gen2 service. Type: string (or Expression with resultType string).
   */
readonly accountKey?: For Bicep, you can use theany()function.;

/**
   * Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regionsâ cloud type. Type: string (or Expression with resultType string).
   */
readonly azureCloudType?: For Bicep, you can use theany()function.;

/**
   * The credential reference containing authentication information.
   */
readonly credential?: CredentialReference;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The Azure key vault secret reference of sasToken in sas uri.
   */
readonly sasToken?: SecretBase;

/**
   * SAS URI of the Azure Data Lake Storage Gen2 service. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
readonly sasUri?: For Bicep, you can use theany()function.;

/**
   * The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference.
   */
readonly servicePrincipalCredential?: SecretBase;

/**
   * The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string).
   */
readonly servicePrincipalCredentialType?: For Bicep, you can use theany()function.;

/**
   * The ID of the application used to authenticate against the Azure Data Lake Storage Gen2 account. Type: string (or Expression with resultType string).
   */
readonly servicePrincipalId?: For Bicep, you can use theany()function.;

/**
   * The Key of the application used to authenticate against the Azure Data Lake Storage Gen2 account.
   */
readonly servicePrincipalKey?: SecretBase;

/**
   * The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
   */
readonly tenant?: For Bicep, you can use theany()function.;

/**
   * Endpoint for the Azure Data Lake Storage Gen2 service. Type: string (or Expression with resultType string).
   */
readonly url?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'AzureBlobStorage';

/**
   * Azure Blob Storage linked service properties.
   */
readonly typeProperties: AzureBlobStorageLinkedServiceTypeProperties;

/**
   * The Azure key vault secret reference of accountKey in connection string.
   */
readonly accountKey?: AzureKeyVaultSecretReference;

/**
   * Specify the kind of your storage account. Allowed values are: Storage (general purpose v1), StorageV2 (general purpose v2), BlobStorage, or BlockBlobStorage. Type: string (or Expression with resultType string).
   */
readonly accountKind?: string;

/**
   * The type used for authentication. Type: string.
   */
readonly authenticationType?: 'AccountKey''Anonymous''Msi''SasUri''ServicePrincipal';

/**
   * Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regionsâ cloud type. Type: string (or Expression with resultType string).
   */
readonly azureCloudType?: For Bicep, you can use theany()function.;

/**
   * The connection string. It is mutually exclusive with sasUri, serviceEndpoint property. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
readonly connectionString?: For Bicep, you can use theany()function.;

/**
   * Container uri of the Azure Blob Storage resource only support for anonymous access. Type: string (or Expression with resultType string).
   */
readonly containerUri?: For Bicep, you can use theany()function.;

/**
   * The credential reference containing authentication information.
   */
readonly credential?: CredentialReference;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: string;

/**
   * The Azure key vault secret reference of sasToken in sas uri.
   */
readonly sasToken?: AzureKeyVaultSecretReference;

/**
   * SAS URI of the Azure Blob Storage resource. It is mutually exclusive with connectionString, serviceEndpoint property. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
readonly sasUri?: For Bicep, you can use theany()function.;

/**
   * Blob service endpoint of the Azure Blob Storage resource. It is mutually exclusive with connectionString, sasUri property.
   */
readonly serviceEndpoint?: string;

/**
   * The ID of the service principal used to authenticate against Azure SQL Data Warehouse. Type: string (or Expression with resultType string).
   */
readonly servicePrincipalId?: For Bicep, you can use theany()function.;

/**
   * The key of the service principal used to authenticate against Azure SQL Data Warehouse.
   */
readonly servicePrincipalKey?: SecretBase;

/**
   * The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
   */
readonly tenant?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'AzureDatabricks';

/**
   * Azure Databricks linked service properties.
   */
readonly typeProperties: AzureDatabricksLinkedServiceTypeProperties;

/**
   * Access token for databricks REST API. Refer tohttps://docs.azuredatabricks.net/api/latest/authentication.html. Type: string (or Expression with resultType string).
   */
readonly accessToken?: SecretBase;

/**
   * Required to specify MSI, if using Workspace resource id for databricks REST API. Type: string (or Expression with resultType string).
   */
readonly authentication?: For Bicep, you can use theany()function.;

/**
   * The credential reference containing authentication information.
   */
readonly credential?: CredentialReference;

/**
   * {REGION}.azuredatabricks.net, domain name of your Databricks deployment. Type: string (or Expression with resultType string).
   */
readonly domain: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The id of an existing interactive cluster that will be used for all runs of this activity. Type: string (or Expression with resultType string).
   */
readonly existingClusterId?: For Bicep, you can use theany()function.;

/**
   * The id of an existing instance pool that will be used for all runs of this activity. Type: string (or Expression with resultType string).
   */
readonly instancePoolId?: For Bicep, you can use theany()function.;

/**
   * Additional tags for cluster resources. This property is ignored in instance pool configurations.
   */
readonly newClusterCustomTags?: object;

/**
   * The driver node type for the new job cluster. This property is ignored in instance pool configurations. Type: string (or Expression with resultType string).
   */
readonly newClusterDriverNodeType?: For Bicep, you can use theany()function.;

/**
   * Enable the elastic disk on the new cluster. This property is now ignored, and takes the default elastic disk behavior in Databricks (elastic disks are always enabled). Type: boolean (or Expression with resultType boolean).
   */
readonly newClusterEnableElasticDisk?: For Bicep, you can use theany()function.;

/**
   * User-defined initialization scripts for the new cluster. Type: array of strings (or Expression with resultType array of strings).
   */
readonly newClusterInitScripts?: For Bicep, you can use theany()function.;

/**
   * Specify a location to deliver Spark driver, worker, and event logs. Type: string (or Expression with resultType string).
   */
readonly newClusterLogDestination?: For Bicep, you can use theany()function.;

/**
   * The node type of the new job cluster. This property is required if newClusterVersion is specified and instancePoolId is not specified. If instancePoolId is specified, this property is ignored. Type: string (or Expression with resultType string).
   */
readonly newClusterNodeType?: For Bicep, you can use theany()function.;

/**
   * If not using an existing interactive cluster, this specifies the number of worker nodes to use for the new job cluster or instance pool. For new job clusters, this a string-formatted Int32, like '1' means numOfWorker is 1 or '1:10' means auto-scale from 1 (min) to 10 (max). For instance pools, this is a string-formatted Int32, and can only specify a fixed number of worker nodes, such as '2'. Required if newClusterVersion is specified. Type: string (or Expression with resultType string).
   */
readonly newClusterNumOfWorker?: For Bicep, you can use theany()function.;

/**
   * A set of optional, user-specified Spark configuration key-value pairs.
   */
readonly newClusterSparkConf?: object;

/**
   * A set of optional, user-specified Spark environment variables key-value pairs.
   */
readonly newClusterSparkEnvVars?: object;

/**
   * If not using an existing interactive cluster, this specifies the Spark version of a new job cluster or instance pool nodes created for each run of this activity. Required if instancePoolId is specified. Type: string (or Expression with resultType string).
   */
readonly newClusterVersion?: For Bicep, you can use theany()function.;

/**
   * The policy id for limiting the ability to configure clusters based on a user defined set of rules. Type: string (or Expression with resultType string).
   */
readonly policyId?: For Bicep, you can use theany()function.;

/**
   * Workspace resource id for databricks REST API. Type: string (or Expression with resultType string).
   */
readonly workspaceResourceId?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'AzureDatabricksDeltaLake';

/**
   * Azure Databricks Delta Lake linked service properties.
   */
readonly typeProperties: AzureDatabricksDetltaLakeLinkedServiceTypeProperties;

/**
   * Access token for databricks REST API. Refer tohttps://docs.azuredatabricks.net/api/latest/authentication.html. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
readonly accessToken?: SecretBase;

/**
   * The id of an existing interactive cluster that will be used for all runs of this job. Type: string (or Expression with resultType string).
   */
readonly clusterId?: For Bicep, you can use theany()function.;

/**
   * The credential reference containing authentication information.
   */
readonly credential?: CredentialReference;

/**
   * {REGION}.azuredatabricks.net, domain name of your Databricks deployment. Type: string (or Expression with resultType string).
   */
readonly domain: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * Workspace resource id for databricks REST API. Type: string (or Expression with resultType string).
   */
readonly workspaceResourceId?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'AzureDataExplorer';

/**
   * Azure Data Explorer (Kusto) linked service properties.
   */
readonly typeProperties: AzureDataExplorerLinkedServiceTypeProperties;

/**
   * The credential reference containing authentication information.
   */
readonly credential?: CredentialReference;

/**
   * Database name for connection. Type: string (or Expression with resultType string).
   */
readonly database: For Bicep, you can use theany()function.;

/**
   * The endpoint of Azure Data Explorer (the engine's endpoint). URL will be in the formathttps://{clusterName}.{regionName}.kusto.windows.net. Type: string (or Expression with resultType string)
   */
readonly endpoint: For Bicep, you can use theany()function.;

/**
   * The ID of the service principal used to authenticate against Azure Data Explorer. Type: string (or Expression with resultType string).
   */
readonly servicePrincipalId?: For Bicep, you can use theany()function.;

/**
   * The key of the service principal used to authenticate against Kusto.
   */
readonly servicePrincipalKey?: SecretBase;

/**
   * The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
   */
readonly tenant?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'AzureDataLakeAnalytics';

/**
   * Azure Data Lake Analytics linked service properties.
   */
readonly typeProperties: AzureDataLakeAnalyticsLinkedServiceTypeProperties;

/**
   * The Azure Data Lake Analytics account name. Type: string (or Expression with resultType string).
   */
readonly accountName: For Bicep, you can use theany()function.;

/**
   * Azure Data Lake Analytics URI Type: string (or Expression with resultType string).
   */
readonly dataLakeAnalyticsUri?: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * Data Lake Analytics account resource group name (if different from Data Factory account). Type: string (or Expression with resultType string).
   */
readonly resourceGroupName?: For Bicep, you can use theany()function.;

/**
   * The ID of the application used to authenticate against the Azure Data Lake Analytics account. Type: string (or Expression with resultType string).
   */
readonly servicePrincipalId?: For Bicep, you can use theany()function.;

/**
   * The Key of the application used to authenticate against the Azure Data Lake Analytics account.
   */
readonly servicePrincipalKey?: SecretBase;

/**
   * Data Lake Analytics account subscription ID (if different from Data Factory account). Type: string (or Expression with resultType string).
   */
readonly subscriptionId?: For Bicep, you can use theany()function.;

/**
   * The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
   */
readonly tenant: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'AzureDataLakeStore';

/**
   * Azure Data Lake Store linked service properties.
   */
readonly typeProperties: AzureDataLakeStoreLinkedServiceTypeProperties;

/**
   * Data Lake Store account name. Type: string (or Expression with resultType string).
   */
readonly accountName?: For Bicep, you can use theany()function.;

/**
   * Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regionsâ cloud type. Type: string (or Expression with resultType string).
   */
readonly azureCloudType?: For Bicep, you can use theany()function.;

/**
   * The credential reference containing authentication information.
   */
readonly credential?: CredentialReference;

/**
   * Data Lake Store service URI. Type: string (or Expression with resultType string).
   */
readonly dataLakeStoreUri: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * Data Lake Store account resource group name (if different from Data Factory account). Type: string (or Expression with resultType string).
   */
readonly resourceGroupName?: For Bicep, you can use theany()function.;

/**
   * The ID of the application used to authenticate against the Azure Data Lake Store account. Type: string (or Expression with resultType string).
   */
readonly servicePrincipalId?: For Bicep, you can use theany()function.;

/**
   * The Key of the application used to authenticate against the Azure Data Lake Store account.
   */
readonly servicePrincipalKey?: SecretBase;

/**
   * Data Lake Store account subscription ID (if different from Data Factory account). Type: string (or Expression with resultType string).
   */
readonly subscriptionId?: For Bicep, you can use theany()function.;

/**
   * The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
   */
readonly tenant?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'AzureFileStorage';

/**
   * Azure File Storage linked service properties.
   */
readonly typeProperties: AzureFileStorageLinkedServiceTypeProperties;

/**
   * The Azure key vault secret reference of accountKey in connection string.
   */
readonly accountKey?: AzureKeyVaultSecretReference;

/**
   * The connection string. It is mutually exclusive with sasUri property. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
readonly connectionString?: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The azure file share name. It is required when auth with accountKey/sasToken. Type: string (or Expression with resultType string).
   */
readonly fileShare?: For Bicep, you can use theany()function.;

/**
   * Host name of the server. Type: string (or Expression with resultType string).
   */
readonly host?: For Bicep, you can use theany()function.;

/**
   * Password to logon the server.
   */
readonly password?: SecretBase;

/**
   * The Azure key vault secret reference of sasToken in sas uri.
   */
readonly sasToken?: AzureKeyVaultSecretReference;

/**
   * SAS URI of the Azure File resource. It is mutually exclusive with connectionString property. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
readonly sasUri?: For Bicep, you can use theany()function.;

/**
   * The azure file share snapshot version. Type: string (or Expression with resultType string).
   */
readonly snapshot?: For Bicep, you can use theany()function.;

/**
   * User ID to logon the server. Type: string (or Expression with resultType string).
   */
readonly userId?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'AzureFunction';

/**
   * Azure Function linked service properties.
   */
readonly typeProperties: AzureFunctionLinkedServiceTypeProperties;

/**
   * Type of authentication (Required to specify MSI) used to connect to AzureFunction. Type: string (or Expression with resultType string).
   */
readonly authentication: For Bicep, you can use theany()function.;

/**
   * The credential reference containing authentication information.
   */
readonly credential?: CredentialReference;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The endpoint of the Azure Function App. URL will be in the formathttps://{accountName}.azurewebsites.net.
   */
readonly functionAppUrl: For Bicep, you can use theany()function.;

/**
   * Function or Host key for Azure Function App.
   */
readonly functionKey?: SecretBase;

/**
   * Allowed token audiences for azure function.
   */
readonly resourceId?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'AzureKeyVault';

/**
   * Azure Key Vault linked service properties.
   */
readonly typeProperties: AzureKeyVaultLinkedServiceTypeProperties;

/**
   * The base URL of the Azure Key Vault. e.g.https://myakv.vault.azure.netType: string (or Expression with resultType string).
   */
readonly baseUrl: For Bicep, you can use theany()function.;

/**
   * The credential reference containing authentication information.
   */
readonly credential?: CredentialReference;

/**
   * Type of linked service.
   */
readonly type: 'AzureMariaDB';

/**
   * Azure Database for MariaDB linked service properties.
   */
readonly typeProperties: AzureMariaDBLinkedServiceTypeProperties;

/**
   * An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
readonly connectionString?: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The Azure key vault secret reference of password in connection string.
   */
readonly pwd?: AzureKeyVaultSecretReference;

/**
   * Type of linked service.
   */
readonly type: 'AzureML';

/**
   * Azure ML Studio Web Service linked service properties.
   */
readonly typeProperties: AzureMLLinkedServiceTypeProperties;

/**
   * The API key for accessing the Azure ML model endpoint.
   */
readonly apiKey: SecretBase;

/**
   * Type of authentication (Required to specify MSI) used to connect to AzureML. Type: string (or Expression with resultType string).
   */
readonly authentication: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The Batch Execution REST URL for an Azure ML Studio Web Service endpoint. Type: string (or Expression with resultType string).
   */
readonly mlEndpoint: For Bicep, you can use theany()function.;

/**
   * The ID of the service principal used to authenticate against the ARM-based updateResourceEndpoint of an Azure ML Studio web service. Type: string (or Expression with resultType string).
   */
readonly servicePrincipalId?: For Bicep, you can use theany()function.;

/**
   * The key of the service principal used to authenticate against the ARM-based updateResourceEndpoint of an Azure ML Studio web service.
   */
readonly servicePrincipalKey?: SecretBase;

/**
   * The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
   */
readonly tenant?: For Bicep, you can use theany()function.;

/**
   * The Update Resource REST URL for an Azure ML Studio Web Service endpoint. Type: string (or Expression with resultType string).
   */
readonly updateResourceEndpoint?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'AzureMLService';

/**
   * Azure ML Service linked service properties.
   */
readonly typeProperties: AzureMLServiceLinkedServiceTypeProperties;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * Azure ML Service workspace name. Type: string (or Expression with resultType string).
   */
readonly mlWorkspaceName: For Bicep, you can use theany()function.;

/**
   * Azure ML Service workspace resource group name. Type: string (or Expression with resultType string).
   */
readonly resourceGroupName: For Bicep, you can use theany()function.;

/**
   * The ID of the service principal used to authenticate against the endpoint of a published Azure ML Service pipeline. Type: string (or Expression with resultType string).
   */
readonly servicePrincipalId?: For Bicep, you can use theany()function.;

/**
   * The key of the service principal used to authenticate against the endpoint of a published Azure ML Service pipeline.
   */
readonly servicePrincipalKey?: SecretBase;

/**
   * Azure ML Service workspace subscription ID. Type: string (or Expression with resultType string).
   */
readonly subscriptionId: For Bicep, you can use theany()function.;

/**
   * The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
   */
readonly tenant?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'AzureMySql';

/**
   * Azure MySQL database linked service properties.
   */
readonly typeProperties: AzureMySqlLinkedServiceTypeProperties;

/**
   * The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
readonly connectionString: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The Azure key vault secret reference of password in connection string.
   */
readonly password?: AzureKeyVaultSecretReference;

/**
   * Type of linked service.
   */
readonly type: 'AzurePostgreSql';

/**
   * Azure PostgreSQL linked service properties.
   */
readonly typeProperties: AzurePostgreSqlLinkedServiceTypeProperties;

/**
   * An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
readonly connectionString?: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The Azure key vault secret reference of password in connection string.
   */
readonly password?: AzureKeyVaultSecretReference;

/**
   * Type of linked service.
   */
readonly type: 'AzureSearch';

/**
   * Windows Azure Search Service linked service properties.
   */
readonly typeProperties: AzureSearchLinkedServiceTypeProperties;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * Admin Key for Azure Search service
   */
readonly key?: SecretBase;

/**
   * URL for Azure Search service. Type: string (or Expression with resultType string).
   */
readonly url: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'AzureSqlDatabase';

/**
   * Azure SQL Database linked service properties.
   */
readonly typeProperties: AzureSqlDatabaseLinkedServiceTypeProperties;

/**
   * Sql always encrypted properties.
   */
readonly alwaysEncryptedSettings?: SqlAlwaysEncryptedProperties;

/**
   * Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regionsâ cloud type. Type: string (or Expression with resultType string).
   */
readonly azureCloudType?: For Bicep, you can use theany()function.;

/**
   * The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
readonly connectionString: For Bicep, you can use theany()function.;

/**
   * The credential reference containing authentication information.
   */
readonly credential?: CredentialReference;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The Azure key vault secret reference of password in connection string.
   */
readonly password?: AzureKeyVaultSecretReference;

/**
   * The ID of the service principal used to authenticate against Azure SQL Database. Type: string (or Expression with resultType string).
   */
readonly servicePrincipalId?: For Bicep, you can use theany()function.;

/**
   * The key of the service principal used to authenticate against Azure SQL Database.
   */
readonly servicePrincipalKey?: SecretBase;

/**
   * The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
   */
readonly tenant?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'AzureSqlDW';

/**
   * Azure SQL Data Warehouse linked service properties.
   */
readonly typeProperties: AzureSqlDWLinkedServiceTypeProperties;

/**
   * Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regionsâ cloud type. Type: string (or Expression with resultType string).
   */
readonly azureCloudType?: For Bicep, you can use theany()function.;

/**
   * The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
readonly connectionString: For Bicep, you can use theany()function.;

/**
   * The credential reference containing authentication information.
   */
readonly credential?: CredentialReference;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The Azure key vault secret reference of password in connection string.
   */
readonly password?: AzureKeyVaultSecretReference;

/**
   * The ID of the service principal used to authenticate against Azure SQL Data Warehouse. Type: string (or Expression with resultType string).
   */
readonly servicePrincipalId?: For Bicep, you can use theany()function.;

/**
   * The key of the service principal used to authenticate against Azure SQL Data Warehouse.
   */
readonly servicePrincipalKey?: SecretBase;

/**
   * The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
   */
readonly tenant?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'AzureSqlMI';

/**
   * Azure SQL Managed Instance linked service properties.
   */
readonly typeProperties: AzureSqlMILinkedServiceTypeProperties;

/**
   * Sql always encrypted properties.
   */
readonly alwaysEncryptedSettings?: SqlAlwaysEncryptedProperties;

/**
   * Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regionsâ cloud type. Type: string (or Expression with resultType string).
   */
readonly azureCloudType?: For Bicep, you can use theany()function.;

/**
   * The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
readonly connectionString: For Bicep, you can use theany()function.;

/**
   * The credential reference containing authentication information.
   */
readonly credential?: CredentialReference;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The Azure key vault secret reference of password in connection string.
   */
readonly password?: AzureKeyVaultSecretReference;

/**
   * The ID of the service principal used to authenticate against Azure SQL Managed Instance. Type: string (or Expression with resultType string).
   */
readonly servicePrincipalId?: For Bicep, you can use theany()function.;

/**
   * The key of the service principal used to authenticate against Azure SQL Managed Instance.
   */
readonly servicePrincipalKey?: SecretBase;

/**
   * The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
   */
readonly tenant?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'AzureStorage';

/**
   * Azure Storage linked service properties.
   */
readonly typeProperties: AzureStorageLinkedServiceTypeProperties;

/**
   * The Azure key vault secret reference of accountKey in connection string.
   */
readonly accountKey?: AzureKeyVaultSecretReference;

/**
   * The connection string. It is mutually exclusive with sasUri property. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
readonly connectionString?: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: string;

/**
   * The Azure key vault secret reference of sasToken in sas uri.
   */
readonly sasToken?: AzureKeyVaultSecretReference;

/**
   * SAS URI of the Azure Storage resource. It is mutually exclusive with connectionString property. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
readonly sasUri?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'AzureSynapseArtifacts';

/**
   * Azure Synapse Analytics (Artifacts) linked service properties.
   */
readonly typeProperties: AzureSynapseArtifactsLinkedServiceTypeProperties;

/**
   * Required to specify MSI, if using system assigned managed identity as authentication method. Type: string (or Expression with resultType string).
   */
readonly authentication?: For Bicep, you can use theany()function.;

/**
   * https://{workspacename}.dev.azuresynapse.net, Azure Synapse Analytics workspace URL. Type: string (or Expression with resultType string).
   */
readonly endpoint: For Bicep, you can use theany()function.;

/**
   * The resource ID of the Synapse workspace. The format should be: /subscriptions/{subscriptionID}/resourceGroups/{resourceGroup}/providers/Microsoft.Synapse/workspaces/{workspaceName}. Type: string (or Expression with resultType string).
   */
readonly workspaceResourceId?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'AzureTableStorage';

/**
   * Azure Table Storage linked service properties.
   */
readonly typeProperties: AzureStorageLinkedServiceTypeProperties;

/**
   * Type of linked service.
   */
readonly type: 'Cassandra';

/**
   * Cassandra linked service properties.
   */
readonly typeProperties: CassandraLinkedServiceTypeProperties;

/**
   * AuthenticationType to be used for connection. Type: string (or Expression with resultType string).
   */
readonly authenticationType?: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * Host name for connection. Type: string (or Expression with resultType string).
   */
readonly host: For Bicep, you can use theany()function.;

/**
   * Password for authentication.
   */
readonly password?: SecretBase;

/**
   * The port for the connection. Type: integer (or Expression with resultType integer).
   */
readonly port?: For Bicep, you can use theany()function.;

/**
   * Username for authentication. Type: string (or Expression with resultType string).
   */
readonly username?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'CommonDataServiceForApps';

/**
   * Common Data Service for Apps linked service properties.
   */
readonly typeProperties: CommonDataServiceForAppsLinkedServiceTypeProperties;

/**
   * The authentication type to connect to Common Data Service for Apps server. 'Office365' for online scenario, 'Ifd' for on-premises with Ifd scenario. 'AADServicePrincipal' for Server-To-Server authentication in online scenario. Type: string (or Expression with resultType string).
   */
readonly authenticationType: For Bicep, you can use theany()function.;

/**
   * The deployment type of the Common Data Service for Apps instance. 'Online' for Common Data Service for Apps Online and 'OnPremisesWithIfd' for Common Data Service for Apps on-premises with Ifd. Type: string (or Expression with resultType string).
   */
readonly deploymentType: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The host name of the on-premises Common Data Service for Apps server. The property is required for on-prem and not allowed for online. Type: string (or Expression with resultType string).
   */
readonly hostName?: For Bicep, you can use theany()function.;

/**
   * The organization name of the Common Data Service for Apps instance. The property is required for on-prem and required for online when there are more than one Common Data Service for Apps instances associated with the user. Type: string (or Expression with resultType string).
   */
readonly organizationName?: For Bicep, you can use theany()function.;

/**
   * Password to access the Common Data Service for Apps instance.
   */
readonly password?: SecretBase;

/**
   * The port of on-premises Common Data Service for Apps server. The property is required for on-prem and not allowed for online. Default is 443. Type: integer (or Expression with resultType integer), minimum: 0.
   */
readonly port?: For Bicep, you can use theany()function.;

/**
   * The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference.
   */
readonly servicePrincipalCredential?: SecretBase;

/**
   * The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string).
   */
readonly servicePrincipalCredentialType?: For Bicep, you can use theany()function.;

/**
   * The client ID of the application in Azure Active Directory used for Server-To-Server authentication. Type: string (or Expression with resultType string).
   */
readonly servicePrincipalId?: For Bicep, you can use theany()function.;

/**
   * The URL to the Microsoft Common Data Service for Apps server. The property is required for on-line and not allowed for on-prem. Type: string (or Expression with resultType string).
   */
readonly serviceUri?: For Bicep, you can use theany()function.;

/**
   * User name to access the Common Data Service for Apps instance. Type: string (or Expression with resultType string).
   */
readonly username?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'Concur';

/**
   * Concur Service linked service properties.
   */
readonly typeProperties: ConcurLinkedServiceTypeProperties;

/**
   * Application client_id supplied by Concur App Management.
   */
readonly clientId: For Bicep, you can use theany()function.;

/**
   * Properties used to connect to Concur. It is mutually exclusive with any other properties in the linked service. Type: object.
   */
readonly connectionProperties?: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The password corresponding to the user name that you provided in the username field.
   */
readonly password?: SecretBase;

/**
   * Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
   */
readonly useEncryptedEndpoints?: For Bicep, you can use theany()function.;

/**
   * Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
   */
readonly useHostVerification?: For Bicep, you can use theany()function.;

/**
   * Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.
   */
readonly usePeerVerification?: For Bicep, you can use theany()function.;

/**
   * The user name that you use to access Concur Service.
   */
readonly username: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'CosmosDb';

/**
   * CosmosDB linked service properties.
   */
readonly typeProperties: CosmosDbLinkedServiceTypeProperties;

/**
   * The endpoint of the Azure CosmosDB account. Type: string (or Expression with resultType string)
   */
readonly accountEndpoint?: For Bicep, you can use theany()function.;

/**
   * The account key of the Azure CosmosDB account. Type: SecureString or AzureKeyVaultSecretReference.
   */
readonly accountKey?: SecretBase;

/**
   * Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regionsâ cloud type. Type: string (or Expression with resultType string).
   */
readonly azureCloudType?: For Bicep, you can use theany()function.;

/**
   * The connection mode used to access CosmosDB account. Type: string (or Expression with resultType string).
   */
readonly connectionMode?: 'Direct''Gateway';

/**
   * The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
readonly connectionString?: For Bicep, you can use theany()function.;

/**
   * The credential reference containing authentication information.
   */
readonly credential?: CredentialReference;

/**
   * The name of the database. Type: string (or Expression with resultType string)
   */
readonly database?: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference.
   */
readonly servicePrincipalCredential?: SecretBase;

/**
   * The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string).
   */
readonly servicePrincipalCredentialType?: 'ServicePrincipalCert''ServicePrincipalKey';

/**
   * The client ID of the application in Azure Active Directory used for Server-To-Server authentication. Type: string (or Expression with resultType string).
   */
readonly servicePrincipalId?: For Bicep, you can use theany()function.;

/**
   * The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
   */
readonly tenant?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'CosmosDbMongoDbApi';

/**
   * CosmosDB (MongoDB API) linked service properties.
   */
readonly typeProperties: CosmosDbMongoDbApiLinkedServiceTypeProperties;

/**
   * The CosmosDB (MongoDB API) connection string. Type: string, SecureString or AzureKeyVaultSecretReference. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
readonly connectionString: For Bicep, you can use theany()function.;

/**
   * The name of the CosmosDB (MongoDB API) database that you want to access. Type: string (or Expression with resultType string).
   */
readonly database: For Bicep, you can use theany()function.;

/**
   * Whether the CosmosDB (MongoDB API) server version is higher than 3.2. The default value is false. Type: boolean (or Expression with resultType boolean).
   */
readonly isServerVersionAbove32?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'Couchbase';

/**
   * Couchbase server linked service properties.
   */
readonly typeProperties: CouchbaseLinkedServiceTypeProperties;

/**
   * An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
readonly connectionString?: For Bicep, you can use theany()function.;

/**
   * The Azure key vault secret reference of credString in connection string.
   */
readonly credString?: AzureKeyVaultSecretReference;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'CustomDataSource';

/**
   * Custom linked service properties.
   */
readonly typeProperties: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'Dataworld';

/**
   * Dataworld linked service properties.
   */
readonly typeProperties: DataworldLinkedServiceTypeProperties;

/**
   * The api token for the Dataworld source.
   */
readonly apiToken: SecretBase;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'Db2';

/**
   * DB2 linked service properties.
   */
readonly typeProperties: Db2LinkedServiceTypeProperties;

/**
   * AuthenticationType to be used for connection. It is mutually exclusive with connectionString property.
   */
readonly authenticationType?: 'Basic';

/**
   * Certificate Common Name when TLS is enabled. It is mutually exclusive with connectionString property. Type: string (or Expression with resultType string).
   */
readonly certificateCommonName?: For Bicep, you can use theany()function.;

/**
   * The connection string. It is mutually exclusive with server, database, authenticationType, userName, packageCollection and certificateCommonName property. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
readonly connectionString?: For Bicep, you can use theany()function.;

/**
   * Database name for connection. It is mutually exclusive with connectionString property. Type: string (or Expression with resultType string).
   */
readonly database?: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. It is mutually exclusive with connectionString property. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * Under where packages are created when querying database. It is mutually exclusive with connectionString property. Type: string (or Expression with resultType string).
   */
readonly packageCollection?: For Bicep, you can use theany()function.;

/**
   * Password for authentication.
   */
readonly password?: SecretBase;

/**
   * Server name for connection. It is mutually exclusive with connectionString property. Type: string (or Expression with resultType string).
   */
readonly server?: For Bicep, you can use theany()function.;

/**
   * Username for authentication. It is mutually exclusive with connectionString property. Type: string (or Expression with resultType string).
   */
readonly username?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'Drill';

/**
   * Drill server linked service properties.
   */
readonly typeProperties: DrillLinkedServiceTypeProperties;

/**
   * An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
readonly connectionString?: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The Azure key vault secret reference of password in connection string.
   */
readonly pwd?: AzureKeyVaultSecretReference;

/**
   * Type of linked service.
   */
readonly type: 'Dynamics';

/**
   * Dynamics linked service properties.
   */
readonly typeProperties: DynamicsLinkedServiceTypeProperties;

/**
   * The authentication type to connect to Dynamics server. 'Office365' for online scenario, 'Ifd' for on-premises with Ifd scenario, 'AADServicePrincipal' for Server-To-Server authentication in online scenario. Type: string (or Expression with resultType string).
   */
readonly authenticationType: For Bicep, you can use theany()function.;

/**
   * The credential reference containing authentication information.
   */
readonly credential?: CredentialReference;

/**
   * The deployment type of the Dynamics instance. 'Online' for Dynamics Online and 'OnPremisesWithIfd' for Dynamics on-premises with Ifd. Type: string (or Expression with resultType string).
   */
readonly deploymentType: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The host name of the on-premises Dynamics server. The property is required for on-prem and not allowed for online. Type: string (or Expression with resultType string).
   */
readonly hostName?: For Bicep, you can use theany()function.;

/**
   * The organization name of the Dynamics instance. The property is required for on-prem and required for online when there are more than one Dynamics instances associated with the user. Type: string (or Expression with resultType string).
   */
readonly organizationName?: For Bicep, you can use theany()function.;

/**
   * Password to access the Dynamics instance.
   */
readonly password?: SecretBase;

/**
   * The port of on-premises Dynamics server. The property is required for on-prem and not allowed for online. Default is 443. Type: integer (or Expression with resultType integer), minimum: 0.
   */
readonly port?: For Bicep, you can use theany()function.;

/**
   * The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference.
   */
readonly servicePrincipalCredential?: SecretBase;

/**
   * The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string).
   */
readonly servicePrincipalCredentialType?: For Bicep, you can use theany()function.;

/**
   * The client ID of the application in Azure Active Directory used for Server-To-Server authentication. Type: string (or Expression with resultType string).
   */
readonly servicePrincipalId?: For Bicep, you can use theany()function.;

/**
   * The URL to the Microsoft Dynamics server. The property is required for on-line and not allowed for on-prem. Type: string (or Expression with resultType string).
   */
readonly serviceUri?: For Bicep, you can use theany()function.;

/**
   * User name to access the Dynamics instance. Type: string (or Expression with resultType string).
   */
readonly username?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'DynamicsAX';

/**
   * Dynamics AX linked service properties.
   */
readonly typeProperties: DynamicsAXLinkedServiceTypeProperties;

/**
   * Specify the resource you are requesting authorization. Type: string (or Expression with resultType string).
   */
readonly aadResourceId: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * Specify the application's client ID. Type: string (or Expression with resultType string).
   */
readonly servicePrincipalId: For Bicep, you can use theany()function.;

/**
   * Specify the application's key. Mark this field as a SecureString to store it securely in Data Factory, or reference a secret stored in Azure Key Vault. Type: string (or Expression with resultType string).
   */
readonly servicePrincipalKey: SecretBase;

/**
   * Specify the tenant information (domain name or tenant ID) under which your application resides. Retrieve it by hovering the mouse in the top-right corner of the Azure portal. Type: string (or Expression with resultType string).
   */
readonly tenant: For Bicep, you can use theany()function.;

/**
   * The Dynamics AX (or Dynamics 365 Finance and Operations) instance OData endpoint.
   */
readonly url: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'DynamicsCrm';

/**
   * Dynamics CRM linked service properties.
   */
readonly typeProperties: DynamicsCrmLinkedServiceTypeProperties;

/**
   * The authentication type to connect to Dynamics CRM server. 'Office365' for online scenario, 'Ifd' for on-premises with Ifd scenario, 'AADServicePrincipal' for Server-To-Server authentication in online scenario. Type: string (or Expression with resultType string).
   */
readonly authenticationType: For Bicep, you can use theany()function.;

/**
   * The deployment type of the Dynamics CRM instance. 'Online' for Dynamics CRM Online and 'OnPremisesWithIfd' for Dynamics CRM on-premises with Ifd. Type: string (or Expression with resultType string).
   */
readonly deploymentType: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The host name of the on-premises Dynamics CRM server. The property is required for on-prem and not allowed for online. Type: string (or Expression with resultType string).
   */
readonly hostName?: For Bicep, you can use theany()function.;

/**
   * The organization name of the Dynamics CRM instance. The property is required for on-prem and required for online when there are more than one Dynamics CRM instances associated with the user. Type: string (or Expression with resultType string).
   */
readonly organizationName?: For Bicep, you can use theany()function.;

/**
   * Password to access the Dynamics CRM instance.
   */
readonly password?: SecretBase;

/**
   * The port of on-premises Dynamics CRM server. The property is required for on-prem and not allowed for online. Default is 443. Type: integer (or Expression with resultType integer), minimum: 0.
   */
readonly port?: For Bicep, you can use theany()function.;

/**
   * The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference.
   */
readonly servicePrincipalCredential?: SecretBase;

/**
   * The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string).
   */
readonly servicePrincipalCredentialType?: For Bicep, you can use theany()function.;

/**
   * The client ID of the application in Azure Active Directory used for Server-To-Server authentication. Type: string (or Expression with resultType string).
   */
readonly servicePrincipalId?: For Bicep, you can use theany()function.;

/**
   * The URL to the Microsoft Dynamics CRM server. The property is required for on-line and not allowed for on-prem. Type: string (or Expression with resultType string).
   */
readonly serviceUri?: For Bicep, you can use theany()function.;

/**
   * User name to access the Dynamics CRM instance. Type: string (or Expression with resultType string).
   */
readonly username?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'Eloqua';

/**
   * Eloqua server linked service properties.
   */
readonly typeProperties: EloquaLinkedServiceTypeProperties;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The endpoint of the Eloqua server. (i.e. eloqua.example.com)
   */
readonly endpoint: For Bicep, you can use theany()function.;

/**
   * The password corresponding to the user name.
   */
readonly password?: SecretBase;

/**
   * Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
   */
readonly useEncryptedEndpoints?: For Bicep, you can use theany()function.;

/**
   * Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
   */
readonly useHostVerification?: For Bicep, you can use theany()function.;

/**
   * Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.
   */
readonly usePeerVerification?: For Bicep, you can use theany()function.;

/**
   * The site name and user name of your Eloqua account in the form: sitename/username. (i.e. Eloqua/Alice)
   */
readonly username: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'FileServer';

/**
   * File system linked service properties.
   */
readonly typeProperties: FileServerLinkedServiceTypeProperties;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * Host name of the server. Type: string (or Expression with resultType string).
   */
readonly host: For Bicep, you can use theany()function.;

/**
   * Password to logon the server.
   */
readonly password?: SecretBase;

/**
   * User ID to logon the server. Type: string (or Expression with resultType string).
   */
readonly userId?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'FtpServer';

/**
   * Properties specific to this linked service type.
   */
readonly typeProperties: FtpServerLinkedServiceTypeProperties;

/**
   * The authentication type to be used to connect to the FTP server.
   */
readonly authenticationType?: 'Anonymous''Basic';

/**
   * If true, validate the FTP server SSL certificate when connect over SSL/TLS channel. Default value is true. Type: boolean (or Expression with resultType boolean).
   */
readonly enableServerCertificateValidation?: For Bicep, you can use theany()function.;

/**
   * If true, connect to the FTP server over SSL/TLS channel. Default value is true. Type: boolean (or Expression with resultType boolean).
   */
readonly enableSsl?: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * Host name of the FTP server. Type: string (or Expression with resultType string).
   */
readonly host: For Bicep, you can use theany()function.;

/**
   * Password to logon the FTP server.
   */
readonly password?: SecretBase;

/**
   * The TCP port number that the FTP server uses to listen for client connections. Default value is 21. Type: integer (or Expression with resultType integer), minimum: 0.
   */
readonly port?: For Bicep, you can use theany()function.;

/**
   * Username to logon the FTP server. Type: string (or Expression with resultType string).
   */
readonly userName?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'GoogleAdWords';

/**
   * Google AdWords service linked service properties.
   */
readonly typeProperties: GoogleAdWordsLinkedServiceTypeProperties;

/**
   * The OAuth 2.0 authentication mechanism used for authentication. ServiceAuthentication can only be used on self-hosted IR.
   */
readonly authenticationType?: 'ServiceAuthentication''UserAuthentication';

/**
   * The Client customer ID of the AdWords account that you want to fetch report data for.
   */
readonly clientCustomerID?: For Bicep, you can use theany()function.;

/**
   * The client id of the google application used to acquire the refresh token. Type: string (or Expression with resultType string).
   */
readonly clientId?: For Bicep, you can use theany()function.;

/**
   * The client secret of the google application used to acquire the refresh token.
   */
readonly clientSecret?: SecretBase;

/**
   * Properties used to connect to GoogleAds. It is mutually exclusive with any other properties in the linked service. Type: object.
   */
readonly connectionProperties?: For Bicep, you can use theany()function.;

/**
   * The developer token associated with the manager account that you use to grant access to the AdWords API.
   */
readonly developerToken?: SecretBase;

/**
   * The service account email ID that is used for ServiceAuthentication and can only be used on self-hosted IR.
   */
readonly email?: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The full path to the .p12 key file that is used to authenticate the service account email address and can only be used on self-hosted IR.
   */
readonly keyFilePath?: For Bicep, you can use theany()function.;

/**
   * The refresh token obtained from Google for authorizing access to AdWords for UserAuthentication.
   */
readonly refreshToken?: SecretBase;

/**
   * The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR.
   */
readonly trustedCertPath?: For Bicep, you can use theany()function.;

/**
   * Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false.
   */
readonly useSystemTrustStore?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'GoogleBigQuery';

/**
   * Google BigQuery service linked service properties.
   */
readonly typeProperties: GoogleBigQueryLinkedServiceTypeProperties;

/**
   * A comma-separated list of public BigQuery projects to access.
   */
readonly additionalProjects?: For Bicep, you can use theany()function.;

/**
   * The OAuth 2.0 authentication mechanism used for authentication. ServiceAuthentication can only be used on self-hosted IR.
   */
readonly authenticationType: 'ServiceAuthentication''UserAuthentication';

/**
   * The client id of the google application used to acquire the refresh token. Type: string (or Expression with resultType string).
   */
readonly clientId?: For Bicep, you can use theany()function.;

/**
   * The client secret of the google application used to acquire the refresh token.
   */
readonly clientSecret?: SecretBase;

/**
   * The service account email ID that is used for ServiceAuthentication and can only be used on self-hosted IR.
   */
readonly email?: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The full path to the .p12 key file that is used to authenticate the service account email address and can only be used on self-hosted IR.
   */
readonly keyFilePath?: For Bicep, you can use theany()function.;

/**
   * The default BigQuery project to query against.
   */
readonly project: For Bicep, you can use theany()function.;

/**
   * The refresh token obtained from Google for authorizing access to BigQuery for UserAuthentication.
   */
readonly refreshToken?: SecretBase;

/**
   * Whether to request access to Google Drive. Allowing Google Drive access enables support for federated tables that combine BigQuery data with data from Google Drive. The default value is false.
   */
readonly requestGoogleDriveScope?: For Bicep, you can use theany()function.;

/**
   * The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR.
   */
readonly trustedCertPath?: For Bicep, you can use theany()function.;

/**
   * Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false.
   */
readonly useSystemTrustStore?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'GoogleCloudStorage';

/**
   * Google Cloud Storage linked service properties.
   */
readonly typeProperties: GoogleCloudStorageLinkedServiceTypeProperties;

/**
   * The access key identifier of the Google Cloud Storage Identity and Access Management (IAM) user. Type: string (or Expression with resultType string).
   */
readonly accessKeyId?: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The secret access key of the Google Cloud Storage Identity and Access Management (IAM) user.
   */
readonly secretAccessKey?: SecretBase;

/**
   * This value specifies the endpoint to access with the Google Cloud Storage Connector. This is an optional property; change it only if you want to try a different service endpoint or want to switch between https and http. Type: string (or Expression with resultType string).
   */
readonly serviceUrl?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'GoogleSheets';

/**
   * GoogleSheets linked service properties.
   */
readonly typeProperties: GoogleSheetsLinkedServiceTypeProperties;

/**
   * The api token for the GoogleSheets source.
   */
readonly apiToken: SecretBase;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'Greenplum';

/**
   * Greenplum Database linked service properties.
   */
readonly typeProperties: GreenplumLinkedServiceTypeProperties;

/**
   * An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
readonly connectionString?: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The Azure key vault secret reference of password in connection string.
   */
readonly pwd?: AzureKeyVaultSecretReference;

/**
   * Type of linked service.
   */
readonly type: 'HBase';

/**
   * HBase server linked service properties.
   */
readonly typeProperties: HBaseLinkedServiceTypeProperties;

/**
   * Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false.
   */
readonly allowHostNameCNMismatch?: For Bicep, you can use theany()function.;

/**
   * Specifies whether to allow self-signed certificates from the server. The default value is false.
   */
readonly allowSelfSignedServerCert?: For Bicep, you can use theany()function.;

/**
   * The authentication mechanism to use to connect to the HBase server.
   */
readonly authenticationType: 'Anonymous''Basic';

/**
   * Specifies whether the connections to the server are encrypted using SSL. The default value is false.
   */
readonly enableSsl?: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The IP address or host name of the HBase server. (i.e. 192.168.222.160)
   */
readonly host: For Bicep, you can use theany()function.;

/**
   * The partial URL corresponding to the HBase server. (i.e. /gateway/sandbox/hbase/version)
   */
readonly httpPath?: For Bicep, you can use theany()function.;

/**
   * The password corresponding to the user name.
   */
readonly password?: SecretBase;

/**
   * The TCP port that the HBase instance uses to listen for client connections. The default value is 9090.
   */
readonly port?: For Bicep, you can use theany()function.;

/**
   * The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR.
   */
readonly trustedCertPath?: For Bicep, you can use theany()function.;

/**
   * The user name used to connect to the HBase instance.
   */
readonly username?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'Hdfs';

/**
   * HDFS linked service properties.
   */
readonly typeProperties: HdfsLinkedServiceTypeProperties;

/**
   * Type of authentication used to connect to the HDFS. Possible values are: Anonymous and Windows. Type: string (or Expression with resultType string).
   */
readonly authenticationType?: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * Password for Windows authentication.
   */
readonly password?: SecretBase;

/**
   * The URL of the HDFS service endpoint, e.g.http://myhostname:50070/webhdfs/v1. Type: string (or Expression with resultType string).
   */
readonly url: For Bicep, you can use theany()function.;

/**
   * User name for Windows authentication. Type: string (or Expression with resultType string).
   */
readonly userName?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'HDInsight';

/**
   * HDInsight linked service properties.
   */
readonly typeProperties: HDInsightLinkedServiceTypeProperties;

/**
   * HDInsight cluster URI. Type: string (or Expression with resultType string).
   */
readonly clusterUri: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * Specify the FileSystem if the main storage for the HDInsight is ADLS Gen2. Type: string (or Expression with resultType string).
   */
readonly fileSystem?: For Bicep, you can use theany()function.;

/**
   * A reference to the Azure SQL linked service that points to the HCatalog database.
   */
readonly hcatalogLinkedServiceName?: LinkedServiceReference;

/**
   * Specify if the HDInsight is created with ESP (Enterprise Security Package). Type: Boolean.
   */
readonly isEspEnabled?: For Bicep, you can use theany()function.;

/**
   * The Azure Storage linked service reference.
   */
readonly linkedServiceName?: LinkedServiceReference;

/**
   * HDInsight cluster password.
   */
readonly password?: SecretBase;

/**
   * HDInsight cluster user name. Type: string (or Expression with resultType string).
   */
readonly userName?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'HDInsightOnDemand';

/**
   * HDInsight ondemand linked service properties.
   */
readonly typeProperties: HDInsightOnDemandLinkedServiceTypeProperties;

/**
   * Specifies additional storage accounts for the HDInsight linked service so that the Data Factory service can register them on your behalf.
   */
readonly additionalLinkedServiceNames?: LinkedServiceReference[];

/**
   * The prefix of cluster name, postfix will be distinct with timestamp. Type: string (or Expression with resultType string).
   */
readonly clusterNamePrefix?: For Bicep, you can use theany()function.;

/**
   * The password to access the cluster.
   */
readonly clusterPassword?: SecretBase;

/**
   * The resource group where the cluster belongs. Type: string (or Expression with resultType string).
   */
readonly clusterResourceGroup: For Bicep, you can use theany()function.;

/**
   * Number of worker/data nodes in the cluster. Suggestion value: 4. Type: string (or Expression with resultType string).
   */
readonly clusterSize: For Bicep, you can use theany()function.;

/**
   * The password to SSH remotely connect clusterâs node (for Linux).
   */
readonly clusterSshPassword?: SecretBase;

/**
   * The username to SSH remotely connect to clusterâs node (for Linux). Type: string (or Expression with resultType string).
   */
readonly clusterSshUserName?: For Bicep, you can use theany()function.;

/**
   * The cluster type. Type: string (or Expression with resultType string).
   */
readonly clusterType?: For Bicep, you can use theany()function.;

/**
   * The username to access the cluster. Type: string (or Expression with resultType string).
   */
readonly clusterUserName?: For Bicep, you can use theany()function.;

/**
   * Specifies the core configuration parameters (as in core-site.xml) for the HDInsight cluster to be created.
   */
readonly coreConfiguration?: For Bicep, you can use theany()function.;

/**
   * The credential reference containing authentication information.
   */
readonly credential?: CredentialReference;

/**
   * Specifies the size of the data node for the HDInsight cluster.
   */
readonly dataNodeSize?: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * Specifies the HBase configuration parameters (hbase-site.xml) for the HDInsight cluster.
   */
readonly hBaseConfiguration?: For Bicep, you can use theany()function.;

/**
   * The name of Azure SQL linked service that point to the HCatalog database. The on-demand HDInsight cluster is created by using the Azure SQL database as the metastore.
   */
readonly hcatalogLinkedServiceName?: LinkedServiceReference;

/**
   * Specifies the HDFS configuration parameters (hdfs-site.xml) for the HDInsight cluster.
   */
readonly hdfsConfiguration?: For Bicep, you can use theany()function.;

/**
   * Specifies the size of the head node for the HDInsight cluster.
   */
readonly headNodeSize?: For Bicep, you can use theany()function.;

/**
   * Specifies the hive configuration parameters (hive-site.xml) for the HDInsight cluster.
   */
readonly hiveConfiguration?: For Bicep, you can use theany()function.;

/**
   * The customerâs subscription to host the cluster. Type: string (or Expression with resultType string).
   */
readonly hostSubscriptionId: For Bicep, you can use theany()function.;

/**
   * Azure Storage linked service to be used by the on-demand cluster for storing and processing data.
   */
readonly linkedServiceName: LinkedServiceReference;

/**
   * Specifies the MapReduce configuration parameters (mapred-site.xml) for the HDInsight cluster.
   */
readonly mapReduceConfiguration?: For Bicep, you can use theany()function.;

/**
   * Specifies the Oozie configuration parameters (oozie-site.xml) for the HDInsight cluster.
   */
readonly oozieConfiguration?: For Bicep, you can use theany()function.;

/**
   * Custom script actions to run on HDI ondemand cluster once it's up. Please refer to /azure/hdinsight/hdinsight-hadoop-customize-cluster-linux?toc=%2Fen-us%2Fazure%2Fhdinsight%2Fr-server%2FTOC.json&bc=%2Fen-us%2Fazure%2Fbread%2Ftoc.json#understanding-script-actions.
   */
readonly scriptActions?: ScriptAction[];

/**
   * The service principal id for the hostSubscriptionId. Type: string (or Expression with resultType string).
   */
readonly servicePrincipalId?: For Bicep, you can use theany()function.;

/**
   * The key for the service principal id.
   */
readonly servicePrincipalKey?: SecretBase;

/**
   * The version of spark if the cluster type is 'spark'. Type: string (or Expression with resultType string).
   */
readonly sparkVersion?: For Bicep, you can use theany()function.;

/**
   * Specifies the Storm configuration parameters (storm-site.xml) for the HDInsight cluster.
   */
readonly stormConfiguration?: For Bicep, you can use theany()function.;

/**
   * The ARM resource ID for the subnet in the vNet. If virtualNetworkId was specified, then this property is required. Type: string (or Expression with resultType string).
   */
readonly subnetName?: For Bicep, you can use theany()function.;

/**
   * The Tenant id/name to which the service principal belongs. Type: string (or Expression with resultType string).
   */
readonly tenant: For Bicep, you can use theany()function.;

/**
   * The allowed idle time for the on-demand HDInsight cluster. Specifies how long the on-demand HDInsight cluster stays alive after completion of an activity run if there are no other active jobs in the cluster. The minimum value is 5 mins. Type: string (or Expression with resultType string).
   */
readonly timeToLive: For Bicep, you can use theany()function.;

/**
   * Version of the HDInsight cluster.Â  Type: string (or Expression with resultType string).
   */
readonly version: For Bicep, you can use theany()function.;

/**
   * The ARM resource ID for the vNet to which the cluster should be joined after creation. Type: string (or Expression with resultType string).
   */
readonly virtualNetworkId?: For Bicep, you can use theany()function.;

/**
   * Specifies the Yarn configuration parameters (yarn-site.xml) for the HDInsight cluster.
   */
readonly yarnConfiguration?: For Bicep, you can use theany()function.;

/**
   * Specifies the size of the Zoo Keeper node for the HDInsight cluster.
   */
readonly zookeeperNodeSize?: For Bicep, you can use theany()function.;

/**
   * The parameters for the script action.
   */
readonly parameters?: string;

/**
   * The node types on which the script action should be executed.
   */
readonly roles: For Bicep, you can use theany()function.;

/**
   * The URI for the script action.
   */
readonly uri: string;

/**
   * Type of linked service.
   */
readonly type: 'Hive';

/**
   * Hive Server linked service properties.
   */
readonly typeProperties: HiveLinkedServiceTypeProperties;

/**
   * Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false.
   */
readonly allowHostNameCNMismatch?: For Bicep, you can use theany()function.;

/**
   * Specifies whether to allow self-signed certificates from the server. The default value is false.
   */
readonly allowSelfSignedServerCert?: For Bicep, you can use theany()function.;

/**
   * The authentication method used to access the Hive server.
   */
readonly authenticationType: 'Anonymous''Username''UsernameAndPassword''WindowsAzureHDInsightService';

/**
   * Specifies whether the connections to the server are encrypted using SSL. The default value is false.
   */
readonly enableSsl?: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * IP address or host name of the Hive server, separated by ';' for multiple hosts (only when serviceDiscoveryMode is enable).
   */
readonly host: For Bicep, you can use theany()function.;

/**
   * The partial URL corresponding to the Hive server.
   */
readonly httpPath?: For Bicep, you can use theany()function.;

/**
   * The password corresponding to the user name that you provided in the Username field
   */
readonly password?: SecretBase;

/**
   * The TCP port that the Hive server uses to listen for client connections.
   */
readonly port?: For Bicep, you can use theany()function.;

/**
   * The type of Hive server.
   */
readonly serverType?: 'HiveServer1''HiveServer2''HiveThriftServer';

/**
   * true to indicate using the ZooKeeper service, false not.
   */
readonly serviceDiscoveryMode?: For Bicep, you can use theany()function.;

/**
   * The transport protocol to use in the Thrift layer.
   */
readonly thriftTransportProtocol?: 'Binary''HTTP ''SASL';

/**
   * The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR.
   */
readonly trustedCertPath?: For Bicep, you can use theany()function.;

/**
   * Specifies whether the driver uses native HiveQL queries,or converts them into an equivalent form in HiveQL.
   */
readonly useNativeQuery?: For Bicep, you can use theany()function.;

/**
   * The user name that you use to access Hive Server.
   */
readonly username?: For Bicep, you can use theany()function.;

/**
   * Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false.
   */
readonly useSystemTrustStore?: For Bicep, you can use theany()function.;

/**
   * The namespace on ZooKeeper under which Hive Server 2 nodes are added.
   */
readonly zooKeeperNameSpace?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'HttpServer';

/**
   * Properties specific to this linked service type.
   */
readonly typeProperties: HttpLinkedServiceTypeProperties;

/**
   * The authentication type to be used to connect to the HTTP server.
   */
readonly authenticationType?: 'Anonymous''Basic''ClientCertificate''Digest''Windows';

/**
   * The additional HTTP headers in the request to RESTful API used for authorization. Type: object (or Expression with resultType object).
   */
readonly authHeaders?: For Bicep, you can use theany()function.;

/**
   * Thumbprint of certificate for ClientCertificate authentication. Only valid for on-premises copy. For on-premises copy with ClientCertificate authentication, either CertThumbprint or EmbeddedCertData/Password should be specified. Type: string (or Expression with resultType string).
   */
readonly certThumbprint?: For Bicep, you can use theany()function.;

/**
   * Base64 encoded certificate data for ClientCertificate authentication. For on-premises copy with ClientCertificate authentication, either CertThumbprint or EmbeddedCertData/Password should be specified. Type: string (or Expression with resultType string).
   */
readonly embeddedCertData?: For Bicep, you can use theany()function.;

/**
   * If true, validate the HTTPS server SSL certificate. Default value is true. Type: boolean (or Expression with resultType boolean).
   */
readonly enableServerCertificateValidation?: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * Password for Basic, Digest, Windows, or ClientCertificate with EmbeddedCertData authentication.
   */
readonly password?: SecretBase;

/**
   * The base URL of the HTTP endpoint, e.g.https://www.microsoft.com. Type: string (or Expression with resultType string).
   */
readonly url: For Bicep, you can use theany()function.;

/**
   * User name for Basic, Digest, or Windows authentication. Type: string (or Expression with resultType string).
   */
readonly userName?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'Hubspot';

/**
   * Hubspot Service linked service properties.
   */
readonly typeProperties: HubspotLinkedServiceTypeProperties;

/**
   * The access token obtained when initiallyÂ authenticatingÂ yourÂ OAuth integration.
   */
readonly accessToken?: SecretBase;

/**
   * The client ID associated with your Hubspot application.
   */
readonly clientId: For Bicep, you can use theany()function.;

/**
   * The client secret associated with your Hubspot application.
   */
readonly clientSecret?: SecretBase;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The refresh token obtained when initiallyÂ authenticatingÂ yourÂ OAuth integration.
   */
readonly refreshToken?: SecretBase;

/**
   * Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
   */
readonly useEncryptedEndpoints?: For Bicep, you can use theany()function.;

/**
   * Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
   */
readonly useHostVerification?: For Bicep, you can use theany()function.;

/**
   * Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.
   */
readonly usePeerVerification?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'Impala';

/**
   * Impala server linked service properties.
   */
readonly typeProperties: ImpalaLinkedServiceTypeProperties;

/**
   * Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false.
   */
readonly allowHostNameCNMismatch?: For Bicep, you can use theany()function.;

/**
   * Specifies whether to allow self-signed certificates from the server. The default value is false.
   */
readonly allowSelfSignedServerCert?: For Bicep, you can use theany()function.;

/**
   * The authentication type to use.
   */
readonly authenticationType: 'Anonymous''SASLUsername''UsernameAndPassword';

/**
   * Specifies whether the connections to the server are encrypted using SSL. The default value is false.
   */
readonly enableSsl?: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The IP address or host name of the Impala server. (i.e. 192.168.222.160)
   */
readonly host: For Bicep, you can use theany()function.;

/**
   * The password corresponding to the user name when using UsernameAndPassword.
   */
readonly password?: SecretBase;

/**
   * The TCP port that the Impala server uses to listen for client connections. The default value is 21050.
   */
readonly port?: For Bicep, you can use theany()function.;

/**
   * The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR.
   */
readonly trustedCertPath?: For Bicep, you can use theany()function.;

/**
   * The user name used to access the Impala server. The default value is anonymous when using SASLUsername.
   */
readonly username?: For Bicep, you can use theany()function.;

/**
   * Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false.
   */
readonly useSystemTrustStore?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'Informix';

/**
   * Informix linked service properties.
   */
readonly typeProperties: InformixLinkedServiceTypeProperties;

/**
   * Type of authentication used to connect to the Informix as ODBC data store. Possible values are: Anonymous and Basic. Type: string (or Expression with resultType string).
   */
readonly authenticationType?: For Bicep, you can use theany()function.;

/**
   * The non-access credential portion of the connection string as well as an optional encrypted credential. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
readonly connectionString: For Bicep, you can use theany()function.;

/**
   * The access credential portion of the connection string specified in driver-specific property-value format.
   */
readonly credential?: SecretBase;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * Password for Basic authentication.
   */
readonly password?: SecretBase;

/**
   * User name for Basic authentication. Type: string (or Expression with resultType string).
   */
readonly userName?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'Jira';

/**
   * Jira Service linked service properties.
   */
readonly typeProperties: JiraLinkedServiceTypeProperties;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The IP address or host name of the Jira service. (e.g. jira.example.com)
   */
readonly host: For Bicep, you can use theany()function.;

/**
   * The password corresponding to the user name that you provided in the username field.
   */
readonly password?: SecretBase;

/**
   * The TCP port that the Jira server uses to listen for client connections. The default value is 443 if connecting through HTTPS, or 8080 if connecting through HTTP.
   */
readonly port?: For Bicep, you can use theany()function.;

/**
   * Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
   */
readonly useEncryptedEndpoints?: For Bicep, you can use theany()function.;

/**
   * Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
   */
readonly useHostVerification?: For Bicep, you can use theany()function.;

/**
   * Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.
   */
readonly usePeerVerification?: For Bicep, you can use theany()function.;

/**
   * The user name that you use to access Jira Service.
   */
readonly username: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'Magento';

/**
   * Magento server linked service properties.
   */
readonly typeProperties: MagentoLinkedServiceTypeProperties;

/**
   * The access token from Magento.
   */
readonly accessToken?: SecretBase;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The URL of the Magento instance. (i.e. 192.168.222.110/magento3)
   */
readonly host: For Bicep, you can use theany()function.;

/**
   * Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
   */
readonly useEncryptedEndpoints?: For Bicep, you can use theany()function.;

/**
   * Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
   */
readonly useHostVerification?: For Bicep, you can use theany()function.;

/**
   * Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.
   */
readonly usePeerVerification?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'MariaDB';

/**
   * MariaDB server linked service properties.
   */
readonly typeProperties: MariaDBLinkedServiceTypeProperties;

/**
   * An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
readonly connectionString?: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The Azure key vault secret reference of password in connection string.
   */
readonly pwd?: AzureKeyVaultSecretReference;

/**
   * Type of linked service.
   */
readonly type: 'Marketo';

/**
   * Marketo server linked service properties.
   */
readonly typeProperties: MarketoLinkedServiceTypeProperties;

/**
   * The client Id of your Marketo service.
   */
readonly clientId: For Bicep, you can use theany()function.;

/**
   * The client secret of your Marketo service.
   */
readonly clientSecret?: SecretBase;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The endpoint of the Marketo server. (i.e. 123-ABC-321.mktorest.com)
   */
readonly endpoint: For Bicep, you can use theany()function.;

/**
   * Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
   */
readonly useEncryptedEndpoints?: For Bicep, you can use theany()function.;

/**
   * Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
   */
readonly useHostVerification?: For Bicep, you can use theany()function.;

/**
   * Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.
   */
readonly usePeerVerification?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'MicrosoftAccess';

/**
   * Microsoft Access linked service properties.
   */
readonly typeProperties: MicrosoftAccessLinkedServiceTypeProperties;

/**
   * Type of authentication used to connect to the Microsoft Access as ODBC data store. Possible values are: Anonymous and Basic. Type: string (or Expression with resultType string).
   */
readonly authenticationType?: For Bicep, you can use theany()function.;

/**
   * The non-access credential portion of the connection string as well as an optional encrypted credential. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
readonly connectionString: For Bicep, you can use theany()function.;

/**
   * The access credential portion of the connection string specified in driver-specific property-value format.
   */
readonly credential?: SecretBase;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * Password for Basic authentication.
   */
readonly password?: SecretBase;

/**
   * User name for Basic authentication. Type: string (or Expression with resultType string).
   */
readonly userName?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'MongoDb';

/**
   * MongoDB linked service properties.
   */
readonly typeProperties: MongoDbLinkedServiceTypeProperties;

/**
   * Specifies whether to allow self-signed certificates from the server. The default value is false. Type: boolean (or Expression with resultType boolean).
   */
readonly allowSelfSignedServerCert?: For Bicep, you can use theany()function.;

/**
   * The authentication type to be used to connect to the MongoDB database.
   */
readonly authenticationType?: 'Anonymous''Basic';

/**
   * Database to verify the username and password. Type: string (or Expression with resultType string).
   */
readonly authSource?: For Bicep, you can use theany()function.;

/**
   * The name of the MongoDB database that you want to access. Type: string (or Expression with resultType string).
   */
readonly databaseName: For Bicep, you can use theany()function.;

/**
   * Specifies whether the connections to the server are encrypted using SSL. The default value is false. Type: boolean (or Expression with resultType boolean).
   */
readonly enableSsl?: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * Password for authentication.
   */
readonly password?: SecretBase;

/**
   * The TCP port number that the MongoDB server uses to listen for client connections. The default value is 27017. Type: integer (or Expression with resultType integer), minimum: 0.
   */
readonly port?: For Bicep, you can use theany()function.;

/**
   * The IP address or server name of the MongoDB server. Type: string (or Expression with resultType string).
   */
readonly server: For Bicep, you can use theany()function.;

/**
   * Username for authentication. Type: string (or Expression with resultType string).
   */
readonly username?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'MongoDbAtlas';

/**
   * MongoDB Atlas linked service properties.
   */
readonly typeProperties: MongoDbAtlasLinkedServiceTypeProperties;

/**
   * The MongoDB Atlas connection string. Type: string, SecureString or AzureKeyVaultSecretReference. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
readonly connectionString: For Bicep, you can use theany()function.;

/**
   * The name of the MongoDB Atlas database that you want to access. Type: string (or Expression with resultType string).
   */
readonly database: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'MongoDbV2';

/**
   * MongoDB linked service properties.
   */
readonly typeProperties: MongoDbV2LinkedServiceTypeProperties;

/**
   * The MongoDB connection string. Type: string, SecureString or AzureKeyVaultSecretReference. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
readonly connectionString: For Bicep, you can use theany()function.;

/**
   * The name of the MongoDB database that you want to access. Type: string (or Expression with resultType string).
   */
readonly database: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'MySql';

/**
   * MySQL linked service properties.
   */
readonly typeProperties: MySqlLinkedServiceTypeProperties;

/**
   * The connection string.
   */
readonly connectionString: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The Azure key vault secret reference of password in connection string.
   */
readonly password?: AzureKeyVaultSecretReference;

/**
   * Type of linked service.
   */
readonly type: 'Netezza';

/**
   * Netezza linked service properties.
   */
readonly typeProperties: NetezzaLinkedServiceTypeProperties;

/**
   * An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
readonly connectionString?: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The Azure key vault secret reference of password in connection string.
   */
readonly pwd?: AzureKeyVaultSecretReference;

/**
   * Type of linked service.
   */
readonly type: 'OData';

/**
   * OData linked service properties.
   */
readonly typeProperties: ODataLinkedServiceTypeProperties;

/**
   * Specify the resource you are requesting authorization to use Directory. Type: string (or Expression with resultType string).
   */
readonly aadResourceId?: For Bicep, you can use theany()function.;

/**
   * Specify the credential type (key or cert) is used for service principal.
   */
readonly aadServicePrincipalCredentialType?: 'ServicePrincipalCert''ServicePrincipalKey';

/**
   * Type of authentication used to connect to the OData service.
   */
readonly authenticationType?: 'AadServicePrincipal''Anonymous''Basic''ManagedServiceIdentity''Windows';

/**
   * The additional HTTP headers in the request to RESTful API used for authorization. Type: object (or Expression with resultType object).
   */
readonly authHeaders?: For Bicep, you can use theany()function.;

/**
   * Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regionsâ cloud type. Type: string (or Expression with resultType string).
   */
readonly azureCloudType?: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * Password of the OData service.
   */
readonly password?: SecretBase;

/**
   * Specify the base64 encoded certificate of your application registered in Azure Active Directory. Type: string (or Expression with resultType string).
   */
readonly servicePrincipalEmbeddedCert?: SecretBase;

/**
   * Specify the password of your certificate if your certificate has a password and you are using AadServicePrincipal authentication. Type: string (or Expression with resultType string).
   */
readonly servicePrincipalEmbeddedCertPassword?: SecretBase;

/**
   * Specify the application id of your application registered in Azure Active Directory. Type: string (or Expression with resultType string).
   */
readonly servicePrincipalId?: For Bicep, you can use theany()function.;

/**
   * Specify the secret of your application registered in Azure Active Directory. Type: string (or Expression with resultType string).
   */
readonly servicePrincipalKey?: SecretBase;

/**
   * Specify the tenant information (domain name or tenant ID) under which your application resides. Type: string (or Expression with resultType string).
   */
readonly tenant?: For Bicep, you can use theany()function.;

/**
   * The URL of the OData service endpoint. Type: string (or Expression with resultType string).
   */
readonly url: For Bicep, you can use theany()function.;

/**
   * User name of the OData service. Type: string (or Expression with resultType string).
   */
readonly userName?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'Odbc';

/**
   * ODBC linked service properties.
   */
readonly typeProperties: OdbcLinkedServiceTypeProperties;

/**
   * Type of authentication used to connect to the ODBC data store. Possible values are: Anonymous and Basic. Type: string (or Expression with resultType string).
   */
readonly authenticationType?: For Bicep, you can use theany()function.;

/**
   * The non-access credential portion of the connection string as well as an optional encrypted credential. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
readonly connectionString: For Bicep, you can use theany()function.;

/**
   * The access credential portion of the connection string specified in driver-specific property-value format.
   */
readonly credential?: SecretBase;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * Password for Basic authentication.
   */
readonly password?: SecretBase;

/**
   * User name for Basic authentication. Type: string (or Expression with resultType string).
   */
readonly userName?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'Office365';

/**
   * Office365 linked service properties.
   */
readonly typeProperties: Office365LinkedServiceTypeProperties;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * Azure tenant ID to which the Office 365 account belongs. Type: string (or Expression with resultType string).
   */
readonly office365TenantId: For Bicep, you can use theany()function.;

/**
   * Specify the application's client ID. Type: string (or Expression with resultType string).
   */
readonly servicePrincipalId: For Bicep, you can use theany()function.;

/**
   * Specify the application's key.
   */
readonly servicePrincipalKey: SecretBase;

/**
   * Specify the tenant information under which your Azure AD web application resides. Type: string (or Expression with resultType string).
   */
readonly servicePrincipalTenantId: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'Oracle';

/**
   * Oracle database linked service properties.
   */
readonly typeProperties: OracleLinkedServiceTypeProperties;

/**
   * The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
readonly connectionString: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The Azure key vault secret reference of password in connection string.
   */
readonly password?: AzureKeyVaultSecretReference;

/**
   * Type of linked service.
   */
readonly type: 'OracleCloudStorage';

/**
   * Oracle Cloud Storage linked service properties.
   */
readonly typeProperties: OracleCloudStorageLinkedServiceTypeProperties;

/**
   * The access key identifier of the Oracle Cloud Storage Identity and Access Management (IAM) user. Type: string (or Expression with resultType string).
   */
readonly accessKeyId?: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The secret access key of the Oracle Cloud Storage Identity and Access Management (IAM) user.
   */
readonly secretAccessKey?: SecretBase;

/**
   * This value specifies the endpoint to access with the Oracle Cloud Storage Connector. This is an optional property; change it only if you want to try a different service endpoint or want to switch between https and http. Type: string (or Expression with resultType string).
   */
readonly serviceUrl?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'OracleServiceCloud';

/**
   * Oracle Service Cloud linked service properties.
   */
readonly typeProperties: OracleServiceCloudLinkedServiceTypeProperties;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The URL of the Oracle Service Cloud instance.
   */
readonly host: For Bicep, you can use theany()function.;

/**
   * The password corresponding to the user name that you provided in the username key.
   */
readonly password: SecretBase;

/**
   * Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. Type: boolean (or Expression with resultType boolean).
   */
readonly useEncryptedEndpoints?: For Bicep, you can use theany()function.;

/**
   * Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean).
   */
readonly useHostVerification?: For Bicep, you can use theany()function.;

/**
   * Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean).
   */
readonly usePeerVerification?: For Bicep, you can use theany()function.;

/**
   * The user name that you use to access Oracle Service Cloud server.
   */
readonly username: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'Paypal';

/**
   * Paypal Service linked service properties.
   */
readonly typeProperties: PaypalLinkedServiceTypeProperties;

/**
   * The client ID associated with your PayPal application.
   */
readonly clientId: For Bicep, you can use theany()function.;

/**
   * The client secret associated with your PayPal application.
   */
readonly clientSecret?: SecretBase;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The URLÂ of the PayPal instance. (i.e. api.sandbox.paypal.com)
   */
readonly host: For Bicep, you can use theany()function.;

/**
   * Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
   */
readonly useEncryptedEndpoints?: For Bicep, you can use theany()function.;

/**
   * Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
   */
readonly useHostVerification?: For Bicep, you can use theany()function.;

/**
   * Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.
   */
readonly usePeerVerification?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'Phoenix';

/**
   * Phoenix server linked service properties.
   */
readonly typeProperties: PhoenixLinkedServiceTypeProperties;

/**
   * Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false.
   */
readonly allowHostNameCNMismatch?: For Bicep, you can use theany()function.;

/**
   * Specifies whether to allow self-signed certificates from the server. The default value is false.
   */
readonly allowSelfSignedServerCert?: For Bicep, you can use theany()function.;

/**
   * The authentication mechanism used to connect to the Phoenix server.
   */
readonly authenticationType: 'Anonymous''UsernameAndPassword''WindowsAzureHDInsightService';

/**
   * Specifies whether the connections to the server are encrypted using SSL. The default value is false.
   */
readonly enableSsl?: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The IP address or host name of the Phoenix server. (i.e. 192.168.222.160)
   */
readonly host: For Bicep, you can use theany()function.;

/**
   * The partial URL corresponding to the Phoenix server. (i.e. /gateway/sandbox/phoenix/version). The default value is hbasephoenix if using WindowsAzureHDInsightService.
   */
readonly httpPath?: For Bicep, you can use theany()function.;

/**
   * The password corresponding to the user name.
   */
readonly password?: SecretBase;

/**
   * The TCP port that the Phoenix server uses to listen for client connections. The default value is 8765.
   */
readonly port?: For Bicep, you can use theany()function.;

/**
   * The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR.
   */
readonly trustedCertPath?: For Bicep, you can use theany()function.;

/**
   * The user name used to connect to the Phoenix server.
   */
readonly username?: For Bicep, you can use theany()function.;

/**
   * Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false.
   */
readonly useSystemTrustStore?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'PostgreSql';

/**
   * PostgreSQL linked service properties.
   */
readonly typeProperties: PostgreSqlLinkedServiceTypeProperties;

/**
   * The connection string.
   */
readonly connectionString: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The Azure key vault secret reference of password in connection string.
   */
readonly password?: AzureKeyVaultSecretReference;

/**
   * Type of linked service.
   */
readonly type: 'Presto';

/**
   * Presto server linked service properties.
   */
readonly typeProperties: PrestoLinkedServiceTypeProperties;

/**
   * Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false.
   */
readonly allowHostNameCNMismatch?: For Bicep, you can use theany()function.;

/**
   * Specifies whether to allow self-signed certificates from the server. The default value is false.
   */
readonly allowSelfSignedServerCert?: For Bicep, you can use theany()function.;

/**
   * The authentication mechanism used to connect to the Presto server.
   */
readonly authenticationType: 'Anonymous''LDAP';

/**
   * The catalog context for all request against the server.
   */
readonly catalog: For Bicep, you can use theany()function.;

/**
   * Specifies whether the connections to the server are encrypted using SSL. The default value is false.
   */
readonly enableSsl?: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The IP address or host name of the Presto server. (i.e. 192.168.222.160)
   */
readonly host: For Bicep, you can use theany()function.;

/**
   * The password corresponding to the user name.
   */
readonly password?: SecretBase;

/**
   * The TCP port that the Presto server uses to listen for client connections. The default value is 8080.
   */
readonly port?: For Bicep, you can use theany()function.;

/**
   * The version of the Presto server. (i.e. 0.148-t)
   */
readonly serverVersion: For Bicep, you can use theany()function.;

/**
   * The local time zone used by the connection. Valid values for this option are specified in the IANA Time Zone Database. The default value is the system time zone.
   */
readonly timeZoneID?: For Bicep, you can use theany()function.;

/**
   * The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR.
   */
readonly trustedCertPath?: For Bicep, you can use theany()function.;

/**
   * The user name used to connect to the Presto server.
   */
readonly username?: For Bicep, you can use theany()function.;

/**
   * Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false.
   */
readonly useSystemTrustStore?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'Quickbase';

/**
   * Quickbase linked service properties.
   */
readonly typeProperties: QuickbaseLinkedServiceTypeProperties;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The url to connect Quickbase source. Type: string (or Expression with resultType string).
   */
readonly url: For Bicep, you can use theany()function.;

/**
   * The user token for the Quickbase source.
   */
readonly userToken: SecretBase;

/**
   * Type of linked service.
   */
readonly type: 'QuickBooks';

/**
   * QuickBooks server linked service properties.
   */
readonly typeProperties: QuickBooksLinkedServiceTypeProperties;

/**
   * The access token for OAuth 1.0 authentication.
   */
readonly accessToken?: SecretBase;

/**
   * The access token secret for OAuth 1.0 authentication.
   */
readonly accessTokenSecret?: SecretBase;

/**
   * The company ID of the QuickBooks company to authorize.
   */
readonly companyId?: For Bicep, you can use theany()function.;

/**
   * Properties used to connect to QuickBooks. It is mutually exclusive with any other properties in the linked service. Type: object.
   */
readonly connectionProperties?: For Bicep, you can use theany()function.;

/**
   * The consumer key for OAuth 1.0 authentication.
   */
readonly consumerKey?: For Bicep, you can use theany()function.;

/**
   * The consumer secret for OAuth 1.0 authentication.
   */
readonly consumerSecret?: SecretBase;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The endpoint of the QuickBooks server. (i.e. quickbooks.api.intuit.com)
   */
readonly endpoint?: For Bicep, you can use theany()function.;

/**
   * Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
   */
readonly useEncryptedEndpoints?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'Responsys';

/**
   * Responsys linked service properties.
   */
readonly typeProperties: ResponsysLinkedServiceTypeProperties;

/**
   * The client ID associated with the Responsys application. Type: string (or Expression with resultType string).
   */
readonly clientId: For Bicep, you can use theany()function.;

/**
   * The client secret associated with the Responsys application. Type: string (or Expression with resultType string).
   */
readonly clientSecret?: SecretBase;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The endpoint of the Responsys server.
   */
readonly endpoint: For Bicep, you can use theany()function.;

/**
   * Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. Type: boolean (or Expression with resultType boolean).
   */
readonly useEncryptedEndpoints?: For Bicep, you can use theany()function.;

/**
   * Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean).
   */
readonly useHostVerification?: For Bicep, you can use theany()function.;

/**
   * Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean).
   */
readonly usePeerVerification?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'RestService';

/**
   * Rest Service linked service properties.
   */
readonly typeProperties: RestServiceLinkedServiceTypeProperties;

/**
   * The resource you are requesting authorization to use.
   */
readonly aadResourceId?: For Bicep, you can use theany()function.;

/**
   * Type of authentication used to connect to the REST service.
   */
readonly authenticationType: 'AadServicePrincipal''Anonymous''Basic''ManagedServiceIdentity''OAuth2ClientCredential';

/**
   * The additional HTTP headers in the request to RESTful API used for authorization. Type: object (or Expression with resultType object).
   */
readonly authHeaders?: For Bicep, you can use theany()function.;

/**
   * Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regionsâ cloud type. Type: string (or Expression with resultType string).
   */
readonly azureCloudType?: For Bicep, you can use theany()function.;

/**
   * The client ID associated with your application. Type: string (or Expression with resultType string).
   */
readonly clientId?: For Bicep, you can use theany()function.;

/**
   * The client secret associated with your application.
   */
readonly clientSecret?: SecretBase;

/**
   * The credential reference containing authentication information.
   */
readonly credential?: CredentialReference;

/**
   * Whether to validate server side SSL certificate when connecting to the endpoint.The default value is true. Type: boolean (or Expression with resultType boolean).
   */
readonly enableServerCertificateValidation?: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The password used in Basic authentication type.
   */
readonly password?: SecretBase;

/**
   * The target service or resource to which the access will be requested. Type: string (or Expression with resultType string).
   */
readonly resource?: For Bicep, you can use theany()function.;

/**
   * The scope of the access required. It describes what kind of access will be requested. Type: string (or Expression with resultType string).
   */
readonly scope?: For Bicep, you can use theany()function.;

/**
   * The application's client ID used in AadServicePrincipal authentication type.
   */
readonly servicePrincipalId?: For Bicep, you can use theany()function.;

/**
   * The application's key used in AadServicePrincipal authentication type.
   */
readonly servicePrincipalKey?: SecretBase;

/**
   * The tenant information (domain name or tenant ID) used in AadServicePrincipal authentication type under which your application resides.
   */
readonly tenant?: For Bicep, you can use theany()function.;

/**
   * The token endpoint of the authorization server to acquire access token. Type: string (or Expression with resultType string).
   */
readonly tokenEndpoint?: For Bicep, you can use theany()function.;

/**
   * The base URL of the REST service.
   */
readonly url: For Bicep, you can use theany()function.;

/**
   * The user name used in Basic authentication type.
   */
readonly userName?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'Salesforce';

/**
   * Salesforce linked service properties.
   */
readonly typeProperties: SalesforceLinkedServiceTypeProperties;

/**
   * The Salesforce API version used in ADF. Type: string (or Expression with resultType string).
   */
readonly apiVersion?: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The URL of Salesforce instance. Default is 'https://login.salesforce.com'. To copy data from sandbox, specify 'https://test.salesforce.com'. To copy data from custom domain, specify, for example, 'https://[domain].my.salesforce.com'. Type: string (or Expression with resultType string).
   */
readonly environmentUrl?: For Bicep, you can use theany()function.;

/**
   * The password for Basic authentication of the Salesforce instance.
   */
readonly password?: SecretBase;

/**
   * The security token is optional to remotely access Salesforce instance.
   */
readonly securityToken?: SecretBase;

/**
   * The username for Basic authentication of the Salesforce instance. Type: string (or Expression with resultType string).
   */
readonly username?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'SalesforceMarketingCloud';

/**
   * Salesforce Marketing Cloud linked service properties.
   */
readonly typeProperties: SalesforceMarketingCloudLinkedServiceTypeProperties;

/**
   * The client ID associated with the Salesforce Marketing Cloud application. Type: string (or Expression with resultType string).
   */
readonly clientId?: For Bicep, you can use theany()function.;

/**
   * The client secret associated with the Salesforce Marketing Cloud application. Type: string (or Expression with resultType string).
   */
readonly clientSecret?: SecretBase;

/**
   * Properties used to connect to Salesforce Marketing Cloud. It is mutually exclusive with any other properties in the linked service. Type: object.
   */
readonly connectionProperties?: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. Type: boolean (or Expression with resultType boolean).
   */
readonly useEncryptedEndpoints?: For Bicep, you can use theany()function.;

/**
   * Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean).
   */
readonly useHostVerification?: For Bicep, you can use theany()function.;

/**
   * Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean).
   */
readonly usePeerVerification?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'SalesforceServiceCloud';

/**
   * Salesforce Service Cloud linked service properties.
   */
readonly typeProperties: SalesforceServiceCloudLinkedServiceTypeProperties;

/**
   * The Salesforce API version used in ADF. Type: string (or Expression with resultType string).
   */
readonly apiVersion?: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The URL of Salesforce Service Cloud instance. Default is 'https://login.salesforce.com'. To copy data from sandbox, specify 'https://test.salesforce.com'. To copy data from custom domain, specify, for example, 'https://[domain].my.salesforce.com'. Type: string (or Expression with resultType string).
   */
readonly environmentUrl?: For Bicep, you can use theany()function.;

/**
   * Extended properties appended to the connection string. Type: string (or Expression with resultType string).
   */
readonly extendedProperties?: For Bicep, you can use theany()function.;

/**
   * The password for Basic authentication of the Salesforce instance.
   */
readonly password?: SecretBase;

/**
   * The security token is optional to remotely access Salesforce instance.
   */
readonly securityToken?: SecretBase;

/**
   * The username for Basic authentication of the Salesforce instance. Type: string (or Expression with resultType string).
   */
readonly username?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'SapBW';

/**
   * Properties specific to this linked service type.
   */
readonly typeProperties: SapBWLinkedServiceTypeProperties;

/**
   * Client ID of the client on the BW system. (Usually a three-digit decimal number represented as a string) Type: string (or Expression with resultType string).
   */
readonly clientId: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * Password to access the SAP BW server.
   */
readonly password?: SecretBase;

/**
   * Host name of the SAP BW instance. Type: string (or Expression with resultType string).
   */
readonly server: For Bicep, you can use theany()function.;

/**
   * System number of the BW system. (Usually a two-digit decimal number represented as a string.) Type: string (or Expression with resultType string).
   */
readonly systemNumber: For Bicep, you can use theany()function.;

/**
   * Username to access the SAP BW server. Type: string (or Expression with resultType string).
   */
readonly userName?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'SapCloudForCustomer';

/**
   * SAP Cloud for Customer linked service properties.
   */
readonly typeProperties: SapCloudForCustomerLinkedServiceTypeProperties;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Either encryptedCredential or username/password must be provided. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The password for Basic authentication.
   */
readonly password?: SecretBase;

/**
   * The URL of SAP Cloud for Customer OData API. For example, '[https://[tenantname].crm.ondemand.com/sap/c4c/odata/v1]'. Type: string (or Expression with resultType string).
   */
readonly url: For Bicep, you can use theany()function.;

/**
   * The username for Basic authentication. Type: string (or Expression with resultType string).
   */
readonly username?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'SapEcc';

/**
   * SAP ECC linked service properties.
   */
readonly typeProperties: SapEccLinkedServiceTypeProperties;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Either encryptedCredential or username/password must be provided. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: string;

/**
   * The password for Basic authentication.
   */
readonly password?: SecretBase;

/**
   * The URL of SAP ECC OData API. For example, '[https://hostname:port/sap/opu/odata/sap/servicename/]'. Type: string (or Expression with resultType string).
   */
readonly url: string;

/**
   * The username for Basic authentication. Type: string (or Expression with resultType string).
   */
readonly username?: string;

/**
   * Type of linked service.
   */
readonly type: 'SapHana';

/**
   * Properties specific to this linked service type.
   */
readonly typeProperties: SapHanaLinkedServiceProperties;

/**
   * The authentication type to be used to connect to the SAP HANA server.
   */
readonly authenticationType?: 'Basic''Windows';

/**
   * SAP HANA ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
readonly connectionString?: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * Password to access the SAP HANA server.
   */
readonly password?: SecretBase;

/**
   * Host name of the SAP HANA server. Type: string (or Expression with resultType string).
   */
readonly server?: For Bicep, you can use theany()function.;

/**
   * Username to access the SAP HANA server. Type: string (or Expression with resultType string).
   */
readonly userName?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'SapOdp';

/**
   * Properties specific to SAP ODP linked service type.
   */
readonly typeProperties: SapOdpLinkedServiceTypeProperties;

/**
   * Client ID of the client on the SAP system where the table is located. (Usually a three-digit decimal number represented as a string) Type: string (or Expression with resultType string).
   */
readonly clientId?: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * Language of the SAP system where the table is located. The default value is EN. Type: string (or Expression with resultType string).
   */
readonly language?: For Bicep, you can use theany()function.;

/**
   * The Logon Group for the SAP System. Type: string (or Expression with resultType string).
   */
readonly logonGroup?: For Bicep, you can use theany()function.;

/**
   * The hostname of the SAP Message Server. Type: string (or Expression with resultType string).
   */
readonly messageServer?: For Bicep, you can use theany()function.;

/**
   * The service name or port number of the Message Server. Type: string (or Expression with resultType string).
   */
readonly messageServerService?: For Bicep, you can use theany()function.;

/**
   * Password to access the SAP server where the table is located.
   */
readonly password?: SecretBase;

/**
   * Host name of the SAP instance where the table is located. Type: string (or Expression with resultType string).
   */
readonly server?: For Bicep, you can use theany()function.;

/**
   * External security product's library to access the SAP server where the table is located. Type: string (or Expression with resultType string).
   */
readonly sncLibraryPath?: For Bicep, you can use theany()function.;

/**
   * SNC activation indicator to access the SAP server where the table is located. Must be either 0 (off) or 1 (on). Type: string (or Expression with resultType string).
   */
readonly sncMode?: For Bicep, you can use theany()function.;

/**
   * Initiator's SNC name to access the SAP server where the table is located. Type: string (or Expression with resultType string).
   */
readonly sncMyName?: For Bicep, you can use theany()function.;

/**
   * Communication partner's SNC name to access the SAP server where the table is located. Type: string (or Expression with resultType string).
   */
readonly sncPartnerName?: For Bicep, you can use theany()function.;

/**
   * SNC Quality of Protection. Allowed value include: 1, 2, 3, 8, 9. Type: string (or Expression with resultType string).
   */
readonly sncQop?: For Bicep, you can use theany()function.;

/**
   * The subscriber name. Type: string (or Expression with resultType string).
   */
readonly subscriberName?: For Bicep, you can use theany()function.;

/**
   * SystemID of the SAP system where the table is located. Type: string (or Expression with resultType string).
   */
readonly systemId?: For Bicep, you can use theany()function.;

/**
   * System number of the SAP system where the table is located. (Usually a two-digit decimal number represented as a string.) Type: string (or Expression with resultType string).
   */
readonly systemNumber?: For Bicep, you can use theany()function.;

/**
   * Username to access the SAP server where the table is located. Type: string (or Expression with resultType string).
   */
readonly userName?: For Bicep, you can use theany()function.;

/**
   * SNC X509 certificate file path. Type: string (or Expression with resultType string).
   */
readonly x509CertificatePath?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'SapOpenHub';

/**
   * Properties specific to SAP Business Warehouse Open Hub Destination linked service type.
   */
readonly typeProperties: SapOpenHubLinkedServiceTypeProperties;

/**
   * Client ID of the client on the BW system where the open hub destination is located. (Usually a three-digit decimal number represented as a string) Type: string (or Expression with resultType string).
   */
readonly clientId?: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * Language of the BW system where the open hub destination is located. The default value is EN. Type: string (or Expression with resultType string).
   */
readonly language?: For Bicep, you can use theany()function.;

/**
   * The Logon Group for the SAP System. Type: string (or Expression with resultType string).
   */
readonly logonGroup?: For Bicep, you can use theany()function.;

/**
   * The hostname of the SAP Message Server. Type: string (or Expression with resultType string).
   */
readonly messageServer?: For Bicep, you can use theany()function.;

/**
   * The service name or port number of the Message Server. Type: string (or Expression with resultType string).
   */
readonly messageServerService?: For Bicep, you can use theany()function.;

/**
   * Password to access the SAP BW server where the open hub destination is located.
   */
readonly password?: SecretBase;

/**
   * Host name of the SAP BW instance where the open hub destination is located. Type: string (or Expression with resultType string).
   */
readonly server?: For Bicep, you can use theany()function.;

/**
   * SystemID of the SAP system where the table is located. Type: string (or Expression with resultType string).
   */
readonly systemId?: For Bicep, you can use theany()function.;

/**
   * System number of the BW system where the open hub destination is located. (Usually a two-digit decimal number represented as a string.) Type: string (or Expression with resultType string).
   */
readonly systemNumber?: For Bicep, you can use theany()function.;

/**
   * Username to access the SAP BW server where the open hub destination is located. Type: string (or Expression with resultType string).
   */
readonly userName?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'SapTable';

/**
   * Properties specific to this linked service type.
   */
readonly typeProperties: SapTableLinkedServiceTypeProperties;

/**
   * Client ID of the client on the SAP system where the table is located. (Usually a three-digit decimal number represented as a string) Type: string (or Expression with resultType string).
   */
readonly clientId?: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * Language of the SAP system where the table is located. The default value is EN. Type: string (or Expression with resultType string).
   */
readonly language?: For Bicep, you can use theany()function.;

/**
   * The Logon Group for the SAP System. Type: string (or Expression with resultType string).
   */
readonly logonGroup?: For Bicep, you can use theany()function.;

/**
   * The hostname of the SAP Message Server. Type: string (or Expression with resultType string).
   */
readonly messageServer?: For Bicep, you can use theany()function.;

/**
   * The service name or port number of the Message Server. Type: string (or Expression with resultType string).
   */
readonly messageServerService?: For Bicep, you can use theany()function.;

/**
   * Password to access the SAP server where the table is located.
   */
readonly password?: SecretBase;

/**
   * Host name of the SAP instance where the table is located. Type: string (or Expression with resultType string).
   */
readonly server?: For Bicep, you can use theany()function.;

/**
   * External security product's library to access the SAP server where the table is located. Type: string (or Expression with resultType string).
   */
readonly sncLibraryPath?: For Bicep, you can use theany()function.;

/**
   * SNC activation indicator to access the SAP server where the table is located. Must be either 0 (off) or 1 (on). Type: string (or Expression with resultType string).
   */
readonly sncMode?: For Bicep, you can use theany()function.;

/**
   * Initiator's SNC name to access the SAP server where the table is located. Type: string (or Expression with resultType string).
   */
readonly sncMyName?: For Bicep, you can use theany()function.;

/**
   * Communication partner's SNC name to access the SAP server where the table is located. Type: string (or Expression with resultType string).
   */
readonly sncPartnerName?: For Bicep, you can use theany()function.;

/**
   * SNC Quality of Protection. Allowed value include: 1, 2, 3, 8, 9. Type: string (or Expression with resultType string).
   */
readonly sncQop?: For Bicep, you can use theany()function.;

/**
   * SystemID of the SAP system where the table is located. Type: string (or Expression with resultType string).
   */
readonly systemId?: For Bicep, you can use theany()function.;

/**
   * System number of the SAP system where the table is located. (Usually a two-digit decimal number represented as a string.) Type: string (or Expression with resultType string).
   */
readonly systemNumber?: For Bicep, you can use theany()function.;

/**
   * Username to access the SAP server where the table is located. Type: string (or Expression with resultType string).
   */
readonly userName?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'ServiceNow';

/**
   * ServiceNow server linked service properties.
   */
readonly typeProperties: ServiceNowLinkedServiceTypeProperties;

/**
   * The authentication type to use.
   */
readonly authenticationType: 'Basic''OAuth2';

/**
   * The client id for OAuth2 authentication.
   */
readonly clientId?: For Bicep, you can use theany()function.;

/**
   * The client secret for OAuth2 authentication.
   */
readonly clientSecret?: SecretBase;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The endpoint of the ServiceNow server. (i.e. {instance}.service-now.com)
   */
readonly endpoint: For Bicep, you can use theany()function.;

/**
   * The password corresponding to the user name for Basic and OAuth2 authentication.
   */
readonly password?: SecretBase;

/**
   * Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
   */
readonly useEncryptedEndpoints?: For Bicep, you can use theany()function.;

/**
   * Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
   */
readonly useHostVerification?: For Bicep, you can use theany()function.;

/**
   * Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.
   */
readonly usePeerVerification?: For Bicep, you can use theany()function.;

/**
   * The user name used to connect to the ServiceNow server for Basic and OAuth2 authentication.
   */
readonly username?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'Sftp';

/**
   * Properties specific to this linked service type.
   */
readonly typeProperties: SftpServerLinkedServiceTypeProperties;

/**
   * The authentication type to be used to connect to the FTP server.
   */
readonly authenticationType?: 'Basic''MultiFactor''SshPublicKey';

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The SFTP server host name. Type: string (or Expression with resultType string).
   */
readonly host: For Bicep, you can use theany()function.;

/**
   * The host key finger-print of the SFTP server. When SkipHostKeyValidation is false, HostKeyFingerprint should be specified. Type: string (or Expression with resultType string).
   */
readonly hostKeyFingerprint?: For Bicep, you can use theany()function.;

/**
   * The password to decrypt the SSH private key if the SSH private key is encrypted.
   */
readonly passPhrase?: SecretBase;

/**
   * Password to logon the SFTP server for Basic authentication.
   */
readonly password?: SecretBase;

/**
   * The TCP port number that the SFTP server uses to listen for client connections. Default value is 22. Type: integer (or Expression with resultType integer), minimum: 0.
   */
readonly port?: For Bicep, you can use theany()function.;

/**
   * Base64 encoded SSH private key content for SshPublicKey authentication. For on-premises copy with SshPublicKey authentication, either PrivateKeyPath or PrivateKeyContent should be specified. SSH private key should be OpenSSH format.
   */
readonly privateKeyContent?: SecretBase;

/**
   * The SSH private key file path for SshPublicKey authentication. Only valid for on-premises copy. For on-premises copy with SshPublicKey authentication, either PrivateKeyPath or PrivateKeyContent should be specified. SSH private key should be OpenSSH format. Type: string (or Expression with resultType string).
   */
readonly privateKeyPath?: For Bicep, you can use theany()function.;

/**
   * If true, skip the SSH host key validation. Default value is false. Type: boolean (or Expression with resultType boolean).
   */
readonly skipHostKeyValidation?: For Bicep, you can use theany()function.;

/**
   * The username used to log on to the SFTP server. Type: string (or Expression with resultType string).
   */
readonly userName?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'SharePonumberOnlineList';

/**
   * SharePoint Online List linked service properties.
   */
readonly typeProperties: SharePonumberOnlineListLinkedServiceTypeProperties;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The application (client) ID of your application registered in Azure Active Directory. Make sure to grant SharePoint site permission to this application. Type: string (or Expression with resultType string).
   */
readonly servicePrincipalId: For Bicep, you can use theany()function.;

/**
   * The client secret of your application registered in Azure Active Directory. Type: string (or Expression with resultType string).
   */
readonly servicePrincipalKey: SecretBase;

/**
   * The URL of the SharePoint Online site. For example,https://contoso.sharepoint.com/sites/siteName. Type: string (or Expression with resultType string).
   */
readonly siteUrl: For Bicep, you can use theany()function.;

/**
   * The tenant ID under which your application resides. You can find it from Azure portal Active Directory overview page. Type: string (or Expression with resultType string).
   */
readonly tenantId: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'Shopify';

/**
   * Shopify Service linked service properties.
   */
readonly typeProperties: ShopifyLinkedServiceTypeProperties;

/**
   * The API access token that can be used to access Shopifyâs data. The token won't expire if it is offline mode.
   */
readonly accessToken?: SecretBase;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The endpoint of the Shopify server. (i.e. mystore.myshopify.com)
   */
readonly host: For Bicep, you can use theany()function.;

/**
   * Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
   */
readonly useEncryptedEndpoints?: For Bicep, you can use theany()function.;

/**
   * Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
   */
readonly useHostVerification?: For Bicep, you can use theany()function.;

/**
   * Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.
   */
readonly usePeerVerification?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'Smartsheet';

/**
   * Smartsheet linked service properties.
   */
readonly typeProperties: SmartsheetLinkedServiceTypeProperties;

/**
   * The api token for the Smartsheet source.
   */
readonly apiToken: SecretBase;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'Snowflake';

/**
   * Snowflake linked service properties.
   */
readonly typeProperties: SnowflakeLinkedServiceTypeProperties;

/**
   * The connection string of snowflake. Type: string, SecureString.
   */
readonly connectionString: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The Azure key vault secret reference of password in connection string.
   */
readonly password?: AzureKeyVaultSecretReference;

/**
   * Type of linked service.
   */
readonly type: 'Spark';

/**
   * Spark Server linked service properties.
   */
readonly typeProperties: SparkLinkedServiceTypeProperties;

/**
   * Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false.
   */
readonly allowHostNameCNMismatch?: For Bicep, you can use theany()function.;

/**
   * Specifies whether to allow self-signed certificates from the server. The default value is false.
   */
readonly allowSelfSignedServerCert?: For Bicep, you can use theany()function.;

/**
   * The authentication method used to access the Spark server.
   */
readonly authenticationType: 'Anonymous''Username''UsernameAndPassword''WindowsAzureHDInsightService';

/**
   * Specifies whether the connections to the server are encrypted using SSL. The default value is false.
   */
readonly enableSsl?: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * IP address or host name of the Spark server
   */
readonly host: For Bicep, you can use theany()function.;

/**
   * The partial URL corresponding to the Spark server.
   */
readonly httpPath?: For Bicep, you can use theany()function.;

/**
   * The password corresponding to the user name that you provided in the Username field
   */
readonly password?: SecretBase;

/**
   * The TCP port that the Spark server uses to listen for client connections.
   */
readonly port: For Bicep, you can use theany()function.;

/**
   * The type of Spark server.
   */
readonly serverType?: 'SharkServer''SharkServer2''SparkThriftServer';

/**
   * The transport protocol to use in the Thrift layer.
   */
readonly thriftTransportProtocol?: 'Binary''HTTP ''SASL';

/**
   * The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR.
   */
readonly trustedCertPath?: For Bicep, you can use theany()function.;

/**
   * The user name that you use to access Spark Server.
   */
readonly username?: For Bicep, you can use theany()function.;

/**
   * Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false.
   */
readonly useSystemTrustStore?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'SqlServer';

/**
   * SQL Server linked service properties.
   */
readonly typeProperties: SqlServerLinkedServiceTypeProperties;

/**
   * Sql always encrypted properties.
   */
readonly alwaysEncryptedSettings?: SqlAlwaysEncryptedProperties;

/**
   * The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
readonly connectionString: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The on-premises Windows authentication password.
   */
readonly password?: SecretBase;

/**
   * The on-premises Windows authentication user name. Type: string (or Expression with resultType string).
   */
readonly userName?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'Square';

/**
   * Square Service linked service properties.
   */
readonly typeProperties: SquareLinkedServiceTypeProperties;

/**
   * The client ID associated with your Square application.
   */
readonly clientId?: For Bicep, you can use theany()function.;

/**
   * The client secret associated with your Square application.
   */
readonly clientSecret?: SecretBase;

/**
   * Properties used to connect to Square. It is mutually exclusive with any other properties in the linked service. Type: object.
   */
readonly connectionProperties?: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The URLÂ of the Square instance. (i.e. mystore.mysquare.com)
   */
readonly host?: For Bicep, you can use theany()function.;

/**
   * The redirect URL assigned in the Square application dashboard. (i.e.http://localhost:2500)
   */
readonly redirectUri?: For Bicep, you can use theany()function.;

/**
   * Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
   */
readonly useEncryptedEndpoints?: For Bicep, you can use theany()function.;

/**
   * Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
   */
readonly useHostVerification?: For Bicep, you can use theany()function.;

/**
   * Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.
   */
readonly usePeerVerification?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'Sybase';

/**
   * Sybase linked service properties.
   */
readonly typeProperties: SybaseLinkedServiceTypeProperties;

/**
   * AuthenticationType to be used for connection.
   */
readonly authenticationType?: 'Basic''Windows';

/**
   * Database name for connection. Type: string (or Expression with resultType string).
   */
readonly database: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * Password for authentication.
   */
readonly password?: SecretBase;

/**
   * Schema name for connection. Type: string (or Expression with resultType string).
   */
readonly schema?: For Bicep, you can use theany()function.;

/**
   * Server name for connection. Type: string (or Expression with resultType string).
   */
readonly server: For Bicep, you can use theany()function.;

/**
   * Username for authentication. Type: string (or Expression with resultType string).
   */
readonly username?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'TeamDesk';

/**
   * TeamDesk linked service properties.
   */
readonly typeProperties: TeamDeskLinkedServiceTypeProperties;

/**
   * The api token for the TeamDesk source.
   */
readonly apiToken?: SecretBase;

/**
   * The authentication type to use.
   */
readonly authenticationType: 'Basic''Token';

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The password of the TeamDesk source.
   */
readonly password?: SecretBase;

/**
   * The url to connect TeamDesk source. Type: string (or Expression with resultType string).
   */
readonly url: For Bicep, you can use theany()function.;

/**
   * The username of the TeamDesk source. Type: string (or Expression with resultType string).
   */
readonly userName?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'Teradata';

/**
   * Teradata linked service properties.
   */
readonly typeProperties: TeradataLinkedServiceTypeProperties;

/**
   * AuthenticationType to be used for connection.
   */
readonly authenticationType?: 'Basic''Windows';

/**
   * Teradata ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
readonly connectionString?: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * Password for authentication.
   */
readonly password?: SecretBase;

/**
   * Server name for connection. Type: string (or Expression with resultType string).
   */
readonly server?: For Bicep, you can use theany()function.;

/**
   * Username for authentication. Type: string (or Expression with resultType string).
   */
readonly username?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'Twilio';

/**
   * Twilio linked service properties.
   */
readonly typeProperties: TwilioLinkedServiceTypeProperties;

/**
   * The auth token of Twilio service.
   */
readonly password: SecretBase;

/**
   * The Account SID of Twilio service.
   */
readonly userName: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'Vertica';

/**
   * Vertica linked service properties.
   */
readonly typeProperties: VerticaLinkedServiceTypeProperties;

/**
   * An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
   */
readonly connectionString?: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The Azure key vault secret reference of password in connection string.
   */
readonly pwd?: AzureKeyVaultSecretReference;

/**
   * Type of linked service.
   */
readonly type: 'Web';

/**
   * Web linked service properties.
   */
readonly typeProperties: WebLinkedServiceTypeProperties;

/**
   * The URL of the web service endpoint, e.g.https://www.microsoft.com. Type: string (or Expression with resultType string).
   */
readonly url: For Bicep, you can use theany()function.;

/**
   * Set the object type
   */
readonly authenticationType: AnonymousBasicClientCertificate;

/**
   * Type of authentication used to connect to the web table source.
   */
readonly authenticationType: 'Anonymous';

/**
   * Type of authentication used to connect to the web table source.
   */
readonly authenticationType: 'Basic';

/**
   * The password for Basic authentication.
   */
readonly password: SecretBase;

/**
   * User name for Basic authentication. Type: string (or Expression with resultType string).
   */
readonly username: For Bicep, you can use theany()function.;

/**
   * Type of authentication used to connect to the web table source.
   */
readonly authenticationType: 'ClientCertificate';

/**
   * Password for the PFX file.
   */
readonly password: SecretBase;

/**
   * Base64-encoded contents of a PFX file.
   */
readonly pfx: SecretBase;

/**
   * Type of linked service.
   */
readonly type: 'Xero';

/**
   * Xero Service linked service properties.
   */
readonly typeProperties: XeroLinkedServiceTypeProperties;

/**
   * Properties used to connect to Xero. It is mutually exclusive with any other properties in the linked service. Type: object.
   */
readonly connectionProperties?: For Bicep, you can use theany()function.;

/**
   * The consumer key associated with the Xero application.
   */
readonly consumerKey?: SecretBase;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The endpoint of the Xero server. (i.e. api.xero.com)
   */
readonly host?: For Bicep, you can use theany()function.;

/**
   * The private key from the .pem file that was generated for your Xero private application. You must include all the text from the .pem file, including the Unix line endings().
   */
readonly privateKey?: SecretBase;

/**
   * Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
   */
readonly useEncryptedEndpoints?: For Bicep, you can use theany()function.;

/**
   * Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
   */
readonly useHostVerification?: For Bicep, you can use theany()function.;

/**
   * Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.
   */
readonly usePeerVerification?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'Zendesk';

/**
   * Zendesk linked service properties.
   */
readonly typeProperties: ZendeskLinkedServiceTypeProperties;

/**
   * The api token for the Zendesk source.
   */
readonly apiToken?: SecretBase;

/**
   * The authentication type to use.
   */
readonly authenticationType: 'Basic''Token';

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The password of the Zendesk source.
   */
readonly password?: SecretBase;

/**
   * The url to connect Zendesk source. Type: string (or Expression with resultType string).
   */
readonly url: For Bicep, you can use theany()function.;

/**
   * The username of the Zendesk source. Type: string (or Expression with resultType string).
   */
readonly userName?: For Bicep, you can use theany()function.;

/**
   * Type of linked service.
   */
readonly type: 'Zoho';

/**
   * Zoho server linked service properties.
   */
readonly typeProperties: ZohoLinkedServiceTypeProperties;

/**
   * The access token for Zoho authentication.
   */
readonly accessToken?: SecretBase;

/**
   * Properties used to connect to Zoho. It is mutually exclusive with any other properties in the linked service. Type: object.
   */
readonly connectionProperties?: For Bicep, you can use theany()function.;

/**
   * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
   */
readonly encryptedCredential?: For Bicep, you can use theany()function.;

/**
   * The endpoint of the Zoho server. (i.e. crm.zoho.com/crm/private)
   */
readonly endpoint?: For Bicep, you can use theany()function.;

/**
   * Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
   */
readonly useEncryptedEndpoints?: For Bicep, you can use theany()function.;

/**
   * Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
   */
readonly useHostVerification?: For Bicep, you can use theany()function.;

/**
   * Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.
   */
readonly usePeerVerification?: For Bicep, you can use theany()function.;
}

/**
 * DatafactoryFactoriesLinkedservices resource
 */
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
