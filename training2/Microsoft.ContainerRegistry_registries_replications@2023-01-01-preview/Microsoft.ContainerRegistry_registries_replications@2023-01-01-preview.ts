import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ContainerregistryRegistriesReplicationsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:registries;

/**
   * Specifies whether the replication's regional endpoint is enabled. Requests will not be routed to a replication whose regional endpoint is disabled, however its data will continue to be synced with other replications.
   */
readonly regionEndpointEnabled?: bool;

/**
   * Whether or not zone redundancy is enabled for this container registry replication
   */
readonly zoneRedundancy?: 'Disabled''Enabled';
}

/**
 * ContainerregistryRegistriesReplications resource
 */
export class ContainerregistryRegistriesReplications extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ContainerregistryRegistriesReplicationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ContainerRegistry/registries/replications@2023-01-01-preview";
  }

  protected getResourceBody(props: ContainerregistryRegistriesReplicationsProps): string {
    return JSON.stringify(
        {properties: {regionEndpointEnabled: "${bool}", zoneRedundancy: "string"}}
    );
  }
}
