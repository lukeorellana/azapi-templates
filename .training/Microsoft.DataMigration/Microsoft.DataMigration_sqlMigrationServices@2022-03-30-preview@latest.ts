import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatamigrationSqlmigrationservicesProps extends IAzAPIBaseProps {

}

/**
 * DatamigrationSqlmigrationservices resource
 */
export class DatamigrationSqlmigrationservices extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatamigrationSqlmigrationservicesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataMigration/sqlMigrationServices@2022-03-30-preview";
  }

  protected getResourceBody(props: DatamigrationSqlmigrationservicesProps): string {
    return JSON.stringify(
        {properties: {}}
    );
  }
}
