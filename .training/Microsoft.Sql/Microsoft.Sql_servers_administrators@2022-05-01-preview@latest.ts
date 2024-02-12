import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersAdministratorsProps extends IAzAPIBaseProps {

}

/**
 * SqlServersAdministrators resource
 */
export class SqlServersAdministrators extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlServersAdministratorsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/servers/administrators@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlServersAdministratorsProps): string {
    return JSON.stringify(
        {properties: {administratorType: "ActiveDirectory", login: "string", sid: "string", tenantId: "string"}}
    );
  }
}
