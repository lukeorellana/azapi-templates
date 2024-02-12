import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CostmanagementCostallocationrulesProps extends IAzAPIBaseProps {
/**
   * Description of a cost allocation rule.
   */
readonly description?: string;

/**
   * Resource information for the cost allocation rule
   */
readonly details: CostAllocationRuleDetails;

/**
   * Status of the rule
   */
readonly status: 'Active''NotActive''Processing';

/**
   * Source resources for cost allocation. At this time, this list can contain no more than one element.
   */
readonly sourceResources?: SourceCostAllocationResource[];

/**
   * Target resources for cost allocation. At this time, this list can contain no more than one element.
   */
readonly targetResources?: TargetCostAllocationResource[];

/**
   * Type of resources contained in this cost allocation rule
   */
readonly resourceType: 'Dimension''Tag';

/**
   * Source Resources for cost allocation. This list cannot contain more than 25 values.
   */
readonly values: string[];

/**
   * Method of cost allocation for the rule
   */
readonly policyType: 'FixedProportion';

/**
   * Type of resources contained in this cost allocation rule
   */
readonly resourceType: 'Dimension''Tag';

/**
   * Target resources for cost allocation. This list cannot contain more than 25 values.
   */
readonly values: CostAllocationProportion[];

/**
   * Percentage of source cost to allocate to this resource. This value can be specified to two decimal places and the total percentage of all resources in this rule must sum to 100.00.
   */
readonly percentage: number;
}

/**
 * CostmanagementCostallocationrules resource
 */
export class CostmanagementCostallocationrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CostmanagementCostallocationrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.CostManagement/costAllocationRules@2020-03-01-preview";
  }

  protected getResourceBody(props: CostmanagementCostallocationrulesProps): string {
    return JSON.stringify(
        {properties: {description: "string", details: {sourceResources: [{name: "string", resourceType: "string", values: ["string"]}], targetResources: [{name: "string", policyType: "FixedProportion", resourceType: "string", values: [{name: "string", percentage: "${int}"}]}]}, status: "string"}}
    );
  }
}
