import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AvsPrivatecloudsWorkloadnetworksPublicipsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type: workloadNetworks;

/**
   * Display name of the Public IP Block.
   */
readonly displayName?: string;

/**
   * Number of Public IPs requested.
   */
readonly numberOfPublicIPs?: number;
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
