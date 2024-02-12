import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityinsightsCasesRelationsProps extends IAzAPIBaseProps {

}

/**
 * SecurityinsightsCasesRelations resource
 */
export class SecurityinsightsCasesRelations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityinsightsCasesRelationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.SecurityInsights/cases/relations@2019-01-01-preview";
  }

  protected getResourceBody(props: SecurityinsightsCasesRelationsProps): string {
    return JSON.stringify(
        {properties: {relationName: "string", sourceRelationNode: {etag: "string", relationAdditionalProperties: {}, relationNodeId: "string"}, targetRelationNode: {etag: "string", relationAdditionalProperties: {}, relationNodeId: "string"}}, etag: "string"}
    );
  }
}
