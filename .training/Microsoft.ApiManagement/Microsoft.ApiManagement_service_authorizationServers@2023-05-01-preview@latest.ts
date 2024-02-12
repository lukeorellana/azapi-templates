import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceAuthorizationserversProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceAuthorizationservers resource
 */
export class ApimanagementServiceAuthorizationservers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceAuthorizationserversProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/authorizationServers@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceAuthorizationserversProps): string {
    return JSON.stringify(
        {properties: {authorizationEndpoint: "string", authorizationMethods: ["string"], bearerTokenSendingMethods: ["string"], clientAuthenticationMethod: ["string"], clientId: "string", clientRegistrationEndpoint: "string", clientSecret: "string", defaultScope: "string", description: "string", displayName: "string", grantTypes: ["string"], resourceOwnerPassword: "string", resourceOwnerUsername: "string", supportState: "${bool}", tokenBodyParameters: [{name: "string", value: "string"}], tokenEndpoint: "string", useInApiDocumentation: "${bool}", useInTestConsole: "${bool}"}}
    );
  }
}
