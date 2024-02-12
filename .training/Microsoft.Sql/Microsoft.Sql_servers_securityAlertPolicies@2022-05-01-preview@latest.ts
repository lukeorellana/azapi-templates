import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersSecurityalertpoliciesProps extends IAzAPIBaseProps {

}

/**
 * SqlServersSecurityalertpolicies resource
 */
export class SqlServersSecurityalertpolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlServersSecurityalertpoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/servers/securityAlertPolicies@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlServersSecurityalertpoliciesProps): string {
    return JSON.stringify(
        {properties: {disabledAlerts: ["string"], emailAccountAdmins: "${bool}", emailAddresses: ["string"], retentionDays: "${int}", state: "string", storageAccountAccessKey: "string", storageEndpoint: "string"}}
    );
  }
}
