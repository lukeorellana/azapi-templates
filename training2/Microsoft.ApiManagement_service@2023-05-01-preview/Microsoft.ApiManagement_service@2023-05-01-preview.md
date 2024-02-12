```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service@2023-05-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      additionalLocations = [
        {
          disableGateway = bool
          location = "string"
          natGatewayState = "string"
          publicIpAddressId = "string"
          sku = {
            capacity = int
            name = "string"
          }
          virtualNetworkConfiguration = {
            subnetResourceId = "string"
          }
          zones = [
            "string"
          ]
        }
      ]
      apiVersionConstraint = {
        minApiVersion = "string"
      }
      certificates = [
        {
          certificate = {
            expiry = "string"
            subject = "string"
            thumbprint = "string"
          }
          certificatePassword = "string"
          encodedCertificate = "string"
          storeName = "string"
        }
      ]
      configurationApi = {
        legacyApi = "string"
      }
      customProperties = {
        {customized property} = "string"
      }
      developerPortalStatus = "string"
      disableGateway = bool
      enableClientCertificate = bool
      hostnameConfigurations = [
        {
          certificate = {
            expiry = "string"
            subject = "string"
            thumbprint = "string"
          }
          certificatePassword = "string"
          certificateSource = "string"
          certificateStatus = "string"
          defaultSslBinding = bool
          encodedCertificate = "string"
          hostName = "string"
          identityClientId = "string"
          keyVaultId = "string"
          negotiateClientCertificate = bool
          type = "string"
        }
      ]
      legacyPortalStatus = "string"
      natGatewayState = "string"
      notificationSenderEmail = "string"
      privateEndpointConnections = [
        {
          id = "string"
          name = "string"
          properties = {
            privateEndpoint = {}
            privateLinkServiceConnectionState = {
              actionsRequired = "string"
              description = "string"
              status = "string"
            }
          }
          type = "string"
        }
      ]
      publicIpAddressId = "string"
      publicNetworkAccess = "string"
      publisherEmail = "string"
      publisherName = "string"
      restore = bool
      virtualNetworkConfiguration = {
        subnetResourceId = "string"
      }
      virtualNetworkType = "string"
    }
    zones = [
      "string"
    ]
    sku = {
      capacity = int
      name = "string"
    }
  })
}

```

### service

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-50Valid characters:Alphanumerics and hyphens.Start with letter and end with alphanumeric.Resource name must be unique across Azure. |
| location | Resource location. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | SKU properties of the API Management service. | ApiManagementServiceSkuProperties(required) |
| identity | Managed service identity of the Api Management service. | ApiManagementServiceIdentity |
| properties | Properties of the API Management service. | ApiManagementServiceProperties(required) |
| zones | A list of availability zones denoting where the resource needs to come from. | string[] |


### ApiManagementServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | The type of identity used for the resource. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the service. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' (required) |
| userAssignedIdentities | The list of user identities associated with the resource. The user identitydictionary key references will be ARM resource ids in the form:'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | ApiManagementServiceIdentityUserAssignedIdentities |


### ApiManagementServiceIdentityUserAssignedIdentities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | UserIdentityProperties |


### UserIdentityProperties

| Name | Description | Value |
|-|-|-|
| clientId | The client id of user assigned identity. | string |
| principalId | The principal id of user assigned identity. | string |


### ApiManagementServiceProperties

| Name | Description | Value |
|-|-|-|
| additionalLocations | Additional datacenter locations of the API Management service. | AdditionalLocation[] |
| apiVersionConstraint | Control Plane Apis version constraint for the API Management service. | ApiVersionConstraint |
| certificates | List of Certificates that need to be installed in the API Management service. Max supported certificates that can be installed is 10. | CertificateConfiguration[] |
| configurationApi | Configuration API configuration of the API Management service. | ConfigurationApi |
| customProperties | Custom properties of the API Management service.SettingMicrosoft.WindowsAzure.ApiManagement.Gateway.Security.Ciphers.TripleDes168will disable the cipher TLS_RSA_WITH_3DES_EDE_CBC_SHA for all TLS(1.0, 1.1 and 1.2).SettingMicrosoft.WindowsAzure.ApiManagement.Gateway.Security.Protocols.Tls11can be used to disable just TLS 1.1.SettingMicrosoft.WindowsAzure.ApiManagement.Gateway.Security.Protocols.Tls10can be used to disable TLS 1.0 on an API Management service.SettingMicrosoft.WindowsAzure.ApiManagement.Gateway.Security.Backend.Protocols.Tls11can be used to disable just TLS 1.1 for communications with backends.SettingMicrosoft.WindowsAzure.ApiManagement.Gateway.Security.Backend.Protocols.Tls10can be used to disable TLS 1.0 for communications with backends.SettingMicrosoft.WindowsAzure.ApiManagement.Gateway.Protocols.Server.Http2can be used to enable HTTP2 protocol on an API Management service.Not specifying any of these properties on PATCH operation will reset omitted properties' values to their defaults. For all the settings except Http2 the default value isTrueif the service was created on or before April 1, 2018 andFalseotherwise. Http2 setting's default value isFalse.You can disable any of the following ciphers by using settingsMicrosoft.WindowsAzure.ApiManagement.Gateway.Security.Ciphers.[cipher_name]: TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA, TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA, TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA, TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA, TLS_RSA_WITH_AES_128_GCM_SHA256, TLS_RSA_WITH_AES_256_CBC_SHA256, TLS_RSA_WITH_AES_128_CBC_SHA256, TLS_RSA_WITH_AES_256_CBC_SHA, TLS_RSA_WITH_AES_128_CBC_SHA. For example,Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Ciphers.TLS_RSA_WITH_AES_128_CBC_SHA256:false. The default value istruefor them.Note: The following ciphers can't be disabled since they are required by internal platform components: TLS_AES_256_GCM_SHA384,TLS_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384,TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256,TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384,TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256 | ApiManagementServiceBasePropertiesCustomProperties |
| developerPortalStatus | Status of developer portal in this API Management service. | 'Disabled''Enabled' |
| disableGateway | Property only valid for an Api Management service deployed in multiple locations. This can be used to disable the gateway in master region. | bool |
| enableClientCertificate | Property only meant to be used for Consumption SKU Service. This enforces a client certificate to be presented on each request to the gateway. This also enables the ability to authenticate the certificate in the policy on the gateway. | bool |
| hostnameConfigurations | Custom hostname configuration of the API Management service. | HostnameConfiguration[] |
| legacyPortalStatus | Status of legacy portal in the API Management service. | 'Disabled''Enabled' |
| natGatewayState | Property can be used to enable NAT Gateway for this API Management service. | 'Disabled''Enabled' |
| notificationSenderEmail | Email address from which the notification will be sent. | string |
| privateEndpointConnections | List of Private Endpoint Connections of this service. | RemotePrivateEndpointConnectionWrapper[] |
| publicIpAddressId | Public Standard SKU IP V4 based IP address to be associated with Virtual Network deployed service in the region. Supported only for Developer and Premium SKU being deployed in Virtual Network. | string |
| publicNetworkAccess | Whether or not public endpoint access is allowed for this API Management service.  Value is optional but if passed in, must be 'Enabled' or 'Disabled'. If 'Disabled', private endpoints are the exclusive access method. Default value is 'Enabled' | 'Disabled''Enabled' |
| publisherEmail | Publisher email. | string (required) |
| publisherName | Publisher name. | string (required) |
| restore | Undelete Api Management Service if it was previously soft-deleted. If this flag is specified and set to True all other properties will be ignored. | bool |
| virtualNetworkConfiguration | Virtual network configuration of the API Management service. | VirtualNetworkConfiguration |
| virtualNetworkType | The type of VPN in which API Management service needs to be configured in. None (Default Value) means the API Management service is not part of any Virtual Network, External means the API Management deployment is set up inside a Virtual Network having an Internet Facing Endpoint, and Internal means that API Management deployment is setup inside a Virtual Network having an Intranet Facing Endpoint only. | 'External''Internal''None' |


### AdditionalLocation

| Name | Description | Value |
|-|-|-|
| disableGateway | Property only valid for an Api Management service deployed in multiple locations. This can be used to disable the gateway in this additional location. | bool |
| location | The location name of the additional region among Azure Data center regions. | string (required) |
| natGatewayState | Property can be used to enable NAT Gateway for this API Management service. | 'Disabled''Enabled' |
| publicIpAddressId | Public Standard SKU IP V4 based IP address to be associated with Virtual Network deployed service in the location. Supported only for Premium SKU being deployed in Virtual Network. | string |
| sku | SKU properties of the API Management service. | ApiManagementServiceSkuProperties(required) |
| virtualNetworkConfiguration | Virtual network configuration for the location. | VirtualNetworkConfiguration |
| zones | A list of availability zones denoting where the resource needs to come from. | string[] |


### ApiManagementServiceSkuProperties

| Name | Description | Value |
|-|-|-|
| capacity | Capacity of the SKU (number of deployed units of the SKU). For Consumption SKU capacity must be specified as 0. | int (required) |
| name | Name of the Sku. | 'Basic''BasicV2''Consumption''Developer''Isolated''Premium''Standard''StandardV2' (required) |


### VirtualNetworkConfiguration

| Name | Description | Value |
|-|-|-|
| subnetResourceId | The full resource ID of a subnet in a virtual network to deploy the API Management service in. | string |


### ApiVersionConstraint

| Name | Description | Value |
|-|-|-|
| minApiVersion | Limit control plane API calls to API Management service with version equal to or newer than this value. | string |


### CertificateConfiguration

| Name | Description | Value |
|-|-|-|
| certificate | Certificate information. | CertificateInformation |
| certificatePassword | Certificate Password. | string |
| encodedCertificate | Base64 Encoded certificate. | string |
| storeName | The System.Security.Cryptography.x509certificates.StoreName certificate store location. Only Root and CertificateAuthority are valid locations. | 'CertificateAuthority''Root' (required) |


### CertificateInformation

| Name | Description | Value |
|-|-|-|
| expiry | Expiration date of the certificate. The date conforms to the following format:yyyy-MM-ddTHH:mm:ssZas specified by the ISO 8601 standard. | string (required) |
| subject | Subject of the certificate. | string (required) |
| thumbprint | Thumbprint of the certificate. | string (required) |


### ConfigurationApi

| Name | Description | Value |
|-|-|-|
| legacyApi | Indication whether or not the legacy Configuration API (v1) should be exposed on the API Management service. Value is optional but must be 'Enabled' or 'Disabled'. If 'Disabled', legacy Configuration API (v1) will not be available for self-hosted gateways. Default value is 'Enabled' | 'Disabled''Enabled' |


### ApiManagementServiceBasePropertiesCustomProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### HostnameConfiguration

| Name | Description | Value |
|-|-|-|
| certificate | Certificate information. | CertificateInformation |
| certificatePassword | Certificate Password. | string |
| certificateSource | Certificate Source. | 'BuiltIn''Custom''KeyVault''Managed' |
| certificateStatus | Certificate Status. | 'Completed''Failed''InProgress' |
| defaultSslBinding | Specify true to setup the certificate associated with this Hostname as the Default SSL Certificate. If a client does not send the SNI header, then this will be the certificate that will be challenged. The property is useful if a service has multiple custom hostname enabled and it needs to decide on the default ssl certificate. The setting only applied to gateway Hostname Type. | bool |
| encodedCertificate | Base64 Encoded certificate. | string |
| hostName | Hostname to configure on the Api Management service. | string (required) |
| identityClientId | System or User Assigned Managed identity clientId as generated by Azure AD, which has GET access to the keyVault containing the SSL certificate. | string |
| keyVaultId | Url to the KeyVault Secret containing the Ssl Certificate. If absolute Url containing version is provided, auto-update of ssl certificate will not work. This requires Api Management service to be configured with aka.ms/apimmsi. The secret should be of typeapplication/x-pkcs12 | string |
| negotiateClientCertificate | Specify true to always negotiate client certificate on the hostname. Default Value is false. | bool |
| type | Hostname type. | 'ConfigurationApi''DeveloperPortal''Management''Portal''Proxy''Scm' (required) |


### RemotePrivateEndpointConnectionWrapper

| Name | Description | Value |
|-|-|-|
| id | Private Endpoint connection resource id | string |
| name | Private Endpoint Connection Name | string |
| properties | Resource properties. | PrivateEndpointConnectionWrapperProperties |
| type | Private Endpoint Connection Resource Type | string |


### PrivateEndpointConnectionWrapperProperties

| Name | Description | Value |
|-|-|-|
| privateEndpoint | The resource of private end point. | ArmIdWrapper |
| privateLinkServiceConnectionState | A collection of information about the state of the connection between service consumer and provider. | PrivateLinkServiceConnectionState(required) |


### PrivateLinkServiceConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | A message indicating if changes on the service provider require any updates on the consumer. | string |
| description | The reason for approval/rejection of the connection. | string |
| status | Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service. | 'Approved''Pending''Rejected' |


