import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesAzureadonlyauthenticationsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:workspaces;

/**
   * Azure Active Directory only Authentication enabled.
   */
readonly azureADOnlyAuthentication: bool;
}

/**
 * SynapseWorkspacesAzureadonlyauthentications resource
 */
export class SynapseWorkspacesAzureadonlyauthentications extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SynapseWorkspacesAzureadonlyauthenticationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Synapse/workspaces/azureADOnlyAuthentications@2021-06-01";
  }

  protected getResourceBody(props: SynapseWorkspacesAzureadonlyauthenticationsProps): string {
    return JSON.stringify(
        {properties: {azureADOnlyAuthentication: "${bool}"}}
    );
  }
}
