import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface KustoClustersDatabasesProps extends IAzAPIBaseProps {

}

/**
 * KustoClustersDatabases resource
 */
export class KustoClustersDatabases extends AzAPIBase {
  constructor(scope: Construct, id: string, props: KustoClustersDatabasesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Kusto/clusters/databases@2023-08-15";
  }

  protected getResourceBody(props: KustoClustersDatabasesProps): string {
    return JSON.stringify(
        {kind: "string"}
    );
  }
}
