import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecuritySecurityconnectorsDevopsAzuredevopsorgsProps extends IAzAPIBaseProps {

}

/**
 * SecuritySecurityconnectorsDevopsAzuredevopsorgs resource
 */
export class SecuritySecurityconnectorsDevopsAzuredevopsorgs extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecuritySecurityconnectorsDevopsAzuredevopsorgsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Security/securityConnectors/devops/azureDevOpsOrgs@2023-09-01-preview";
  }

  protected getResourceBody(props: SecuritySecurityconnectorsDevopsAzuredevopsorgsProps): string {
    return JSON.stringify(
        {properties: {actionableRemediation: {branchConfiguration: {annotateDefaultBranch: "string", branchNames: ["string"]}, categoryConfigurations: [{category: "string", minimumSeverityLevel: "string"}], inheritFromParentState: "string", state: "string"}, onboardingState: "string", provisioningState: "string"}}
    );
  }
}
