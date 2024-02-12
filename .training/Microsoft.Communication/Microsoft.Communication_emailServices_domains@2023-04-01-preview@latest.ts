import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CommunicationEmailservicesDomainsProps extends IAzAPIBaseProps {

}

/**
 * CommunicationEmailservicesDomains resource
 */
export class CommunicationEmailservicesDomains extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CommunicationEmailservicesDomainsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Communication/emailServices/domains@2023-04-01-preview";
  }

  protected getResourceBody(props: CommunicationEmailservicesDomainsProps): string {
    return JSON.stringify(
        {properties: {domainManagement: "string", userEngagementTracking: "string"}}
    );
  }
}
