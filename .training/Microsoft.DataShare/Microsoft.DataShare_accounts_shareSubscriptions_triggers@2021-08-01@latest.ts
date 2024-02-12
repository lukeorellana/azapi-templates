import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatashareAccountsSharesubscriptionsTriggersProps extends IAzAPIBaseProps {

}

/**
 * DatashareAccountsSharesubscriptionsTriggers resource
 */
export class DatashareAccountsSharesubscriptionsTriggers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatashareAccountsSharesubscriptionsTriggersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataShare/accounts/shareSubscriptions/triggers@2021-08-01";
  }

  protected getResourceBody(props: DatashareAccountsSharesubscriptionsTriggersProps): string {
    return JSON.stringify(
        {kind: "string"}
    );
  }
}
