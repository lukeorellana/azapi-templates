import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityinsightsBookmarksRelationsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:bookmarks;

/**
   * Etag of the azure resource
   */
readonly etag?: string;

/**
   * The resource ID of the related resource
   */
readonly relatedResourceId: string;
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
