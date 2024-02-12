```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerRegistry/registries/webhooks@2023-01-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      actions = [
        "string"
      ]
      customHeaders = {}
      scope = "string"
      serviceUri = "string"
      status = "string"
    }
  })
}

```

### registries/webhooks

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 5-50Valid characters:Alphanumerics. |
| location | The location of the webhook. This cannot be changed after the resource is created. | string (required) |
| tags | The tags for the webhook. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:registries |
| properties | The properties that the webhook will be created with. | WebhookPropertiesCreateParametersOrWebhookProperties |


### WebhookPropertiesCreateParametersOrWebhookProperties

| Name | Description | Value |
|-|-|-|
| actions | The list of actions that trigger the webhook to post notifications. | String array containing any of:'chart_delete''chart_push''delete''push''quarantine' (required) |
| customHeaders | Custom headers that will be added to the webhook notifications. | object |
| scope | The scope of repositories where the event can be triggered. For example, 'foo:*' means events for all tags under repository 'foo'. 'foo:bar' means events for 'foo:bar' only. 'foo' is equivalent to 'foo:latest'. Empty means all events. | string |
| serviceUri | The service URI for the webhook to post notifications. | string (required) |
| status | The status of the webhook at the time the operation was called. | 'disabled''enabled' |


