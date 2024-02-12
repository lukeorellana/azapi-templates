```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureStackHCI/clusters/updates@2022-12-01"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      additionalProperties = "string"
      availabilityType = "string"
      componentVersions = [
        {
          lastUpdated = "string"
          packageType = "string"
          version = "string"
        }
      ]
      description = "string"
      displayName = "string"
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
      installedDate = "string"
      packagePath = "string"
      packageSizeInMb = int
      packageType = "string"
      prerequisites = [
        {
          packageName = "string"
          updateType = "string"
          version = "string"
        }
      ]
      publisher = "string"
      rebootRequired = "string"
      releaseLink = "string"
      state = "string"
      updateStateProperties = {
        notifyMessage = "string"
        progressPercentage = int
      }
      version = "string"
    }
  })
}

```

### clusters/updates

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:clusters |
| properties | Update properties | UpdateProperties |


### UpdateProperties

| Name | Description | Value |
|-|-|-|
| additionalProperties | Extensible KV pairs serialized as a string. This is currently used to report the stamp OEM family and hardware model information when an update is flagged as Invalid for the stamp based on OEM type. | string |
| availabilityType | Indicates the way the update content can be downloaded. | 'Local''Notify''Online' |
| componentVersions | An array of component versions for a Solution Bundle update, and an empty array otherwise. | PackageVersionInfo[] |
| description | Description of the update. | string |
| displayName | Display name of the Update | string |
| healthCheckDate | Last time the package-specific checks were run. | string |
| healthCheckResult | An array of PrecheckResult objects. | PrecheckResult[] |
| healthState | Overall health state for update-specific health checks. | 'Error''Failure''InProgress''Success''Unknown''Warning' |
| installedDate | Date that the update was installed. | string |
| packagePath | Path where the update package is available. | string |
| packageSizeInMb | Size of the package. This value is a combination of the size from update metadata and size of the payload that results from the live scan operation for OS update content. | int |
| packageType | Customer-visible type of the update. | string |
| prerequisites | If update State is HasPrerequisite, this property contains an array of objects describing prerequisite updates before installing this update. Otherwise, it is empty. | UpdatePrerequisite[] |
| publisher | Publisher of the update package. | string |
| rebootRequired |  | 'False''True''Unknown' |
| releaseLink | Link to release notes for the update. | string |
| state | State of the update as it relates to this stamp. | 'DownloadFailed''Downloading''HasPrerequisite''HealthCheckFailed''HealthChecking''InstallationFailed''Installed''Installing''Invalid''NotApplicableBecauseAnotherUpdateIsInProgress''Obsolete''PreparationFailed''Preparing''Ready''ReadyToInstall''Recalled''ScanFailed''ScanInProgress' |
| updateStateProperties | Additional information regarding the state of the update. See definition of UpdateStateProperties type below for more details on this property. | UpdateStateProperties |
| version | Version of the update. | string |


### PackageVersionInfo

| Name | Description | Value |
|-|-|-|
| lastUpdated | Last time this component was updated. | string |
| packageType | Package type | string |
| version | Package version | string |


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


### UpdatePrerequisite

| Name | Description | Value |
|-|-|-|
| packageName | Friendly name of the prerequisite. | string |
| updateType | Updatable component type. | string |
| version | Version of the prerequisite. | string |


### UpdateStateProperties

| Name | Description | Value |
|-|-|-|
| notifyMessage | Brief message with instructions for updates of AvailabilityType Notify. | string |
| progressPercentage | Progress percentage of ongoing operation. Currently this property is only valid when the update is in the Downloading state, where it maps to how much of the update content has been downloaded. | int |


