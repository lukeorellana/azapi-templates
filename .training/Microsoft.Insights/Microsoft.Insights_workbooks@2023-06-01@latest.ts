import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface InsightsWorkbooksProps extends IAzAPIBaseProps {

}

/**
 * InsightsWorkbooks resource
 */
export class InsightsWorkbooks extends AzAPIBase {
  constructor(scope: Construct, id: string, props: InsightsWorkbooksProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Insights/workbooks@2023-06-01";
  }

  protected getResourceBody(props: InsightsWorkbooksProps): string {
    return JSON.stringify(
        {properties: {category: "string", description: "string", displayName: "string", serializedData: "string", sourceId: "string", storageUri: "string", tags: ["string"], version: "string"}, kind: "shared", etag: "string"}
    );
  }
}
