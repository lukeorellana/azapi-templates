import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebHostingenvironmentsPrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * WebHostingenvironmentsPrivateendpointconnections resource
 */
export class WebHostingenvironmentsPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebHostingenvironmentsPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/hostingEnvironments/privateEndpointConnections@2022-09-01";
  }

  protected getResourceBody(props: WebHostingenvironmentsPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}, kind: "string"}
    );
  }
}
