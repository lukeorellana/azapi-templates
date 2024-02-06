## Microsoft.AzureStack/linkedSubscriptions@2020-06-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureStack/linkedSubscriptions@2020-06-01-preview"
  name = "string"
  location = "global"
  parent_id = "string"
  body = jsonencode({
    properties = {
      linkedSubscriptionId = "string"
      registrationResourceId = "string"
    }
  })
}

```

## Microsoft.AzureStack/registrations@2022-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureStack/registrations@2022-06-01"
  name = "string"
  location = "global"
  parent_id = "string"
  body = jsonencode({
    properties = {
      registrationToken = "string"
    }
  })
}

```

## Microsoft.AzureStack/registrations/customerSubscriptions@2022-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureStack/registrations/customerSubscriptions@2022-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      tenantId = "string"
    }
    etag = "string"
  })
}

```

