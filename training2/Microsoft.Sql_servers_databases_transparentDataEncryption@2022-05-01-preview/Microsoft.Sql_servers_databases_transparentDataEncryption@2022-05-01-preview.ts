import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersDatabasesTransparentdataencryptionProps extends IAzAPIBaseProps {
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
 * SqlServersDatabasesTransparentdataencryption resource
 */
export class SqlServersDatabasesTransparentdataencryption extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlServersDatabasesTransparentdataencryptionProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/servers/databases/transparentDataEncryption@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlServersDatabasesTransparentdataencryptionProps): string {
    return JSON.stringify(
        {properties: {state: "string"}}
    );
  }
}
