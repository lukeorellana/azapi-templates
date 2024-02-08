```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Kusto/clusters/databases/scripts@2023-08-15"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      continueOnErrors = bool
      forceUpdateTag = "string"
      scriptContent = "string"
      scriptUrl = "string"
      scriptUrlSasToken = "string"
    }
  })
}

```

### clusters/databases/scripts

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databases |
| properties | The database script. | ScriptProperties |


### ScriptProperties

| Name | Description | Value |
|-|-|-|
| continueOnErrors | Flag that indicates whether to continue if one of the command fails. | bool |
| forceUpdateTag | A unique string. If changed the script will be applied again. | string |
| scriptContent | The script content. This property should be used when the script is provide inline and not through file in a SA. Must not be used together with scriptUrl and scriptUrlSasToken properties. | stringConstraints:Sensitive value. Pass in as a secure parameter. |
| scriptUrl | The url to the KQL script blob file. Must not be used together with scriptContent property | string |
| scriptUrlSasToken | The SaS token that provide read access to the file which contain the script. Must be provided when using scriptUrl property. | stringConstraints:Sensitive value. Pass in as a secure parameter. |


