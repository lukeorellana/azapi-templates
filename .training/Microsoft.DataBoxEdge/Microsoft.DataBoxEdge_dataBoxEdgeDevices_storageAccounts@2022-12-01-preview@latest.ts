import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DataboxedgeDataboxedgedevicesStorageaccountsProps extends IAzAPIBaseProps {

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
