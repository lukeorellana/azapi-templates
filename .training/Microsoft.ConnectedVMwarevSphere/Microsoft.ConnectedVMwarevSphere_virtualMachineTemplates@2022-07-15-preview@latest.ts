import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ConnectedvmwarevsphereVirtualmachinetemplatesProps extends IAzAPIBaseProps {

}

/**
 * ConnectedvmwarevsphereVirtualmachinetemplates resource
 */
export class ConnectedvmwarevsphereVirtualmachinetemplates extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ConnectedvmwarevsphereVirtualmachinetemplatesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ConnectedVMwarevSphere/virtualMachineTemplates@2022-07-15-preview";
  }

  protected getResourceBody(props: ConnectedvmwarevsphereVirtualmachinetemplatesProps): string {
    return JSON.stringify(
        {properties: {inventoryItemId: "string", moRefId: "string", vCenterId: "string"}, kind: "string", extendedLocation: {name: "string", type: "string"}}
    );
  }
}
