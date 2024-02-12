import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SignalrserviceSignalrReplicasProps extends IAzAPIBaseProps {

}

/**
 * SignalrserviceSignalrReplicas resource
 */
export class SignalrserviceSignalrReplicas extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SignalrserviceSignalrReplicasProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.SignalRService/signalR/replicas@2023-08-01-preview";
  }

  protected getResourceBody(props: SignalrserviceSignalrReplicasProps): string {
    return JSON.stringify(
        {properties: {regionEndpointEnabled: "string", resourceStopped: "string"}, sku: {capacity: "${int}", name: "string", tier: "string"}}
    );
  }
}
