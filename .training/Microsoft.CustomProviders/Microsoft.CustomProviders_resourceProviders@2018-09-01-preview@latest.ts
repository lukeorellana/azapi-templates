import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CustomprovidersResourceprovidersProps extends IAzAPIBaseProps {

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
