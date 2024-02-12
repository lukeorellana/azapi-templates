import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CustomerinsightsHubsProfilesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:hubs;

/**
   * The api entity set name. This becomes the odata entity set name for the entity Type being referred in this object.
   */
readonly apiEntitySetName?: string;

/**
   * The attributes for the Type.
   */
readonly attributes?: object;

/**
   * Localized descriptions for the property.
   */
readonly description?: object;

/**
   * Localized display names for the property.
   */
readonly displayName?: object;

/**
   * Type of entity.
   */
readonly entityType?: 'Interaction''None''Profile''Relationship';

/**
   * The properties of the Profile.
   */
readonly fields?: PropertyDefinition[];

/**
   * The instance count.
   */
readonly instancesCount?: number;

/**
   * Large Image associated with the Property or EntityType.
   */
readonly largeImage?: string;

/**
   * Any custom localized attributes for the Type.
   */
readonly localizedAttributes?: object;

/**
   * Medium Image associated with the Property or EntityType.
   */
readonly mediumImage?: string;

/**
   * The schema org link. This helps ACI identify and suggest semantic models.
   */
readonly schemaItemTypeLink?: string;

/**
   * Small Image associated with the Property or EntityType.
   */
readonly smallImage?: string;

/**
   * The strong IDs.
   */
readonly strongIds?: StrongId[];

/**
   * The timestamp property name. Represents the time when the interaction or profile update happened.
   */
readonly timestampFieldName?: string;

/**
   * The name of the entity.
   */
readonly typeName?: string;

/**
   * Array value separator for properties with isArray set.
   */
readonly arrayValueSeparator?: string;

/**
   * Describes valid values for an enum property.
   */
readonly enumValidValues?: ProfileEnumValidValuesFormat[];

/**
   * Name of the property.
   */
readonly fieldName: string;

/**
   * Type of the property.
   */
readonly fieldType: string;

/**
   * Indicates if the property is actually an array of the fieldType above on the data api.
   */
readonly isArray?: bool;

/**
   * Whether property is available in graph or not.
   */
readonly isAvailableInGraph?: bool;

/**
   * Indicates if the property is an enum.
   */
readonly isEnum?: bool;

/**
   * Indicates if the property is an flag enum.
   */
readonly isFlagEnum?: bool;

/**
   * Whether the property is an Image.
   */
readonly isImage?: bool;

/**
   * Whether the property is a localized string.
   */
readonly isLocalizedString?: bool;

/**
   * Whether the property is a name or a part of name.
   */
readonly isName?: bool;

/**
   * Whether property value is required on instances, IsRequired field only for Interaction. Profile Instance will not check for required field.
   */
readonly isRequired?: bool;

/**
   * Max length of string. Used only if type is string.
   */
readonly maxLength?: number;

/**
   * The ID associated with the property.
   */
readonly propertyId?: string;

/**
   * URL encoded schema.org item prop link for the property.
   */
readonly schemaItemPropLink?: string;

/**
   * Localized names of the enum member.
   */
readonly localizedValueNames?: object;

/**
   * The integer value of the enum member.
   */
readonly value?: number;

/**
   * Localized descriptions.
   */
readonly description?: object;

/**
   * Localized display name.
   */
readonly displayName?: object;

/**
   * The properties which make up the unique ID.
   */
readonly keyPropertyNames: string[];

/**
   * The Name identifying the strong ID.
   */
readonly strongIdName: string;
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
