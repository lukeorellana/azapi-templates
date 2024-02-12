import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesKustopoolsDatabasesDataconnectionsProps extends IAzAPIBaseProps {

}

/**
 * SynapseWorkspacesKustopoolsDatabasesDataconnections resource
 */
export class SynapseWorkspacesKustopoolsDatabasesDataconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SynapseWorkspacesKustopoolsDatabasesDataconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Synapse/workspaces/kustoPools/databases/dataConnections@2021-06-01-preview";
  }

  protected getResourceBody(props: SynapseWorkspacesKustopoolsDatabasesDataconnectionsProps): string {
    return JSON.stringify(
        {kind: "string"}
    );
  }
}
