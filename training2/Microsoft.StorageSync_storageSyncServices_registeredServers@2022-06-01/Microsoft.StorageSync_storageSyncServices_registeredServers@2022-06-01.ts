import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StoragesyncStoragesyncservicesRegisteredserversProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:storageSyncServices;

/**
   * Registered Server Agent Version
   */
readonly agentVersion?: string;

/**
   * Registered Server clusterId
   */
readonly clusterId?: string;

/**
   * Registered Server clusterName
   */
readonly clusterName?: string;

/**
   * Friendly Name
   */
readonly friendlyName?: string;

/**
   * Registered Server last heart beat
   */
readonly lastHeartBeat?: string;

/**
   * Registered Server Certificate
   */
readonly serverCertificate?: string;

/**
   * Registered Server serverId
   */
readonly serverId?: string;

/**
   * Registered Server OS Version
   */
readonly serverOSVersion?: string;

/**
   * Registered Server serverRole
   */
readonly serverRole?: string;
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
