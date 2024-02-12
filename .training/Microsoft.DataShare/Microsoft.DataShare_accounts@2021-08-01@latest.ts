import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatashareAccountsProps extends IAzAPIBaseProps {

}

/**
 * DatashareAccounts resource
 */
export class DatashareAccounts extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatashareAccountsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataShare/accounts@2021-08-01";
  }

  protected getResourceBody(props: DatashareAccountsProps): string {
    return JSON.stringify(
        {properties: {}}
    );
  }
}
