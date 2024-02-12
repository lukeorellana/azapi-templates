import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CustomprovidersResourceprovidersProps extends IAzAPIBaseProps {
/**
   * A list of actions that the custom resource provider implements.
   */
readonly actions?: CustomRPActionRouteDefinition[];

/**
   * A list of resource types that the custom resource provider implements.
   */
readonly resourceTypes?: CustomRPResourceTypeRouteDefinition[];

/**
   * A list of validations to run on the custom resource provider's requests.
   */
readonly validations?: CustomRPValidations[];

/**
   * The route definition endpoint URI that the custom resource provider will proxy requests to. This can be in the form of a flat URI (e.g. 'https://testendpoint/') or can specify to route via a path (e.g. 'https://testendpoint/{requestPath}')
   */
readonly endpoint: string;

/**
   * The routing types that are supported for action requests.
   */
readonly routingType?: 'Proxy';

/**
   * The route definition endpoint URI that the custom resource provider will proxy requests to. This can be in the form of a flat URI (e.g. 'https://testendpoint/') or can specify to route via a path (e.g. 'https://testendpoint/{requestPath}')
   */
readonly endpoint: string;

/**
   * The routing types that are supported for resource requests.
   */
readonly routingType?: 'Proxy''Proxy,Cache';

/**
   * A link to the validation specification. The specification must be hosted on raw.githubusercontent.com.
   */
readonly specification: string;

/**
   * The type of validation to run against a matching request.
   */
readonly validationType?: 'Swagger';
}

/**
 * CustomprovidersResourceproviders resource
 */
export class CustomprovidersResourceproviders extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CustomprovidersResourceprovidersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.CustomProviders/resourceProviders@2018-09-01-preview";
  }

  protected getResourceBody(props: CustomprovidersResourceprovidersProps): string {
    return JSON.stringify(
        {properties: {actions: [{endpoint: "string", name: "string", routingType: "Proxy"}], resourceTypes: [{endpoint: "string", name: "string", routingType: "string"}], validations: [{specification: "string", validationType: "Swagger"}]}}
    );
  }
}
