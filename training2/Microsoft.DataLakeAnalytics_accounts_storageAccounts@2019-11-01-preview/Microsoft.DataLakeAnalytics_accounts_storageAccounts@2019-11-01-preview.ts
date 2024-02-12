import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatalakeanalyticsAccountsStorageaccountsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:accounts;

/**
   * The access key associated with this Azure Storage account that will be used to connect to it.
   */
readonly accessKey: string;

/**
   * The optional suffix for the storage account.
   */
readonly suffix?: string;
}

/**
 * DatalakeanalyticsAccountsStorageaccounts resource
 */
export class DatalakeanalyticsAccountsStorageaccounts extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatalakeanalyticsAccountsStorageaccountsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataLakeAnalytics/accounts/storageAccounts@2019-11-01-preview";
  }

  protected getResourceBody(props: DatalakeanalyticsAccountsStorageaccountsProps): string {
    return JSON.stringify(
        {properties: {accessKey: "string", suffix: "string"}}
    );
  }
}
