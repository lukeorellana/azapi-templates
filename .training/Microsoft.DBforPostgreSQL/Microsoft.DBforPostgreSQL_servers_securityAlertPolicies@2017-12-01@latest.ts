import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbforpostgresqlServersSecurityalertpoliciesProps extends IAzAPIBaseProps {

}

/**
 * DbforpostgresqlServersSecurityalertpolicies resource
 */
export class DbforpostgresqlServersSecurityalertpolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbforpostgresqlServersSecurityalertpoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforPostgreSQL/servers/securityAlertPolicies@2017-12-01";
  }

  protected getResourceBody(props: DbforpostgresqlServersSecurityalertpoliciesProps): string {
    return JSON.stringify(
        {properties: {disabledAlerts: ["string"], emailAccountAdmins: "${bool}", emailAddresses: ["string"], retentionDays: "${int}", state: "string", storageAccountAccessKey: "string", storageEndpoint: "string"}}
    );
  }
}
