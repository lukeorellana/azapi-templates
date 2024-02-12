import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CustomerinsightsHubsInteractionsProps extends IAzAPIBaseProps {
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
   * Default data source is specifically used in cases where data source is not specified in an instance.
   */
readonly defaultDataSource?: DataSource;

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
   * The id property names. Properties which uniquely identify an interaction instance.
   */
readonly idPropertyNames?: string[];

/**
   * The instance count.
   */
readonly instancesCount?: number;

/**
   * An interaction can be tagged as an activity only during create. This enables the interaction to be editable and can enable merging of properties from multiple data sources based on precedence, which is defined at a link level.
   */
readonly isActivity?: bool;

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
   * Profiles that participated in the interaction.
   */
readonly participantProfiles?: Participant[];

/**
   * The primary participant property name for an interaction ,This is used to logically represent the agent of the interaction, Specify the participant name here from ParticipantName.
   */
readonly primaryParticipantProfilePropertyName?: string;

/**
   * The schema org link. This helps ACI identify and suggest semantic models.
   */
readonly schemaItemTypeLink?: string;

/**
   * Small Image associated with the Property or EntityType.
   */
readonly smallImage?: string;

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
   * Participant name.
   */
readonly participantName: string;

/**
   * The property references.
   */
readonly participantPropertyReferences: ParticipantPropertyReference[];

/**
   * Profile type name.
   */
readonly profileTypeName: string;

/**
   * The role that the participant is playing in the interaction.
   */
readonly role?: string;

/**
   * The source property that maps to the target property.
   */
readonly sourcePropertyName: string;

/**
   * The target property that maps to the source property.
   */
readonly targetPropertyName: string;
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
