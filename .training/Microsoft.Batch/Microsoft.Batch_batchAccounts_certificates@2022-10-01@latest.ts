import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface BatchBatchaccountsCertificatesProps extends IAzAPIBaseProps {

}

/**
 * BatchBatchaccountsCertificates resource
 */
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
