import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetappNetappaccountsCapacitypoolsVolumesVolumequotarulesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:volumes;

/**
   * Size of quota
   */
readonly quotaSizeInKiBs?: number;

/**
   * UserID/GroupID/SID based on the quota target type. UserID and groupID can be found by running âidâ or âgetentâ command for the user or group and SID can be found by running {wmic useraccount where name='user-name' get sid}
   */
readonly quotaTarget?: string;

/**
   * Type of quota
   */
readonly quotaType?: 'DefaultGroupQuota''DefaultUserQuota''IndividualGroupQuota''IndividualUserQuota';
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
