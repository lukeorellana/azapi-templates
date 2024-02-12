import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbformysqlFlexibleserversAdministratorsProps extends IAzAPIBaseProps {

}

/**
 * DbformysqlFlexibleserversAdministrators resource
 */
export class DbformysqlFlexibleserversAdministrators extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbformysqlFlexibleserversAdministratorsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforMySQL/flexibleServers/administrators@2023-06-30";
  }

  protected getResourceBody(props: DbformysqlFlexibleserversAdministratorsProps): string {
    return JSON.stringify(
        {properties: {administratorType: "ActiveDirectory", identityResourceId: "string", login: "string", sid: "string", tenantId: "string"}}
    );
  }
}
