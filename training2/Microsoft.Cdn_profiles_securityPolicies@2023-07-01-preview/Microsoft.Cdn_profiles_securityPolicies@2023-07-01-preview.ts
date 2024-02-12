import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CdnProfilesSecuritypoliciesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:profiles;

/**
   * object which contains security policy parameters
   */
readonly parameters?: SecurityPolicyPropertiesParameters;

/**
   * Set the object type
   */
readonly type: WebApplicationFirewall;

/**
   * The type of the Security policy to create.
   */
readonly type: 'WebApplicationFirewall';

/**
   * Waf associations
   */
readonly associations?: SecurityPolicyWebApplicationFirewallAssociation[];

/**
   * Resource ID.
   */
readonly wafPolicy?: ResourceReference;

/**
   * List of domains.
   */
readonly domains?: ActivatedResourceReference[];

/**
   * List of paths
   */
readonly patternsToMatch?: string[];

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * Resource ID.
   */
readonly id?: string;
}

/**
 * CdnProfilesSecuritypolicies resource
 */
export class CdnProfilesSecuritypolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CdnProfilesSecuritypoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Cdn/profiles/securityPolicies@2023-07-01-preview";
  }

  protected getResourceBody(props: CdnProfilesSecuritypoliciesProps): string {
    return JSON.stringify(
        {properties: {parameters: {type: "string"}}}
    );
  }
}
