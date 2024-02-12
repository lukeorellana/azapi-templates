import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DataboxedgeDataboxedgedevicesStorageaccountsContainersProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:storageAccounts;

/**
   * DataFormat for Container
   */
readonly dataFormat: 'AzureFile''BlockBlob''PageBlob';
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
