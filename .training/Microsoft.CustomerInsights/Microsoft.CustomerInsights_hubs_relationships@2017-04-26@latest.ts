import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CustomerinsightsHubsRelationshipsProps extends IAzAPIBaseProps {

}

/**
 * CustomerinsightsHubsRelationships resource
 */
export class CustomerinsightsHubsRelationships extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CustomerinsightsHubsRelationshipsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.CustomerInsights/hubs/relationships@2017-04-26";
  }

  protected getResourceBody(props: CustomerinsightsHubsRelationshipsProps): string {
    return JSON.stringify(
        {properties: {cardinality: "string", description: {}, displayName: {}, expiryDateTimeUtc: "string", fields: [{arrayValueSeparator: "string", enumValidValues: [{localizedValueNames: {}, value: "${int}"}], fieldName: "string", fieldType: "string", isArray: "${bool}", isAvailableInGraph: "${bool}", isEnum: "${bool}", isFlagEnum: "${bool}", isImage: "${bool}", isLocalizedString: "${bool}", isName: "${bool}", isRequired: "${bool}", maxLength: "${int}", propertyId: "string", schemaItemPropLink: "string"}], lookupMappings: [{fieldMappings: [{profileFieldName: "string", relatedProfileKeyProperty: "string"}]}], profileType: "string", relatedProfileType: "string"}}
    );
  }
}
