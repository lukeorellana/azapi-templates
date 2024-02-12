import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SignalrserviceSignalrSharedprivatelinkresourcesProps extends IAzAPIBaseProps {

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
