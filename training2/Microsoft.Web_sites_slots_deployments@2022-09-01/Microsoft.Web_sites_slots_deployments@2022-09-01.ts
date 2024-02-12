import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebSitesSlotsDeploymentsProps extends IAzAPIBaseProps {
/**
   * Kind of resource.
   */
readonly kind?: string;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:slots;

/**
   * True if deployment is currently active, false if completed and null if not started.
   */
readonly active?: bool;

/**
   * Who authored the deployment.
   */
readonly author?: string;

/**
   * Author email.
   */
readonly author_email?: string;

/**
   * Who performed the deployment.
   */
readonly deployer?: string;

/**
   * Details on deployment.
   */
readonly details?: string;

/**
   * End time.
   */
readonly end_time?: string;

/**
   * Details about deployment status.
   */
readonly message?: string;

/**
   * Start time.
   */
readonly start_time?: string;

/**
   * Deployment status.
   */
readonly status?: number;
}

/**
 * WebSitesSlotsDeployments resource
 */
export class WebSitesSlotsDeployments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebSitesSlotsDeploymentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/sites/slots/deployments@2022-09-01";
  }

  protected getResourceBody(props: WebSitesSlotsDeploymentsProps): string {
    return JSON.stringify(
        {properties: {active: "${bool}", author: "string", author_email: "string", deployer: "string", details: "string", end_time: "string", message: "string", start_time: "string", status: "${int}"}, kind: "string"}
    );
  }
}
