import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface EventgridNamespacesCacertificatesProps extends IAzAPIBaseProps {

}

/**
 * EventgridNamespacesCacertificates resource
 */
export class EventgridNamespacesCacertificates extends AzAPIBase {
  constructor(scope: Construct, id: string, props: EventgridNamespacesCacertificatesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.EventGrid/namespaces/caCertificates@2023-12-15-preview";
  }

  protected getResourceBody(props: EventgridNamespacesCacertificatesProps): string {
    return JSON.stringify(
        {properties: {description: "string", encodedCertificate: "string"}}
    );
  }
}
