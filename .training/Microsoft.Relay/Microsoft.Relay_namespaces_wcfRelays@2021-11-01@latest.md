```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Relay/namespaces/wcfRelays@2021-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      relayType = "string"
      requiresClientAuthorization = bool
      requiresTransportSecurity = bool
      userMetadata = "string"
    }
  })
}

```

### namespaces/wcfRelays

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-260Valid characters:Alphanumerics, periods, hyphens, underscores, and slashes.Start and end with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:namespaces |
| properties | Properties of the WCF relay. | WcfRelayProperties |


### WcfRelayProperties

| Name | Description | Value |
|-|-|-|
| relayType | WCF relay type. | 'Http''NetTcp' |
| requiresClientAuthorization | Returns true if client authorization is needed for this relay; otherwise, false. | bool |
| requiresTransportSecurity | Returns true if transport security is needed for this relay; otherwise, false. | bool |
| userMetadata | The usermetadata is a placeholder to store user-defined string data for the WCF Relay endpoint. For example, it can be used to store descriptive data, such as list of teams and their contact information. Also, user-defined configuration settings can be stored. | string |


