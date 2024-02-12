```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Logic/integrationAccounts/assemblies@2019-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      assemblyCulture = "string"
      assemblyName = "string"
      assemblyPublicKeyToken = "string"
      assemblyVersion = "string"
      changedTime = "string"
      contentLink = {
        uri = "string"
      }
      contentType = "string"
      createdTime = "string"
    }
  })
}

```

### integrationAccounts/assemblies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics, hyphens, underscores, periods, and parenthesis. |
| location | The resource location. | string |
| tags | The resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:integrationAccounts |
| properties | The assembly properties. | AssemblyProperties(required) |


### AssemblyProperties

| Name | Description | Value |
|-|-|-|
| assemblyCulture | The assembly culture. | string |
| assemblyName | The assembly name. | string (required) |
| assemblyPublicKeyToken | The assembly public key token. | string |
| assemblyVersion | The assembly version. | string |
| changedTime | The artifact changed time. | string |
| content | Anything | For Bicep, you can use theany()function. |
| contentLink | The content link. | ContentLink |
| contentType | The content type. | string |
| createdTime | The artifact creation time. | string |
| metadata | Anything | For Bicep, you can use theany()function. |


### ContentLink

| Name | Description | Value |
|-|-|-|
| uri | The content link URI. | string |


