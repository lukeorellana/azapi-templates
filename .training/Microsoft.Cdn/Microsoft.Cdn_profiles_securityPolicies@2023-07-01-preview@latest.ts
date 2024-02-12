import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CdnProfilesSecuritypoliciesProps extends IAzAPIBaseProps {

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
