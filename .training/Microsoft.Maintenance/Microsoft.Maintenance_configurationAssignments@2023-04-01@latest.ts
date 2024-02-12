import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MaintenanceConfigurationassignmentsProps extends IAzAPIBaseProps {

}

/**
 * MaintenanceConfigurationassignments resource
 */
export class MaintenanceConfigurationassignments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MaintenanceConfigurationassignmentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Maintenance/configurationAssignments@2023-04-01";
  }

  protected getResourceBody(props: MaintenanceConfigurationassignmentsProps): string {
    return JSON.stringify(
        {properties: {filter: {locations: ["string"], osTypes: ["string"], resourceGroups: ["string"], resourceTypes: ["string"], tagSettings: {filterOperator: "string", tags: {}}}, maintenanceConfigurationId: "string", resourceId: "string"}}
    );
  }
}
