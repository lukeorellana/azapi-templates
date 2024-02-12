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
readonly parent?: Symbolic name for resource of type:onlineEndponumbers;

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
   * If true, enables Application Insights logging.
   */
readonly appInsightsEnabled?: bool;

/**
   * Code configuration for the endpoint deployment.
   */
readonly codeConfiguration?: CodeConfiguration;

/**
   * Description of the endpoint deployment.
   */
readonly description?: string;

/**
   * If Enabled, allow egress public network access. If Disabled, this will create secure egress. Default: Enabled.
   */
readonly egressPublicNetworkAccess?: 'Disabled''Enabled';

/**
   * ARM resource ID or AssetId of the environment specification for the endpoint deployment.
   */
readonly environmentId?: string;

/**
   * Environment variables configuration for the deployment.
   */
readonly environmentVariables?: EndponumberDeploymentPropertiesBaseEnvironmentVariables;

/**
   * Compute instance type.
   */
readonly instanceType?: string;

/**
   * Liveness probe monitors the health of the container regularly.
   */
readonly livenessProbe?: ProbeSettings;

/**
   * The URI path to the model.
   */
readonly model?: string;

/**
   * The path to mount the model in custom container.
   */
readonly modelMountPath?: string;

/**
   * Readiness probe validates if the container is ready to serve traffic. The properties and defaults are the same as liveness probe.
   */
readonly readinessProbe?: ProbeSettings;

/**
   * Request settings for the deployment.
   */
readonly requestSettings?: OnlineRequestSettings;

/**
   * Scale settings for the deployment.If it is null or not provided,it defaults to TargetUtilizationScaleSettings for KubernetesOnlineDeploymentand to DefaultScaleSettings for ManagedOnlineDeployment.
   */
readonly scaleSettings?: OnlineScaleSettings;

/**
   * Set the object type
   */
readonly endpointComputeType: KubernetesManaged;

/**
   * ARM resource ID of the code asset.
   */
readonly codeId?: string;

/**
   * [Required] The script to execute on startup. eg. "score.py"
   */
readonly scoringScript: string Constranumbers:Min length = 1Pattern =[a-zA-Z0-9_];

/**
   * 
   */
readonly {customized property}?: string;

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
   * The maximum amount of time a request will stay in the queue in ISO 8601 format.Defaults to 500ms.
   */
readonly maxQueueWait?: string;

/**
   * The scoring timeout in ISO 8601 format.Defaults to 5000ms.
   */
readonly requestTimeout?: string;

/**
   * Set the object type
   */
readonly scaleType: DefaultTargetUtilization;

/**
   * [Required] Type of deployment scaling algorithm
   */
readonly scaleType: 'Default';

/**
   * [Required] Type of deployment scaling algorithm
   */
readonly scaleType: 'TargetUtilization';

/**
   * The maximum number of instances that the deployment can scale to. The quota will be reserved for max_instances.
   */
readonly maxInstances?: number;

/**
   * The minimum number of instances to always be present.
   */
readonly minInstances?: number;

/**
   * The polling interval in ISO 8691 format. Only supports duration with precision as low as Seconds.
   */
readonly pollingInterval?: string;

/**
   * Target CPU usage for the autoscaler.
   */
readonly targetUtilizationPercentage?: number;

/**
   * [Required] The compute type of the endpoint.
   */
readonly endpointComputeType: 'Kubernetes';

/**
   * The resource requirements for the container (cpu and memory).
   */
readonly containerResourceRequirements?: ContainerResourceRequirements;

/**
   * Container resource limit info:
   */
readonly containerResourceLimits?: ContainerResourceSettings;

/**
   * Container resource request info:
   */
readonly containerResourceRequests?: ContainerResourceSettings;

/**
   * Number of vCPUs request/limit for container. More info:https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
   */
readonly cpu?: string;

/**
   * Number of Nvidia GPU cards request/limit for container. More info:https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
   */
readonly gpu?: string;

/**
   * Memory size request/limit for container. More info:https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
   */
readonly memory?: string;

/**
   * [Required] The compute type of the endpoint.
   */
readonly endpointComputeType: 'Managed';

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
