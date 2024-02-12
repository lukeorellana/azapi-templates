import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CommunicationEmailservicesDomainsSenderusernamesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:domains;

/**
   * The display name for the senderUsername.
   */
readonly displayName?: string;

/**
   * A sender senderUsername to be used when sending emails.
   */
readonly username: string;
}

/**
 * CommunicationEmailservicesDomainsSenderusernames resource
 */
export class CommunicationEmailservicesDomainsSenderusernames extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CommunicationEmailservicesDomainsSenderusernamesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Communication/emailServices/domains/senderUsernames@2023-04-01-preview";
  }

  protected getResourceBody(props: CommunicationEmailservicesDomainsSenderusernamesProps): string {
    return JSON.stringify(
        {properties: {displayName: "string", username: "string"}}
    );
  }
}
