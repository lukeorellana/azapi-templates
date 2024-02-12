import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatashareAccountsSharesubscriptionsDatasetmappingsProps extends IAzAPIBaseProps {

}

/**
 * DatashareAccountsSharesubscriptionsDatasetmappings resource
 */
export class DatashareAccountsSharesubscriptionsDatasetmappings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatashareAccountsSharesubscriptionsDatasetmappingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataShare/accounts/shareSubscriptions/dataSetMappings@2021-08-01";
  }

  protected getResourceBody(props: DatashareAccountsSharesubscriptionsDatasetmappingsProps): string {
    return JSON.stringify(
        {kind: "string"}
    );
  }
}
