import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzurestackhciClustersUpdatesummariesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:clusters;

/**
   * Current Solution Bundle version of the stamp.
   */
readonly currentVersion?: string;

/**
   * Name of the hardware model.
   */
readonly hardwareModel?: string;

/**
   * Last time the package-specific checks were run.
   */
readonly healthCheckDate?: string;

/**
   * An array of pre-check result objects.
   */
readonly healthCheckResult?: PrecheckResult[];

/**
   * Overall health state for update-specific health checks.
   */
readonly healthState?: 'Error''Failure''InProgress''Success''Unknown''Warning';

/**
   * Last time the update service successfully checked for updates
   */
readonly lastChecked?: string;

/**
   * Last time an update installation completed successfully.
   */
readonly lastUpdated?: string;

/**
   * OEM family name.
   */
readonly oemFamily?: string;

/**
   * Current version of each updatable component.
   */
readonly packageVersions?: PackageVersionInfo[];

/**
   * Overall update state of the stamp.
   */
readonly state?: 'AppliedSuccessfully''NeedsAttention''PreparationFailed''PreparationInProgress''Unknown''UpdateAvailable''UpdateFailed''UpdateInProgress';

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
}

/**
 * AzurestackhciClustersUpdatesummaries resource
 */
export class AzurestackhciClustersUpdatesummaries extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AzurestackhciClustersUpdatesummariesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AzureStackHCI/clusters/updateSummaries@2022-12-01";
  }

  protected getResourceBody(props: AzurestackhciClustersUpdatesummariesProps): string {
    return JSON.stringify(
        {properties: {currentVersion: "string", hardwareModel: "string", healthCheckDate: "string", healthCheckResult: [{additionalData: "string", description: "string", healthCheckSource: "string", name: "string", remediation: "string", severity: "string", status: "string", tags: {key: "string", value: "string"}, targetResourceID: "string", targetResourceName: "string", timestamp: "string", title: "string"}], healthState: "string", lastChecked: "string", lastUpdated: "string", oemFamily: "string", packageVersions: [{lastUpdated: "string", packageType: "string", version: "string"}], state: "string"}}
    );
  }
}
