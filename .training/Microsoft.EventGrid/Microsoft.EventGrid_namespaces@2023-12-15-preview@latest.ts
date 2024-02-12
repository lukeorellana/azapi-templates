import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface EventgridNamespacesProps extends IAzAPIBaseProps {

}

/**
 * EventgridNamespaces resource
 */
export class EventgridNamespaces extends AzAPIBase {
  constructor(scope: Construct, id: string, props: EventgridNamespacesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.EventGrid/namespaces@2023-12-15-preview";
  }

  protected getResourceBody(props: EventgridNamespacesProps): string {
    return JSON.stringify(
        {properties: {inboundIpRules: [{action: "Allow", ipMask: "string"}], isZoneRedundant: "${bool}", minimumTlsVersionAllowed: "string", privateEndpointConnections: [{properties: {groupIds: ["string"], privateEndpoint: {id: "string"}, privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}, provisioningState: "string"}}], publicNetworkAccess: "string", topicsConfiguration: {}, topicSpacesConfiguration: {clientAuthentication: {alternativeAuthenticationNameSources: ["string"]}, maximumClientSessionsPerAuthenticationName: "${int}", maximumSessionExpiryInHours: "${int}", routeTopicResourceId: "string", routingEnrichments: {dynamic: [{key: "string", value: "string"}], static: [{key: "string", valueType: "string"}]}, routingIdentityInfo: {type: "string", userAssignedIdentity: "string"}, state: "string"}}, sku: {capacity: "${int}", name: "Standard"}}
    );
  }
}
