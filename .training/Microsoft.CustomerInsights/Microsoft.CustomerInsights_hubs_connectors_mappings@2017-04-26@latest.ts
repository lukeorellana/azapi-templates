import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CustomerinsightsHubsConnectorsMappingsProps extends IAzAPIBaseProps {

}

/**
 * CustomerinsightsHubsConnectorsMappings resource
 */
export class CustomerinsightsHubsConnectorsMappings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CustomerinsightsHubsConnectorsMappingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.CustomerInsights/hubs/connectors/mappings@2017-04-26";
  }

  protected getResourceBody(props: CustomerinsightsHubsConnectorsMappingsProps): string {
    return JSON.stringify(
        {properties: {connectorType: "string", description: "string", displayName: "string", entityType: "string", entityTypeName: "string", mappingProperties: {availability: {frequency: "string", interval: "${int}"}, completeOperation: {completionOperationType: "string", destinationFolder: "string"}, errorManagement: {errorLimit: "${int}", errorManagementType: "string"}, fileFilter: "string", folderPath: "string", format: {acceptLanguage: "string", arraySeparator: "string", columnDelimiter: "string", formatType: "TextFormat", quoteCharacter: "string", quoteEscapeCharacter: "string"}, hasHeader: "${bool}", structure: [{columnName: "string", customFormatSpecifier: "string", isEncrypted: "${bool}", propertyName: "string"}]}}}
    );
  }
}
