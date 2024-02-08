```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StreamAnalytics/streamingjobs/functions@2021-10-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      properties = {
        binding = {
          type = "string"
          // For remaining properties, see FunctionBinding objects
        }
        inputs = [
          {
            dataType = "string"
            isConfigurationParameter = bool
          }
        ]
        output = {
          dataType = "string"
        }
      }
      type = "string"
      // For remaining properties, see FunctionProperties objects
    }
  })
}

```

### streamingjobs/functions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 3-63Valid characters:Alphanumerics, hyphens, and underscores. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:streamingjobs |
| properties | The properties that are associated with a function. | FunctionProperties |


### FunctionProperties

| Name | Description | Value |
|-|-|-|
| properties |  | FunctionConfiguration |
| type | Set the object type | AggregateScalar(required) |


### FunctionConfiguration

| Name | Description | Value |
|-|-|-|
| binding | The physical binding of the function. For example, in the Azure Machine Learning web serviceâs case, this describes the endpoint. | FunctionBinding |
| inputs |  | FunctionInput[] |
| output | Describes the output of a function. | FunctionOutput |


### FunctionBinding

| Name | Description | Value |
|-|-|-|
| type | Set the object type | Microsoft.MachineLearning/WebServiceMicrosoft.MachineLearningServicesMicrosoft.StreamAnalytics/CLRUdfMicrosoft.StreamAnalytics/JavascriptUdf(required) |


### AzureMachineLearningStudioFunctionBinding

| Name | Description | Value |
|-|-|-|
| type | Indicates the function binding type. | 'Microsoft.MachineLearning/WebService' (required) |
| properties | The binding properties associated with an Azure Machine learning Studio. | AzureMachineLearningStudioFunctionBindingProperties |


### AzureMachineLearningStudioFunctionBindingProperties

| Name | Description | Value |
|-|-|-|
| apiKey | The API key used to authenticate with Request-Response endpoint. | string |
| batchSize | Number between 1 and 10000 describing maximum number of rows for every Azure ML RRS execute request. Default is 1000. | int |
| endpoint | The Request-Response execute endpoint of the Azure Machine Learning Studio. Find out more here:https://docs.microsoft.com/azure/machine-learning/machine-learning-consume-web-services#request-response-service-rrs | string |
| inputs | The inputs for the Azure Machine Learning Studio endpoint. | AzureMachineLearningStudioInputs |
| outputs | A list of outputs from the Azure Machine Learning Studio endpoint execution. | AzureMachineLearningStudioOutputColumn[] |


### AzureMachineLearningStudioInputs

| Name | Description | Value |
|-|-|-|
| columnNames | A list of input columns for the Azure Machine Learning Studio endpoint. | AzureMachineLearningStudioInputColumn[] |
| name | The name of the input. This is the name provided while authoring the endpoint. | string |


### AzureMachineLearningStudioInputColumn

| Name | Description | Value |
|-|-|-|
| dataType | The (Azure Machine Learning supported) data type of the input column. A list of valid  Azure Machine Learning data types are described athttps://msdn.microsoft.com/library/azure/dn905923.aspx. | string |
| mapTo | The zero based index of the function parameter this input maps to. | int |
| name | The name of the input column. | string |


### AzureMachineLearningStudioOutputColumn

| Name | Description | Value |
|-|-|-|
| dataType | The (Azure Machine Learning supported) data type of the output column. A list of valid  Azure Machine Learning data types are described athttps://msdn.microsoft.com/library/azure/dn905923.aspx. | string |
| name | The name of the output column. | string |


### AzureMachineLearningServiceFunctionBinding

| Name | Description | Value |
|-|-|-|
| type | Indicates the function binding type. | 'Microsoft.MachineLearningServices' (required) |
| properties | The binding properties associated with an Azure Machine learning web service. | AzureMachineLearningServiceFunctionBindingProperties |


### AzureMachineLearningServiceFunctionBindingProperties

| Name | Description | Value |
|-|-|-|
| apiKey | The API key used to authenticate with Request-Response endpoint. | string |
| batchSize | Number between 1 and 10000 describing maximum number of rows for every Azure ML RRS execute request. Default is 1000. | int |
| endpoint | The Request-Response execute endpoint of the Azure Machine Learning web service. | string |
| inputRequestName | Label for the input request object. | string |
| inputs | The inputs for the Azure Machine Learning web service endpoint. | AzureMachineLearningServiceInputColumn[] |
| numberOfParallelRequests | The number of parallel requests that will be sent per partition of your job to the machine learning service. Default is 1. | int |
| outputResponseName | Label for the output request object. | string |
| outputs | A list of outputs from the Azure Machine Learning web service endpoint execution. | AzureMachineLearningServiceOutputColumn[] |


### AzureMachineLearningServiceInputColumn

| Name | Description | Value |
|-|-|-|
| dataType | The (Azure Machine Learning supported) data type of the input column. | string |
| mapTo | The zero based index of the function parameter this input maps to. | int |
| name | The name of the input column. | string |


### AzureMachineLearningServiceOutputColumn

| Name | Description | Value |
|-|-|-|
| dataType | The (Azure Machine Learning supported) data type of the output column. | string |
| mapTo | The zero based index of the function parameter this input maps to. | int |
| name | The name of the output column. | string |


### CSharpFunctionBinding

| Name | Description | Value |
|-|-|-|
| type | Indicates the function binding type. | 'Microsoft.StreamAnalytics/CLRUdf' (required) |
| properties | The binding properties associated with a CSharp function. | CSharpFunctionBindingProperties |


### CSharpFunctionBindingProperties

| Name | Description | Value |
|-|-|-|
| class | The Csharp code containing a single function definition. | string |
| dllPath | The Csharp code containing a single function definition. | string |
| method | The Csharp code containing a single function definition. | string |
| updateMode | Refresh modes for Stream Analytics functions. | 'Refreshable''Static' |


### JavaScriptFunctionBinding

| Name | Description | Value |
|-|-|-|
| type | Indicates the function binding type. | 'Microsoft.StreamAnalytics/JavascriptUdf' (required) |
| properties | The binding properties associated with a JavaScript function. | JavaScriptFunctionBindingProperties |


### JavaScriptFunctionBindingProperties

| Name | Description | Value |
|-|-|-|
| script | The JavaScript code containing a single function definition. For example: 'function (x, y) { return x + y; }' | string |


### FunctionInput

| Name | Description | Value |
|-|-|-|
| dataType | The (Azure Stream Analytics supported) data type of the function input parameter. A list of valid Azure Stream Analytics data types are described athttps://msdn.microsoft.com/library/azure/dn835065.aspx | string |
| isConfigurationParameter | A flag indicating if the parameter is a configuration parameter. True if this input parameter is expected to be a constant. Default is false. | bool |


### FunctionOutput

| Name | Description | Value |
|-|-|-|
| dataType | The (Azure Stream Analytics supported) data type of the function output. A list of valid Azure Stream Analytics data types are described athttps://msdn.microsoft.com/library/azure/dn835065.aspx | string |


### AggregateFunctionProperties

| Name | Description | Value |
|-|-|-|
| type | Indicates the type of function. | 'Aggregate' (required) |


### ScalarFunctionProperties

| Name | Description | Value |
|-|-|-|
| type | Indicates the type of function. | 'Scalar' (required) |


