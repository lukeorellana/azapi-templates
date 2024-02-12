import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesSecurityalertpoliciesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:workspaces;

/**
   * Specifies an array of alerts that are disabled. Allowed values are: Sql_Injection, Sql_Injection_Vulnerability, Access_Anomaly, Data_Exfiltration, Unsafe_Action
   */
readonly disabledAlerts?: string[];

/**
   * Specifies that the alert is sent to the account administrators.
   */
readonly emailAccountAdmins?: bool;

/**
   * Specifies an array of e-mail addresses to which the alert is sent.
   */
readonly emailAddresses?: string[];

/**
   * Specifies the number of days to keep in the Threat Detection audit logs.
   */
readonly retentionDays?: number;

/**
   * Specifies the state of the policy, whether it is enabled or disabled or a policy has not been applied yet on the specific server
   */
readonly state: 'Disabled''Enabled''New';

/**
   * Specifies the identifier key of the Threat Detection audit storage account.
   */
readonly storageAccountAccessKey?: string;

/**
   * Specifies the blob storage endpoint (e.g.https://MyAccount.blob.core.windows.net). This blob storage will hold all Threat Detection audit logs.
   */
readonly storageEndpoint?: string;
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
