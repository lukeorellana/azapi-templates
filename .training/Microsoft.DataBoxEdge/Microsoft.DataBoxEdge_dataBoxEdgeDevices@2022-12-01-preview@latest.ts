import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DataboxedgeDataboxedgedevicesProps extends IAzAPIBaseProps {

}

/**
 * DataboxedgeDataboxedgedevices resource
 */
export class DataboxedgeDataboxedgedevices extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DataboxedgeDataboxedgedevicesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataBoxEdge/dataBoxEdgeDevices@2022-12-01-preview";
  }

  protected getResourceBody(props: DataboxedgeDataboxedgedevicesProps): string {
    return JSON.stringify(
        {properties: {dataResidency: {type: "string"}}, sku: {name: "string", tier: "Standard"}, etag: "string"}
    );
  }
}
