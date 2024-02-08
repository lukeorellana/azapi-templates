```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.BotService/botServices/connections@2022-09-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      clientId = "string"
      clientSecret = "string"
      parameters = [
        {
          key = "string"
          value = "string"
        }
      ]
      provisioningState = "string"
      scopes = "string"
      serviceProviderDisplayName = "string"
      serviceProviderId = "string"
    }
    sku = {
      name = "string"
    }
    kind = "string"
    etag = "string"
  })
}

```

### botServices/connections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 2-64Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. |
| location | Specifies the location of the resource. | string |
| tags | Contains resource tags defined as key/value pairs. | Dictionary of tag names and values. SeeTags in templates |
| sku | Gets or sets the SKU of the resource. | Sku |
| kind | Required. Gets or sets the Kind of the resource. | 'azurebot''bot''designer''function''sdk' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:botServices |
| etag | Entity Tag | string |
| properties | The set of properties specific to bot channel resource | ConnectionSettingProperties |


### ConnectionSettingProperties

| Name | Description | Value |
|-|-|-|
| clientId | Client Id associated with the Connection Setting. | string |
| clientSecret | Client Secret associated with the Connection Setting | string |
| parameters | Service Provider Parameters associated with the Connection Setting | ConnectionSettingParameter[] |
| provisioningState | Provisioning state of the resource | string |
| scopes | Scopes associated with the Connection Setting | string |
| serviceProviderDisplayName | Service Provider Display Name associated with the Connection Setting | string |
| serviceProviderId | Service Provider Id associated with the Connection Setting | string |


### ConnectionSettingParameter

| Name | Description | Value |
|-|-|-|
| key | Key for the Connection Setting Parameter. | string |
| value | Value associated with the Connection Setting Parameter. | string |


### Sku

| Name | Description | Value |
|-|-|-|
| name | The sku name | 'F0''S1' (required) |


