import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ConsumptionBudgetsProps extends IAzAPIBaseProps {

}

/**
 * ConsumptionBudgets resource
 */
export class ConsumptionBudgets extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ConsumptionBudgetsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Consumption/budgets@2021-10-01";
  }

  protected getResourceBody(props: ConsumptionBudgetsProps): string {
    return JSON.stringify(
        {properties: {amount: "${int}", category: "Cost", filter: {and: [{dimensions: {name: "string", operator: "In", values: ["string"]}, tags: {name: "string", operator: "In", values: ["string"]}}], dimensions: {name: "string", operator: "In", values: ["string"]}, tags: {name: "string", operator: "In", values: ["string"]}}, notifications: {}, timeGrain: "string", timePeriod: {endDate: "string", startDate: "string"}}, eTag: "string"}
    );
  }
}
