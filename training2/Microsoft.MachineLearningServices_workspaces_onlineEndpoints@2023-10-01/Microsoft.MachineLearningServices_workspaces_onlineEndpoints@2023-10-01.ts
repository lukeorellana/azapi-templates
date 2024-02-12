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
   * [Required] Use 'Key' for key based authentication and 'AMLToken' for Azure Machine Learning token-based authentication. 'Key' doesn't expire but 'AMLToken' does.
   */
readonly authMode: 'AADToken''AMLToken''Key';

/**
   * ARM resource ID of the compute if it exists.optional
   */
readonly compute?: string;

/**
   * Description of the inference endpoint.
   */
readonly description?: string;

/**
   * EndpointAuthKeys to set initially on an Endpoint.This property will always be returned as null. AuthKey values must be retrieved using the ListKeys API.
   */
readonly keys?: EndponumberAuthKeys;

/**
   * Percentage of traffic to be mirrored to each deployment without using returned scoring. Traffic values need to sum to utmost 50.
   */
readonly mirrorTraffic?: OnlineEndponumberMirrorTraffic;

/**
   * Set to "Enabled" for endpoints that should allow public access when Private Link is enabled.
   */
readonly publicNetworkAccess?: 'Disabled''Enabled';

/**
   * Percentage of traffic from endpoint to divert to each deployment. Traffic values need to sum to 100.
   */
readonly traffic?: OnlineEndponumberTraffic;

/**
   * The primary key.
   */
readonly primaryKey?: string;

/**
   * The secondary key.
   */
readonly secondaryKey?: string;

/**
   * The primary key.
   */
readonly primaryKey?: string;

/**
   * The secondary key.
   */
readonly secondaryKey?: string;

/**
   * The primary key.
   */
readonly primaryKey?: string;

/**
   * The secondary key.
   */
readonly secondaryKey?: string;

/**
   * 
   */
readonly {customized property}?: number;

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
readonly {customized property}?: number;

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
