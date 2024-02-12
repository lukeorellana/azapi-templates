import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersDatabasesConnectionpoliciesProps extends IAzAPIBaseProps {

}

/**
 * SqlServersDatabasesConnectionpolicies resource
 */
export class SqlServersDatabasesConnectionpolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlServersDatabasesConnectionpoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/servers/databases/connectionPolicies@2014-04-01";
  }

  protected getResourceBody(props: SqlServersDatabasesConnectionpoliciesProps): string {
    return JSON.stringify(
        {properties: {proxyDnsName: "string", proxyPort: "string", redirectionState: "string", securityEnabledAccess: "string", state: "string", useServerDefault: "string", visibility: "string"}}
    );
  }
}
