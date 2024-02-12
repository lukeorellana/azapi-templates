import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersKeysProps extends IAzAPIBaseProps {

}

/**
 * SqlServersKeys resource
 */
export class SqlServersKeys extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlServersKeysProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/servers/keys@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlServersKeysProps): string {
    return JSON.stringify(
        {properties: {serverKeyType: "string", uri: "string"}}
    );
  }
}
