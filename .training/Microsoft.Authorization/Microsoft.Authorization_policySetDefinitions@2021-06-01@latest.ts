import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AuthorizationPolicysetdefinitionsProps extends IAzAPIBaseProps {

}

/**
 * AuthorizationPolicysetdefinitions resource
 */
export class AuthorizationPolicysetdefinitions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AuthorizationPolicysetdefinitionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Authorization/policySetDefinitions@2021-06-01";
  }

  protected getResourceBody(props: AuthorizationPolicysetdefinitionsProps): string {
    return JSON.stringify(
        {properties: {description: "string", displayName: "string", parameters: {}, policyDefinitionGroups: [{additionalMetadataId: "string", category: "string", description: "string", displayName: "string", name: "string"}], policyDefinitions: [{groupNames: ["string"], parameters: {}, policyDefinitionId: "string", policyDefinitionReferenceId: "string"}], policyType: "string"}}
    );
  }
}
