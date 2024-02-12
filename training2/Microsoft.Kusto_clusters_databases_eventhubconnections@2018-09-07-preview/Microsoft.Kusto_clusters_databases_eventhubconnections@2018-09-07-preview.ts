import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface KustoClustersDatabasesEventhubconnectionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:databases;

/**
   * The event hub consumer group.
   */
readonly consumerGroup: string;

/**
   * The data format of the message. Optionally the data format can be added to each message.
   */
readonly dataFormat?: 'CSV''JSON''MULTIJSON';

/**
   * The resource ID of the event hub to be used to create a data connection.
   */
readonly eventHubResourceId: string;

/**
   * The mapping rule to be used to ingest the data. Optionally the mapping information can be added to each message.
   */
readonly mappingRuleName?: string;

/**
   * The table where the data should be ingested. Optionally the table information can be added to each message.
   */
readonly tableName?: string;
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
