import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface OperationalinsightsWorkspacesStorageinsightconfigsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:workspaces;

/**
   * The ETag of the storage insight.
   */
readonly eTag?: string;

/**
   * The names of the blob containers that the workspace should read
   */
readonly containers?: string[];

/**
   * The storage account connection details
   */
readonly storageAccount: StorageAccount;

/**
   * The names of the Azure tables that the workspace should read
   */
readonly tables?: string[];

/**
   * The Azure Resource Manager ID of the storage account resource.
   */
readonly id: string;

/**
   * The storage account key.
   */
readonly key: string;
}

/**
 * OperationalinsightsWorkspacesStorageinsightconfigs resource
 */
export class OperationalinsightsWorkspacesStorageinsightconfigs extends AzAPIBase {
  constructor(scope: Construct, id: string, props: OperationalinsightsWorkspacesStorageinsightconfigsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.OperationalInsights/workspaces/storageInsightConfigs@2020-08-01";
  }

  protected getResourceBody(props: OperationalinsightsWorkspacesStorageinsightconfigsProps): string {
    return JSON.stringify(
        {properties: {containers: ["string"], storageAccount: {id: "string", key: "string"}, tables: ["string"]}, eTag: "string"}
    );
  }
}
