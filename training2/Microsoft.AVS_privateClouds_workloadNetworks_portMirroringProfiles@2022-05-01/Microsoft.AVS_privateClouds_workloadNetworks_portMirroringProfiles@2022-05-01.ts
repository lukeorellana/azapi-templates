import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AvsPrivatecloudsWorkloadnetworksPortmirroringprofilesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type: workloadNetworks;

/**
   * Destination VM Group.
   */
readonly destination?: string;

/**
   * Direction of port mirroring profile.
   */
readonly direction?: 'BIDIRECTIONAL''EGRESS''INGRESS';

/**
   * Display name of the port mirroring profile.
   */
readonly displayName?: string;

/**
   * NSX revision number.
   */
readonly revision?: number;

/**
   * Source VM Group.
   */
readonly source?: string;
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
