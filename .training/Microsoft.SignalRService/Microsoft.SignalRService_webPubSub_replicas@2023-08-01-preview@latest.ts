import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SignalrserviceWebpubsubReplicasProps extends IAzAPIBaseProps {

}

/**
 * SignalrserviceWebpubsubReplicas resource
 */
export class SignalrserviceWebpubsubReplicas extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SignalrserviceWebpubsubReplicasProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.SignalRService/webPubSub/replicas@2023-08-01-preview";
  }

  protected getResourceBody(props: SignalrserviceWebpubsubReplicasProps): string {
    return JSON.stringify(
        {properties: {regionEndpointEnabled: "string", resourceStopped: "string"}, sku: {capacity: "${int}", name: "string", tier: "string"}}
    );
  }
}
