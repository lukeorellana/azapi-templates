import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface EventgridNamespacesCacertificatesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:namespaces;

/**
   * Description for the CA Certificate resource.
   */
readonly description?: string;

/**
   * Base64 encoded PEM (Privacy Enhanced Mail) format certificate data.
   */
readonly encodedCertificate?: string;
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
