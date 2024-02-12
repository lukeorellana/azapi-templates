import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MaintenanceMaintenanceconfigurationsProps extends IAzAPIBaseProps {

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
