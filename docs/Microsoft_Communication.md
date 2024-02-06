## Microsoft.Communication/communicationServices@2023-04-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Communication/communicationServices@2023-04-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      dataLocation = "string"
      linkedDomains = [
        "string"
      ]
    }
  })
}

```

## Microsoft.Communication/emailServices@2023-04-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Communication/emailServices@2023-04-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      dataLocation = "string"
    }
  })
}

```

## Microsoft.Communication/emailServices/domains@2023-04-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Communication/emailServices/domains@2023-04-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      domainManagement = "string"
      userEngagementTracking = "string"
    }
  })
}

```

## Microsoft.Communication/emailServices/domains/senderUsernames@2023-04-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Communication/emailServices/domains/senderUsernames@2023-04-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      displayName = "string"
      username = "string"
    }
  })
}

```

