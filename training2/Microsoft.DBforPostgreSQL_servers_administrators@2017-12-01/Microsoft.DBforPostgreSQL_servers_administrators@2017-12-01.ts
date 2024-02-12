import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbforpostgresqlServersAdministratorsProps extends IAzAPIBaseProps {
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
readonly sid: string;

/**
   * The server Active Directory Administrator tenant id.
   */
readonly tenantId: string;
}

/**
 * DbforpostgresqlServersAdministrators resource
 */
export class DbforpostgresqlServersAdministrators extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbforpostgresqlServersAdministratorsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforPostgreSQL/servers/administrators@2017-12-01";
  }

  protected getResourceBody(props: DbforpostgresqlServersAdministratorsProps): string {
    return JSON.stringify(
        {properties: {administratorType: "ActiveDirectory", login: "string", sid: "string", tenantId: "string"}}
    );
  }
}
