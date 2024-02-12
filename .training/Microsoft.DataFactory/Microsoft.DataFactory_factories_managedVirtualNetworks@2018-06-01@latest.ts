import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatafactoryFactoriesManagedvirtualnetworksProps extends IAzAPIBaseProps {

}

/**
 * DatafactoryFactoriesManagedvirtualnetworks resource
 */
export class DatafactoryFactoriesManagedvirtualnetworks extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatafactoryFactoriesManagedvirtualnetworksProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataFactory/factories/managedVirtualNetworks@2018-06-01";
  }

  protected getResourceBody(props: DatafactoryFactoriesManagedvirtualnetworksProps): string {
    return JSON.stringify(
        {properties: {}}
    );
  }
}
