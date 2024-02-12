import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebSitesSlotsPubliccertificatesProps extends IAzAPIBaseProps {
/**
   * Kind of resource.
   */
readonly kind?: string;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:slots;

/**
   * Public Certificate byte array
   */
readonly blob?: For Bicep, you can use theany()function.;

/**
   * Public Certificate Location
   */
readonly publicCertificateLocation?: 'CurrentUserMy''LocalMachineMy''Unknown';
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
