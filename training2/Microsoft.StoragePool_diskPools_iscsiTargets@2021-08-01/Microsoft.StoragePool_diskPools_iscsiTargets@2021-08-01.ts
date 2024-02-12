import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StoragepoolDiskpoolsIscsitargetsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:diskPools;

/**
   * Azure resource id. Indicates if this resource is managed by another Azure resource.
   */
readonly managedBy?: string;

/**
   * List of Azure resource ids that manage this resource.
   */
readonly managedByExtended?: string[];

/**
   * Mode for Target connectivity.
   */
readonly aclMode: 'Dynamic''Static';

/**
   * List of LUNs to be exposed through iSCSI Target.
   */
readonly luns?: IscsiLun[];

/**
   * Access Control List (ACL) for an iSCSI Target; defines LUN masking policy
   */
readonly staticAcls?: Acl[];

/**
   * iSCSI Target IQN (iSCSI Qualified Name); example: "iqn.2005-03.org.iscsi:server".
   */
readonly targetIqn?: string;

/**
   * Azure Resource ID of the Managed Disk.
   */
readonly managedDiskAzureResourceId: string;

/**
   * iSCSI initiator IQN (iSCSI Qualified Name); example: "iqn.2005-03.org.iscsi:client".
   */
readonly initiatorIqn: string;

/**
   * List of LUN names mapped to the ACL.
   */
readonly mappedLuns: string[];
}

/**
 * StoragepoolDiskpoolsIscsitargets resource
 */
export class StoragepoolDiskpoolsIscsitargets extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StoragepoolDiskpoolsIscsitargetsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.StoragePool/diskPools/iscsiTargets@2021-08-01";
  }

  protected getResourceBody(props: StoragepoolDiskpoolsIscsitargetsProps): string {
    return JSON.stringify(
        {properties: {aclMode: "string", luns: [{managedDiskAzureResourceId: "string", name: "string"}], staticAcls: [{initiatorIqn: "string", mappedLuns: ["string"]}], targetIqn: "string"}, managedBy: "string", managedByExtended: ["string"]}
    );
  }
}
