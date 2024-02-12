import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatafactoryFactoriesDataflowsProps extends IAzAPIBaseProps {

}

/**
 * DatafactoryFactoriesDataflows resource
 */
export class DatafactoryFactoriesDataflows extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatafactoryFactoriesDataflowsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataFactory/factories/dataflows@2018-06-01";
  }

  protected getResourceBody(props: DatafactoryFactoriesDataflowsProps): string {
    return JSON.stringify(
        {properties: {annotations: ["${object}"], description: "string", folder: {name: "string"}, type: "string"}}
    );
  }
}
