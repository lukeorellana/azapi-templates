import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface BatchBatchaccountsCertificatesProps extends IAzAPIBaseProps {

}

export class BatchBatchaccountsCertificates extends AzAPIBase {
  constructor(scope: Construct, id: string, props: BatchBatchaccountsCertificatesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Batch/batchAccounts/certificates@2022-10-01";
  }

  protected getResourceBody(props: BatchBatchaccountsCertificatesProps): string {
    return JSON.stringify(
      {properties: {data: "string", format: "string", password: "string", thumbprint: "string", thumbprintAlgorithm: "string"}}
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 5-45Valid characters:Alphanumerics, underscores, and hyphens. |
// | parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:batchAccounts |
// | properties | The properties associated with the certificate. | CertificateCreateOrUpdatePropertiesOrCertificateProp... |

// | Name | Description | Value |
// |-|-|-|
// | data | The maximum size is 10KB. | string (required) |
// | format | The format of the certificate - either Pfx or Cer. If omitted, the default is Pfx. | 'Cer''Pfx' |
// | password | This must not be specified if the certificate format is Cer. | string |
// | thumbprint | This must match the thumbprint from the name. | string |
// | thumbprintAlgorithm | This must match the first portion of the certificate name. Currently required to be 'SHA1'. | string |
