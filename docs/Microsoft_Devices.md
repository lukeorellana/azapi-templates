## Microsoft.Devices/IotHubs@2022-04-30-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Devices/IotHubs@2022-04-30-preview"
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
      allowedFqdnList = [
        "string"
      ]
      authorizationPolicies = [
        {
          keyName = "string"
          primaryKey = "string"
          rights = "string"
          secondaryKey = "string"
          keyName = "string"
          primaryKey = "string"
          rights = "string"
          secondaryKey = "string"
        }
      ]
      cloudToDevice = {
        defaultTtlAsIso8601 = "string"
        feedback = {
          lockDurationAsIso8601 = "string"
          maxDeliveryCount = int
          ttlAsIso8601 = "string"
        }
        maxDeliveryCount = int
      }
      comments = "string"
      deviceStreams = {
        streamingEndpoints = [
          "string"
        ]
      }
      disableDeviceSAS = bool
      disableLocalAuth = bool
      disableModuleSAS = bool
      enableDataResidency = bool
      enableFileUploadNotifications = bool
      encryption = {
        keySource = "string"
        keyVaultProperties = [
          {
            identity = {
              userAssignedIdentity = "string"
            }
            keyIdentifier = "string"
          }
        ]
      }
      eventHubEndpoints = {}
      features = "string"
      ipFilterRules = [
        {
          action = "string"
          filterName = "string"
          ipMask = "string"
        }
      ]
      messagingEndpoints = {}
      minTlsVersion = "string"
      networkRuleSets = {
        applyToBuiltInEventHubEndpoint = bool
        defaultAction = "string"
        ipRules = [
          {
            action = "Allow"
            filterName = "string"
            ipMask = "string"
          }
        ]
      }
      privateEndpointConnections = [
        {
          properties = {
            privateEndpoint = {}
            privateLinkServiceConnectionState = {
              actionsRequired = "string"
              description = "string"
              status = "string"
            }
          }
        }
      ]
      publicNetworkAccess = "string"
      restrictOutboundNetworkAccess = bool
      rootCertificate = {
        enableRootCertificateV2 = bool
      }
      routing = {
        endpoints = {
          cosmosDBSqlCollections = [
            {
              authenticationType = "string"
              collectionName = "string"
              databaseName = "string"
              endpointUri = "string"
              id = "string"
              identity = {
                userAssignedIdentity = "string"
              }
              name = "string"
              partitionKeyName = "string"
              partitionKeyTemplate = "string"
              primaryKey = "string"
              resourceGroup = "string"
              secondaryKey = "string"
              subscriptionId = "string"
            }
          ]
          eventHubs = [
            {
              authenticationType = "string"
              connectionString = "string"
              endpointUri = "string"
              entityPath = "string"
              id = "string"
              identity = {
                userAssignedIdentity = "string"
              }
              name = "string"
              resourceGroup = "string"
              subscriptionId = "string"
            }
          ]
          serviceBusQueues = [
            {
              authenticationType = "string"
              connectionString = "string"
              endpointUri = "string"
              entityPath = "string"
              id = "string"
              identity = {
                userAssignedIdentity = "string"
              }
              name = "string"
              resourceGroup = "string"
              subscriptionId = "string"
            }
          ]
          serviceBusTopics = [
            {
              authenticationType = "string"
              connectionString = "string"
              endpointUri = "string"
              entityPath = "string"
              id = "string"
              identity = {
                userAssignedIdentity = "string"
              }
              name = "string"
              resourceGroup = "string"
              subscriptionId = "string"
            }
          ]
          storageContainers = [
            {
              authenticationType = "string"
              batchFrequencyInSeconds = int
              connectionString = "string"
              containerName = "string"
              encoding = "string"
              endpointUri = "string"
              fileNameFormat = "string"
              id = "string"
              identity = {
                userAssignedIdentity = "string"
              }
              maxChunkSizeInBytes = int
              name = "string"
              resourceGroup = "string"
              subscriptionId = "string"
            }
          ]
        }
        enrichments = [
          {
            endpointNames = [
              "string"
            ]
            key = "string"
            value = "string"
          }
        ]
        fallbackRoute = {
          condition = "string"
          endpointNames = [
            "string"
          ]
          isEnabled = bool
          name = "string"
          source = "string"
        }
        routes = [
          {
            condition = "string"
            endpointNames = [
              "string"
            ]
            isEnabled = bool
            name = "string"
            source = "string"
          }
        ]
      }
      storageEndpoints = {}
    }
    sku = {
      capacity = int
      name = "string"
    }
    etag = "string"
  })
}

```

### IotHubs

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 3-50Valid characters:Alphanumerics and hyphens.Can't end with hyphen.Resource name must be unique across Azure. |
| location | The resource location. | string (required) |
| tags | The resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | IotHub SKU info | IotHubSkuInfo(required) |
| etag | The Etag field isnotrequired. If it is provided in the response body, it must also be provided as a header per the normal ETag convention. | string |
| identity | The managed identities for the IotHub. | ArmIdentity |
| properties | IotHub properties | IotHubProperties |


### ArmIdentity

| Name | Description | Value |
|-|-|-|
| type | The type of identity used for the resource. The type 'SystemAssigned,UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the service. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' |
| userAssignedIdentities | Dictionary of {ArmUserIdentity} | object |


### IotHubProperties

| Name | Description | Value |
|-|-|-|
| allowedFqdnList | List of allowed FQDNs(Fully Qualified Domain Name) for egress from Iot Hub. | string[] |
| authorizationPolicies | The shared access policies you can use to secure a connection to the IoT hub. | SharedAccessSignatureAuthorizationRule[] |
| cloudToDevice | The IoT hub cloud-to-device messaging properties. | CloudToDeviceProperties |
| comments | IoT hub comments. | string |
| deviceStreams | The device streams properties of iothub. | IotHubPropertiesDeviceStreams |
| disableDeviceSAS | If true, all device(including Edge devices but excluding modules) scoped SAS keys cannot be used for authentication. | bool |
| disableLocalAuth | If true, SAS tokens with Iot hub scoped SAS keys cannot be used for authentication. | bool |
| disableModuleSAS | If true, all module scoped SAS keys cannot be used for authentication. | bool |
| enableDataResidency | This property when set to true, will enable data residency, thus, disabling disaster recovery. | bool |
| enableFileUploadNotifications | If True, file upload notifications are enabled. | bool |
| encryption | The encryption properties for the IoT hub. | EncryptionPropertiesDescription |
| eventHubEndpoints | The Event Hub-compatible endpoint properties. The only possible keys to this dictionary is events. This key has to be present in the dictionary while making create or update calls for the IoT hub. | object |
| features | The capabilities and features enabled for the IoT hub. | 'DeviceManagement''None' |
| ipFilterRules | The IP filter rules. | IpFilterRule[] |
| messagingEndpoints | The messaging endpoint properties for the file upload notification queue. | object |
| minTlsVersion | Specifies the minimum TLS version to support for this hub. Can be set to "1.2" to have clients that use a TLS version below 1.2 to be rejected. | string |
| networkRuleSets | Network Rule Set Properties of IotHub | NetworkRuleSetProperties |
| privateEndpointConnections | Private endpoint connections created on this IotHub | PrivateEndpointConnection[] |
| publicNetworkAccess | Whether requests from Public Network are allowed | 'Disabled''Enabled' |
| restrictOutboundNetworkAccess | If true, egress from IotHub will be restricted to only the allowed FQDNs that are configured via allowedFqdnList. | bool |
| rootCertificate | This property store root certificate related information | RootCertificateProperties |
| routing | The routing related properties of the IoT hub. See: /azure/iot-hub/iot-hub-devguide-messaging | RoutingProperties |
| storageEndpoints | The list of Azure Storage endpoints where you can upload files. Currently you can configure only one Azure Storage account and that MUST have its key as $default. Specifying more than one storage account causes an error to be thrown. Not specifying a value for this property when the enableFileUploadNotifications property is set to True, causes an error to be thrown. | object |


### SharedAccessSignatureAuthorizationRule

| Name | Description | Value |
|-|-|-|
| keyName | The name of the shared access policy. | string (required) |
| primaryKey | The primary key. | string |
| rights | The permissions assigned to the shared access policy. | 'DeviceConnect''RegistryRead''RegistryRead, DeviceConnect''RegistryRead, RegistryWrite''RegistryRead, RegistryWrite, DeviceConnect''RegistryRead, RegistryWrite, ServiceConnect''RegistryRead, RegistryWrite, ServiceConnect, DeviceConnect''RegistryRead, ServiceConnect''RegistryRead, ServiceConnect, DeviceConnect''RegistryWrite''RegistryWrite, DeviceConnect''RegistryWrite, ServiceConnect''RegistryWrite, ServiceConnect, DeviceConnect''ServiceConnect''ServiceConnect, DeviceConnect' (required) |
| secondaryKey | The secondary key. | string |
| keyName | The name of the shared access policy. | string (required) |
| primaryKey | The primary key. | string |
| rights | The permissions assigned to the shared access policy. | 'DeviceConnect''RegistryRead''RegistryRead, DeviceConnect''RegistryRead, RegistryWrite''RegistryRead, RegistryWrite, DeviceConnect''RegistryRead, RegistryWrite, ServiceConnect''RegistryRead, RegistryWrite, ServiceConnect, DeviceConnect''RegistryRead, ServiceConnect''RegistryRead, ServiceConnect, DeviceConnect''RegistryWrite''RegistryWrite, DeviceConnect''RegistryWrite, ServiceConnect''RegistryWrite, ServiceConnect, DeviceConnect''ServiceConnect''ServiceConnect, DeviceConnect' (required) |
| secondaryKey | The secondary key. | string |


### CloudToDeviceProperties

| Name | Description | Value |
|-|-|-|
| defaultTtlAsIso8601 | The default time to live for cloud-to-device messages in the device queue. See: /azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages. | string |
| feedback | The properties of the feedback queue for cloud-to-device messages. | FeedbackProperties |
| maxDeliveryCount | The max delivery count for cloud-to-device messages in the device queue. See: /azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages. | int |


### FeedbackProperties

| Name | Description | Value |
|-|-|-|
| lockDurationAsIso8601 | The lock duration for the feedback queue. See: /azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages. | string |
| maxDeliveryCount | The number of times the IoT hub attempts to deliver a message on the feedback queue. See: /azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages. | int |
| ttlAsIso8601 | The period of time for which a message is available to consume before it is expired by the IoT hub. See: /azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages. | string |


### IotHubPropertiesDeviceStreams

| Name | Description | Value |
|-|-|-|
| streamingEndpoints | List of Device Streams Endpoints. | string[] |


### EncryptionPropertiesDescription

| Name | Description | Value |
|-|-|-|
| keySource | The source of the key. | string |
| keyVaultProperties | The properties of the KeyVault key. | KeyVaultKeyProperties[] |


### KeyVaultKeyProperties

| Name | Description | Value |
|-|-|-|
| identity | Managed identity properties of KeyVault Key. | ManagedIdentity |
| keyIdentifier | The identifier of the key. | string |


### ManagedIdentity

| Name | Description | Value |
|-|-|-|
| userAssignedIdentity | The user assigned identity. | string |


### IpFilterRule

| Name | Description | Value |
|-|-|-|
| action | The desired action for requests captured by this rule. | 'Accept''Reject' (required) |
| filterName | The name of the IP filter rule. | string (required) |
| ipMask | A string that contains the IP address range in CIDR notation for the rule. | string (required) |


### NetworkRuleSetProperties

| Name | Description | Value |
|-|-|-|
| applyToBuiltInEventHubEndpoint | If True, then Network Rule Set is also applied to BuiltIn EventHub EndPoint of IotHub | bool (required) |
| defaultAction | Default Action for Network Rule Set | 'Allow''Deny' |
| ipRules | List of IP Rules | NetworkRuleSetIpRule[] (required) |


### NetworkRuleSetIpRule

| Name | Description | Value |
|-|-|-|
| action | IP Filter Action | 'Allow' |
| filterName | Name of the IP filter rule. | string (required) |
| ipMask | A string that contains the IP address range in CIDR notation for the rule. | string (required) |


### PrivateEndpointConnection

| Name | Description | Value |
|-|-|-|
| properties | The properties of a private endpoint connection | PrivateEndpointConnectionProperties(required) |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| privateEndpoint | The private endpoint property of a private endpoint connection | PrivateEndpoint |
| privateLinkServiceConnectionState | The current state of a private endpoint connection | PrivateLinkServiceConnectionState(required) |


### PrivateLinkServiceConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | Actions required for a private endpoint connection | string |
| description | The description for the current state of a private endpoint connection | string (required) |
| status | The status of a private endpoint connection | 'Approved''Disconnected''Pending''Rejected' (required) |


### RootCertificateProperties

| Name | Description | Value |
|-|-|-|
| enableRootCertificateV2 | This property when set to true, hub will use G2 cert; while it's set to false, hub uses Baltimore Cert. | bool |


### RoutingProperties

| Name | Description | Value |
|-|-|-|
| endpoints | The properties related to the custom endpoints to which your IoT hub routes messages based on the routing rules. A maximum of 10 custom endpoints are allowed across all endpoint types for paid hubs and only 1 custom endpoint is allowed across all endpoint types for free hubs. | RoutingEndpoints |
| enrichments | The list of user-provided enrichments that the IoT hub applies to messages to be delivered to built-in and custom endpoints. See:https://aka.ms/telemetryoneventgrid | EnrichmentProperties[] |
| fallbackRoute | The properties of the route that is used as a fall-back route when none of the conditions specified in the 'routes' section are met. This is an optional parameter. When this property is not set, the messages which do not meet any of the conditions specified in the 'routes' section get routed to the built-in eventhub endpoint. | FallbackRouteProperties |
| routes | The list of user-provided routing rules that the IoT hub uses to route messages to built-in and custom endpoints. A maximum of 100 routing rules are allowed for paid hubs and a maximum of 5 routing rules are allowed for free hubs. | RouteProperties[] |


### RoutingEndpoints

| Name | Description | Value |
|-|-|-|
| cosmosDBSqlCollections | The list of Cosmos DB collection endpoints that IoT hub routes messages to, based on the routing rules. | RoutingCosmosDBSqlApiProperties[] |
| eventHubs | The list of Event Hubs endpoints that IoT hub routes messages to, based on the routing rules. This list does not include the built-in Event Hubs endpoint. | RoutingEventHubProperties[] |
| serviceBusQueues | The list of Service Bus queue endpoints that IoT hub routes the messages to, based on the routing rules. | RoutingServiceBusQueueEndpointProperties[] |
| serviceBusTopics | The list of Service Bus topic endpoints that the IoT hub routes the messages to, based on the routing rules. | RoutingServiceBusTopicEndpointProperties[] |
| storageContainers | The list of storage container endpoints that IoT hub routes messages to, based on the routing rules. | RoutingStorageContainerProperties[] |


### RoutingCosmosDBSqlApiProperties

| Name | Description | Value |
|-|-|-|
| authenticationType | Method used to authenticate against the cosmos DB sql collection endpoint | 'identityBased''keyBased' |
| collectionName | The name of the cosmos DB sql collection in the cosmos DB database. | string (required) |
| databaseName | The name of the cosmos DB database in the cosmos DB account. | string (required) |
| endpointUri | The url of the cosmos DB account. It must include the protocolhttps:// | string (required) |
| id | Id of the cosmos DB sql collection endpoint | string |
| identity | Managed identity properties of routing cosmos DB collection endpoint. | ManagedIdentity |
| name | The name that identifies this endpoint. The name can only include alphanumeric characters, periods, underscores, hyphens and has a maximum length of 64 characters. The following names are reserved:  events, fileNotifications, $default. Endpoint names must be unique across endpoint types. | string (required) |
| partitionKeyName | The name of the partition key associated with this cosmos DB sql collection if one exists. This is an optional parameter. | string |
| partitionKeyTemplate | The template for generating a synthetic partition key value for use with this cosmos DB sql collection. The template must include at least one of the following placeholders: {iothub}, {deviceid}, {DD}, {MM}, and {YYYY}. Any one placeholder may be specified at most once, but order and non-placeholder components are arbitrary. This parameter is only required if PartitionKeyName is specified. | string |
| primaryKey | The primary key of the cosmos DB account. | string |
| resourceGroup | The name of the resource group of the cosmos DB account. | string |
| secondaryKey | The secondary key of the cosmos DB account. | string |
| subscriptionId | The subscription identifier of the cosmos DB account. | string |


### RoutingEventHubProperties

| Name | Description | Value |
|-|-|-|
| authenticationType | Method used to authenticate against the event hub endpoint | 'identityBased''keyBased' |
| connectionString | The connection string of the event hub endpoint. | string |
| endpointUri | The url of the event hub endpoint. It must include the protocol sb:// | string |
| entityPath | Event hub name on the event hub namespace | string |
| id | Id of the event hub endpoint | string |
| identity | Managed identity properties of routing event hub endpoint. | ManagedIdentity |
| name | The name that identifies this endpoint. The name can only include alphanumeric characters, periods, underscores, hyphens and has a maximum length of 64 characters. The following names are reserved:  events, fileNotifications, $default. Endpoint names must be unique across endpoint types. | string (required) |
| resourceGroup | The name of the resource group of the event hub endpoint. | string |
| subscriptionId | The subscription identifier of the event hub endpoint. | string |


### RoutingServiceBusQueueEndpointProperties

| Name | Description | Value |
|-|-|-|
| authenticationType | Method used to authenticate against the service bus queue endpoint | 'identityBased''keyBased' |
| connectionString | The connection string of the service bus queue endpoint. | string |
| endpointUri | The url of the service bus queue endpoint. It must include the protocol sb:// | string |
| entityPath | Queue name on the service bus namespace | string |
| id | Id of the service bus queue endpoint | string |
| identity | Managed identity properties of routing service bus queue endpoint. | ManagedIdentity |
| name | The name that identifies this endpoint. The name can only include alphanumeric characters, periods, underscores, hyphens and has a maximum length of 64 characters. The following names are reserved:  events, fileNotifications, $default. Endpoint names must be unique across endpoint types. The name need not be the same as the actual queue name. | string (required) |
| resourceGroup | The name of the resource group of the service bus queue endpoint. | string |
| subscriptionId | The subscription identifier of the service bus queue endpoint. | string |


### RoutingServiceBusTopicEndpointProperties

| Name | Description | Value |
|-|-|-|
| authenticationType | Method used to authenticate against the service bus topic endpoint | 'identityBased''keyBased' |
| connectionString | The connection string of the service bus topic endpoint. | string |
| endpointUri | The url of the service bus topic endpoint. It must include the protocol sb:// | string |
| entityPath | Queue name on the service bus topic | string |
| id | Id of the service bus topic endpoint | string |
| identity | Managed identity properties of routing service bus topic endpoint. | ManagedIdentity |
| name | The name that identifies this endpoint. The name can only include alphanumeric characters, periods, underscores, hyphens and has a maximum length of 64 characters. The following names are reserved:  events, fileNotifications, $default. Endpoint names must be unique across endpoint types.  The name need not be the same as the actual topic name. | string (required) |
| resourceGroup | The name of the resource group of the service bus topic endpoint. | string |
| subscriptionId | The subscription identifier of the service bus topic endpoint. | string |


### RoutingStorageContainerProperties

| Name | Description | Value |
|-|-|-|
| authenticationType | Method used to authenticate against the storage endpoint | 'identityBased''keyBased' |
| batchFrequencyInSeconds | Time interval at which blobs are written to storage. Value should be between 60 and 720 seconds. Default value is 300 seconds. | int |
| connectionString | The connection string of the storage account. | string |
| containerName | The name of storage container in the storage account. | string (required) |
| encoding | Encoding that is used to serialize messages to blobs. Supported values are 'avro', 'avrodeflate', and 'JSON'. Default value is 'avro'. | 'Avro''AvroDeflate''JSON' |
| endpointUri | The url of the storage endpoint. It must include the protocolhttps:// | string |
| fileNameFormat | File name format for the blob. Default format is {iothub}/{partition}/{YYYY}/{MM}/{DD}/{HH}/{mm}. All parameters are mandatory but can be reordered. | string |
| id | Id of the storage container endpoint | string |
| identity | Managed identity properties of routing storage endpoint. | ManagedIdentity |
| maxChunkSizeInBytes | Maximum number of bytes for each blob written to storage. Value should be between 10485760(10MB) and 524288000(500MB). Default value is 314572800(300MB). | int |
| name | The name that identifies this endpoint. The name can only include alphanumeric characters, periods, underscores, hyphens and has a maximum length of 64 characters. The following names are reserved:  events, fileNotifications, $default. Endpoint names must be unique across endpoint types. | string (required) |
| resourceGroup | The name of the resource group of the storage account. | string |
| subscriptionId | The subscription identifier of the storage account. | string |


### EnrichmentProperties

| Name | Description | Value |
|-|-|-|
| endpointNames | The list of endpoints for which the enrichment is applied to the message. | string[] (required) |
| key | The key or name for the enrichment property. | string (required) |
| value | The value for the enrichment property. | string (required) |


### FallbackRouteProperties

| Name | Description | Value |
|-|-|-|
| condition | The condition which is evaluated in order to apply the fallback route. If the condition is not provided it will evaluate to true by default. For grammar, See: /azure/iot-hub/iot-hub-devguide-query-language | string |
| endpointNames | The list of endpoints to which the messages that satisfy the condition are routed to. Currently only 1 endpoint is allowed. | string[] (required) |
| isEnabled | Used to specify whether the fallback route is enabled. | bool (required) |
| name | The name of the route. The name can only include alphanumeric characters, periods, underscores, hyphens, has a maximum length of 64 characters, and must be unique. | string |
| source | The source to which the routing rule is to be applied to. For example, DeviceMessages | 'DeviceConnectionStateEvents''DeviceJobLifecycleEvents''DeviceLifecycleEvents''DeviceMessages''DigitalTwinChangeEvents''Invalid''MqttBrokerMessages''TwinChangeEvents' (required) |


### RouteProperties

| Name | Description | Value |
|-|-|-|
| condition | The condition that is evaluated to apply the routing rule. If no condition is provided, it evaluates to true by default. For grammar, see: /azure/iot-hub/iot-hub-devguide-query-language | string |
| endpointNames | The list of endpoints to which messages that satisfy the condition are routed. Currently only one endpoint is allowed. | string[] (required) |
| isEnabled | Used to specify whether a route is enabled. | bool (required) |
| name | The name of the route. The name can only include alphanumeric characters, periods, underscores, hyphens, has a maximum length of 64 characters, and must be unique. | string (required) |
| source | The source that the routing rule is to be applied to, such as DeviceMessages. | 'DeviceConnectionStateEvents''DeviceJobLifecycleEvents''DeviceLifecycleEvents''DeviceMessages''DigitalTwinChangeEvents''Invalid''MqttBrokerMessages''TwinChangeEvents' (required) |


### IotHubSkuInfo

| Name | Description | Value |
|-|-|-|
| capacity | The number of provisioned IoT Hub units. See: /azure/azure-subscription-service-limits#iot-hub-limits. | int |
| name | The name of the SKU. | 'B1''B2''B3''F1''S1''S2''S3' (required) |
## Microsoft.Devices/IotHubs/certificates@2022-04-30-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Devices/IotHubs/certificates@2022-04-30-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      certificate = "string"
      isVerified = bool
    }
  })
}

```

### IotHubs/certificates

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-64Valid characters:Alphanumerics, hyphens, periods, and underscores. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:IotHubs |
| properties | The description of an X509 CA Certificate. | CertificateProperties |


### CertificateProperties

| Name | Description | Value |
|-|-|-|
| certificate | The certificate content | string |
| isVerified | Determines whether certificate has been verified. | bool |
## Microsoft.Devices/IotHubs/eventHubEndpoints/ConsumerGroups@2022-04-30-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Devices/IotHubs/eventHubEndpoints/ConsumerGroups@2022-04-30-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      name = "string"
    }
  })
}

```

### IotHubs/eventHubEndpoints/ConsumerGroups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-50Valid characters:Alphanumerics, hyphens, periods, and underscores. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: eventHubEndpoints |
| properties | The EventHub consumer group name. | EventHubConsumerGroupNameOrEventHubConsumerGroupInfo...(required) |


### EventHubConsumerGroupNameOrEventHubConsumerGroupInfo...

| Name | Description | Value |
|-|-|-|
| name | EventHub consumer group name | string (required) |
## Microsoft.Devices/iotHubs/privateEndpointConnections@2022-04-30-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Devices/iotHubs/privateEndpointConnections@2022-04-30-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateEndpoint = {}
      privateLinkServiceConnectionState = {
        actionsRequired = "string"
        description = "string"
        status = "string"
      }
    }
  })
}

```

### iotHubs/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:iotHubs |
| properties | The properties of a private endpoint connection | PrivateEndpointConnectionProperties(required) |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| privateEndpoint | The private endpoint property of a private endpoint connection | PrivateEndpoint |
| privateLinkServiceConnectionState | The current state of a private endpoint connection | PrivateLinkServiceConnectionState(required) |


### PrivateLinkServiceConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | Actions required for a private endpoint connection | string |
| description | The description for the current state of a private endpoint connection | string (required) |
| status | The status of a private endpoint connection | 'Approved''Disconnected''Pending''Rejected' (required) |
## Microsoft.Devices/provisioningServices@2022-12-12

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Devices/provisioningServices@2022-12-12"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      allocationPolicy = "string"
      authorizationPolicies = [
        {
          keyName = "string"
          primaryKey = "string"
          rights = "string"
          secondaryKey = "string"
          keyName = "string"
          primaryKey = "string"
          rights = "string"
          secondaryKey = "string"
        }
      ]
      enableDataResidency = bool
      iotHubs = [
        {
          allocationWeight = int
          applyAllocationPolicy = bool
          connectionString = "string"
          location = "string"
        }
      ]
      ipFilterRules = [
        {
          action = "string"
          filterName = "string"
          ipMask = "string"
          target = "string"
        }
      ]
      portalOperationsHostName = "string"
      privateEndpointConnections = [
        {
          properties = {
            privateEndpoint = {}
            privateLinkServiceConnectionState = {
              actionsRequired = "string"
              description = "string"
              status = "string"
            }
          }
        }
      ]
      provisioningState = "string"
      publicNetworkAccess = "string"
      state = "string"
    }
    resourcegroup = "string"
    subscriptionid = "string"
    sku = {
      capacity = int
      name = "S1"
    }
    etag = "string"
  })
}

```

### provisioningServices

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 3-64Valid characters:Alphanumerics and hyphens.End with alphanumeric. |
| location | The resource location. | string (required) |
| tags | The resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | Sku info for a provisioning Service. | IotDpsSkuInfo(required) |
| etag | The Etag field isnotrequired. If it is provided in the response body, it must also be provided as a header per the normal ETag convention. | string |
| properties | Service specific properties for a provisioning service | IotDpsPropertiesDescription(required) |
| resourcegroup | The resource group of the resource. | string |
| subscriptionid | The subscription id of the resource. | string |


### IotDpsPropertiesDescription

| Name | Description | Value |
|-|-|-|
| allocationPolicy | Allocation policy to be used by this provisioning service. | 'GeoLatency''Hashed''Static' |
| authorizationPolicies | List of authorization keys for a provisioning service. | SharedAccessSignatureAuthorizationRuleAccessRightsDe...[] |
| enableDataResidency | Optional.Indicates if the DPS instance has Data Residency enabled, removing the cross geo-pair disaster recovery. | bool |
| iotHubs | List of IoT hubs associated with this provisioning service. | IotHubDefinitionDescription[] |
| ipFilterRules | The IP filter rules. | IpFilterRule[] |
| portalOperationsHostName | Portal endpoint to enable CORS for this provisioning service. | string |
| privateEndpointConnections | Private endpoint connections created on this IotHub | PrivateEndpointConnection[] |
| provisioningState | The ARM provisioning state of the provisioning service. | string |
| publicNetworkAccess | Whether requests from Public Network are allowed | 'Disabled''Enabled' |
| state | Current state of the provisioning service. | 'Activating''ActivationFailed''Active''Deleted''Deleting''DeletionFailed''FailingOver''FailoverFailed''Resuming''Suspended''Suspending''Transitioning' |


### SharedAccessSignatureAuthorizationRuleAccessRightsDe...

| Name | Description | Value |
|-|-|-|
| keyName | Name of the key. | string (required) |
| primaryKey | Primary SAS key value. | string |
| rights | Rights that this key has. | 'DeviceConnect''EnrollmentRead''EnrollmentWrite''RegistrationStatusRead''RegistrationStatusWrite''ServiceConfig' (required) |
| secondaryKey | Secondary SAS key value. | string |
| keyName | Name of the key. | string (required) |
| primaryKey | Primary SAS key value. | string |
| rights | Rights that this key has. | 'DeviceConnect''EnrollmentRead''EnrollmentWrite''RegistrationStatusRead''RegistrationStatusWrite''ServiceConfig' (required) |
| secondaryKey | Secondary SAS key value. | string |


### IotHubDefinitionDescription

| Name | Description | Value |
|-|-|-|
| allocationWeight | weight to apply for a given iot h. | int |
| applyAllocationPolicy | flag for applying allocationPolicy or not for a given iot hub. | bool |
| connectionString | Connection string of the IoT hub. | string (required) |
| location | ARM region of the IoT hub. | string (required) |


### IpFilterRule

| Name | Description | Value |
|-|-|-|
| action | The desired action for requests captured by this rule. | 'Accept''Reject' (required) |
| filterName | The name of the IP filter rule. | string (required) |
| ipMask | A string that contains the IP address range in CIDR notation for the rule. | string (required) |
| target | Target for requests captured by this rule. | 'all''deviceApi''serviceApi' |


### PrivateEndpointConnection

| Name | Description | Value |
|-|-|-|
| properties | The properties of a private endpoint connection | PrivateEndpointConnectionProperties(required) |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| privateEndpoint | The private endpoint property of a private endpoint connection | PrivateEndpoint |
| privateLinkServiceConnectionState | The current state of a private endpoint connection | PrivateLinkServiceConnectionState(required) |


### PrivateLinkServiceConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | Actions required for a private endpoint connection | string |
| description | The description for the current state of a private endpoint connection | string (required) |
| status | The status of a private endpoint connection | 'Approved''Disconnected''Pending''Rejected' (required) |


### IotDpsSkuInfo

| Name | Description | Value |
|-|-|-|
| capacity | The number of units to provision | int |
| name | Sku name. | 'S1' |
## Microsoft.Devices/provisioningServices/certificates@2022-12-12

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Devices/provisioningServices/certificates@2022-12-12"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      isVerified = bool
    }
  })
}

```

### provisioningServices/certificates

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-64Valid characters:Alphanumerics, hyphens, periods, and underscores. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:provisioningServices |
| properties | properties of a certificate | CertificateProperties |


### CertificateProperties

| Name | Description | Value |
|-|-|-|
| certificate | base-64 representation of X509 certificate .cer file or just .pem file content. | For Bicep, you can use theany()function. |
| isVerified | Determines whether certificate has been verified. | bool |
## Microsoft.Devices/provisioningServices/privateEndpointConnections@2022-12-12

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Devices/provisioningServices/privateEndpointConnections@2022-12-12"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateEndpoint = {}
      privateLinkServiceConnectionState = {
        actionsRequired = "string"
        description = "string"
        status = "string"
      }
    }
  })
}

```

### provisioningServices/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:provisioningServices |
| properties | The properties of a private endpoint connection | PrivateEndpointConnectionProperties(required) |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| privateEndpoint | The private endpoint property of a private endpoint connection | PrivateEndpoint |
| privateLinkServiceConnectionState | The current state of a private endpoint connection | PrivateLinkServiceConnectionState(required) |


### PrivateLinkServiceConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | Actions required for a private endpoint connection | string |
| description | The description for the current state of a private endpoint connection | string (required) |
| status | The status of a private endpoint connection | 'Approved''Disconnected''Pending''Rejected' (required) |
