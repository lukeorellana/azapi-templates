import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ConnectedvmwarevsphereHostsProps extends IAzAPIBaseProps {

}

/**
 * ConnectedvmwarevsphereHosts resource
 */
export class ConnectedvmwarevsphereHosts extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ConnectedvmwarevsphereHostsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ConnectedVMwarevSphere/hosts@2022-07-15-preview";
  }

  protected getResourceBody(props: ConnectedvmwarevsphereHostsProps): string {
    return JSON.stringify(
        {properties: {inventoryItemId: "string", moRefId: "string", vCenterId: "string"}, kind: "string", extendedLocation: {name: "string", type: "string"}}
    );
  }
}
