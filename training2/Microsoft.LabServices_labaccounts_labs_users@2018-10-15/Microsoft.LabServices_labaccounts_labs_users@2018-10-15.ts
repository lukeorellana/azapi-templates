import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface LabservicesLabaccountsLabsUsersProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:labs;

/**
   * The provisioning status of the resource.
   */
readonly provisioningState?: string;

/**
   * The unique immutable identifier of a resource (Guid).
   */
readonly uniqueIdentifier?: string;
}

/**
 * LabservicesLabaccountsLabsUsers resource
 */
export class LabservicesLabaccountsLabsUsers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: LabservicesLabaccountsLabsUsersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.LabServices/labaccounts/labs/users@2018-10-15";
  }

  protected getResourceBody(props: LabservicesLabaccountsLabsUsersProps): string {
    return JSON.stringify(
        {properties: {provisioningState: "string", uniqueIdentifier: "string"}}
    );
  }
}
