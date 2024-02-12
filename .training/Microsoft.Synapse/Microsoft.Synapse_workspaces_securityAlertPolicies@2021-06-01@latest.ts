import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesSecurityalertpoliciesProps extends IAzAPIBaseProps {

}

/**
 * SynapseWorkspacesSecurityalertpolicies resource
 */
export class SynapseWorkspacesSecurityalertpolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SynapseWorkspacesSecurityalertpoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Synapse/workspaces/securityAlertPolicies@2021-06-01";
  }

  protected getResourceBody(props: SynapseWorkspacesSecurityalertpoliciesProps): string {
    return JSON.stringify(
        {properties: {disabledAlerts: ["string"], emailAccountAdmins: "${bool}", emailAddresses: ["string"], retentionDays: "${int}", state: "string", storageAccountAccessKey: "string", storageEndpoint: "string"}}
    );
  }
}
