import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AvsPrivatecloudsWorkloadnetworksPortmirroringprofilesProps extends IAzAPIBaseProps {

}

/**
 * AvsPrivatecloudsWorkloadnetworksPortmirroringprofiles resource
 */
export class AvsPrivatecloudsWorkloadnetworksPortmirroringprofiles extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AvsPrivatecloudsWorkloadnetworksPortmirroringprofilesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AVS/privateClouds/workloadNetworks/portMirroringProfiles@2022-05-01";
  }

  protected getResourceBody(props: AvsPrivatecloudsWorkloadnetworksPortmirroringprofilesProps): string {
    return JSON.stringify(
        {properties: {destination: "string", direction: "string", displayName: "string", revision: "${int}", source: "string"}}
    );
  }
}
