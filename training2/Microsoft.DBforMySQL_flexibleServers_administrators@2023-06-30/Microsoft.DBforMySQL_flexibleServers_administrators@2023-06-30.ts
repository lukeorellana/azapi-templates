import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbformysqlFlexibleserversAdministratorsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:flexibleServers;

/**
   * Type of the sever administrator.
   */
readonly administratorType?: 'ActiveDirectory';

/**
   * The resource id of the identity used for AAD Authentication.
   */
readonly identityResourceId?: string;

/**
   * Login name of the server administrator.
   */
readonly login?: string;

/**
   * SID (object ID) of the server administrator.
   */
readonly sid?: string;

/**
   * Tenant ID of the administrator.
   */
readonly tenantId?: string;
}

/**
 * DbformysqlFlexibleserversAdministrators resource
 */
export class DbformysqlFlexibleserversAdministrators extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbformysqlFlexibleserversAdministratorsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforMySQL/flexibleServers/administrators@2023-06-30";
  }

  protected getResourceBody(props: DbformysqlFlexibleserversAdministratorsProps): string {
    return JSON.stringify(
        {properties: {administratorType: "ActiveDirectory", identityResourceId: "string", login: "string", sid: "string", tenantId: "string"}}
    );
  }
}
