import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SignalrserviceWebpubsubSharedprivatelinkresourcesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:webPubSub;

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
 * SignalrserviceWebpubsubSharedprivatelinkresources resource
 */
export class SignalrserviceWebpubsubSharedprivatelinkresources extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SignalrserviceWebpubsubSharedprivatelinkresourcesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.SignalRService/webPubSub/sharedPrivateLinkResources@2023-08-01-preview";
  }

  protected getResourceBody(props: SignalrserviceWebpubsubSharedprivatelinkresourcesProps): string {
    return JSON.stringify(
        {properties: {groupId: "string", privateLinkResourceId: "string", requestMessage: "string"}}
    );
  }
}
