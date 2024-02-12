import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersJobagentsCredentialsProps extends IAzAPIBaseProps {

}

/**
 * SqlServersJobagentsCredentials resource
 */
export class SqlServersJobagentsCredentials extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlServersJobagentsCredentialsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/servers/jobAgents/credentials@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlServersJobagentsCredentialsProps): string {
    return JSON.stringify(
        {properties: {password: "string", username: "string"}}
    );
  }
}
