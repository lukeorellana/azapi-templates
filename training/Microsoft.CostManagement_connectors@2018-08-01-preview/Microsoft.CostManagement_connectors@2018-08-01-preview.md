```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CostManagement/connectors@2018-08-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      credentialsKey = "string"
      credentialsSecret = "string"
      displayName = "string"
      reportId = "string"
      status = "string"
    }
    kind = "string"
  })
}

```

### connectors

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Connector location | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| kind | Connector kind (eg aws) | string |
| properties | Connector properties | ConnectorProperties |


### ConnectorProperties

| Name | Description | Value |
|-|-|-|
| credentialsKey | Credentials authentication key (eg AWS ARN) | string |
| credentialsSecret | Credentials secret (eg AWS ExternalId) | string |
| displayName | Connector DisplayName (defaults to Name) | string |
| reportId | Identifying source report. (For AWS this is a CUR report name, defined with Daily and with Resources) | string |
| status | Connector status | 'active''error''suspended' |


