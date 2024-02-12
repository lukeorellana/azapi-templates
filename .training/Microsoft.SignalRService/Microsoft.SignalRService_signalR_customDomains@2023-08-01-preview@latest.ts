import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SignalrserviceSignalrCustomdomainsProps extends IAzAPIBaseProps {

}

/**
 * SignalrserviceSignalrCustomdomains resource
 */
export class SignalrserviceSignalrCustomdomains extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SignalrserviceSignalrCustomdomainsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.SignalRService/signalR/customDomains@2023-08-01-preview";
  }

  protected getResourceBody(props: SignalrserviceSignalrCustomdomainsProps): string {
    return JSON.stringify(
        {properties: {customCertificate: {id: "string"}, domainName: "string"}}
    );
  }
}
