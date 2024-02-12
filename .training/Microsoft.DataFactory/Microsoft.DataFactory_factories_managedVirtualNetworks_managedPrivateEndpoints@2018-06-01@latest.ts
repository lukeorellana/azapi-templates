import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatafactoryFactoriesManagedvirtualnetworksManagedprivateendpointsProps extends IAzAPIBaseProps {

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
