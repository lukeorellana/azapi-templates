import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ConnectedvmwarevsphereDatastoresProps extends IAzAPIBaseProps {
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
   * Gets or sets the inventory Item ID for the datastore.
   */
readonly inventoryItemId?: string;

/**
   * Gets or sets the vCenter MoRef (Managed Object Reference) ID for the datastore.
   */
readonly moRefId?: string;

/**
   * Gets or sets the ARM Id of the vCenter resource in which this datastore resides.
   */
readonly vCenterId?: string;
}

/**
 * ConnectedvmwarevsphereDatastores resource
 */
export class ConnectedvmwarevsphereDatastores extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ConnectedvmwarevsphereDatastoresProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ConnectedVMwarevSphere/datastores@2022-07-15-preview";
  }

  protected getResourceBody(props: ConnectedvmwarevsphereDatastoresProps): string {
    return JSON.stringify(
        {properties: {inventoryItemId: "string", moRefId: "string", vCenterId: "string"}, kind: "string", extendedLocation: {name: "string", type: "string"}}
    );
  }
}
