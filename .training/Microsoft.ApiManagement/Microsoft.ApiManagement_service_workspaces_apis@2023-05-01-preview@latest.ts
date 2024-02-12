import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceWorkspacesApisProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceWorkspacesApis resource
 */
export class ApimanagementServiceWorkspacesApis extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceWorkspacesApisProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/workspaces/apis@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceWorkspacesApisProps): string {
    return JSON.stringify(
        {properties: {apiRevision: "string", apiRevisionDescription: "string", apiType: "string", apiVersion: "string", apiVersionDescription: "string", apiVersionSet: {description: "string", id: "string", name: "string", versionHeaderName: "string", versioningScheme: "string", versionQueryName: "string"}, apiVersionSetId: "string", authenticationSettings: {oAuth2: {authorizationServerId: "string", scope: "string"}, oAuth2AuthenticationSettings: [{authorizationServerId: "string", scope: "string"}], openid: {bearerTokenSendingMethods: ["string"], openidProviderId: "string"}, openidAuthenticationSettings: [{bearerTokenSendingMethods: ["string"], openidProviderId: "string"}]}, contact: {email: "string", name: "string", url: "string"}, description: "string", displayName: "string", format: "string", isCurrent: "${bool}", license: {name: "string", url: "string"}, path: "string", protocols: ["string"], serviceUrl: "string", sourceApiId: "string", subscriptionKeyParameterNames: {header: "string", query: "string"}, subscriptionRequired: "${bool}", termsOfServiceUrl: "string", translateRequiredQueryParameters: "string", type: "string", value: "string", wsdlSelector: {wsdlEndpointName: "string", wsdlServiceName: "string"}}}
    );
  }
}
