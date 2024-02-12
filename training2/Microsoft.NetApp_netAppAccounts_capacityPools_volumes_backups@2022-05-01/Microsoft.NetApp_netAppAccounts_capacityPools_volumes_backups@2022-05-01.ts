import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetappNetappaccountsCapacitypoolsVolumesBackupsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:volumes;

/**
   * Label for backup
   */
readonly label?: string;

/**
   * Manual backup an already existing snapshot. This will always be false for scheduled backups and true/false for manual backups
   */
readonly useExistingSnapshot?: bool;
}

/**
 * NetappNetappaccountsCapacitypoolsVolumesBackups resource
 */
export class NetappNetappaccountsCapacitypoolsVolumesBackups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetappNetappaccountsCapacitypoolsVolumesBackupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.NetApp/netAppAccounts/capacityPools/volumes/backups@2022-05-01";
  }

  protected getResourceBody(props: NetappNetappaccountsCapacitypoolsVolumesBackupsProps): string {
    return JSON.stringify(
        {properties: {label: "string", useExistingSnapshot: "${bool}"}}
    );
  }
}
