import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbforpostgresqlServergroupsv2RolesProps extends IAzAPIBaseProps {

}

/**
 * DbforpostgresqlServergroupsv2Roles resource
 */
export class DbforpostgresqlServergroupsv2Roles extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbforpostgresqlServergroupsv2RolesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforPostgreSQL/serverGroupsv2/roles@2022-11-08";
  }

  protected getResourceBody(props: DbforpostgresqlServergroupsv2RolesProps): string {
    return JSON.stringify(
        {properties: {password: "string"}}
    );
  }
}
