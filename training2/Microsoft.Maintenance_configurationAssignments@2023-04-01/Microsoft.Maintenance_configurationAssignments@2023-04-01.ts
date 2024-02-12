import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MaintenanceConfigurationassignmentsProps extends IAzAPIBaseProps {
/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.;

/**
   * Properties of the configuration assignment
   */
readonly filter?: ConfigurationAssignmentFilterProperties;

/**
   * The maintenance configuration Id
   */
readonly maintenanceConfigurationId?: string;

/**
   * The unique resourceId
   */
readonly resourceId?: string;

/**
   * List of locations to scope the query to.
   */
readonly locations?: string[];

/**
   * List of allowed operating systems.
   */
readonly osTypes?: string[];

/**
   * List of allowed resource groups.
   */
readonly resourceGroups?: string[];

/**
   * List of allowed resources.
   */
readonly resourceTypes?: string[];

/**
   * Tag settings for the VM.
   */
readonly tagSettings?: TagSettingsProperties;

/**
   * Filter VMs by Any or All specified tags.
   */
readonly filterOperator?: 'All''Any';
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
