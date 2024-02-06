## Microsoft.DataShare/accounts@2021-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataShare/accounts@2021-08-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "SystemAssigned"
  }
  body = jsonencode({
    properties = {}
  })
}

```

## Microsoft.DataShare/accounts/shares@2021-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataShare/accounts/shares@2021-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      shareKind = "string"
      terms = "string"
    }
  })
}

```

## Microsoft.DataShare/accounts/shares/dataSets@2021-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataShare/accounts/shares/dataSets@2021-08-01"
  name = "string"
  parent_id = "string"
  // For remaining properties, see accounts/shares/dataSets objects
  body = jsonencode({
    kind = "string"
  })
}

```

## Microsoft.DataShare/accounts/shares/invitations@2021-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataShare/accounts/shares/invitations@2021-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      expirationDate = "string"
      targetActiveDirectoryId = "string"
      targetEmail = "string"
      targetObjectId = "string"
    }
  })
}

```

## Microsoft.DataShare/accounts/shares/synchronizationSettings@2021-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataShare/accounts/shares/synchronizationSettings@2021-08-01"
  name = "string"
  parent_id = "string"
  // For remaining properties, see accounts/shares/synchronizationSettings objects
  body = jsonencode({
    kind = "string"
  })
}

```

## Microsoft.DataShare/accounts/shareSubscriptions@2021-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataShare/accounts/shareSubscriptions@2021-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      expirationDate = "string"
      invitationId = "string"
      sourceShareLocation = "string"
    }
  })
}

```

## Microsoft.DataShare/accounts/shareSubscriptions/dataSetMappings@2021-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataShare/accounts/shareSubscriptions/dataSetMappings@2021-08-01"
  name = "string"
  parent_id = "string"
  // For remaining properties, see accounts/shareSubscriptions/dataSetMappings objects
  body = jsonencode({
    kind = "string"
  })
}

```

## Microsoft.DataShare/accounts/shareSubscriptions/triggers@2021-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataShare/accounts/shareSubscriptions/triggers@2021-08-01"
  name = "string"
  parent_id = "string"
  // For remaining properties, see accounts/shareSubscriptions/triggers objects
  body = jsonencode({
    kind = "string"
  })
}

```

