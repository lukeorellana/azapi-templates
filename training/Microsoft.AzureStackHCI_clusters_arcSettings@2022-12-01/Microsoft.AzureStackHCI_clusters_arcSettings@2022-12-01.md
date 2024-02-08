```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureStackHCI/clusters/arcSettings@2022-12-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      arcApplicationClientId = "string"
      arcApplicationObjectId = "string"
      arcApplicationTenantId = "string"
      arcInstanceResourceGroup = "string"
      arcServicePrincipalObjectId = "string"
    }
  })
}

```

### clusters/arcSettings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:clusters |
| properties | ArcSetting properties. | ArcSettingProperties |


### ArcSettingProperties

| Name | Description | Value |
|-|-|-|
| arcApplicationClientId | App id of arc AAD identity. | string |
| arcApplicationObjectId | Object id of arc AAD identity. | string |
| arcApplicationTenantId | Tenant id of arc AAD identity. | string |
| arcInstanceResourceGroup | The resource group that hosts the Arc agents, ie. Hybrid Compute Machine resources. | string |
| arcServicePrincipalObjectId | Object id of arc AAD service principal. | string |
| connectivityProperties | contains connectivity related configuration for ARC resources | For Bicep, you can use theany()function. |


