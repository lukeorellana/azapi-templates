import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface InsightsDatacollectionruleassociationsProps extends IAzAPIBaseProps {

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
