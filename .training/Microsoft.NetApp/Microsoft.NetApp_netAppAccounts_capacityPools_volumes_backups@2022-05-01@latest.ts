import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetappNetappaccountsCapacitypoolsVolumesBackupsProps extends IAzAPIBaseProps {

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
