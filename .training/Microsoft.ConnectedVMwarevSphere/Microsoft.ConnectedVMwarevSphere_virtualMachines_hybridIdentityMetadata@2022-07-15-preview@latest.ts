import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ConnectedvmwarevsphereVirtualmachinesHybrididentitymetadataProps extends IAzAPIBaseProps {

}

/**
 * ConnectedvmwarevsphereVirtualmachinesHybrididentitymetadata resource
 */
export class ConnectedvmwarevsphereVirtualmachinesHybrididentitymetadata extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ConnectedvmwarevsphereVirtualmachinesHybrididentitymetadataProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ConnectedVMwarevSphere/virtualMachines/hybridIdentityMetadata@2022-07-15-preview";
  }

  protected getResourceBody(props: ConnectedvmwarevsphereVirtualmachinesHybrididentitymetadataProps): string {
    return JSON.stringify(
        {properties: {publicKey: "string", vmId: "string"}}
    );
  }
}
