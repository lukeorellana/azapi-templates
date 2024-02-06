## Microsoft.Capacity/reservationOrders@2022-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Capacity/reservationOrders@2022-03-01"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      appliedScopes = [
        "string"
      ]
      appliedScopeType = "string"
      billingPlan = "string"
      billingScopeId = "string"
      displayName = "string"
      quantity = int
      renew = bool
      reservedResourceProperties = {
        instanceFlexibility = "string"
      }
      reservedResourceType = "string"
      term = "string"
    }
    sku = {
      name = "string"
    }
  })
}

```

### reservationOrders

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The Azure Region where the reserved resource lives. | string |
| sku |  | SkuName |
| properties |  | PurchaseRequestPropertiesOrReservationOrderPropertie... |


### PurchaseRequestPropertiesOrReservationOrderPropertie...

| Name | Description | Value |
|-|-|-|
| appliedScopes | List of the subscriptions that the benefit will be applied. Do not specify if AppliedScopeType is Shared. | string[] |
| appliedScopeType | Type of the Applied Scope. | 'Shared''Single' |
| billingPlan | Represent the billing plans. | 'Monthly''Upfront' |
| billingScopeId | Subscription that will be charged for purchasing Reservation | string |
| displayName | Friendly name of the Reservation | string |
| quantity | Quantity of the SKUs that are part of the Reservation. | int |
| renew | Setting this to true will automatically purchase a new reservation on the expiration date time. | bool |
| reservedResourceProperties | Properties specific to each reserved resource type. Not required if not applicable. | PurchaseRequestPropertiesReservedResourceProperties |
| reservedResourceType | The type of the resource that is being reserved. | 'AVS''AppService''AzureDataExplorer''AzureFiles''BlockBlob''CosmosDb''DataFactory''Databricks''DedicatedHost''ManagedDisk''MariaDb''MySql''NetAppStorage''PostgreSql''RedHat''RedHatOsa''RedisCache''SapHana''SqlAzureHybridBenefit''SqlDataWarehouse''SqlDatabases''SqlEdge''SuseLinux''VMwareCloudSimple''VirtualMachineSoftware''VirtualMachines' |
| term | Represent the term of Reservation. | 'P1Y''P3Y''P5Y' |


### PurchaseRequestPropertiesReservedResourceProperties

| Name | Description | Value |
|-|-|-|
| instanceFlexibility | Turning this on will apply the reservation discount to other VMs in the same VM size group. Only specify for VirtualMachines reserved resource type. | 'Off''On' |


### SkuName

| Name | Description | Value |
|-|-|-|
| name |  | string |
## Microsoft.Capacity/resourceProviders/locations/serviceLimits@2020-10-25

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Capacity/resourceProviders/locations/serviceLimits@2020-10-25"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      limit = int
      name = {
        value = "string"
      }
      resourceType = "string"
      unit = "string"
    }
  })
}

```

### resourceProviders/locations/serviceLimits

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: locations |
| properties | Quota properties for the resource. | QuotaProperties |


### QuotaProperties

| Name | Description | Value |
|-|-|-|
| limit | Quota properties. | int |
| name | Name of the resource provide by the resource provider. Use this property for quotaRequests resource operations. | ResourceName |
| properties | Additional properties for the specified resource provider. | For Bicep, you can use theany()function. |
| resourceType | The name of the resource type. | 'dedicated''lowPriority''serviceSpecific''shared''standard' |
| unit | The limit units, such ascountandbytes. Use the unit field provided in the response of the GET quota operation. | string |


### ResourceName

| Name | Description | Value |
|-|-|-|
| value | Resource name. | string |
