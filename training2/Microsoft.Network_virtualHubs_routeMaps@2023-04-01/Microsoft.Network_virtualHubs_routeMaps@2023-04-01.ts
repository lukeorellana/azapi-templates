import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkVirtualhubsRoutemapsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:virtualHubs;

/**
   * List of connections which have this RoutMap associated for inbound traffic.
   */
readonly associatedInboundConnections?: string[];

/**
   * List of connections which have this RoutMap associated for outbound traffic.
   */
readonly associatedOutboundConnections?: string[];

/**
   * List of RouteMap rules to be applied.
   */
readonly rules?: RouteMapRule[];

/**
   * List of actions which will be applied on a match.
   */
readonly actions?: Action[];

/**
   * List of matching criterion which will be applied to traffic.
   */
readonly matchCriteria?: Criterion[];

/**
   * Next step after rule is evaluated. Current supported behaviors are 'Continue'(to next rule) and 'Terminate'.
   */
readonly nextStepIfMatched?: 'Continue''Terminate''Unknown';

/**
   * List of parameters relevant to the action.For instance if type is drop then parameters has list of prefixes to be dropped.If type is add, parameters would have list of ASN numbers to be added
   */
readonly parameters?: Parameter[];

/**
   * Type of action to be taken. Supported types are 'Remove', 'Add', 'Replace', and 'Drop.'
   */
readonly type?: 'Add''Drop''Remove''Replace''Unknown';

/**
   * List of AS paths.
   */
readonly asPath?: string[];

/**
   * List of BGP communities.
   */
readonly community?: string[];

/**
   * List of route prefixes.
   */
readonly routePrefix?: string[];

/**
   * List of AS paths which this criteria matches.
   */
readonly asPath?: string[];

/**
   * List of BGP communities which this criteria matches.
   */
readonly community?: string[];

/**
   * Match condition to apply RouteMap rules.
   */
readonly matchCondition?: 'Contains''Equals''NotContains''NotEquals''Unknown';

/**
   * List of route prefixes which this criteria matches.
   */
readonly routePrefix?: string[];
}

/**
 * NetworkVirtualhubsRoutemaps resource
 */
export class NetworkVirtualhubsRoutemaps extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkVirtualhubsRoutemapsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/virtualHubs/routeMaps@2023-04-01";
  }

  protected getResourceBody(props: NetworkVirtualhubsRoutemapsProps): string {
    return JSON.stringify(
        {properties: {associatedInboundConnections: ["string"], associatedOutboundConnections: ["string"], rules: [{actions: [{parameters: [{asPath: ["string"], community: ["string"], routePrefix: ["string"]}], type: "string"}], matchCriteria: [{asPath: ["string"], community: ["string"], matchCondition: "string", routePrefix: ["string"]}], name: "string", nextStepIfMatched: "string"}]}}
    );
  }
}
