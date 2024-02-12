import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AvsPrivatecloudsWorkloadnetworksPublicipsProps extends IAzAPIBaseProps {

}

/**
 * AvsPrivatecloudsWorkloadnetworksPublicips resource
 */
export class AvsPrivatecloudsWorkloadnetworksPublicips extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AvsPrivatecloudsWorkloadnetworksPublicipsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AVS/privateClouds/workloadNetworks/publicIPs@2022-05-01";
  }

  protected getResourceBody(props: AvsPrivatecloudsWorkloadnetworksPublicipsProps): string {
    return JSON.stringify(
        {properties: {displayName: "string", numberOfPublicIPs: "${int}"}}
    );
  }
}
