import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatashareAccountsSharesProps extends IAzAPIBaseProps {

}

/**
 * DatashareAccountsShares resource
 */
export class DatashareAccountsShares extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatashareAccountsSharesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataShare/accounts/shares@2021-08-01";
  }

  protected getResourceBody(props: DatashareAccountsSharesProps): string {
    return JSON.stringify(
        {properties: {description: "string", shareKind: "string", terms: "string"}}
    );
  }
}
