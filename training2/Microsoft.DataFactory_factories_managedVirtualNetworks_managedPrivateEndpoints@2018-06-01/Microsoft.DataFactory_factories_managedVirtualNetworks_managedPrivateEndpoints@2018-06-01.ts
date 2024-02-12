import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatafactoryFactoriesManagedvirtualnetworksManagedprivateendpointsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:managedVirtualNetworks;

/**
   * The managed private endpoint connection state
   */
readonly connectionState?: ConnectionStateProperties;

/**
   * Fully qualified domain names
   */
readonly fqdns?: string[];

/**
   * The groupId to which the managed private endpoint is created
   */
readonly groupId?: string;

/**
   * The ARM resource ID of the resource to which the managed private endpoint is created
   */
readonly privateLinkResourceId?: string;
}

/**
 * DatafactoryFactoriesManagedvirtualnetworksManagedprivateendpoints resource
 */
export class DatafactoryFactoriesManagedvirtualnetworksManagedprivateendpoints extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatafactoryFactoriesManagedvirtualnetworksManagedprivateendpointsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataFactory/factories/managedVirtualNetworks/managedPrivateEndpoints@2018-06-01";
  }

  protected getResourceBody(props: DatafactoryFactoriesManagedvirtualnetworksManagedprivateendpointsProps): string {
    return JSON.stringify(
        {properties: {connectionState: {}, fqdns: ["string"], groupId: "string", privateLinkResourceId: "string"}}
    );
  }
}
