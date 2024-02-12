import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzurestackhciClustersUpdatesummariesProps extends IAzAPIBaseProps {

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
