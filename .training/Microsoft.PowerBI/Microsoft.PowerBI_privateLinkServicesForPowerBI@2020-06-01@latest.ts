import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface PowerbiPrivatelinkservicesforpowerbiProps extends IAzAPIBaseProps {

}

/**
 * PowerbiPrivatelinkservicesforpowerbi resource
 */
export class PowerbiPrivatelinkservicesforpowerbi extends AzAPIBase {
  constructor(scope: Construct, id: string, props: PowerbiPrivatelinkservicesforpowerbiProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.PowerBI/privateLinkServicesForPowerBI@2020-06-01";
  }

  protected getResourceBody(props: PowerbiPrivatelinkservicesforpowerbiProps): string {
    return JSON.stringify(
        {properties: {privateEndpointConnections: [{properties: {privateEndpoint: {id: "string"}, privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}, provisioningState: "string"}}], tenantId: "string"}}
    );
  }
}
