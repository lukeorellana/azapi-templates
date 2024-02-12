import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbforpostgresqlServersKeysProps extends IAzAPIBaseProps {

}

/**
 * DbforpostgresqlServersKeys resource
 */
export class DbforpostgresqlServersKeys extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbforpostgresqlServersKeysProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforPostgreSQL/servers/keys@2020-01-01";
  }

  protected getResourceBody(props: DbforpostgresqlServersKeysProps): string {
    return JSON.stringify(
        {properties: {serverKeyType: "AzureKeyVault", uri: "string"}}
    );
  }
}
