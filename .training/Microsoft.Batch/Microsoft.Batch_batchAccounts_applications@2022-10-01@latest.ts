import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface BatchBatchaccountsApplicationsProps extends IAzAPIBaseProps {

}

/**
 * BatchBatchaccountsApplications resource
 */
export class BatchBatchaccountsApplications extends AzAPIBase {
  constructor(scope: Construct, id: string, props: BatchBatchaccountsApplicationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Batch/batchAccounts/applications@2022-10-01";
  }

  protected getResourceBody(props: BatchBatchaccountsApplicationsProps): string {
    return JSON.stringify(
        {properties: {allowUpdates: "${bool}", defaultVersion: "string", displayName: "string"}}
    );
  }
}
