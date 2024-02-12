```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CostManagement/cloudConnectors@2019-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      billingModel = "string"
      credentialsKey = "string"
      credentialsSecret = "string"
      defaultManagementGroupId = "string"
      displayName = "string"
      reportId = "string"
      subscriptionId = "string"
    }
    kind = "string"
  })
}

```

### cloudConnectors

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| kind | Connector kind (eg aws) | string |
| properties | Connector properties | ConnectorProperties |


### ConnectorProperties

| Name | Description | Value |
|-|-|-|
| billingModel | Connector billing model | 'autoUpgrade''expired''premium''trial' |
| credentialsKey | Credentials authentication key (eg AWS ARN) | string |
| credentialsSecret | Credentials secret (eg AWS ExternalId) | string |
| defaultManagementGroupId | Default ManagementGroupId | string |
| displayName | Connector DisplayName | string |
| reportId | Identifying source report. (For AWS this is a CUR report name, defined with Daily and with Resources) | string |
| subscriptionId | Billing SubscriptionId | string |


