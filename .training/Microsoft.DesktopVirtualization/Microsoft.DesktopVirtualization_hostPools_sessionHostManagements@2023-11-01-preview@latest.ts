import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DesktopvirtualizationHostpoolsSessionhostmanagementsProps extends IAzAPIBaseProps {

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
