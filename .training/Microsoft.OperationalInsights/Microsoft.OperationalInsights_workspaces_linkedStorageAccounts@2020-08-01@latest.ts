import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface OperationalinsightsWorkspacesLinkedstorageaccountsProps extends IAzAPIBaseProps {

}

/**
 * OperationalinsightsWorkspacesLinkedstorageaccounts resource
 */
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
