import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkRoutefiltersRoutefilterrulesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:routeFilters;

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
