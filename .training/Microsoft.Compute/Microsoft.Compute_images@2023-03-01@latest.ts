import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ComputeImagesProps extends IAzAPIBaseProps {

}

/**
 * ComputeImages resource
 */
export class ComputeImages extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ComputeImagesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Compute/images@2023-03-01";
  }

  protected getResourceBody(props: ComputeImagesProps): string {
    return JSON.stringify(
        {properties: {hyperVGeneration: "string", sourceVirtualMachine: {id: "string"}, storageProfile: {dataDisks: [{blobUri: "string", caching: "string", diskEncryptionSet: {id: "string"}, diskSizeGB: "${int}", lun: "${int}", managedDisk: {id: "string"}, snapshot: {id: "string"}, storageAccountType: "string"}], osDisk: {blobUri: "string", caching: "string", diskEncryptionSet: {id: "string"}, diskSizeGB: "${int}", managedDisk: {id: "string"}, osState: "string", osType: "string", snapshot: {id: "string"}, storageAccountType: "string"}, zoneResilient: "${bool}"}}, extendedLocation: {name: "string", type: "EdgeZone"}}
    );
  }
}
