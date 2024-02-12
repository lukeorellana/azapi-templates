import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorageStorageaccountsLocalusersProps extends IAzAPIBaseProps {

}

/**
 * StorageStorageaccountsLocalusers resource
 */
export class StorageStorageaccountsLocalusers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StorageStorageaccountsLocalusersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Storage/storageAccounts/localUsers@2022-09-01";
  }

  protected getResourceBody(props: StorageStorageaccountsLocalusersProps): string {
    return JSON.stringify(
        {properties: {hasSharedKey: "${bool}", hasSshKey: "${bool}", hasSshPassword: "${bool}", homeDirectory: "string", permissionScopes: [{permissions: "string", resourceName: "string", service: "string"}], sshAuthorizedKeys: [{description: "string", key: "string"}]}}
    );
  }
}
