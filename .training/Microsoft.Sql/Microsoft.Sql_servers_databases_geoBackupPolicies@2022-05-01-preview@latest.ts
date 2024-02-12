import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersDatabasesGeobackuppoliciesProps extends IAzAPIBaseProps {

}

/**
 * SqlServersDatabasesGeobackuppolicies resource
 */
export class SqlServersDatabasesGeobackuppolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlServersDatabasesGeobackuppoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/servers/databases/geoBackupPolicies@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlServersDatabasesGeobackuppoliciesProps): string {
    return JSON.stringify(
        {properties: {state: "string"}}
    );
  }
}
