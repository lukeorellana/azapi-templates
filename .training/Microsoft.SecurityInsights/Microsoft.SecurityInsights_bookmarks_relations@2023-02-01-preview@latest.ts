import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityinsightsBookmarksRelationsProps extends IAzAPIBaseProps {

}

/**
 * SecurityinsightsBookmarksRelations resource
 */
export class SecurityinsightsBookmarksRelations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityinsightsBookmarksRelationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.SecurityInsights/bookmarks/relations@2023-02-01-preview";
  }

  protected getResourceBody(props: SecurityinsightsBookmarksRelationsProps): string {
    return JSON.stringify(
        {properties: {relatedResourceId: "string"}, etag: "string"}
    );
  }
}
