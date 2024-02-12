import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebSitesPubliccertificatesProps extends IAzAPIBaseProps {
/**
   * Kind of resource.
   */
readonly kind?: string;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:sites;

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
