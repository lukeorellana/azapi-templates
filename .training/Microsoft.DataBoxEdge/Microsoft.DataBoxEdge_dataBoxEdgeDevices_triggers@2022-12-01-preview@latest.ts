import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DataboxedgeDataboxedgedevicesTriggersProps extends IAzAPIBaseProps {

}

/**
 * DataboxedgeDataboxedgedevicesTriggers resource
 */
export class DataboxedgeDataboxedgedevicesTriggers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DataboxedgeDataboxedgedevicesTriggersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataBoxEdge/dataBoxEdgeDevices/triggers@2022-12-01-preview";
  }

  protected getResourceBody(props: DataboxedgeDataboxedgedevicesTriggersProps): string {
    return JSON.stringify(
        {kind: "string"}
    );
  }
}
