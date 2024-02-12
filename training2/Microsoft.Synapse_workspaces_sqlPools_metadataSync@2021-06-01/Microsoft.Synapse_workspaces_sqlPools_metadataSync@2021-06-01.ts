import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesSqlpoolsMetadatasyncProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:sqlPools;

/**
   * Indicates whether the metadata sync is enabled or disabled
   */
readonly enabled?: bool;

/**
   * The Sync Interval in minutes.
   */
readonly syncIntervalInMinutes?: number;
}

/**
 * SynapseWorkspacesSqlpoolsMetadatasync resource
 */
export class SynapseWorkspacesSqlpoolsMetadatasync extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SynapseWorkspacesSqlpoolsMetadatasyncProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Synapse/workspaces/sqlPools/metadataSync@2021-06-01";
  }

  protected getResourceBody(props: SynapseWorkspacesSqlpoolsMetadatasyncProps): string {
    return JSON.stringify(
        {properties: {enabled: "${bool}", syncIntervalInMinutes: "${int}"}}
    );
  }
}
