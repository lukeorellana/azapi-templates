import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ContainerserviceManagedclustersMaintenanceconfigurationsProps extends IAzAPIBaseProps {

}

/**
 * ContainerserviceManagedclustersMaintenanceconfigurations resource
 */
export class ContainerserviceManagedclustersMaintenanceconfigurations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ContainerserviceManagedclustersMaintenanceconfigurationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ContainerService/managedClusters/maintenanceConfigurations@2023-11-01";
  }

  protected getResourceBody(props: ContainerserviceManagedclustersMaintenanceconfigurationsProps): string {
    return JSON.stringify(
        {properties: {maintenanceWindow: {durationHours: "${int}", notAllowedDates: [{end: "string", start: "string"}], schedule: {absoluteMonthly: {dayOfMonth: "${int}", intervalMonths: "${int}"}, daily: {intervalDays: "${int}"}, relativeMonthly: {dayOfWeek: "string", intervalMonths: "${int}", weekIndex: "string"}, weekly: {dayOfWeek: "string", intervalWeeks: "${int}"}}, startDate: "string", startTime: "string", utcOffset: "string"}, notAllowedTime: [{end: "string", start: "string"}], timeInWeek: [{day: "string", hourSlots: ["${int}"]}]}}
    );
  }
}
