import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DataboxedgeDataboxedgedevicesSharesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:dataBoxEdgeDevices;

/**
   * Access protocol to be used by the share.
   */
readonly accessProtocol: 'NFS''SMB';

/**
   * Azure container mapping for the share.
   */
readonly azureContainerInfo?: AzureContainerInfo;

/**
   * List of IP addresses and corresponding access rights on the share(required for NFS protocol).
   */
readonly clientAccessRights?: ClientAccessRight[];

/**
   * Data policy of the share.
   */
readonly dataPolicy?: 'Cloud''Local';

/**
   * Description for the share.
   */
readonly description?: string;

/**
   * Current monitoring status of the share.
   */
readonly monitoringStatus: 'Disabled''Enabled';

/**
   * Details of the refresh job on this share.
   */
readonly refreshDetails?: RefreshDetails;

/**
   * Current status of the share.
   */
readonly shareStatus: 'NeedsAttention''OK''Offline''Unknown''Updating';

/**
   * Mapping of users and corresponding access rights on the share (required for SMB protocol).
   */
readonly userAccessRights?: UserAccessRight[];

/**
   * Container name (Based on the data format specified, this represents the name of Azure Files/Page blob/Block blob).
   */
readonly containerName: string;

/**
   * Storage format used for the file represented by the share.
   */
readonly dataFormat: 'AzureFile''BlockBlob''PageBlob';

/**
   * ID of the storage account credential used to access storage.
   */
readonly storageAccountCredentialId: string;

/**
   * Type of access to be allowed for the client.
   */
readonly accessPermission: 'NoAccess''ReadOnly''ReadWrite';

/**
   * IP of the client.
   */
readonly client: string;

/**
   * Indicates the relative path of the error xml for the last refresh job on this particular share or container, if any. This could be a failed job or a successful job.
   */
readonly errorManifestFile?: string;

/**
   * If a refresh job is currently in progress on this share or container, this field indicates the ARM resource ID of that job. The field is empty if no job is in progress.
   */
readonly inProgressRefreshJobId?: string;

/**
   * Indicates the completed time for the last refresh job on this particular share or container, if any.This could be a failed job or a successful job.
   */
readonly lastCompletedRefreshJobTimeInUTC?: string;

/**
   * Indicates the id of the last refresh job on this particular share or container,if any. This could be a failed job or a successful job.
   */
readonly lastJob?: string;

/**
   * Type of access to be allowed for the user.
   */
readonly accessType: 'Change''Custom''Read';

/**
   * User ID (already existing in the device).
   */
readonly userId: string;
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
