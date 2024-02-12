import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorageStorageaccountsTableservicesTablesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:tableServices;

/**
   * List of stored access policies specified on the table.
   */
readonly signedIdentifiers?: TableSignedIdentifier[];

/**
   * Access policy
   */
readonly accessPolicy?: TableAccessPolicy;

/**
   * unique-64-character-value of the stored access policy.
   */
readonly id: string;

/**
   * Expiry time of the access policy
   */
readonly expiryTime?: string;

/**
   * Required. List of abbreviated permissions. Supported permission values include 'r','a','u','d'
   */
readonly permission: string;

/**
   * Start time of the access policy
   */
readonly startTime?: string;
}

/**
 * StorageStorageaccountsTableservicesTables resource
 */
export class StorageStorageaccountsTableservicesTables extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StorageStorageaccountsTableservicesTablesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Storage/storageAccounts/tableServices/tables@2022-09-01";
  }

  protected getResourceBody(props: StorageStorageaccountsTableservicesTablesProps): string {
    return JSON.stringify(
        {properties: {signedIdentifiers: [{accessPolicy: {expiryTime: "string", permission: "string", startTime: "string"}, id: "string"}]}}
    );
  }
}
