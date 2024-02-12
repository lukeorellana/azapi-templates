import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersDatabasesDatamaskingpoliciesProps extends IAzAPIBaseProps {

}

/**
 * SqlServersDatabasesDatamaskingpolicies resource
 */
export class SqlServersDatabasesDatamaskingpolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlServersDatabasesDatamaskingpoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/servers/databases/dataMaskingPolicies@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlServersDatabasesDatamaskingpoliciesProps): string {
    return JSON.stringify(
        {properties: {dataMaskingState: "string", exemptPrincipals: "string"}}
    );
  }
}
