import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface DevicesIothubsCertificatesProps extends IAzAPIBaseProps {

}

export class DevicesIothubsCertificates extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DevicesIothubsCertificatesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Devices/IotHubs/certificates@2022-04-30-preview";
  }

  protected getResourceBody(props: DevicesIothubsCertificatesProps): string {
    return JSON.stringify(
      {properties: {certificate: "string", isVerified: "${bool}"}}
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-64Valid characters:Alphanumerics, hyphens, periods, and underscores. |
// | parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:IotHubs |
// | properties | The description of an X509 CA Certificate. | CertificateProperties |

// | Name | Description | Value |
// |-|-|-|
// | certificate | The certificate content | string |
// | isVerified | Determines whether certificate has been verified. | bool |