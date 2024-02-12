import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlManagedinstancesSecurityalertpoliciesProps extends IAzAPIBaseProps {

}

/**
 * SqlManagedinstancesSecurityalertpolicies resource
 */
export class SqlManagedinstancesSecurityalertpolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlManagedinstancesSecurityalertpoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/managedInstances/securityAlertPolicies@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlManagedinstancesSecurityalertpoliciesProps): string {
    return JSON.stringify(
        {properties: {disabledAlerts: ["string"], emailAccountAdmins: "${bool}", emailAddresses: ["string"], retentionDays: "${int}", state: "string", storageAccountAccessKey: "string", storageEndpoint: "string"}}
    );
  }
}
