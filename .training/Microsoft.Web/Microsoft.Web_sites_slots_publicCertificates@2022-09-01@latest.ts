import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebSitesSlotsPubliccertificatesProps extends IAzAPIBaseProps {

}

/**
 * WebSitesSlotsPubliccertificates resource
 */
export class WebSitesSlotsPubliccertificates extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebSitesSlotsPubliccertificatesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/sites/slots/publicCertificates@2022-09-01";
  }

  protected getResourceBody(props: WebSitesSlotsPubliccertificatesProps): string {
    return JSON.stringify(
        {properties: {publicCertificateLocation: "string"}, kind: "string"}
    );
  }
}
