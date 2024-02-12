import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbformysqlFlexibleserversKeysProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:flexibleServers;

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
 * DbformysqlFlexibleserversKeys resource
 */
export class DbformysqlFlexibleserversKeys extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbformysqlFlexibleserversKeysProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBForMySql/flexibleServers/keys@2020-07-01-preview";
  }

  protected getResourceBody(props: DbformysqlFlexibleserversKeysProps): string {
    return JSON.stringify(
        {properties: {serverKeyType: "AzureKeyVault", uri: "string"}}
    );
  }
}
