import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceOpenidconnectprovidersProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:service;

/**
   * Client ID of developer console which is the client application.
   */
readonly clientId: string;

/**
   * Client Secret of developer console which is the client application.
   */
readonly clientSecret?: string;

/**
   * User-friendly description of OpenID Connect Provider.
   */
readonly description?: string;

/**
   * User-friendly OpenID Connect Provider name.
   */
readonly displayName: string;

/**
   * Metadata endpoint URI.
   */
readonly metadataEndpoint: string;

/**
   * If true, the Open ID Connect provider will be used in the API documentation in the developer portal. False by default if no value is provided.
   */
readonly useInApiDocumentation?: bool;

/**
   * If true, the Open ID Connect provider may be used in the developer portal test console. True by default if no value is provided.
   */
readonly useInTestConsole?: bool;
}

/**
 * ApimanagementServiceOpenidconnectproviders resource
 */
export class ApimanagementServiceOpenidconnectproviders extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceOpenidconnectprovidersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/openidConnectProviders@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceOpenidconnectprovidersProps): string {
    return JSON.stringify(
        {properties: {clientId: "string", clientSecret: "string", description: "string", displayName: "string", metadataEndpoint: "string", useInApiDocumentation: "${bool}", useInTestConsole: "${bool}"}}
    );
  }
}
