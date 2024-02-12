import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlManagedinstancesDatabasesTransparentdataencryptionProps extends IAzAPIBaseProps {

}

/**
 * SqlManagedinstancesDatabasesTransparentdataencryption resource
 */
export class SqlManagedinstancesDatabasesTransparentdataencryption extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlManagedinstancesDatabasesTransparentdataencryptionProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/managedInstances/databases/transparentDataEncryption@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlManagedinstancesDatabasesTransparentdataencryptionProps): string {
    return JSON.stringify(
        {properties: {state: "string"}}
    );
  }
}
