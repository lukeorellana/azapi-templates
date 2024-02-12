import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatafactoryFactoriesPrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * DatafactoryFactoriesPrivateendpointconnections resource
 */
export class DatafactoryFactoriesPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatafactoryFactoriesPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataFactory/factories/privateEndpointConnections@2018-06-01";
  }

  protected getResourceBody(props: DatafactoryFactoriesPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateEndpoint: {id: "string"}, privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}}
    );
  }
}
