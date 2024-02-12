import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DataboxedgeDataboxedgedevicesSharesProps extends IAzAPIBaseProps {

}

/**
 * DataboxedgeDataboxedgedevicesShares resource
 */
export class DataboxedgeDataboxedgedevicesShares extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DataboxedgeDataboxedgedevicesSharesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataBoxEdge/dataBoxEdgeDevices/shares@2022-12-01-preview";
  }

  protected getResourceBody(props: DataboxedgeDataboxedgedevicesSharesProps): string {
    return JSON.stringify(
        {properties: {accessProtocol: "string", azureContainerInfo: {containerName: "string", dataFormat: "string", storageAccountCredentialId: "string"}, clientAccessRights: [{accessPermission: "string", client: "string"}], dataPolicy: "string", description: "string", monitoringStatus: "string", refreshDetails: {errorManifestFile: "string", inProgressRefreshJobId: "string", lastCompletedRefreshJobTimeInUTC: "string", lastJob: "string"}, shareStatus: "string", userAccessRights: [{accessType: "string", userId: "string"}]}}
    );
  }
}
