import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SignalrserviceSignalrReplicasProps extends IAzAPIBaseProps {
/**
   * The billing information of the resource.
   */
readonly sku?: ResourceSku;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:signalR;

/**
   * Enable or disable the regional endpoint. Default to "Enabled".When it's Disabled, new connections will not be routed to this endpoint, however existing connections will not be affected.
   */
readonly regionEndpointEnabled?: string;

/**
   * Stop or start the resource.  Default to "false".When it's true, the data plane of the resource is shutdown.When it's false, the data plane of the resource is started.
   */
readonly resourceStopped?: string;

/**
   * Optional, integer. The unit count of the resource. 1 by default.If present, following values are allowed:Free: 1;Standard: 1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100;Premium:  1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100;
   */
readonly capacity?: number;

/**
   * Optional tier of this particular SKU. 'Standard' or 'Free'.Basicis deprecated, useStandardinstead.
   */
readonly tier?: 'Basic''Free''Premium''Standard';
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
