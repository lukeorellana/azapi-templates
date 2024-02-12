import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface LabservicesLabaccountsLabsUsersProps extends IAzAPIBaseProps {

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
