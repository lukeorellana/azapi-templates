## Microsoft.Relay/namespaces@2021-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Relay/namespaces@2021-11-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      privateEndpointConnections = [
        {
          properties = {
            privateEndpoint = {
              id = "string"
            }
            privateLinkServiceConnectionState = {
              description = "string"
              status = "string"
            }
            provisioningState = "string"
          }
        }
      ]
      publicNetworkAccess = "string"
    }
    sku = {
      name = "Standard"
      tier = "Standard"
    }
  })
}

```

### namespaces

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 6-50Valid characters:Alphanumerics and hyphens.Start with a letter. End with a letter or number.Resource name must be unique across Azure. |
| location | Resource location. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | SKU of the namespace. | Sku |
| properties | Description of Relay namespace | RelayNamespaceProperties |


### RelayNamespaceProperties

| Name | Description | Value |
|-|-|-|
| privateEndpointConnections | List of private endpoint connections. | PrivateEndpointConnection[] |
| publicNetworkAccess | This determines if traffic is allowed over public network. By default it is enabled. | 'Disabled''Enabled''SecuredByPerimeter' |


### PrivateEndpointConnection

| Name | Description | Value |
|-|-|-|
| properties | Properties of the PrivateEndpointConnection. | PrivateEndpointConnectionProperties |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| privateEndpoint | The Private Endpoint resource for this Connection. | PrivateEndpoint |
| privateLinkServiceConnectionState | Details about the state of the connection. | ConnectionState |
| provisioningState | Provisioning state of the Private Endpoint Connection. | 'Canceled''Creating''Deleting''Failed''Succeeded''Updating' |


### PrivateEndpoint

| Name | Description | Value |
|-|-|-|
| id | The ARM identifier for Private Endpoint. | string |


### ConnectionState

| Name | Description | Value |
|-|-|-|
| description | Description of the connection state. | string |
| status | Status of the connection. | 'Approved''Disconnected''Pending''Rejected' |


### Sku

| Name | Description | Value |
|-|-|-|
| name | Name of this SKU. | 'Standard' (required) |
| tier | The tier of this SKU. | 'Standard' |
## Microsoft.Relay/namespaces/authorizationRules@2021-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Relay/namespaces/authorizationRules@2021-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      rights = [
        "string"
      ]
    }
  })
}

```

### namespaces/authorizationRules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-50Valid characters:Alphanumerics, periods, hyphens and underscores.Start and end with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:namespaces |
| properties | Properties supplied to create or update AuthorizationRule | AuthorizationRuleProperties |


### AuthorizationRuleProperties

| Name | Description | Value |
|-|-|-|
| rights | The rights associated with the rule. | String array containing any of:'Listen''Manage''Send' (required) |
## Microsoft.Relay/namespaces/hybridConnections@2021-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Relay/namespaces/hybridConnections@2021-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      requiresClientAuthorization = bool
      userMetadata = "string"
    }
  })
}

```

### namespaces/hybridConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-260Valid characters:Alphanumerics, periods, hyphens, underscores, and slashes.Start and end with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:namespaces |
| properties | Properties of the HybridConnection. | HybridConnectionProperties |


### HybridConnectionProperties

| Name | Description | Value |
|-|-|-|
| requiresClientAuthorization | Returns true if client authorization is needed for this hybrid connection; otherwise, false. | bool |
| userMetadata | The usermetadata is a placeholder to store user-defined string data for the hybrid connection endpoint. For example, it can be used to store descriptive data, such as a list of teams and their contact information. Also, user-defined configuration settings can be stored. | string |
## Microsoft.Relay/namespaces/hybridConnections/authorizationRules@2021-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Relay/namespaces/hybridConnections/authorizationRules@2021-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      rights = [
        "string"
      ]
    }
  })
}

```

### namespaces/hybridConnections/authorizationRules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-50Valid characters:Alphanumerics, periods, hyphens and underscores.Start and end with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:hybridConnections |
| properties | Properties supplied to create or update AuthorizationRule | AuthorizationRuleProperties |


### AuthorizationRuleProperties

| Name | Description | Value |
|-|-|-|
| rights | The rights associated with the rule. | String array containing any of:'Listen''Manage''Send' (required) |
## Microsoft.Relay/namespaces/networkRuleSets@2021-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Relay/namespaces/networkRuleSets@2021-11-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      defaultAction = "string"
      ipRules = [
        {
          action = "Allow"
          ipMask = "string"
        }
      ]
      publicNetworkAccess = "string"
    }
  })
}

```

### namespaces/networkRuleSets

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:namespaces |
| properties | NetworkRuleSet properties | NetworkRuleSetProperties |


### NetworkRuleSetProperties

| Name | Description | Value |
|-|-|-|
| defaultAction | Default Action for Network Rule Set | 'Allow''Deny' |
| ipRules | List of IpRules | NWRuleSetIpRules[] |
| publicNetworkAccess | This determines if traffic is allowed over public network. By default it is enabled | 'Disabled''Enabled''SecuredByPerimeter' |


### NWRuleSetIpRules

| Name | Description | Value |
|-|-|-|
| action | The IP Filter Action | 'Allow' |
| ipMask | IP Mask | string |
## Microsoft.Relay/namespaces/privateEndpointConnections@2021-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Relay/namespaces/privateEndpointConnections@2021-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateEndpoint = {
        id = "string"
      }
      privateLinkServiceConnectionState = {
        description = "string"
        status = "string"
      }
      provisioningState = "string"
    }
  })
}

```

### namespaces/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:namespaces |
| properties | Properties of the PrivateEndpointConnection. | PrivateEndpointConnectionProperties |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| privateEndpoint | The Private Endpoint resource for this Connection. | PrivateEndpoint |
| privateLinkServiceConnectionState | Details about the state of the connection. | ConnectionState |
| provisioningState | Provisioning state of the Private Endpoint Connection. | 'Canceled''Creating''Deleting''Failed''Succeeded''Updating' |


### PrivateEndpoint

| Name | Description | Value |
|-|-|-|
| id | The ARM identifier for Private Endpoint. | string |


### ConnectionState

| Name | Description | Value |
|-|-|-|
| description | Description of the connection state. | string |
| status | Status of the connection. | 'Approved''Disconnected''Pending''Rejected' |
## Microsoft.Relay/namespaces/wcfRelays@2021-11-01

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
## Microsoft.Relay/namespaces/wcfRelays/authorizationRules@2021-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Relay/namespaces/wcfRelays/authorizationRules@2021-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      rights = [
        "string"
      ]
    }
  })
}

```

### namespaces/wcfRelays/authorizationRules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-50Valid characters:Alphanumerics, periods, hyphens and underscores.Start and end with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:wcfRelays |
| properties | Properties supplied to create or update AuthorizationRule | AuthorizationRuleProperties |


### AuthorizationRuleProperties

| Name | Description | Value |
|-|-|-|
| rights | The rights associated with the rule. | String array containing any of:'Listen''Manage''Send' (required) |
