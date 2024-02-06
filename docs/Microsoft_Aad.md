## Microsoft.Aad/domainServices/ouContainer@2022-12-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Aad/domainServices/ouContainer@2022-12-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    accountName = "string"
    password = "string"
    spn = "string"
  })
}

```

