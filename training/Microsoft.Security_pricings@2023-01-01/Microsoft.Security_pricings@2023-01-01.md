```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/pricings@2023-01-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      extensions = [
        {
          additionalExtensionProperties = {}
          isEnabled = "string"
          name = "string"
        }
      ]
      pricingTier = "string"
      subPlan = "string"
    }
  })
}

```

### pricings

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-260Valid characters:Alphanumerics, underscores, and hyphens. |
| properties | Pricing data | PricingProperties |


### PricingProperties

| Name | Description | Value |
|-|-|-|
| extensions | Optional. List of extensions offered under a plan. | Extension[] |
| pricingTier | The pricing tier value. Microsoft Defender for Cloud is provided in two pricing tiers: free and standard. The standard tier offers advanced security capabilities, while the free tier offers basic security features. | 'Free''Standard' (required) |
| subPlan | The sub-plan selected for a Standard pricing configuration, when more than one sub-plan is available. Each sub-plan enables a set of security features. When not specified, full plan is applied. | string |


### Extension

| Name | Description | Value |
|-|-|-|
| additionalExtensionProperties | Property values associated with the extension. | ExtensionAdditionalExtensionProperties |
| isEnabled | Indicates whether the extension is enabled. | 'False''True' (required) |
| name | The extension name. Supported values are:AgentlessDiscoveryForKubernetes- API-based discovery of information about Kubernetes cluster architecture, workload objects, and setup. Required for Kubernetes inventory, identity and network exposure detection, attack path analysis and risk hunting as part of the cloud security explorer.Available for CloudPosture plan.OnUploadMalwareScanning- Limits the GB to be scanned per month for each storage account within the subscription. Once this limit reached on a given storage account, Blobs won't be scanned during current calendar month.Available for StorageAccounts plan.SensitiveDataDiscovery- Sensitive data discovery identifies Blob storage container with sensitive data such as credentials, credit cards, and more, to help prioritize and investigate security events.Available for StorageAccounts and CloudPosture plans.ContainerRegistriesVulnerabilityAssessments- Provides vulnerability management for images stored in your container registries.Available for CloudPosture and Containers plans. | string (required) |


### ExtensionAdditionalExtensionProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | For Bicep, you can use theany()function. |


