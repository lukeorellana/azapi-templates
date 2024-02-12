import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CostmanagementMarkuprulesProps extends IAzAPIBaseProps {

}

/**
 * CostmanagementMarkuprules resource
 */
export class CostmanagementMarkuprules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CostmanagementMarkuprulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.CostManagement/markupRules@2022-10-05-preview";
  }

  protected getResourceBody(props: CostmanagementMarkuprulesProps): string {
    return JSON.stringify(
        {properties: {customerDetails: {billingAccountId: "string", billingProfileId: "string"}, description: "string", endDate: "string", percentage: "${int}", startDate: "string"}, eTag: "string"}
    );
  }
}
