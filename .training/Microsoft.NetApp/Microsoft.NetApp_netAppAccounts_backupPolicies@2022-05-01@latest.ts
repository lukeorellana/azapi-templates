import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetappNetappaccountsBackuppoliciesProps extends IAzAPIBaseProps {

}

/**
 * NetappNetappaccountsBackuppolicies resource
 */
export class NetappNetappaccountsBackuppolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetappNetappaccountsBackuppoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.NetApp/netAppAccounts/backupPolicies@2022-05-01";
  }

  protected getResourceBody(props: NetappNetappaccountsBackuppoliciesProps): string {
    return JSON.stringify(
        {properties: {dailyBackupsToKeep: "${int}", enabled: "${bool}", monthlyBackupsToKeep: "${int}", weeklyBackupsToKeep: "${int}"}}
    );
  }
}
