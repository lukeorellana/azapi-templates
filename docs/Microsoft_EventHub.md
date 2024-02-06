## Microsoft.EventHub/clusters@2022-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventHub/clusters@2022-10-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      supportsScaling = bool
    }
    sku = {
      capacity = int
      name = "Dedicated"
    }
  })
}

```

### clusters

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 6-50Valid characters:Alphanumerics and hyphens.Start with letter. End with letter or number. |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | Properties of the cluster SKU. | ClusterSku |
| properties | Event Hubs Cluster properties supplied in responses in List or Get operations. | ClusterProperties |


### ClusterProperties

| Name | Description | Value |
|-|-|-|
| supportsScaling | A value that indicates whether Scaling is Supported. | bool |


### ClusterSku

| Name | Description | Value |
|-|-|-|
| capacity | The quantity of Event Hubs Cluster Capacity Units contained in this cluster. | int |
| name | Name of this SKU. | 'Dedicated' (required) |
## Microsoft.EventHub/namespaces@2022-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventHub/namespaces@2022-10-01-preview"
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
      clusterArmId = "string"
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
      isAutoInflateEnabled = bool
      kafkaEnabled = bool
      maximumThroughputUnits = int
      minimumTlsVersion = "string"
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
| name | The resource name | string (required)Character limit: 6-50Valid characters:Alphanumerics and hyphens.Start with letter. End with letter or number.Resource name must be unique across Azure. |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | Properties of sku resource | Sku |
| identity | Properties of BYOK Identity description | Identity |
| properties | Namespace properties supplied for create namespace operation. | EHNamespaceProperties |


### Identity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' |
| userAssignedIdentities | Properties for User Assigned Identities | object |


### EHNamespaceProperties

| Name | Description | Value |
|-|-|-|
| alternateName | Alternate name specified when alias and namespace names are same. | string |
| clusterArmId | Cluster ARM ID of the Namespace. | string |
| disableLocalAuth | This property disables SAS authentication for the Event Hubs namespace. | bool |
| encryption | Properties of BYOK Encryption description | Encryption |
| isAutoInflateEnabled | Value that indicates whether AutoInflate is enabled for eventhub namespace. | bool |
| kafkaEnabled | Value that indicates whether Kafka is enabled for eventhub namespace. | bool |
| maximumThroughputUnits | Upper limit of throughput units when AutoInflate is enabled, value should be within 0 to 20 throughput units. ( '0' if AutoInflateEnabled = true) | int |
| minimumTlsVersion | The minimum TLS version for the cluster to support, e.g. '1.2' | '1.0''1.1''1.2' |
| privateEndpointConnections | List of private endpoint connections. | PrivateEndpointConnection[] |
| publicNetworkAccess | This determines if traffic is allowed over public network. By default it is enabled. | 'Disabled''Enabled''SecuredByPerimeter' |
| zoneRedundant | Enabling this property creates a Standard Event Hubs Namespace in regions supported availability zones. | bool |


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
| keyVersion | Key Version | string |


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


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | The Event Hubs throughput units for Basic or Standard tiers, where value should be 0 to 20 throughput units. The Event Hubs premium units for Premium tier, where value should be 0 to 10 premium units. | int |
| name | Name of this SKU. | 'Basic''Premium''Standard' (required) |
| tier | The billing tier of this particular SKU. | 'Basic''Premium''Standard' |
## Microsoft.EventHub/namespaces/applicationGroups@2022-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventHub/namespaces/applicationGroups@2022-10-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      clientAppGroupIdentifier = "string"
      isEnabled = bool
      policies = [
        {
          name = "string"
          type = "string"
          // For remaining properties, see ApplicationGroupPolicy objects
        }
      ]
    }
  })
}

```

### namespaces/applicationGroups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:namespaces |
| properties |  | ApplicationGroupProperties |


### ApplicationGroupProperties

| Name | Description | Value |
|-|-|-|
| clientAppGroupIdentifier | The Unique identifier for application group.Supports SAS(SASKeyName=KeyName) or AAD(AADAppID=Guid) | string (required) |
| isEnabled | Determines if Application Group is allowed to create connection with namespace or not. Once the isEnabled is set to false, all the existing connections of application group gets dropped and no new connections will be allowed | bool |
| policies | List of group policies that define the behavior of application group. The policies can support resource governance scenarios such as limiting ingress or egress traffic. | ApplicationGroupPolicy[] |


### ApplicationGroupPolicy

| Name | Description | Value |
|-|-|-|
| name | The Name of this policy | string (required) |
| type | Set the object type | ThrottlingPolicy(required) |


### ThrottlingPolicy

| Name | Description | Value |
|-|-|-|
| type | Application Group Policy types | 'ThrottlingPolicy' (required) |
| metricId | Metric Id on which the throttle limit should be set, MetricId can be discovered by hovering over Metric in the Metrics section of Event Hub Namespace inside Azure Portal | 'IncomingBytes''IncomingMessages''OutgoingBytes''OutgoingMessages' (required) |
| rateLimitThreshold | The Threshold limit above which the application group will be throttled.Rate limit is always per second. | int (required) |
## Microsoft.EventHub/namespaces/authorizationRules@2022-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventHub/namespaces/authorizationRules@2022-10-01-preview"
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
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-50Valid characters:Alphanumerics, periods, hyphens and underscores.Start and end with letter or number. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:namespaces |
| properties | Properties supplied to create or update AuthorizationRule | AuthorizationRuleProperties |


### AuthorizationRuleProperties

| Name | Description | Value |
|-|-|-|
| rights | The rights associated with the rule. | String array containing any of:'Listen''Manage''Send' (required) |
## Microsoft.EventHub/namespaces/disasterRecoveryConfigs@2022-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventHub/namespaces/disasterRecoveryConfigs@2022-10-01-preview"
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
| alternateName | Alternate name specified when alias and namespace names are same. | string |
| partnerNamespace | ARM Id of the Primary/Secondary eventhub namespace name, which is part of GEO DR pairing | string |
## Microsoft.EventHub/namespaces/eventhubs@2022-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventHub/namespaces/eventhubs@2022-10-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      captureDescription = {
        destination = {
          name = "string"
          properties = {
            archiveNameFormat = "string"
            blobContainer = "string"
            dataLakeAccountName = "string"
            dataLakeFolderPath = "string"
            dataLakeSubscriptionId = "string"
            storageAccountResourceId = "string"
          }
        }
        enabled = bool
        encoding = "string"
        intervalInSeconds = int
        sizeLimitInBytes = int
        skipEmptyArchives = bool
      }
      messageRetentionInDays = int
      partitionCount = int
      retentionDescription = {
        cleanupPolicy = "string"
        retentionTimeInHours = int
        tombstoneRetentionTimeInHours = int
      }
      status = "string"
    }
  })
}

```

### namespaces/eventhubs

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-256Valid characters:Alphanumerics, periods, hyphens and underscores.Start and end with letter or number. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:namespaces |
| properties | Properties supplied to the Create Or Update Event Hub operation. | EventhubProperties |


### EventhubProperties

| Name | Description | Value |
|-|-|-|
| captureDescription | Properties of capture description | CaptureDescription |
| messageRetentionInDays | Number of days to retain the events for this Event Hub, value should be 1 to 7 days | int |
| partitionCount | Number of partitions created for the Event Hub, allowed values are from 1 to 32 partitions. | int |
| retentionDescription | Event Hub retention settings | RetentionDescription |
| status | Enumerates the possible values for the status of the Event Hub. | 'Active''Creating''Deleting''Disabled''ReceiveDisabled''Renaming''Restoring''SendDisabled''Unknown' |


### CaptureDescription

| Name | Description | Value |
|-|-|-|
| destination | Properties of Destination where capture will be stored. (Storage Account, Blob Names) | Destination |
| enabled | A value that indicates whether capture description is enabled. | bool |
| encoding | Enumerates the possible values for the encoding format of capture description. Note: 'AvroDeflate' will be deprecated in New API Version | 'Avro''AvroDeflate' |
| intervalInSeconds | The time window allows you to set the frequency with which the capture to Azure Blobs will happen, value should between 60 to 900 seconds | int |
| sizeLimitInBytes | The size window defines the amount of data built up in your Event Hub before an capture operation, value should be between 10485760 to 524288000 bytes | int |
| skipEmptyArchives | A value that indicates whether to Skip Empty Archives | bool |


### Destination

| Name | Description | Value |
|-|-|-|
| name | Name for capture destination | string |
| properties | Properties describing the storage account, blob container and archive name format for capture destination | DestinationProperties |


### DestinationProperties

| Name | Description | Value |
|-|-|-|
| archiveNameFormat | Blob naming convention for archive, e.g. {Namespace}/{EventHub}/{PartitionId}/{Year}/{Month}/{Day}/{Hour}/{Minute}/{Second}. Here all the parameters (Namespace,EventHub .. etc) are mandatory irrespective of order | string |
| blobContainer | Blob container Name | string |
| dataLakeAccountName | The Azure Data Lake Store name for the captured events | string |
| dataLakeFolderPath | The destination folder path for the captured events | string |
| dataLakeSubscriptionId | Subscription Id of Azure Data Lake Store | string |
| storageAccountResourceId | Resource id of the storage account to be used to create the blobs | string |


### RetentionDescription

| Name | Description | Value |
|-|-|-|
| cleanupPolicy | Enumerates the possible values for cleanup policy | 'Compact''Delete' |
| retentionTimeInHours | Number of hours to retain the events for this Event Hub. This value is only used when cleanupPolicy is Delete. If cleanupPolicy is Compact the returned value of this property is Long.MaxValue | int |
| tombstoneRetentionTimeInHours | Number of hours to retain the tombstone markers of a compacted Event Hub. This value is only used when cleanupPolicy is Compact. Consumer must complete reading the tombstone marker within this specified amount of time if consumer begins from starting offset to ensure they get a valid snapshot for the specific key described by the tombstone marker within the compacted Event Hub | int |
## Microsoft.EventHub/namespaces/eventhubs/authorizationRules@2022-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventHub/namespaces/eventhubs/authorizationRules@2022-10-01-preview"
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

### namespaces/eventhubs/authorizationRules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-50Valid characters:Alphanumerics, periods, hyphens and underscores.Start and end with letter or number. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:eventhubs |
| properties | Properties supplied to create or update AuthorizationRule | AuthorizationRuleProperties |


### AuthorizationRuleProperties

| Name | Description | Value |
|-|-|-|
| rights | The rights associated with the rule. | String array containing any of:'Listen''Manage''Send' (required) |
## Microsoft.EventHub/namespaces/eventhubs/consumergroups@2022-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventHub/namespaces/eventhubs/consumergroups@2022-10-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      userMetadata = "string"
    }
  })
}

```

### namespaces/eventhubs/consumergroups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-50Valid characters:Alphanumerics, periods, hyphens and underscores.Start and end with letter or number. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:eventhubs |
| properties | Single item in List or Get Consumer group operation | ConsumerGroupProperties |


### ConsumerGroupProperties

| Name | Description | Value |
|-|-|-|
| userMetadata | User Metadata is a placeholder to store user-defined string data with maximum length 1024. e.g. it can be used to store descriptive data, such as list of teams and their contact information also user-defined configuration settings can be stored. | string |
## Microsoft.EventHub/namespaces/ipfilterrules@2018-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventHub/namespaces/ipfilterrules@2018-01-01-preview"
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
## Microsoft.EventHub/namespaces/networkRuleSets@2022-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventHub/namespaces/networkRuleSets@2022-10-01-preview"
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
| publicNetworkAccess | This determines if traffic is allowed over public network. By default it is enabled. If value is SecuredByPerimeter then Inbound and Outbound communication is controlled by the network security perimeter and profile's access rules. | 'Disabled''Enabled''SecuredByPerimeter' |
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
| ignoreMissingVnetServiceEndpoint | Value that indicates whether to ignore missing Vnet Service Endpoint | bool |
| subnet | Subnet properties | Subnet |


### Subnet

| Name | Description | Value |
|-|-|-|
| id | Resource ID of Virtual Network Subnet | string |
## Microsoft.EventHub/namespaces/privateEndpointConnections@2022-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventHub/namespaces/privateEndpointConnections@2022-10-01-preview"
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
## Microsoft.EventHub/namespaces/schemagroups@2022-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventHub/namespaces/schemagroups@2022-10-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      groupProperties = {
      schemaCompatibility = "string"
      schemaType = "string"
    }
  })
}

```

### namespaces/schemagroups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:namespaces |
| properties |  | SchemaGroupProperties |


### SchemaGroupProperties

| Name | Description | Value |
|-|-|-|
| groupProperties | dictionary object for SchemaGroup group properties | SchemaGroupProperties |
| schemaCompatibility |  | 'Backward''Forward''None' |
| schemaType |  | 'Avro''Unknown' |
## Microsoft.EventHub/namespaces/virtualnetworkrules@2018-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventHub/namespaces/virtualnetworkrules@2018-01-01-preview"
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
| virtualNetworkSubnetId | ARM ID of Virtual Network Subnet | string |
