import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetappNetappaccountsCapacitypoolsProps extends IAzAPIBaseProps {

}

/**
 * NetappNetappaccountsCapacitypools resource
 */
export class NetappNetappaccountsCapacitypools extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetappNetappaccountsCapacitypoolsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.NetApp/netAppAccounts/capacityPools@2022-05-01";
  }

  protected getResourceBody(props: NetappNetappaccountsCapacitypoolsProps): string {
    return JSON.stringify(
        {properties: {coolAccess: "${bool}", encryptionType: "string", qosType: "string", serviceLevel: "string", size: "${int}"}}
    );
  }
}
