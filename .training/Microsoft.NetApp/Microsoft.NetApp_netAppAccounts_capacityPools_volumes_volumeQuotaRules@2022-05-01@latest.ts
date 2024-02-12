import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetappNetappaccountsCapacitypoolsVolumesVolumequotarulesProps extends IAzAPIBaseProps {

}

/**
 * NetappNetappaccountsCapacitypoolsVolumesVolumequotarules resource
 */
export class NetappNetappaccountsCapacitypoolsVolumesVolumequotarules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetappNetappaccountsCapacitypoolsVolumesVolumequotarulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.NetApp/netAppAccounts/capacityPools/volumes/volumeQuotaRules@2022-05-01";
  }

  protected getResourceBody(props: NetappNetappaccountsCapacitypoolsVolumesVolumequotarulesProps): string {
    return JSON.stringify(
        {properties: {quotaSizeInKiBs: "${int}", quotaTarget: "string", quotaType: "string"}}
    );
  }
}
