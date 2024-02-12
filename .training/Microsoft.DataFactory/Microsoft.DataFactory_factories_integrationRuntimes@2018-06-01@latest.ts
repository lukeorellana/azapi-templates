import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatafactoryFactoriesIntegrationruntimesProps extends IAzAPIBaseProps {

}

/**
 * DatafactoryFactoriesIntegrationruntimes resource
 */
export class DatafactoryFactoriesIntegrationruntimes extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatafactoryFactoriesIntegrationruntimesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataFactory/factories/integrationRuntimes@2018-06-01";
  }

  protected getResourceBody(props: DatafactoryFactoriesIntegrationruntimesProps): string {
    return JSON.stringify(
        {properties: {description: "string", type: "string"}}
    );
  }
}
