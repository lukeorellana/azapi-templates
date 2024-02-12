import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface KustoClustersDatabasesEventhubconnectionsProps extends IAzAPIBaseProps {

}

/**
 * KustoClustersDatabasesEventhubconnections resource
 */
export class KustoClustersDatabasesEventhubconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: KustoClustersDatabasesEventhubconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Kusto/clusters/databases/eventhubconnections@2018-09-07-preview";
  }

  protected getResourceBody(props: KustoClustersDatabasesEventhubconnectionsProps): string {
    return JSON.stringify(
        {properties: {consumerGroup: "string", dataFormat: "string", eventHubResourceId: "string", mappingRuleName: "string", tableName: "string"}}
    );
  }
}
