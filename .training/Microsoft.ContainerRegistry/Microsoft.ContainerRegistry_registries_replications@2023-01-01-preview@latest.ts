import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ContainerregistryRegistriesReplicationsProps extends IAzAPIBaseProps {

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
