import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ConnectedvmwarevsphereResourcepoolsProps extends IAzAPIBaseProps {

}

/**
 * ConnectedvmwarevsphereResourcepools resource
 */
export class ConnectedvmwarevsphereResourcepools extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ConnectedvmwarevsphereResourcepoolsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ConnectedVMwarevSphere/resourcePools@2022-07-15-preview";
  }

  protected getResourceBody(props: ConnectedvmwarevsphereResourcepoolsProps): string {
    return JSON.stringify(
        {properties: {inventoryItemId: "string", moRefId: "string", vCenterId: "string"}, kind: "string", extendedLocation: {name: "string", type: "string"}}
    );
  }
}
