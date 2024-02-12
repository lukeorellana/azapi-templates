import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlManagedinstancesAdministratorsProps extends IAzAPIBaseProps {

}

/**
 * SqlManagedinstancesAdministrators resource
 */
export class SqlManagedinstancesAdministrators extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlManagedinstancesAdministratorsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/managedInstances/administrators@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlManagedinstancesAdministratorsProps): string {
    return JSON.stringify(
        {properties: {administratorType: "ActiveDirectory", login: "string", sid: "string", tenantId: "string"}}
    );
  }
}
