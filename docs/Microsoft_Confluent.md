## Microsoft.Confluent/agreements@2021-12-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Confluent/agreements@2021-12-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      accepted = bool
      licenseTextLink = "string"
      plan = "string"
      privacyPolicyLink = "string"
      product = "string"
      publisher = "string"
      retrieveDatetime = "string"
      signature = "string"
    }
  })
}

```

## Microsoft.Confluent/organizations@2021-12-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Confluent/organizations@2021-12-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      offerDetail = {
        id = "string"
        planId = "string"
        planName = "string"
        publisherId = "string"
        termUnit = "string"
      }
      userDetail = {
        emailAddress = "string"
        firstName = "string"
        lastName = "string"
      }
    }
  })
}

```

