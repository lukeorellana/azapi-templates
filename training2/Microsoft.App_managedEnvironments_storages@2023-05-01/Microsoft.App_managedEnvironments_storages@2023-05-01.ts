import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppManagedenvironmentsStoragesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:managedEnvironments;

/**
   * Azure file properties
   */
readonly azureFile?: AzureFileProperties;

/**
   * Access mode for storage
   */
readonly accessMode?: 'ReadOnly''ReadWrite';

/**
   * Storage account key for azure file.
   */
readonly accountKey?: string;

/**
   * Storage account name for azure file.
   */
readonly accountName?: string;

/**
   * Azure file share name.
   */
readonly shareName?: string;
}

/**
 * AppManagedenvironmentsStorages resource
 */
export class AppManagedenvironmentsStorages extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppManagedenvironmentsStoragesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.App/managedEnvironments/storages@2023-05-01";
  }

  protected getResourceBody(props: AppManagedenvironmentsStoragesProps): string {
    return JSON.stringify(
        {properties: {azureFile: {accessMode: "string", accountKey: "string", accountName: "string", shareName: "string"}}}
    );
  }
}
