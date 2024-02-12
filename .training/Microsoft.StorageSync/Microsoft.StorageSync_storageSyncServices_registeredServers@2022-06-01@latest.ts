import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StoragesyncStoragesyncservicesRegisteredserversProps extends IAzAPIBaseProps {

}

/**
 * StoragesyncStoragesyncservicesRegisteredservers resource
 */
export class StoragesyncStoragesyncservicesRegisteredservers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StoragesyncStoragesyncservicesRegisteredserversProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.StorageSync/storageSyncServices/registeredServers@2022-06-01";
  }

  protected getResourceBody(props: StoragesyncStoragesyncservicesRegisteredserversProps): string {
    return JSON.stringify(
        {properties: {agentVersion: "string", clusterId: "string", clusterName: "string", friendlyName: "string", lastHeartBeat: "string", serverCertificate: "string", serverId: "string", serverOSVersion: "string", serverRole: "string"}}
    );
  }
}
