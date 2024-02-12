import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbforpostgresqlServersAdministratorsProps extends IAzAPIBaseProps {

}

/**
 * DbforpostgresqlServersAdministrators resource
 */
export class DbforpostgresqlServersAdministrators extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbforpostgresqlServersAdministratorsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforPostgreSQL/servers/administrators@2017-12-01";
  }

  protected getResourceBody(props: DbforpostgresqlServersAdministratorsProps): string {
    return JSON.stringify(
        {properties: {administratorType: "ActiveDirectory", login: "string", sid: "string", tenantId: "string"}}
    );
  }
}
