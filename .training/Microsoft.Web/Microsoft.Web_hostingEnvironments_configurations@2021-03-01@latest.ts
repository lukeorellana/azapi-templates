import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebHostingenvironmentsConfigurationsProps extends IAzAPIBaseProps {

}

/**
 * WebHostingenvironmentsConfigurations resource
 */
export class WebHostingenvironmentsConfigurations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebHostingenvironmentsConfigurationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/hostingEnvironments/configurations@2021-03-01";
  }

  protected getResourceBody(props: WebHostingenvironmentsConfigurationsProps): string {
    return JSON.stringify(
        {properties: {allowNewPrivateEndpointConnections: "${bool}"}, kind: "string"}
    );
  }
}
