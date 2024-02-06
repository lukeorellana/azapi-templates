## Microsoft.VMwareCloudSimple/dedicatedCloudServices@2019-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.VMwareCloudSimple/dedicatedCloudServices@2019-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      gatewaySubnet = "string"
    }
  })
}

```

