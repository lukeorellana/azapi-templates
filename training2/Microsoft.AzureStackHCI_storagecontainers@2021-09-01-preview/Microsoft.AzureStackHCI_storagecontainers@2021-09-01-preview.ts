import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzurestackhciStoragecontainersProps extends IAzAPIBaseProps {
/**
   * 
   */
readonly extendedLocation?: StoragecontainersExtendedLocation;

/**
   * The extended location type.
   */
readonly type?: string;

/**
   * Path of the storage container on the disk
   */
readonly path?: string;

/**
   * 
   */
readonly provisioningState?: string;

/**
   * name of the object to be used in moc
   */
readonly resourceName?: string;
}

/**
 * AzurestackhciStoragecontainers resource
 */
export class AzurestackhciStoragecontainers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AzurestackhciStoragecontainersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AzureStackHCI/storagecontainers@2021-09-01-preview";
  }

  protected getResourceBody(props: AzurestackhciStoragecontainersProps): string {
    return JSON.stringify(
        {properties: {path: "string", provisioningState: "string", resourceName: "string"}, extendedLocation: {name: "string", type: "string"}}
    );
  }
}
