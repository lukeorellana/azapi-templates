import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface LabservicesLabsUsersProps extends IAzAPIBaseProps {

}

/**
 * LabservicesLabsUsers resource
 */
export class LabservicesLabsUsers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: LabservicesLabsUsersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.LabServices/labs/users@2022-08-01";
  }

  protected getResourceBody(props: LabservicesLabsUsersProps): string {
    return JSON.stringify(
        {properties: {additionalUsageQuota: "string", email: "string"}}
    );
  }
}
