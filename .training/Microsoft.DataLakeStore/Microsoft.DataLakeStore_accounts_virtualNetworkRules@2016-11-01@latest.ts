import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatalakestoreAccountsVirtualnetworkrulesProps extends IAzAPIBaseProps {

}

/**
 * DatalakestoreAccountsVirtualnetworkrules resource
 */
export class DatalakestoreAccountsVirtualnetworkrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatalakestoreAccountsVirtualnetworkrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataLakeStore/accounts/virtualNetworkRules@2016-11-01";
  }

  protected getResourceBody(props: DatalakestoreAccountsVirtualnetworkrulesProps): string {
    return JSON.stringify(
        {properties: {subnetId: "string"}}
    );
  }
}
