## Microsoft.DevCenter/devcenters@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevCenter/devcenters@2023-04-01"
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
    properties = {}
  })
}

```

### devcenters

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| identity | Managed identity properties | ManagedServiceIdentity |
| properties | DevCenter properties | DevCenterProperties |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' (required) |
| userAssignedIdentities | The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. | object |
## Microsoft.DevCenter/devcenters/attachednetworks@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevCenter/devcenters/attachednetworks@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      networkConnectionId = "string"
    }
  })
}

```

### devcenters/attachednetworks

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:devcenters |
| properties | Attached NetworkConnection properties. | AttachedNetworkConnectionProperties |


### AttachedNetworkConnectionProperties

| Name | Description | Value |
|-|-|-|
| networkConnectionId | The resource ID of the NetworkConnection you want to attach. | string (required) |
## Microsoft.DevCenter/devcenters/catalogs@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevCenter/devcenters/catalogs@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      adoGit = {
        branch = "string"
        path = "string"
        secretIdentifier = "string"
        uri = "string"
      }
      gitHub = {
        branch = "string"
        path = "string"
        secretIdentifier = "string"
        uri = "string"
      }
    }
  })
}

```

### devcenters/catalogs

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:devcenters |
| properties | Catalog properties. | CatalogProperties |


### CatalogProperties

| Name | Description | Value |
|-|-|-|
| adoGit | Properties for an Azure DevOps catalog type. | GitCatalog |
| gitHub | Properties for a GitHub catalog type. | GitCatalog |


### GitCatalog

| Name | Description | Value |
|-|-|-|
| branch | Git branch. | string |
| path | The folder where the catalog items can be found inside the repository. | string |
| secretIdentifier | A reference to the Key Vault secret containing a security token to authenticate to a Git repository. | string |
| uri | Git URI. | string |
## Microsoft.DevCenter/devcenters/devboxdefinitions@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevCenter/devcenters/devboxdefinitions@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      hibernateSupport = "string"
      imageReference = {
        id = "string"
      }
      osStorageType = "string"
      sku = {
        capacity = int
        family = "string"
        name = "string"
        size = "string"
        tier = "string"
      }
    }
  })
}

```

### devcenters/devboxdefinitions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:devcenters |
| properties | Dev Box definition properties | DevBoxDefinitionProperties |


### DevBoxDefinitionProperties

| Name | Description | Value |
|-|-|-|
| hibernateSupport | Indicates whether Dev Boxes created with this definition are capable of hibernation. Not all images are capable of supporting hibernation. To find out more seehttps://aka.ms/devbox/hibernate | 'Disabled''Enabled' |
| imageReference | Image reference information. | ImageReference |
| osStorageType | The storage type used for the Operating System disk of Dev Boxes created using this definition. | string |
| sku | The SKU for Dev Boxes created using this definition. | Sku |


### ImageReference

| Name | Description | Value |
|-|-|-|
| id | Image ID, or Image version ID. When Image ID is provided, its latest version will be used. | string |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. | int |
| family | If the service has different generations of hardware, for the same SKU, then that can be captured here. | string |
| name | The name of the SKU. Ex - P3. It is typically a letter+number code | string (required) |
| size | The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. | string |
| tier | This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. | 'Basic''Free''Premium''Standard' |
## Microsoft.DevCenter/devcenters/environmentTypes@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevCenter/devcenters/environmentTypes@2023-04-01"
  name = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {}
  })
}

```

### devcenters/environmentTypes

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:devcenters |
| properties | Properties of an environment type. | EnvironmentTypeProperties |
## Microsoft.DevCenter/devcenters/galleries@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevCenter/devcenters/galleries@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      galleryResourceId = "string"
    }
  })
}

```

### devcenters/galleries

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:devcenters |
| properties | Gallery properties. | GalleryProperties |


### GalleryProperties

| Name | Description | Value |
|-|-|-|
| galleryResourceId | The resource ID of the backing Azure Compute Gallery. | string (required) |
## Microsoft.DevCenter/networkConnections@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevCenter/networkConnections@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      domainJoinType = "string"
      domainName = "string"
      domainPassword = "string"
      domainUsername = "string"
      networkingResourceGroupName = "string"
      organizationUnit = "string"
      subnetId = "string"
    }
  })
}

```

### networkConnections

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of a Network Connection | NetworkProperties |


### NetworkProperties

| Name | Description | Value |
|-|-|-|
| domainJoinType | AAD Join type. | 'AzureADJoin''HybridAzureADJoin' (required) |
| domainName | Active Directory domain name | string |
| domainPassword | The password for the account used to join domain | string |
| domainUsername | The username of an Active Directory account (user or service account) that has permissions to create computer objects in Active Directory. Required format: admin@contoso.com. | string |
| networkingResourceGroupName | The name for resource group where NICs will be placed. | string |
| organizationUnit | Active Directory domain Organization Unit (OU) | string |
| subnetId | The subnet to attach Virtual Machines to | string |
## Microsoft.DevCenter/projects@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevCenter/projects@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      description = "string"
      devCenterId = "string"
      maxDevBoxesPerUser = int
    }
  })
}

```

### projects

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of a project. | ProjectProperties |


### ProjectProperties

| Name | Description | Value |
|-|-|-|
| description | Description of the project. | string |
| devCenterId | Resource Id of an associated DevCenter | string |
| maxDevBoxesPerUser | When specified, limits the maximum number of Dev Boxes a single user can create across all pools in the project. This will have no effect on existing Dev Boxes when reduced. | int |
## Microsoft.DevCenter/projects/environmentTypes@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevCenter/projects/environmentTypes@2023-04-01"
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
      creatorRoleAssignment = {
        roles = {}
      }
      deploymentTargetId = "string"
      status = "string"
      userRoleAssignments = {}
    }
  })
}

```

### projects/environmentTypes

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location for the environment type | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:projects |
| identity | Managed identity properties | ManagedServiceIdentity |
| properties | Properties of an environment type. | ProjectEnvironmentTypeProperties |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' (required) |
| userAssignedIdentities | The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. | object |


### ProjectEnvironmentTypeProperties

| Name | Description | Value |
|-|-|-|
| creatorRoleAssignment | The role definition assigned to the environment creator on backing resources. | ProjectEnvironmentTypeUpdatePropertiesCreatorRoleAss... |
| deploymentTargetId | Id of a subscription that the environment type will be mapped to. The environment's resources will be deployed into this subscription. | string |
| status | Defines whether this Environment Type can be used in this Project. | 'Disabled''Enabled' |
| userRoleAssignments | Role Assignments created on environment backing resources. This is a mapping from a user object ID to an object of role definition IDs. | object |


### ProjectEnvironmentTypeUpdatePropertiesCreatorRoleAss...

| Name | Description | Value |
|-|-|-|
| roles | A map of roles to assign to the environment creator. | object |
## Microsoft.DevCenter/projects/pools@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevCenter/projects/pools@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      devBoxDefinitionName = "string"
      licenseType = "Windows_Client"
      localAdministrator = "string"
      networkConnectionName = "string"
      stopOnDisconnect = {
        gracePeriodMinutes = int
        status = "string"
      }
    }
  })
}

```

### projects/pools

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:projects |
| properties | Pool properties | PoolProperties |


### PoolProperties

| Name | Description | Value |
|-|-|-|
| devBoxDefinitionName | Name of a Dev Box definition in parent Project of this Pool | string |
| licenseType | Specifies the license type indicating the caller has already acquired licenses for the Dev Boxes that will be created. | 'Windows_Client' |
| localAdministrator | Indicates whether owners of Dev Boxes in this pool are added as local administrators on the Dev Box. | 'Disabled''Enabled' |
| networkConnectionName | Name of a Network Connection in parent Project of this Pool | string |
| stopOnDisconnect | Stop on disconnect configuration settings for Dev Boxes created in this pool. | StopOnDisconnectConfiguration |


### StopOnDisconnectConfiguration

| Name | Description | Value |
|-|-|-|
| gracePeriodMinutes | The specified time in minutes to wait before stopping a Dev Box once disconnect is detected. | int |
| status | Whether the feature to stop the Dev Box on disconnect once the grace period has lapsed is enabled. | 'Disabled''Enabled' |
## Microsoft.DevCenter/projects/pools/schedules@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevCenter/projects/pools/schedules@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      frequency = "Daily"
      state = "string"
      time = "string"
      timeZone = "string"
      type = "StopDevBox"
    }
  })
}

```

### projects/pools/schedules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:pools |
| properties | Properties of a Schedule resource | ScheduleProperties |


### ScheduleProperties

| Name | Description | Value |
|-|-|-|
| frequency | The frequency of this scheduled task. | 'Daily' |
| state | Indicates whether or not this scheduled task is enabled. | 'Disabled''Enabled' |
| time | The target time to trigger the action. The format is HH:MM. | string |
| timeZone | The IANA timezone id at which the schedule should execute. | string |
| type | Supported type this scheduled task represents. | 'StopDevBox' |
