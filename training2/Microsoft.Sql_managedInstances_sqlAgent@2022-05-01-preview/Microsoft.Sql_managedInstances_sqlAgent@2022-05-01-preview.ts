import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlManagedinstancesSqlagentProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:managedInstances;

/**
   * The state of Sql Agent.
   */
readonly state?: 'Disabled''Enabled';
}

/**
 * SqlManagedinstancesSqlagent resource
 */
export class SqlManagedinstancesSqlagent extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlManagedinstancesSqlagentProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/managedInstances/sqlAgent@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlManagedinstancesSqlagentProps): string {
    return JSON.stringify(
        {properties: {state: "string"}}
    );
  }
}
