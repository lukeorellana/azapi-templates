import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AvsPrivatecloudsWorkloadnetworksDhcpconfigurationsProps extends IAzAPIBaseProps {

}

/**
 * AvsPrivatecloudsWorkloadnetworksDhcpconfigurations resource
 */
export class AvsPrivatecloudsWorkloadnetworksDhcpconfigurations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AvsPrivatecloudsWorkloadnetworksDhcpconfigurationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AVS/privateClouds/workloadNetworks/dhcpConfigurations@2022-05-01";
  }

  protected getResourceBody(props: AvsPrivatecloudsWorkloadnetworksDhcpconfigurationsProps): string {
    return JSON.stringify(
        {properties: {displayName: "string", revision: "${int}", dhcpType: "string"}}
    );
  }
}
