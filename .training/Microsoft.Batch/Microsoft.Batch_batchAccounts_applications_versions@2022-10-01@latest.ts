import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface BatchBatchaccountsApplicationsVersionsProps extends IAzAPIBaseProps {

}

/**
 * BatchBatchaccountsApplicationsVersions resource
 */
export class BatchBatchaccountsApplicationsVersions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: BatchBatchaccountsApplicationsVersionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Batch/batchAccounts/applications/versions@2022-10-01";
  }

  protected getResourceBody(props: BatchBatchaccountsApplicationsVersionsProps): string {
    return JSON.stringify(
        {properties: {}}
    );
  }
}
