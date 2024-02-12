import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzurestackhciClustersUpdatesProps extends IAzAPIBaseProps {

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
