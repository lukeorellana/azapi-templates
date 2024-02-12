import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkRoutefiltersProps extends IAzAPIBaseProps {
/**
   * Collection of RouteFilterRules contained within a route filter.
   */
readonly rules?: RouteFilterRule[];

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * The access type of the rule.
   */
readonly access: 'Allow''Deny';

/**
   * The collection for bgp community values to filter on. e.g. ['12076:5010','12076:5020'].
   */
readonly communities: string[];

/**
   * The rule type of the rule.
   */
readonly routeFilterRuleType: 'Community';
}

/**
 * NetworkRoutefilters resource
 */
export class NetworkRoutefilters extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkRoutefiltersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/routeFilters@2023-04-01";
  }

  protected getResourceBody(props: NetworkRoutefiltersProps): string {
    return JSON.stringify(
        {properties: {rules: [{id: "string", location: "string", name: "string", properties: {access: "string", communities: ["string"], routeFilterRuleType: "Community"}}]}}
    );
  }
}
