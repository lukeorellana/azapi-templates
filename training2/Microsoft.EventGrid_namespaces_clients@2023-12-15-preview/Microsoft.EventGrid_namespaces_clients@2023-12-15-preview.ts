import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface EventgridNamespacesClientsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:namespaces;

/**
   * Attributes for the client. Supported values are int, bool, string, string[].Example:"attributes": { "room": "345", "floor": 12, "deviceTypes": ["Fan", "Light"] }
   */
readonly attributes?: ClientPropertiesAttributes;

/**
   * The name presented by the client for authentication. The default value is the name of the resource.
   */
readonly authenticationName?: string;

/**
   * The client certificate authentication information.
   */
readonly clientCertificateAuthentication?: ClientCertificateAuthentication;

/**
   * Description for the Client resource.
   */
readonly description?: string;

/**
   * Indicates if the client is enabled or not. Default value is Enabled.
   */
readonly state?: 'Disabled''Enabled';

/**
   * 
   */
readonly {customized property}?: For Bicep, you can use theany()function.;

/**
   * The list of thumbprints that are allowed during client authentication. This property is required only if the validationScheme is 'ThumbprintMatch'.
   */
readonly allowedThumbprints?: string[];

/**
   * The validation scheme used to authenticate the client. Default value is SubjectMatchesAuthenticationName.
   */
readonly validationScheme?: 'DnsMatchesAuthenticationName''EmailMatchesAuthenticationName''IpMatchesAuthenticationName''SubjectMatchesAuthenticationName''ThumbprnumberMatch''UriMatchesAuthenticationName';
}

/**
 * EventgridNamespacesClients resource
 */
export class EventgridNamespacesClients extends AzAPIBase {
  constructor(scope: Construct, id: string, props: EventgridNamespacesClientsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.EventGrid/namespaces/clients@2023-12-15-preview";
  }

  protected getResourceBody(props: EventgridNamespacesClientsProps): string {
    return JSON.stringify(
        {properties: {attributes: {}, authenticationName: "string", clientCertificateAuthentication: {allowedThumbprints: ["string"], validationScheme: "string"}, description: "string", state: "string"}}
    );
  }
}
