import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface InsightsWorkbooktemplatesProps extends IAzAPIBaseProps {

}

/**
 * InsightsWorkbooktemplates resource
 */
export class InsightsWorkbooktemplates extends AzAPIBase {
  constructor(scope: Construct, id: string, props: InsightsWorkbooktemplatesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Insights/workbooktemplates@2020-11-20";
  }

  protected getResourceBody(props: InsightsWorkbooktemplatesProps): string {
    return JSON.stringify(
        {properties: {author: "string", galleries: [{category: "string", name: "string", order: "${int}", resourceType: "string", type: "string"}], localized: {}, priority: "${int}"}}
    );
  }
}
