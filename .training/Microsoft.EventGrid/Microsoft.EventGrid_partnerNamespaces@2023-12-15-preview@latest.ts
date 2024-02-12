import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface EventgridPartnernamespacesProps extends IAzAPIBaseProps {

}

/**
 * EventgridPartnernamespaces resource
 */
export class EventgridPartnernamespaces extends AzAPIBase {
  constructor(scope: Construct, id: string, props: EventgridPartnernamespacesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.EventGrid/partnerNamespaces@2023-12-15-preview";
  }

  protected getResourceBody(props: EventgridPartnernamespacesProps): string {
    return JSON.stringify(
        {properties: {disableLocalAuth: "${bool}", inboundIpRules: [{action: "Allow", ipMask: "string"}], minimumTlsVersionAllowed: "string", partnerRegistrationFullyQualifiedId: "string", partnerTopicRoutingMode: "string", publicNetworkAccess: "string"}}
    );
  }
}
