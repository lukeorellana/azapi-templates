```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearning/webServices@2017-01-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      assets = {}
      commitmentPlan = {
        id = "string"
      }
      description = "string"
      diagnostics = {
        expiry = "string"
        level = "string"
      }
      exampleRequest = {
        globalParameters = {}
        inputs = {}
      }
      exposeSampleData = bool
      input = {
        description = "string"
        properties = {}
        title = "string"
        type = "string"
      }
      keys = {
        primary = "string"
        secondary = "string"
      }
      machineLearningWorkspace = {
        id = "string"
      }
      output = {
        description = "string"
        properties = {}
        title = "string"
        type = "string"
      }
      parameters = {}
      payloadsInBlobStorage = bool
      payloadsLocation = {
        credentials = "string"
        uri = "string"
      }
      readOnly = bool
      realtimeConfiguration = {
        maxConcurrentCalls = int
      }
      storageAccount = {
        key = "string"
        name = "string"
      }
      title = "string"
      packageType = "string"
      // For remaining properties, see WebServiceProperties objects
    }
  })
}

```

### webServices

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-260Valid characters:Can't use:<>*%&:?+/\\or control charactersCan't end with a space. |
| location | Specifies the location of the resource. | string (required) |
| tags | Contains resource tags defined as key/value pairs. | Dictionary of tag names and values. SeeTags in templates |
| properties | Contains the property payload that describes the web service. | WebServiceProperties(required) |


### WebServiceProperties

| Name | Description | Value |
|-|-|-|
| assets | Contains user defined properties describing web service assets. Properties are expressed as Key/Value pairs. | object |
| commitmentPlan | Contains the commitment plan associated with this web service. Set at creation time. Once set, this value cannot be changed. Note: The commitment plan is not returned from calls to GET operations. | CommitmentPlan |
| description | The description of the web service. | string |
| diagnostics | Settings controlling the diagnostics traces collection for the web service. | DiagnosticsConfiguration |
| exampleRequest | Defines sample input data for one or more of the service's inputs. | ExampleRequest |
| exposeSampleData | When set to true, sample data is included in the web service's swagger definition. The default value is true. | bool |
| input | Contains the Swagger 2.0 schema describing one or more of the web service's inputs. For more information, see the Swagger specification. | ServiceInputOutputSpecification |
| keys | Contains the web service provisioning keys. If you do not specify provisioning keys, the Azure Machine Learning system generates them for you. Note: The keys are not returned from calls to GET operations. | WebServiceKeys |
| machineLearningWorkspace | Specifies the Machine Learning workspace containing the experiment that is source for the web service. | MachineLearningWorkspace |
| output | Contains the Swagger 2.0 schema describing one or more of the web service's outputs. For more information, see the Swagger specification. | ServiceInputOutputSpecification |
| parameters | The set of global parameters values defined for the web service, given as a global parameter name to default value map. If no default value is specified, the parameter is considered to be required. | object |
| payloadsInBlobStorage | When set to true, indicates that the payload size is larger than 3 MB. Otherwise false. If the payload size exceed 3 MB, the payload is stored in a blob and the PayloadsLocation parameter contains the URI of the blob. Otherwise, this will be set to false and Assets, Input, Output, Package, Parameters, ExampleRequest are inline. The Payload sizes is determined by adding the size of the Assets, Input, Output, Package, Parameters, and the ExampleRequest. | bool |
| payloadsLocation | The URI of the payload blob. This parameter contains a value only if the payloadsInBlobStorage parameter is set to true. Otherwise is set to null. | BlobLocation |
| readOnly | When set to true, indicates that the web service is read-only and can no longer be updated or patched, only removed. Default, is false. Note: Once set to true, you cannot change its value. | bool |
| realtimeConfiguration | Contains the configuration settings for the web service endpoint. | RealtimeConfiguration |
| storageAccount | Specifies the storage account that Azure Machine Learning uses to store information about the web service. Only the name of the storage account is returned from calls to GET operations. When updating the storage account information, you must ensure that all necessary assets are available in the new storage account or calls to your web service will fail. | StorageAccount |
| title | The title of the web service. | string |
| packageType | Set the object type | Graph(required) |


### CommitmentPlan

| Name | Description | Value |
|-|-|-|
| id | Specifies the Azure Resource Manager ID of the commitment plan associated with the web service. | string (required) |


### DiagnosticsConfiguration

| Name | Description | Value |
|-|-|-|
| expiry | Specifies the date and time when the logging will cease. If null, diagnostic collection is not time limited. | string |
| level | Specifies the verbosity of the diagnostic output. Valid values are: None - disables tracing; Error - collects only error (stderr) traces; All - collects all traces (stdout and stderr). | 'All''Error''None' (required) |


### ExampleRequest

| Name | Description | Value |
|-|-|-|
| globalParameters | Sample input data for the web service's global parameters | object |
| inputs | Sample input data for the web service's input(s) given as an input name to sample input values matrix map. | object |


### ServiceInputOutputSpecification

| Name | Description | Value |
|-|-|-|
| description | The description of the Swagger schema. | string |
| properties | Specifies a collection that contains the column schema for each input or output of the web service. For more information, see the Swagger specification. | object (required) |
| title | The title of your Swagger schema. | string |
| type | The type of the entity described in swagger. Always 'object'. | string (required) |


### WebServiceKeys

| Name | Description | Value |
|-|-|-|
| primary | The primary access key. | string |
| secondary | The secondary access key. | string |


### MachineLearningWorkspace

| Name | Description | Value |
|-|-|-|
| id | Specifies the workspace ID of the machine learning workspace associated with the web service | string (required) |


### BlobLocation

| Name | Description | Value |
|-|-|-|
| credentials | Access credentials for the blob, if applicable (e.g. blob specified by storage account connection string + blob URI) | string |
| uri | The URI from which the blob is accessible from. For example, aml://abc for system assets orhttps://xyzfor user assets or payload. | string (required) |


### RealtimeConfiguration

| Name | Description | Value |
|-|-|-|
| maxConcurrentCalls | Specifies the maximum concurrent calls that can be made to the web service. Minimum value: 4, Maximum value: 200. | int |


### StorageAccount

| Name | Description | Value |
|-|-|-|
| key | Specifies the key used to access the storage account. | string |
| name | Specifies the name of the storage account. | string |


### WebServicePropertiesForGraph

| Name | Description | Value |
|-|-|-|
| packageType | Specifies the package type. Valid values are Graph (Specifies a web service published through the Machine Learning Studio) and Code (Specifies a web service published using code such as Python). Note: Code is not supported at this time. | 'Graph' (required) |
| package | The definition of the graph package making up this web service. | GraphPackage |


### GraphPackage

| Name | Description | Value |
|-|-|-|
| edges | The list of edges making up the graph. | GraphEdge[] |
| graphParameters | The collection of global parameters for the graph, given as a global parameter name to GraphParameter map. Each parameter here has a 1:1 match with the global parameters values map declared at the WebServiceProperties level. | object |
| nodes | The set of nodes making up the graph, provided as a nodeId to GraphNode map | object |


### GraphEdge

| Name | Description | Value |
|-|-|-|
| sourceNodeId | The source graph node's identifier. | string |
| sourcePortId | The identifier of the source node's port that the edge connects from. | string |
| targetNodeId | The destination graph node's identifier. | string |
| targetPortId | The identifier of the destination node's port that the edge connects into. | string |


