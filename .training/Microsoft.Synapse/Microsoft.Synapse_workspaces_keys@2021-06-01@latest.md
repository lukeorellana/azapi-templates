```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/keys@2021-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      isActiveCMK = bool
      keyVaultUrl = "string"
    }
  })
}

```

### workspaces/keys

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | Keys resource properties | KeyProperties |


### KeyProperties

| Name | Description | Value |
|-|-|-|
| isActiveCMK | Used to activate the workspace after a customer managed key is provided. | bool |
| keyVaultUrl | The Key Vault Url of the workspace key. | string |


