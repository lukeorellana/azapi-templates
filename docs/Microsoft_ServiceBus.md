## Microsoft.ServiceBus/namespaces@2022-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceBus/namespaces@2022-10-01-preview"
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
      alternateName = "string"
      disableLocalAuth = bool
      encryption = {
        keySource = "Microsoft.KeyVault"
        keyVaultProperties = [
          {
            identity = {
              userAssignedIdentity = "string"
            }
            keyName = "string"
            keyVaultUri = "string"
            keyVersion = "string"
          }
        ]
        requireInfrastructureEncryption = bool
      }
      minimumTlsVersion = "string"
      premiumMessagingPartitions = int
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
      zoneRedundant = bool
    }
    sku = {
      capacity = int
      name = "string"
      tier = "string"
    }
  })
}

```

### namespaces

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 6-50Valid characters:Alphanumerics and hyphens.Start with a letter. End with a letter or number.For more information, seeCreate namespace.Resource name must be unique across Azure. |
| location | The Geo-location where the resource lives | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| sku | Properties of SKU | SBSku |
| identity | Properties of BYOK Identity description | Identity |
| properties | Properties of the namespace. | SBNamespaceProperties |


### Identity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' |
| userAssignedIdentities | Properties for User Assigned Identities | object |


### SBNamespaceProperties

| Name | Description | Value |
|-|-|-|
| alternateName | Alternate name for namespace | string |
| disableLocalAuth | This property disables SAS authentication for the Service Bus namespace. | bool |
| encryption | Properties of BYOK Encryption description | Encryption |
| minimumTlsVersion | The minimum TLS version for the cluster to support, e.g. '1.2' | '1.0''1.1''1.2' |
| premiumMessagingPartitions | The number of partitions of a Service Bus namespace. This property is only applicable to Premium SKU namespaces. The default value is 1 and possible values are 1, 2 and 4 | int |
| privateEndpointConnections | List of private endpoint connections. | PrivateEndpointConnection[] |
| publicNetworkAccess | This determines if traffic is allowed over public network. By default it is enabled. | 'Disabled''Enabled''SecuredByPerimeter' |
| zoneRedundant | Enabling this property creates a Premium Service Bus Namespace in regions supported availability zones. | bool |


### Encryption

| Name | Description | Value |
|-|-|-|
| keySource | Enumerates the possible value of keySource for Encryption | 'Microsoft.KeyVault' |
| keyVaultProperties | Properties of KeyVault | KeyVaultProperties[] |
| requireInfrastructureEncryption | Enable Infrastructure Encryption (Double Encryption) | bool |


### KeyVaultProperties

| Name | Description | Value |
|-|-|-|
| identity |  | UserAssignedIdentityProperties |
| keyName | Name of the Key from KeyVault | string |
| keyVaultUri | Uri of KeyVault | string |
| keyVersion | Version of KeyVault | string |


### UserAssignedIdentityProperties

| Name | Description | Value |
|-|-|-|
| userAssignedIdentity | ARM ID of user Identity selected for encryption | string |


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


### SBSku

| Name | Description | Value |
|-|-|-|
| capacity | Messaging units for your service bus premium namespace. Valid capacities are {1, 2, 4, 8, 16} multiples of your properties.premiumMessagingPartitions setting. For example, If properties.premiumMessagingPartitions is 1 then possible capacity values are 1, 2, 4, 8, and 16. If properties.premiumMessagingPartitions is 4 then possible capacity values are 4, 8, 16, 32 and 64 | int |
| name | Name of this SKU. | 'Basic''Premium''Standard' (required) |
| tier | The billing tier of this particular SKU. | 'Basic''Premium''Standard' |
## Microsoft.ServiceBus/namespaces/AuthorizationRules@2022-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceBus/namespaces/AuthorizationRules@2022-10-01-preview"
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

### namespaces/AuthorizationRules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-50Valid characters:Alphanumerics, periods, hyphens, and underscores.Start and end with alphnumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:namespaces |
| properties | AuthorizationRule properties. | SBAuthorizationRuleProperties |


### SBAuthorizationRuleProperties

| Name | Description | Value |
|-|-|-|
| rights | The rights associated with the rule. | String array containing any of:'Listen''Manage''Send' (required) |
## Microsoft.ServiceBus/namespaces/disasterRecoveryConfigs@2022-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceBus/namespaces/disasterRecoveryConfigs@2022-10-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      alternateName = "string"
      partnerNamespace = "string"
    }
  })
}

```

### namespaces/disasterRecoveryConfigs

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 6-50Valid characters:Alphanumerics and hyphens.Start with letter. End with alphanumeric.Resource name must be unique across Azure. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:namespaces |
| properties | Properties required to the Create Or Update Alias(Disaster Recovery configurations) | ArmDisasterRecoveryProperties |


### ArmDisasterRecoveryProperties

| Name | Description | Value |
|-|-|-|
| alternateName | Primary/Secondary eventhub namespace name, which is part of GEO DR pairing | string |
| partnerNamespace | ARM Id of the Primary/Secondary eventhub namespace name, which is part of GEO DR pairing | string |
## Microsoft.ServiceBus/namespaces/ipfilterrules@2018-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceBus/namespaces/ipfilterrules@2018-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      action = "string"
      filterName = "string"
      ipMask = "string"
    }
  })
}

```

### namespaces/ipfilterrules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:namespaces |
| properties | Properties supplied to create or update IpFilterRules | IpFilterRuleProperties |


### IpFilterRuleProperties

| Name | Description | Value |
|-|-|-|
| action | The IP Filter Action | 'Accept''Reject' |
| filterName | IP Filter name | string |
| ipMask | IP Mask | string |
## Microsoft.ServiceBus/namespaces/migrationConfigurations@2022-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceBus/namespaces/migrationConfigurations@2022-10-01-preview"
  name = "$default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      postMigrationName = "string"
      targetNamespace = "string"
    }
  })
}

```

### namespaces/migrationConfigurations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | '$default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:namespaces |
| properties | Properties required to the Create Migration Configuration | MigrationConfigPropertiesProperties |


### MigrationConfigPropertiesProperties

| Name | Description | Value |
|-|-|-|
| postMigrationName | Name to access Standard Namespace after migration | string (required) |
| targetNamespace | Existing premium Namespace ARM Id name which has no entities, will be used for migration | string (required) |
## Microsoft.ServiceBus/namespaces/networkRuleSets@2022-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceBus/namespaces/networkRuleSets@2022-10-01-preview"
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
      trustedServiceAccessEnabled = bool
      virtualNetworkRules = [
        {
          ignoreMissingVnetServiceEndpoint = bool
          subnet = {
            id = "string"
          }
        }
      ]
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
| publicNetworkAccess | This determines if traffic is allowed over public network. By default it is enabled. | 'Disabled''Enabled' |
| trustedServiceAccessEnabled | Value that indicates whether Trusted Service Access is Enabled or not. | bool |
| virtualNetworkRules | List VirtualNetwork Rules | NWRuleSetVirtualNetworkRules[] |


### NWRuleSetIpRules

| Name | Description | Value |
|-|-|-|
| action | The IP Filter Action | 'Allow' |
| ipMask | IP Mask | string |


### NWRuleSetVirtualNetworkRules

| Name | Description | Value |
|-|-|-|
| ignoreMissingVnetServiceEndpoint | Value that indicates whether to ignore missing VNet Service Endpoint | bool |
| subnet | Subnet properties | Subnet |


### Subnet

| Name | Description | Value |
|-|-|-|
| id | Resource ID of Virtual Network Subnet | string (required) |
## Microsoft.ServiceBus/namespaces/privateEndpointConnections@2022-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceBus/namespaces/privateEndpointConnections@2022-10-01-preview"
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
## Microsoft.ServiceBus/namespaces/queues@2022-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceBus/namespaces/queues@2022-10-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      autoDeleteOnIdle = "string"
      deadLetteringOnMessageExpiration = bool
      defaultMessageTimeToLive = "string"
      duplicateDetectionHistoryTimeWindow = "string"
      enableBatchedOperations = bool
      enableExpress = bool
      enablePartitioning = bool
      forwardDeadLetteredMessagesTo = "string"
      forwardTo = "string"
      lockDuration = "string"
      maxDeliveryCount = int
      maxMessageSizeInKilobytes = int
      maxSizeInMegabytes = int
      requiresDuplicateDetection = bool
      requiresSession = bool
      status = "string"
    }
  })
}

```

### namespaces/queues

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-260Valid characters:Alphanumerics, periods, hyphens, underscores, and slashes.Start and end with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:namespaces |
| properties | Queue Properties | SBQueueProperties |


### SBQueueProperties

| Name | Description | Value |
|-|-|-|
| autoDeleteOnIdle | ISO 8061 timeSpan idle interval after which the queue is automatically deleted. The minimum duration is 5 minutes. | string |
| deadLetteringOnMessageExpiration | A value that indicates whether this queue has dead letter support when a message expires. | bool |
| defaultMessageTimeToLive | ISO 8601 default message timespan to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself. | string |
| duplicateDetectionHistoryTimeWindow | ISO 8601 timeSpan structure that defines the duration of the duplicate detection history. The default value is 10 minutes. | string |
| enableBatchedOperations | Value that indicates whether server-side batched operations are enabled. | bool |
| enableExpress | A value that indicates whether Express Entities are enabled. An express queue holds a message in memory temporarily before writing it to persistent storage. | bool |
| enablePartitioning | A value that indicates whether the queue is to be partitioned across multiple message brokers. | bool |
| forwardDeadLetteredMessagesTo | Queue/Topic name to forward the Dead Letter message | string |
| forwardTo | Queue/Topic name to forward the messages | string |
| lockDuration | ISO 8601 timespan duration of a peek-lock; that is, the amount of time that the message is locked for other receivers. The maximum value for LockDuration is 5 minutes; the default value is 1 minute. | string |
| maxDeliveryCount | The maximum delivery count. A message is automatically deadlettered after this number of deliveries. default value is 10. | int |
| maxMessageSizeInKilobytes | Maximum size (in KB) of the message payload that can be accepted by the queue. This property is only used in Premium today and default is 1024. | int |
| maxSizeInMegabytes | The maximum size of the queue in megabytes, which is the size of memory allocated for the queue. Default is 1024. | int |
| requiresDuplicateDetection | A value indicating if this queue requires duplicate detection. | bool |
| requiresSession | A value that indicates whether the queue supports the concept of sessions. | bool |
| status | Enumerates the possible values for the status of a messaging entity. | 'Active''Creating''Deleting''Disabled''ReceiveDisabled''Renaming''Restoring''SendDisabled''Unknown' |
## Microsoft.ServiceBus/namespaces/queues/authorizationRules@2022-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceBus/namespaces/queues/authorizationRules@2022-10-01-preview"
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

### namespaces/queues/authorizationRules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-50Valid characters:Alphanumerics, periods, hyphens, and underscores.Start and end with alphnumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:queues |
| properties | AuthorizationRule properties. | SBAuthorizationRuleProperties |


### SBAuthorizationRuleProperties

| Name | Description | Value |
|-|-|-|
| rights | The rights associated with the rule. | String array containing any of:'Listen''Manage''Send' (required) |
## Microsoft.ServiceBus/namespaces/topics@2022-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceBus/namespaces/topics@2022-10-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      autoDeleteOnIdle = "string"
      defaultMessageTimeToLive = "string"
      duplicateDetectionHistoryTimeWindow = "string"
      enableBatchedOperations = bool
      enableExpress = bool
      enablePartitioning = bool
      maxMessageSizeInKilobytes = int
      maxSizeInMegabytes = int
      requiresDuplicateDetection = bool
      status = "string"
      supportOrdering = bool
    }
  })
}

```

### namespaces/topics

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-260Valid characters:Alphanumerics, periods, hyphens, underscores, and slashes.Start and end with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:namespaces |
| properties | Properties of topic resource. | SBTopicProperties |


### SBTopicProperties

| Name | Description | Value |
|-|-|-|
| autoDeleteOnIdle | ISO 8601 timespan idle interval after which the topic is automatically deleted. The minimum duration is 5 minutes. | string |
| defaultMessageTimeToLive | ISO 8601 Default message timespan to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself. | string |
| duplicateDetectionHistoryTimeWindow | ISO8601 timespan structure that defines the duration of the duplicate detection history. The default value is 10 minutes. | string |
| enableBatchedOperations | Value that indicates whether server-side batched operations are enabled. | bool |
| enableExpress | Value that indicates whether Express Entities are enabled. An express topic holds a message in memory temporarily before writing it to persistent storage. | bool |
| enablePartitioning | Value that indicates whether the topic to be partitioned across multiple message brokers is enabled. | bool |
| maxMessageSizeInKilobytes | Maximum size (in KB) of the message payload that can be accepted by the topic. This property is only used in Premium today and default is 1024. | int |
| maxSizeInMegabytes | Maximum size of the topic in megabytes, which is the size of the memory allocated for the topic. Default is 1024. | int |
| requiresDuplicateDetection | Value indicating if this topic requires duplicate detection. | bool |
| status | Enumerates the possible values for the status of a messaging entity. | 'Active''Creating''Deleting''Disabled''ReceiveDisabled''Renaming''Restoring''SendDisabled''Unknown' |
| supportOrdering | Value that indicates whether the topic supports ordering. | bool |
## Microsoft.ServiceBus/namespaces/topics/authorizationRules@2022-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceBus/namespaces/topics/authorizationRules@2022-10-01-preview"
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

### namespaces/topics/authorizationRules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-50Valid characters:Alphanumerics, periods, hyphens, and underscores.Start and end with alphnumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:topics |
| properties | AuthorizationRule properties. | SBAuthorizationRuleProperties |


### SBAuthorizationRuleProperties

| Name | Description | Value |
|-|-|-|
| rights | The rights associated with the rule. | String array containing any of:'Listen''Manage''Send' (required) |
## Microsoft.ServiceBus/namespaces/topics/subscriptions@2022-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceBus/namespaces/topics/subscriptions@2022-10-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      autoDeleteOnIdle = "string"
      clientAffineProperties = {
        clientId = "string"
        isDurable = bool
        isShared = bool
      }
      deadLetteringOnFilterEvaluationExceptions = bool
      deadLetteringOnMessageExpiration = bool
      defaultMessageTimeToLive = "string"
      duplicateDetectionHistoryTimeWindow = "string"
      enableBatchedOperations = bool
      forwardDeadLetteredMessagesTo = "string"
      forwardTo = "string"
      isClientAffine = bool
      lockDuration = "string"
      maxDeliveryCount = int
      requiresSession = bool
      status = "string"
    }
  })
}

```

### namespaces/topics/subscriptions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-50Valid characters:Alphanumerics, periods, hyphens, and underscores.Start and end with alphnumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:topics |
| properties | Properties of subscriptions resource. | SBSubscriptionProperties |


### SBSubscriptionProperties

| Name | Description | Value |
|-|-|-|
| autoDeleteOnIdle | ISO 8061 timeSpan idle interval after which the topic is automatically deleted. The minimum duration is 5 minutes. | string |
| clientAffineProperties | Properties specific to client affine subscriptions. | SBClientAffineProperties |
| deadLetteringOnFilterEvaluationExceptions | Value that indicates whether a subscription has dead letter support on filter evaluation exceptions. | bool |
| deadLetteringOnMessageExpiration | Value that indicates whether a subscription has dead letter support when a message expires. | bool |
| defaultMessageTimeToLive | ISO 8061 Default message timespan to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself. | string |
| duplicateDetectionHistoryTimeWindow | ISO 8601 timeSpan structure that defines the duration of the duplicate detection history. The default value is 10 minutes. | string |
| enableBatchedOperations | Value that indicates whether server-side batched operations are enabled. | bool |
| forwardDeadLetteredMessagesTo | Queue/Topic name to forward the Dead Letter message | string |
| forwardTo | Queue/Topic name to forward the messages | string |
| isClientAffine | Value that indicates whether the subscription has an affinity to the client id. | bool |
| lockDuration | ISO 8061 lock duration timespan for the subscription. The default value is 1 minute. | string |
| maxDeliveryCount | Number of maximum deliveries. | int |
| requiresSession | Value indicating if a subscription supports the concept of sessions. | bool |
| status | Enumerates the possible values for the status of a messaging entity. | 'Active''Creating''Deleting''Disabled''ReceiveDisabled''Renaming''Restoring''SendDisabled''Unknown' |


### SBClientAffineProperties

| Name | Description | Value |
|-|-|-|
| clientId | Indicates the Client ID of the application that created the client-affine subscription. | string |
| isDurable | For client-affine subscriptions, this value indicates whether the subscription is durable or not. | bool |
| isShared | For client-affine subscriptions, this value indicates whether the subscription is shared or not. | bool |
## Microsoft.ServiceBus/namespaces/topics/subscriptions/rules@2022-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceBus/namespaces/topics/subscriptions/rules@2022-10-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      action = {
        compatibilityLevel = int
        requiresPreprocessing = bool
        sqlExpression = "string"
      }
      correlationFilter = {
        contentType = "string"
        correlationId = "string"
        label = "string"
        messageId = "string"
        properties = {}
        replyTo = "string"
        replyToSessionId = "string"
        requiresPreprocessing = bool
        sessionId = "string"
        to = "string"
      }
      filterType = "string"
      sqlFilter = {
        compatibilityLevel = int
        requiresPreprocessing = bool
        sqlExpression = "string"
      }
    }
  })
}

```

### namespaces/topics/subscriptions/rules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-50Valid characters:Alphanumerics, periods, hyphens, and underscores.Start and end with alphnumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:subscriptions |
| properties | Properties of Rule resource | Ruleproperties |


### Ruleproperties

| Name | Description | Value |
|-|-|-|
| action | Represents the filter actions which are allowed for the transformation of a message that have been matched by a filter expression. | Action |
| correlationFilter | Properties of correlationFilter | CorrelationFilter |
| filterType | Filter type that is evaluated against a BrokeredMessage. | 'CorrelationFilter''SqlFilter' |
| sqlFilter | Properties of sqlFilter | SqlFilter |


### Action

| Name | Description | Value |
|-|-|-|
| compatibilityLevel | This property is reserved for future use. An integer value showing the compatibility level, currently hard-coded to 20. | int |
| requiresPreprocessing | Value that indicates whether the rule action requires preprocessing. | bool |
| sqlExpression | SQL expression. e.g. MyProperty='ABC' | string |


### CorrelationFilter

| Name | Description | Value |
|-|-|-|
| contentType | Content type of the message. | string |
| correlationId | Identifier of the correlation. | string |
| label | Application specific label. | string |
| messageId | Identifier of the message. | string |
| properties | dictionary object for custom filters | object |
| replyTo | Address of the queue to reply to. | string |
| replyToSessionId | Session identifier to reply to. | string |
| requiresPreprocessing | Value that indicates whether the rule action requires preprocessing. | bool |
| sessionId | Session identifier. | string |
| to | Address to send to. | string |


### SqlFilter

| Name | Description | Value |
|-|-|-|
| compatibilityLevel | This property is reserved for future use. An integer value showing the compatibility level, currently hard-coded to 20. | int |
| requiresPreprocessing | Value that indicates whether the rule action requires preprocessing. | bool |
| sqlExpression | The SQL expression. e.g. MyProperty='ABC' | string |
## Microsoft.ServiceBus/namespaces/virtualnetworkrules@2018-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceBus/namespaces/virtualnetworkrules@2018-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      virtualNetworkSubnetId = "string"
    }
  })
}

```

### namespaces/virtualnetworkrules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:namespaces |
| properties | Properties supplied to create or update VirtualNetworkRules | VirtualNetworkRuleProperties |


### VirtualNetworkRuleProperties

| Name | Description | Value |
|-|-|-|
| virtualNetworkSubnetId | Resource ID of Virtual Network Subnet | string |
