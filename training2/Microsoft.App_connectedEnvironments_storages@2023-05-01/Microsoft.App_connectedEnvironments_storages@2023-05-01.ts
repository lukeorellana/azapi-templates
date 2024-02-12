import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppConnectedenvironmentsStoragesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:connectedEnvironments;

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
 * AppConnectedenvironmentsStorages resource
 */
export class AppConnectedenvironmentsStorages extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppConnectedenvironmentsStoragesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.App/connectedEnvironments/storages@2023-05-01";
  }

  protected getResourceBody(props: AppConnectedenvironmentsStoragesProps): string {
    return JSON.stringify(
        {properties: {azureFile: {accessMode: "string", accountKey: "string", accountName: "string", shareName: "string"}}}
    );
  }
}
