import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatashareAccountsSharesDatasetsProps extends IAzAPIBaseProps {

}

/**
 * DatashareAccountsSharesDatasets resource
 */
export class DatashareAccountsSharesDatasets extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatashareAccountsSharesDatasetsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataShare/accounts/shares/dataSets@2021-08-01";
  }

  protected getResourceBody(props: DatashareAccountsSharesDatasetsProps): string {
    return JSON.stringify(
        {kind: "string"}
    );
  }
}