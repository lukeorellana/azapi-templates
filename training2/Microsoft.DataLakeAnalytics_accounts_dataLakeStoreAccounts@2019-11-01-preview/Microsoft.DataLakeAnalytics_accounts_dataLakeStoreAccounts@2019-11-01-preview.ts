import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatalakeanalyticsAccountsDatalakestoreaccountsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:accounts;

/**
   * The optional suffix for the Data Lake Store account.
   */
readonly suffix?: string;
}

/**
 * DatalakeanalyticsAccountsDatalakestoreaccounts resource
 */
export class DatalakeanalyticsAccountsDatalakestoreaccounts extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatalakeanalyticsAccountsDatalakestoreaccountsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataLakeAnalytics/accounts/dataLakeStoreAccounts@2019-11-01-preview";
  }

  protected getResourceBody(props: DatalakeanalyticsAccountsDatalakestoreaccountsProps): string {
    return JSON.stringify(
        {properties: {suffix: "string"}}
    );
  }
}
