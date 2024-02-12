import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CustomerinsightsHubsConnectorsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:hubs;

/**
   * Name of the connector.
   */
readonly connectorName?: string;

/**
   * The connector properties.
   */
readonly connectorProperties: object;

/**
   * Type of connector.
   */
readonly connectorType: 'AzureBlob''CRM''ExchangeOnline''None''Outbound''Salesforce';

/**
   * Description of the connector.
   */
readonly description?: string;

/**
   * Display name of the connector.
   */
readonly displayName?: string;

/**
   * If this is an internal connector.
   */
readonly isInternal?: bool;
}

/**
 * CustomerinsightsHubsConnectors resource
 */
export class CustomerinsightsHubsConnectors extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CustomerinsightsHubsConnectorsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.CustomerInsights/hubs/connectors@2017-04-26";
  }

  protected getResourceBody(props: CustomerinsightsHubsConnectorsProps): string {
    return JSON.stringify(
        {properties: {connectorName: "string", connectorProperties: {}, connectorType: "string", description: "string", displayName: "string", isInternal: "${bool}"}}
    );
  }
}
