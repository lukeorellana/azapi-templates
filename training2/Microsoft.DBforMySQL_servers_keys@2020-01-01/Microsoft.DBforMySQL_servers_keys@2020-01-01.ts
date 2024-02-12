import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbformysqlServersKeysProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:servers;

/**
   * The key type like 'AzureKeyVault'.
   */
readonly serverKeyType: 'AzureKeyVault';

/**
   * The URI of the key.
   */
readonly uri?: string;
}

/**
 * DbformysqlServersKeys resource
 */
export class DbformysqlServersKeys extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbformysqlServersKeysProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforMySQL/servers/keys@2020-01-01";
  }

  protected getResourceBody(props: DbformysqlServersKeysProps): string {
    return JSON.stringify(
        {properties: {serverKeyType: "AzureKeyVault", uri: "string"}}
    );
  }
}
