import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CommunicationEmailservicesDomainsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:emailServices;

/**
   * Describes how a Domains resource is being managed.
   */
readonly domainManagement: 'AzureManaged''CustomerManaged''CustomerManagedInExchangeOnline';

/**
   * Describes whether user engagement tracking is enabled or disabled.
   */
readonly userEngagementTracking?: 'Disabled''Enabled';
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
