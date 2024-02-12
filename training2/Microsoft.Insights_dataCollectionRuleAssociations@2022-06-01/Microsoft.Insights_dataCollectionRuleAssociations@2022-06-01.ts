import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface InsightsDatacollectionruleassociationsProps extends IAzAPIBaseProps {
/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.;

/**
   * The resource ID of the data collection endpoint that is to be associated.
   */
readonly dataCollectionEndpointId?: string;

/**
   * The resource ID of the data collection rule that is to be associated.
   */
readonly dataCollectionRuleId?: string;

/**
   * Description of the association.
   */
readonly description?: string;
}

/**
 * InsightsDatacollectionruleassociations resource
 */
export class InsightsDatacollectionruleassociations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: InsightsDatacollectionruleassociationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Insights/dataCollectionRuleAssociations@2022-06-01";
  }

  protected getResourceBody(props: InsightsDatacollectionruleassociationsProps): string {
    return JSON.stringify(
        {properties: {dataCollectionEndpointId: "string", dataCollectionRuleId: "string", description: "string"}}
    );
  }
}
