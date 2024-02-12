import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersJobagentsCredentialsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:jobAgents;

/**
   * The credential password.
   */
readonly password: string;

/**
   * The credential user name.
   */
readonly username: string;
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
