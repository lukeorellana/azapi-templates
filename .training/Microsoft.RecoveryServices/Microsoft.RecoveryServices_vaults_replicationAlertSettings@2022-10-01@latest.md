```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/replicationAlertSettings@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      customEmailAddresses = [
        "string"
      ]
      locale = "string"
      sendToOwners = "string"
    }
  })
}

```

### vaults/replicationAlertSettings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:vaults |
| properties | The properties of a configure alert request. | ConfigureAlertRequestPropertiesOrAlertProperties |


### ConfigureAlertRequestPropertiesOrAlertProperties

| Name | Description | Value |
|-|-|-|
| customEmailAddresses | The custom email address for sending emails. | string[] |
| locale | The locale for the email notification. | string |
| sendToOwners | A value indicating whether to send email to subscription administrator. | string |


