import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SignalrserviceSignalrSharedprivatelinkresourcesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:signalR;

/**
   * The group id from the provider of resource the shared private link resource is for
   */
readonly groupId: string;

/**
   * The resource id of the resource the shared private link resource is for
   */
readonly privateLinkResourceId: string;

/**
   * The request message for requesting approval of the shared private link resource
   */
readonly requestMessage?: string;
}

/**
 * SignalrserviceSignalrSharedprivatelinkresources resource
 */
export class SignalrserviceSignalrSharedprivatelinkresources extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SignalrserviceSignalrSharedprivatelinkresourcesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.SignalRService/signalR/sharedPrivateLinkResources@2023-08-01-preview";
  }

  protected getResourceBody(props: SignalrserviceSignalrSharedprivatelinkresourcesProps): string {
    return JSON.stringify(
        {properties: {groupId: "string", privateLinkResourceId: "string", requestMessage: "string"}}
    );
  }
}
