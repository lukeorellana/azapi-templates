import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface OperationalinsightsWorkspacesDatasourcesProps extends IAzAPIBaseProps {
/**
   * The kind of the DataSource.
   */
readonly kind: 'ApplicationInsights''AzureActivityLog''AzureAuditLog''ChangeTrackingContentLocation''ChangeTrackingCustomPath''ChangeTrackingDataTypeConfiguration''ChangeTrackingDefaultRegistry''ChangeTrackingLinuxPath''ChangeTrackingPath''ChangeTrackingRegistry''ChangeTrackingServices''CustomLog''CustomLogCollection''DnsAnalytics''GenericDataSource''IISLogs''ImportComputerGroup''Itsm''LinuxChangeTrackingPath''LinuxPerformanceCollection''LinuxPerformanceObject''LinuxSyslog''LinuxSyslogCollection''NetworkMonitoring''Office365''SecurityCenterSecurityWindowsBaselineConfiguration''SecurityEventCollectionConfiguration''SecurityInsightsSecurityEventCollectionConfiguration''SecurityWindowsBaselineConfiguration''SqlDataClassification''WindowsEvent''WindowsPerformanceCounter''WindowsTelemetry';

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:workspaces;

/**
   * The ETag of the data source.
   */
readonly etag?: string;
}

/**
 * OperationalinsightsWorkspacesDatasources resource
 */
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
