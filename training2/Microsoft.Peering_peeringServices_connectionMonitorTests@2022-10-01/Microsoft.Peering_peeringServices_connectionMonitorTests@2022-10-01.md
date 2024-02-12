```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Peering/peeringServices/connectionMonitorTests@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      destination = "string"
      destinationPort = int
      sourceAgent = "string"
      testFrequencyInSec = int
    }
  })
}

```

### peeringServices/connectionMonitorTests

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:peeringServices |
| properties | The properties that define a Connection Monitor Test. | ConnectionMonitorTestProperties |


### ConnectionMonitorTestProperties

| Name | Description | Value |
|-|-|-|
| destination | The Connection Monitor test destination | string |
| destinationPort | The Connection Monitor test destination port | int |
| sourceAgent | The Connection Monitor test source agent | string |
| testFrequencyInSec | The Connection Monitor test frequency in seconds | int |


