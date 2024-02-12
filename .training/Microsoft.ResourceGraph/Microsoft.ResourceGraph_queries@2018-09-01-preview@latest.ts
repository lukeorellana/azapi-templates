import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ResourcegraphQueriesProps extends IAzAPIBaseProps {

}

/**
 * ResourcegraphQueries resource
 */
export class ResourcegraphQueries extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ResourcegraphQueriesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ResourceGraph/queries@2018-09-01-preview";
  }

  protected getResourceBody(props: ResourcegraphQueriesProps): string {
    return JSON.stringify(
        {properties: {description: "string", query: "string"}, etag: "string"}
    );
  }
}
