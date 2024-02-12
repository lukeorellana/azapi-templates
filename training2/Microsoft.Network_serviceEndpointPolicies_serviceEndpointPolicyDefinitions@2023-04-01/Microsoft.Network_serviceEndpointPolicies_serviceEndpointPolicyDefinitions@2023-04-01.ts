import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkServiceendpointpoliciesServiceendpointpolicydefinitionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:serviceEndponumberPolicies;

/**
   * A description for this rule. Restricted to 140 chars.
   */
readonly description?: string;

/**
   * Service endpoint name.
   */
readonly service?: string;

/**
   * A list of service resources.
   */
readonly serviceResources?: string[];
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
