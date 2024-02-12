```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureStackHCI/clusters/updateSummaries@2022-12-01"
  name = "default"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      currentVersion = "string"
      hardwareModel = "string"
      healthCheckDate = "string"
      healthCheckResult = [
        {
          additionalData = "string"
          description = "string"
          healthCheckSource = "string"
          name = "string"
          remediation = "string"
          severity = "string"
          status = "string"
          tags = {
            key = "string"
            value = "string"
          }
          targetResourceID = "string"
          targetResourceName = "string"
          timestamp = "string"
          title = "string"
        }
      ]
      healthState = "string"
      lastChecked = "string"
      lastUpdated = "string"
      oemFamily = "string"
      packageVersions = [
        {
          lastUpdated = "string"
          packageType = "string"
          version = "string"
        }
      ]
      state = "string"
    }
  })
}

```

### clusters/updateSummaries

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| location | The geo-location where the resource lives | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:clusters |
| properties | Update summaries properties | UpdateSummariesProperties |


### UpdateSummariesProperties

| Name | Description | Value |
|-|-|-|
| currentVersion | Current Solution Bundle version of the stamp. | string |
| hardwareModel | Name of the hardware model. | string |
| healthCheckDate | Last time the package-specific checks were run. | string |
| healthCheckResult | An array of pre-check result objects. | PrecheckResult[] |
| healthState | Overall health state for update-specific health checks. | 'Error''Failure''InProgress''Success''Unknown''Warning' |
| lastChecked | Last time the update service successfully checked for updates | string |
| lastUpdated | Last time an update installation completed successfully. | string |
| oemFamily | OEM family name. | string |
| packageVersions | Current version of each updatable component. | PackageVersionInfo[] |
| state | Overall update state of the stamp. | 'AppliedSuccessfully''NeedsAttention''PreparationFailed''PreparationInProgress''Unknown''UpdateAvailable''UpdateFailed''UpdateInProgress' |


### PrecheckResult

| Name | Description | Value |
|-|-|-|
| additionalData | Property bag of key value pairs for additional information. | string |
| description | Detailed overview of the issue and what impact the issue has on the stamp. | string |
| healthCheckSource | The name of the services called for the HealthCheck (I.E. Test-AzureStack, Test-Cluster). | string |
| name | Name of the individual test/rule/alert that was executed. Unique, not exposed to the customer. | string |
| remediation | Set of steps that can be taken to resolve the issue found. | string |
| severity | Severity of the result (Critical, Warning, Informational, Hidden). This answers how important the result is. Critical is the only update-blocking severity. | 'Critical''Hidden''Informational''Warning' |
| status | The status of the check running (i.e. Failed, Succeeded, In Progress). This answers whether the check ran, and passed or failed. | 'ConnectedRecently''Disconnected''Error''Failed''InProgress''NotConnectedRecently''NotSpecified''NotYetRegistered''Succeeded' |
| tags | Key-value pairs that allow grouping/filtering individual tests. | object |
| targetResourceID | The unique identifier for the affected resource (such as a node or drive). | string |
| targetResourceName | The name of the affected resource. | string |
| timestamp | The Time in which the HealthCheck was called. | string |
| title | User-facing name; one or more sentences indicating the direct issue. | string |


### PackageVersionInfo

| Name | Description | Value |
|-|-|-|
| lastUpdated | Last time this component was updated. | string |
| packageType | Package type | string |
| version | Package version | string |


