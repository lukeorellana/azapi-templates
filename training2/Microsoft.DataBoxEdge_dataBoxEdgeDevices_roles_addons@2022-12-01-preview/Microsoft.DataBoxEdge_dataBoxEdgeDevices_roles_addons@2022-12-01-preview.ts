import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DataboxedgeDataboxedgedevicesRolesAddonsProps extends IAzAPIBaseProps {
/**
   * Set the object type
   */
readonly kind: ArcForKubernetes;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:roles;

/**
   * Addon type.
   */
readonly kind: 'ArcForKubernetes';

/**
   * Arc resource group name
   */
readonly resourceGroupName: string;

/**
   * Arc resource location
   */
readonly resourceLocation: string;

/**
   * Arc resource Name
   */
readonly resourceName: string;

/**
   * Arc resource subscription Id
   */
readonly subscriptionId: string;
}

/**
 * DataboxedgeDataboxedgedevicesRolesAddons resource
 */
export class DataboxedgeDataboxedgedevicesRolesAddons extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DataboxedgeDataboxedgedevicesRolesAddonsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles/addons@2022-12-01-preview";
  }

  protected getResourceBody(props: DataboxedgeDataboxedgedevicesRolesAddonsProps): string {
    return JSON.stringify(
        {kind: "string"}
    );
  }
}
