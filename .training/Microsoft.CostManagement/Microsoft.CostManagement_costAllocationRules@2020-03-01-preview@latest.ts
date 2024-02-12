import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CostmanagementCostallocationrulesProps extends IAzAPIBaseProps {

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
