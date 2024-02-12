import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CustomerinsightsHubsConnectorsMappingsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:connectors;

/**
   * Type of connector.
   */
readonly connectorType?: 'AzureBlob''CRM''ExchangeOnline''None''Outbound''Salesforce';

/**
   * The description of the connector mapping.
   */
readonly description?: string;

/**
   * Display name for the connector mapping.
   */
readonly displayName?: string;

/**
   * Defines which entity type the file should map to.
   */
readonly entityType: 'Interaction''None''Profile''Relationship';

/**
   * The mapping entity name.
   */
readonly entityTypeName: string;

/**
   * The properties of the mapping.
   */
readonly mappingProperties: ConnectorMappingProperties;

/**
   * The availability of mapping property.
   */
readonly availability: ConnectorMappingAvailability;

/**
   * The operation after import is done.
   */
readonly completeOperation: ConnectorMappingCompleteOperation;

/**
   * The error management setting for the mapping.
   */
readonly errorManagement: ConnectorMappingErrorManagement;

/**
   * The file filter for the mapping.
   */
readonly fileFilter?: string;

/**
   * The folder path for the mapping.
   */
readonly folderPath?: string;

/**
   * The format of mapping property.
   */
readonly format: ConnectorMappingFormat;

/**
   * If the file contains a header or not.
   */
readonly hasHeader?: bool;

/**
   * Ingestion mapping information at property level.
   */
readonly structure: ConnectorMappingStructure[];

/**
   * The frequency to update.
   */
readonly frequency?: 'Day''Hour''Minute''Month''Week';

/**
   * The interval of the given frequency to use.
   */
readonly interval: number;

/**
   * The type of completion operation.
   */
readonly completionOperationType?: 'DeleteFile''DoNothing''MoveFile';

/**
   * The destination folder where files will be moved to once the import is done.
   */
readonly destinationFolder?: string;

/**
   * The error limit allowed while importing data.
   */
readonly errorLimit?: number;

/**
   * The type of error management to use for the mapping.
   */
readonly errorManagementType: 'RejectAndContinue''RejectUntilLimit''StopImport';

/**
   * The oData language.
   */
readonly acceptLanguage?: string;

/**
   * Character separating array elements.
   */
readonly arraySeparator?: string;

/**
   * The character that signifies a break between columns.
   */
readonly columnDelimiter?: string;

/**
   * The type mapping format.
   */
readonly formatType: 'TextFormat';

/**
   * Quote character, used to indicate enquoted fields.
   */
readonly quoteCharacter?: string;

/**
   * Escape character for quotes, can be the same as the quoteCharacter.
   */
readonly quoteEscapeCharacter?: string;

/**
   * The column name of the import file.
   */
readonly columnName: string;

/**
   * Custom format specifier for input parsing.
   */
readonly customFormatSpecifier?: string;

/**
   * Indicates if the column is encrypted.
   */
readonly isEncrypted?: bool;

/**
   * The property name of the mapping entity.
   */
readonly propertyName: string;
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
