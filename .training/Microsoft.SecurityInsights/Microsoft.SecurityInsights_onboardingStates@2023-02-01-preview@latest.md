```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/onboardingStates@2023-02-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      customerManagedKey = bool
    }
    etag = "string"
  })
}

```

### onboardingStates

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| etag | Etag of the azure resource | string |
| properties | The Sentinel onboarding state object | SentinelOnboardingStateProperties |


### SentinelOnboardingStateProperties

| Name | Description | Value |
|-|-|-|
| customerManagedKey | Flag that indicates the status of the CMK setting | bool |


