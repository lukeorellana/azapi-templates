```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkSecurityPerimeters/links@2021-02-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      autoApprovedRemotePerimeterResourceId = "string"
      description = "string"
      localInboundProfiles = [
        "string"
      ]
      remoteInboundProfiles = [
        "string"
      ]
    }
  })
}

```

### networkSecurityPerimeters/links

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:networkSecurityPerimeters |
| properties | Properties of the network security perimeter link resource. | NspLinkProperties |


### NspLinkProperties

| Name | Description | Value |
|-|-|-|
| autoApprovedRemotePerimeterResourceId | Perimeter ARM Id for the remote NSP with which the link gets created in Auto-approval mode. It should be used when the NSP admin have Microsoft.Network/networkSecurityPerimeters/linkPerimeter/action permission on the remote NSP resource. | string |
| description | A message passed to the owner of the remote NSP link resource with this connection request. In case of Auto-approved flow, it is default to 'Auto Approved'. Restricted to 140 chars. | string |
| localInboundProfiles | Local Inbound profile names to which Inbound is allowed. Use [''] to allow inbound to all profiles. It's default value is ['']. | string[] |
| remoteInboundProfiles | Remote Inbound profile names to which Inbound is allowed. Use [''] to allow inbound to all profiles. This property can only be updated in auto-approval mode. It's default value is ['']. | string[] |


