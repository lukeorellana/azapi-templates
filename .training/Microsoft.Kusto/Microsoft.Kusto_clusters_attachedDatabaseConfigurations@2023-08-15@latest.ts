import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface KustoClustersAttacheddatabaseconfigurationsProps extends IAzAPIBaseProps {

}

/**
 * KustoClustersAttacheddatabaseconfigurations resource
 */
export class KustoClustersAttacheddatabaseconfigurations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: KustoClustersAttacheddatabaseconfigurationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Kusto/clusters/attachedDatabaseConfigurations@2023-08-15";
  }

  protected getResourceBody(props: KustoClustersAttacheddatabaseconfigurationsProps): string {
    return JSON.stringify(
        {properties: {clusterResourceId: "string", databaseName: "string", databaseNameOverride: "string", databaseNamePrefix: "string", defaultPrincipalsModificationKind: "string", tableLevelSharingProperties: {externalTablesToExclude: ["string"], externalTablesToInclude: ["string"], functionsToExclude: ["string"], functionsToInclude: ["string"], materializedViewsToExclude: ["string"], materializedViewsToInclude: ["string"], tablesToExclude: ["string"], tablesToInclude: ["string"]}}}
    );
  }
}
