terraform {
  required_providers {
    azapi = {
      source = "Azure/azapi"
    }
  }
}

provider "azapi" {
  skip_provider_registration = false
}

variable "resource_name" {
  type    = string
  default = "acctest0001"
}

variable "location" {
  type    = string
  default = "westeurope"
}

resource "azapi_resource" "resourceGroup" {
  type                      = "Microsoft.Resources/resourceGroups@2020-06-01"
  name                      = var.resource_name
  location                  = var.location
}

resource "azapi_resource" "storageAccount" {
  type      = "Microsoft.Storage/storageAccounts@2021-09-01"
  parent_id = azapi_resource.resourceGroup.id
  name      = var.resource_name
  location  = var.location
  body = jsonencode({
    kind = "StorageV2"
    properties = {
    }
    sku = {
      name = "Standard_LRS"
    }
  })
  schema_validation_enabled = false
  response_export_values    = ["*"]
}

data "azapi_resource_action" "listKeys" {
  type                   = "Microsoft.Storage/storageAccounts@2022-09-01"
  resource_id            = azapi_resource.storageAccount.id
  action                 = "listKeys"
  response_export_values = ["*"]
}

data "azapi_resource" "blobService" {
  type      = "Microsoft.Storage/storageAccounts/blobServices@2022-09-01"
  parent_id = azapi_resource.storageAccount.id
  name      = "default"
}

resource "azapi_resource" "container" {
  type      = "Microsoft.Storage/storageAccounts/blobServices/containers@2022-09-01"
  name      = var.resource_name
  parent_id = data.azapi_resource.blobService.id
  body = jsonencode({
    properties = {
      metadata = {
        key = "value"
      }
    }
  })
  response_export_values = ["*"]
}

resource "azapi_resource" "workspace" {
  type      = "Microsoft.Synapse/workspaces@2021-06-01"
  parent_id = azapi_resource.resourceGroup.id
  name      = var.resource_name
  location  = var.location
  identity {
    type = "SystemAssigned"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      defaultDataLakeStorage = {
        accountUrl = jsondecode(azapi_resource.storageAccount.output).properties.primaryEndpoints.dfs
        filesystem = azapi_resource.container.name
      }

      managedVirtualNetwork         = ""
      publicNetworkAccess           = "Enabled"
      sqlAdministratorLogin         = "sqladminuser"
      sqlAdministratorLoginPassword = "H@Sh1CoR3!"
    }
  })
  schema_validation_enabled = false
  response_export_values    = ["*"]
}

resource "azapi_update_resource" "managedIdentitySqlControlSetting" {
  type      = "Microsoft.Synapse/workspaces/managedIdentitySqlControlSettings@2021-06-01"
  parent_id = azapi_resource.workspace.id
  name      = "default"
  body = jsonencode({
    properties = {
      grantSqlControlToManagedIdentity = {
        desiredState = "Disabled"
      }
    }
  })
  response_export_values = ["*"]
}
