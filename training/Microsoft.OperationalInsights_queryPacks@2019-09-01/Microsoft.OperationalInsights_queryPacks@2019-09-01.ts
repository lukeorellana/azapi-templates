import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface OperationalinsightsQuerypacksProps extends IAzAPIBaseProps {

}

export class OperationalinsightsQuerypacks extends AzAPIBase {
  constructor(scope: Construct, id: string, props: OperationalinsightsQuerypacksProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.OperationalInsights/queryPacks@2019-09-01";
  }

  protected getResourceBody(props: OperationalinsightsQuerypacksProps): string {
    return JSON.stringify(
      {properties: {}}
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource name | string (required) |
// | location | Resource location | string (required) |
// | tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
// | properties | Properties that define a Log Analytics QueryPack resource. | LogAnalyticsQueryPackProperties(required) |
