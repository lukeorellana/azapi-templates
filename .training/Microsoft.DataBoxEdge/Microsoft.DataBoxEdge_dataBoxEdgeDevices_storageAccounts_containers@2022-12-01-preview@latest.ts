import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DataboxedgeDataboxedgedevicesStorageaccountsContainersProps extends IAzAPIBaseProps {

}

/**
 * DataboxedgeDataboxedgedevicesStorageaccountsContainers resource
 */
export class DataboxedgeDataboxedgedevicesStorageaccountsContainers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DataboxedgeDataboxedgedevicesStorageaccountsContainersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccounts/containers@2022-12-01-preview";
  }

  protected getResourceBody(props: DataboxedgeDataboxedgedevicesStorageaccountsContainersProps): string {
    return JSON.stringify(
        {properties: {dataFormat: "string"}}
    );
  }
}
