import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MaintenanceMaintenanceconfigurationsProps extends IAzAPIBaseProps {
/**
   * Gets or sets extensionProperties of the maintenanceConfiguration
   */
readonly extensionProperties?: object;

/**
   * The input parameters to be passed to the patch run operation.
   */
readonly installPatches?: InputPatchConfiguration;

/**
   * Gets or sets maintenanceScope of the configuration
   */
readonly maintenanceScope?: 'Extension''Host''InGuestPatch''OSImage''Resource''SQLDB''SQLManagedInstance';

/**
   * Definition of a MaintenanceWindow
   */
readonly maintenanceWindow?: ManumberenanceWindow;

/**
   * Gets or sets namespace of the resource
   */
readonly namespace?: string;

/**
   * Gets or sets the visibility of the configuration. The default value is 'Custom'
   */
readonly visibility?: 'Custom''Public';

/**
   * Input parameters specific to patching Linux machine. For Windows machines, do not pass this property.
   */
readonly linuxParameters?: InputLinuxParameters;

/**
   * Possible reboot preference as defined by the user based on which it would be decided to reboot the machine or not after the patch operation is completed.
   */
readonly rebootSetting?: 'Always''IfRequired''Never';

/**
   * Input parameters specific to patching a Windows machine. For Linux machines, do not pass this property.
   */
readonly windowsParameters?: InputWindowsParameters;

/**
   * Classification category of patches to be patched
   */
readonly classificationsToInclude?: string[];

/**
   * Package names to be excluded for patching.
   */
readonly packageNameMasksToExclude?: string[];

/**
   * Package names to be included for patching.
   */
readonly packageNameMasksToInclude?: string[];

/**
   * Classification category of patches to be patched
   */
readonly classificationsToInclude?: string[];

/**
   * Exclude patches which need reboot
   */
readonly excludeKbsRequiringReboot?: bool;

/**
   * Windows KBID to be excluded for patching.
   */
readonly kbNumbersToExclude?: string[];

/**
   * Windows KBID to be included for patching.
   */
readonly kbNumbersToInclude?: string[];

/**
   * Duration of the maintenance window in HH:mm format. If not provided, default value will be used based on maintenance scope provided. Example: 05:00.
   */
readonly duration?: string;

/**
   * Effective expiration date of the maintenance window in YYYY-MM-DD hh:mm format. The window will be created in the time zone provided and adjusted to daylight savings according to that time zone. Expiration date must be set to a future date. If not provided, it will be set to the maximum datetime 9999-12-31 23:59:59.
   */
readonly expirationDateTime?: string;

/**
   * Rate at which a Maintenance window is expected to recur. The rate can be expressed as daily, weekly, or monthly schedules. Daily schedule are formatted as recurEvery: [Frequency as integer]['Day(s)']. If no frequency is provided, the default frequency is 1. Daily schedule examples are recurEvery: Day, recurEvery: 3Days.  Weekly schedule are formatted as recurEvery: [Frequency as integer]['Week(s)'] [Optional comma separated list of weekdays Monday-Sunday]. Weekly schedule examples are recurEvery: 3Weeks, recurEvery: Week Saturday,Sunday. Monthly schedules are formatted as [Frequency as integer]['Month(s)'] [Comma separated list of month days] or [Frequency as integer]['Month(s)'] [Week of Month (First, Second, Third, Fourth, Last)] [Weekday Monday-Sunday] [Optional Offset(No. of days)]. Offset value must be between -6 to 6 inclusive. Monthly schedule examples are recurEvery: Month, recurEvery: 2Months, recurEvery: Month day23,day24, recurEvery: Month Last Sunday, recurEvery: Month Fourth Monday, recurEvery: Month Last Sunday Offset-3, recurEvery: Month Third Sunday Offset6.
   */
readonly recurEvery?: string;

/**
   * Effective start date of the maintenance window in YYYY-MM-DD hh:mm format. The start date can be set to either the current date or future date. The window will be created in the time zone provided and adjusted to daylight savings according to that time zone.
   */
readonly startDateTime?: string;

/**
   * Name of the timezone. List of timezones can be obtained by executing [System.TimeZoneInfo]::GetSystemTimeZones() in PowerShell. Example: Pacific Standard Time, UTC, W. Europe Standard Time, Korea Standard Time, Cen. Australia Standard Time.
   */
readonly timeZone?: string;
}

/**
 * MaintenanceMaintenanceconfigurations resource
 */
export class MaintenanceMaintenanceconfigurations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MaintenanceMaintenanceconfigurationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Maintenance/maintenanceConfigurations@2023-04-01";
  }

  protected getResourceBody(props: MaintenanceMaintenanceconfigurationsProps): string {
    return JSON.stringify(
        {properties: {extensionProperties: {}, installPatches: {linuxParameters: {classificationsToInclude: ["string"], packageNameMasksToExclude: ["string"], packageNameMasksToInclude: ["string"]}, rebootSetting: "string", windowsParameters: {classificationsToInclude: ["string"], excludeKbsRequiringReboot: "${bool}", kbNumbersToExclude: ["string"], kbNumbersToInclude: ["string"]}}, maintenanceScope: "string", maintenanceWindow: {duration: "string", expirationDateTime: "string", recurEvery: "string", startDateTime: "string", timeZone: "string"}, namespace: "string", visibility: "string"}}
    );
  }
}
