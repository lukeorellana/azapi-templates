import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesSqlpoolsGeobackuppoliciesProps extends IAzAPIBaseProps {

}

/**
 * SynapseWorkspacesSqlpoolsGeobackuppolicies resource
 */
export class SynapseWorkspacesSqlpoolsGeobackuppolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SynapseWorkspacesSqlpoolsGeobackuppoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Synapse/workspaces/sqlPools/geoBackupPolicies@2021-06-01";
  }

  protected getResourceBody(props: SynapseWorkspacesSqlpoolsGeobackuppoliciesProps): string {
    return JSON.stringify(
        {properties: {state: "string"}}
    );
  }
}
