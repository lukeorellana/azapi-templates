import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CustomerinsightsHubsProfilesProps extends IAzAPIBaseProps {

}

/**
 * CustomerinsightsHubsProfiles resource
 */
export class CustomerinsightsHubsProfiles extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CustomerinsightsHubsProfilesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.CustomerInsights/hubs/profiles@2017-04-26";
  }

  protected getResourceBody(props: CustomerinsightsHubsProfilesProps): string {
    return JSON.stringify(
        {properties: {apiEntitySetName: "string", attributes: {}, description: {}, displayName: {}, entityType: "string", fields: [{arrayValueSeparator: "string", enumValidValues: [{localizedValueNames: {}, value: "${int}"}], fieldName: "string", fieldType: "string", isArray: "${bool}", isAvailableInGraph: "${bool}", isEnum: "${bool}", isFlagEnum: "${bool}", isImage: "${bool}", isLocalizedString: "${bool}", isName: "${bool}", isRequired: "${bool}", maxLength: "${int}", propertyId: "string", schemaItemPropLink: "string"}], instancesCount: "${int}", largeImage: "string", localizedAttributes: {}, mediumImage: "string", schemaItemTypeLink: "string", smallImage: "string", strongIds: [{description: {}, displayName: {}, keyPropertyNames: ["string"], strongIdName: "string"}], timestampFieldName: "string", typeName: "string"}}
    );
  }
}
