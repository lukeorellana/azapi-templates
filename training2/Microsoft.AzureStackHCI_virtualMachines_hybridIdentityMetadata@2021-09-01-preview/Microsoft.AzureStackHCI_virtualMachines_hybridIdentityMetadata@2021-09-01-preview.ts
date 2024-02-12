import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzurestackhciVirtualmachinesHybrididentitymetadataProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:virtualMachines;

/**
   * The Public Key.
   */
readonly publicKey?: string;

/**
   * The unique identifier for the resource.
   */
readonly resourceUid?: string;
}

/**
 * AzurestackhciVirtualmachinesHybrididentitymetadata resource
 */
export class AzurestackhciVirtualmachinesHybrididentitymetadata extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AzurestackhciVirtualmachinesHybrididentitymetadataProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AzureStackHCI/virtualMachines/hybridIdentityMetadata@2021-09-01-preview";
  }

  protected getResourceBody(props: AzurestackhciVirtualmachinesHybrididentitymetadataProps): string {
    return JSON.stringify(
        {properties: {publicKey: "string", resourceUid: "string"}}
    );
  }
}
