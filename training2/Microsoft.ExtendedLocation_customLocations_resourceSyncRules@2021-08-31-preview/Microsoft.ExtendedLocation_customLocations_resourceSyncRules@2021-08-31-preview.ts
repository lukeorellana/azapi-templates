import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ExtendedlocationCustomlocationsResourcesyncrulesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:customLocations;

/**
   * Priority represents a priority of the Resource Sync Rule
   */
readonly priority?: number;

/**
   * A label selector is composed of two parts, matchLabels and matchExpressions. The first part, matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The second part, matchExpressions is a list of resource selector requirements. Valid operators include In, NotIn, Exists, and DoesNotExist. The values set must be non-empty in the case of In and NotIn. The values set must be empty in the case of Exists and DoesNotExist. All of the requirements, from both matchLabels and matchExpressions must all be satisfied in order to match.
   */
readonly selector?: ResourceSyncRulePropertiesSelector;

/**
   * For an unmapped custom resource, its labels will be used to find matching resource sync rules. If this resource sync rule is one of the matching rules with highest priority, then the unmapped custom resource will be projected to the target resource group associated with this resource sync rule. The user creating this resource sync rule should have write permissions on the target resource group and this write permission will be validated when creating the resource sync rule.
   */
readonly targetResourceGroup?: string;

/**
   * MatchExpressions is a list of resource selector requirements. Valid operators include In, NotIn, Exists, and DoesNotExist. The values set must be non-empty in the case of In and NotIn. The values set must be empty in the case of Exists and DoesNotExist.
   */
readonly matchExpressions?: MatchExpressionsProperties[];

/**
   * MatchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'.
   */
readonly matchLabels?: object;

/**
   * Key is the label key that the selector applies to.
   */
readonly key?: string;

/**
   * The Operator field represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
   */
readonly operator?: string;

/**
   * The label value
   */
readonly values?: string[];
}

/**
 * ExtendedlocationCustomlocationsResourcesyncrules resource
 */
export class ExtendedlocationCustomlocationsResourcesyncrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ExtendedlocationCustomlocationsResourcesyncrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ExtendedLocation/customLocations/resourceSyncRules@2021-08-31-preview";
  }

  protected getResourceBody(props: ExtendedlocationCustomlocationsResourcesyncrulesProps): string {
    return JSON.stringify(
        {properties: {priority: "${int}", selector: {matchExpressions: [{key: "string", operator: "string", values: ["string"]}], matchLabels: {}}, targetResourceGroup: "string"}}
    );
  }
}
