import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersAdministratorsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:servers;

/**
   * Type of the sever administrator.
   */
readonly administratorType: 'ActiveDirectory';

/**
   * Login name of the server administrator.
   */
readonly login: string;

/**
   * SID (object ID) of the server administrator.
   */
readonly sid: string;

/**
   * Tenant ID of the administrator.
   */
readonly tenantId?: string;
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
