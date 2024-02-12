import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersJobagentsProps extends IAzAPIBaseProps {
/**
   * The name and tier of the SKU.
   */
readonly sku?: Sku;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:servers;

/**
   * Resource ID of the database to store job metadata in.
   */
readonly databaseId: string;

/**
   * Capacity of the particular SKU.
   */
readonly capacity?: number;

/**
   * If the service has different generations of hardware, for the same SKU, then that can be captured here.
   */
readonly family?: string;

/**
   * Size of the particular SKU
   */
readonly size?: string;

/**
   * The tier or edition of the particular SKU, e.g. Basic, Premium.
   */
readonly tier?: string;
}

/**
 * SqlServersJobagents resource
 */
export class SqlServersJobagents extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlServersJobagentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/servers/jobAgents@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlServersJobagentsProps): string {
    return JSON.stringify(
        {properties: {databaseId: "string"}, sku: {capacity: "${int}", family: "string", name: "string", size: "string", tier: "string"}}
    );
  }
}
