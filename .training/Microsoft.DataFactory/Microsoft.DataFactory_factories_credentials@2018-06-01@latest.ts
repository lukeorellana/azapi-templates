import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatafactoryFactoriesCredentialsProps extends IAzAPIBaseProps {

}

/**
 * DatafactoryFactoriesCredentials resource
 */
export class DatafactoryFactoriesCredentials extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatafactoryFactoriesCredentialsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataFactory/factories/credentials@2018-06-01";
  }

  protected getResourceBody(props: DatafactoryFactoriesCredentialsProps): string {
    return JSON.stringify(
        {properties: {annotations: ["${object}"], description: "string", type: "string", typeProperties: {resourceId: "string"}}}
    );
  }
}
