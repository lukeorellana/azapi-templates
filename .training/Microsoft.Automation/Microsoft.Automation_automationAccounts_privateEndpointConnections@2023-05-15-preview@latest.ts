import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AutomationAutomationaccountsPrivateendpointconnectionsProps extends IAzAPIBaseProps {

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
