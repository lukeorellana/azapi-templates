import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebHostingenvironmentsConfigurationsProps extends IAzAPIBaseProps {
/**
   * Kind of resource.
   */
readonly kind?: string;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:hostingEnvironments;

/**
   * Property to enable and disable new private endpoint connection creation on ASE
   */
readonly allowNewPrivateEndpointConnections?: bool;
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
