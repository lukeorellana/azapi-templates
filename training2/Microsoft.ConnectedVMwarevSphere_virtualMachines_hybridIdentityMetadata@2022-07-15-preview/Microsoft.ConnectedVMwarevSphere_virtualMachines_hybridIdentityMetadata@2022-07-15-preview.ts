import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ConnectedvmwarevsphereVirtualmachinesHybrididentitymetadataProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:virtualMachines;

/**
   * Gets or sets the Public Key.
   */
readonly publicKey?: string;

/**
   * Gets or sets the Vm Id.
   */
readonly vmId?: string;
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
