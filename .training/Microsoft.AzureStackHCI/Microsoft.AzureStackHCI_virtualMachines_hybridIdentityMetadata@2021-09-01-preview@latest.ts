import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzurestackhciVirtualmachinesHybrididentitymetadataProps extends IAzAPIBaseProps {

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
