import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MachinelearningWebservicesProps extends IAzAPIBaseProps {
/**
   * Contains user defined properties describing web service assets. Properties are expressed as Key/Value pairs.
   */
readonly assets?: object;

/**
   * Contains the commitment plan associated with this web service. Set at creation time. Once set, this value cannot be changed. Note: The commitment plan is not returned from calls to GET operations.
   */
readonly commitmentPlan?: CommitmentPlan;

/**
   * The description of the web service.
   */
readonly description?: string;

/**
   * Settings controlling the diagnostics traces collection for the web service.
   */
readonly diagnostics?: DiagnosticsConfiguration;

/**
   * Defines sample input data for one or more of the service's inputs.
   */
readonly exampleRequest?: ExampleRequest;

/**
   * When set to true, sample data is included in the web service's swagger definition. The default value is true.
   */
readonly exposeSampleData?: bool;

/**
   * Contains the Swagger 2.0 schema describing one or more of the web service's inputs. For more information, see the Swagger specification.
   */
readonly input?: ServiceInputOutputSpecification;

/**
   * Contains the web service provisioning keys. If you do not specify provisioning keys, the Azure Machine Learning system generates them for you. Note: The keys are not returned from calls to GET operations.
   */
readonly keys?: WebServiceKeys;

/**
   * Specifies the Machine Learning workspace containing the experiment that is source for the web service.
   */
readonly machineLearningWorkspace?: MachineLearningWorkspace;

/**
   * Contains the Swagger 2.0 schema describing one or more of the web service's outputs. For more information, see the Swagger specification.
   */
readonly output?: ServiceInputOutputSpecification;

/**
   * The set of global parameters values defined for the web service, given as a global parameter name to default value map. If no default value is specified, the parameter is considered to be required.
   */
readonly parameters?: object;

/**
   * When set to true, indicates that the payload size is larger than 3 MB. Otherwise false. If the payload size exceed 3 MB, the payload is stored in a blob and the PayloadsLocation parameter contains the URI of the blob. Otherwise, this will be set to false and Assets, Input, Output, Package, Parameters, ExampleRequest are inline. The Payload sizes is determined by adding the size of the Assets, Input, Output, Package, Parameters, and the ExampleRequest.
   */
readonly payloadsInBlobStorage?: bool;

/**
   * The URI of the payload blob. This parameter contains a value only if the payloadsInBlobStorage parameter is set to true. Otherwise is set to null.
   */
readonly payloadsLocation?: BlobLocation;

/**
   * When set to true, indicates that the web service is read-only and can no longer be updated or patched, only removed. Default, is false. Note: Once set to true, you cannot change its value.
   */
readonly readOnly?: bool;

/**
   * Contains the configuration settings for the web service endpoint.
   */
readonly realtimeConfiguration?: RealtimeConfiguration;

/**
   * Specifies the storage account that Azure Machine Learning uses to store information about the web service. Only the name of the storage account is returned from calls to GET operations. When updating the storage account information, you must ensure that all necessary assets are available in the new storage account or calls to your web service will fail.
   */
readonly storageAccount?: StorageAccount;

/**
   * The title of the web service.
   */
readonly title?: string;

/**
   * Set the object type
   */
readonly packageType: Graph;

/**
   * Specifies the Azure Resource Manager ID of the commitment plan associated with the web service.
   */
readonly id: string;

/**
   * Specifies the date and time when the logging will cease. If null, diagnostic collection is not time limited.
   */
readonly expiry?: string;

/**
   * Specifies the verbosity of the diagnostic output. Valid values are: None - disables tracing; Error - collects only error (stderr) traces; All - collects all traces (stdout and stderr).
   */
readonly level: 'All''Error''None';

/**
   * Sample input data for the web service's global parameters
   */
readonly globalParameters?: object;

/**
   * Sample input data for the web service's input(s) given as an input name to sample input values matrix map.
   */
readonly inputs?: object;

/**
   * The description of the Swagger schema.
   */
readonly description?: string;

/**
   * The title of your Swagger schema.
   */
readonly title?: string;

/**
   * The type of the entity described in swagger. Always 'object'.
   */
readonly type: string;

/**
   * The primary access key.
   */
readonly primary?: string;

/**
   * The secondary access key.
   */
readonly secondary?: string;

/**
   * Specifies the workspace ID of the machine learning workspace associated with the web service
   */
readonly id: string;

/**
   * Access credentials for the blob, if applicable (e.g. blob specified by storage account connection string + blob URI)
   */
readonly credentials?: string;

/**
   * The URI from which the blob is accessible from. For example, aml://abc for system assets orhttps://xyzfor user assets or payload.
   */
readonly uri: string;

/**
   * Specifies the maximum concurrent calls that can be made to the web service. Minimum value: 4, Maximum value: 200.
   */
readonly maxConcurrentCalls?: number;

/**
   * Specifies the key used to access the storage account.
   */
readonly key?: string;

/**
   * Specifies the package type. Valid values are Graph (Specifies a web service published through the Machine Learning Studio) and Code (Specifies a web service published using code such as Python). Note: Code is not supported at this time.
   */
readonly packageType: 'Graph';

/**
   * The definition of the graph package making up this web service.
   */
readonly package?: GraphPackage;

/**
   * The list of edges making up the graph.
   */
readonly edges?: GraphEdge[];

/**
   * The collection of global parameters for the graph, given as a global parameter name to GraphParameter map. Each parameter here has a 1:1 match with the global parameters values map declared at the WebServiceProperties level.
   */
readonly graphParameters?: object;

/**
   * The set of nodes making up the graph, provided as a nodeId to GraphNode map
   */
readonly nodes?: object;

/**
   * The source graph node's identifier.
   */
readonly sourceNodeId?: string;

/**
   * The identifier of the source node's port that the edge connects from.
   */
readonly sourcePortId?: string;

/**
   * The destination graph node's identifier.
   */
readonly targetNodeId?: string;

/**
   * The identifier of the destination node's port that the edge connects into.
   */
readonly targetPortId?: string;
}

/**
 * MachinelearningWebservices resource
 */
export class MachinelearningWebservices extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MachinelearningWebservicesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.MachineLearning/webServices@2017-01-01";
  }

  protected getResourceBody(props: MachinelearningWebservicesProps): string {
    return JSON.stringify(
        {properties: {assets: {}, commitmentPlan: {id: "string"}, description: "string", diagnostics: {expiry: "string", level: "string"}, exampleRequest: {globalParameters: {}, inputs: {}}, exposeSampleData: "${bool}", input: {description: "string", properties: {}, title: "string", type: "string"}, keys: {primary: "string", secondary: "string"}, machineLearningWorkspace: {id: "string"}, output: {description: "string", properties: {}, title: "string", type: "string"}, parameters: {}, payloadsInBlobStorage: "${bool}", payloadsLocation: {credentials: "string", uri: "string"}, readOnly: "${bool}", realtimeConfiguration: {maxConcurrentCalls: "${int}"}, storageAccount: {key: "string", name: "string"}, title: "string", packageType: "string"}}
    );
  }
}
