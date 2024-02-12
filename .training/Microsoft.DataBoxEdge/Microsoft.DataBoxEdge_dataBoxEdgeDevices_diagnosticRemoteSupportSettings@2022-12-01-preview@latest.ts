import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DataboxedgeDataboxedgedevicesDiagnosticremotesupportsettingsProps extends IAzAPIBaseProps {

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
