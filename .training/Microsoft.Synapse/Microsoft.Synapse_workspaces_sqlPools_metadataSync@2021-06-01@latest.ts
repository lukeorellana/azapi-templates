import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesSqlpoolsMetadatasyncProps extends IAzAPIBaseProps {

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
