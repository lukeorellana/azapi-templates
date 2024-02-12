import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityinsightsIncidentsRelationsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:incidents;

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
 * SecurityinsightsIncidentsRelations resource
 */
export class SecurityinsightsIncidentsRelations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityinsightsIncidentsRelationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.SecurityInsights/incidents/relations@2023-02-01-preview";
  }

  protected getResourceBody(props: SecurityinsightsIncidentsRelationsProps): string {
    return JSON.stringify(
        {properties: {relatedResourceId: "string"}, etag: "string"}
    );
  }
}
