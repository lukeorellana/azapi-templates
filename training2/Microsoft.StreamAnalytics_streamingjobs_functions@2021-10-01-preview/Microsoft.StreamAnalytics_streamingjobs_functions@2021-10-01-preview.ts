import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StreamanalyticsStreamingjobsFunctionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:streamingjobs;

/**
   * Set the object type
   */
readonly type: AggregateScalar;

/**
   * The physical binding of the function. For example, in the Azure Machine Learning web serviceâs case, this describes the endpoint.
   */
readonly binding?: FunctionBinding;

/**
   * 
   */
readonly inputs?: FunctionInput[];

/**
   * Describes the output of a function.
   */
readonly output?: FunctionOutput;

/**
   * Set the object type
   */
readonly type: Microsoft.MachineLearning/WebServiceMicrosoft.MachineLearningServicesMicrosoft.StreamAnalytics/CLRUdfMicrosoft.StreamAnalytics/JavascriptUdf;

/**
   * Indicates the function binding type.
   */
readonly type: 'Microsoft.MachineLearning/WebService';

/**
   * The API key used to authenticate with Request-Response endpoint.
   */
readonly apiKey?: string;

/**
   * Number between 1 and 10000 describing maximum number of rows for every Azure ML RRS execute request. Default is 1000.
   */
readonly batchSize?: number;

/**
   * The Request-Response execute endpoint of the Azure Machine Learning Studio. Find out more here:https://docs.microsoft.com/azure/machine-learning/machine-learning-consume-web-services#request-response-service-rrs
   */
readonly endpoint?: string;

/**
   * The inputs for the Azure Machine Learning Studio endpoint.
   */
readonly inputs?: AzureMachineLearningStudioInputs;

/**
   * A list of outputs from the Azure Machine Learning Studio endpoint execution.
   */
readonly outputs?: AzureMachineLearningStudioOutputColumn[];

/**
   * A list of input columns for the Azure Machine Learning Studio endpoint.
   */
readonly columnNames?: AzureMachineLearningStudioInputColumn[];

/**
   * The (Azure Machine Learning supported) data type of the input column. A list of valid  Azure Machine Learning data types are described athttps://msdn.microsoft.com/library/azure/dn905923.aspx.
   */
readonly dataType?: string;

/**
   * The zero based index of the function parameter this input maps to.
   */
readonly mapTo?: number;

/**
   * The (Azure Machine Learning supported) data type of the output column. A list of valid  Azure Machine Learning data types are described athttps://msdn.microsoft.com/library/azure/dn905923.aspx.
   */
readonly dataType?: string;

/**
   * Indicates the function binding type.
   */
readonly type: 'Microsoft.MachineLearningServices';

/**
   * The API key used to authenticate with Request-Response endpoint.
   */
readonly apiKey?: string;

/**
   * Number between 1 and 10000 describing maximum number of rows for every Azure ML RRS execute request. Default is 1000.
   */
readonly batchSize?: number;

/**
   * The Request-Response execute endpoint of the Azure Machine Learning web service.
   */
readonly endpoint?: string;

/**
   * Label for the input request object.
   */
readonly inputRequestName?: string;

/**
   * The inputs for the Azure Machine Learning web service endpoint.
   */
readonly inputs?: AzureMachineLearningServiceInputColumn[];

/**
   * The number of parallel requests that will be sent per partition of your job to the machine learning service. Default is 1.
   */
readonly numberOfParallelRequests?: number;

/**
   * Label for the output request object.
   */
readonly outputResponseName?: string;

/**
   * A list of outputs from the Azure Machine Learning web service endpoint execution.
   */
readonly outputs?: AzureMachineLearningServiceOutputColumn[];

/**
   * The (Azure Machine Learning supported) data type of the input column.
   */
readonly dataType?: string;

/**
   * The zero based index of the function parameter this input maps to.
   */
readonly mapTo?: number;

/**
   * The (Azure Machine Learning supported) data type of the output column.
   */
readonly dataType?: string;

/**
   * The zero based index of the function parameter this input maps to.
   */
readonly mapTo?: number;

/**
   * Indicates the function binding type.
   */
readonly type: 'Microsoft.StreamAnalytics/CLRUdf';

/**
   * The Csharp code containing a single function definition.
   */
readonly class?: string;

/**
   * The Csharp code containing a single function definition.
   */
readonly dllPath?: string;

/**
   * The Csharp code containing a single function definition.
   */
readonly method?: string;

/**
   * Refresh modes for Stream Analytics functions.
   */
readonly updateMode?: 'Refreshable''Static';

/**
   * Indicates the function binding type.
   */
readonly type: 'Microsoft.StreamAnalytics/JavascriptUdf';

/**
   * The JavaScript code containing a single function definition. For example: 'function (x, y) { return x + y; }'
   */
readonly script?: string;

/**
   * The (Azure Stream Analytics supported) data type of the function input parameter. A list of valid Azure Stream Analytics data types are described athttps://msdn.microsoft.com/library/azure/dn835065.aspx
   */
readonly dataType?: string;

/**
   * A flag indicating if the parameter is a configuration parameter. True if this input parameter is expected to be a constant. Default is false.
   */
readonly isConfigurationParameter?: bool;

/**
   * The (Azure Stream Analytics supported) data type of the function output. A list of valid Azure Stream Analytics data types are described athttps://msdn.microsoft.com/library/azure/dn835065.aspx
   */
readonly dataType?: string;

/**
   * Indicates the type of function.
   */
readonly type: 'Aggregate';

/**
   * Indicates the type of function.
   */
readonly type: 'Scalar';
}

/**
 * StreamanalyticsStreamingjobsFunctions resource
 */
export class StreamanalyticsStreamingjobsFunctions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StreamanalyticsStreamingjobsFunctionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.StreamAnalytics/streamingjobs/functions@2021-10-01-preview";
  }

  protected getResourceBody(props: StreamanalyticsStreamingjobsFunctionsProps): string {
    return JSON.stringify(
        {properties: {properties: {binding: {type: "string"}, inputs: [{dataType: "string", isConfigurationParameter: "${bool}"}], output: {dataType: "string"}}, type: "string"}}
    );
  }
}
