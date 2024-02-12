import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbformysqlServersSecurityalertpoliciesProps extends IAzAPIBaseProps {

}

/**
 * DbformysqlServersSecurityalertpolicies resource
 */
export class DbformysqlServersSecurityalertpolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbformysqlServersSecurityalertpoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforMySQL/servers/securityAlertPolicies@2017-12-01";
  }

  protected getResourceBody(props: DbformysqlServersSecurityalertpoliciesProps): string {
    return JSON.stringify(
        {properties: {disabledAlerts: ["string"], emailAccountAdmins: "${bool}", emailAddresses: ["string"], retentionDays: "${int}", state: "string", storageAccountAccessKey: "string", storageEndpoint: "string"}}
    );
  }
}
