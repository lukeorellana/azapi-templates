import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ConnectedvmwarevsphereClustersProps extends IAzAPIBaseProps {

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
