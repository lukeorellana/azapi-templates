import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SignalrserviceWebpubsubSharedprivatelinkresourcesProps extends IAzAPIBaseProps {

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
