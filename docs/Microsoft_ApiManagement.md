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

## Microsoft.ApiManagement/service/apis/operations/tags@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/apis/operations/tags@2023-05-01-preview"
  name = "string"
  parent_id = "string"
}

```

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

## Microsoft.ApiManagement/service/apis/tags@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/apis/tags@2023-05-01-preview"
  name = "string"
  parent_id = "string"
}

```

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

## Microsoft.ApiManagement/service/groups/users@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/groups/users@2023-05-01-preview"
  name = "string"
  parent_id = "string"
}

```

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

## Microsoft.ApiManagement/service/notifications@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/notifications@2023-05-01-preview"
  name = "string"
  parent_id = "string"
}

```

## Microsoft.ApiManagement/service/notifications/recipientEmails@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/notifications/recipientEmails@2023-05-01-preview"
  name = "string"
  parent_id = "string"
}

```

## Microsoft.ApiManagement/service/notifications/recipientUsers@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/notifications/recipientUsers@2023-05-01-preview"
  name = "string"
  parent_id = "string"
}

```

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

## Microsoft.ApiManagement/service/products/apis@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/products/apis@2023-05-01-preview"
  name = "string"
  parent_id = "string"
}

```

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

## Microsoft.ApiManagement/service/products/groups@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/products/groups@2023-05-01-preview"
  name = "string"
  parent_id = "string"
}

```

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

## Microsoft.ApiManagement/service/products/tags@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/products/tags@2023-05-01-preview"
  name = "string"
  parent_id = "string"
}

```

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

## Microsoft.ApiManagement/service/workspaces/groups/users@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/workspaces/groups/users@2023-05-01-preview"
  name = "string"
  parent_id = "string"
}

```

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

## Microsoft.ApiManagement/service/workspaces/notifications@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/workspaces/notifications@2023-05-01-preview"
  name = "string"
  parent_id = "string"
}

```

## Microsoft.ApiManagement/service/workspaces/notifications/recipientEmails@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/workspaces/notifications/recipientEmails@2023-05-01-preview"
  name = "string"
  parent_id = "string"
}

```

## Microsoft.ApiManagement/service/workspaces/notifications/recipientUsers@2023-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/workspaces/notifications/recipientUsers@2023-05-01-preview"
  name = "string"
  parent_id = "string"
}

```

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

