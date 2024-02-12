import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface CustomprovidersResourceprovidersProps extends IAzAPIBaseProps {

}

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

// | Name | Description | Value |
// |-|-|-|
// | name | The resource name | string (required)Character limit: 3-64Valid characters:Can't use:%&\\?/or control charactersCan't end with period or space. |
// | location | Resource location | string (required) |
// | tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
// | properties | The manifest for the custom resource provider | CustomRPManifestProperties |

// | Name | Description | Value |
// |-|-|-|
// | actions | A list of actions that the custom resource provider implements. | CustomRPActionRouteDefinition[] |
// | resourceTypes | A list of resource types that the custom resource provider implements. | CustomRPResourceTypeRouteDefinition[] |
// | validations | A list of validations to run on the custom resource provider's requests. | CustomRPValidations[] |

// | Name | Description | Value |
// |-|-|-|
// | endpoint | The route definition endpoint URI that the custom resource provider will proxy requests to. This can be in the form of a flat URI (e.g. 'https://testendpoint/') or can specify to route via a path (e.g. 'https://testendpoint/{requestPath}') | string (required) |
// | name | The name of the route definition. This becomes the name for the ARM extension (e.g. '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomProviders/resourceProviders/{resourceProviderName}/{name}') | string (required) |
// | routingType | The routing types that are supported for action requests. | 'Proxy' |

// | Name | Description | Value |
// |-|-|-|
// | endpoint | The route definition endpoint URI that the custom resource provider will proxy requests to. This can be in the form of a flat URI (e.g. 'https://testendpoint/') or can specify to route via a path (e.g. 'https://testendpoint/{requestPath}') | string (required) |
// | name | The name of the route definition. This becomes the name for the ARM extension (e.g. '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomProviders/resourceProviders/{resourceProviderName}/{name}') | string (required) |
// | routingType | The routing types that are supported for resource requests. | 'Proxy''Proxy,Cache' |

// | Name | Description | Value |
// |-|-|-|
// | specification | A link to the validation specification. The specification must be hosted on raw.githubusercontent.com. | string (required) |
// | validationType | The type of validation to run against a matching request. | 'Swagger' |
