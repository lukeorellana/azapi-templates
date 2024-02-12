import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AutomationAutomationaccountsPrivateendpointconnectionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:automationAccounts;

/**
   * Gets the groupIds.
   */
readonly groupIds?: string[];

/**
   * Private endpoint which the connection belongs to.
   */
readonly privateEndpoint?: PrivateEndponumberProperty;

/**
   * Connection State of the Private Endpoint Connection.
   */
readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStateProperty;

/**
   * Resource id of the private endpoint.
   */
readonly id?: string;

/**
   * The private link service connection description.
   */
readonly description?: string;

/**
   * The private link service connection status.
   */
readonly status?: string;
}

/**
 * AutomationAutomationaccountsPrivateendpointconnections resource
 */
export class AutomationAutomationaccountsPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AutomationAutomationaccountsPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Automation/automationAccounts/privateEndpointConnections@2023-05-15-preview";
  }

  protected getResourceBody(props: AutomationAutomationaccountsPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {groupIds: ["string"], privateEndpoint: {id: "string"}, privateLinkServiceConnectionState: {description: "string", status: "string"}}}
    );
  }
}
