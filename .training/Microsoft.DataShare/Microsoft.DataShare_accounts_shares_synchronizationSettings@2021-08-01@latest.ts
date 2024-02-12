import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatashareAccountsSharesSynchronizationsettingsProps extends IAzAPIBaseProps {

}

/**
 * DatashareAccountsSharesSynchronizationsettings resource
 */
export class DatashareAccountsSharesSynchronizationsettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatashareAccountsSharesSynchronizationsettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataShare/accounts/shares/synchronizationSettings@2021-08-01";
  }

  protected getResourceBody(props: DatashareAccountsSharesSynchronizationsettingsProps): string {
    return JSON.stringify(
        {kind: "string"}
    );
  }
}
