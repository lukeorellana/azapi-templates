import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MachinelearningservicesWorkspacesOutboundrulesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:workspaces;

/**
   * Category of a managed network Outbound Rule of a machine learning workspace.
   */
readonly category?: 'Recommended''Required''UserDefined';

/**
   * Type of a managed network Outbound Rule of a machine learning workspace.
   */
readonly status?: 'Active''Inactive';

/**
   * Set the object type
   */
readonly type: FQDNPrivateEndponumberServiceTag;

/**
   * Type of a managed network Outbound Rule of a machine learning workspace.
   */
readonly type: 'FQDN';

/**
   * 
   */
readonly destination?: string;

/**
   * Type of a managed network Outbound Rule of a machine learning workspace.
   */
readonly type: 'PrivateEndponumber';

/**
   * Private Endpoint destination for a Private Endpoint Outbound Rule for the managed network of a machine learning workspace.
   */
readonly destination?: PrivateEndponumberDestination;

/**
   * 
   */
readonly serviceResourceId?: string;

/**
   * 
   */
readonly sparkEnabled?: bool;

/**
   * Type of a managed network Outbound Rule of a machine learning workspace.
   */
readonly sparkStatus?: 'Active''Inactive';

/**
   * 
   */
readonly subresourceTarget?: string;

/**
   * Type of a managed network Outbound Rule of a machine learning workspace.
   */
readonly type: 'ServiceTag';

/**
   * Service Tag destination for a Service Tag Outbound Rule for the managed network of a machine learning workspace.
   */
readonly destination?: ServiceTagDestination;

/**
   * The action enum for networking rule.
   */
readonly action?: 'Allow''Deny';

/**
   * 
   */
readonly portRanges?: string;

/**
   * 
   */
readonly protocol?: string;

/**
   * 
   */
readonly serviceTag?: string;
}

/**
 * MachinelearningservicesWorkspacesOutboundrules resource
 */
export class MachinelearningservicesWorkspacesOutboundrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MachinelearningservicesWorkspacesOutboundrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.MachineLearningServices/workspaces/outboundRules@2023-10-01";
  }

  protected getResourceBody(props: MachinelearningservicesWorkspacesOutboundrulesProps): string {
    return JSON.stringify(
        {properties: {category: "string", status: "string", type: "string"}}
    );
  }
}
