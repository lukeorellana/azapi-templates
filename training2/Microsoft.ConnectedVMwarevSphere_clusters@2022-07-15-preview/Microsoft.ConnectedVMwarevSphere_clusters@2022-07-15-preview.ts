import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ConnectedvmwarevsphereClustersProps extends IAzAPIBaseProps {
/**
   * Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
   */
readonly kind?: string;

/**
   * Gets or sets the extended location.
   */
readonly extendedLocation?: ExtendedLocation;

/**
   * The extended location type.
   */
readonly type?: string;

/**
   * Gets or sets the inventory Item ID for the cluster.
   */
readonly inventoryItemId?: string;

/**
   * Gets or sets the vCenter MoRef (Managed Object Reference) ID for the cluster.
   */
readonly moRefId?: string;

/**
   * Gets or sets the ARM Id of the vCenter resource in which this cluster resides.
   */
readonly vCenterId?: string;
}

/**
 * ConnectedvmwarevsphereClusters resource
 */
export class ConnectedvmwarevsphereClusters extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ConnectedvmwarevsphereClustersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ConnectedVMwarevSphere/clusters@2022-07-15-preview";
  }

  protected getResourceBody(props: ConnectedvmwarevsphereClustersProps): string {
    return JSON.stringify(
        {properties: {inventoryItemId: "string", moRefId: "string", vCenterId: "string"}, kind: "string", extendedLocation: {name: "string", type: "string"}}
    );
  }
}
