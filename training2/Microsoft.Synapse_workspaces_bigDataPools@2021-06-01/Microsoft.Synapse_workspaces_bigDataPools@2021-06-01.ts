import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesBigdatapoolsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:workspaces;

/**
   * Auto-pausing properties
   */
readonly autoPause?: AutoPauseProperties;

/**
   * Auto-scaling properties
   */
readonly autoScale?: AutoScaleProperties;

/**
   * List of custom libraries/packages associated with the spark pool.
   */
readonly customLibraries?: LibraryInfo[];

/**
   * The default folder where Spark logs will be written.
   */
readonly defaultSparkLogFolder?: string;

/**
   * Dynamic Executor Allocation
   */
readonly dynamicExecutorAllocation?: DynamicExecutorAllocation;

/**
   * Whether autotune is required or not.
   */
readonly isAutotuneEnabled?: bool;

/**
   * Whether compute isolation is required or not.
   */
readonly isComputeIsolationEnabled?: bool;

/**
   * Library version requirements
   */
readonly libraryRequirements?: LibraryRequirements;

/**
   * The number of nodes in the Big Data pool.
   */
readonly nodeCount?: number;

/**
   * The level of compute power that each node in the Big Data pool has.
   */
readonly nodeSize?: 'Large''Medium''None''Small''XLarge''XXLarge''XXXLarge';

/**
   * The kind of nodes that the Big Data pool provides.
   */
readonly nodeSizeFamily?: 'HardwareAcceleratedFPGA''HardwareAcceleratedGPU''MemoryOptimized''None';

/**
   * The state of the Big Data pool.
   */
readonly provisioningState?: string;

/**
   * Whether session level packages enabled.
   */
readonly sessionLevelPackagesEnabled?: bool;

/**
   * Spark configuration file to specify additional properties
   */
readonly sparkConfigProperties?: SparkConfigProperties;

/**
   * The Spark events folder
   */
readonly sparkEventsFolder?: string;

/**
   * The Apache Spark version.
   */
readonly sparkVersion?: string;

/**
   * Number of minutes of idle time before the Big Data pool is automatically paused.
   */
readonly delayInMinutes?: number;

/**
   * Whether auto-pausing is enabled for the Big Data pool.
   */
readonly enabled?: bool;

/**
   * Whether automatic scaling is enabled for the Big Data pool.
   */
readonly enabled?: bool;

/**
   * The maximum number of nodes the Big Data pool can support.
   */
readonly maxNodeCount?: number;

/**
   * The minimum number of nodes the Big Data pool can support.
   */
readonly minNodeCount?: number;

/**
   * Storage blob container name.
   */
readonly containerName?: string;

/**
   * Storage blob path of library.
   */
readonly path?: string;

/**
   * Type of the library.
   */
readonly type?: string;

/**
   * Indicates whether Dynamic Executor Allocation is enabled or not.
   */
readonly enabled?: bool;

/**
   * The maximum number of executors alloted
   */
readonly maxExecutors?: number;

/**
   * The minimum number of executors alloted
   */
readonly minExecutors?: number;

/**
   * The library requirements.
   */
readonly content?: string;

/**
   * The filename of the library requirements file.
   */
readonly filename?: string;

/**
   * The type of the spark config properties file.
   */
readonly configurationType?: 'Artifact''File';

/**
   * The spark config properties.
   */
readonly content?: string;

/**
   * The filename of the spark config properties file.
   */
readonly filename?: string;
}

/**
 * SynapseWorkspacesBigdatapools resource
 */
export class SynapseWorkspacesBigdatapools extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SynapseWorkspacesBigdatapoolsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Synapse/workspaces/bigDataPools@2021-06-01";
  }

  protected getResourceBody(props: SynapseWorkspacesBigdatapoolsProps): string {
    return JSON.stringify(
        {properties: {autoPause: {delayInMinutes: "${int}", enabled: "${bool}"}, autoScale: {enabled: "${bool}", maxNodeCount: "${int}", minNodeCount: "${int}"}, customLibraries: [{containerName: "string", name: "string", path: "string", type: "string"}], defaultSparkLogFolder: "string", dynamicExecutorAllocation: {enabled: "${bool}", maxExecutors: "${int}", minExecutors: "${int}"}, isAutotuneEnabled: "${bool}", isComputeIsolationEnabled: "${bool}", libraryRequirements: {content: "string", filename: "string"}, nodeCount: "${int}", nodeSize: "string", nodeSizeFamily: "string", provisioningState: "string", sessionLevelPackagesEnabled: "${bool}", sparkConfigProperties: {configurationType: "string", content: "string", filename: "string"}, sparkEventsFolder: "string", sparkVersion: "string"}}
    );
  }
}
