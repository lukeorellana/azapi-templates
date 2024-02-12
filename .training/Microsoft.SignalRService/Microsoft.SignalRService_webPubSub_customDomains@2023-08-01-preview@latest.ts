import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SignalrserviceWebpubsubCustomdomainsProps extends IAzAPIBaseProps {

}

/**
 * SignalrserviceWebpubsubCustomdomains resource
 */
export class SignalrserviceWebpubsubCustomdomains extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SignalrserviceWebpubsubCustomdomainsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.SignalRService/webPubSub/customDomains@2023-08-01-preview";
  }

  protected getResourceBody(props: SignalrserviceWebpubsubCustomdomainsProps): string {
    return JSON.stringify(
        {properties: {customCertificate: {id: "string"}, domainName: "string"}}
    );
  }
}
