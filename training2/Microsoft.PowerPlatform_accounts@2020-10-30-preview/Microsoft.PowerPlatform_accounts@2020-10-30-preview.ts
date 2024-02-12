import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface PowerplatformAccountsProps extends IAzAPIBaseProps {
/**
   * The description of the account.
   */
readonly description?: string;
}

/**
 * PowerplatformAccounts resource
 */
export class PowerplatformAccounts extends AzAPIBase {
  constructor(scope: Construct, id: string, props: PowerplatformAccountsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.PowerPlatform/accounts@2020-10-30-preview";
  }

  protected getResourceBody(props: PowerplatformAccountsProps): string {
    return JSON.stringify(
        {properties: {description: "string"}}
    );
  }
}
