import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StoragesyncStoragesyncservicesProps extends IAzAPIBaseProps {

}

/**
 * StoragesyncStoragesyncservices resource
 */
export class StoragesyncStoragesyncservices extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StoragesyncStoragesyncservicesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.StorageSync/storageSyncServices@2022-06-01";
  }

  protected getResourceBody(props: StoragesyncStoragesyncservicesProps): string {
    return JSON.stringify(
        {properties: {incomingTrafficPolicy: "string"}}
    );
  }
}
