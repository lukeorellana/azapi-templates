import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatafactoryFactoriesTriggersProps extends IAzAPIBaseProps {

}

/**
 * DatafactoryFactoriesTriggers resource
 */
export class DatafactoryFactoriesTriggers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatafactoryFactoriesTriggersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataFactory/factories/triggers@2018-06-01";
  }

  protected getResourceBody(props: DatafactoryFactoriesTriggersProps): string {
    return JSON.stringify(
        {properties: {annotations: ["${object}"], description: "string", type: "string"}}
    );
  }
}
