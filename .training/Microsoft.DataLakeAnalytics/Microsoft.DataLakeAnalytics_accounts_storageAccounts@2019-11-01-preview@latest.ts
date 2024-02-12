import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatalakeanalyticsAccountsStorageaccountsProps extends IAzAPIBaseProps {

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
