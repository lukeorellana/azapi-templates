import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebSitesPubliccertificatesProps extends IAzAPIBaseProps {

}

/**
 * WebSitesPubliccertificates resource
 */
export class WebSitesPubliccertificates extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebSitesPubliccertificatesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/sites/publicCertificates@2022-09-01";
  }

  protected getResourceBody(props: WebSitesPubliccertificatesProps): string {
    return JSON.stringify(
        {properties: {publicCertificateLocation: "string"}, kind: "string"}
    );
  }
}
