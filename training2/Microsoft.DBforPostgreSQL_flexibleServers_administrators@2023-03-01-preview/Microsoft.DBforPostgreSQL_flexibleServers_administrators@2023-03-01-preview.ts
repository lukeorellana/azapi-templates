import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbforpostgresqlFlexibleserversAdministratorsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:flexibleServers;

/**
   * Active Directory administrator principal name.
   */
readonly principalName?: string;

/**
   * The principal type used to represent the type of Active Directory Administrator.
   */
readonly principalType?: 'Group''ServicePrincipal''Unknown''User';

/**
   * The tenantId of the Active Directory administrator.
   */
readonly tenantId?: string;
}

/**
 * DbforpostgresqlFlexibleserversAdministrators resource
 */
export class DbforpostgresqlFlexibleserversAdministrators extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbforpostgresqlFlexibleserversAdministratorsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforPostgreSQL/flexibleServers/administrators@2023-03-01-preview";
  }

  protected getResourceBody(props: DbforpostgresqlFlexibleserversAdministratorsProps): string {
    return JSON.stringify(
        {properties: {principalName: "string", principalType: "string", tenantId: "string"}}
    );
  }
}
