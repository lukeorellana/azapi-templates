import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface LabservicesLabsUsersProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:labs;

/**
   * The amount of usage quota time the user gets in addition to the lab usage quota.
   */
readonly additionalUsageQuota?: string;

/**
   * Email address of the user.
   */
readonly email: string;
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
