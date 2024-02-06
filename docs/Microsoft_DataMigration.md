## Microsoft.DataMigration/databaseMigrations@2022-03-30-preview

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

## Microsoft.DataMigration/services@2022-03-30-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataMigration/services@2022-03-30-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      autoStopDelay = "string"
      deleteResourcesOnStop = bool
      publicKey = "string"
      virtualNicId = "string"
      virtualSubnetId = "string"
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
    kind = "string"
    etag = "string"
  })
}

```

## Microsoft.DataMigration/services/projects@2022-03-30-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataMigration/services/projects@2022-03-30-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      azureAuthenticationInfo = {
        appKey = "string"
        applicationId = "string"
        ignoreAzurePermissions = bool
        tenantId = "string"
      }
      databasesInfo = [
        {
          sourceDatabaseName = "string"
        }
      ]
      sourceConnectionInfo = {
        password = "string"
        userName = "string"
        type = "string"
        // For remaining properties, see ConnectionInfo objects
      }
      sourcePlatform = "string"
      targetConnectionInfo = {
        password = "string"
        userName = "string"
        type = "string"
        // For remaining properties, see ConnectionInfo objects
      }
      targetPlatform = "string"
    }
    etag = "string"
  })
}

```

## Microsoft.DataMigration/services/projects/files@2022-03-30-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataMigration/services/projects/files@2022-03-30-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      extension = "string"
      filePath = "string"
      mediaType = "string"
    }
    etag = "string"
  })
}

```

## Microsoft.DataMigration/services/projects/tasks@2022-03-30-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataMigration/services/projects/tasks@2022-03-30-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      clientData = {}
      taskType = "string"
      // For remaining properties, see ProjectTaskProperties objects
    }
    etag = "string"
  })
}

```

## Microsoft.DataMigration/services/serviceTasks@2022-03-30-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataMigration/services/serviceTasks@2022-03-30-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      clientData = {}
      taskType = "string"
      // For remaining properties, see ProjectTaskProperties objects
    }
    etag = "string"
  })
}

```

## Microsoft.DataMigration/sqlMigrationServices@2022-03-30-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataMigration/sqlMigrationServices@2022-03-30-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {}
  })
}

```

