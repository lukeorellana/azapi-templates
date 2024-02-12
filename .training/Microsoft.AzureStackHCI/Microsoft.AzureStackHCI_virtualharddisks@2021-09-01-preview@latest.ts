import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzurestackhciVirtualharddisksProps extends IAzAPIBaseProps {

}

/**
 * AzurestackhciVirtualharddisks resource
 */
export class AzurestackhciVirtualharddisks extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AzurestackhciVirtualharddisksProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AzureStackHCI/virtualharddisks@2021-09-01-preview";
  }

  protected getResourceBody(props: AzurestackhciVirtualharddisksProps): string {
    return JSON.stringify(
        {properties: {blockSizeBytes: "${int}", containerId: "string", diskFileFormat: "string", diskSizeBytes: "${int}", dynamic: "${bool}", hyperVGeneration: "string", logicalSectorBytes: "${int}", physicalSectorBytes: "${int}", resourceName: "string"}, extendedLocation: {name: "string", type: "CustomLocation"}}
    );
  }
}
