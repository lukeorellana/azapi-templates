import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlManagedinstancesSqlagentProps extends IAzAPIBaseProps {

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
