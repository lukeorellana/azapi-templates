import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface KustoClustersManagedprivateendpointsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:clusters;

/**
   * The groupId in which the managed private endpoint is created.
   */
readonly groupId: string;

/**
   * The ARM resource ID of the resource for which the managed private endpoint is created.
   */
readonly privateLinkResourceId: string;

/**
   * The region of the resource to which the managed private endpoint is created.
   */
readonly privateLinkResourceRegion?: string;

/**
   * The user request message.
   */
readonly requestMessage?: string;
}

/**
 * KustoClustersManagedprivateendpoints resource
 */
export class KustoClustersManagedprivateendpoints extends AzAPIBase {
  constructor(scope: Construct, id: string, props: KustoClustersManagedprivateendpointsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Kusto/clusters/managedPrivateEndpoints@2023-08-15";
  }

  protected getResourceBody(props: KustoClustersManagedprivateendpointsProps): string {
    return JSON.stringify(
        {properties: {groupId: "string", privateLinkResourceId: "string", privateLinkResourceRegion: "string", requestMessage: "string"}}
    );
  }
}
