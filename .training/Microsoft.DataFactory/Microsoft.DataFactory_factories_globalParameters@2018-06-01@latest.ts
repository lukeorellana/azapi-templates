import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatafactoryFactoriesGlobalparametersProps extends IAzAPIBaseProps {

}

/**
 * DatafactoryFactoriesGlobalparameters resource
 */
export class DatafactoryFactoriesGlobalparameters extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatafactoryFactoriesGlobalparametersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataFactory/factories/globalParameters@2018-06-01";
  }

  protected getResourceBody(props: DatafactoryFactoriesGlobalparametersProps): string {
    return JSON.stringify(
        {properties: {}}
    );
  }
}
