## Microsoft.EventGrid/domains@2023-12-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/domains@2023-12-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      autoCreateTopicWithFirstSubscription = bool
      autoDeleteTopicWithLastSubscription = bool
      dataResidencyBoundary = "string"
      disableLocalAuth = bool
      eventTypeInfo = {
        inlineEventTypes = {
          {customized property} = {
            dataSchemaUrl = "string"
            description = "string"
            displayName = "string"
            documentationUrl = "string"
          }
        }
        kind = "Inline"
      }
      inboundIpRules = [
        {
          action = "Allow"
          ipMask = "string"
        }
      ]
      inputSchema = "string"
      inputSchemaMapping = {
        inputSchemaMappingType = "string"
        // For remaining properties, see InputSchemaMapping objects
      }
      minimumTlsVersionAllowed = "string"
      publicNetworkAccess = "string"
    }
    sku = {
      name = "string"
    }
  })
}

```

## Microsoft.EventGrid/domains/eventSubscriptions@2023-12-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/domains/eventSubscriptions@2023-12-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      deadLetterDestination = {
        endpointType = "string"
        // For remaining properties, see DeadLetterDestination objects
      }
      deadLetterWithResourceIdentity = {
        deadLetterDestination = {
          endpointType = "string"
          // For remaining properties, see DeadLetterDestination objects
        }
        identity = {
          type = "string"
          userAssignedIdentity = "string"
        }
      }
      deliveryWithResourceIdentity = {
        destination = {
          endpointType = "string"
          // For remaining properties, see EventSubscriptionDestination objects
        }
        identity = {
          type = "string"
          userAssignedIdentity = "string"
        }
      }
      destination = {
        endpointType = "string"
        // For remaining properties, see EventSubscriptionDestination objects
      }
      eventDeliverySchema = "string"
      expirationTimeUtc = "string"
      filter = {
        advancedFilters = [
          {
            key = "string"
            operatorType = "string"
            // For remaining properties, see AdvancedFilter objects
          }
        ]
        enableAdvancedFilteringOnArrays = bool
        includedEventTypes = [
          "string"
        ]
        isSubjectCaseSensitive = bool
        subjectBeginsWith = "string"
        subjectEndsWith = "string"
      }
      labels = [
        "string"
      ]
      retryPolicy = {
        eventTimeToLiveInMinutes = int
        maxDeliveryAttempts = int
      }
    }
  })
}

```

## Microsoft.EventGrid/domains/privateEndpointConnections@2023-12-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/domains/privateEndpointConnections@2023-12-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      groupIds = [
        "string"
      ]
      privateEndpoint = {
        id = "string"
      }
      privateLinkServiceConnectionState = {
        actionsRequired = "string"
        description = "string"
        status = "string"
      }
      provisioningState = "string"
    }
  })
}

```

## Microsoft.EventGrid/domains/topics@2023-12-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/domains/topics@2023-12-15-preview"
  name = "string"
  parent_id = "string"
}

```

## Microsoft.EventGrid/domains/topics/eventSubscriptions@2023-12-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/domains/topics/eventSubscriptions@2023-12-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      deadLetterDestination = {
        endpointType = "string"
        // For remaining properties, see DeadLetterDestination objects
      }
      deadLetterWithResourceIdentity = {
        deadLetterDestination = {
          endpointType = "string"
          // For remaining properties, see DeadLetterDestination objects
        }
        identity = {
          type = "string"
          userAssignedIdentity = "string"
        }
      }
      deliveryWithResourceIdentity = {
        destination = {
          endpointType = "string"
          // For remaining properties, see EventSubscriptionDestination objects
        }
        identity = {
          type = "string"
          userAssignedIdentity = "string"
        }
      }
      destination = {
        endpointType = "string"
        // For remaining properties, see EventSubscriptionDestination objects
      }
      eventDeliverySchema = "string"
      expirationTimeUtc = "string"
      filter = {
        advancedFilters = [
          {
            key = "string"
            operatorType = "string"
            // For remaining properties, see AdvancedFilter objects
          }
        ]
        enableAdvancedFilteringOnArrays = bool
        includedEventTypes = [
          "string"
        ]
        isSubjectCaseSensitive = bool
        subjectBeginsWith = "string"
        subjectEndsWith = "string"
      }
      labels = [
        "string"
      ]
      retryPolicy = {
        eventTimeToLiveInMinutes = int
        maxDeliveryAttempts = int
      }
    }
  })
}

```

## Microsoft.EventGrid/eventSubscriptions@2023-12-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/eventSubscriptions@2023-12-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      deadLetterDestination = {
        endpointType = "string"
        // For remaining properties, see DeadLetterDestination objects
      }
      deadLetterWithResourceIdentity = {
        deadLetterDestination = {
          endpointType = "string"
          // For remaining properties, see DeadLetterDestination objects
        }
        identity = {
          type = "string"
          userAssignedIdentity = "string"
        }
      }
      deliveryWithResourceIdentity = {
        destination = {
          endpointType = "string"
          // For remaining properties, see EventSubscriptionDestination objects
        }
        identity = {
          type = "string"
          userAssignedIdentity = "string"
        }
      }
      destination = {
        endpointType = "string"
        // For remaining properties, see EventSubscriptionDestination objects
      }
      eventDeliverySchema = "string"
      expirationTimeUtc = "string"
      filter = {
        advancedFilters = [
          {
            key = "string"
            operatorType = "string"
            // For remaining properties, see AdvancedFilter objects
          }
        ]
        enableAdvancedFilteringOnArrays = bool
        includedEventTypes = [
          "string"
        ]
        isSubjectCaseSensitive = bool
        subjectBeginsWith = "string"
        subjectEndsWith = "string"
      }
      labels = [
        "string"
      ]
      retryPolicy = {
        eventTimeToLiveInMinutes = int
        maxDeliveryAttempts = int
      }
    }
  })
}

```

## Microsoft.EventGrid/namespaces@2023-12-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/namespaces@2023-12-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      inboundIpRules = [
        {
          action = "Allow"
          ipMask = "string"
        }
      ]
      isZoneRedundant = bool
      minimumTlsVersionAllowed = "string"
      privateEndpointConnections = [
        {
          properties = {
            groupIds = [
              "string"
            ]
            privateEndpoint = {
              id = "string"
            }
            privateLinkServiceConnectionState = {
              actionsRequired = "string"
              description = "string"
              status = "string"
            }
            provisioningState = "string"
          }
        }
      ]
      publicNetworkAccess = "string"
      topicsConfiguration = {}
      topicSpacesConfiguration = {
        clientAuthentication = {
          alternativeAuthenticationNameSources = [
            "string"
          ]
        }
        maximumClientSessionsPerAuthenticationName = int
        maximumSessionExpiryInHours = int
        routeTopicResourceId = "string"
        routingEnrichments = {
          dynamic = [
            {
              key = "string"
              value = "string"
            }
          ]
          static = [
            {
              key = "string"
              valueType = "string"
              // For remaining properties, see StaticRoutingEnrichment objects
            }
          ]
        }
        routingIdentityInfo = {
          type = "string"
          userAssignedIdentity = "string"
        }
        state = "string"
      }
    }
    sku = {
      capacity = int
      name = "Standard"
    }
  })
}

```

## Microsoft.EventGrid/namespaces/caCertificates@2023-12-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/namespaces/caCertificates@2023-12-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      encodedCertificate = "string"
    }
  })
}

```

## Microsoft.EventGrid/namespaces/clientGroups@2023-12-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/namespaces/clientGroups@2023-12-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      query = "string"
    }
  })
}

```

## Microsoft.EventGrid/namespaces/clients@2023-12-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/namespaces/clients@2023-12-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      attributes = {}
      authenticationName = "string"
      clientCertificateAuthentication = {
        allowedThumbprints = [
          "string"
        ]
        validationScheme = "string"
      }
      description = "string"
      state = "string"
    }
  })
}

```

## Microsoft.EventGrid/namespaces/permissionBindings@2023-12-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/namespaces/permissionBindings@2023-12-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      clientGroupName = "string"
      description = "string"
      permission = "string"
      topicSpaceName = "string"
    }
  })
}

```

## Microsoft.EventGrid/namespaces/privateEndpointConnections@2023-12-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/namespaces/privateEndpointConnections@2023-12-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      groupIds = [
        "string"
      ]
      privateEndpoint = {
        id = "string"
      }
      privateLinkServiceConnectionState = {
        actionsRequired = "string"
        description = "string"
        status = "string"
      }
      provisioningState = "string"
    }
  })
}

```

## Microsoft.EventGrid/namespaces/topics@2023-12-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/namespaces/topics@2023-12-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      eventRetentionInDays = int
      inputSchema = "CloudEventSchemaV1_0"
      publisherType = "Custom"
    }
  })
}

```

## Microsoft.EventGrid/namespaces/topics/eventSubscriptions@2023-12-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/namespaces/topics/eventSubscriptions@2023-12-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      deliveryConfiguration = {
        deliveryMode = "string"
        push = {
          deadLetterDestinationWithResourceIdentity = {
            deadLetterDestination = {
              endpointType = "string"
              // For remaining properties, see DeadLetterDestination objects
            }
            identity = {
              type = "string"
              userAssignedIdentity = "string"
            }
          }
          deliveryWithResourceIdentity = {
            destination = {
              endpointType = "string"
              // For remaining properties, see EventSubscriptionDestination objects
            }
            identity = {
              type = "string"
              userAssignedIdentity = "string"
            }
          }
          eventTimeToLive = "string"
          maxDeliveryCount = int
        }
        queue = {
          deadLetterDestinationWithResourceIdentity = {
            deadLetterDestination = {
              endpointType = "string"
              // For remaining properties, see DeadLetterDestination objects
            }
            identity = {
              type = "string"
              userAssignedIdentity = "string"
            }
          }
          eventTimeToLive = "string"
          maxDeliveryCount = int
          receiveLockDurationInSeconds = int
        }
      }
      eventDeliverySchema = "CloudEventSchemaV1_0"
      filtersConfiguration = {
        filters = [
          {
            key = "string"
            operatorType = "string"
            // For remaining properties, see Filter objects
          }
        ]
        includedEventTypes = [
          "string"
        ]
      }
    }
  })
}

```

## Microsoft.EventGrid/namespaces/topicSpaces@2023-12-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/namespaces/topicSpaces@2023-12-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      topicTemplates = [
        "string"
      ]
    }
  })
}

```

## Microsoft.EventGrid/partnerConfigurations@2023-12-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/partnerConfigurations@2023-12-15-preview"
  name = "default"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
  body = jsonencode({
    properties = {
      partnerAuthorization = {
        authorizedPartnersList = [
          {
            authorizationExpirationTimeInUtc = "string"
            partnerName = "string"
            partnerRegistrationImmutableId = "string"
          }
        ]
        defaultMaximumExpirationTimeInDays = int
      }
      provisioningState = "string"
    }
  })
}

```

## Microsoft.EventGrid/partnerDestinations@2023-12-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/partnerDestinations@2023-12-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      activationState = "string"
      endpointBaseUrl = "string"
      endpointServiceContext = "string"
      expirationTimeIfNotActivatedUtc = "string"
      messageForActivation = "string"
      partnerRegistrationImmutableId = "string"
    }
  })
}

```

## Microsoft.EventGrid/partnerNamespaces@2023-12-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/partnerNamespaces@2023-12-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      disableLocalAuth = bool
      inboundIpRules = [
        {
          action = "Allow"
          ipMask = "string"
        }
      ]
      minimumTlsVersionAllowed = "string"
      partnerRegistrationFullyQualifiedId = "string"
      partnerTopicRoutingMode = "string"
      publicNetworkAccess = "string"
    }
  })
}

```

## Microsoft.EventGrid/partnerNamespaces/channels@2023-12-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/partnerNamespaces/channels@2023-12-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      channelType = "string"
      expirationTimeIfNotActivatedUtc = "string"
      messageForActivation = "string"
      partnerDestinationInfo = {
        azureSubscriptionId = "string"
        endpointServiceContext = "string"
        name = "string"
        resourceGroupName = "string"
        resourceMoveChangeHistory = [
          {
            azureSubscriptionId = "string"
            changedTimeUtc = "string"
            resourceGroupName = "string"
          }
        ]
        endpointType = "string"
        // For remaining properties, see PartnerDestinationInfo objects
      }
      partnerTopicInfo = {
        azureSubscriptionId = "string"
        eventTypeInfo = {
          inlineEventTypes = {
            {customized property} = {
              dataSchemaUrl = "string"
              description = "string"
              displayName = "string"
              documentationUrl = "string"
            }
          }
          kind = "Inline"
        }
        name = "string"
        resourceGroupName = "string"
        source = "string"
      }
      provisioningState = "string"
      readinessState = "string"
    }
  })
}

```

## Microsoft.EventGrid/partnerNamespaces/eventChannels@2021-10-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/partnerNamespaces/eventChannels@2021-10-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      destination = {
        azureSubscriptionId = "string"
        partnerTopicName = "string"
        resourceGroup = "string"
      }
      expirationTimeIfNotActivatedUtc = "string"
      filter = {
        advancedFilters = [
          {
            key = "string"
            operatorType = "string"
            // For remaining properties, see AdvancedFilter objects
          }
        ]
        enableAdvancedFilteringOnArrays = bool
      }
      partnerTopicFriendlyDescription = "string"
      source = {
        source = "string"
      }
    }
  })
}

```

## Microsoft.EventGrid/partnerNamespaces/privateEndpointConnections@2023-12-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/partnerNamespaces/privateEndpointConnections@2023-12-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      groupIds = [
        "string"
      ]
      privateEndpoint = {
        id = "string"
      }
      privateLinkServiceConnectionState = {
        actionsRequired = "string"
        description = "string"
        status = "string"
      }
      provisioningState = "string"
    }
  })
}

```

## Microsoft.EventGrid/partnerRegistrations@2023-12-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/partnerRegistrations@2023-12-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      partnerRegistrationImmutableId = "string"
    }
  })
}

```

## Microsoft.EventGrid/partnerTopics@2023-12-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/partnerTopics@2023-12-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      activationState = "string"
      eventTypeInfo = {
        inlineEventTypes = {
          {customized property} = {
            dataSchemaUrl = "string"
            description = "string"
            displayName = "string"
            documentationUrl = "string"
          }
        }
        kind = "Inline"
      }
      expirationTimeIfNotActivatedUtc = "string"
      messageForActivation = "string"
      partnerRegistrationImmutableId = "string"
      partnerTopicFriendlyDescription = "string"
      source = "string"
    }
  })
}

```

## Microsoft.EventGrid/partnerTopics/eventSubscriptions@2023-12-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/partnerTopics/eventSubscriptions@2023-12-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      deadLetterDestination = {
        endpointType = "string"
        // For remaining properties, see DeadLetterDestination objects
      }
      deadLetterWithResourceIdentity = {
        deadLetterDestination = {
          endpointType = "string"
          // For remaining properties, see DeadLetterDestination objects
        }
        identity = {
          type = "string"
          userAssignedIdentity = "string"
        }
      }
      deliveryWithResourceIdentity = {
        destination = {
          endpointType = "string"
          // For remaining properties, see EventSubscriptionDestination objects
        }
        identity = {
          type = "string"
          userAssignedIdentity = "string"
        }
      }
      destination = {
        endpointType = "string"
        // For remaining properties, see EventSubscriptionDestination objects
      }
      eventDeliverySchema = "string"
      expirationTimeUtc = "string"
      filter = {
        advancedFilters = [
          {
            key = "string"
            operatorType = "string"
            // For remaining properties, see AdvancedFilter objects
          }
        ]
        enableAdvancedFilteringOnArrays = bool
        includedEventTypes = [
          "string"
        ]
        isSubjectCaseSensitive = bool
        subjectBeginsWith = "string"
        subjectEndsWith = "string"
      }
      labels = [
        "string"
      ]
      retryPolicy = {
        eventTimeToLiveInMinutes = int
        maxDeliveryAttempts = int
      }
    }
  })
}

```

## Microsoft.EventGrid/systemTopics@2023-12-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/systemTopics@2023-12-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      source = "string"
      topicType = "string"
    }
  })
}

```

## Microsoft.EventGrid/systemTopics/eventSubscriptions@2023-12-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/systemTopics/eventSubscriptions@2023-12-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      deadLetterDestination = {
        endpointType = "string"
        // For remaining properties, see DeadLetterDestination objects
      }
      deadLetterWithResourceIdentity = {
        deadLetterDestination = {
          endpointType = "string"
          // For remaining properties, see DeadLetterDestination objects
        }
        identity = {
          type = "string"
          userAssignedIdentity = "string"
        }
      }
      deliveryWithResourceIdentity = {
        destination = {
          endpointType = "string"
          // For remaining properties, see EventSubscriptionDestination objects
        }
        identity = {
          type = "string"
          userAssignedIdentity = "string"
        }
      }
      destination = {
        endpointType = "string"
        // For remaining properties, see EventSubscriptionDestination objects
      }
      eventDeliverySchema = "string"
      expirationTimeUtc = "string"
      filter = {
        advancedFilters = [
          {
            key = "string"
            operatorType = "string"
            // For remaining properties, see AdvancedFilter objects
          }
        ]
        enableAdvancedFilteringOnArrays = bool
        includedEventTypes = [
          "string"
        ]
        isSubjectCaseSensitive = bool
        subjectBeginsWith = "string"
        subjectEndsWith = "string"
      }
      labels = [
        "string"
      ]
      retryPolicy = {
        eventTimeToLiveInMinutes = int
        maxDeliveryAttempts = int
      }
    }
  })
}

```

## Microsoft.EventGrid/topics@2023-12-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/topics@2023-12-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      dataResidencyBoundary = "string"
      disableLocalAuth = bool
      eventTypeInfo = {
        inlineEventTypes = {
          {customized property} = {
            dataSchemaUrl = "string"
            description = "string"
            displayName = "string"
            documentationUrl = "string"
          }
        }
        kind = "Inline"
      }
      inboundIpRules = [
        {
          action = "Allow"
          ipMask = "string"
        }
      ]
      inputSchema = "string"
      inputSchemaMapping = {
        inputSchemaMappingType = "string"
        // For remaining properties, see InputSchemaMapping objects
      }
      minimumTlsVersionAllowed = "string"
      publicNetworkAccess = "string"
    }
    sku = {
      name = "string"
    }
    kind = "string"
    extendedLocation = {
      name = "string"
      type = "string"
    }
  })
}

```

## Microsoft.EventGrid/topics/eventSubscriptions@2023-12-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/topics/eventSubscriptions@2023-12-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      deadLetterDestination = {
        endpointType = "string"
        // For remaining properties, see DeadLetterDestination objects
      }
      deadLetterWithResourceIdentity = {
        deadLetterDestination = {
          endpointType = "string"
          // For remaining properties, see DeadLetterDestination objects
        }
        identity = {
          type = "string"
          userAssignedIdentity = "string"
        }
      }
      deliveryWithResourceIdentity = {
        destination = {
          endpointType = "string"
          // For remaining properties, see EventSubscriptionDestination objects
        }
        identity = {
          type = "string"
          userAssignedIdentity = "string"
        }
      }
      destination = {
        endpointType = "string"
        // For remaining properties, see EventSubscriptionDestination objects
      }
      eventDeliverySchema = "string"
      expirationTimeUtc = "string"
      filter = {
        advancedFilters = [
          {
            key = "string"
            operatorType = "string"
            // For remaining properties, see AdvancedFilter objects
          }
        ]
        enableAdvancedFilteringOnArrays = bool
        includedEventTypes = [
          "string"
        ]
        isSubjectCaseSensitive = bool
        subjectBeginsWith = "string"
        subjectEndsWith = "string"
      }
      labels = [
        "string"
      ]
      retryPolicy = {
        eventTimeToLiveInMinutes = int
        maxDeliveryAttempts = int
      }
    }
  })
}

```

## Microsoft.EventGrid/topics/privateEndpointConnections@2023-12-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/topics/privateEndpointConnections@2023-12-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      groupIds = [
        "string"
      ]
      privateEndpoint = {
        id = "string"
      }
      privateLinkServiceConnectionState = {
        actionsRequired = "string"
        description = "string"
        status = "string"
      }
      provisioningState = "string"
    }
  })
}

```

