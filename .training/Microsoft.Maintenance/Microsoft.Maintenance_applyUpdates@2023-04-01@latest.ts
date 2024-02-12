import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MaintenanceApplyupdatesProps extends IAzAPIBaseProps {

}

/**
 * MaintenanceApplyupdates resource
 */
export class MaintenanceApplyupdates extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MaintenanceApplyupdatesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Maintenance/applyUpdates@2023-04-01";
  }

  protected getResourceBody(props: MaintenanceApplyupdatesProps): string {
    return JSON.stringify(
        
    );
  }
}
