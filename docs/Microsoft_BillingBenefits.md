## Microsoft.BillingBenefits/reservationOrderAliases@2022-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.BillingBenefits/reservationOrderAliases@2022-11-01"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      appliedScopeProperties = {
        displayName = "string"
        managementGroupId = "string"
        resourceGroupId = "string"
        subscriptionId = "string"
        tenantId = "string"
      }
      appliedScopeType = "string"
      billingPlan = "P1M"
      billingScopeId = "string"
      displayName = "string"
      quantity = int
      renew = bool
      reservedResourceProperties = {
        instanceFlexibility = "string"
      }
      reservedResourceType = "string"
      reviewDateTime = "string"
      term = "string"
    }
    sku = {
      name = "string"
    }
  })
}

```

### reservationOrderAliases

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The Azure Region where the reservation benefits are applied to. | string |
| sku | Reservation order SKU | Sku(required) |
| properties | Reservation order alias request properties | ReservationOrderAliasRequestPropertiesOrReservationO... |


### ReservationOrderAliasRequestPropertiesOrReservationO...

| Name | Description | Value |
|-|-|-|
| appliedScopeProperties | Properties specific to applied scope type. Not required if not applicable. | AppliedScopeProperties |
| appliedScopeType | Type of the Applied Scope. | 'ManagementGroup''Shared''Single' |
| billingPlan | Represents the billing plan in ISO 8601 format. Required only for monthly billing plans. | 'P1M' |
| billingScopeId | Subscription that will be charged for purchasing the benefit | string |
| displayName | Display name | string |
| quantity | Total Quantity of the SKUs purchased in the Reservation. | int |
| renew | Setting this to true will automatically purchase a new benefit on the expiration date time. | bool |
| reservedResourceProperties | Properties specific to each reserved resource type. Not required if not applicable. | ReservationOrderAliasRequestPropertiesReservedResour... |
| reservedResourceType | The type of the resource that is being reserved. | 'AVS''AppService''AzureDataExplorer''AzureFiles''BlockBlob''CosmosDb''DataFactory''Databricks''DedicatedHost''ManagedDisk''MariaDb''MySql''NetAppStorage''PostgreSql''RedHat''RedHatOsa''RedisCache''SapHana''SqlAzureHybridBenefit''SqlDataWarehouse''SqlDatabases''SqlEdge''SuseLinux''VMwareCloudSimple''VirtualMachineSoftware''VirtualMachines' |
| reviewDateTime | This is the date-time when the Azure Hybrid Benefit needs to be reviewed. | string |
| term | Represent benefit term in ISO 8601 format. | 'P1Y''P3Y''P5Y' |


### AppliedScopeProperties

| Name | Description | Value |
|-|-|-|
| displayName | Display name | string |
| managementGroupId | Fully-qualified identifier of the management group where the benefit must be applied. | string |
| resourceGroupId | Fully-qualified identifier of the resource group. | string |
| subscriptionId | Fully-qualified identifier of the subscription. | string |
| tenantId | Tenant ID where the benefit is applied. | string |


### ReservationOrderAliasRequestPropertiesReservedResour...

| Name | Description | Value |
|-|-|-|
| instanceFlexibility | Turning this on will apply the reservation discount to other VMs in the same VM size group. | 'Off''On' |


### Sku

| Name | Description | Value |
|-|-|-|
| name | Name of the SKU to be applied | string |
## Microsoft.BillingBenefits/savingsPlanOrderAliases@2022-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.BillingBenefits/savingsPlanOrderAliases@2022-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      appliedScopeProperties = {
        displayName = "string"
        managementGroupId = "string"
        resourceGroupId = "string"
        subscriptionId = "string"
        tenantId = "string"
      }
      appliedScopeType = "string"
      billingPlan = "P1M"
      billingScopeId = "string"
      commitment = {
        amount = int
        currencyCode = "string"
        grain = "Hourly"
      }
      displayName = "string"
      term = "string"
    }
    sku = {
      name = "string"
    }
    kind = "string"
  })
}

```

### savingsPlanOrderAliases

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| sku | Savings plan SKU | Sku(required) |
| kind | Resource provider kind | string |
| properties | Savings plan order alias properties | SavingsPlanOrderAliasProperties |


### SavingsPlanOrderAliasProperties

| Name | Description | Value |
|-|-|-|
| appliedScopeProperties | Properties specific to applied scope type. Not required if not applicable. | AppliedScopeProperties |
| appliedScopeType | Type of the Applied Scope. | 'ManagementGroup''Shared''Single' |
| billingPlan | Represents the billing plan in ISO 8601 format. Required only for monthly billing plans. | 'P1M' |
| billingScopeId | Subscription that will be charged for purchasing the benefit | string |
| commitment | Commitment towards the benefit. | Commitment |
| displayName | Display name | string |
| term | Represent benefit term in ISO 8601 format. | 'P1Y''P3Y''P5Y' |


### AppliedScopeProperties

| Name | Description | Value |
|-|-|-|
| displayName | Display name | string |
| managementGroupId | Fully-qualified identifier of the management group where the benefit must be applied. | string |
| resourceGroupId | Fully-qualified identifier of the resource group. | string |
| subscriptionId | Fully-qualified identifier of the subscription. | string |
| tenantId | Tenant ID where the benefit is applied. | string |


### Commitment

| Name | Description | Value |
|-|-|-|
| amount |  | int |
| currencyCode | The ISO 4217 3-letter currency code for the currency used by this purchase record. | string |
| grain | Commitment grain. | 'Hourly' |


### Sku

| Name | Description | Value |
|-|-|-|
| name | Name of the SKU to be applied | string |
