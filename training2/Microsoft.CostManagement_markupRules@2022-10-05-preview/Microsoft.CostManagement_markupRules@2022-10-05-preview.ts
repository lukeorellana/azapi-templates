import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CostmanagementMarkuprulesProps extends IAzAPIBaseProps {
/**
   * eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
   */
readonly eTag?: string;

/**
   * Customer information for the markup rule.
   */
readonly customerDetails: CustomerMetadata;

/**
   * The description of the markup rule.
   */
readonly description?: string;

/**
   * Ending date of the markup rule.
   */
readonly endDate?: string;

/**
   * The markup percentage of the rule.
   */
readonly percentage: number;

/**
   * Starting date of the markup rule.
   */
readonly startDate: string;

/**
   * Customer billing account id
   */
readonly billingAccountId: string;

/**
   * Customer billing profile id
   */
readonly billingProfileId: string;
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
