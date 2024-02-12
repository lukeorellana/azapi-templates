import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DataboxedgeDataboxedgedevicesRolesProps extends IAzAPIBaseProps {

}

/**
 * DataboxedgeDataboxedgedevicesRoles resource
 */
export class DataboxedgeDataboxedgedevicesRoles extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DataboxedgeDataboxedgedevicesRolesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles@2022-12-01-preview";
  }

  protected getResourceBody(props: DataboxedgeDataboxedgedevicesRolesProps): string {
    return JSON.stringify(
        {kind: "string"}
    );
  }
}
