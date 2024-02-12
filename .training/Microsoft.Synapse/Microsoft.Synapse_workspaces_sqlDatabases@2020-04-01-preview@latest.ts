import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesSqldatabasesProps extends IAzAPIBaseProps {

}

/**
 * SynapseWorkspacesSqldatabases resource
 */
export class SynapseWorkspacesSqldatabases extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SynapseWorkspacesSqldatabasesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Synapse/workspaces/sqlDatabases@2020-04-01-preview";
  }

  protected getResourceBody(props: SynapseWorkspacesSqldatabasesProps): string {
    return JSON.stringify(
        {properties: {collation: "string", dataRetention: {dropRetentionPeriod: "string", retentionPeriod: "string"}, storageRedundancy: "string"}}
    );
  }
}
