import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityIotsecuritysolutionsProps extends IAzAPIBaseProps {
/**
   * List of additional workspaces
   */
readonly additionalWorkspaces?: AdditionalWorkspacesProperties[];

/**
   * Disabled data sources. Disabling these data sources compromises the system.
   */
readonly disabledDataSources?: String array containing any of:'TwinData';

/**
   * Resource display name.
   */
readonly displayName: string;

/**
   * List of additional options for exporting to workspace data.
   */
readonly export?: String array containing any of:'RawEvents';

/**
   * IoT Hub resource IDs
   */
readonly iotHubs: string[];

/**
   * List of the configuration status for each recommendation type.
   */
readonly recommendationsConfiguration?: RecommendationConfigurationProperties[];

/**
   * Status of the IoT Security solution.
   */
readonly status?: 'Disabled''Enabled';

/**
   * Unmasked IP address logging status
   */
readonly unmaskedIpLoggingStatus?: 'Disabled''Enabled';

/**
   * Properties of the IoT Security solution's user defined resources.
   */
readonly userDefinedResources?: UserDefinedResourcesProperties;

/**
   * Workspace resource ID
   */
readonly workspace?: string;

/**
   * List of data types sent to workspace
   */
readonly dataTypes?: String array containing any of:'Alerts''RawEvents';

/**
   * Workspace type.
   */
readonly type?: 'Sentinel';

/**
   * Workspace resource id
   */
readonly workspace?: string;

/**
   * The type of IoT Security recommendation.
   */
readonly recommendationType: 'IoT_ACRAuthentication''IoT_AgentSendsUnutilizedMessages''IoT_Baseline''IoT_EdgeHubMemOptimize''IoT_EdgeLoggingOptions''IoT_IPFilter_DenyAll''IoT_IPFilter_PermissiveRule''IoT_InconsistentModuleSettings''IoT_InstallAgent''IoT_OpenPorts''IoT_PermissiveFirewallPolicy''IoT_PermissiveInputFirewallRules''IoT_PermissiveOutputFirewallRules''IoT_PrivilegedDockerOptions''IoT_SharedCredentials''IoT_VulnerableTLSCipherSuite';

/**
   * Recommendation status. When the recommendation status is disabled recommendations are not generated.
   */
readonly status: 'Disabled''Enabled';

/**
   * Azure Resource Graph query which represents the security solution's user defined resources. Required to start with "where type != "Microsoft.Devices/IotHubs""
   */
readonly query: string;

/**
   * List of Azure subscription ids on which the user defined resources query should be executed.
   */
readonly querySubscriptions: string[] Constranumbers:Pattern =^[0-9A-Fa-f]{8}-([0-9A-Fa-f]{4}-){3}[0-9A-Fa-f]{12}$;
}

/**
 * SecurityIotsecuritysolutions resource
 */
export class SecurityIotsecuritysolutions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityIotsecuritysolutionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Security/iotSecuritySolutions@2019-08-01";
  }

  protected getResourceBody(props: SecurityIotsecuritysolutionsProps): string {
    return JSON.stringify(
        {properties: {additionalWorkspaces: [{dataTypes: ["string"], type: "Sentinel", workspace: "string"}], disabledDataSources: "TwinData", displayName: "string", export: "RawEvents", iotHubs: ["string"], recommendationsConfiguration: [{recommendationType: "string", status: "string"}], status: "string", unmaskedIpLoggingStatus: "string", userDefinedResources: {query: "string", querySubscriptions: ["string"]}, workspace: "string"}}
    );
  }
}
