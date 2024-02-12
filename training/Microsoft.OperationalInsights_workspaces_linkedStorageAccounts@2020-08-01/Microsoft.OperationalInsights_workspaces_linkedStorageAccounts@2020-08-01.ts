import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface OperationalinsightsWorkspacesLinkedstorageaccountsProps extends IAzAPIBaseProps {

}

export class OperationalinsightsWorkspacesLinkedstorageaccounts extends AzAPIBase {
  constructor(scope: Construct, id: string, props: OperationalinsightsWorkspacesLinkedstorageaccountsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.OperationalInsights/workspaces/linkedStorageAccounts@2020-08-01";
  }

  protected getResourceBody(props: OperationalinsightsWorkspacesLinkedstorageaccountsProps): string {
    return JSON.stringify(
      {properties: {storageAccountIds: ["string"]}}
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
// | parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
// | properties | Linked storage accounts properties. | LinkedStorageAccountsProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | storageAccountIds | Linked storage accounts resources ids. | string[] |
