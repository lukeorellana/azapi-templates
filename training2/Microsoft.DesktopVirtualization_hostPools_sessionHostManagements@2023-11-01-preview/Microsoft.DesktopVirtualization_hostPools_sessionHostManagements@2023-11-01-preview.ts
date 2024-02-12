import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DesktopvirtualizationHostpoolsSessionhostmanagementsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:hostPools;

/**
   * Time zone for sessionHostManagement operations as defined inhttps://docs.microsoft.com/dotnet/api/system.timezoneinfo.findsystemtimezonebyid. Must be set if useLocalTime is true.
   */
readonly scheduledDateTimeZone: string;

/**
   * Parameters for a hostpool update.
   */
readonly update: HostPoolUpdateConfigurationProperties;

/**
   * Whether not to save original disk. False by default.
   */
readonly deleteOriginalVm?: bool;

/**
   * Grace period before logging off users in minutes.
   */
readonly logOffDelayMinutes: number;

/**
   * Log off message sent to user for logoff. Default value is an empty string.
   */
readonly logOffMessage?: stringConstranumbers:Max length = 260;

/**
   * The maximum number of virtual machines to be removed during hostpool update.
   */
readonly maxVmsRemoved: number Constranumbers:Min value = 1;
}

/**
 * DesktopvirtualizationHostpoolsSessionhostmanagements resource
 */
export class DesktopvirtualizationHostpoolsSessionhostmanagements extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DesktopvirtualizationHostpoolsSessionhostmanagementsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DesktopVirtualization/hostPools/sessionHostManagements@2023-11-01-preview";
  }

  protected getResourceBody(props: DesktopvirtualizationHostpoolsSessionhostmanagementsProps): string {
    return JSON.stringify(
        {properties: {scheduledDateTimeZone: "string", update: {deleteOriginalVm: "${bool}", logOffDelayMinutes: "${int}", logOffMessage: "string", maxVmsRemoved: "${int}"}}}
    );
  }
}
