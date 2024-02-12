import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityinsightsCasesRelationsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:cases;

/**
   * ETag for relation
   */
readonly etag?: string;

/**
   * Name of relation
   */
readonly relationName?: string;

/**
   * Relation source node
   */
readonly sourceRelationNode?: RelationNode;

/**
   * Relation target node
   */
readonly targetRelationNode?: RelationNode;

/**
   * Etag for relation node
   */
readonly etag?: string;

/**
   * Additional set of properties
   */
readonly relationAdditionalProperties?: object;

/**
   * Relation Node Id
   */
readonly relationNodeId?: string;
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
