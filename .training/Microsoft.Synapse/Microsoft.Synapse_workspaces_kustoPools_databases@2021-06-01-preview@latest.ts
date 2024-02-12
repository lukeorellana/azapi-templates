import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesKustopoolsDatabasesProps extends IAzAPIBaseProps {

}

/**
 * SynapseWorkspacesKustopoolsDatabases resource
 */
export class SynapseWorkspacesKustopoolsDatabases extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SynapseWorkspacesKustopoolsDatabasesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Synapse/workspaces/kustoPools/databases@2021-06-01-preview";
  }

  protected getResourceBody(props: SynapseWorkspacesKustopoolsDatabasesProps): string {
    return JSON.stringify(
        {kind: "string"}
    );
  }
}
