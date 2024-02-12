import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersDatabasesConnectionpoliciesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:databases;

/**
   * The fully qualified host name of the auditing proxy.
   */
readonly proxyDnsName?: string;

/**
   * The port number of the auditing proxy.
   */
readonly proxyPort?: string;

/**
   * The state of proxy redirection.
   */
readonly redirectionState?: string;

/**
   * The state of security access.
   */
readonly securityEnabledAccess?: string;

/**
   * The connection policy state.
   */
readonly state?: string;

/**
   * Whether server default is enabled or disabled.
   */
readonly useServerDefault?: string;

/**
   * The visibility of the auditing proxy.
   */
readonly visibility?: string;
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
