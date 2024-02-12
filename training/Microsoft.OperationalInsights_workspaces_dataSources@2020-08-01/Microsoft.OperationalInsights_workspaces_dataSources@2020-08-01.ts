import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface OperationalinsightsWorkspacesDatasourcesProps extends IAzAPIBaseProps {

}

export class OperationalinsightsWorkspacesDatasources extends AzAPIBase {
  constructor(scope: Construct, id: string, props: OperationalinsightsWorkspacesDatasourcesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.OperationalInsights/workspaces/dataSources@2020-08-01";
  }

  protected getResourceBody(props: OperationalinsightsWorkspacesDatasourcesProps): string {
    return JSON.stringify(
      {kind: "string", etag: "string"}
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
// | tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
// | kind | The kind of the DataSource. | 'ApplicationInsights''AzureActivityLog''AzureAuditLog''ChangeTrackingContentLocation''ChangeTrackingCustomPath''ChangeTrackingDataTypeConfiguration''ChangeTrackingDefaultRegistry''ChangeTrackingLinuxPath''ChangeTrackingPath''ChangeTrackingRegistry''ChangeTrackingServices''CustomLog''CustomLogCollection''DnsAnalytics''GenericDataSource''IISLogs''ImportComputerGroup''Itsm''LinuxChangeTrackingPath''LinuxPerformanceCollection''LinuxPerformanceObject''LinuxSyslog''LinuxSyslogCollection''NetworkMonitoring''Office365''SecurityCenterSecurityWindowsBaselineConfiguration''SecurityEventCollectionConfiguration''SecurityInsightsSecurityEventCollectionConfiguration''SecurityWindowsBaselineConfiguration''SqlDataClassification''WindowsEvent''WindowsPerformanceCounter''WindowsTelemetry' (required) |
// | parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
// | etag | The ETag of the data source. | string |
// | properties | The data source properties in raw json format, each kind of data source have it's own schema. | For Bicep, you can use theany()function.(required) |
