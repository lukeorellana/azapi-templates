import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface LabservicesLabsUsersProps extends IAzAPIBaseProps {

}

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

// | Name | Description | Value |
// |-|-|-|
// | name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
// | parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:labs |
// | properties | User resource properties | UserProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | additionalUsageQuota | The amount of usage quota time the user gets in addition to the lab usage quota. | string |
// | email | Email address of the user. | string (required) |
