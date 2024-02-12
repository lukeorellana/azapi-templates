import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NotificationhubsNamespacesProps extends IAzAPIBaseProps {

}

/**
 * NotificationhubsNamespaces resource
 */
export class NotificationhubsNamespaces extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NotificationhubsNamespacesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.NotificationHubs/namespaces@2017-04-01";
  }

  protected getResourceBody(props: NotificationhubsNamespacesProps): string {
    return JSON.stringify(
        {properties: {createdAt: "string", critical: "${bool}", dataCenter: "string", enabled: "${bool}", name: "string", namespaceType: "string", provisioningState: "string", region: "string", scaleUnit: "string", serviceBusEndpoint: "string", status: "string", subscriptionId: "string", updatedAt: "string"}, sku: {capacity: "${int}", family: "string", name: "string", size: "string", tier: "string"}}
    );
  }
}
