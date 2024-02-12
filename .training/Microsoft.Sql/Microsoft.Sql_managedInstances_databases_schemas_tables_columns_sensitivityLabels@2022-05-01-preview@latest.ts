import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlManagedinstancesDatabasesSchemasTablesColumnsSensitivitylabelsProps extends IAzAPIBaseProps {

}

/**
 * SqlManagedinstancesDatabasesSchemasTablesColumnsSensitivitylabels resource
 */
export class SqlManagedinstancesDatabasesSchemasTablesColumnsSensitivitylabels extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlManagedinstancesDatabasesSchemasTablesColumnsSensitivitylabelsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/managedInstances/databases/schemas/tables/columns/sensitivityLabels@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlManagedinstancesDatabasesSchemasTablesColumnsSensitivitylabelsProps): string {
    return JSON.stringify(
        {properties: {informationType: "string", informationTypeId: "string", labelId: "string", labelName: "string", rank: "string"}}
    );
  }
}
