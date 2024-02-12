import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CustomerinsightsHubsLinksProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:hubs;

/**
   * Localized descriptions for the Link.
   */
readonly description?: object;

/**
   * Localized display name for the Link.
   */
readonly displayName?: object;

/**
   * The set of properties mappings between the source and target Types.
   */
readonly mappings?: TypePropertiesMapping[];

/**
   * Determines whether this link is supposed to create or delete instances if Link is NOT Reference Only.
   */
readonly operationType?: 'Delete''Upsert';

/**
   * The properties that represent the participating profile.
   */
readonly participantPropertyReferences: ParticipantPropertyReference[];

/**
   * Indicating whether the link is reference only link. This flag is ignored if the Mappings are defined. If the mappings are not defined and it is set to true, links processing will not create or update profiles.
   */
readonly referenceOnly?: bool;

/**
   * Type of source entity.
   */
readonly sourceEntityType: 'Interaction''None''Profile''Relationship';

/**
   * Name of the source Entity Type.
   */
readonly sourceEntityTypeName: string;

/**
   * Type of target entity.
   */
readonly targetEntityType: 'Interaction''None''Profile''Relationship';

/**
   * Name of the target Entity Type.
   */
readonly targetEntityTypeName: string;

/**
   * Link type.
   */
readonly linkType?: 'CopyIfNull''UpdateAlways';

/**
   * Property name on the source Entity Type.
   */
readonly sourcePropertyName: string;

/**
   * Property name on the target Entity Type.
   */
readonly targetPropertyName: string;

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
 * CustomerinsightsHubsLinks resource
 */
export class CustomerinsightsHubsLinks extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CustomerinsightsHubsLinksProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.CustomerInsights/hubs/links@2017-04-26";
  }

  protected getResourceBody(props: CustomerinsightsHubsLinksProps): string {
    return JSON.stringify(
        {properties: {description: {}, displayName: {}, mappings: [{linkType: "string", sourcePropertyName: "string", targetPropertyName: "string"}], operationType: "string", participantPropertyReferences: [{sourcePropertyName: "string", targetPropertyName: "string"}], referenceOnly: "${bool}", sourceEntityType: "string", sourceEntityTypeName: "string", targetEntityType: "string", targetEntityTypeName: "string"}}
    );
  }
}
