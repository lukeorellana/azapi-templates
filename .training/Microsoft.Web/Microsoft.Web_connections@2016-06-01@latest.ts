import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebConnectionsProps extends IAzAPIBaseProps {

}

/**
 * WebConnections resource
 */
export class WebConnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebConnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/connections@2016-06-01";
  }

  protected getResourceBody(props: WebConnectionsProps): string {
    return JSON.stringify(
        {properties: {api: {brandColor: "string", description: "string", displayName: "string", iconUri: "string", id: "string", name: "string", type: "string"}, changedTime: "string", createdTime: "string", customParameterValues: {}, displayName: "string", nonSecretParameterValues: {}, parameterValues: {}, statuses: [{error: {etag: "string", location: "string", properties: {code: "string", message: "string"}, tags: {}}, status: "string", target: "string"}], testLinks: [{method: "string", requestUri: "string"}]}, etag: "string"}
    );
  }
}
