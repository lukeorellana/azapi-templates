import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface EventgridPartnernamespacesProps extends IAzAPIBaseProps {
/**
   * This boolean is used to enable or disable local auth. Default value is false. When the property is set to true, only AAD token will be used to authenticate if user is allowed to publish to the partner namespace.
   */
readonly disableLocalAuth?: bool;

/**
   * This can be used to restrict traffic from specific IPs instead of all IPs. Note: These are considered only if PublicNetworkAccess is enabled.
   */
readonly inboundIpRules?: InboundIpRule[];

/**
   * Minimum TLS version of the publisher allowed to publish to this partner namespace
   */
readonly minimumTlsVersionAllowed?: '1.0''1.1''1.2';

/**
   * The fully qualified ARM Id of the partner registration that should be associated with this partner namespace. This takes the following format:/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerRegistrations/{partnerRegistrationName}.
   */
readonly partnerRegistrationFullyQualifiedId?: string;

/**
   * This determines if events published to this partner namespace should use the source attribute in the event payloador use the channel name in the header when matching to the partner topic. If none is specified, source attribute routing will be used to match the partner topic.
   */
readonly partnerTopicRoutingMode?: 'ChannelNameHeader''SourceEventAttribute';

/**
   * This determines if traffic is allowed over public network. By default it is enabled.You can further restrict to specific IPs by configuring {seealso cref="P:Microsoft.Azure.Events.ResourceProvider.Common.Contracts.PartnerNamespaceProperties.InboundIpRules" /}
   */
readonly publicNetworkAccess?: 'Disabled''Enabled''SecuredByPerimeter';

/**
   * Action to perform based on the match or no match of the IpMask.
   */
readonly action?: 'Allow';

/**
   * IP Address in CIDR notation e.g., 10.0.0.0/8.
   */
readonly ipMask?: string;
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
