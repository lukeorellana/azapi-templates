import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzurestackhciClustersUpdatesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:clusters;

/**
   * Extensible KV pairs serialized as a string. This is currently used to report the stamp OEM family and hardware model information when an update is flagged as Invalid for the stamp based on OEM type.
   */
readonly additionalProperties?: string;

/**
   * Indicates the way the update content can be downloaded.
   */
readonly availabilityType?: 'Local''Notify''Online';

/**
   * An array of component versions for a Solution Bundle update, and an empty array otherwise.
   */
readonly componentVersions?: PackageVersionInfo[];

/**
   * Description of the update.
   */
readonly description?: string;

/**
   * Display name of the Update
   */
readonly displayName?: string;

/**
   * Last time the package-specific checks were run.
   */
readonly healthCheckDate?: string;

/**
   * An array of PrecheckResult objects.
   */
readonly healthCheckResult?: PrecheckResult[];

/**
   * Overall health state for update-specific health checks.
   */
readonly healthState?: 'Error''Failure''InProgress''Success''Unknown''Warning';

/**
   * Date that the update was installed.
   */
readonly installedDate?: string;

/**
   * Path where the update package is available.
   */
readonly packagePath?: string;

/**
   * Size of the package. This value is a combination of the size from update metadata and size of the payload that results from the live scan operation for OS update content.
   */
readonly packageSizeInMb?: number;

/**
   * Customer-visible type of the update.
   */
readonly packageType?: string;

/**
   * If update State is HasPrerequisite, this property contains an array of objects describing prerequisite updates before installing this update. Otherwise, it is empty.
   */
readonly prerequisites?: UpdatePrerequisite[];

/**
   * Publisher of the update package.
   */
readonly publisher?: string;

/**
   * 
   */
readonly rebootRequired?: 'False''True''Unknown';

/**
   * Link to release notes for the update.
   */
readonly releaseLink?: string;

/**
   * State of the update as it relates to this stamp.
   */
readonly state?: 'DownloadFailed''Downloading''HasPrerequisite''HealthCheckFailed''HealthChecking''InstallationFailed''Installed''Installing''Invalid''NotApplicableBecauseAnotherUpdateIsInProgress''Obsolete''PreparationFailed''Preparing''Ready''ReadyToInstall''Recalled''ScanFailed''ScanInProgress';

/**
   * Additional information regarding the state of the update. See definition of UpdateStateProperties type below for more details on this property.
   */
readonly updateStateProperties?: UpdateStateProperties;

/**
   * Version of the update.
   */
readonly version?: string;

/**
   * Last time this component was updated.
   */
readonly lastUpdated?: string;

/**
   * Package type
   */
readonly packageType?: string;

/**
   * Package version
   */
readonly version?: string;

/**
   * Property bag of key value pairs for additional information.
   */
readonly additionalData?: string;

/**
   * Detailed overview of the issue and what impact the issue has on the stamp.
   */
readonly description?: string;

/**
   * The name of the services called for the HealthCheck (I.E. Test-AzureStack, Test-Cluster).
   */
readonly healthCheckSource?: string;

/**
   * Set of steps that can be taken to resolve the issue found.
   */
readonly remediation?: string;

/**
   * Severity of the result (Critical, Warning, Informational, Hidden). This answers how important the result is. Critical is the only update-blocking severity.
   */
readonly severity?: 'Critical''Hidden''Informational''Warning';

/**
   * The status of the check running (i.e. Failed, Succeeded, In Progress). This answers whether the check ran, and passed or failed.
   */
readonly status?: 'ConnectedRecently''Disconnected''Error''Failed''InProgress''NotConnectedRecently''NotSpecified''NotYetRegistered''Succeeded';

/**
   * The unique identifier for the affected resource (such as a node or drive).
   */
readonly targetResourceID?: string;

/**
   * The name of the affected resource.
   */
readonly targetResourceName?: string;

/**
   * The Time in which the HealthCheck was called.
   */
readonly timestamp?: string;

/**
   * User-facing name; one or more sentences indicating the direct issue.
   */
readonly title?: string;

/**
   * Friendly name of the prerequisite.
   */
readonly packageName?: string;

/**
   * Updatable component type.
   */
readonly updateType?: string;

/**
   * Version of the prerequisite.
   */
readonly version?: string;

/**
   * Brief message with instructions for updates of AvailabilityType Notify.
   */
readonly notifyMessage?: string;

/**
   * Progress percentage of ongoing operation. Currently this property is only valid when the update is in the Downloading state, where it maps to how much of the update content has been downloaded.
   */
readonly progressPercentage?: number;
}

/**
 * AzurestackhciClustersUpdates resource
 */
export class AzurestackhciClustersUpdates extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AzurestackhciClustersUpdatesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AzureStackHCI/clusters/updates@2022-12-01";
  }

  protected getResourceBody(props: AzurestackhciClustersUpdatesProps): string {
    return JSON.stringify(
        {properties: {additionalProperties: "string", availabilityType: "string", componentVersions: [{lastUpdated: "string", packageType: "string", version: "string"}], description: "string", displayName: "string", healthCheckDate: "string", healthCheckResult: [{additionalData: "string", description: "string", healthCheckSource: "string", name: "string", remediation: "string", severity: "string", status: "string", tags: {key: "string", value: "string"}, targetResourceID: "string", targetResourceName: "string", timestamp: "string", title: "string"}], healthState: "string", installedDate: "string", packagePath: "string", packageSizeInMb: "${int}", packageType: "string", prerequisites: [{packageName: "string", updateType: "string", version: "string"}], publisher: "string", rebootRequired: "string", releaseLink: "string", state: "string", updateStateProperties: {notifyMessage: "string", progressPercentage: "${int}"}, version: "string"}}
    );
  }
}
