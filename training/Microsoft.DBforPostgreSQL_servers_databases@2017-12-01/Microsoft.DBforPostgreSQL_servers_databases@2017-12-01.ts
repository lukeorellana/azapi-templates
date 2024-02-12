import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface DbforpostgresqlServersDatabasesProps extends IAzAPIBaseProps {

}

export class DbforpostgresqlServersDatabases extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbforpostgresqlServersDatabasesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforPostgreSQL/servers/databases@2017-12-01";
  }

  protected getResourceBody(props: DbforpostgresqlServersDatabasesProps): string {
    return JSON.stringify(
      {properties: {charset: "string", collation: "string"}}
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-63Valid characters:Alphanumerics and hyphens. |
// | parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:servers |
// | properties | The properties of a database. | DatabaseProperties |

// | Name | Description | Value |
// |-|-|-|
// | charset | The charset of the database. | string |
// | collation | The collation of the database. | string |
