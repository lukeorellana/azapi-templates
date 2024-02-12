import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbforpostgresqlFlexibleserversAdministratorsProps extends IAzAPIBaseProps {

}

/**
 * DbforpostgresqlFlexibleserversAdministrators resource
 */
export class DbforpostgresqlFlexibleserversAdministrators extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbforpostgresqlFlexibleserversAdministratorsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforPostgreSQL/flexibleServers/administrators@2023-03-01-preview";
  }

  protected getResourceBody(props: DbforpostgresqlFlexibleserversAdministratorsProps): string {
    return JSON.stringify(
        {properties: {principalName: "string", principalType: "string", tenantId: "string"}}
    );
  }
}
