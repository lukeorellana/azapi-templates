```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataMigration/databaseMigrations@2022-03-30-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      kind = "string"
      migrationOperationId = "string"
      migrationService = "string"
      provisioningError = "string"
      scope = "string"
      sourceDatabaseName = "string"
      sourceSqlConnection = {
        authentication = "string"
        dataSource = "string"
        encryptConnection = bool
        password = "string"
        trustServerCertificate = bool
        userName = "string"
      }
      tableList = [
        "string"
      ]
      targetDatabaseCollation = "string"
      targetSqlConnection = {
        authentication = "string"
        dataSource = "string"
        encryptConnection = bool
        password = "string"
        trustServerCertificate = bool
        userName = "string"
      }
    }
  })
}

```

### databaseMigrations

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | Database Migration Resource properties for SQL database. | DatabaseMigrationPropertiesSqlDb |


### DatabaseMigrationPropertiesSqlDb

| Name | Description | Value |
|-|-|-|
| kind |  | 'SqlDb''SqlMi''SqlVm' (required) |
| migrationOperationId | ID tracking current migration operation. | string |
| migrationService | Resource Id of the Migration Service. | string |
| provisioningError | Error message for migration provisioning failure, if any. | string |
| scope | Resource Id of the target resource (SQL VM or SQL Managed Instance). | string |
| sourceDatabaseName | Name of the source database. | string |
| sourceSqlConnection | Source SQL Server connection details. | SqlConnectionInformation |
| tableList | List of tables to copy. | string[] |
| targetDatabaseCollation | Database collation to be used for the target database. | string |
| targetSqlConnection | Target SQL DB connection details. | SqlConnectionInformation |


### SqlConnectionInformation

| Name | Description | Value |
|-|-|-|
| authentication | Authentication type. | string |
| dataSource | Data source. | string |
| encryptConnection | Whether to encrypt connection or not. | bool |
| password | Password to connect to source SQL. | string |
| trustServerCertificate | Whether to trust server certificate or not. | bool |
| userName | User name to connect to source SQL. | string |


