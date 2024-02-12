import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface OperationalinsightsQuerypacksProps extends IAzAPIBaseProps {

}

/**
 * OperationalinsightsQuerypacks resource
 */
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
