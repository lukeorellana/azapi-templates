import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbformysqlServersKeysProps extends IAzAPIBaseProps {

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
