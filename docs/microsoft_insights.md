## microsoft.insights/components/analyticsItems@2015-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "microsoft.insights/components/analyticsItems@2015-05-01"
  name = "item"
  parent_id = "string"
  body = jsonencode({
    Properties = {
      functionAlias = "string"
    }
    Scope = "string"
    Content = "string"
    Id = "string"
  })
}

```

### components/analyticsItems

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'item' |
| Scope | Enum indicating if this item definition is owned by a specific user or is shared between all users with access to the Application Insights component. | 'shared''user' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:components |
| Content | The content of this item | string |
| Id | Internally assigned unique id of the item definition. | string |
| Properties | A set of properties that can be defined in the context of a specific item type. Each type may have its own properties. | ApplicationInsightsComponentAnalyticsItemProperties |


### ApplicationInsightsComponentAnalyticsItemProperties

| Name | Description | Value |
|-|-|-|
| functionAlias | A function alias, used when the type of the item is Function | string |
## microsoft.insights/components/linkedStorageAccounts@2020-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "microsoft.insights/components/linkedStorageAccounts@2020-03-01-preview"
  name = "ServiceProfiler"
  parent_id = "string"
  body = jsonencode({
    properties = {
      linkedStorageAccount = "string"
    }
  })
}

```

### components/linkedStorageAccounts

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'ServiceProfiler' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:components |
| properties | The properties of the linked storage accounts. | LinkedStorageAccountsProperties |


### LinkedStorageAccountsProperties

| Name | Description | Value |
|-|-|-|
| linkedStorageAccount | Linked storage account resource ID | string |
## microsoft.insights/components/myanalyticsItems@2015-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "microsoft.insights/components/myanalyticsItems@2015-05-01"
  name = "item"
  parent_id = "string"
  body = jsonencode({
    Properties = {
      functionAlias = "string"
    }
    Scope = "string"
    Content = "string"
    Id = "string"
  })
}

```

### components/myanalyticsItems

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'item' |
| Scope | Enum indicating if this item definition is owned by a specific user or is shared between all users with access to the Application Insights component. | 'shared''user' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:components |
| Content | The content of this item | string |
| Id | Internally assigned unique id of the item definition. | string |
| Properties | A set of properties that can be defined in the context of a specific item type. Each type may have its own properties. | ApplicationInsightsComponentAnalyticsItemProperties |


### ApplicationInsightsComponentAnalyticsItemProperties

| Name | Description | Value |
|-|-|-|
| functionAlias | A function alias, used when the type of the item is Function | string |
## microsoft.insights/components/pricingPlans@2017-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "microsoft.insights/components/pricingPlans@2017-10-01"
  name = "current"
  parent_id = "string"
  body = jsonencode({
    properties = {
      cap = "decimal-as-string"
      planType = "string"
      stopSendNotificationWhenHitCap = bool
      stopSendNotificationWhenHitThreshold = bool
      warningThreshold = int
    }
  })
}

```

### components/pricingPlans

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'current' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:components |
| properties | The properties of the suppression. | PricingPlanProperties |


### PricingPlanProperties

| Name | Description | Value |
|-|-|-|
| cap | Daily data volume cap in GB. To specify a decimal value, use thejson()function. | int or json decimal |
| planType | Pricing Plan Type Name. | string |
| stopSendNotificationWhenHitCap | Do not send a notification email when the daily data volume cap is met. | bool |
| stopSendNotificationWhenHitThreshold | Reserved, not used for now. | bool |
| warningThreshold | Reserved, not used for now. | int |
## microsoft.insights/guestDiagnosticSettings@2018-06-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "microsoft.insights/guestDiagnosticSettings@2018-06-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      dataSources = [
        {
          configuration = {
            eventLogs = [
              {
                filter = "string"
                logName = "string"
              }
            ]
            perfCounters = [
              {
                instance = "string"
                name = "string"
                samplingPeriod = "string"
              }
            ]
            providers = [
              {
                events = [
                  {
                    filter = "string"
                    id = int
                    name = "string"
                  }
                ]
                id = "string"
              }
            ]
          }
          kind = "string"
          sinks = [
            {
              kind = "string"
            }
          ]
        }
      ]
      osType = "string"
      proxySetting = "string"
    }
  })
}

```

### guestDiagnosticSettings

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| properties | The diagnostic settings to be applied to azure resources. | GuestDiagnosticSettings(required) |


### GuestDiagnosticSettings

| Name | Description | Value |
|-|-|-|
| dataSources | the array of data source object which are configured to collect and send data | DataSource[] |
| osType | Operating system type for the configuration | 'Linux''Windows' |
| proxySetting |  | string |


### DataSource

| Name | Description | Value |
|-|-|-|
| configuration |  | DataSourceConfiguration(required) |
| kind | Datasource kind | 'ETWProviders''PerformanceCounter''WindowsEventLogs' (required) |
| sinks |  | SinkConfiguration[] (required) |


### DataSourceConfiguration

| Name | Description | Value |
|-|-|-|
| eventLogs | Windows event logs configuration. | EventLogConfiguration[] |
| perfCounters | Performance counter configuration | PerformanceCounterConfiguration[] |
| providers | ETW providers configuration | EtwProviderConfiguration[] |


### EventLogConfiguration

| Name | Description | Value |
|-|-|-|
| filter |  | string |
| logName |  | string (required) |


### PerformanceCounterConfiguration

| Name | Description | Value |
|-|-|-|
| instance |  | string |
| name |  | string (required) |
| samplingPeriod |  | string (required) |


### EtwProviderConfiguration

| Name | Description | Value |
|-|-|-|
| events |  | EtwEventConfiguration[] (required) |
| id |  | string (required) |


### EtwEventConfiguration

| Name | Description | Value |
|-|-|-|
| filter |  | string |
| id |  | int (required) |
| name |  | string (required) |


### SinkConfiguration

| Name | Description | Value |
|-|-|-|
| kind |  | 'ApplicationInsights''EventHub''LogAnalytics' (required) |
## microsoft.insights/guestDiagnosticSettingsAssociation@2018-06-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "microsoft.insights/guestDiagnosticSettingsAssociation@2018-06-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      guestDiagnosticSettingsName = "string"
    }
  })
}

```

### guestDiagnosticSettingsAssociation

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | The diagnostics settings associations of the resource. | GuestDiagnosticSettingsAssociation(required) |


### GuestDiagnosticSettingsAssociation

| Name | Description | Value |
|-|-|-|
| guestDiagnosticSettingsName | The guest diagnostic settings name. | string (required) |
## microsoft.insights/privateLinkScopes@2021-07-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "microsoft.insights/privateLinkScopes@2021-07-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      accessModeSettings = {
        exclusions = [
          {
            ingestionAccessMode = "string"
            privateEndpointConnectionName = "string"
            queryAccessMode = "string"
          }
        ]
        ingestionAccessMode = "string"
        queryAccessMode = "string"
      }
    }
  })
}

```

### privateLinkScopes

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties that define a Azure Monitor PrivateLinkScope resource. | AzureMonitorPrivateLinkScopeProperties(required) |


### AzureMonitorPrivateLinkScopeProperties

| Name | Description | Value |
|-|-|-|
| accessModeSettings | Access mode settings | AccessModeSettings(required) |


### AccessModeSettings

| Name | Description | Value |
|-|-|-|
| exclusions | List of exclusions that override the default access mode settings for specific private endpoint connections. | AccessModeSettingsExclusion[] |
| ingestionAccessMode | Specifies the default access mode of ingestion through associated private endpoints in scope. If not specified default value is 'Open'. You can override this default setting for a specific private endpoint connection by adding an exclusion in the 'exclusions' array. | 'Open''PrivateOnly' (required) |
| queryAccessMode | Specifies the default access mode of queries through associated private endpoints in scope. If not specified default value is 'Open'. You can override this default setting for a specific private endpoint connection by adding an exclusion in the 'exclusions' array. | 'Open''PrivateOnly' (required) |


### AccessModeSettingsExclusion

| Name | Description | Value |
|-|-|-|
| ingestionAccessMode | Specifies the access mode of ingestion through the specified private endpoint connection in the exclusion. | 'Open''PrivateOnly' |
| privateEndpointConnectionName | The private endpoint connection name associated to the private endpoint on which we want to apply the specific access mode settings. | string |
| queryAccessMode | Specifies the access mode of queries through the specified private endpoint connection in the exclusion. | 'Open''PrivateOnly' |
