import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface InsightsDatacollectionruleassociationsProps extends IAzAPIBaseProps {

}

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

// | Name | Description | Value |
// |-|-|-|
// | name | The resource name | string (required) |
// | scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
// | properties | Resource properties. | DataCollectionRuleAssociationProxyOnlyResourceProper... |

// | Name | Description | Value |
// |-|-|-|
// | dataCollectionEndpointId | The resource ID of the data collection endpoint that is to be associated. | string |
// | dataCollectionRuleId | The resource ID of the data collection rule that is to be associated. | string |
// | description | Description of the association. | string |
