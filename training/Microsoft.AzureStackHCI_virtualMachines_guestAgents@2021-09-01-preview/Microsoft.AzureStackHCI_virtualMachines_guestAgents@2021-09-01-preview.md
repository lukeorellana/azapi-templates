```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureStackHCI/virtualMachines/guestAgents@2021-09-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      credentials = {
        password = "string"
        username = "string"
      }
      httpProxyConfig = {
        httpsProxy = "string"
      }
      provisioningAction = "string"
    }
  })
}

```

### virtualMachines/guestAgents

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:virtualMachines |
| properties | Resource properties. | GuestAgentProperties(required) |


### GuestAgentProperties

| Name | Description | Value |
|-|-|-|
| credentials | Username / Password Credentials to provision guest agent. | GuestCredential |
| httpProxyConfig | HTTP Proxy configuration for the VM. | HttpProxyConfiguration |
| provisioningAction | The guest agent provisioning action. | 'install''repair''uninstall' |


### GuestCredential

| Name | Description | Value |
|-|-|-|
| password | The password to connect with the guest. | string |
| username | The username to connect with the guest. | string |


### HttpProxyConfiguration

| Name | Description | Value |
|-|-|-|
| httpsProxy | The httpsProxy url. | string |


