import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApicenterServicesWorkspacesApisProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:workspaces;

/**
   * 
   */
readonly contacts?: Contact[];

/**
   * The custom metadata defined for API catalog entities.
   */
readonly customProperties?: For Bicep, you can use theany()function.;

/**
   * Description of the API.
   */
readonly description?: stringConstranumbers:Max length = 1000;

/**
   * 
   */
readonly externalDocumentation?: ExternalDocumentation[]Constranumbers:Max length = 20;

/**
   * Kind of API. For example, REST or GraphQL.
   */
readonly kind: 'graphql''grpc''rest''soap''webhook''websocket';

/**
   * The license information for the API.
   */
readonly license?: License;

/**
   * Short description of the API.
   */
readonly summary?: stringConstranumbers:Max length = 200;

/**
   * Terms of service for the API.
   */
readonly termsOfService?: TermsOfService;

/**
   * API title.
   */
readonly title: string Constranumbers:Min length = 1Max length = 50;

/**
   * Email address of the contact.
   */
readonly email?: stringConstranumbers:Max length = 100;

/**
   * URL for the contact.
   */
readonly url?: stringConstranumbers:Max length = 200;

/**
   * Description of the documentation.
   */
readonly description?: stringConstranumbers:Max length = 500;

/**
   * Title of the documentation.
   */
readonly title?: stringConstranumbers:Max length = 50;

/**
   * URL pointing to the documentation.
   */
readonly url: string Constranumbers:Max length = 200;

/**
   * SPDX license information for the API. The identifier field is mutually exclusive of the URL field.
   */
readonly identifier?: stringConstranumbers:Max length = 50;

/**
   * URL pointing to the license details. The URL field is mutually exclusive of the identifier field.
   */
readonly url?: stringConstranumbers:Max length = 200;

/**
   * URL pointing to the terms of service.
   */
readonly url: string Constranumbers:Max length = 200;
}

/**
 * ApicenterServicesWorkspacesApis resource
 */
export class ApicenterServicesWorkspacesApis extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApicenterServicesWorkspacesApisProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiCenter/services/workspaces/apis@2024-03-01";
  }

  protected getResourceBody(props: ApicenterServicesWorkspacesApisProps): string {
    return JSON.stringify(
        {properties: {contacts: [{email: "string", name: "string", url: "string"}], description: "string", externalDocumentation: [{description: "string", title: "string", url: "string"}], kind: "string", license: {identifier: "string", name: "string", url: "string"}, summary: "string", termsOfService: {url: "string"}, title: "string"}}
    );
  }
}
