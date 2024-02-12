import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface OperationalinsightsQuerypacksQueriesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:queryPacks;

/**
   * Body of the query.
   */
readonly body: string;

/**
   * Description of the query.
   */
readonly description?: string;

/**
   * Unique display name for your query within the Query Pack.
   */
readonly displayName: string;

/**
   * The related metadata items for the function.
   */
readonly related?: LogAnalyticsQueryPackQueryPropertiesRelated;

/**
   * The related categories for the function.
   */
readonly categories?: string[];

/**
   * The related resource types for the function.
   */
readonly resourceTypes?: string[];

/**
   * The related Log Analytics solutions for the function.
   */
readonly solutions?: string[];
}

/**
 * OperationalinsightsQuerypacksQueries resource
 */
export class OperationalinsightsQuerypacksQueries extends AzAPIBase {
  constructor(scope: Construct, id: string, props: OperationalinsightsQuerypacksQueriesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.OperationalInsights/queryPacks/queries@2019-09-01";
  }

  protected getResourceBody(props: OperationalinsightsQuerypacksQueriesProps): string {
    return JSON.stringify(
        {properties: {body: "string", description: "string", displayName: "string", related: {categories: ["string"], resourceTypes: ["string"], solutions: ["string"]}, tags: {}}}
    );
  }
}
