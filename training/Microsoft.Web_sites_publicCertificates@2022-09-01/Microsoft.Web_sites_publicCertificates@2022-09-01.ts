import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface WebSitesPubliccertificatesProps extends IAzAPIBaseProps {

}

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

// | Name | Description | Value |
// |-|-|-|
// | name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
// | kind | Kind of resource. | string |
// | parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sites |
// | properties | PublicCertificate resource specific properties | PublicCertificateProperties |

// | Name | Description | Value |
// |-|-|-|
// | blob | Public Certificate byte array | For Bicep, you can use theany()function. |
// | publicCertificateLocation | Public Certificate Location | 'CurrentUserMy''LocalMachineMy''Unknown' |
