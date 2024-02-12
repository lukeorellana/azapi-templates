import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CustomerinsightsHubsRelationshipsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:hubs;

/**
   * The Relationship Cardinality.
   */
readonly cardinality?: 'ManyToMany''OneToMany''OneToOne';

/**
   * Localized descriptions for the Relationship.
   */
readonly description?: object;

/**
   * Localized display name for the Relationship.
   */
readonly displayName?: object;

/**
   * The expiry date time in UTC.
   */
readonly expiryDateTimeUtc?: string;

/**
   * The properties of the Relationship.
   */
readonly fields?: PropertyDefinition[];

/**
   * Optional property to be used to map fields in profile to their strong ids in related profile.
   */
readonly lookupMappings?: RelationshipTypeMapping[];

/**
   * Profile type.
   */
readonly profileType: string;

/**
   * Related profile being referenced.
   */
readonly relatedProfileType: string;

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
   * Maps a profile property with the StrongId of related profile. This is an array to support StrongIds that are composite key as well.
   */
readonly fieldMappings: RelationshipTypeFieldMapping[];

/**
   * Specifies the fieldName in profile.
   */
readonly profileFieldName: string;

/**
   * Specifies the KeyProperty (from StrongId) of the related profile.
   */
readonly relatedProfileKeyProperty: string;
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
