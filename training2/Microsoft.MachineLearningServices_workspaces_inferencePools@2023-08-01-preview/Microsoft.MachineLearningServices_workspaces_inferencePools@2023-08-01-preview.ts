import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * Sku details required for ARM contract for Autoscaling.
   */
readonly sku?: Sku;

/**
   * Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type.
   */
readonly kind?: string;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:workspaces;

/**
   * Managed service identity (system assigned and/or user assigned identities)
   */
readonly identity?: ManagedServiceIdentity;

/**
   * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
   */
readonly type: 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned';

/**
   * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
   */
readonly userAssignedIdentities?: UserAssignedIdentities;

/**
   * 
   */
readonly {customized property}?: UserAssignedIdentity;

/**
   * Code configuration for the inference pool.
   */
readonly codeConfiguration?: CodeConfiguration;

/**
   * Description of the resource.
   */
readonly description?: string;

/**
   * EnvironmentConfiguration for the inference pool.
   */
readonly environmentConfiguration?: PoolEnvironmentConfiguration;

/**
   * ModelConfiguration for the inference pool.
   */
readonly modelConfiguration?: PoolModelConfiguration;

/**
   * [Required] Compute instance type.
   */
readonly nodeSkuType: string Constranumbers:Min length = 1Pattern =[a-zA-Z0-9_];

/**
   * Request configuration for the inference pool.
   */
readonly requestConfiguration?: RequestConfiguration;

/**
   * ARM resource ID of the code asset.
   */
readonly codeId?: string;

/**
   * [Required] The script to execute on startup. eg. "score.py"
   */
readonly scoringScript: string Constranumbers:Min length = 1Pattern =[a-zA-Z0-9_];

/**
   * ARM resource ID of the environment specification for the inference pool.
   */
readonly environmentId?: string;

/**
   * Environment variables configuration for the inference pool.
   */
readonly environmentVariables?: PoolEnvironmentConfigurationEnvironmentVariables;

/**
   * Liveness probe monitors the health of the container regularly.
   */
readonly livenessProbe?: ProbeSettings;

/**
   * Readiness probe validates if the container is ready to serve traffic. The properties and defaults are the same as liveness probe.
   */
readonly readinessProbe?: ProbeSettings;

/**
   * This verifies whether the application within a container is started. Startup probes run before any other probe, and, unless it finishes successfully, disables other probes.
   */
readonly startupProbe?: ProbeSettings;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * The number of failures to allow before returning an unhealthy status.
   */
readonly failureThreshold?: number;

/**
   * The delay before the first probe in ISO 8601 format.
   */
readonly initialDelay?: string;

/**
   * The length of time between probes in ISO 8601 format.
   */
readonly period?: string;

/**
   * The number of successful probes before returning a healthy status.
   */
readonly successThreshold?: number;

/**
   * The probe timeout in ISO 8601 format.
   */
readonly timeout?: string;

/**
   * The URI path to the model.
   */
readonly modelId?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * The number of maximum concurrent requests per node allowed per deployment. Defaults to 1.
   */
readonly maxConcurrentRequestsPerInstance?: number;

/**
   * The scoring timeout in ISO 8601 format.Defaults to 5000ms.
   */
readonly requestTimeout?: string;

/**
   * If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
   */
readonly capacity?: number;

/**
   * If the service has different generations of hardware, for the same SKU, then that can be captured here.
   */
readonly family?: string;

/**
   * The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
   */
readonly size?: string;

/**
   * This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
   */
readonly tier?: 'Basic''Free''Premium''Standard';
}

/**
 *  resource
 */
export class  extends AzAPIBase {
  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "";
  }

  protected getResourceBody(props: Props): string {
    return JSON.stringify(
        
    );
  }
}
