```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/elasticPools@2022-05-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      highAvailabilityReplicaCount = int
      licenseType = "string"
      maintenanceConfigurationId = "string"
      maxSizeBytes = int
      minCapacity = int
      perDatabaseSettings = {
        maxCapacity = int
        minCapacity = int
      }
      zoneRedundant = bool
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

### servers/elasticPools

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-128Valid characters:Can't use:<>*%&:\/?or control charactersCan't end with period or space. |
| location | Resource location. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | The elastic pool SKU.The list of SKUs may vary by region and support offer. To determine the SKUs (including the SKU name, tier/edition, family, and capacity) that are available to your subscription in an Azure region, use theCapabilities_ListByLocationREST API or the following command:Azure CLI:az sql elastic-pool list-editions -l {location} -o table | Sku |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:servers |
| properties | Resource properties. | ElasticPoolProperties |


### ElasticPoolProperties

| Name | Description | Value |
|-|-|-|
| highAvailabilityReplicaCount | The number of secondary replicas associated with the elastic pool that are used to provide high availability. Applicable only to Hyperscale elastic pools. | int |
| licenseType | The license type to apply for this elastic pool. | 'BasePrice''LicenseIncluded' |
| maintenanceConfigurationId | Maintenance configuration id assigned to the elastic pool. This configuration defines the period when the maintenance updates will will occur. | string |
| maxSizeBytes | The storage limit for the database elastic pool in bytes. | int |
| minCapacity | Minimal capacity that serverless pool will not shrink below, if not paused | int |
| perDatabaseSettings | The per database settings for the elastic pool. | ElasticPoolPerDatabaseSettings |
| zoneRedundant | Whether or not this elastic pool is zone redundant, which means the replicas of this elastic pool will be spread across multiple availability zones. | bool |


### ElasticPoolPerDatabaseSettings

| Name | Description | Value |
|-|-|-|
| maxCapacity | The maximum capacity any one database can consume. | int |
| minCapacity | The minimum capacity all databases are guaranteed. | int |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | Capacity of the particular SKU. | int |
| family | If the service has different generations of hardware, for the same SKU, then that can be captured here. | string |
| name | The name of the SKU, typically, a letter + Number code, e.g. P3. | string (required) |
| size | Size of the particular SKU | string |
| tier | The tier or edition of the particular SKU, e.g. Basic, Premium. | string |


