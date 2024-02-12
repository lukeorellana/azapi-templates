import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkRoutefiltersRoutefilterrulesProps extends IAzAPIBaseProps {

}

/**
 * NetworkRoutefiltersRoutefilterrules resource
 */
export class NetworkRoutefiltersRoutefilterrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkRoutefiltersRoutefilterrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/routeFilters/routeFilterRules@2023-04-01";
  }

  protected getResourceBody(props: NetworkRoutefiltersRoutefilterrulesProps): string {
    return JSON.stringify(
        {properties: {access: "string", communities: ["string"], routeFilterRuleType: "Community"}}
    );
  }
}
