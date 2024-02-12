import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatafactoryFactoriesDataflowsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:factories;

/**
   * List of tags that can be used for describing the data flow.
   */
readonly annotations?: any[];

/**
   * The description of the data flow.
   */
readonly description?: string;

/**
   * The folder that this data flow is in. If not specified, Data flow will appear at the root level.
   */
readonly folder?: DataFlowFolder;

/**
   * Set the object type
   */
readonly type: FlowletMappingDataFlowWranglingDataFlow;

/**
   * Type of data flow.
   */
readonly type: 'Flowlet';

/**
   * Flowlet type properties.
   */
readonly typeProperties?: FlowletTypeProperties;

/**
   * Flowlet script.
   */
readonly script?: string;

/**
   * Flowlet script lines.
   */
readonly scriptLines?: string[];

/**
   * List of sinks in Flowlet.
   */
readonly sinks?: DataFlowSink[];

/**
   * List of sources in Flowlet.
   */
readonly sources?: DataFlowSource[];

/**
   * List of transformations in Flowlet.
   */
readonly transformations?: Transformation[];

/**
   * Dataset reference.
   */
readonly dataset?: DatasetReference;

/**
   * Transformation description.
   */
readonly description?: string;

/**
   * Flowlet Reference
   */
readonly flowlet?: DataFlowReference;

/**
   * Linked service reference.
   */
readonly linkedService?: LinkedServiceReference;

/**
   * Rejected data linked service reference.
   */
readonly rejectedDataLinkedService?: LinkedServiceReference;

/**
   * Schema linked service reference.
   */
readonly schemaLinkedService?: LinkedServiceReference;

/**
   * Arguments for dataset.
   */
readonly parameters?: object;

/**
   * Reference dataset name.
   */
readonly referenceName: string;

/**
   * Dataset reference type.
   */
readonly type: 'DatasetReference';

/**
   * Reference data flow parameters from dataset.
   */
readonly datasetParameters?: For Bicep, you can use theany()function.;

/**
   * Data flow parameters
   */
readonly parameters?: object;

/**
   * Reference data flow name.
   */
readonly referenceName: string;

/**
   * Data flow reference type.
   */
readonly type: 'DataFlowReference';

/**
   * Arguments for LinkedService.
   */
readonly parameters?: object;

/**
   * Reference LinkedService name.
   */
readonly referenceName: string;

/**
   * Linked service reference type.
   */
readonly type: 'LinkedServiceReference';

/**
   * Dataset reference.
   */
readonly dataset?: DatasetReference;

/**
   * Transformation description.
   */
readonly description?: string;

/**
   * Flowlet Reference
   */
readonly flowlet?: DataFlowReference;

/**
   * Linked service reference.
   */
readonly linkedService?: LinkedServiceReference;

/**
   * Schema linked service reference.
   */
readonly schemaLinkedService?: LinkedServiceReference;

/**
   * Dataset reference.
   */
readonly dataset?: DatasetReference;

/**
   * Transformation description.
   */
readonly description?: string;

/**
   * Flowlet Reference
   */
readonly flowlet?: DataFlowReference;

/**
   * Linked service reference.
   */
readonly linkedService?: LinkedServiceReference;

/**
   * Type of data flow.
   */
readonly type: 'MappingDataFlow';

/**
   * Mapping data flow type properties.
   */
readonly typeProperties?: MappingDataFlowTypeProperties;

/**
   * DataFlow script.
   */
readonly script?: string;

/**
   * Data flow script lines.
   */
readonly scriptLines?: string[];

/**
   * List of sinks in data flow.
   */
readonly sinks?: DataFlowSink[];

/**
   * List of sources in data flow.
   */
readonly sources?: DataFlowSource[];

/**
   * List of transformations in data flow.
   */
readonly transformations?: Transformation[];

/**
   * Type of data flow.
   */
readonly type: 'WranglingDataFlow';

/**
   * PowerQuery data flow type properties.
   */
readonly typeProperties?: PowerQueryTypeProperties;

/**
   * Locale of the Power query mashup document.
   */
readonly documentLocale?: string;

/**
   * Power query mashup script.
   */
readonly script?: string;

/**
   * List of sources in Power Query.
   */
readonly sources?: PowerQuerySource[];

/**
   * Dataset reference.
   */
readonly dataset?: DatasetReference;

/**
   * Transformation description.
   */
readonly description?: string;

/**
   * Flowlet Reference
   */
readonly flowlet?: DataFlowReference;

/**
   * Linked service reference.
   */
readonly linkedService?: LinkedServiceReference;

/**
   * Schema linked service reference.
   */
readonly schemaLinkedService?: LinkedServiceReference;

/**
   * source script.
   */
readonly script?: string;
}

/**
 * DatafactoryFactoriesDataflows resource
 */
export class DatafactoryFactoriesDataflows extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatafactoryFactoriesDataflowsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataFactory/factories/dataflows@2018-06-01";
  }

  protected getResourceBody(props: DatafactoryFactoriesDataflowsProps): string {
    return JSON.stringify(
        {properties: {annotations: ["${object}"], description: "string", folder: {name: "string"}, type: "string"}}
    );
  }
}
