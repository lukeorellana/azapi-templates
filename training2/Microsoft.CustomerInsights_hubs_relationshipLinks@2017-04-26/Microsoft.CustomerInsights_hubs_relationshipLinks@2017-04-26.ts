import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CustomerinsightsHubsRelationshiplinksProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:hubs;

/**
   * Localized descriptions for the Relationship Link.
   */
readonly description?: object;

/**
   * Localized display name for the Relationship Link.
   */
readonly displayName?: object;

/**
   * The InteractionType associated with the Relationship Link.
   */
readonly interactionType: string;

/**
   * The mappings between Interaction and Relationship fields.
   */
readonly mappings?: RelationshipLinkFieldMapping[];

/**
   * The property references for the Profile of the Relationship.
   */
readonly profilePropertyReferences: ParticipantProfilePropertyReference[];

/**
   * The property references for the Related Profile of the Relationship.
   */
readonly relatedProfilePropertyReferences: ParticipantProfilePropertyReference[];

/**
   * The Relationship associated with the Link.
   */
readonly relationshipName: string;

/**
   * The field name on the Interaction Type.
   */
readonly interactionFieldName: string;

/**
   * Link type.
   */
readonly linkType?: 'CopyIfNull''UpdateAlways';

/**
   * The field name on the Relationship metadata.
   */
readonly relationshipFieldName: string;

/**
   * The source interaction property that maps to the target profile property.
   */
readonly interactionPropertyName: string;

/**
   * The target profile property that maps to the source interaction property.
   */
readonly profilePropertyName: string;
}

/**
 * CustomerinsightsHubsRelationshiplinks resource
 */
export class CustomerinsightsHubsRelationshiplinks extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CustomerinsightsHubsRelationshiplinksProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.CustomerInsights/hubs/relationshipLinks@2017-04-26";
  }

  protected getResourceBody(props: CustomerinsightsHubsRelationshiplinksProps): string {
    return JSON.stringify(
        {properties: {description: {}, displayName: {}, interactionType: "string", mappings: [{interactionFieldName: "string", linkType: "string", relationshipFieldName: "string"}], profilePropertyReferences: [{interactionPropertyName: "string", profilePropertyName: "string"}], relatedProfilePropertyReferences: [{interactionPropertyName: "string", profilePropertyName: "string"}], relationshipName: "string"}}
    );
  }
}
