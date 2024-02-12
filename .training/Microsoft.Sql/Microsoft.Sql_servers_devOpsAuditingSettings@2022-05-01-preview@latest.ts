import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersDevopsauditingsettingsProps extends IAzAPIBaseProps {

}

/**
 * SqlServersDevopsauditingsettings resource
 */
export class SqlServersDevopsauditingsettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlServersDevopsauditingsettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/servers/devOpsAuditingSettings@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlServersDevopsauditingsettingsProps): string {
    return JSON.stringify(
        {properties: {isAzureMonitorTargetEnabled: "${bool}", isManagedIdentityInUse: "${bool}", state: "string", storageAccountAccessKey: "string", storageAccountSubscriptionId: "string", storageEndpoint: "string"}}
    );
  }
}
