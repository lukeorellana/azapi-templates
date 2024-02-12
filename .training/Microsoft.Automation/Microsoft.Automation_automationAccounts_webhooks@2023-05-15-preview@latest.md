```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/webhooks@2023-05-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      expiryTime = "string"
      isEnabled = bool
      parameters = {
        {customized property} = "string"
      }
      runbook = {
        name = "string"
      }
      runOn = "string"
      uri = "string"
    }
  })
}

```

### automationAccounts/webhooks

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-128Valid characters:Can't use:<>*%&:\?.+/or control charactersCan't end with space. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:automationAccounts |
| properties | Gets or sets the properties of the webhook. | WebhookCreateOrUpdatePropertiesOrWebhookProperties(required) |


### WebhookCreateOrUpdatePropertiesOrWebhookProperties

| Name | Description | Value |
|-|-|-|
| expiryTime | Gets or sets the expiry time. | string |
| isEnabled | Gets or sets the value of the enabled flag of webhook. | bool |
| parameters | Gets or sets the parameters of the job. | WebhookCreateOrUpdatePropertiesParameters |
| runbook | Gets or sets the runbook. | RunbookAssociationProperty |
| runOn | Gets or sets the name of the hybrid worker group the webhook job will run on. | string |
| uri | Gets or sets the uri. | string |


### WebhookCreateOrUpdatePropertiesParameters

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### RunbookAssociationProperty

| Name | Description | Value |
|-|-|-|
| name | Gets or sets the name of the runbook. | string |


