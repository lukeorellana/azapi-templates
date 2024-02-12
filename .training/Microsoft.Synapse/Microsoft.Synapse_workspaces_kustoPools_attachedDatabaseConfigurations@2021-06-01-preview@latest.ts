import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesKustopoolsAttacheddatabaseconfigurationsProps extends IAzAPIBaseProps {

}

/**
 * SynapseWorkspacesKustopoolsAttacheddatabaseconfigurations resource
 */
export class SynapseWorkspacesKustopoolsAttacheddatabaseconfigurations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SynapseWorkspacesKustopoolsAttacheddatabaseconfigurationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Synapse/workspaces/kustoPools/attachedDatabaseConfigurations@2021-06-01-preview";
  }

  protected getResourceBody(props: SynapseWorkspacesKustopoolsAttacheddatabaseconfigurationsProps): string {
    return JSON.stringify(
        {properties: {clusterResourceId: "string", databaseName: "string", defaultPrincipalsModificationKind: "string", tableLevelSharingProperties: {externalTablesToExclude: ["string"], externalTablesToInclude: ["string"], materializedViewsToExclude: ["string"], materializedViewsToInclude: ["string"], tablesToExclude: ["string"], tablesToInclude: ["string"]}}}
    );
  }
}
