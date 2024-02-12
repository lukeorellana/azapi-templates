import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkServiceendpointpoliciesProps extends IAzAPIBaseProps {
/**
   * A collection of contextual service endpoint policy.
   */
readonly contextualServiceEndpointPolicies?: string[];

/**
   * The alias indicating if the policy belongs to a service
   */
readonly serviceAlias?: string;

/**
   * A collection of service endpoint policy definitions of the service endpoint policy.
   */
readonly serviceEndpointPolicyDefinitions?: ServiceEndponumberPolicyDefinition[];

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * The type of the resource.
   */
readonly type?: string;

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
