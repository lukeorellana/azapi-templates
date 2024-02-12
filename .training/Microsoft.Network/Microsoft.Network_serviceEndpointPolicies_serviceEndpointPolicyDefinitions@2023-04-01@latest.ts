import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkServiceendpointpoliciesServiceendpointpolicydefinitionsProps extends IAzAPIBaseProps {

}

/**
 * NetworkServiceendpointpoliciesServiceendpointpolicydefinitions resource
 */
export class NetworkServiceendpointpoliciesServiceendpointpolicydefinitions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkServiceendpointpoliciesServiceendpointpolicydefinitionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/serviceEndpointPolicies/serviceEndpointPolicyDefinitions@2023-04-01";
  }

  protected getResourceBody(props: NetworkServiceendpointpoliciesServiceendpointpolicydefinitionsProps): string {
    return JSON.stringify(
        {properties: {description: "string", service: "string", serviceResources: ["string"]}}
    );
  }
}
