```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.KubernetesConfiguration/extensions@2022-11-01"
  name = "string"
  parent_id = "string"
  identity {
    type = "SystemAssigned"
  }
  body = jsonencode({
    properties = {
      aksAssignedIdentity = {
        type = "string"
      }
      autoUpgradeMinorVersion = bool
      configurationProtectedSettings = {}
      configurationSettings = {}
      extensionType = "string"
      releaseTrain = "string"
      scope = {
        cluster = {
          releaseNamespace = "string"
        }
        namespace = {
          targetNamespace = "string"
        }
      }
      statuses = [
        {
          code = "string"
          displayStatus = "string"
          level = "string"
          message = "string"
          time = "string"
        }
      ]
      version = "string"
    }
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

### extensions

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| identity | Identity of the Extension resource | Identity |
| plan | The plan information. | Plan |
| properties | Properties of an Extension resource | ExtensionProperties |


### Identity

| Name | Description | Value |
|-|-|-|
| type | The identity type. | 'SystemAssigned' |


### Plan

| Name | Description | Value |
|-|-|-|
| name | A user defined name of the 3rd Party Artifact that is being procured. | string (required) |
| product | The 3rd Party artifact that is being procured. E.g. NewRelic. Product maps to the OfferID specified for the artifact at the time of Data Market onboarding. | string (required) |
| promotionCode | A publisher provided promotion code as provisioned in Data Market for the said product/artifact. | string |
| publisher | The publisher of the 3rd Party Artifact that is being bought. E.g. NewRelic | string (required) |
| version | The version of the desired product/artifact. | string |


### ExtensionProperties

| Name | Description | Value |
|-|-|-|
| aksAssignedIdentity | Identity of the Extension resource in an AKS cluster | ExtensionPropertiesAksAssignedIdentity |
| autoUpgradeMinorVersion | Flag to note if this extension participates in auto upgrade of minor version, or not. | bool |
| configurationProtectedSettings | Configuration settings that are sensitive, as name-value pairs for configuring this extension. | object |
| configurationSettings | Configuration settings, as name-value pairs for configuring this extension. | object |
| extensionType | Type of the Extension, of which this resource is an instance of.  It must be one of the Extension Types registered with Microsoft.KubernetesConfiguration by the Extension publisher. | string |
| releaseTrain | ReleaseTrain this extension participates in for auto-upgrade (e.g. Stable, Preview, etc.) - only if autoUpgradeMinorVersion is 'true'. | string |
| scope | Scope at which the extension is installed. | Scope |
| statuses | Status from this extension. | ExtensionStatus[] |
| version | User-specified version of the extension for this extension to 'pin'. To use 'version', autoUpgradeMinorVersion must be 'false'. | string |


### ExtensionPropertiesAksAssignedIdentity

| Name | Description | Value |
|-|-|-|
| type | The identity type. | 'SystemAssigned''UserAssigned' |


### Scope

| Name | Description | Value |
|-|-|-|
| cluster | Specifies that the scope of the extension is Cluster | ScopeCluster |
| namespace | Specifies that the scope of the extension is Namespace | ScopeNamespace |


### ScopeCluster

| Name | Description | Value |
|-|-|-|
| releaseNamespace | Namespace where the extension Release must be placed, for a Cluster scoped extension.  If this namespace does not exist, it will be created | string |


### ScopeNamespace

| Name | Description | Value |
|-|-|-|
| targetNamespace | Namespace where the extension will be created for an Namespace scoped extension.  If this namespace does not exist, it will be created | string |


### ExtensionStatus

| Name | Description | Value |
|-|-|-|
| code | Status code provided by the Extension | string |
| displayStatus | Short description of status of the extension. | string |
| level | Level of the status. | 'Error''Information''Warning' |
| message | Detailed message of the status from the Extension. | string |
| time | DateLiteral (per ISO8601) noting the time of installation status. | string |


