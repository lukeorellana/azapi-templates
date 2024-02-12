import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface HybridcomputeMachinesProps extends IAzAPIBaseProps {
/**
   * Identity for the resource.
   */
readonly identity?: Identity;

/**
   * The identity type.
   */
readonly type?: 'SystemAssigned';

/**
   * Public Key that the client provides to be used during initial resource onboarding
   */
readonly clientPublicKey?: string;

/**
   * The metadata of the cloud environment (Azure/GCP/AWS/OCI...).
   */
readonly cloudMetadata?: CloudMetadata;

/**
   * Machine Extensions information (deprecated field)
   */
readonly extensions?: MachineExtensionInstanceView[];

/**
   * Metadata pertaining to the geographic location of the resource.
   */
readonly locationData?: LocationData;

/**
   * Specifies whether any MS SQL instance is discovered on the machine.
   */
readonly mssqlDiscovered?: string;

/**
   * Specifies the operating system settings for the hybrid machine.
   */
readonly osProfile?: OSProfile;

/**
   * The type of Operating System (windows/linux).
   */
readonly osType?: string;

/**
   * The resource id of the parent cluster (Azure HCI) this machine is assigned to, if any.
   */
readonly parentClusterResourceId?: string;

/**
   * The resource id of the private link scope this machine is assigned to, if any.
   */
readonly privateLinkScopeResourceId?: string;

/**
   * Statuses of dependent services that are reported back to ARM.
   */
readonly serviceStatuses?: ServiceStatuses;

/**
   * Specifies the hybrid machine unique ID.
   */
readonly vmId?: string;

/**
   * Instance view status.
   */
readonly status?: MachineExtensionInstanceViewStatus;

/**
   * Specifies the type of the extension; an example is "CustomScriptExtension".
   */
readonly type?: string;

/**
   * Specifies the version of the script handler.
   */
readonly typeHandlerVersion?: string;

/**
   * The status code.
   */
readonly code?: string;

/**
   * The short localizable label for the status.
   */
readonly displayStatus?: string;

/**
   * The level code.
   */
readonly level?: 'Error''Info''Warning';

/**
   * The detailed status message, including for alerts and error messages.
   */
readonly message?: string;

/**
   * The time of the status.
   */
readonly time?: string;

/**
   * The city or locality where the resource is located.
   */
readonly city?: string;

/**
   * The country or region where the resource is located
   */
readonly countryOrRegion?: string;

/**
   * The district, state, or province where the resource is located.
   */
readonly district?: string;

/**
   * Specifies the linux configuration for update management.
   */
readonly linuxConfiguration?: OSProfileLinuxConfiguration;

/**
   * Specifies the windows configuration for update management.
   */
readonly windowsConfiguration?: OSProfileWindowsConfiguration;

/**
   * Specifies the patch settings.
   */
readonly patchSettings?: PatchSettings;

/**
   * Specifies the assessment mode.
   */
readonly assessmentMode?: 'AutomaticByPlatform''ImageDefault';

/**
   * Specifies the patch mode.
   */
readonly patchMode?: 'AutomaticByOS''AutomaticByPlatform''ImageDefault''Manual';

/**
   * Specifies the patch settings.
   */
readonly patchSettings?: PatchSettings;

/**
   * The state of the extension service on the Arc-enabled machine.
   */
readonly extensionService?: ServiceStatus;

/**
   * The state of the guest configuration service on the Arc-enabled machine.
   */
readonly guestConfigurationService?: ServiceStatus;

/**
   * The behavior of the service when the Arc-enabled machine starts up.
   */
readonly startupType?: string;

/**
   * The current status of the service.
   */
readonly status?: string;
}

/**
 * HybridcomputeMachines resource
 */
export class HybridcomputeMachines extends AzAPIBase {
  constructor(scope: Construct, id: string, props: HybridcomputeMachinesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.HybridCompute/machines@2022-11-10";
  }

  protected getResourceBody(props: HybridcomputeMachinesProps): string {
    return JSON.stringify(
        {properties: {clientPublicKey: "string", cloudMetadata: {}, extensions: [{name: "string", status: {code: "string", displayStatus: "string", level: "string", message: "string", time: "string"}, type: "string", typeHandlerVersion: "string"}], locationData: {city: "string", countryOrRegion: "string", district: "string", name: "string"}, mssqlDiscovered: "string", osProfile: {linuxConfiguration: {patchSettings: {assessmentMode: "string", patchMode: "string"}}, windowsConfiguration: {patchSettings: {assessmentMode: "string", patchMode: "string"}}}, osType: "string", parentClusterResourceId: "string", privateLinkScopeResourceId: "string", serviceStatuses: {extensionService: {startupType: "string", status: "string"}, guestConfigurationService: {startupType: "string", status: "string"}}, vmId: "string"}}
    );
  }
}
