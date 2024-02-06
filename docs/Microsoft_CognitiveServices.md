## Microsoft.CognitiveServices/accounts@2023-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CognitiveServices/accounts@2023-05-01"
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
      apiProperties = {
        aadClientId = "string"
        aadTenantId = "string"
        eventHubConnectionString = "string"
        qnaAzureSearchEndpointId = "string"
        qnaAzureSearchEndpointKey = "string"
        qnaRuntimeEndpoint = "string"
        statisticsEnabled = bool
        storageAccountConnectionString = "string"
        superUser = "string"
        websiteName = "string"
      }
      customSubDomainName = "string"
      disableLocalAuth = bool
      dynamicThrottlingEnabled = bool
      encryption = {
        keySource = "string"
        keyVaultProperties = {
          identityClientId = "string"
          keyName = "string"
          keyVaultUri = "string"
          keyVersion = "string"
        }
      }
      locations = {
        regions = [
          {
            customsubdomain = "string"
            name = "string"
            value = int
          }
        ]
        routingMethod = "string"
      }
      migrationToken = "string"
      networkAcls = {
        defaultAction = "string"
        ipRules = [
          {
            value = "string"
          }
        ]
        virtualNetworkRules = [
          {
            id = "string"
            ignoreMissingVnetServiceEndpoint = bool
            state = "string"
          }
        ]
      }
      publicNetworkAccess = "string"
      restore = bool
      restrictOutboundNetworkAccess = bool
      userOwnedStorage = [
        {
          identityClientId = "string"
          resourceId = "string"
        }
      ]
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
    kind = "string"
  })
}

```

### accounts

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 2-64Valid characters:Alphanumerics and hyphens.Start and end with alphanumeric. |
| location | The geo-location where the resource lives | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | The resource model definition representing SKU | Sku |
| kind | The Kind of the resource. | string |
| identity | Identity for the resource. | Identity |
| properties | Properties of Cognitive Services account. | AccountProperties |


### Identity

| Name | Description | Value |
|-|-|-|
| type | The identity type. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' |
| userAssignedIdentities | The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName} | object |


### AccountProperties

| Name | Description | Value |
|-|-|-|
| allowedFqdnList |  | string[] |
| apiProperties | The api properties for special APIs. | ApiProperties |
| customSubDomainName | Optional subdomain name used for token-based authentication. | string |
| disableLocalAuth |  | bool |
| dynamicThrottlingEnabled | The flag to enable dynamic throttling. | bool |
| encryption | The encryption properties for this resource. | Encryption |
| locations | The multiregion settings of Cognitive Services account. | MultiRegionSettings |
| migrationToken | Resource migration token. | string |
| networkAcls | A collection of rules governing the accessibility from specific network locations. | NetworkRuleSet |
| publicNetworkAccess | Whether or not public endpoint access is allowed for this account. | 'Disabled''Enabled' |
| restore |  | bool |
| restrictOutboundNetworkAccess |  | bool |
| userOwnedStorage | The storage accounts for this resource. | UserOwnedStorage[] |


### ApiProperties

| Name | Description | Value |
|-|-|-|
| aadClientId | (Metrics Advisor Only) The Azure AD Client Id (Application Id). | string |
| aadTenantId | (Metrics Advisor Only) The Azure AD Tenant Id. | string |
| eventHubConnectionString | (Personalization Only) The flag to enable statistics of Bing Search. | string |
| qnaAzureSearchEndpointId | (QnAMaker Only) The Azure Search endpoint id of QnAMaker. | string |
| qnaAzureSearchEndpointKey | (QnAMaker Only) The Azure Search endpoint key of QnAMaker. | string |
| qnaRuntimeEndpoint | (QnAMaker Only) The runtime endpoint of QnAMaker. | string |
| statisticsEnabled | (Bing Search Only) The flag to enable statistics of Bing Search. | bool |
| storageAccountConnectionString | (Personalization Only) The storage account connection string. | string |
| superUser | (Metrics Advisor Only) The super user of Metrics Advisor. | string |
| websiteName | (Metrics Advisor Only) The website name of Metrics Advisor. | string |


### Encryption

| Name | Description | Value |
|-|-|-|
| keySource | Enumerates the possible value of keySource for Encryption | 'Microsoft.CognitiveServices''Microsoft.KeyVault' |
| keyVaultProperties | Properties of KeyVault | KeyVaultProperties |


### KeyVaultProperties

| Name | Description | Value |
|-|-|-|
| identityClientId |  | string |
| keyName | Name of the Key from KeyVault | string |
| keyVaultUri | Uri of KeyVault | string |
| keyVersion | Version of the Key from KeyVault | string |


### MultiRegionSettings

| Name | Description | Value |
|-|-|-|
| regions |  | RegionSetting[] |
| routingMethod | Multiregion routing methods. | 'Performance''Priority''Weighted' |


### RegionSetting

| Name | Description | Value |
|-|-|-|
| customsubdomain | Maps the region to the regional custom subdomain. | string |
| name | Name of the region. | string |
| value | A value for priority or weighted routing methods. | int |


### NetworkRuleSet

| Name | Description | Value |
|-|-|-|
| defaultAction | The default action when no rule from ipRules and from virtualNetworkRules match. This is only used after the bypass property has been evaluated. | 'Allow''Deny' |
| ipRules | The list of IP address rules. | IpRule[] |
| virtualNetworkRules | The list of virtual network rules. | VirtualNetworkRule[] |


### IpRule

| Name | Description | Value |
|-|-|-|
| value | An IPv4 address range in CIDR notation, such as '124.56.78.91' (simple IP address) or '124.56.78.0/24' (all addresses that start with 124.56.78). | string (required) |


### VirtualNetworkRule

| Name | Description | Value |
|-|-|-|
| id | Full resource id of a vnet subnet, such as '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/subnet1'. | string (required) |
| ignoreMissingVnetServiceEndpoint | Ignore missing vnet service endpoint or not. | bool |
| state | Gets the state of virtual network rule. | string |


### UserOwnedStorage

| Name | Description | Value |
|-|-|-|
| identityClientId |  | string |
| resourceId | Full resource id of a Microsoft.Storage resource. | string |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. | int |
| family | If the service has different generations of hardware, for the same SKU, then that can be captured here. | string |
| name | The name of the SKU. Ex - P3. It is typically a letter+number code | string (required) |
| size | The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. | string |
| tier | This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. | 'Basic''Enterprise''Free''Premium''Standard' |
## Microsoft.CognitiveServices/accounts/commitmentPlans@2023-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CognitiveServices/accounts/commitmentPlans@2023-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      autoRenew = bool
      commitmentPlanGuid = "string"
      current = {
        count = int
        tier = "string"
      }
      hostingModel = "string"
      next = {
        count = int
        tier = "string"
      }
      planType = "string"
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
    kind = "string"
  })
}

```

### accounts/commitmentPlans

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | The resource model definition representing SKU | Sku |
| kind | The Kind of the resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:accounts |
| properties | Properties of Cognitive Services account commitment plan. | CommitmentPlanProperties |


### CommitmentPlanProperties

| Name | Description | Value |
|-|-|-|
| autoRenew | AutoRenew commitment plan. | bool |
| commitmentPlanGuid | Commitment plan guid. | string |
| current | Cognitive Services account commitment period. | CommitmentPeriod |
| hostingModel | Account hosting model. | 'ConnectedContainer''DisconnectedContainer''ProvisionedWeb''Web' |
| next | Cognitive Services account commitment period. | CommitmentPeriod |
| planType | Commitment plan type. | string |


### CommitmentPeriod

| Name | Description | Value |
|-|-|-|
| count | Commitment period commitment count. | int |
| tier | Commitment period commitment tier. | string |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. | int |
| family | If the service has different generations of hardware, for the same SKU, then that can be captured here. | string |
| name | The name of the SKU. Ex - P3. It is typically a letter+number code | string (required) |
| size | The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. | string |
| tier | This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. | 'Basic''Enterprise''Free''Premium''Standard' |
## Microsoft.CognitiveServices/accounts/deployments@2023-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CognitiveServices/accounts/deployments@2023-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      model = {
        format = "string"
        name = "string"
        source = "string"
        version = "string"
      }
      raiPolicyName = "string"
      scaleSettings = {
        capacity = int
        scaleType = "string"
      }
      versionUpgradeOption = "string"
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
  })
}

```

### accounts/deployments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| sku | The resource model definition representing SKU | Sku |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:accounts |
| properties | Properties of Cognitive Services account deployment. | DeploymentProperties |


### DeploymentProperties

| Name | Description | Value |
|-|-|-|
| model | Properties of Cognitive Services account deployment model. | DeploymentModel |
| raiPolicyName | The name of RAI policy. | string |
| scaleSettings | Properties of Cognitive Services account deployment model. | DeploymentScaleSettings |
| versionUpgradeOption | Deployment model version upgrade option. | 'NoAutoUpgrade''OnceCurrentVersionExpired''OnceNewDefaultVersionAvailable' |


### DeploymentModel

| Name | Description | Value |
|-|-|-|
| format | Deployment model format. | string |
| name | Deployment model name. | string |
| source | Optional. Deployment model source ARM resource ID. | string |
| version | Optional. Deployment model version. If version is not specified, a default version will be assigned. The default version is different for different models and might change when there is new version available for a model. Default version for a model could be found from list models API. | string |


### DeploymentScaleSettings

| Name | Description | Value |
|-|-|-|
| capacity | Deployment capacity. | int |
| scaleType | Deployment scale type. | 'Manual''Standard' |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. | int |
| family | If the service has different generations of hardware, for the same SKU, then that can be captured here. | string |
| name | The name of the SKU. Ex - P3. It is typically a letter+number code | string (required) |
| size | The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. | string |
| tier | This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. | 'Basic''Enterprise''Free''Premium''Standard' |
## Microsoft.CognitiveServices/accounts/privateEndpointConnections@2023-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CognitiveServices/accounts/privateEndpointConnections@2023-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      groupIds = [
        "string"
      ]
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

### accounts/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the private endpoint connection | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:accounts |
| properties | Resource properties. | PrivateEndpointConnectionProperties |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| groupIds | The private link resource group ids. | string[] |
| privateEndpoint | The resource of private end point. | PrivateEndpoint |
| privateLinkServiceConnectionState | A collection of information about the state of the connection between service consumer and provider. | PrivateLinkServiceConnectionState(required) |


### PrivateLinkServiceConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | A message indicating if changes on the service provider require any updates on the consumer. | string |
| description | The reason for approval/rejection of the connection. | string |
| status | Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service. | 'Approved''Pending''Rejected' |
## Microsoft.CognitiveServices/commitmentPlans@2023-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CognitiveServices/commitmentPlans@2023-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      autoRenew = bool
      commitmentPlanGuid = "string"
      current = {
        count = int
        tier = "string"
      }
      hostingModel = "string"
      next = {
        count = int
        tier = "string"
      }
      planType = "string"
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
    kind = "string"
  })
}

```

### commitmentPlans

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | The resource model definition representing SKU | Sku |
| kind | The Kind of the resource. | string |
| properties | Properties of Cognitive Services account commitment plan. | CommitmentPlanProperties |


### CommitmentPlanProperties

| Name | Description | Value |
|-|-|-|
| autoRenew | AutoRenew commitment plan. | bool |
| commitmentPlanGuid | Commitment plan guid. | string |
| current | Cognitive Services account commitment period. | CommitmentPeriod |
| hostingModel | Account hosting model. | 'ConnectedContainer''DisconnectedContainer''ProvisionedWeb''Web' |
| next | Cognitive Services account commitment period. | CommitmentPeriod |
| planType | Commitment plan type. | string |


### CommitmentPeriod

| Name | Description | Value |
|-|-|-|
| count | Commitment period commitment count. | int |
| tier | Commitment period commitment tier. | string |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. | int |
| family | If the service has different generations of hardware, for the same SKU, then that can be captured here. | string |
| name | The name of the SKU. Ex - P3. It is typically a letter+number code | string (required) |
| size | The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. | string |
| tier | This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. | 'Basic''Enterprise''Free''Premium''Standard' |
## Microsoft.CognitiveServices/commitmentPlans/accountAssociations@2023-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CognitiveServices/commitmentPlans/accountAssociations@2023-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      accountId = "string"
    }
  })
}

```

### commitmentPlans/accountAssociations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:commitmentPlans |
| properties | Properties of Cognitive Services account commitment plan association. | CommitmentPlanAccountAssociationProperties |


### CommitmentPlanAccountAssociationProperties

| Name | Description | Value |
|-|-|-|
| accountId | The Azure resource id of the account. | string |
