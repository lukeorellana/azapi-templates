import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StoragecacheAmlfilesystemsProps extends IAzAPIBaseProps {

}

/**
 * StoragecacheAmlfilesystems resource
 */
export class StoragecacheAmlfilesystems extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StoragecacheAmlfilesystemsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.StorageCache/amlFilesystems@2023-05-01";
  }

  protected getResourceBody(props: StoragecacheAmlfilesystemsProps): string {
    return JSON.stringify(
        {properties: {encryptionSettings: {keyEncryptionKey: {keyUrl: "string", sourceVault: {id: "string"}}}, filesystemSubnet: "string", hsm: {settings: {container: "string", importPrefix: "string", loggingContainer: "string"}}, maintenanceWindow: {dayOfWeek: "string", timeOfDayUTC: "string"}, storageCapacityTiB: "${int}"}, zones: ["string"], sku: {name: "string"}}
    );
  }
}
