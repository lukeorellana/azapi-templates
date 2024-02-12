import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DataboxedgeDataboxedgedevicesStorageaccountsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:dataBoxEdgeDevices;

/**
   * Data policy of the storage Account.
   */
readonly dataPolicy: 'Cloud''Local';

/**
   * Description for the storage Account.
   */
readonly description?: string;

/**
   * Storage Account Credential Id
   */
readonly storageAccountCredentialId?: string;

/**
   * Current status of the storage account
   */
readonly storageAccountStatus?: 'NeedsAttention''OK''Offline''Unknown''Updating';
}

/**
 * DataboxedgeDataboxedgedevicesStorageaccounts resource
 */
export class DataboxedgeDataboxedgedevicesStorageaccounts extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DataboxedgeDataboxedgedevicesStorageaccountsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccounts@2022-12-01-preview";
  }

  protected getResourceBody(props: DataboxedgeDataboxedgedevicesStorageaccountsProps): string {
    return JSON.stringify(
        {properties: {dataPolicy: "string", description: "string", storageAccountCredentialId: "string", storageAccountStatus: "string"}}
    );
  }
}
