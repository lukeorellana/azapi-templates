import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface LabservicesLabaccountsLabsProps extends IAzAPIBaseProps {

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
