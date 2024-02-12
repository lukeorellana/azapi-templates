import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface BatchBatchaccountsApplicationsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:batchAccounts;

/**
   * A value indicating whether packages within the application may be overwritten using the same version string.
   */
readonly allowUpdates?: bool;

/**
   * The package to use if a client requests the application but does not specify a version. This property can only be set to the name of an existing package.
   */
readonly defaultVersion?: string;

/**
   * The display name for the application.
   */
readonly displayName?: string;
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
