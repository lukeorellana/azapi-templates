import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AvsPrivatecloudsClustersDatastoresProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:clusters;

/**
   * An iSCSI volume
   */
readonly diskPoolVolume?: DiskPoolVolume;

/**
   * An Azure NetApp Files volume
   */
readonly netAppVolume?: NetAppVolume;

/**
   * Name of the LUN to be used for datastore
   */
readonly lunName: string;

/**
   * Mode that describes whether the LUN has to be mounted as a datastore or attached as a LUN
   */
readonly mountOption?: 'ATTACH''MOUNT';

/**
   * Azure resource ID of the iSCSI target
   */
readonly targetId: string;

/**
   * Azure resource ID of the NetApp volume
   */
readonly id: string;
}

/**
 * AvsPrivatecloudsClustersDatastores resource
 */
export class AvsPrivatecloudsClustersDatastores extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AvsPrivatecloudsClustersDatastoresProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AVS/privateClouds/clusters/datastores@2022-05-01";
  }

  protected getResourceBody(props: AvsPrivatecloudsClustersDatastoresProps): string {
    return JSON.stringify(
        {properties: {diskPoolVolume: {lunName: "string", mountOption: "string", targetId: "string"}, netAppVolume: {id: "string"}}}
    );
  }
}
