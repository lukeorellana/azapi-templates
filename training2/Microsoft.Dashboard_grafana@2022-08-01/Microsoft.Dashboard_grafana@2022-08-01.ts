import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DashboardGrafanaProps extends IAzAPIBaseProps {
/**
   * The Sku of the grafana resource.
   */
readonly sku?: ResourceSku;

/**
   * The managed identity of the grafana resource.
   */
readonly identity?: ManagedServiceIdentity;

/**
   * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
   */
readonly type: 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned';

/**
   * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
   */
readonly userAssignedIdentities?: object;

/**
   * The api key setting of the Grafana instance.
   */
readonly apiKey?: 'Disabled''Enabled';

/**
   * Scope for dns deterministic name hash calculation.
   */
readonly autoGeneratedDomainNameLabelScope?: 'TenantReuse';

/**
   * Whether a Grafana instance uses deterministic outbound IPs.
   */
readonly deterministicOutboundIP?: 'Disabled''Enabled';

/**
   * GrafanaIntegrations is a bundled observability experience (e.g. pre-configured data source, tailored Grafana dashboards, alerting defaults) for common monitoring scenarios.
   */
readonly grafanaIntegrations?: GrafanaIntegrations;

/**
   * Indicate the state for enable or disable traffic over the public interface.
   */
readonly publicNetworkAccess?: 'Disabled''Enabled';

/**
   * The zone redundancy setting of the Grafana instance.
   */
readonly zoneRedundancy?: 'Disabled''Enabled';

/**
   * 
   */
readonly azureMonitorWorkspaceIntegrations?: AzureMonitorWorkspaceIntegration[];

/**
   * The resource Id of the connected Azure Monitor Workspace.
   */
readonly azureMonitorWorkspaceResourceId?: string;
}

/**
 * DashboardGrafana resource
 */
export class DashboardGrafana extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DashboardGrafanaProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Dashboard/grafana@2022-08-01";
  }

  protected getResourceBody(props: DashboardGrafanaProps): string {
    return JSON.stringify(
        {properties: {apiKey: "string", autoGeneratedDomainNameLabelScope: "TenantReuse", deterministicOutboundIP: "string", grafanaIntegrations: {azureMonitorWorkspaceIntegrations: [{azureMonitorWorkspaceResourceId: "string"}]}, publicNetworkAccess: "string", zoneRedundancy: "string"}, sku: {name: "string"}}
    );
  }
}
