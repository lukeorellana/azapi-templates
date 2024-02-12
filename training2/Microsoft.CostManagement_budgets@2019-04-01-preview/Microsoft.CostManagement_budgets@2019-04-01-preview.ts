import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.;

/**
   * eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
   */
readonly eTag?: string;

/**
   * The total amount of cost to track with the budget
   */
readonly amount: number;

/**
   * The category of the budget, whether the budget tracks cost or usage.
   */
readonly category: 'Cost''Usage';

/**
   * May be used to filter budgets.
   */
readonly filter?: ReportConfigFilter;

/**
   * Dictionary of notifications associated with the budget. Budget can have up to five notifications.
   */
readonly notifications?: object;

/**
   * The time covered by a budget. Tracking of the amount will be reset based on the time grain.
   */
readonly timeGrain: 'Annually''Monthly''Quarterly';

/**
   * Has start and end date of the budget. The start date must be first of the month and should be less than the end date. Budget start date must be on or after June 1, 2017. Future start date should not be more than three months. Past start date should  be selected within the timegrain period. There are no restrictions on the end date.
   */
readonly timePeriod: BudgetTimePeriod;

/**
   * The logical "AND" expression. Must have at least 2 items.
   */
readonly and?: ReportConfigFilter[];

/**
   * Has comparison expression for a dimension
   */
readonly dimension?: ReportConfigComparisonExpression;

/**
   * The logical "NOT" expression.
   */
readonly not?: ReportConfigFilter;

/**
   * The logical "OR" expression. Must have at least 2 items.
   */
readonly or?: ReportConfigFilter[];

/**
   * Has comparison expression for a tag
   */
readonly tag?: ReportConfigComparisonExpression;

/**
   * The operator to use for comparison.
   */
readonly operator: 'Contains''In';

/**
   * Array of values to use for comparison
   */
readonly values: string[];

/**
   * The end date for the budget. If not provided, we default this to 10 years from the start date.
   */
readonly endDate?: string;

/**
   * The start date for the budget.
   */
readonly startDate: string;
}

/**
 *  resource
 */
export class  extends AzAPIBase {
  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "";
  }

  protected getResourceBody(props: Props): string {
    return JSON.stringify(
        
    );
  }
}
