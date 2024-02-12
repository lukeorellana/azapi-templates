import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesKustopoolsProps extends IAzAPIBaseProps {
/**
   * The SKU of the kusto pool.
   */
readonly sku: AzureSku;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:workspaces;

/**
   * A boolean value that indicates if the purge operations are enabled.
   */
readonly enablePurge?: bool;

/**
   * A boolean value that indicates if the streaming ingest is enabled.
   */
readonly enableStreamingIngest?: bool;

/**
   * Optimized auto scale definition.
   */
readonly optimizedAutoscale?: OptimizedAutoscale;

/**
   * The workspace unique identifier.
   */
readonly workspaceUID?: string;

/**
   * A boolean value that indicate if the optimized autoscale feature is enabled or not.
   */
readonly isEnabled: bool;

/**
   * Maximum allowed instances count.
   */
readonly maximum: number;

/**
   * Minimum allowed instances count.
   */
readonly minimum: number;

/**
   * The version of the template defined, for instance 1.
   */
readonly version: number;

/**
   * The number of instances of the cluster.
   */
readonly capacity?: number;

/**
   * SKU size.
   */
readonly size: 'Extra small''Large''Medium''Small';
}

/**
 * SynapseWorkspacesKustopools resource
 */
export class SynapseWorkspacesKustopools extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SynapseWorkspacesKustopoolsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Synapse/workspaces/kustoPools@2021-06-01-preview";
  }

  protected getResourceBody(props: SynapseWorkspacesKustopoolsProps): string {
    return JSON.stringify(
        {properties: {enablePurge: "${bool}", enableStreamingIngest: "${bool}", optimizedAutoscale: {isEnabled: "${bool}", maximum: "${int}", minimum: "${int}", version: "${int}"}, workspaceUID: "string"}, sku: {capacity: "${int}", name: "string", size: "string"}}
    );
  }
}
