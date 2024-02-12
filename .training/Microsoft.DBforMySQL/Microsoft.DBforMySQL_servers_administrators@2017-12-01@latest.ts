import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbformysqlServersAdministratorsProps extends IAzAPIBaseProps {

}

/**
 * DbformysqlServersAdministrators resource
 */
export class DbformysqlServersAdministrators extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbformysqlServersAdministratorsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforMySQL/servers/administrators@2017-12-01";
  }

  protected getResourceBody(props: DbformysqlServersAdministratorsProps): string {
    return JSON.stringify(
        {properties: {administratorType: "ActiveDirectory", login: "string", sid: "string", tenantId: "string"}}
    );
  }
}
