import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesSqlpoolsGeobackuppoliciesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:sqlPools;

/**
   * The state of the geo backup policy.
   */
readonly state: 'Disabled''Enabled';
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
