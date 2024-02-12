import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppManagedenvironmentsStoragesProps extends IAzAPIBaseProps {

}

/**
 * AppManagedenvironmentsStorages resource
 */
export class AppManagedenvironmentsStorages extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppManagedenvironmentsStoragesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.App/managedEnvironments/storages@2023-05-01";
  }

  protected getResourceBody(props: AppManagedenvironmentsStoragesProps): string {
    return JSON.stringify(
        {properties: {azureFile: {accessMode: "string", accountKey: "string", accountName: "string", shareName: "string"}}}
    );
  }
}
