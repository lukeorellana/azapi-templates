import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DataboxedgeDataboxedgedevicesRolesAddonsProps extends IAzAPIBaseProps {

}

/**
 * DataboxedgeDataboxedgedevicesRolesAddons resource
 */
export class DataboxedgeDataboxedgedevicesRolesAddons extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DataboxedgeDataboxedgedevicesRolesAddonsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles/addons@2022-12-01-preview";
  }

  protected getResourceBody(props: DataboxedgeDataboxedgedevicesRolesAddonsProps): string {
    return JSON.stringify(
        {kind: "string"}
    );
  }
}
