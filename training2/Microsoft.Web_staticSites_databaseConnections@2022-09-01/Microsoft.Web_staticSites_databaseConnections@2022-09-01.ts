import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebStaticsitesDatabaseconnectionsProps extends IAzAPIBaseProps {
/**
   * Kind of resource.
   */
readonly kind?: string;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:staticSites;

/**
   * If present, the identity is used in conjunction with connection string to connect to the database. Use of the system-assigned managed identity is indicated with the string 'SystemAssigned', while use of a user-assigned managed identity is indicated with the resource id of the managed identity resource.
   */
readonly connectionIdentity?: string;

/**
   * The connection string to use to connect to the database.
   */
readonly connectionString?: string;

/**
   * The region of the database resource.
   */
readonly region: string;

/**
   * The resource id of the database.
   */
readonly resourceId: string;
}

/**
 * WebStaticsitesDatabaseconnections resource
 */
export class WebStaticsitesDatabaseconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebStaticsitesDatabaseconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/staticSites/databaseConnections@2022-09-01";
  }

  protected getResourceBody(props: WebStaticsitesDatabaseconnectionsProps): string {
    return JSON.stringify(
        {properties: {connectionIdentity: "string", connectionString: "string", region: "string", resourceId: "string"}, kind: "string"}
    );
  }
}
