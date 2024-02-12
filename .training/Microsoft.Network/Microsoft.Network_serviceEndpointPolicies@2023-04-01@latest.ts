import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkServiceendpointpoliciesProps extends IAzAPIBaseProps {

}

/**
 * NetworkServiceendpointpolicies resource
 */
export class NetworkServiceendpointpolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkServiceendpointpoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/serviceEndpointPolicies@2023-04-01";
  }

  protected getResourceBody(props: NetworkServiceendpointpoliciesProps): string {
    return JSON.stringify(
        {properties: {contextualServiceEndpointPolicies: ["string"], serviceAlias: "string", serviceEndpointPolicyDefinitions: [{id: "string", name: "string", properties: {description: "string", service: "string", serviceResources: ["string"]}, type: "string"}]}}
    );
  }
}
