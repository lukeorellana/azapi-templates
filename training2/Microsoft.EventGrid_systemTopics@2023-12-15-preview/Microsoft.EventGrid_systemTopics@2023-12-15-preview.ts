import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface EventgridSystemtopicsProps extends IAzAPIBaseProps {
/**
   * Identity information for the resource.
   */
readonly identity?: IdentityInfo;

/**
   * The principal ID of resource identity.
   */
readonly principalId?: string;

/**
   * The tenant ID of resource.
   */
readonly tenantId?: string;

/**
   * The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove any identity.
   */
readonly type?: 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned';

/**
   * The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form:'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.This property is currently not used and reserved for future usage.
   */
readonly userAssignedIdentities?: IdentityInfoUserAssignedIdentities;

/**
   * 
   */
readonly {customized property}?: UserIdentityProperties;

/**
   * The client id of user assigned identity.
   */
readonly clientId?: string;

/**
   * The principal id of user assigned identity.
   */
readonly principalId?: string;

/**
   * Source for the system topic.
   */
readonly source?: string;

/**
   * TopicType for the system topic.
   */
readonly topicType?: string;
}

/**
 * EventgridSystemtopics resource
 */
export class EventgridSystemtopics extends AzAPIBase {
  constructor(scope: Construct, id: string, props: EventgridSystemtopicsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.EventGrid/systemTopics@2023-12-15-preview";
  }

  protected getResourceBody(props: EventgridSystemtopicsProps): string {
    return JSON.stringify(
        {properties: {source: "string", topicType: "string"}}
    );
  }
}
