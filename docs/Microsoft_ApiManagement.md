## Microsoft.ApiManagement/service@2023-05-01-preview

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
## Microsoft.ApiManagement/service/apis@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/apis@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      apiRevision = "string"
      apiRevisionDescription = "string"
      apiType = "string"
      apiVersion = "string"
      apiVersionDescription = "string"
      apiVersionSet = {
        description = "string"
        id = "string"
        name = "string"
        versionHeaderName = "string"
        versioningScheme = "string"
        versionQueryName = "string"
      }
      apiVersionSetId = "string"
      authenticationSettings = {
        oAuth2 = {
          authorizationServerId = "string"
          scope = "string"
        }
        oAuth2AuthenticationSettings = [
          {
            authorizationServerId = "string"
            scope = "string"
          }
        ]
        openid = {
          bearerTokenSendingMethods = [
            "string"
          ]
          openidProviderId = "string"
        }
        openidAuthenticationSettings = [
          {
            bearerTokenSendingMethods = [
              "string"
            ]
            openidProviderId = "string"
          }
        ]
      }
      contact = {
        email = "string"
        name = "string"
        url = "string"
      }
      description = "string"
      displayName = "string"
      format = "string"
      isCurrent = bool
      license = {
        name = "string"
        url = "string"
      }
      path = "string"
      protocols = [
        "string"
      ]
      serviceUrl = "string"
      sourceApiId = "string"
      subscriptionKeyParameterNames = {
        header = "string"
        query = "string"
      }
      subscriptionRequired = bool
      termsOfServiceUrl = "string"
      translateRequiredQueryParameters = "string"
      type = "string"
      value = "string"
      wsdlSelector = {
        wsdlEndpointName = "string"
        wsdlServiceName = "string"
      }
    }
  })
}

```

### service/apis

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics and hyphens.Start with letter and end with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:service |
| properties | API entity create of update properties. | ApiCreateOrUpdatePropertiesOrApiContractProperties |


### ApiCreateOrUpdatePropertiesOrApiContractProperties

| Name | Description | Value |
|-|-|-|
| apiRevision | Describes the revision of the API. If no value is provided, default revision 1 is created | string |
| apiRevisionDescription | Description of the API Revision. | string |
| apiType | Type of API to create.*httpcreates a REST API*soapcreates a SOAP pass-through API*websocketcreates websocket API*graphqlcreates GraphQL API.New types can be added in the future. | 'graphql''grpc''http''odata''soap''websocket' |
| apiVersion | Indicates the version identifier of the API if the API is versioned | string |
| apiVersionDescription | Description of the API Version. | string |
| apiVersionSet | Version set details | ApiVersionSetContractDetails |
| apiVersionSetId | A resource identifier for the related ApiVersionSet. | string |
| authenticationSettings | Collection of authentication settings included into this API. | AuthenticationSettingsContract |
| contact | Contact information for the API. | ApiContactInformation |
| description | Description of the API. May include HTML formatting tags. | string |
| displayName | API name. Must be 1 to 300 characters long. | string |
| format | Format of the Content in which the API is getting imported. New formats can be added in the future | 'graphql-link''grpc''grpc-link''odata''odata-link''openapi''openapi+json''openapi+json-link''openapi-link''swagger-json''swagger-link-json''wadl-link-json''wadl-xml''wsdl''wsdl-link' |
| isCurrent | Indicates if API revision is current api revision. | bool |
| license | License information for the API. | ApiLicenseInformation |
| path | Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance. It is appended to the API endpoint base URL specified during the service instance creation to form a public URL for this API. | string (required) |
| protocols | Describes on which protocols the operations in this API can be invoked. | String array containing any of:'http''https''ws''wss' |
| serviceUrl | Absolute URL of the backend service implementing this API. Cannot be more than 2000 characters long. | string |
| sourceApiId | API identifier of the source API. | string |
| subscriptionKeyParameterNames | Protocols over which API is made available. | SubscriptionKeyParameterNamesContract |
| subscriptionRequired | Specifies whether an API or Product subscription is required for accessing the API. | bool |
| termsOfServiceUrl | A URL to the Terms of Service for the API. MUST be in the format of a URL. | string |
| translateRequiredQueryParameters | Strategy of translating required query parameters to template ones. By default has value 'template'. Possible values: 'template', 'query' | 'query''template' |
| type | Type of API. | 'graphql''grpc''http''odata''soap''websocket' |
| value | Content value when Importing an API. | string |
| wsdlSelector | Criteria to limit import of WSDL to a subset of the document. | ApiCreateOrUpdatePropertiesWsdlSelector |


### ApiVersionSetContractDetails

| Name | Description | Value |
|-|-|-|
| description | Description of API Version Set. | string |
| id | Identifier for existing API Version Set. Omit this value to create a new Version Set. | string |
| name | The display Name of the API Version Set. | string |
| versionHeaderName | Name of HTTP header parameter that indicates the API Version if versioningScheme is set toheader. | string |
| versioningScheme | An value that determines where the API Version identifier will be located in a HTTP request. | 'Header''Query''Segment' |
| versionQueryName | Name of query parameter that indicates the API Version if versioningScheme is set toquery. | string |


### AuthenticationSettingsContract

| Name | Description | Value |
|-|-|-|
| oAuth2 | OAuth2 Authentication settings | OAuth2AuthenticationSettingsContract |
| oAuth2AuthenticationSettings | Collection of OAuth2 authentication settings included into this API. | OAuth2AuthenticationSettingsContract[] |
| openid | OpenID Connect Authentication Settings | OpenIdAuthenticationSettingsContract |
| openidAuthenticationSettings | Collection of Open ID Connect authentication settings included into this API. | OpenIdAuthenticationSettingsContract[] |


### OAuth2AuthenticationSettingsContract

| Name | Description | Value |
|-|-|-|
| authorizationServerId | OAuth authorization server identifier. | string |
| scope | operations scope. | string |


### OpenIdAuthenticationSettingsContract

| Name | Description | Value |
|-|-|-|
| bearerTokenSendingMethods | How to send token to the server. | String array containing any of:'authorizationHeader''query' |
| openidProviderId | OAuth authorization server identifier. | string |


### ApiContactInformation

| Name | Description | Value |
|-|-|-|
| email | The email address of the contact person/organization. MUST be in the format of an email address | string |
| name | The identifying name of the contact person/organization | string |
| url | The URL pointing to the contact information. MUST be in the format of a URL | string |


### ApiLicenseInformation

| Name | Description | Value |
|-|-|-|
| name | The license name used for the API | string |
| url | A URL to the license used for the API. MUST be in the format of a URL | string |


### SubscriptionKeyParameterNamesContract

| Name | Description | Value |
|-|-|-|
| header | Subscription key header name. | string |
| query | Subscription key query string parameter name. | string |


### ApiCreateOrUpdatePropertiesWsdlSelector

| Name | Description | Value |
|-|-|-|
| wsdlEndpointName | Name of endpoint(port) to import from WSDL | string |
| wsdlServiceName | Name of service to import from WSDL | string |
## Microsoft.ApiManagement/service/apis/diagnostics@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/apis/diagnostics@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      alwaysLog = "allErrors"
      backend = {
        request = {
          body = {
            bytes = int
          }
          dataMasking = {
            headers = [
              {
                mode = "string"
                value = "string"
              }
            ]
            queryParams = [
              {
                mode = "string"
                value = "string"
              }
            ]
          }
          headers = [
            "string"
          ]
        }
        response = {
          body = {
            bytes = int
          }
          dataMasking = {
            headers = [
              {
                mode = "string"
                value = "string"
              }
            ]
            queryParams = [
              {
                mode = "string"
                value = "string"
              }
            ]
          }
          headers = [
            "string"
          ]
        }
      }
      frontend = {
        request = {
          body = {
            bytes = int
          }
          dataMasking = {
            headers = [
              {
                mode = "string"
                value = "string"
              }
            ]
            queryParams = [
              {
                mode = "string"
                value = "string"
              }
            ]
          }
          headers = [
            "string"
          ]
        }
        response = {
          body = {
            bytes = int
          }
          dataMasking = {
            headers = [
              {
                mode = "string"
                value = "string"
              }
            ]
            queryParams = [
              {
                mode = "string"
                value = "string"
              }
            ]
          }
          headers = [
            "string"
          ]
        }
      }
      httpCorrelationProtocol = "string"
      logClientIp = bool
      loggerId = "string"
      metrics = bool
      operationNameFormat = "string"
      sampling = {
        percentage = int
        samplingType = "fixed"
      }
      verbosity = "string"
    }
  })
}

```

### service/apis/diagnostics

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:apis |
| properties | Diagnostic entity contract properties. | DiagnosticContractProperties |


### DiagnosticContractProperties

| Name | Description | Value |
|-|-|-|
| alwaysLog | Specifies for what type of messages sampling settings should not apply. | 'allErrors' |
| backend | Diagnostic settings for incoming/outgoing HTTP messages to the Backend | PipelineDiagnosticSettings |
| frontend | Diagnostic settings for incoming/outgoing HTTP messages to the Gateway. | PipelineDiagnosticSettings |
| httpCorrelationProtocol | Sets correlation protocol to use for Application Insights diagnostics. | 'Legacy''None''W3C' |
| logClientIp | Log the ClientIP. Default is false. | bool |
| loggerId | Resource Id of a target logger. | string (required) |
| metrics | Emit custom metrics via emit-metric policy. Applicable only to Application Insights diagnostic settings. | bool |
| operationNameFormat | The format of the Operation Name for Application Insights telemetries. Default is Name. | 'Name''Url' |
| sampling | Sampling settings for Diagnostic. | SamplingSettings |
| verbosity | The verbosity level applied to traces emitted by trace policies. | 'error''information''verbose' |


### PipelineDiagnosticSettings

| Name | Description | Value |
|-|-|-|
| request | Diagnostic settings for request. | HttpMessageDiagnostic |
| response | Diagnostic settings for response. | HttpMessageDiagnostic |


### HttpMessageDiagnostic

| Name | Description | Value |
|-|-|-|
| body | Body logging settings. | BodyDiagnosticSettings |
| dataMasking | Data masking settings. | DataMasking |
| headers | Array of HTTP Headers to log. | string[] |


### BodyDiagnosticSettings

| Name | Description | Value |
|-|-|-|
| bytes | Number of request body bytes to log. | int |


### DataMasking

| Name | Description | Value |
|-|-|-|
| headers | Masking settings for headers | DataMaskingEntity[] |
| queryParams | Masking settings for Url query parameters | DataMaskingEntity[] |


### DataMaskingEntity

| Name | Description | Value |
|-|-|-|
| mode | Data masking mode. | 'Hide''Mask' |
| value | The name of an entity to mask (e.g. a name of a header or a query parameter). | string |


### SamplingSettings

| Name | Description | Value |
|-|-|-|
| percentage | Rate of sampling for fixed-rate sampling. | int |
| samplingType | Sampling type. | 'fixed' |
## Microsoft.ApiManagement/service/apis/issues@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/apis/issues@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      apiId = "string"
      createdDate = "string"
      description = "string"
      state = "string"
      title = "string"
      userId = "string"
    }
  })
}

```

### service/apis/issues

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics and hyphens.Start with letter and end with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:apis |
| properties | Properties of the Issue. | IssueContractProperties |


### IssueContractProperties

| Name | Description | Value |
|-|-|-|
| apiId | A resource identifier for the API the issue was created for. | string |
| createdDate | Date and time when the issue was created. | string |
| description | Text describing the issue. | string (required) |
| state | Status of the issue. | 'closed''open''proposed''removed''resolved' |
| title | The issue title. | string (required) |
| userId | A resource identifier for the user created the issue. | string (required) |
## Microsoft.ApiManagement/service/apis/issues/attachments@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/apis/issues/attachments@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      content = "string"
      contentFormat = "string"
      title = "string"
    }
  })
}

```

### service/apis/issues/attachments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics and hyphens.Start with letter and end with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:issues |
| properties | Properties of the Issue Attachment. | IssueAttachmentContractProperties |


### IssueAttachmentContractProperties

| Name | Description | Value |
|-|-|-|
| content | An HTTP link or Base64-encoded binary data. | string (required) |
| contentFormat | Either 'link' if content is provided via an HTTP link or the MIME type of the Base64-encoded binary data provided in the 'content' property. | string (required) |
| title | Filename by which the binary data will be saved. | string (required) |
## Microsoft.ApiManagement/service/apis/issues/comments@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/apis/issues/comments@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      createdDate = "string"
      text = "string"
      userId = "string"
    }
  })
}

```

### service/apis/issues/comments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics and hyphens.Start with letter and end with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:issues |
| properties | Properties of the Issue Comment. | IssueCommentContractProperties |


### IssueCommentContractProperties

| Name | Description | Value |
|-|-|-|
| createdDate | Date and time when the comment was created. | string |
| text | Comment text. | string (required) |
| userId | A resource identifier for the user who left the comment. | string (required) |
## Microsoft.ApiManagement/service/apis/operations@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/apis/operations@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      displayName = "string"
      method = "string"
      policies = "string"
      request = {
        description = "string"
        headers = [
          {
            defaultValue = "string"
            description = "string"
            examples = {
              {customized property} = {
                description = "string"
                externalValue = "string"
                summary = "string"
              }
              {customized property} = {
                description = "string"
                externalValue = "string"
                summary = "string"
              }
            }
            name = "string"
            required = bool
            schemaId = "string"
            type = "string"
            typeName = "string"
            values = [
              "string"
            ]
          }
        ]
        queryParameters = [
          {
            defaultValue = "string"
            description = "string"
            examples = {
              {customized property} = {
                description = "string"
                externalValue = "string"
                summary = "string"
              }
              {customized property} = {
                description = "string"
                externalValue = "string"
                summary = "string"
              }
            }
            name = "string"
            required = bool
            schemaId = "string"
            type = "string"
            typeName = "string"
            values = [
              "string"
            ]
          }
        ]
        representations = [
          {
            contentType = "string"
            examples = {
              {customized property} = {
                description = "string"
                externalValue = "string"
                summary = "string"
              }
              {customized property} = {
                description = "string"
                externalValue = "string"
                summary = "string"
              }
            }
            formParameters = [
              {
                defaultValue = "string"
                description = "string"
                examples = {
                  {customized property} = {
                    description = "string"
                    externalValue = "string"
                    summary = "string"
                  }
                  {customized property} = {
                    description = "string"
                    externalValue = "string"
                    summary = "string"
                  }
                }
                name = "string"
                required = bool
                schemaId = "string"
                type = "string"
                typeName = "string"
                values = [
                  "string"
                ]
              }
            ]
            schemaId = "string"
            typeName = "string"
          }
        ]
      }
      responses = [
        {
          description = "string"
          headers = [
            {
              defaultValue = "string"
              description = "string"
              examples = {
                {customized property} = {
                  description = "string"
                  externalValue = "string"
                  summary = "string"
                }
                {customized property} = {
                  description = "string"
                  externalValue = "string"
                  summary = "string"
                }
              }
              name = "string"
              required = bool
              schemaId = "string"
              type = "string"
              typeName = "string"
              values = [
                "string"
              ]
            }
          ]
          representations = [
            {
              contentType = "string"
              examples = {
                {customized property} = {
                  description = "string"
                  externalValue = "string"
                  summary = "string"
                }
                {customized property} = {
                  description = "string"
                  externalValue = "string"
                  summary = "string"
                }
              }
              formParameters = [
                {
                  defaultValue = "string"
                  description = "string"
                  examples = {
                    {customized property} = {
                      description = "string"
                      externalValue = "string"
                      summary = "string"
                    }
                    {customized property} = {
                      description = "string"
                      externalValue = "string"
                      summary = "string"
                    }
                  }
                  name = "string"
                  required = bool
                  schemaId = "string"
                  type = "string"
                  typeName = "string"
                  values = [
                    "string"
                  ]
                }
              ]
              schemaId = "string"
              typeName = "string"
            }
          ]
          statusCode = int
        }
      ]
      templateParameters = [
        {
          defaultValue = "string"
          description = "string"
          examples = {
            {customized property} = {
              description = "string"
              externalValue = "string"
              summary = "string"
            }
            {customized property} = {
              description = "string"
              externalValue = "string"
              summary = "string"
            }
          }
          name = "string"
          required = bool
          schemaId = "string"
          type = "string"
          typeName = "string"
          values = [
            "string"
          ]
        }
      ]
      urlTemplate = "string"
    }
  })
}

```

### service/apis/operations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics and hyphens.Start with letter and end with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:apis |
| properties | Properties of the Operation Contract. | OperationContractProperties |


### OperationContractProperties

| Name | Description | Value |
|-|-|-|
| description | Description of the operation. May include HTML formatting tags. | string |
| displayName | Operation Name. | string (required) |
| method | A Valid HTTP Operation Method. Typical Http Methods like GET, PUT, POST but not limited by only them. | string (required) |
| policies | Operation Policies | string |
| request | An entity containing request details. | RequestContract |
| responses | Array of Operation responses. | ResponseContract[] |
| templateParameters | Collection of URL template parameters. | ParameterContract[] |
| urlTemplate | Relative URL template identifying the target resource for this operation. May include parameters. Example: /customers/{cid}/orders/{oid}/?date={date} | string (required) |


### RequestContract

| Name | Description | Value |
|-|-|-|
| description | Operation request description. | string |
| headers | Collection of operation request headers. | ParameterContract[] |
| queryParameters | Collection of operation request query parameters. | ParameterContract[] |
| representations | Collection of operation request representations. | RepresentationContract[] |


### ParameterContract

| Name | Description | Value |
|-|-|-|
| defaultValue | Default parameter value. | string |
| description | Parameter description. | string |
| examples | Exampled defined for the parameter. | ParameterExamplesContract |
| name | Parameter name. | string (required) |
| required | Specifies whether parameter is required or not. | bool |
| schemaId | Schema identifier. | string |
| type | Parameter type. | string (required) |
| typeName | Type name defined by the schema. | string |
| values | Parameter values. | string[] |


### ParameterExamplesContract

| Name | Description | Value |
|-|-|-|
| {customized property} |  | ParameterExampleContract |
| {customized property} |  | ParameterExampleContract |


### ParameterExampleContract

| Name | Description | Value |
|-|-|-|
| description | Long description for the example | string |
| externalValue | A URL that points to the literal example | string |
| summary | Short description for the example | string |
| value | Example value. May be a primitive value, or an object. | For Bicep, you can use theany()function. |


### RepresentationContract

| Name | Description | Value |
|-|-|-|
| contentType | Specifies a registered or custom content type for this representation, e.g. application/xml. | string (required) |
| examples | Exampled defined for the representation. | ParameterExamplesContract |
| formParameters | Collection of form parameters. Required if 'contentType' value is either 'application/x-www-form-urlencoded' or 'multipart/form-data'.. | ParameterContract[] |
| schemaId | Schema identifier. Applicable only if 'contentType' value is neither 'application/x-www-form-urlencoded' nor 'multipart/form-data'. | string |
| typeName | Type name defined by the schema. Applicable only if 'contentType' value is neither 'application/x-www-form-urlencoded' nor 'multipart/form-data'. | string |


### ResponseContract

| Name | Description | Value |
|-|-|-|
| description | Operation response description. | string |
| headers | Collection of operation response headers. | ParameterContract[] |
| representations | Collection of operation response representations. | RepresentationContract[] |
| statusCode | Operation response HTTP status code. | int (required) |
## Microsoft.ApiManagement/service/apis/operations/policies@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/apis/operations/policies@2023-05-01-preview"
  name = "policy"
  parent_id = "string"
  body = jsonencode({
    properties = {
      format = "string"
      value = "string"
    }
  })
}

```

### service/apis/operations/policies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'policy' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:operations |
| properties | Properties of the Policy. | PolicyContractProperties |


### PolicyContractProperties

| Name | Description | Value |
|-|-|-|
| format | Format of the policyContent. | 'rawxml''rawxml-link''xml''xml-link' |
| value | Contents of the Policy as defined by the format. | string (required) |
## Microsoft.ApiManagement/service/apis/operations/tags@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/apis/operations/tags@2023-05-01-preview"
  name = "string"
  parent_id = "string"
}

```

### service/apis/operations/tags

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics and hyphens.Start with letter and end with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:operations |
## Microsoft.ApiManagement/service/apis/policies@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/apis/policies@2023-05-01-preview"
  name = "policy"
  parent_id = "string"
  body = jsonencode({
    properties = {
      format = "string"
      value = "string"
    }
  })
}

```

### service/apis/policies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'policy' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:apis |
| properties | Properties of the Policy. | PolicyContractProperties |


### PolicyContractProperties

| Name | Description | Value |
|-|-|-|
| format | Format of the policyContent. | 'rawxml''rawxml-link''xml''xml-link' |
| value | Contents of the Policy as defined by the format. | string (required) |
## Microsoft.ApiManagement/service/apis/releases@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/apis/releases@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      apiId = "string"
      notes = "string"
    }
  })
}

```

### service/apis/releases

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, and hyphens.Start and end with alphanumeric or underscore. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:apis |
| properties | ApiRelease entity contract properties. | ApiReleaseContractProperties |


### ApiReleaseContractProperties

| Name | Description | Value |
|-|-|-|
| apiId | Identifier of the API the release belongs to. | string |
| notes | Release Notes | string |
## Microsoft.ApiManagement/service/apis/resolvers@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/apis/resolvers@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      displayName = "string"
      path = "string"
    }
  })
}

```

### service/apis/resolvers

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:apis |
| properties | Properties of the Resolver Contract. | ResolverEntityBaseContract |


### ResolverEntityBaseContract

| Name | Description | Value |
|-|-|-|
| description | Description of the resolver. May include HTML formatting tags. | string |
| displayName | Resolver Name. | string |
| path | Path is type/field being resolved. | string |
## Microsoft.ApiManagement/service/apis/resolvers/policies@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/apis/resolvers/policies@2023-05-01-preview"
  name = "policy"
  parent_id = "string"
  body = jsonencode({
    properties = {
      format = "string"
      value = "string"
    }
  })
}

```

### service/apis/resolvers/policies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'policy' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:resolvers |
| properties | Properties of the Policy. | PolicyContractProperties |


### PolicyContractProperties

| Name | Description | Value |
|-|-|-|
| format | Format of the policyContent. | 'rawxml''rawxml-link''xml''xml-link' |
| value | Contents of the Policy as defined by the format. | string (required) |
## Microsoft.ApiManagement/service/apis/schemas@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/apis/schemas@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      contentType = "string"
      document = {
        value = "string"
      }
    }
  })
}

```

### service/apis/schemas

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics and hyphens.Start with letter and end with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:apis |
| properties | Properties of the API Schema. | SchemaContractProperties |


### SchemaContractProperties

| Name | Description | Value |
|-|-|-|
| contentType | Must be a valid a media type used in a Content-Type header as defined in the RFC 2616. Media type of the schema document (e.g. application/json, application/xml).-SwaggerSchema useapplication/vnd.ms-azure-apim.swagger.definitions+json-WSDLSchema useapplication/vnd.ms-azure-apim.xsd+xml-OpenApiSchema useapplication/vnd.oai.openapi.components+json-WADL Schemauseapplication/vnd.ms-azure-apim.wadl.grammars+xml-OData Schemauseapplication/vnd.ms-azure-apim.odata.schema-gRPC Schemausetext/protobuf. | string (required) |
| document | Create or update Properties of the API Schema Document. | SchemaDocumentProperties(required) |


### SchemaDocumentProperties

| Name | Description | Value |
|-|-|-|
| components | Types definitions. Used for Swagger/OpenAPI v2/v3 schemas only, null otherwise. | For Bicep, you can use theany()function. |
| definitions | Types definitions. Used for Swagger/OpenAPI v1 schemas only, null otherwise. | For Bicep, you can use theany()function. |
| value | Json escaped string defining the document representing the Schema. Used for schemas other than Swagger/OpenAPI. | string |
## Microsoft.ApiManagement/service/apis/tagDescriptions@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/apis/tagDescriptions@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      externalDocsDescription = "string"
      externalDocsUrl = "string"
    }
  })
}

```

### service/apis/tagDescriptions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics and hyphens.Start with letter and end with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:apis |
| properties | Properties supplied to Create TagDescription operation. | TagDescriptionBasePropertiesOrTagDescriptionContract... |


### TagDescriptionBasePropertiesOrTagDescriptionContract...

| Name | Description | Value |
|-|-|-|
| description | Description of the Tag. | string |
| externalDocsDescription | Description of the external resources describing the tag. | string |
| externalDocsUrl | Absolute URL of external resources describing the tag. | string |
## Microsoft.ApiManagement/service/apis/tags@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/apis/tags@2023-05-01-preview"
  name = "string"
  parent_id = "string"
}

```

### service/apis/tags

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics and hyphens.Start with letter and end with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:apis |
## Microsoft.ApiManagement/service/apis/wikis@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/apis/wikis@2023-05-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      documents = [
        {
          documentationId = "string"
        }
      ]
    }
  })
}

```

### service/apis/wikis

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:apis |
| properties | Wiki details. | WikiContractProperties |


### WikiContractProperties

| Name | Description | Value |
|-|-|-|
| documents | Collection wiki documents included into this wiki. | WikiDocumentationContract[] |


### WikiDocumentationContract

| Name | Description | Value |
|-|-|-|
| documentationId | Documentation Identifier | string |
## Microsoft.ApiManagement/service/apiVersionSets@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/apiVersionSets@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      displayName = "string"
      versionHeaderName = "string"
      versioningScheme = "string"
      versionQueryName = "string"
    }
  })
}

```

### service/apiVersionSets

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:service |
| properties | API VersionSet contract properties. | ApiVersionSetContractProperties |


### ApiVersionSetContractProperties

| Name | Description | Value |
|-|-|-|
| description | Description of API Version Set. | string |
| displayName | Name of API Version Set | string (required) |
| versionHeaderName | Name of HTTP header parameter that indicates the API Version if versioningScheme is set toheader. | string |
| versioningScheme | An value that determines where the API Version identifier will be located in a HTTP request. | 'Header''Query''Segment' (required) |
| versionQueryName | Name of query parameter that indicates the API Version if versioningScheme is set toquery. | string |
## Microsoft.ApiManagement/service/authorizationProviders@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/authorizationProviders@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      displayName = "string"
      identityProvider = "string"
      oauth2 = {
        grantTypes = {
          authorizationCode = {
            {customized property} = "string"
          }
          clientCredentials = {
            {customized property} = "string"
          }
        }
        redirectUrl = "string"
      }
    }
  })
}

```

### service/authorizationProviders

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:service |
| properties | Properties of the Authorization Provider Contract. | AuthorizationProviderContractProperties |


### AuthorizationProviderContractProperties

| Name | Description | Value |
|-|-|-|
| displayName | Authorization Provider name. Must be 1 to 300 characters long. | string |
| identityProvider | Identity provider name. Must be 1 to 300 characters long. | string |
| oauth2 | OAuth2 settings | AuthorizationProviderOAuth2Settings |


### AuthorizationProviderOAuth2Settings

| Name | Description | Value |
|-|-|-|
| grantTypes | OAuth2 settings | AuthorizationProviderOAuth2GrantTypes |
| redirectUrl | Redirect URL to be set in the OAuth application. | string |


### AuthorizationProviderOAuth2GrantTypes

| Name | Description | Value |
|-|-|-|
| authorizationCode | OAuth2 authorization code grant parameters | AuthorizationProviderOAuth2GrantTypesAuthorizationCo... |
| clientCredentials | OAuth2 client credential grant parameters | AuthorizationProviderOAuth2GrantTypesClientCredentia... |


### AuthorizationProviderOAuth2GrantTypesAuthorizationCo...

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### AuthorizationProviderOAuth2GrantTypesClientCredentia...

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
## Microsoft.ApiManagement/service/authorizationProviders/authorizations@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/authorizationProviders/authorizations@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      authorizationType = "OAuth2"
      error = {
        code = "string"
        message = "string"
      }
      oauth2grantType = "string"
      parameters = {
        {customized property} = "string"
      }
      status = "string"
    }
  })
}

```

### service/authorizationProviders/authorizations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:authorizationProviders |
| properties | Properties of the Authorization Contract. | AuthorizationContractProperties |


### AuthorizationContractProperties

| Name | Description | Value |
|-|-|-|
| authorizationType | Authorization type options | 'OAuth2' |
| error | Authorization error details. | AuthorizationError |
| oauth2grantType | OAuth2 grant type options | 'AuthorizationCode''ClientCredentials' |
| parameters | Authorization parameters | AuthorizationContractPropertiesParameters |
| status | Status of the Authorization | string |


### AuthorizationError

| Name | Description | Value |
|-|-|-|
| code | Error code | string |
| message | Error message | string |


### AuthorizationContractPropertiesParameters

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
## Microsoft.ApiManagement/service/authorizationProviders/authorizations/accessPolicies@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/authorizationProviders/authorizations/accessPolicies@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      appIds = [
        "string"
      ]
      objectId = "string"
      tenantId = "string"
    }
  })
}

```

### service/authorizationProviders/authorizations/access...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:authorizations |
| properties | Properties of the Authorization Contract. | AuthorizationAccessPolicyContractProperties |


### AuthorizationAccessPolicyContractProperties

| Name | Description | Value |
|-|-|-|
| appIds | The allowed Azure Active Directory Application IDs | string[] |
| objectId | The Object Id | string |
| tenantId | The Tenant Id | string |
## Microsoft.ApiManagement/service/authorizationServers@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/authorizationServers@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      authorizationEndpoint = "string"
      authorizationMethods = [
        "string"
      ]
      bearerTokenSendingMethods = [
        "string"
      ]
      clientAuthenticationMethod = [
        "string"
      ]
      clientId = "string"
      clientRegistrationEndpoint = "string"
      clientSecret = "string"
      defaultScope = "string"
      description = "string"
      displayName = "string"
      grantTypes = [
        "string"
      ]
      resourceOwnerPassword = "string"
      resourceOwnerUsername = "string"
      supportState = bool
      tokenBodyParameters = [
        {
          name = "string"
          value = "string"
        }
      ]
      tokenEndpoint = "string"
      useInApiDocumentation = bool
      useInTestConsole = bool
    }
  })
}

```

### service/authorizationServers

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics and hyphens.Start with letter and end with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:service |
| properties | Properties of the External OAuth authorization server Contract. | AuthorizationServerContractProperties |


### AuthorizationServerContractProperties

| Name | Description | Value |
|-|-|-|
| authorizationEndpoint | OAuth authorization endpoint. Seehttp://tools.ietf.org/html/rfc6749#section-3.2. | string (required) |
| authorizationMethods | HTTP verbs supported by the authorization endpoint. GET must be always present. POST is optional. | String array containing any of:'DELETE''GET''HEAD''OPTIONS''PATCH''POST''PUT''TRACE' |
| bearerTokenSendingMethods | Specifies the mechanism by which access token is passed to the API. | String array containing any of:'authorizationHeader''query' |
| clientAuthenticationMethod | Method of authentication supported by the token endpoint of this authorization server. Possible values are Basic and/or Body. When Body is specified, client credentials and other parameters are passed within the request body in the application/x-www-form-urlencoded format. | String array containing any of:'Basic''Body' |
| clientId | Client or app id registered with this authorization server. | string (required) |
| clientRegistrationEndpoint | Optional reference to a page where client or app registration for this authorization server is performed. Contains absolute URL to entity being referenced. | string (required) |
| clientSecret | Client or app secret registered with this authorization server. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value. | string |
| defaultScope | Access token scope that is going to be requested by default. Can be overridden at the API level. Should be provided in the form of a string containing space-delimited values. | string |
| description | Description of the authorization server. Can contain HTML formatting tags. | string |
| displayName | User-friendly authorization server name. | string (required) |
| grantTypes | Form of an authorization grant, which the client uses to request the access token. | String array containing any of:'authorizationCode''clientCredentials''implicit''resourceOwnerPassword' (required) |
| resourceOwnerPassword | Can be optionally specified when resource owner password grant type is supported by this authorization server. Default resource owner password. | string |
| resourceOwnerUsername | Can be optionally specified when resource owner password grant type is supported by this authorization server. Default resource owner username. | string |
| supportState | If true, authorization server will include state parameter from the authorization request to its response. Client may use state parameter to raise protocol security. | bool |
| tokenBodyParameters | Additional parameters required by the token endpoint of this authorization server represented as an array of JSON objects with name and value string properties, i.e. {"name" : "name value", "value": "a value"}. | TokenBodyParameterContract[] |
| tokenEndpoint | OAuth token endpoint. Contains absolute URI to entity being referenced. | string |
| useInApiDocumentation | If true, the authorization server will be used in the API documentation in the developer portal. False by default if no value is provided. | bool |
| useInTestConsole | If true, the authorization server may be used in the developer portal test console. True by default if no value is provided. | bool |


### TokenBodyParameterContract

| Name | Description | Value |
|-|-|-|
| name | body parameter name. | string (required) |
| value | body parameter value. | string (required) |
## Microsoft.ApiManagement/service/backends@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/backends@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      circuitBreaker = {
        rules = [
          {
            failureCondition = {
              count = int
              errorReasons = [
                "string"
              ]
              interval = "string"
              percentage = int
              statusCodeRanges = [
                {
                  max = int
                  min = int
                }
              ]
            }
            name = "string"
            tripDuration = "string"
          }
        ]
      }
      credentials = {
        authorization = {
          parameter = "string"
          scheme = "string"
        }
        certificate = [
          "string"
        ]
        certificateIds = [
          "string"
        ]
        header = {
          {customized property} = [
            "string"
          ]
        }
        query = {
          {customized property} = [
            "string"
          ]
        }
      }
      description = "string"
      pool = {
        services = [
          {
            id = "string"
          }
        ]
      }
      properties = {
        serviceFabricCluster = {
          clientCertificateId = "string"
          clientCertificatethumbprint = "string"
          managementEndpoints = [
            "string"
          ]
          maxPartitionResolutionRetries = int
          serverCertificateThumbprints = [
            "string"
          ]
          serverX509Names = [
            {
              issuerCertificateThumbprint = "string"
              name = "string"
            }
          ]
        }
      }
      protocol = "string"
      proxy = {
        password = "string"
        url = "string"
        username = "string"
      }
      resourceId = "string"
      title = "string"
      tls = {
        validateCertificateChain = bool
        validateCertificateName = bool
      }
      type = "string"
      url = "string"
    }
  })
}

```

### service/backends

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics and hyphens.Start with letter and end with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:service |
| properties | Backend entity contract properties. | BackendContractProperties |


### BackendContractProperties

| Name | Description | Value |
|-|-|-|
| circuitBreaker | Backend Circuit Breaker Configuration | BackendCircuitBreaker |
| credentials | Backend Credentials Contract Properties | BackendCredentialsContract |
| description | Backend Description. | string |
| pool |  | BackendBaseParametersPool |
| properties | Backend Properties contract | BackendProperties |
| protocol | Backend communication protocol. | 'http''soap' (required) |
| proxy | Backend gateway Contract Properties | BackendProxyContract |
| resourceId | Management Uri of the Resource in External System. This URL can be the Arm Resource Id of Logic Apps, Function Apps or API Apps. | string |
| title | Backend Title. | string |
| tls | Backend TLS Properties | BackendTlsProperties |
| type | Type of the backend. A backend can be either Single or Pool. | 'Pool''Single' |
| url | Runtime Url of the Backend. | string (required) |


### BackendCircuitBreaker

| Name | Description | Value |
|-|-|-|
| rules | The rules for tripping the backend. | CircuitBreakerRule[] |


### CircuitBreakerRule

| Name | Description | Value |
|-|-|-|
| failureCondition | The conditions for tripping the circuit breaker. | CircuitBreakerFailureCondition |
| name | The rule name. | string |
| tripDuration | The duration for which the circuit will be tripped. | string |


### CircuitBreakerFailureCondition

| Name | Description | Value |
|-|-|-|
| count | The threshold for opening the circuit. | int |
| errorReasons | The error reasons which are considered as failure. | string[] |
| interval | The interval during which the failures are counted. | string |
| percentage | The threshold for opening the circuit. | int |
| statusCodeRanges | The status code ranges which are considered as failure. | FailureStatusCodeRange[] |


### FailureStatusCodeRange

| Name | Description | Value |
|-|-|-|
| max | The maximum http status code. | int |
| min | The minimum http status code. | int |


### BackendCredentialsContract

| Name | Description | Value |
|-|-|-|
| authorization | Authorization header authentication | BackendAuthorizationHeaderCredentials |
| certificate | List of Client Certificate Thumbprints. Will be ignored if certificatesIds are provided. | string[] |
| certificateIds | List of Client Certificate Ids. | string[] |
| header | Header Parameter description. | BackendCredentialsContractHeader |
| query | Query Parameter description. | BackendCredentialsContractQuery |


### BackendAuthorizationHeaderCredentials

| Name | Description | Value |
|-|-|-|
| parameter | Authentication Parameter value. | string (required) |
| scheme | Authentication Scheme name. | string (required) |


### BackendCredentialsContractHeader

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string[] |


### BackendCredentialsContractQuery

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string[] |


### BackendBaseParametersPool

| Name | Description | Value |
|-|-|-|
| services | The list of backend entities belonging to a pool. | BackendPoolItem[] |


### BackendPoolItem

| Name | Description | Value |
|-|-|-|
| id | The unique ARM id of the backend entity. The ARM id should refer to an already existing backend entity. | string (required) |


### BackendProperties

| Name | Description | Value |
|-|-|-|
| serviceFabricCluster | Backend Service Fabric Cluster Properties | BackendServiceFabricClusterProperties |


### BackendServiceFabricClusterProperties

| Name | Description | Value |
|-|-|-|
| clientCertificateId | The client certificate id for the management endpoint. | string |
| clientCertificatethumbprint | The client certificate thumbprint for the management endpoint. Will be ignored if certificatesIds are provided | string |
| managementEndpoints | The cluster management endpoint. | string[] (required) |
| maxPartitionResolutionRetries | Maximum number of retries while attempting resolve the partition. | int |
| serverCertificateThumbprints | Thumbprints of certificates cluster management service uses for tls communication | string[] |
| serverX509Names | Server X509 Certificate Names Collection | X509CertificateName[] |


### X509CertificateName

| Name | Description | Value |
|-|-|-|
| issuerCertificateThumbprint | Thumbprint for the Issuer of the Certificate. | string |
| name | Common Name of the Certificate. | string |


### BackendProxyContract

| Name | Description | Value |
|-|-|-|
| password | Password to connect to the WebProxy Server | string |
| url | WebProxy Server AbsoluteUri property which includes the entire URI stored in the Uri instance, including all fragments and query strings. | string (required) |
| username | Username to connect to the WebProxy server | string |


### BackendTlsProperties

| Name | Description | Value |
|-|-|-|
| validateCertificateChain | Flag indicating whether SSL certificate chain validation should be done when using self-signed certificates for this backend host. | bool |
| validateCertificateName | Flag indicating whether SSL certificate name validation should be done when using self-signed certificates for this backend host. | bool |
## Microsoft.ApiManagement/service/caches@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/caches@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      connectionString = "string"
      description = "string"
      resourceId = "string"
      useFromLocation = "string"
    }
  })
}

```

### service/caches

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:service |
| properties | Cache properties details. | CacheContractProperties |


### CacheContractProperties

| Name | Description | Value |
|-|-|-|
| connectionString | Runtime connection string to cache | string (required) |
| description | Cache description | string |
| resourceId | Original uri of entity in external system cache points to | string |
| useFromLocation | Location identifier to use cache from (should be either 'default' or valid Azure region identifier) | string (required) |
## Microsoft.ApiManagement/service/certificates@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/certificates@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      data = "string"
      keyVault = {
        identityClientId = "string"
        secretIdentifier = "string"
      }
      password = "string"
    }
  })
}

```

### service/certificates

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics and hyphens.Start with letter and end with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:service |
| properties | Certificate create or update properties details. | CertificateCreateOrUpdatePropertiesOrCertificateCont... |


### CertificateCreateOrUpdatePropertiesOrCertificateCont...

| Name | Description | Value |
|-|-|-|
| data | Base 64 encoded certificate using the application/x-pkcs12 representation. | string |
| keyVault | KeyVault location details of the certificate. | KeyVaultContractCreatePropertiesOrKeyVaultContractPr... |
| password | Password for the Certificate | string |


### KeyVaultContractCreatePropertiesOrKeyVaultContractPr...

| Name | Description | Value |
|-|-|-|
| identityClientId | Null for SystemAssignedIdentity or Client Id for UserAssignedIdentity , which will be used to access key vault secret. | string |
| secretIdentifier | Key vault secret identifier for fetching secret. Providing a versioned secret will prevent auto-refresh. This requires API Management service to be configured with aka.ms/apimmsi | string |
## Microsoft.ApiManagement/service/contentTypes@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/contentTypes@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      id = "string"
      name = "string"
      version = "string"
    }
  })
}

```

### service/contentTypes

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:service |
| properties | Properties of the content type. | ContentTypeContractProperties |


### ContentTypeContractProperties

| Name | Description | Value |
|-|-|-|
| description | Content type description. | string |
| id | Content type identifier | string |
| name | Content type name. Must be 1 to 250 characters long. | string |
| schema | Content type schema. | For Bicep, you can use theany()function. |
| version | Content type version. | string |
## Microsoft.ApiManagement/service/contentTypes/contentItems@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/contentTypes/contentItems@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {}
  })
}

```

### service/contentTypes/contentItems

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:contentTypes |
| properties | Properties of the content item. | ContentItemContractProperties |


### ContentItemContractProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | For Bicep, you can use theany()function. |
## Microsoft.ApiManagement/service/diagnostics@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/diagnostics@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      alwaysLog = "allErrors"
      backend = {
        request = {
          body = {
            bytes = int
          }
          dataMasking = {
            headers = [
              {
                mode = "string"
                value = "string"
              }
            ]
            queryParams = [
              {
                mode = "string"
                value = "string"
              }
            ]
          }
          headers = [
            "string"
          ]
        }
        response = {
          body = {
            bytes = int
          }
          dataMasking = {
            headers = [
              {
                mode = "string"
                value = "string"
              }
            ]
            queryParams = [
              {
                mode = "string"
                value = "string"
              }
            ]
          }
          headers = [
            "string"
          ]
        }
      }
      frontend = {
        request = {
          body = {
            bytes = int
          }
          dataMasking = {
            headers = [
              {
                mode = "string"
                value = "string"
              }
            ]
            queryParams = [
              {
                mode = "string"
                value = "string"
              }
            ]
          }
          headers = [
            "string"
          ]
        }
        response = {
          body = {
            bytes = int
          }
          dataMasking = {
            headers = [
              {
                mode = "string"
                value = "string"
              }
            ]
            queryParams = [
              {
                mode = "string"
                value = "string"
              }
            ]
          }
          headers = [
            "string"
          ]
        }
      }
      httpCorrelationProtocol = "string"
      logClientIp = bool
      loggerId = "string"
      metrics = bool
      operationNameFormat = "string"
      sampling = {
        percentage = int
        samplingType = "fixed"
      }
      verbosity = "string"
    }
  })
}

```

### service/diagnostics

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics and hyphens.Start with letter and end with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:service |
| properties | Diagnostic entity contract properties. | DiagnosticContractProperties |


### DiagnosticContractProperties

| Name | Description | Value |
|-|-|-|
| alwaysLog | Specifies for what type of messages sampling settings should not apply. | 'allErrors' |
| backend | Diagnostic settings for incoming/outgoing HTTP messages to the Backend | PipelineDiagnosticSettings |
| frontend | Diagnostic settings for incoming/outgoing HTTP messages to the Gateway. | PipelineDiagnosticSettings |
| httpCorrelationProtocol | Sets correlation protocol to use for Application Insights diagnostics. | 'Legacy''None''W3C' |
| logClientIp | Log the ClientIP. Default is false. | bool |
| loggerId | Resource Id of a target logger. | string (required) |
| metrics | Emit custom metrics via emit-metric policy. Applicable only to Application Insights diagnostic settings. | bool |
| operationNameFormat | The format of the Operation Name for Application Insights telemetries. Default is Name. | 'Name''Url' |
| sampling | Sampling settings for Diagnostic. | SamplingSettings |
| verbosity | The verbosity level applied to traces emitted by trace policies. | 'error''information''verbose' |


### PipelineDiagnosticSettings

| Name | Description | Value |
|-|-|-|
| request | Diagnostic settings for request. | HttpMessageDiagnostic |
| response | Diagnostic settings for response. | HttpMessageDiagnostic |


### HttpMessageDiagnostic

| Name | Description | Value |
|-|-|-|
| body | Body logging settings. | BodyDiagnosticSettings |
| dataMasking | Data masking settings. | DataMasking |
| headers | Array of HTTP Headers to log. | string[] |


### BodyDiagnosticSettings

| Name | Description | Value |
|-|-|-|
| bytes | Number of request body bytes to log. | int |


### DataMasking

| Name | Description | Value |
|-|-|-|
| headers | Masking settings for headers | DataMaskingEntity[] |
| queryParams | Masking settings for Url query parameters | DataMaskingEntity[] |


### DataMaskingEntity

| Name | Description | Value |
|-|-|-|
| mode | Data masking mode. | 'Hide''Mask' |
| value | The name of an entity to mask (e.g. a name of a header or a query parameter). | string |


### SamplingSettings

| Name | Description | Value |
|-|-|-|
| percentage | Rate of sampling for fixed-rate sampling. | int |
| samplingType | Sampling type. | 'fixed' |
## Microsoft.ApiManagement/service/documentations@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/documentations@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      content = "string"
      title = "string"
    }
  })
}

```

### service/documentations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:service |
| properties | Markdown Documentation details. | DocumentationContractProperties |


### DocumentationContractProperties

| Name | Description | Value |
|-|-|-|
| content | Markdown documentation content. | string |
| title | documentation title. | string |
## Microsoft.ApiManagement/service/gateways@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/gateways@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      locationData = {
        city = "string"
        countryOrRegion = "string"
        district = "string"
        name = "string"
      }
    }
  })
}

```

### service/gateways

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:service |
| properties | Gateway details. | GatewayContractProperties |


### GatewayContractProperties

| Name | Description | Value |
|-|-|-|
| description | Gateway description | string |
| locationData | Gateway location. | ResourceLocationDataContract |


### ResourceLocationDataContract

| Name | Description | Value |
|-|-|-|
| city | The city or locality where the resource is located. | string |
| countryOrRegion | The country or region where the resource is located. | string |
| district | The district, state, or province where the resource is located. | string |
| name | A canonical name for the geographic or physical location. | string (required) |
## Microsoft.ApiManagement/service/gateways/apis@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/gateways/apis@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      provisioningState = "created"
    }
  })
}

```

### service/gateways/apis

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:gateways |
| properties | Association entity contract properties. | AssociationContractProperties |


### AssociationContractProperties

| Name | Description | Value |
|-|-|-|
| provisioningState | Provisioning state. | 'created' |
## Microsoft.ApiManagement/service/gateways/certificateAuthorities@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/gateways/certificateAuthorities@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      isTrusted = bool
    }
  })
}

```

### service/gateways/certificateAuthorities

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:gateways |
| properties | Gateway certificate authority details. | GatewayCertificateAuthorityContractProperties |


### GatewayCertificateAuthorityContractProperties

| Name | Description | Value |
|-|-|-|
| isTrusted | Determines whether certificate authority is trusted. | bool |
## Microsoft.ApiManagement/service/gateways/hostnameConfigurations@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/gateways/hostnameConfigurations@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      certificateId = "string"
      hostname = "string"
      http2Enabled = bool
      negotiateClientCertificate = bool
      tls10Enabled = bool
      tls11Enabled = bool
    }
  })
}

```

### service/gateways/hostnameConfigurations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:gateways |
| properties | Gateway hostname configuration details. | GatewayHostnameConfigurationContractProperties |


### GatewayHostnameConfigurationContractProperties

| Name | Description | Value |
|-|-|-|
| certificateId | Identifier of Certificate entity that will be used for TLS connection establishment | string |
| hostname | Hostname value. Supports valid domain name, partial or full wildcard | string |
| http2Enabled | Specifies if HTTP/2.0 is supported | bool |
| negotiateClientCertificate | Determines whether gateway requests client certificate | bool |
| tls10Enabled | Specifies if TLS 1.0 is supported | bool |
| tls11Enabled | Specifies if TLS 1.1 is supported | bool |
## Microsoft.ApiManagement/service/groups@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/groups@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      displayName = "string"
      externalId = "string"
      type = "string"
    }
  })
}

```

### service/groups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics and hyphens.Start with letter and end with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:service |
| properties | Properties supplied to Create Group operation. | GroupCreateParametersPropertiesOrGroupContractProper... |


### GroupCreateParametersPropertiesOrGroupContractProper...

| Name | Description | Value |
|-|-|-|
| description | Group description. | string |
| displayName | Group name. | string (required) |
| externalId | Identifier of the external groups, this property contains the id of the group from the external identity provider, e.g. for Azure Active Directoryaad://{tenant}.onmicrosoft.com/groups/{group object id}; otherwise the value is null. | string |
| type | Group type. | 'custom''external''system' |
## Microsoft.ApiManagement/service/groups/users@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/groups/users@2023-05-01-preview"
  name = "string"
  parent_id = "string"
}

```

### service/groups/users

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics and hyphens.Start with letter and end with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:groups |
## Microsoft.ApiManagement/service/identityProviders@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/identityProviders@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      allowedTenants = [
        "string"
      ]
      authority = "string"
      clientId = "string"
      clientLibrary = "string"
      clientSecret = "string"
      passwordResetPolicyName = "string"
      profileEditingPolicyName = "string"
      signinPolicyName = "string"
      signinTenant = "string"
      signupPolicyName = "string"
      type = "string"
    }
  })
}

```

### service/identityProviders

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics and hyphens.Start with letter and end with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:service |
| properties | Identity Provider contract properties. | IdentityProviderCreateContractPropertiesOrIdentityPr... |


### IdentityProviderCreateContractPropertiesOrIdentityPr...

| Name | Description | Value |
|-|-|-|
| allowedTenants | List of Allowed Tenants when configuring Azure Active Directory login. | string[] |
| authority | OpenID Connect discovery endpoint hostname for AAD or AAD B2C. | string |
| clientId | Client Id of the Application in the external Identity Provider. It is App ID for Facebook login, Client ID for Google login, App ID for Microsoft. | string (required) |
| clientLibrary | The client library to be used in the developer portal. Only applies to AAD and AAD B2C Identity Provider. | string |
| clientSecret | Client secret of the Application in external Identity Provider, used to authenticate login request. For example, it is App Secret for Facebook login, API Key for Google login, Public Key for Microsoft. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value. | string (required) |
| passwordResetPolicyName | Password Reset Policy Name. Only applies to AAD B2C Identity Provider. | string |
| profileEditingPolicyName | Profile Editing Policy Name. Only applies to AAD B2C Identity Provider. | string |
| signinPolicyName | Signin Policy Name. Only applies to AAD B2C Identity Provider. | string |
| signinTenant | The TenantId to use instead of Common when logging into Active Directory | string |
| signupPolicyName | Signup Policy Name. Only applies to AAD B2C Identity Provider. | string |
| type | Identity Provider Type identifier. | 'aad''aadB2C''facebook''google''microsoft''twitter' |
## Microsoft.ApiManagement/service/loggers@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/loggers@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      credentials = {
        {customized property} = "string"
      }
      description = "string"
      isBuffered = bool
      loggerType = "string"
      resourceId = "string"
    }
  })
}

```

### service/loggers

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics and hyphens.Start with letter and end with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:service |
| properties | Logger entity contract properties. | LoggerContractProperties |


### LoggerContractProperties

| Name | Description | Value |
|-|-|-|
| credentials | The name and SendRule connection string of the event hub for azureEventHub logger.Instrumentation key for applicationInsights logger. | LoggerContractPropertiesCredentials |
| description | Logger description. | string |
| isBuffered | Whether records are buffered in the logger before publishing. Default is assumed to be true. | bool |
| loggerType | Logger type. | 'applicationInsights''azureEventHub''azureMonitor' (required) |
| resourceId | Azure Resource Id of a log target (either Azure Event Hub resource or Azure Application Insights resource). | string |


### LoggerContractPropertiesCredentials

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
## Microsoft.ApiManagement/service/namedValues@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/namedValues@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      displayName = "string"
      keyVault = {
        identityClientId = "string"
        secretIdentifier = "string"
      }
      secret = bool
      tags = [
        "string"
      ]
      value = "string"
    }
  })
}

```

### service/namedValues

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:service |
| properties | NamedValue entity contract properties for PUT operation. | NamedValueCreateContractPropertiesOrNamedValueContra... |


### NamedValueCreateContractPropertiesOrNamedValueContra...

| Name | Description | Value |
|-|-|-|
| displayName | Unique name of NamedValue. It may contain only letters, digits, period, dash, and underscore characters. | string (required) |
| keyVault | KeyVault location details of the namedValue. | KeyVaultContractCreatePropertiesOrKeyVaultContractPr... |
| secret | Determines whether the value is a secret and should be encrypted or not. Default value is false. | bool |
| tags | Optional tags that when provided can be used to filter the NamedValue list. | string[] |
| value | Value of the NamedValue. Can contain policy expressions. It may not be empty or consist only of whitespace. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value. | string |


### KeyVaultContractCreatePropertiesOrKeyVaultContractPr...

| Name | Description | Value |
|-|-|-|
| identityClientId | Null for SystemAssignedIdentity or Client Id for UserAssignedIdentity , which will be used to access key vault secret. | string |
| secretIdentifier | Key vault secret identifier for fetching secret. Providing a versioned secret will prevent auto-refresh. This requires API Management service to be configured with aka.ms/apimmsi | string |
## Microsoft.ApiManagement/service/notifications@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/notifications@2023-05-01-preview"
  name = "string"
  parent_id = "string"
}

```

### service/notifications

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics and hyphens.Start with letter and end with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:service |
## Microsoft.ApiManagement/service/notifications/recipientEmails@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/notifications/recipientEmails@2023-05-01-preview"
  name = "string"
  parent_id = "string"
}

```

### service/notifications/recipientEmails

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics and hyphens.Start with letter and end with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:notifications |
## Microsoft.ApiManagement/service/notifications/recipientUsers@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/notifications/recipientUsers@2023-05-01-preview"
  name = "string"
  parent_id = "string"
}

```

### service/notifications/recipientUsers

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:notifications |
## Microsoft.ApiManagement/service/openidConnectProviders@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/openidConnectProviders@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      clientId = "string"
      clientSecret = "string"
      description = "string"
      displayName = "string"
      metadataEndpoint = "string"
      useInApiDocumentation = bool
      useInTestConsole = bool
    }
  })
}

```

### service/openidConnectProviders

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics and hyphens.Start with letter and end with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:service |
| properties | OpenId Connect Provider contract properties. | OpenidConnectProviderContractProperties |


### OpenidConnectProviderContractProperties

| Name | Description | Value |
|-|-|-|
| clientId | Client ID of developer console which is the client application. | string (required) |
| clientSecret | Client Secret of developer console which is the client application. | string |
| description | User-friendly description of OpenID Connect Provider. | string |
| displayName | User-friendly OpenID Connect Provider name. | string (required) |
| metadataEndpoint | Metadata endpoint URI. | string (required) |
| useInApiDocumentation | If true, the Open ID Connect provider will be used in the API documentation in the developer portal. False by default if no value is provided. | bool |
| useInTestConsole | If true, the Open ID Connect provider may be used in the developer portal test console. True by default if no value is provided. | bool |
## Microsoft.ApiManagement/service/policies@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/policies@2023-05-01-preview"
  name = "policy"
  parent_id = "string"
  body = jsonencode({
    properties = {
      format = "string"
      value = "string"
    }
  })
}

```

### service/policies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'policy' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:service |
| properties | Properties of the Policy. | PolicyContractProperties |


### PolicyContractProperties

| Name | Description | Value |
|-|-|-|
| format | Format of the policyContent. | 'rawxml''rawxml-link''xml''xml-link' |
| value | Contents of the Policy as defined by the format. | string (required) |
## Microsoft.ApiManagement/service/policyFragments@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/policyFragments@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      format = "string"
      value = "string"
    }
  })
}

```

### service/policyFragments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:service |
| properties | Properties of the Policy Fragment. | PolicyFragmentContractProperties |


### PolicyFragmentContractProperties

| Name | Description | Value |
|-|-|-|
| description | Policy fragment description. | string |
| format | Format of the policy fragment content. | 'rawxml''xml' |
| value | Contents of the policy fragment. | string (required) |
## Microsoft.ApiManagement/service/policyRestrictions@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/policyRestrictions@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      requireBase = "string"
      scope = "string"
    }
  })
}

```

### service/policyRestrictions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:service |
| properties | Properties of the Policy Restriction. | PolicyRestrictionContractProperties |


### PolicyRestrictionContractProperties

| Name | Description | Value |
|-|-|-|
| requireBase | Indicates if base policy should be enforced for the policy document. | 'false''true' |
| scope | Path to the policy document. | string |
## Microsoft.ApiManagement/service/portalconfigs@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/portalconfigs@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      cors = {
        allowedOrigins = [
          "string"
        ]
      }
      csp = {
        allowedSources = [
          "string"
        ]
        mode = "string"
        reportUri = [
          "string"
        ]
      }
      delegation = {
        delegateRegistration = bool
        delegateSubscription = bool
        delegationUrl = "string"
        validationKey = "string"
      }
      enableBasicAuth = bool
      signin = {
        require = bool
      }
      signup = {
        termsOfService = {
          requireConsent = bool
          text = "string"
        }
      }
    }
  })
}

```

### service/portalconfigs

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:service |
| properties | The developer portal configuration contract properties. | PortalConfigProperties |


### PortalConfigProperties

| Name | Description | Value |
|-|-|-|
| cors | The developer portal Cross-Origin Resource Sharing (CORS) settings. | PortalConfigCorsProperties |
| csp | The developer portal Content Security Policy (CSP) settings. | PortalConfigCspProperties |
| delegation | The developer portal delegation settings. | PortalConfigDelegationProperties |
| enableBasicAuth | Enable or disable Basic authentication method. | bool |
| signin |  | PortalConfigPropertiesSignin |
| signup |  | PortalConfigPropertiesSignup |


### PortalConfigCorsProperties

| Name | Description | Value |
|-|-|-|
| allowedOrigins | Allowed origins, e.g.https://trusted.com. | string[] |


### PortalConfigCspProperties

| Name | Description | Value |
|-|-|-|
| allowedSources | Allowed sources, e.g.*.trusted.com,trusted.com,https://. | string[] |
| mode | The mode of the developer portal Content Security Policy (CSP). | 'disabled''enabled''reportOnly' |
| reportUri | The URLs used by the browser to report CSP violations. | string[] |


### PortalConfigDelegationProperties

| Name | Description | Value |
|-|-|-|
| delegateRegistration | Enable or disable delegation for user registration. | bool |
| delegateSubscription | Enable or disable delegation for product subscriptions. | bool |
| delegationUrl | A delegation endpoint URL. | string |
| validationKey | A base64-encoded validation key to ensure requests originate from Azure API Management service. | string |


### PortalConfigPropertiesSignin

| Name | Description | Value |
|-|-|-|
| require | Redirect anonymous users to the sign-in page. | bool |


### PortalConfigPropertiesSignup

| Name | Description | Value |
|-|-|-|
| termsOfService | Terms of service settings. | PortalConfigTermsOfServiceProperties |


### PortalConfigTermsOfServiceProperties

| Name | Description | Value |
|-|-|-|
| requireConsent | Ask user for consent to the terms of service. | bool |
| text | A terms of service text. | string |
## Microsoft.ApiManagement/service/portalRevisions@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/portalRevisions@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      isCurrent = bool
    }
  })
}

```

### service/portalRevisions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:service |
| properties | Properties of the portal revisions. | PortalRevisionContractProperties |


### PortalRevisionContractProperties

| Name | Description | Value |
|-|-|-|
| description | Portal revision description. | string |
| isCurrent | Indicates if the portal's revision is public. | bool |
## Microsoft.ApiManagement/service/portalsettings@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/portalsettings@2023-05-01-preview"
  name = "delegation"
  parent_id = "string"
  body = jsonencode({
    properties = {
      subscriptions = {
        enabled = bool
      }
      url = "string"
      userRegistration = {
        enabled = bool
      }
      validationKey = "string"
    }
  })
}

```

### service/portalsettings-delegation

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'delegation' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:service |
| properties | Delegation settings contract properties. | PortalDelegationSettingsProperties |


### PortalDelegationSettingsProperties

| Name | Description | Value |
|-|-|-|
| subscriptions | Subscriptions delegation settings. | SubscriptionsDelegationSettingsProperties |
| url | A delegation Url. | string |
| userRegistration | User registration delegation settings. | RegistrationDelegationSettingsProperties |
| validationKey | A base64-encoded validation key to validate, that a request is coming from Azure API Management. | string |


### SubscriptionsDelegationSettingsProperties

| Name | Description | Value |
|-|-|-|
| enabled | Enable or disable delegation for subscriptions. | bool |


### RegistrationDelegationSettingsProperties

| Name | Description | Value |
|-|-|-|
| enabled | Enable or disable delegation for user registration. | bool |
## Microsoft.ApiManagement/service/portalsettings@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/portalsettings@2023-05-01-preview"
  name = "signin"
  parent_id = "string"
  body = jsonencode({
    properties = {
      enabled = bool
    }
  })
}

```

### service/portalsettings-signin

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'signin' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:service |
| properties | Sign-in settings contract properties. | PortalSigninSettingProperties |


### PortalSigninSettingProperties

| Name | Description | Value |
|-|-|-|
| enabled | Redirect Anonymous users to the Sign-In page. | bool |
## Microsoft.ApiManagement/service/portalsettings@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/portalsettings@2023-05-01-preview"
  name = "signup"
  parent_id = "string"
  body = jsonencode({
    properties = {
      enabled = bool
      termsOfService = {
        consentRequired = bool
        enabled = bool
        text = "string"
      }
    }
  })
}

```

### service/portalsettings-signup

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'signup' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:service |
| properties | Sign-up settings contract properties. | PortalSignupSettingsProperties |


### PortalSignupSettingsProperties

| Name | Description | Value |
|-|-|-|
| enabled | Allow users to sign up on a developer portal. | bool |
| termsOfService | Terms of service contract properties. | TermsOfServiceProperties |


### TermsOfServiceProperties

| Name | Description | Value |
|-|-|-|
| consentRequired | Ask user for consent to the terms of service. | bool |
| enabled | Display terms of service during a sign-up process. | bool |
| text | A terms of service text. | string |
## Microsoft.ApiManagement/service/privateEndpointConnections@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/privateEndpointConnections@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateLinkServiceConnectionState = {
        actionsRequired = "string"
        description = "string"
        status = "string"
      }
    }
  })
}

```

### service/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:service |
| properties | The connection state of the private endpoint connection. | PrivateEndpointConnectionRequestPropertiesOrPrivateE... |


### PrivateEndpointConnectionRequestPropertiesOrPrivateE...

| Name | Description | Value |
|-|-|-|
| privateLinkServiceConnectionState | A collection of information about the state of the connection between service consumer and provider. | PrivateLinkServiceConnectionState |


### PrivateLinkServiceConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | A message indicating if changes on the service provider require any updates on the consumer. | string |
| description | The reason for approval/rejection of the connection. | string |
| status | Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service. | 'Approved''Pending''Rejected' |
## Microsoft.ApiManagement/service/products@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/products@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      approvalRequired = bool
      description = "string"
      displayName = "string"
      state = "string"
      subscriptionRequired = bool
      subscriptionsLimit = int
      terms = "string"
    }
  })
}

```

### service/products

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics and hyphens.Start with letter and end with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:service |
| properties | Product entity contract properties. | ProductContractProperties |


### ProductContractProperties

| Name | Description | Value |
|-|-|-|
| approvalRequired | whether subscription approval is required. If false, new subscriptions will be approved automatically enabling developers to call the productâs APIs immediately after subscribing. If true, administrators must manually approve the subscription before the developer can any of the productâs APIs. Can be present only if subscriptionRequired property is present and has a value of false. | bool |
| description | Product description. May include HTML formatting tags. | string |
| displayName | Product name. | string (required) |
| state | whether product is published or not. Published products are discoverable by users of developer portal. Non published products are visible only to administrators. Default state of Product is notPublished. | 'notPublished''published' |
| subscriptionRequired | Whether a product subscription is required for accessing APIs included in this product. If true, the product is referred to as "protected" and a valid subscription key is required for a request to an API included in the product to succeed. If false, the product is referred to as "open" and requests to an API included in the product can be made without a subscription key. If property is omitted when creating a new product it's value is assumed to be true. | bool |
| subscriptionsLimit | Whether the number of subscriptions a user can have to this product at the same time. Set to null or omit to allow unlimited per user subscriptions. Can be present only if subscriptionRequired property is present and has a value of false. | int |
| terms | Product terms of use. Developers trying to subscribe to the product will be presented and required to accept these terms before they can complete the subscription process. | string |
## Microsoft.ApiManagement/service/products/apiLinks@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/products/apiLinks@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      apiId = "string"
    }
  })
}

```

### service/products/apiLinks

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:products |
| properties | Product-API link entity contract properties. | ProductApiLinkContractProperties |


### ProductApiLinkContractProperties

| Name | Description | Value |
|-|-|-|
| apiId | Full resource Id of an API. | string (required) |
## Microsoft.ApiManagement/service/products/apis@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/products/apis@2023-05-01-preview"
  name = "string"
  parent_id = "string"
}

```

### service/products/apis

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics and hyphens.Start with letter and end with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:products |
## Microsoft.ApiManagement/service/products/groupLinks@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/products/groupLinks@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      groupId = "string"
    }
  })
}

```

### service/products/groupLinks

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:products |
| properties | Product-group link entity contract properties. | ProductGroupLinkContractProperties |


### ProductGroupLinkContractProperties

| Name | Description | Value |
|-|-|-|
| groupId | Full resource Id of a group. | string (required) |
## Microsoft.ApiManagement/service/products/groups@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/products/groups@2023-05-01-preview"
  name = "string"
  parent_id = "string"
}

```

### service/products/groups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics and hyphens.Start with letter and end with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:products |
## Microsoft.ApiManagement/service/products/policies@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/products/policies@2023-05-01-preview"
  name = "policy"
  parent_id = "string"
  body = jsonencode({
    properties = {
      format = "string"
      value = "string"
    }
  })
}

```

### service/products/policies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'policy' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:products |
| properties | Properties of the Policy. | PolicyContractProperties |


### PolicyContractProperties

| Name | Description | Value |
|-|-|-|
| format | Format of the policyContent. | 'rawxml''rawxml-link''xml''xml-link' |
| value | Contents of the Policy as defined by the format. | string (required) |
## Microsoft.ApiManagement/service/products/tags@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/products/tags@2023-05-01-preview"
  name = "string"
  parent_id = "string"
}

```

### service/products/tags

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics and hyphens.Start with letter and end with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:products |
## Microsoft.ApiManagement/service/products/wikis@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/products/wikis@2023-05-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      documents = [
        {
          documentationId = "string"
        }
      ]
    }
  })
}

```

### service/products/wikis

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:products |
| properties | Wiki details. | WikiContractProperties |


### WikiContractProperties

| Name | Description | Value |
|-|-|-|
| documents | Collection wiki documents included into this wiki. | WikiDocumentationContract[] |


### WikiDocumentationContract

| Name | Description | Value |
|-|-|-|
| documentationId | Documentation Identifier | string |
## Microsoft.ApiManagement/service/schemas@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/schemas@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      schemaType = "string"
    }
  })
}

```

### service/schemas

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:service |
| properties | Properties of the Global Schema. | GlobalSchemaContractProperties |


### GlobalSchemaContractProperties

| Name | Description | Value |
|-|-|-|
| description | Free-form schema entity description. | string |
| document | Global Schema document object for json-based schema formats(e.g. json schema). | For Bicep, you can use theany()function. |
| schemaType | Schema Type. Immutable. | 'json''xml' (required) |
| value | Json-encoded string for non json-based schema. | For Bicep, you can use theany()function. |
## Microsoft.ApiManagement/service/subscriptions@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/subscriptions@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      allowTracing = bool
      displayName = "string"
      ownerId = "string"
      primaryKey = "string"
      scope = "string"
      secondaryKey = "string"
      state = "string"
    }
  })
}

```

### service/subscriptions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics and hyphens.Start with letter and end with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:service |
| properties | Subscription contract properties. | SubscriptionCreateParameterPropertiesOrSubscriptionC... |


### SubscriptionCreateParameterPropertiesOrSubscriptionC...

| Name | Description | Value |
|-|-|-|
| allowTracing | Determines whether tracing can be enabled | bool |
| displayName | Subscription name. | string (required) |
| ownerId | User (user id path) for whom subscription is being created in form /users/{userId} | string |
| primaryKey | Primary subscription key. If not specified during request key will be generated automatically. | string |
| scope | Scope like /products/{productId} or /apis or /apis/{apiId}. | string (required) |
| secondaryKey | Secondary subscription key. If not specified during request key will be generated automatically. | string |
| state | Initial subscription state. If no value is specified, subscription is created with Submitted state. Possible states are * active â the subscription is active, * suspended â the subscription is blocked, and the subscriber cannot call any APIs of the product, * submitted â the subscription request has been made by the developer, but has not yet been approved or rejected, * rejected â the subscription request has been denied by an administrator, * cancelled â the subscription has been cancelled by the developer or administrator, * expired â the subscription reached its expiration date and was deactivated. | 'active''cancelled''expired''rejected''submitted''suspended' |
## Microsoft.ApiManagement/service/tags@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/tags@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      displayName = "string"
    }
  })
}

```

### service/tags

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics and hyphens.Start with letter and end with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:service |
| properties | Properties supplied to Create Tag operation. | TagContractProperties |


### TagContractProperties

| Name | Description | Value |
|-|-|-|
| displayName | Tag name. | string (required) |
## Microsoft.ApiManagement/service/tags/apiLinks@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/tags/apiLinks@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      apiId = "string"
    }
  })
}

```

### service/tags/apiLinks

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:tags |
| properties | Tag-API link entity contract properties. | TagApiLinkContractProperties |


### TagApiLinkContractProperties

| Name | Description | Value |
|-|-|-|
| apiId | Full resource Id of an API. | string (required) |
## Microsoft.ApiManagement/service/tags/operationLinks@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/tags/operationLinks@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      operationId = "string"
    }
  })
}

```

### service/tags/operationLinks

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:tags |
| properties | Tag-API link entity contract properties. | TagOperationLinkContractProperties |


### TagOperationLinkContractProperties

| Name | Description | Value |
|-|-|-|
| operationId | Full resource Id of an API operation. | string (required) |
## Microsoft.ApiManagement/service/tags/productLinks@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/tags/productLinks@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      productId = "string"
    }
  })
}

```

### service/tags/productLinks

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:tags |
| properties | Tag-API link entity contract properties. | TagProductLinkContractProperties |


### TagProductLinkContractProperties

| Name | Description | Value |
|-|-|-|
| productId | Full resource Id of a product. | string (required) |
## Microsoft.ApiManagement/service/templates@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/templates@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      body = "string"
      description = "string"
      parameters = [
        {
          description = "string"
          name = "string"
          title = "string"
        }
      ]
      subject = "string"
      title = "string"
    }
  })
}

```

### service/templates

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics and hyphens.Start with letter and end with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:service |
| properties | Email Template Update contract properties. | EmailTemplateUpdateParameterPropertiesOrEmailTemplat... |


### EmailTemplateUpdateParameterPropertiesOrEmailTemplat...

| Name | Description | Value |
|-|-|-|
| body | Email Template Body. This should be a valid XDocument | string |
| description | Description of the Email Template. | string |
| parameters | Email Template Parameter values. | EmailTemplateParametersContractProperties[] |
| subject | Subject of the Template. | string |
| title | Title of the Template. | string |


### EmailTemplateParametersContractProperties

| Name | Description | Value |
|-|-|-|
| description | Template parameter description. | string |
| name | Template parameter name. | string |
| title | Template parameter title. | string |
## Microsoft.ApiManagement/service/tenant@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/tenant@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      enabled = bool
      primaryKey = "string"
      principalId = "string"
      secondaryKey = "string"
    }
  })
}

```

### service/tenant

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:service |
| properties | Tenant access information update parameter properties. | AccessInformationCreateParameterPropertiesOrAccessIn... |


### AccessInformationCreateParameterPropertiesOrAccessIn...

| Name | Description | Value |
|-|-|-|
| enabled | Determines whether direct access is enabled. | bool |
| primaryKey | Primary access key. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value. | string |
| principalId | Principal (User) Identifier. | string |
| secondaryKey | Secondary access key. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value. | string |
## Microsoft.ApiManagement/service/users@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/users@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      appType = "string"
      confirmation = "string"
      email = "string"
      firstName = "string"
      identities = [
        {
          id = "string"
          provider = "string"
        }
      ]
      lastName = "string"
      note = "string"
      password = "string"
      state = "string"
    }
  })
}

```

### service/users

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics and hyphens.Start with letter and end with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:service |
| properties | User entity create contract properties. | UserCreateParameterPropertiesOrUserContractPropertie... |


### UserCreateParameterPropertiesOrUserContractPropertie...

| Name | Description | Value |
|-|-|-|
| appType | Determines the type of application which send the create user request. Default is legacy portal. | 'developerPortal''portal' |
| confirmation | Determines the type of confirmation e-mail that will be sent to the newly created user. | 'invite''signup' |
| email | Email address. Must not be empty and must be unique within the service instance. | string (required) |
| firstName | First name. | string (required) |
| identities | Collection of user identities. | UserIdentityContract[] |
| lastName | Last name. | string (required) |
| note | Optional note about a user set by the administrator. | string |
| password | User Password. If no value is provided, a default password is generated. | string |
| state | Account state. Specifies whether the user is active or not. Blocked users are unable to sign into the developer portal or call any APIs of subscribed products. Default state is Active. | 'active''blocked''deleted''pending' |


### UserIdentityContract

| Name | Description | Value |
|-|-|-|
| id | Identifier value within provider. | string |
| provider | Identity provider name. | string |
## Microsoft.ApiManagement/service/workspaces@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/workspaces@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      displayName = "string"
    }
  })
}

```

### service/workspaces

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:service |
| properties | Workspace entity contract properties. | WorkspaceContractProperties |


### WorkspaceContractProperties

| Name | Description | Value |
|-|-|-|
| description | Description of the workspace. | string |
| displayName | Name of the workspace. | string (required) |
## Microsoft.ApiManagement/service/workspaces/apis@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/workspaces/apis@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      apiRevision = "string"
      apiRevisionDescription = "string"
      apiType = "string"
      apiVersion = "string"
      apiVersionDescription = "string"
      apiVersionSet = {
        description = "string"
        id = "string"
        name = "string"
        versionHeaderName = "string"
        versioningScheme = "string"
        versionQueryName = "string"
      }
      apiVersionSetId = "string"
      authenticationSettings = {
        oAuth2 = {
          authorizationServerId = "string"
          scope = "string"
        }
        oAuth2AuthenticationSettings = [
          {
            authorizationServerId = "string"
            scope = "string"
          }
        ]
        openid = {
          bearerTokenSendingMethods = [
            "string"
          ]
          openidProviderId = "string"
        }
        openidAuthenticationSettings = [
          {
            bearerTokenSendingMethods = [
              "string"
            ]
            openidProviderId = "string"
          }
        ]
      }
      contact = {
        email = "string"
        name = "string"
        url = "string"
      }
      description = "string"
      displayName = "string"
      format = "string"
      isCurrent = bool
      license = {
        name = "string"
        url = "string"
      }
      path = "string"
      protocols = [
        "string"
      ]
      serviceUrl = "string"
      sourceApiId = "string"
      subscriptionKeyParameterNames = {
        header = "string"
        query = "string"
      }
      subscriptionRequired = bool
      termsOfServiceUrl = "string"
      translateRequiredQueryParameters = "string"
      type = "string"
      value = "string"
      wsdlSelector = {
        wsdlEndpointName = "string"
        wsdlServiceName = "string"
      }
    }
  })
}

```

### service/workspaces/apis

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | API entity create of update properties. | ApiCreateOrUpdatePropertiesOrApiContractProperties |


### ApiCreateOrUpdatePropertiesOrApiContractProperties

| Name | Description | Value |
|-|-|-|
| apiRevision | Describes the revision of the API. If no value is provided, default revision 1 is created | string |
| apiRevisionDescription | Description of the API Revision. | string |
| apiType | Type of API to create.*httpcreates a REST API*soapcreates a SOAP pass-through API*websocketcreates websocket API*graphqlcreates GraphQL API.New types can be added in the future. | 'graphql''grpc''http''odata''soap''websocket' |
| apiVersion | Indicates the version identifier of the API if the API is versioned | string |
| apiVersionDescription | Description of the API Version. | string |
| apiVersionSet | Version set details | ApiVersionSetContractDetails |
| apiVersionSetId | A resource identifier for the related ApiVersionSet. | string |
| authenticationSettings | Collection of authentication settings included into this API. | AuthenticationSettingsContract |
| contact | Contact information for the API. | ApiContactInformation |
| description | Description of the API. May include HTML formatting tags. | string |
| displayName | API name. Must be 1 to 300 characters long. | string |
| format | Format of the Content in which the API is getting imported. New formats can be added in the future | 'graphql-link''grpc''grpc-link''odata''odata-link''openapi''openapi+json''openapi+json-link''openapi-link''swagger-json''swagger-link-json''wadl-link-json''wadl-xml''wsdl''wsdl-link' |
| isCurrent | Indicates if API revision is current api revision. | bool |
| license | License information for the API. | ApiLicenseInformation |
| path | Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance. It is appended to the API endpoint base URL specified during the service instance creation to form a public URL for this API. | string (required) |
| protocols | Describes on which protocols the operations in this API can be invoked. | String array containing any of:'http''https''ws''wss' |
| serviceUrl | Absolute URL of the backend service implementing this API. Cannot be more than 2000 characters long. | string |
| sourceApiId | API identifier of the source API. | string |
| subscriptionKeyParameterNames | Protocols over which API is made available. | SubscriptionKeyParameterNamesContract |
| subscriptionRequired | Specifies whether an API or Product subscription is required for accessing the API. | bool |
| termsOfServiceUrl | A URL to the Terms of Service for the API. MUST be in the format of a URL. | string |
| translateRequiredQueryParameters | Strategy of translating required query parameters to template ones. By default has value 'template'. Possible values: 'template', 'query' | 'query''template' |
| type | Type of API. | 'graphql''grpc''http''odata''soap''websocket' |
| value | Content value when Importing an API. | string |
| wsdlSelector | Criteria to limit import of WSDL to a subset of the document. | ApiCreateOrUpdatePropertiesWsdlSelector |


### ApiVersionSetContractDetails

| Name | Description | Value |
|-|-|-|
| description | Description of API Version Set. | string |
| id | Identifier for existing API Version Set. Omit this value to create a new Version Set. | string |
| name | The display Name of the API Version Set. | string |
| versionHeaderName | Name of HTTP header parameter that indicates the API Version if versioningScheme is set toheader. | string |
| versioningScheme | An value that determines where the API Version identifier will be located in a HTTP request. | 'Header''Query''Segment' |
| versionQueryName | Name of query parameter that indicates the API Version if versioningScheme is set toquery. | string |


### AuthenticationSettingsContract

| Name | Description | Value |
|-|-|-|
| oAuth2 | OAuth2 Authentication settings | OAuth2AuthenticationSettingsContract |
| oAuth2AuthenticationSettings | Collection of OAuth2 authentication settings included into this API. | OAuth2AuthenticationSettingsContract[] |
| openid | OpenID Connect Authentication Settings | OpenIdAuthenticationSettingsContract |
| openidAuthenticationSettings | Collection of Open ID Connect authentication settings included into this API. | OpenIdAuthenticationSettingsContract[] |


### OAuth2AuthenticationSettingsContract

| Name | Description | Value |
|-|-|-|
| authorizationServerId | OAuth authorization server identifier. | string |
| scope | operations scope. | string |


### OpenIdAuthenticationSettingsContract

| Name | Description | Value |
|-|-|-|
| bearerTokenSendingMethods | How to send token to the server. | String array containing any of:'authorizationHeader''query' |
| openidProviderId | OAuth authorization server identifier. | string |


### ApiContactInformation

| Name | Description | Value |
|-|-|-|
| email | The email address of the contact person/organization. MUST be in the format of an email address | string |
| name | The identifying name of the contact person/organization | string |
| url | The URL pointing to the contact information. MUST be in the format of a URL | string |


### ApiLicenseInformation

| Name | Description | Value |
|-|-|-|
| name | The license name used for the API | string |
| url | A URL to the license used for the API. MUST be in the format of a URL | string |


### SubscriptionKeyParameterNamesContract

| Name | Description | Value |
|-|-|-|
| header | Subscription key header name. | string |
| query | Subscription key query string parameter name. | string |


### ApiCreateOrUpdatePropertiesWsdlSelector

| Name | Description | Value |
|-|-|-|
| wsdlEndpointName | Name of endpoint(port) to import from WSDL | string |
| wsdlServiceName | Name of service to import from WSDL | string |
## Microsoft.ApiManagement/service/workspaces/apis/operations@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/workspaces/apis/operations@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      displayName = "string"
      method = "string"
      policies = "string"
      request = {
        description = "string"
        headers = [
          {
            defaultValue = "string"
            description = "string"
            examples = {
              {customized property} = {
                description = "string"
                externalValue = "string"
                summary = "string"
              }
              {customized property} = {
                description = "string"
                externalValue = "string"
                summary = "string"
              }
            }
            name = "string"
            required = bool
            schemaId = "string"
            type = "string"
            typeName = "string"
            values = [
              "string"
            ]
          }
        ]
        queryParameters = [
          {
            defaultValue = "string"
            description = "string"
            examples = {
              {customized property} = {
                description = "string"
                externalValue = "string"
                summary = "string"
              }
              {customized property} = {
                description = "string"
                externalValue = "string"
                summary = "string"
              }
            }
            name = "string"
            required = bool
            schemaId = "string"
            type = "string"
            typeName = "string"
            values = [
              "string"
            ]
          }
        ]
        representations = [
          {
            contentType = "string"
            examples = {
              {customized property} = {
                description = "string"
                externalValue = "string"
                summary = "string"
              }
              {customized property} = {
                description = "string"
                externalValue = "string"
                summary = "string"
              }
            }
            formParameters = [
              {
                defaultValue = "string"
                description = "string"
                examples = {
                  {customized property} = {
                    description = "string"
                    externalValue = "string"
                    summary = "string"
                  }
                  {customized property} = {
                    description = "string"
                    externalValue = "string"
                    summary = "string"
                  }
                }
                name = "string"
                required = bool
                schemaId = "string"
                type = "string"
                typeName = "string"
                values = [
                  "string"
                ]
              }
            ]
            schemaId = "string"
            typeName = "string"
          }
        ]
      }
      responses = [
        {
          description = "string"
          headers = [
            {
              defaultValue = "string"
              description = "string"
              examples = {
                {customized property} = {
                  description = "string"
                  externalValue = "string"
                  summary = "string"
                }
                {customized property} = {
                  description = "string"
                  externalValue = "string"
                  summary = "string"
                }
              }
              name = "string"
              required = bool
              schemaId = "string"
              type = "string"
              typeName = "string"
              values = [
                "string"
              ]
            }
          ]
          representations = [
            {
              contentType = "string"
              examples = {
                {customized property} = {
                  description = "string"
                  externalValue = "string"
                  summary = "string"
                }
                {customized property} = {
                  description = "string"
                  externalValue = "string"
                  summary = "string"
                }
              }
              formParameters = [
                {
                  defaultValue = "string"
                  description = "string"
                  examples = {
                    {customized property} = {
                      description = "string"
                      externalValue = "string"
                      summary = "string"
                    }
                    {customized property} = {
                      description = "string"
                      externalValue = "string"
                      summary = "string"
                    }
                  }
                  name = "string"
                  required = bool
                  schemaId = "string"
                  type = "string"
                  typeName = "string"
                  values = [
                    "string"
                  ]
                }
              ]
              schemaId = "string"
              typeName = "string"
            }
          ]
          statusCode = int
        }
      ]
      templateParameters = [
        {
          defaultValue = "string"
          description = "string"
          examples = {
            {customized property} = {
              description = "string"
              externalValue = "string"
              summary = "string"
            }
            {customized property} = {
              description = "string"
              externalValue = "string"
              summary = "string"
            }
          }
          name = "string"
          required = bool
          schemaId = "string"
          type = "string"
          typeName = "string"
          values = [
            "string"
          ]
        }
      ]
      urlTemplate = "string"
    }
  })
}

```

### service/workspaces/apis/operations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:apis |
| properties | Properties of the Operation Contract. | OperationContractProperties |


### OperationContractProperties

| Name | Description | Value |
|-|-|-|
| description | Description of the operation. May include HTML formatting tags. | string |
| displayName | Operation Name. | string (required) |
| method | A Valid HTTP Operation Method. Typical Http Methods like GET, PUT, POST but not limited by only them. | string (required) |
| policies | Operation Policies | string |
| request | An entity containing request details. | RequestContract |
| responses | Array of Operation responses. | ResponseContract[] |
| templateParameters | Collection of URL template parameters. | ParameterContract[] |
| urlTemplate | Relative URL template identifying the target resource for this operation. May include parameters. Example: /customers/{cid}/orders/{oid}/?date={date} | string (required) |


### RequestContract

| Name | Description | Value |
|-|-|-|
| description | Operation request description. | string |
| headers | Collection of operation request headers. | ParameterContract[] |
| queryParameters | Collection of operation request query parameters. | ParameterContract[] |
| representations | Collection of operation request representations. | RepresentationContract[] |


### ParameterContract

| Name | Description | Value |
|-|-|-|
| defaultValue | Default parameter value. | string |
| description | Parameter description. | string |
| examples | Exampled defined for the parameter. | ParameterExamplesContract |
| name | Parameter name. | string (required) |
| required | Specifies whether parameter is required or not. | bool |
| schemaId | Schema identifier. | string |
| type | Parameter type. | string (required) |
| typeName | Type name defined by the schema. | string |
| values | Parameter values. | string[] |


### ParameterExamplesContract

| Name | Description | Value |
|-|-|-|
| {customized property} |  | ParameterExampleContract |
| {customized property} |  | ParameterExampleContract |


### ParameterExampleContract

| Name | Description | Value |
|-|-|-|
| description | Long description for the example | string |
| externalValue | A URL that points to the literal example | string |
| summary | Short description for the example | string |
| value | Example value. May be a primitive value, or an object. | For Bicep, you can use theany()function. |


### RepresentationContract

| Name | Description | Value |
|-|-|-|
| contentType | Specifies a registered or custom content type for this representation, e.g. application/xml. | string (required) |
| examples | Exampled defined for the representation. | ParameterExamplesContract |
| formParameters | Collection of form parameters. Required if 'contentType' value is either 'application/x-www-form-urlencoded' or 'multipart/form-data'.. | ParameterContract[] |
| schemaId | Schema identifier. Applicable only if 'contentType' value is neither 'application/x-www-form-urlencoded' nor 'multipart/form-data'. | string |
| typeName | Type name defined by the schema. Applicable only if 'contentType' value is neither 'application/x-www-form-urlencoded' nor 'multipart/form-data'. | string |


### ResponseContract

| Name | Description | Value |
|-|-|-|
| description | Operation response description. | string |
| headers | Collection of operation response headers. | ParameterContract[] |
| representations | Collection of operation response representations. | RepresentationContract[] |
| statusCode | Operation response HTTP status code. | int (required) |
## Microsoft.ApiManagement/service/workspaces/apis/operations/policies@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/workspaces/apis/operations/policies@2023-05-01-preview"
  name = "policy"
  parent_id = "string"
  body = jsonencode({
    properties = {
      format = "string"
      value = "string"
    }
  })
}

```

### service/workspaces/apis/operations/policies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'policy' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:operations |
| properties | Properties of the Policy. | PolicyContractProperties |


### PolicyContractProperties

| Name | Description | Value |
|-|-|-|
| format | Format of the policyContent. | 'rawxml''rawxml-link''xml''xml-link' |
| value | Contents of the Policy as defined by the format. | string (required) |
## Microsoft.ApiManagement/service/workspaces/apis/policies@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/workspaces/apis/policies@2023-05-01-preview"
  name = "policy"
  parent_id = "string"
  body = jsonencode({
    properties = {
      format = "string"
      value = "string"
    }
  })
}

```

### service/workspaces/apis/policies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'policy' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:apis |
| properties | Properties of the Policy. | PolicyContractProperties |


### PolicyContractProperties

| Name | Description | Value |
|-|-|-|
| format | Format of the policyContent. | 'rawxml''rawxml-link''xml''xml-link' |
| value | Contents of the Policy as defined by the format. | string (required) |
## Microsoft.ApiManagement/service/workspaces/apis/releases@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/workspaces/apis/releases@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      apiId = "string"
      notes = "string"
    }
  })
}

```

### service/workspaces/apis/releases

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:apis |
| properties | ApiRelease entity contract properties. | ApiReleaseContractProperties |


### ApiReleaseContractProperties

| Name | Description | Value |
|-|-|-|
| apiId | Identifier of the API the release belongs to. | string |
| notes | Release Notes | string |
## Microsoft.ApiManagement/service/workspaces/apis/schemas@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/workspaces/apis/schemas@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      contentType = "string"
      document = {
        value = "string"
      }
    }
  })
}

```

### service/workspaces/apis/schemas

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:apis |
| properties | Properties of the API Schema. | SchemaContractProperties |


### SchemaContractProperties

| Name | Description | Value |
|-|-|-|
| contentType | Must be a valid a media type used in a Content-Type header as defined in the RFC 2616. Media type of the schema document (e.g. application/json, application/xml).-SwaggerSchema useapplication/vnd.ms-azure-apim.swagger.definitions+json-WSDLSchema useapplication/vnd.ms-azure-apim.xsd+xml-OpenApiSchema useapplication/vnd.oai.openapi.components+json-WADL Schemauseapplication/vnd.ms-azure-apim.wadl.grammars+xml-OData Schemauseapplication/vnd.ms-azure-apim.odata.schema-gRPC Schemausetext/protobuf. | string (required) |
| document | Create or update Properties of the API Schema Document. | SchemaDocumentProperties(required) |


### SchemaDocumentProperties

| Name | Description | Value |
|-|-|-|
| components | Types definitions. Used for Swagger/OpenAPI v2/v3 schemas only, null otherwise. | For Bicep, you can use theany()function. |
| definitions | Types definitions. Used for Swagger/OpenAPI v1 schemas only, null otherwise. | For Bicep, you can use theany()function. |
| value | Json escaped string defining the document representing the Schema. Used for schemas other than Swagger/OpenAPI. | string |
## Microsoft.ApiManagement/service/workspaces/apiVersionSets@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/workspaces/apiVersionSets@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      displayName = "string"
      versionHeaderName = "string"
      versioningScheme = "string"
      versionQueryName = "string"
    }
  })
}

```

### service/workspaces/apiVersionSets

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | API VersionSet contract properties. | ApiVersionSetContractProperties |


### ApiVersionSetContractProperties

| Name | Description | Value |
|-|-|-|
| description | Description of API Version Set. | string |
| displayName | Name of API Version Set | string (required) |
| versionHeaderName | Name of HTTP header parameter that indicates the API Version if versioningScheme is set toheader. | string |
| versioningScheme | An value that determines where the API Version identifier will be located in a HTTP request. | 'Header''Query''Segment' (required) |
| versionQueryName | Name of query parameter that indicates the API Version if versioningScheme is set toquery. | string |
## Microsoft.ApiManagement/service/workspaces/groups@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/workspaces/groups@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      displayName = "string"
      externalId = "string"
      type = "string"
    }
  })
}

```

### service/workspaces/groups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | Properties supplied to Create Group operation. | GroupCreateParametersPropertiesOrGroupContractProper... |


### GroupCreateParametersPropertiesOrGroupContractProper...

| Name | Description | Value |
|-|-|-|
| description | Group description. | string |
| displayName | Group name. | string (required) |
| externalId | Identifier of the external groups, this property contains the id of the group from the external identity provider, e.g. for Azure Active Directoryaad://{tenant}.onmicrosoft.com/groups/{group object id}; otherwise the value is null. | string |
| type | Group type. | 'custom''external''system' |
## Microsoft.ApiManagement/service/workspaces/groups/users@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/workspaces/groups/users@2023-05-01-preview"
  name = "string"
  parent_id = "string"
}

```

### service/workspaces/groups/users

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:groups |
## Microsoft.ApiManagement/service/workspaces/namedValues@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/workspaces/namedValues@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      displayName = "string"
      keyVault = {
        identityClientId = "string"
        secretIdentifier = "string"
      }
      secret = bool
      tags = [
        "string"
      ]
      value = "string"
    }
  })
}

```

### service/workspaces/namedValues

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | NamedValue entity contract properties for PUT operation. | NamedValueCreateContractPropertiesOrNamedValueContra... |


### NamedValueCreateContractPropertiesOrNamedValueContra...

| Name | Description | Value |
|-|-|-|
| displayName | Unique name of NamedValue. It may contain only letters, digits, period, dash, and underscore characters. | string (required) |
| keyVault | KeyVault location details of the namedValue. | KeyVaultContractCreatePropertiesOrKeyVaultContractPr... |
| secret | Determines whether the value is a secret and should be encrypted or not. Default value is false. | bool |
| tags | Optional tags that when provided can be used to filter the NamedValue list. | string[] |
| value | Value of the NamedValue. Can contain policy expressions. It may not be empty or consist only of whitespace. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value. | string |


### KeyVaultContractCreatePropertiesOrKeyVaultContractPr...

| Name | Description | Value |
|-|-|-|
| identityClientId | Null for SystemAssignedIdentity or Client Id for UserAssignedIdentity , which will be used to access key vault secret. | string |
| secretIdentifier | Key vault secret identifier for fetching secret. Providing a versioned secret will prevent auto-refresh. This requires API Management service to be configured with aka.ms/apimmsi | string |
## Microsoft.ApiManagement/service/workspaces/notifications@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/workspaces/notifications@2023-05-01-preview"
  name = "string"
  parent_id = "string"
}

```

### service/workspaces/notifications

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
## Microsoft.ApiManagement/service/workspaces/notifications/recipientEmails@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/workspaces/notifications/recipientEmails@2023-05-01-preview"
  name = "string"
  parent_id = "string"
}

```

### service/workspaces/notifications/recipientEmails

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:notifications |
## Microsoft.ApiManagement/service/workspaces/notifications/recipientUsers@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/workspaces/notifications/recipientUsers@2023-05-01-preview"
  name = "string"
  parent_id = "string"
}

```

### service/workspaces/notifications/recipientUsers

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:notifications |
## Microsoft.ApiManagement/service/workspaces/policies@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/workspaces/policies@2023-05-01-preview"
  name = "policy"
  parent_id = "string"
  body = jsonencode({
    properties = {
      format = "string"
      value = "string"
    }
  })
}

```

### service/workspaces/policies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'policy' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | Properties of the Policy. | PolicyContractProperties |


### PolicyContractProperties

| Name | Description | Value |
|-|-|-|
| format | Format of the policyContent. | 'rawxml''rawxml-link''xml''xml-link' |
| value | Contents of the Policy as defined by the format. | string (required) |
## Microsoft.ApiManagement/service/workspaces/policyFragments@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/workspaces/policyFragments@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      format = "string"
      value = "string"
    }
  })
}

```

### service/workspaces/policyFragments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | Properties of the Policy Fragment. | PolicyFragmentContractProperties |


### PolicyFragmentContractProperties

| Name | Description | Value |
|-|-|-|
| description | Policy fragment description. | string |
| format | Format of the policy fragment content. | 'rawxml''xml' |
| value | Contents of the policy fragment. | string (required) |
## Microsoft.ApiManagement/service/workspaces/products@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/workspaces/products@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      approvalRequired = bool
      description = "string"
      displayName = "string"
      state = "string"
      subscriptionRequired = bool
      subscriptionsLimit = int
      terms = "string"
    }
  })
}

```

### service/workspaces/products

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | Product entity contract properties. | ProductContractProperties |


### ProductContractProperties

| Name | Description | Value |
|-|-|-|
| approvalRequired | whether subscription approval is required. If false, new subscriptions will be approved automatically enabling developers to call the productâs APIs immediately after subscribing. If true, administrators must manually approve the subscription before the developer can any of the productâs APIs. Can be present only if subscriptionRequired property is present and has a value of false. | bool |
| description | Product description. May include HTML formatting tags. | string |
| displayName | Product name. | string (required) |
| state | whether product is published or not. Published products are discoverable by users of developer portal. Non published products are visible only to administrators. Default state of Product is notPublished. | 'notPublished''published' |
| subscriptionRequired | Whether a product subscription is required for accessing APIs included in this product. If true, the product is referred to as "protected" and a valid subscription key is required for a request to an API included in the product to succeed. If false, the product is referred to as "open" and requests to an API included in the product can be made without a subscription key. If property is omitted when creating a new product it's value is assumed to be true. | bool |
| subscriptionsLimit | Whether the number of subscriptions a user can have to this product at the same time. Set to null or omit to allow unlimited per user subscriptions. Can be present only if subscriptionRequired property is present and has a value of false. | int |
| terms | Product terms of use. Developers trying to subscribe to the product will be presented and required to accept these terms before they can complete the subscription process. | string |
## Microsoft.ApiManagement/service/workspaces/products/apiLinks@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/workspaces/products/apiLinks@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      apiId = "string"
    }
  })
}

```

### service/workspaces/products/apiLinks

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:products |
| properties | Product-API link entity contract properties. | ProductApiLinkContractProperties |


### ProductApiLinkContractProperties

| Name | Description | Value |
|-|-|-|
| apiId | Full resource Id of an API. | string (required) |
## Microsoft.ApiManagement/service/workspaces/products/groupLinks@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/workspaces/products/groupLinks@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      groupId = "string"
    }
  })
}

```

### service/workspaces/products/groupLinks

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:products |
| properties | Product-group link entity contract properties. | ProductGroupLinkContractProperties |


### ProductGroupLinkContractProperties

| Name | Description | Value |
|-|-|-|
| groupId | Full resource Id of a group. | string (required) |
## Microsoft.ApiManagement/service/workspaces/products/policies@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/workspaces/products/policies@2023-05-01-preview"
  name = "policy"
  parent_id = "string"
  body = jsonencode({
    properties = {
      format = "string"
      value = "string"
    }
  })
}

```

### service/workspaces/products/policies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'policy' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:products |
| properties | Properties of the Policy. | PolicyContractProperties |


### PolicyContractProperties

| Name | Description | Value |
|-|-|-|
| format | Format of the policyContent. | 'rawxml''rawxml-link''xml''xml-link' |
| value | Contents of the Policy as defined by the format. | string (required) |
## Microsoft.ApiManagement/service/workspaces/schemas@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/workspaces/schemas@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      schemaType = "string"
    }
  })
}

```

### service/workspaces/schemas

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | Properties of the Global Schema. | GlobalSchemaContractProperties |


### GlobalSchemaContractProperties

| Name | Description | Value |
|-|-|-|
| description | Free-form schema entity description. | string |
| document | Global Schema document object for json-based schema formats(e.g. json schema). | For Bicep, you can use theany()function. |
| schemaType | Schema Type. Immutable. | 'json''xml' (required) |
| value | Json-encoded string for non json-based schema. | For Bicep, you can use theany()function. |
## Microsoft.ApiManagement/service/workspaces/subscriptions@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/workspaces/subscriptions@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      allowTracing = bool
      displayName = "string"
      ownerId = "string"
      primaryKey = "string"
      scope = "string"
      secondaryKey = "string"
      state = "string"
    }
  })
}

```

### service/workspaces/subscriptions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | Subscription contract properties. | SubscriptionCreateParameterPropertiesOrSubscriptionC... |


### SubscriptionCreateParameterPropertiesOrSubscriptionC...

| Name | Description | Value |
|-|-|-|
| allowTracing | Determines whether tracing can be enabled | bool |
| displayName | Subscription name. | string (required) |
| ownerId | User (user id path) for whom subscription is being created in form /users/{userId} | string |
| primaryKey | Primary subscription key. If not specified during request key will be generated automatically. | string |
| scope | Scope like /products/{productId} or /apis or /apis/{apiId}. | string (required) |
| secondaryKey | Secondary subscription key. If not specified during request key will be generated automatically. | string |
| state | Initial subscription state. If no value is specified, subscription is created with Submitted state. Possible states are * active â the subscription is active, * suspended â the subscription is blocked, and the subscriber cannot call any APIs of the product, * submitted â the subscription request has been made by the developer, but has not yet been approved or rejected, * rejected â the subscription request has been denied by an administrator, * cancelled â the subscription has been cancelled by the developer or administrator, * expired â the subscription reached its expiration date and was deactivated. | 'active''cancelled''expired''rejected''submitted''suspended' |
## Microsoft.ApiManagement/service/workspaces/tags@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/workspaces/tags@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      displayName = "string"
    }
  })
}

```

### service/workspaces/tags

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | Properties supplied to Create Tag operation. | TagContractProperties |


### TagContractProperties

| Name | Description | Value |
|-|-|-|
| displayName | Tag name. | string (required) |
## Microsoft.ApiManagement/service/workspaces/tags/apiLinks@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/workspaces/tags/apiLinks@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      apiId = "string"
    }
  })
}

```

### service/workspaces/tags/apiLinks

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:tags |
| properties | Tag-API link entity contract properties. | TagApiLinkContractProperties |


### TagApiLinkContractProperties

| Name | Description | Value |
|-|-|-|
| apiId | Full resource Id of an API. | string (required) |
## Microsoft.ApiManagement/service/workspaces/tags/operationLinks@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/workspaces/tags/operationLinks@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      operationId = "string"
    }
  })
}

```

### service/workspaces/tags/operationLinks

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:tags |
| properties | Tag-API link entity contract properties. | TagOperationLinkContractProperties |


### TagOperationLinkContractProperties

| Name | Description | Value |
|-|-|-|
| operationId | Full resource Id of an API operation. | string (required) |
## Microsoft.ApiManagement/service/workspaces/tags/productLinks@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/workspaces/tags/productLinks@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      productId = "string"
    }
  })
}

```

### service/workspaces/tags/productLinks

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:tags |
| properties | Tag-API link entity contract properties. | TagProductLinkContractProperties |


### TagProductLinkContractProperties

| Name | Description | Value |
|-|-|-|
| productId | Full resource Id of a product. | string (required) |
