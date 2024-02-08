```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/bigDataPools@2021-06-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      autoPause = {
        delayInMinutes = int
        enabled = bool
      }
      autoScale = {
        enabled = bool
        maxNodeCount = int
        minNodeCount = int
      }
      customLibraries = [
        {
          containerName = "string"
          name = "string"
          path = "string"
          type = "string"
        }
      ]
      defaultSparkLogFolder = "string"
      dynamicExecutorAllocation = {
        enabled = bool
        maxExecutors = int
        minExecutors = int
      }
      isAutotuneEnabled = bool
      isComputeIsolationEnabled = bool
      libraryRequirements = {
        content = "string"
        filename = "string"
      }
      nodeCount = int
      nodeSize = "string"
      nodeSizeFamily = "string"
      provisioningState = "string"
      sessionLevelPackagesEnabled = bool
      sparkConfigProperties = {
        configurationType = "string"
        content = "string"
        filename = "string"
      }
      sparkEventsFolder = "string"
      sparkVersion = "string"
    }
  })
}

```

### workspaces/bigDataPools

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-15Valid characters:Letters and numbers.Start with letter. End with letter or number.Can't containreserved word. |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | Big Data pool properties | BigDataPoolResourceProperties |


### BigDataPoolResourceProperties

| Name | Description | Value |
|-|-|-|
| autoPause | Auto-pausing properties | AutoPauseProperties |
| autoScale | Auto-scaling properties | AutoScaleProperties |
| customLibraries | List of custom libraries/packages associated with the spark pool. | LibraryInfo[] |
| defaultSparkLogFolder | The default folder where Spark logs will be written. | string |
| dynamicExecutorAllocation | Dynamic Executor Allocation | DynamicExecutorAllocation |
| isAutotuneEnabled | Whether autotune is required or not. | bool |
| isComputeIsolationEnabled | Whether compute isolation is required or not. | bool |
| libraryRequirements | Library version requirements | LibraryRequirements |
| nodeCount | The number of nodes in the Big Data pool. | int |
| nodeSize | The level of compute power that each node in the Big Data pool has. | 'Large''Medium''None''Small''XLarge''XXLarge''XXXLarge' |
| nodeSizeFamily | The kind of nodes that the Big Data pool provides. | 'HardwareAcceleratedFPGA''HardwareAcceleratedGPU''MemoryOptimized''None' |
| provisioningState | The state of the Big Data pool. | string |
| sessionLevelPackagesEnabled | Whether session level packages enabled. | bool |
| sparkConfigProperties | Spark configuration file to specify additional properties | SparkConfigProperties |
| sparkEventsFolder | The Spark events folder | string |
| sparkVersion | The Apache Spark version. | string |


### AutoPauseProperties

| Name | Description | Value |
|-|-|-|
| delayInMinutes | Number of minutes of idle time before the Big Data pool is automatically paused. | int |
| enabled | Whether auto-pausing is enabled for the Big Data pool. | bool |


### AutoScaleProperties

| Name | Description | Value |
|-|-|-|
| enabled | Whether automatic scaling is enabled for the Big Data pool. | bool |
| maxNodeCount | The maximum number of nodes the Big Data pool can support. | int |
| minNodeCount | The minimum number of nodes the Big Data pool can support. | int |


### LibraryInfo

| Name | Description | Value |
|-|-|-|
| containerName | Storage blob container name. | string |
| name | Name of the library. | string |
| path | Storage blob path of library. | string |
| type | Type of the library. | string |


### DynamicExecutorAllocation

| Name | Description | Value |
|-|-|-|
| enabled | Indicates whether Dynamic Executor Allocation is enabled or not. | bool |
| maxExecutors | The maximum number of executors alloted | int |
| minExecutors | The minimum number of executors alloted | int |


### LibraryRequirements

| Name | Description | Value |
|-|-|-|
| content | The library requirements. | string |
| filename | The filename of the library requirements file. | string |


### SparkConfigProperties

| Name | Description | Value |
|-|-|-|
| configurationType | The type of the spark config properties file. | 'Artifact''File' |
| content | The spark config properties. | string |
| filename | The filename of the spark config properties file. | string |


