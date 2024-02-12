import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface BatchBatchaccountsCertificatesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:batchAccounts;

/**
   * The maximum size is 10KB.
   */
readonly data: string;

/**
   * The format of the certificate - either Pfx or Cer. If omitted, the default is Pfx.
   */
readonly format?: 'Cer''Pfx';

/**
   * This must not be specified if the certificate format is Cer.
   */
readonly password?: string;

/**
   * This must match the thumbprint from the name.
   */
readonly thumbprint?: string;

/**
   * This must match the first portion of the certificate name. Currently required to be 'SHA1'.
   */
readonly thumbprintAlgorithm?: string;
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
