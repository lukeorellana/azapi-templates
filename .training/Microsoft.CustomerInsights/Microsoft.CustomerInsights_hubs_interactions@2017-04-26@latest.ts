import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CustomerinsightsHubsInteractionsProps extends IAzAPIBaseProps {

}

/**
 * CustomerinsightsHubsInteractions resource
 */
export class CustomerinsightsHubsInteractions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CustomerinsightsHubsInteractionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.CustomerInsights/hubs/interactions@2017-04-26";
  }

  protected getResourceBody(props: CustomerinsightsHubsInteractionsProps): string {
    return JSON.stringify(
        {properties: {apiEntitySetName: "string", attributes: {}, defaultDataSource: {}, description: {}, displayName: {}, entityType: "string", fields: [{arrayValueSeparator: "string", enumValidValues: [{localizedValueNames: {}, value: "${int}"}], fieldName: "string", fieldType: "string", isArray: "${bool}", isAvailableInGraph: "${bool}", isEnum: "${bool}", isFlagEnum: "${bool}", isImage: "${bool}", isLocalizedString: "${bool}", isName: "${bool}", isRequired: "${bool}", maxLength: "${int}", propertyId: "string", schemaItemPropLink: "string"}], idPropertyNames: ["string"], instancesCount: "${int}", isActivity: "${bool}", largeImage: "string", localizedAttributes: {}, mediumImage: "string", participantProfiles: [{description: {}, displayName: {}, participantName: "string", participantPropertyReferences: [{sourcePropertyName: "string", targetPropertyName: "string"}], profileTypeName: "string", role: "string"}], primaryParticipantProfilePropertyName: "string", schemaItemTypeLink: "string", smallImage: "string", timestampFieldName: "string", typeName: "string"}}
    );
  }
}
