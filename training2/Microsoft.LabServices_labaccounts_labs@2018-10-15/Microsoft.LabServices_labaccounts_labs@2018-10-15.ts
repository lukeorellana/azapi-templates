import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface LabservicesLabaccountsLabsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:labaccounts;

/**
   * Maximum number of users allowed in the lab.
   */
readonly maxUsersInLab?: number;

/**
   * The provisioning status of the resource.
   */
readonly provisioningState?: string;

/**
   * The unique immutable identifier of a resource (Guid).
   */
readonly uniqueIdentifier?: string;

/**
   * Maximum duration a user can use an environment for in the lab.
   */
readonly usageQuota?: string;

/**
   * Lab user access mode (open to all vs. restricted to those listed on the lab).
   */
readonly userAccessMode?: 'Open''Restricted';
}

/**
 * LabservicesLabaccountsLabs resource
 */
export class LabservicesLabaccountsLabs extends AzAPIBase {
  constructor(scope: Construct, id: string, props: LabservicesLabaccountsLabsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.LabServices/labaccounts/labs@2018-10-15";
  }

  protected getResourceBody(props: LabservicesLabaccountsLabsProps): string {
    return JSON.stringify(
        {properties: {maxUsersInLab: "${int}", provisioningState: "string", uniqueIdentifier: "string", usageQuota: "string", userAccessMode: "string"}}
    );
  }
}
