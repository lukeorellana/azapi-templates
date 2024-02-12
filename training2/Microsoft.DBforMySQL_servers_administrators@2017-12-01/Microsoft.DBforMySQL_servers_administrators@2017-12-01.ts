import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbformysqlServersAdministratorsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:servers;

/**
   * The type of administrator.
   */
readonly administratorType: 'ActiveDirectory';

/**
   * The server administrator login account name.
   */
readonly login: string;

/**
   * The server administrator Sid (Secure ID).
   */
readonly sid: string Constranumbers:Min length = 36Max length = 36Pattern =^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$;

/**
   * The server Active Directory Administrator tenant id.
   */
readonly tenantId: string Constranumbers:Min length = 36Max length = 36Pattern =^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$;
}

/**
 * DbformysqlServersAdministrators resource
 */
export class DbformysqlServersAdministrators extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbformysqlServersAdministratorsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforMySQL/servers/administrators@2017-12-01";
  }

  protected getResourceBody(props: DbformysqlServersAdministratorsProps): string {
    return JSON.stringify(
        {properties: {administratorType: "ActiveDirectory", login: "string", sid: "string", tenantId: "string"}}
    );
  }
}
