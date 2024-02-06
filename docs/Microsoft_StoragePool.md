## Microsoft.StoragePool/diskPools@2021-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StoragePool/diskPools@2021-08-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      additionalCapabilities = [
        "string"
      ]
      availabilityZones = [
        "string"
      ]
      disks = [
        {
          id = "string"
        }
      ]
      subnetId = "string"
    }
    sku = {
      name = "string"
      tier = "string"
    }
    managedBy = "string"
    managedByExtended = [
      "string"
    ]
  })
}

```

## Microsoft.StoragePool/diskPools/iscsiTargets@2021-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StoragePool/diskPools/iscsiTargets@2021-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      aclMode = "string"
      luns = [
        {
          managedDiskAzureResourceId = "string"
          name = "string"
        }
      ]
      staticAcls = [
        {
          initiatorIqn = "string"
          mappedLuns = [
            "string"
          ]
        }
      ]
      targetIqn = "string"
    }
    managedBy = "string"
    managedByExtended = [
      "string"
    ]
  })
}

```

