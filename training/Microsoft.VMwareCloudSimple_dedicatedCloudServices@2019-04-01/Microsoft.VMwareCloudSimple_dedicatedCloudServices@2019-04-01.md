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

### dedicatedCloudServices

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Azure region | string (required) |
| tags | The list of tags | Dictionary of tag names and values. SeeTags in templates |
| properties | The properties of Dedicated Node Service | DedicatedCloudServiceProperties |


### DedicatedCloudServiceProperties

| Name | Description | Value |
|-|-|-|
| gatewaySubnet | gateway Subnet for the account. It will collect the subnet address and always treat it as /28 | string (required) |


