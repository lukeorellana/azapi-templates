import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebConnectiongatewaysProps extends IAzAPIBaseProps {

}

/**
 * WebConnectiongateways resource
 */
export class WebConnectiongateways extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebConnectiongatewaysProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/connectionGateways@2016-06-01";
  }

  protected getResourceBody(props: WebConnectiongatewaysProps): string {
    return JSON.stringify(
        {properties: {backendUri: "string", connectionGatewayInstallation: {id: "string", location: "string", name: "string", type: "string"}, contactInformation: ["string"], description: "string", displayName: "string", machineName: "string"}, etag: "string"}
    );
  }
}
