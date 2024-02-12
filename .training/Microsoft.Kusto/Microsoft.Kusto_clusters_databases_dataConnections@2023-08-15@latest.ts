import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface KustoClustersDatabasesDataconnectionsProps extends IAzAPIBaseProps {

}

/**
 * KustoClustersDatabasesDataconnections resource
 */
export class KustoClustersDatabasesDataconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: KustoClustersDatabasesDataconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Kusto/clusters/databases/dataConnections@2023-08-15";
  }

  protected getResourceBody(props: KustoClustersDatabasesDataconnectionsProps): string {
    return JSON.stringify(
        {kind: "string"}
    );
  }
}
