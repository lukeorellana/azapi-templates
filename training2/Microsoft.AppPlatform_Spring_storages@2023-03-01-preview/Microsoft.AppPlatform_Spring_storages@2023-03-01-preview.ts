import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppplatformSpringStoragesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:Spring;

/**
   * Set the object type
   */
readonly storageType: StorageAccount;

/**
   * The type of the storage.
   */
readonly storageType: 'StorageAccount';

/**
   * The account key of the Azure Storage Account.
   */
readonly accountKey: string;

/**
   * The account name of the Azure Storage Account.
   */
readonly accountName: string;
}

/**
 * AppplatformSpringStorages resource
 */
export class AppplatformSpringStorages extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppplatformSpringStoragesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AppPlatform/Spring/storages@2023-03-01-preview";
  }

  protected getResourceBody(props: AppplatformSpringStoragesProps): string {
    return JSON.stringify(
        {properties: {storageType: "string"}}
    );
  }
}
