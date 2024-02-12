import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface OperationalinsightsQuerypacksQueriesProps extends IAzAPIBaseProps {

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
