import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DataboxedgeDataboxedgedevicesDiagnosticproactivelogcollectionsettingsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:dataBoxEdgeDevices;

/**
   * Proactive diagnostic collection consent flag
   */
readonly userConsent: 'Disabled''Enabled';
}

/**
 * DataboxedgeDataboxedgedevicesDiagnosticproactivelogcollectionsettings resource
 */
export class DataboxedgeDataboxedgedevicesDiagnosticproactivelogcollectionsettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DataboxedgeDataboxedgedevicesDiagnosticproactivelogcollectionsettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataBoxEdge/dataBoxEdgeDevices/diagnosticProactiveLogCollectionSettings@2022-12-01-preview";
  }

  protected getResourceBody(props: DataboxedgeDataboxedgedevicesDiagnosticproactivelogcollectionsettingsProps): string {
    return JSON.stringify(
        {properties: {userConsent: "string"}}
    );
  }
}
