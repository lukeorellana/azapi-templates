import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatafactoryFactoriesDatasetsProps extends IAzAPIBaseProps {

}

/**
 * DatafactoryFactoriesDatasets resource
 */
export class DatafactoryFactoriesDatasets extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatafactoryFactoriesDatasetsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataFactory/factories/datasets@2018-06-01";
  }

  protected getResourceBody(props: DatafactoryFactoriesDatasetsProps): string {
    return JSON.stringify(
        {properties: {annotations: ["${object}"], description: "string", folder: {name: "string"}, linkedServiceName: {parameters: {}, referenceName: "string", type: "LinkedServiceReference"}, parameters: {}, type: "string"}}
    );
  }
}
