import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * Description of a showback rule.
   */
readonly description?: string;

/**
   * List of authorized assigned scopes.
   */
readonly scopes?: Scope[];

/**
   * The current status of the showback rule.
   */
readonly status?: 'Active''NotActive';

/**
   * Set the object type
   */
readonly ruleType: CostAllocationCustomPrice;

/**
   * The Scope model definition
   */
readonly childScope?: Scope;

/**
   * Scope id
   */
readonly id?: string;

/**
   * Scope type
   */
readonly type?: string;

/**
   * The rule type of the showback rule solution.
   */
readonly ruleType: 'CostAllocation';

/**
   * The CostAllocation properties to validate.
   */
readonly details?: CostAllocationDetails;

/**
   * Cost allocation policy.
   */
readonly policy?: 'Evenly''Fixed''Proportional';

/**
   * The rule type of the showback rule solution.
   */
readonly ruleType: 'CustomPrice';

/**
   * The Custom price properties to validate.
   */
readonly details?: CustomPriceDetails;

/**
   * Array of benefits.
   */
readonly benefits?: String array containing any of:'AHUB''All''None''Reservations''Sum';

/**
   * List of markups.
   */
readonly markups?: Markup[];

/**
   * 
   */
readonly pricesheet?: string;

/**
   * 
   */
readonly percentage?: string;
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
