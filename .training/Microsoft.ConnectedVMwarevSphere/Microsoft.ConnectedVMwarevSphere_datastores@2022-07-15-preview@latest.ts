import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ConnectedvmwarevsphereDatastoresProps extends IAzAPIBaseProps {

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
