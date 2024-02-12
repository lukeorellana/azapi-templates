import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DataboxedgeDataboxedgedevicesUsersProps extends IAzAPIBaseProps {

}

/**
 * DataboxedgeDataboxedgedevicesUsers resource
 */
export class DataboxedgeDataboxedgedevicesUsers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DataboxedgeDataboxedgedevicesUsersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataBoxEdge/dataBoxEdgeDevices/users@2022-12-01-preview";
  }

  protected getResourceBody(props: DataboxedgeDataboxedgedevicesUsersProps): string {
    return JSON.stringify(
        {properties: {encryptedPassword: {encryptionAlgorithm: "string", encryptionCertThumbprint: "string", value: "string"}, userType: "string"}}
    );
  }
}
