import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SignalrserviceWebpubsubCustomdomainsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:webPubSub;

/**
   * Reference to a resource.
   */
readonly customCertificate: ResourceReference;

/**
   * The custom domain name.
   */
readonly domainName: string;

/**
   * Resource ID.
   */
readonly id?: string;
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
