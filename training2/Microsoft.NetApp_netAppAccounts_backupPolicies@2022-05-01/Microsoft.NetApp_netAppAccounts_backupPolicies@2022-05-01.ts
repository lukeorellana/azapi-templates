import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetappNetappaccountsBackuppoliciesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:netAppAccounts;

/**
   * Daily backups count to keep
   */
readonly dailyBackupsToKeep?: number;

/**
   * The property to decide policy is enabled or not
   */
readonly enabled?: bool;

/**
   * Monthly backups count to keep
   */
readonly monthlyBackupsToKeep?: number;

/**
   * Weekly backups count to keep
   */
readonly weeklyBackupsToKeep?: number;
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
