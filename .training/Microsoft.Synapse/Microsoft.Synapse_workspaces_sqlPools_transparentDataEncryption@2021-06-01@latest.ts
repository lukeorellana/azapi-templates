import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesSqlpoolsTransparentdataencryptionProps extends IAzAPIBaseProps {

}

/**
 * SynapseWorkspacesSqlpoolsTransparentdataencryption resource
 */
export class SynapseWorkspacesSqlpoolsTransparentdataencryption extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SynapseWorkspacesSqlpoolsTransparentdataencryptionProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Synapse/workspaces/sqlPools/transparentDataEncryption@2021-06-01";
  }

  protected getResourceBody(props: SynapseWorkspacesSqlpoolsTransparentdataencryptionProps): string {
    return JSON.stringify(
        {properties: {status: "string"}}
    );
  }
}
