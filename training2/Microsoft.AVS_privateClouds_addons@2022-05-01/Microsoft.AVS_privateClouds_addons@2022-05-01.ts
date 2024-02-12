import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AvsPrivatecloudsAddonsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:privateClouds;

/**
   * Set the object type
   */
readonly addonType: ArcHCXSRMVR;

/**
   * The type of private cloud addon
   */
readonly addonType: 'Arc';

/**
   * The VMware vCenter resource ID
   */
readonly vCenter?: string;

/**
   * The type of private cloud addon
   */
readonly addonType: 'HCX';

/**
   * The HCX offer, example VMware MaaS Cloud Provider (Enterprise)
   */
readonly offer: string;

/**
   * The type of private cloud addon
   */
readonly addonType: 'SRM';

/**
   * The Site Recovery Manager (SRM) license
   */
readonly licenseKey?: string;

/**
   * The type of private cloud addon
   */
readonly addonType: 'VR';

/**
   * The vSphere Replication Server (VRS) count
   */
readonly vrsCount: number;
}

/**
 * AvsPrivatecloudsAddons resource
 */
export class AvsPrivatecloudsAddons extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AvsPrivatecloudsAddonsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AVS/privateClouds/addons@2022-05-01";
  }

  protected getResourceBody(props: AvsPrivatecloudsAddonsProps): string {
    return JSON.stringify(
        {properties: {addonType: "string"}}
    );
  }
}
