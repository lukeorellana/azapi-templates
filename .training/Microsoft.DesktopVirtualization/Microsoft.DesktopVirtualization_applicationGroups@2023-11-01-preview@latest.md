```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DesktopVirtualization/applicationGroups@2023-11-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
  identity {
    type = "SystemAssigned"
  }
  body = jsonencode({
    properties = {
      applicationGroupType = "string"
      description = "string"
      friendlyName = "string"
      hostPoolArmPath = "string"
      showInFeed = bool
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
    kind = "string"
    managedBy = "string"
    plan = {
      name = "string"
      product = "string"
      promotionCode = "string"
      publisher = "string"
      version = "string"
    }
  })
}

```

### applicationGroups

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 3-64Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with letter or number. End with letter, number, or underscore. |
| location | The geo-location where the resource lives | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku |  | ResourceModelWithAllowedPropertySetSku |
| kind | Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value. | stringConstraints:Pattern =^[-\w\._,\(\)]+$ |
| identity |  | ResourceModelWithAllowedPropertySetIdentity |
| managedBy | The fully qualified resource ID of the resource that manages this resource. Indicates if this resource is managed by another Azure resource. If this is present, complete mode deployment will not delete the resource if it is removed from the template since it is managed by another resource. | string |
| plan |  | ResourceModelWithAllowedPropertySetPlan |
| properties | Detailed properties for ApplicationGroup | ApplicationGroupProperties(required) |


### ResourceModelWithAllowedPropertySetIdentity

| Name | Description | Value |
|-|-|-|
| type | The identity type. | 'SystemAssigned' |


### ResourceModelWithAllowedPropertySetPlan

| Name | Description | Value |
|-|-|-|
| name | A user defined name of the 3rd Party Artifact that is being procured. | string (required) |
| product | The 3rd Party artifact that is being procured. E.g. NewRelic. Product maps to the OfferID specified for the artifact at the time of Data Market onboarding. | string (required) |
| promotionCode | A publisher provided promotion code as provisioned in Data Market for the said product/artifact. | string |
| publisher | The publisher of the 3rd Party Artifact that is being bought. E.g. NewRelic | string (required) |
| version | The version of the desired product/artifact. | string |


### ApplicationGroupProperties

| Name | Description | Value |
|-|-|-|
| applicationGroupType | Resource Type of ApplicationGroup. | 'Desktop''RemoteApp' (required) |
| description | Description of ApplicationGroup. | string |
| friendlyName | Friendly name of ApplicationGroup. | string |
| hostPoolArmPath | HostPool arm path of ApplicationGroup. | string (required) |
| showInFeed | Boolean representing whether the applicationGroup is show in the feed. | bool |


### ResourceModelWithAllowedPropertySetSku

| Name | Description | Value |
|-|-|-|
| capacity | If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. | int |
| family | If the service has different generations of hardware, for the same SKU, then that can be captured here. | string |
| name | The name of the SKU. Ex - P3. It is typically a letter+number code | string (required) |
| size | The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. | string |
| tier | This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. | 'Basic''Free''Premium''Standard' |


