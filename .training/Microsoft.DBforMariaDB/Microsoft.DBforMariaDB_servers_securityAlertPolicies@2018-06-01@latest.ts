import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbformariadbServersSecurityalertpoliciesProps extends IAzAPIBaseProps {

}

/**
 * DbformariadbServersSecurityalertpolicies resource
 */
export class DbformariadbServersSecurityalertpolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbformariadbServersSecurityalertpoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforMariaDB/servers/securityAlertPolicies@2018-06-01";
  }

  protected getResourceBody(props: DbformariadbServersSecurityalertpoliciesProps): string {
    return JSON.stringify(
        {properties: {disabledAlerts: ["string"], emailAccountAdmins: "${bool}", emailAddresses: ["string"], retentionDays: "${int}", state: "string", storageAccountAccessKey: "string", storageEndpoint: "string"}}
    );
  }
}
