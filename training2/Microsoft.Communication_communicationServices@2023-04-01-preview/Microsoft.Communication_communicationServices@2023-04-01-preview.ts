import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CommunicationCommunicationservicesProps extends IAzAPIBaseProps {
/**
   * Managed service identity (system assigned and/or user assigned identities)
   */
readonly identity?: ManagedServiceIdentity;

/**
   * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
   */
readonly type: 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned';

/**
   * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
   */
readonly userAssignedIdentities?: object;

/**
   * The location where the communication service stores its data at rest.
   */
readonly dataLocation: string;

/**
   * List of email Domain resource Ids.
   */
readonly linkedDomains?: string[];
}

/**
 * CommunicationCommunicationservices resource
 */
export class CommunicationCommunicationservices extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CommunicationCommunicationservicesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Communication/communicationServices@2023-04-01-preview";
  }

  protected getResourceBody(props: CommunicationCommunicationservicesProps): string {
    return JSON.stringify(
        {properties: {dataLocation: "string", linkedDomains: ["string"]}}
    );
  }
}
