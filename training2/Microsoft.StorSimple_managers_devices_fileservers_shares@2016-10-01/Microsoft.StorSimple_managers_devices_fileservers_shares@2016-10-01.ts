import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorsimpleManagersDevicesFileserversSharesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:fileservers;

/**
   * The user/group who will have full permission in this share. Active directory email address. Example: xyz@contoso.com or Contoso\xyz.
   */
readonly adminUser: string;

/**
   * The data policy
   */
readonly dataPolicy: 'Cloud''Invalid''Local''Tiered';

/**
   * Description for file share
   */
readonly description?: string;

/**
   * The monitoring status
   */
readonly monitoringStatus: 'Disabled''Enabled';

/**
   * The total provisioned capacity in Bytes
   */
readonly provisionedCapacityInBytes: number;

/**
   * The Share Status
   */
readonly shareStatus: 'Offline''Online';
}

/**
 * StorsimpleManagersDevicesFileserversShares resource
 */
export class StorsimpleManagersDevicesFileserversShares extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StorsimpleManagersDevicesFileserversSharesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.StorSimple/managers/devices/fileservers/shares@2016-10-01";
  }

  protected getResourceBody(props: StorsimpleManagersDevicesFileserversSharesProps): string {
    return JSON.stringify(
        {properties: {adminUser: "string", dataPolicy: "string", description: "string", monitoringStatus: "string", provisionedCapacityInBytes: "${int}", shareStatus: "string"}}
    );
  }
}
