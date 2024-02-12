import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DataboxedgeDataboxedgedevicesDiagnosticremotesupportsettingsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:dataBoxEdgeDevices;

/**
   * Remote support settings list according to the RemoteApplicationType
   */
readonly remoteSupportSettingsList?: RemoteSupportSettings[];

/**
   * Access level allowed for this remote application type
   */
readonly accessLevel?: 'FullAccess''None''ReadOnly''ReadWrite';

/**
   * Expiration time stamp
   */
readonly expirationTimeStampInUTC?: string;

/**
   * Remote application type
   */
readonly remoteApplicationType?: 'AllApplications''LocalUI''Powershell''WAC';
}

/**
 * DataboxedgeDataboxedgedevicesDiagnosticremotesupportsettings resource
 */
export class DataboxedgeDataboxedgedevicesDiagnosticremotesupportsettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DataboxedgeDataboxedgedevicesDiagnosticremotesupportsettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataBoxEdge/dataBoxEdgeDevices/diagnosticRemoteSupportSettings@2022-12-01-preview";
  }

  protected getResourceBody(props: DataboxedgeDataboxedgedevicesDiagnosticremotesupportsettingsProps): string {
    return JSON.stringify(
        {properties: {remoteSupportSettingsList: [{accessLevel: "string", expirationTimeStampInUTC: "string", remoteApplicationType: "string"}]}}
    );
  }
}
