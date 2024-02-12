import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CommunicationEmailservicesDomainsSenderusernamesProps extends IAzAPIBaseProps {

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
