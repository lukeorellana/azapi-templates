```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkManagers/securityUserConfigurations@2022-04-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      deleteExistingNSGs = "string"
      description = "string"
    }
  })
}

```

### networkManagers/securityUserConfigurations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:networkManagers |
| properties | Indicates the properties for the network manager security user configuration. | SecurityUserConfigurationPropertiesFormat |


### SecurityUserConfigurationPropertiesFormat

| Name | Description | Value |
|-|-|-|
| deleteExistingNSGs | Flag if need to delete existing network security groups. | 'False''True' |
| description | A description of the security user configuration. | string |


