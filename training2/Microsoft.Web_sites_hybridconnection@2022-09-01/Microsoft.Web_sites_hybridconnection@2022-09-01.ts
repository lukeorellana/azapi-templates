import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebSitesHybridconnectionProps extends IAzAPIBaseProps {
/**
   * Kind of resource.
   */
readonly kind?: string;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:sites;

/**
   * 
   */
readonly biztalkUri?: string;

/**
   * 
   */
readonly entityConnectionString?: string;

/**
   * 
   */
readonly entityName?: string;

/**
   * 
   */
readonly hostname?: string;

/**
   * 
   */
readonly port?: number;

/**
   * 
   */
readonly resourceConnectionString?: string;

/**
   * 
   */
readonly resourceType?: string;
}

/**
 * WebSitesHybridconnection resource
 */
export class WebSitesHybridconnection extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebSitesHybridconnectionProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/sites/hybridconnection@2022-09-01";
  }

  protected getResourceBody(props: WebSitesHybridconnectionProps): string {
    return JSON.stringify(
        {properties: {biztalkUri: "string", entityConnectionString: "string", entityName: "string", hostname: "string", port: "${int}", resourceConnectionString: "string", resourceType: "string"}, kind: "string"}
    );
  }
}
