import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ConnectedvmwarevsphereVcentersInventoryitemsProps extends IAzAPIBaseProps {

}

/**
 * ConnectedvmwarevsphereVcentersInventoryitems resource
 */
export class ConnectedvmwarevsphereVcentersInventoryitems extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ConnectedvmwarevsphereVcentersInventoryitemsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ConnectedVMwarevSphere/vcenters/inventoryItems@2022-07-15-preview";
  }

  protected getResourceBody(props: ConnectedvmwarevsphereVcentersInventoryitemsProps): string {
    return JSON.stringify(
        {properties: {managedResourceId: "string", moName: "string", moRefId: "string", inventoryType: "string"}, kind: "string"}
    );
  }
}
