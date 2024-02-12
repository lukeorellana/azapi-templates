import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesAzureadonlyauthenticationsProps extends IAzAPIBaseProps {

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
