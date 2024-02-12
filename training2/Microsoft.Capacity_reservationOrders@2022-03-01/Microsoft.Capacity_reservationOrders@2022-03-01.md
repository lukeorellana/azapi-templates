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


