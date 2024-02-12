import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatafactoryFactoriesLinkedservicesProps extends IAzAPIBaseProps {

}

/**
 * DatafactoryFactoriesLinkedservices resource
 */
export class DatafactoryFactoriesLinkedservices extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatafactoryFactoriesLinkedservicesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataFactory/factories/linkedservices@2018-06-01";
  }

  protected getResourceBody(props: DatafactoryFactoriesLinkedservicesProps): string {
    return JSON.stringify(
        {properties: {annotations: ["${object}"], connectVia: {parameters: {}, referenceName: "string", type: "IntegrationRuntimeReference"}, description: "string", parameters: {}, type: "string"}}
    );
  }
}
