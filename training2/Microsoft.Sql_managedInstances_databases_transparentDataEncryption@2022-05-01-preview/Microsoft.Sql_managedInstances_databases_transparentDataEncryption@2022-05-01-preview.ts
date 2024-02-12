import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlManagedinstancesDatabasesTransparentdataencryptionProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:databases;

/**
   * Specifies the state of the transparent data encryption.
   */
readonly state: 'Disabled''Enabled';
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
