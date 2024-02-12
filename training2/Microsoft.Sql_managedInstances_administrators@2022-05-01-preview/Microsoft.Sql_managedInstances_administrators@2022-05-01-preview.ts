import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlManagedinstancesAdministratorsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:managedInstances;

/**
   * Type of the managed instance administrator.
   */
readonly administratorType: 'ActiveDirectory';

/**
   * Login name of the managed instance administrator.
   */
readonly login: string;

/**
   * SID (object ID) of the managed instance administrator.
   */
readonly sid: string;

/**
   * Tenant ID of the managed instance administrator.
   */
readonly tenantId?: string;
}

/**
 * SqlManagedinstancesAdministrators resource
 */
export class SqlManagedinstancesAdministrators extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlManagedinstancesAdministratorsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/managedInstances/administrators@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlManagedinstancesAdministratorsProps): string {
    return JSON.stringify(
        {properties: {administratorType: "ActiveDirectory", login: "string", sid: "string", tenantId: "string"}}
    );
  }
}
